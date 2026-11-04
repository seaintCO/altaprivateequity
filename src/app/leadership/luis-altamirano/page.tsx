import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/home/SiteHeader";
import Footer from "@/components/home/Footer";
import {
  SITE_ORIGIN,
  SEAINT_ORG_ID,
  LUIS_PROFILE_URL,
  LUIS_PERSON_ID,
  LUIS_LINKEDIN,
} from "@/lib/seo-identity";

export const metadata: Metadata = {
  title: "Luis Altamirano | Co-Founder, SEAINT Enterprise",
  description:
    "Luis Altamirano is a Nashville-based entrepreneur and co-founder of SEAINT, working across AI-powered software, technology businesses, and investment initiatives.",
  alternates: { canonical: "/leadership/luis-altamirano" },
  openGraph: {
    type: "profile",
    url: LUIS_PROFILE_URL,
    title: "Luis Altamirano | Co-Founder, SEAINT Enterprise",
    description: "Entrepreneur and co-founder of SEAINT, focused on applied AI, software and technology-led company building.",
    siteName: "SEAINT Enterprises",
  },
  twitter: { card: "summary", title: "Luis Altamirano | SEAINT Enterprise" },
  robots: { index: true, follow: true },
};

export default function LuisAltamiranoProfile() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${LUIS_PROFILE_URL}#profile`,
    url: LUIS_PROFILE_URL,
    name: "Luis Altamirano | SEAINT Enterprise",
    isPartOf: { "@type": "WebSite", url: SITE_ORIGIN, name: "SEAINT Enterprises" },
    mainEntity: {
      "@type": "Person",
      "@id": LUIS_PERSON_ID,
      name: "Luis Altamirano",
      alternateName: ["Luis Saint Altamirano", "Luis ‘Saint’ Altamirano"],
      url: LUIS_PROFILE_URL,
      jobTitle: "Co-Founder",
      description:
        "Entrepreneur and co-founder of SEAINT, focused on technology businesses, applied AI and software for traditional industries.",
      worksFor: { "@id": SEAINT_ORG_ID },
      sameAs: [LUIS_LINKEDIN],
    },
  };

  return (
    <main id="top" className="min-h-screen overflow-x-hidden bg-white text-[#0a0c0e]">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <article className="mx-auto max-w-7xl px-5 pb-24 pt-40 sm:px-6 md:px-8 md:pb-32 md:pt-52">
        <div className="grid gap-14 border-b border-black/[0.08] pb-20 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-cyan-600">
              SEAINT ENTERPRISE / LEADERSHIP
            </p>
            <h1 className="mt-8 text-[clamp(3.4rem,8vw,7.8rem)] font-medium leading-[0.96] tracking-[-0.075em]">
              Luis <span className="internal-headline-shimmer block w-fit font-light">Altamirano.</span>
            </h1>
            <p className="mt-7 text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
              Co-Founder, SEAINT Enterprise
            </p>
            <p className="mt-10 max-w-3xl text-xl font-light leading-[1.85] text-zinc-600 sm:text-[23px]">
              Luis Altamirano is an entrepreneur and co-founder of SEAINT, a technology and investment-focused enterprise based in Nashville, Tennessee.
            </p>
            <p className="mt-6 max-w-3xl text-base font-light leading-8 text-zinc-500">
              His work focuses on building technology businesses, developing AI-powered software, and identifying opportunities to modernize traditional industries through practical technology and operating systems.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={LUIS_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer me"
                className="inline-flex items-center rounded-full bg-[#0a0c0e] px-7 py-4 text-xs font-medium tracking-[0.08em] text-white transition hover:bg-cyan-700"
              >
                LinkedIn profile ↗
              </a>
              <Link
                href="/insights"
                className="inline-flex items-center rounded-full border border-black/10 px-7 py-4 text-xs font-medium tracking-[0.08em] text-zinc-800 transition hover:border-cyan-400"
              >
                SEAINT News ↗
              </Link>
            </div>
          </div>
          <div className="flex items-end">
            <div className="relative w-full overflow-hidden rounded-[32px] border border-cyan-200/60 bg-[linear-gradient(145deg,#f8fcfe,#edf4f8_60%,#ffffff)] p-10 sm:min-h-[430px]">
              <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-cyan-300/40" />
              <div aria-hidden="true" className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full border border-cyan-200/60" />
              <div className="relative flex min-h-[300px] flex-col justify-between">
                <span className="text-[10px] uppercase tracking-[0.29em] text-cyan-700">Founder profile / SEAINT</span>
                <div>
                  <span className="block text-[92px] font-light leading-none tracking-[-0.1em] text-[#0a0c0e]" aria-hidden="true">LA.</span>
                  <span className="mt-5 block h-px w-20 bg-cyan-400/70" />
                  <span className="mt-4 block text-[11px] uppercase tracking-[0.2em] text-zinc-500">Technology · Investment · Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="grid gap-10 border-b border-black/[0.08] py-20 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-600">01 / FOCUS</p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] sm:text-5xl">Technology with an operating purpose.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { no: "01", name: "Applied AI", detail: "Developing software that supports practical decisions, information workflows, and business operations." },
              { no: "02", name: "Small-business systems", detail: "Exploring connected tools for communications, customers, scheduling, billing, and everyday administration." },
              { no: "03", name: "Construction technology", detail: "Addressing administrative friction through industry-specific tools and automation workflows." },
              { no: "04", name: "Company building", detail: "Combining product development with long-term interest in technology investment and operating businesses." },
            ].map((item) => (
              <div key={item.no} className="rounded-[23px] border border-black/[0.07] bg-[#f8fafb] p-7">
                <p className="font-mono text-[11px] text-cyan-600">{item.no}</p>
                <h3 className="mt-8 text-xl font-medium tracking-[-0.04em]">{item.name}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-zinc-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-600">02 / FURTHER READING</p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] sm:text-5xl">Explore the work.</h2>
            <p className="mt-5 text-base font-light leading-8 text-zinc-500">
              Learn about SEAINT's business focus and read original company perspectives. Individual articles identify their credited authors separately from third-party news sources.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="text-sm font-medium text-cyan-700 hover:underline">About SEAINT ↗</Link>
            <Link href="/insights" className="text-sm font-medium text-cyan-700 hover:underline">SEAINT News ↗</Link>
            <Link href="/insights/editorial-policy" className="text-sm font-medium text-cyan-700 hover:underline">Editorial standards ↗</Link>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}
