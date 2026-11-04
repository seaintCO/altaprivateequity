import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/home/SiteHeader";
import Footer from "@/components/home/Footer";

export const metadata: Metadata = {
  title: "SEAINT News | Editorial Standards & Sources",
  description:
    "How SEAINT News distinguishes company commentary, credited authors, reported sources and third-party financial headlines.",
  alternates: { canonical: "/insights/editorial-policy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Original company perspectives",
    content:
      "SEAINT News presents perspectives on technology, software, private investment and business operations. An article bearing an editorial-team byline represents organizational commentary; it should not be attributed to an individual unless that person is credited as the author.",
  },
  {
    title: "Third-party market headlines",
    content:
      "Market heatmap data and externally supplied business headlines remain the work of their respective providers and publishers. They are displayed separately from SEAINT's original articles, with provider attribution and links to external sources where available.",
  },
  {
    title: "Transactions, projections and claims",
    content:
      "Company announcements should be based on information authorized for publication. Investment targets, forecasts and long-term goals should be identified as ambitions rather than achieved financial results. Confidential transaction terms should not be inferred from an announcement.",
  },
  {
    title: "Corrections and authorship",
    content:
      "We aim to correct material factual errors and clearly identify article authors. Where an article is personally authored by Luis Altamirano, the byline can link to his official leadership profile. Editorial-team articles retain their organizational byline.",
  },
];

export default function EditorialStandardsPage() {
  return (
    <main id="top" className="min-h-screen overflow-x-hidden bg-white text-[#0a0c0e]">
      <SiteHeader />
      <article className="mx-auto max-w-5xl px-5 pb-24 pt-40 sm:px-8 md:pt-48">
        <Link href="/insights" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700 hover:underline">← SEAINT News</Link>
        <p className="mt-14 text-[11px] uppercase tracking-[0.29em] text-cyan-600">Editorial / Our standards</p>
        <h1 className="mt-5 text-5xl font-medium tracking-[-0.06em] sm:text-7xl">An identifiable source.</h1>
        <p className="mt-8 max-w-3xl text-lg font-light leading-9 text-zinc-500">
          SEAINT News separates original company commentary from third-party market information. These standards describe how we intend to present authorship, source attribution and investment-related claims.
        </p>
        <div className="mt-16 divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {sections.map((section, index) => (
            <section key={section.title} className="grid gap-7 py-11 sm:grid-cols-[74px_1fr]">
              <span className="font-mono text-xs text-cyan-600">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="text-2xl font-medium tracking-[-0.045em]">{section.title}</h2>
                <p className="mt-4 max-w-2xl text-base font-light leading-8 text-zinc-500">{section.content}</p>
              </div>
            </section>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-6 text-sm text-cyan-700">
          <Link href="/leadership/luis-altamirano" className="hover:underline">Luis Altamirano / leadership ↗</Link>
          <Link href="/contact" className="hover:underline">Contact SEAINT ↗</Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
