import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedPost, getPublishedPosts } from "@/content/editorial";
import ArticlePageClient from "@/components/editorial/ArticlePageClient";
import { SEAINT_ORG_ID, LUIS_PERSON_ID, LUIS_PROFILE_URL, isLuisAuthor } from "@/lib/seo-identity";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  return post ? {
    title: post.title.en,
    description: post.summary.en,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      url: `https://seaintenterprises.com/insights/${post.slug}`,
      title: post.title.en,
      description: post.summary.en,
      publishedTime: `${post.date}T12:00:00Z`,
      authors: [post.author],
    },
  } : {};
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) notFound();
  const url = `https://seaintenterprises.com/insights/${post.slug}`;
  const authorSchema = isLuisAuthor(post.author)
    ? { "@type": "Person", "@id": LUIS_PERSON_ID, name: "Luis Altamirano", url: LUIS_PROFILE_URL }
    : { "@type": "Organization", "@id": "https://seaintenterprises.com/insights#editorial", name: post.author, url: "https://seaintenterprises.com/insights" };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title.en,
    description: post.summary.en,
    mainEntityOfPage: url,
    datePublished: `${post.date}T12:00:00Z`,
    inLanguage: "en",
    author: authorSchema,
    publisher: { "@id": SEAINT_ORG_ID },
    isPartOf: { "@id": "https://seaintenterprises.com/insights#webpage" },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <ArticlePageClient post={post} />
  </>;
}
