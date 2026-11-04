import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedPost, getPublishedPosts } from "@/content/editorial";
import ArticlePageClient from "@/components/editorial/ArticlePageClient";

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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: post.title.en,
    description: post.summary.en,
    mainEntityOfPage: url,
    datePublished: `${post.date}T12:00:00Z`,
    inLanguage: "en",
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "SEAINT Enterprises", url: "https://seaintenterprises.com" },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <ArticlePageClient post={post} />
  </>;
}
