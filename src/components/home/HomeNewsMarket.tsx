"use client";

import Link from "next/link";
import MarketHeatmap from "@/components/editorial/MarketHeatmap";
import { getPublishedPosts } from "@/content/editorial";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { MarketHeadline } from "@/lib/market-news";

type Props = { headlines: MarketHeadline[] };

/** Homepage-only editorial showcase. Existing homepage components remain unchanged. */
export default function HomeNewsMarket({ headlines }: Props) {
  const { language } = useLanguage();
  const en = language === "en";
  const posts = getPublishedPosts().slice(0, 3);
  const topHeadlines = headlines.slice(0, 4);

  return (
    <section
      id="seaint-news"
      aria-label={en ? "SEAINT News and market intelligence" : "Noticias SEAINT e inteligencia de mercados"}
      className="relative scroll-mt-28 overflow-hidden border-y border-black/[0.05] bg-[#f8fafb] px-5 py-20 text-[#0a0c0e] sm:px-6 md:px-8 md:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-44 h-[550px] w-[550px] rounded-full bg-cyan-200/20 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.31em] text-cyan-600">
              SEAINT / {en ? "MARKET INTELLIGENCE & ORIGINAL REPORTING" : "MERCADOS Y ANÁLISIS ORIGINAL"}
            </p>
            <h2 className="mt-5 text-5xl font-medium tracking-[-0.065em] sm:text-6xl lg:text-7xl">
              SEAINT <span className="internal-headline-shimmer font-light">{en ? "News." : "Noticias."}</span>
            </h2>
          </div>
          <div className="max-w-lg lg:ml-auto">
            <p className="text-sm font-light leading-7 text-zinc-500 sm:text-base">
              {en
                ? "Market movement, independent business headlines and our own perspectives on technology, acquisitions and company building."
                : "Movimiento del mercado, titulares de fuentes independientes y nuestras perspectivas sobre tecnología, adquisiciones y creación de empresas."}
            </p>
            <Link
              href="/insights"
              className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-cyan-700 transition hover:gap-3 hover:text-cyan-900"
            >
              {en ? "Open SEAINT News" : "Abrir Noticias SEAINT"} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid min-w-0 items-start gap-7 xl:grid-cols-[minmax(0,1.13fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-medium tracking-[-0.035em]">
                {en ? "Market heatmap" : "Mapa de calor del mercado"}
                <span className="font-light text-zinc-400"> / S&amp;P 500</span>
              </h3>
              <span className="text-[10px] uppercase tracking-[0.14em] text-zinc-400">
                {en ? "Live third-party data" : "Datos de terceros"}
              </span>
            </div>
            <MarketHeatmap />
            <p className="mt-3 text-[11px] leading-5 text-zinc-400">
              {en
                ? "Heatmap provided by TradingView. Figures are third-party market data, not investment recommendations."
                : "Mapa ofrecido por TradingView. Los datos son de terceros y no constituyen recomendaciones de inversión."}
            </p>
          </div>

          <div className="min-w-0 space-y-8">
            <div>
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-lg font-medium tracking-[-0.035em]">{en ? "From SEAINT" : "Desde SEAINT"}</h3>
                <Link href="/insights#journal" className="shrink-0 text-[11px] font-medium text-cyan-700 hover:underline">
                  {en ? "All articles ↗" : "Todos los artículos ↗"}
                </Link>
              </div>
              <div className="grid gap-3">
                {posts.map((post, index) => (
                  <Link
                    href={`/insights/${post.slug}`}
                    key={post.slug}
                    className="group flex items-start gap-4 rounded-[22px] border border-black/[0.06] bg-white px-6 py-5 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_18px_36px_-32px_rgba(0,125,175,0.45)]"
                  >
                    <span className="pt-1 font-mono text-[11px] text-cyan-600">{String(index + 1).padStart(2, "0")}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-400">
                        {post.category[language]}
                      </span>
                      <span className="mt-2 block text-[17px] font-medium leading-snug tracking-[-0.035em] group-hover:text-cyan-800">
                        {post.title[language]}
                      </span>
                    </span>
                    <span aria-hidden="true" className="pt-1 text-sm text-cyan-600 transition group-hover:translate-x-0.5">↗</span>
                  </Link>
                ))}
                {posts.length === 0 && (
                  <div className="rounded-[22px] border border-black/[0.06] bg-white p-6 text-sm text-zinc-500">
                    {en ? "New original perspectives will appear here." : "Próximamente publicaremos nuevas perspectivas."}
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-lg font-medium tracking-[-0.035em]">{en ? "Business headlines" : "Noticias económicas"}</h3>
                <Link href="/insights#markets" className="shrink-0 text-[11px] font-medium text-cyan-700 hover:underline">
                  {en ? "Market news ↗" : "Más noticias ↗"}
                </Link>
              </div>
              <div className="overflow-hidden rounded-[24px] border border-black/[0.07] bg-white">
                {topHeadlines.length > 0 ? topHeadlines.map((headline, index) => (
                  <a
                    key={headline.url}
                    href={headline.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="group flex items-start gap-4 border-b border-black/[0.055] px-6 py-5 transition hover:bg-cyan-50/60 last:border-b-0"
                  >
                    <span className="pt-0.5 font-mono text-[11px] text-cyan-600">{String(index + 1).padStart(2, "0")}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[14px] font-medium leading-6 tracking-[-0.025em] text-zinc-800 group-hover:text-cyan-800">
                        {headline.title}
                      </span>
                      <span className="mt-1.5 block text-[11px] text-zinc-400">{headline.source}</span>
                    </span>
                    <span aria-hidden="true" className="text-sm text-cyan-600">↗</span>
                  </a>
                )) : (
                  <div className="p-7">
                    <p className="text-sm font-medium text-zinc-700">
                      {en ? "Headlines temporarily unavailable" : "Titulares temporalmente no disponibles"}
                    </p>
                    <p className="mt-2 text-xs leading-6 text-zinc-500">
                      {en ? "The external news feed may be offline. You can still browse the journal and heatmap." : "La fuente externa podría estar fuera de servicio. El blog y el mapa siguen disponibles."}
                    </p>
                  </div>
                )}
              </div>
              <p className="mt-3 text-[11px] leading-5 text-zinc-400">
                {en
                  ? "Independent headlines link to original publishers through Google News. SEAINT does not claim authorship of outside reporting."
                  : "Los titulares externos enlazan a sus medios mediante Google News. SEAINT no se atribuye la autoría de noticias externas."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
