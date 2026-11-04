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
  return post ? { title: post.title.en, description: post.summary.en } : {};
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) notFound();
  return <ArticlePageClient post={post} />;
}
