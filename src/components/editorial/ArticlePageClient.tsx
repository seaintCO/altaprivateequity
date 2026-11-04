"use client";

import Link from "next/link";
import SiteHeader from "@/components/home/SiteHeader";
import Footer from "@/components/home/Footer";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { EditorialPost } from "@/content/editorial";
import { isLuisAuthor } from "@/lib/seo-identity";

export default function ArticlePageClient({ post }: { post: EditorialPost }) {
  const { language } = useLanguage();
  const en = language === "en";
  const authorHref = isLuisAuthor(post.author) ? "/leadership/luis-altamirano" : "/insights/editorial-policy";
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-white text-[#0a0c0e]">
      <SiteHeader />
      <article className="mx-auto max-w-5xl px-5 pb-24 pt-36 sm:px-8 md:pt-48">
        <Link href="/insights#journal" className="text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-700 hover:underline">← {en ? "Back to SEAINT News" : "Volver a Noticias SEAINT"}</Link>
        <div className="mt-12 border-b border-black/10 pb-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-600">{post.category[language]} / {post.date}</p>
          <h1 className="mt-6 text-5xl font-medium leading-[1.03] tracking-[-0.06em] sm:text-7xl">{post.title[language]}</h1>
          <p className="mt-8 max-w-3xl text-lg font-light leading-8 text-zinc-500">{post.summary[language]}</p>
          <p className="mt-7 text-xs text-zinc-400">{en ? "By " : "Por "}<Link href={authorHref} className="font-medium text-cyan-700 underline-offset-4 hover:underline">{post.author}</Link></p>
        </div>
        <div className="mx-auto max-w-3xl space-y-14 pt-14">
          {post.sections.map((section, index) => (
            <section key={index}>
              {section.heading && <h2 className="mb-7 text-3xl font-medium tracking-[-0.05em]">{section.heading[language]}</h2>}
              <div className="space-y-6">{section.paragraphs.map((paragraph, i) => <p key={i} className="text-base font-light leading-8 text-zinc-600 sm:text-lg sm:leading-9">{paragraph[language]}</p>)}</div>
            </section>
          ))}
        </div>
      </article>
      <Footer />
    </main>
  );
}
