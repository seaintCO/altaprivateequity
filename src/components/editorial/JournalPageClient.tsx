"use client";

import Link from "next/link";
import SiteHeader from "@/components/home/SiteHeader";
import Footer from "@/components/home/Footer";
import MarketHeatmap from "@/components/editorial/MarketHeatmap";
import { useLanguage } from "@/i18n/LanguageProvider";
import { getPublishedPosts } from "@/content/editorial";
import type { MarketHeadline } from "@/lib/market-news";

export default function JournalPageClient({ headlines }: { headlines: MarketHeadline[] }) {
  const { language } = useLanguage();
  const en = language === "en";
  const posts = getPublishedPosts();

  return (
    <main id="top" className="min-h-screen overflow-x-hidden bg-white text-[#0a0c0e]">
      <SiteHeader />
      <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-6 md:px-8 md:pb-28 md:pt-48">
        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" style={{ backgroundImage: "radial-gradient(rgba(0,200,255,.12) 1px, transparent 1px)", backgroundSize: "30px 30px", maskImage: "linear-gradient(to bottom, black, transparent)" }} />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-600">SEAINT / {en ? "NEWS" : "NOTICIAS"}</p>
              <h1 className="mt-7 text-[58px] font-medium leading-[0.95] tracking-[-0.068em] sm:text-[85px] lg:text-[112px]">{en ? "Ideas worth" : "Ideas para"}<span className="internal-headline-shimmer block w-fit font-light">{en ? "watching." : "explorar."}</span></h1>
            </div>
            <p className="max-w-lg text-base font-light leading-8 text-zinc-500 lg:ml-auto">{en ? "Independent perspectives from our team, market headlines from attributed publishers, and video stories from the field." : "Perspectivas originales de nuestro equipo, noticias de mercado con sus fuentes y videos desde el terreno."}</p>
          </div>
          <div className="mt-12 flex flex-wrap gap-2 border-t border-black/[0.08] pt-6 text-[11px] font-medium uppercase tracking-[0.15em]">
            <a className="rounded-full border border-cyan-200 bg-cyan-50 px-5 py-3 text-cyan-700 transition hover:bg-cyan-100" href="#journal">{en ? "SEAINT articles" : "Artículos SEAINT"}</a>
            <a className="rounded-full border border-black/10 px-5 py-3 text-zinc-600 transition hover:bg-zinc-50" href="#markets">{en ? "Market news" : "Noticias de mercado"}</a>
            <Link className="rounded-full border border-black/10 px-5 py-3 text-zinc-600 transition hover:bg-zinc-50" href="/vlogs">{en ? "Vlogs & films" : "Videos y vlogs"}</Link>
          </div>
        </div>
      </section>

      <section id="journal" className="scroll-mt-28 bg-[#f8fafb] px-5 py-20 sm:px-6 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div><p className="text-[10px] font-medium uppercase tracking-[0.29em] text-cyan-600">01 / {en ? "ORIGINAL PERSPECTIVES" : "PERSPECTIVAS ORIGINALES"}</p><h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] sm:text-6xl">{en ? "SEAINT News." : "Noticias SEAINT."}</h2></div>
            <p className="max-w-sm text-sm font-light leading-7 text-zinc-500">{en ? "Articles here are written and published by SEAINT, not automatically copied from news providers." : "Estos artículos son escritos y publicados por SEAINT, no copiados automáticamente de otros medios."}</p>
          </div>
          {posts.length ? (
            <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">{posts.map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className="group flex min-h-[340px] flex-col rounded-[26px] border border-black/[0.07] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 lg:p-9">
                <p className="text-[10px] font-semibold uppercase tracking-[0.23em] text-cyan-600">{post.category[language]} / {post.date}</p>
                <h3 className="mt-8 text-[28px] font-medium leading-tight tracking-[-0.05em]">{post.title[language]}</h3>
                <p className="mt-4 text-sm font-light leading-7 text-zinc-500">{post.summary[language]}</p>
                <span className="mt-auto pt-10 text-xs font-medium text-cyan-700">{en ? "Read article" : "Leer artículo"} ↗</span>
              </Link>
            ))}</div>
          ) : (
            <div className="mt-12 rounded-[30px] border border-dashed border-cyan-300/60 bg-white/75 px-7 py-16 sm:px-12">
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-cyan-700">{en ? "Our first dispatch" : "Nuestra primera publicación"}</span>
              <h3 className="mt-4 text-3xl font-medium tracking-[-0.05em]">{en ? "The journal is ready for our stories." : "El blog está listo para nuestras historias."}</h3>
              <p className="mt-4 max-w-xl text-sm font-light leading-7 text-zinc-500">{en ? "Company notes, investment perspectives and technology commentary will appear here once approved for publication." : "Las noticias de la empresa, perspectivas de inversión y comentarios de tecnología aparecerán aquí después de su aprobación."}</p>
            </div>
          )}
        </div>
      </section>

      <section id="markets" className="scroll-mt-28 bg-white px-5 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-cyan-600">02 / {en ? "MARKET INTELLIGENCE" : "INTELIGENCIA DE MERCADOS"}</p>
          <div className="mt-4 grid gap-5 lg:grid-cols-[1.25fr_1fr] lg:items-end">
            <h2 className="text-4xl font-medium tracking-[-0.06em] sm:text-6xl">{en ? "The market, in motion." : "El mercado en movimiento."}</h2>
            <p className="text-sm font-light leading-7 text-zinc-500">{en ? "Explore how large U.S. stocks are moving by sector. The heatmap shows third-party market data; independent business headlines remain on the right." : "Explora el desempeño de las grandes acciones estadounidenses por sector. El mapa usa datos externos y los titulares independientes permanecen a la derecha."}</p>
          </div>
          <div className="mt-11 grid items-start gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div>
              <div className="mb-4 flex items-center justify-between"><h3 className="text-lg font-medium tracking-[-0.035em]">{en ? "Market heatmap" : "Mapa de calor del mercado"} <span className="text-zinc-400">/ S&P 500</span></h3><span className="text-[10px] uppercase tracking-[0.15em] text-zinc-400">{en ? "Sector performance" : "Por sector"}</span></div>
              <MarketHeatmap />
            </div>
            <div>
              <div className="mb-4 flex items-center justify-between"><h3 className="text-lg font-medium tracking-[-0.035em]">{en ? "Business headlines" : "Titulares económicos"}</h3><span className="text-[10px] uppercase tracking-[0.15em] text-zinc-400">{en ? "Updated periodically" : "Actualización periódica"}</span></div>
              <div className="overflow-hidden rounded-[24px] border border-black/[0.07] bg-[#f8fafb]">
                {headlines.length ? headlines.map((story, i) => (
                  <a key={story.url} href={story.url} target="_blank" rel="noopener noreferrer" className="group flex gap-5 border-b border-black/[0.07] px-6 py-5 last:border-0 hover:bg-cyan-50/60 sm:px-7">
                    <span className="pt-1 font-mono text-xs text-cyan-600">{String(i + 1).padStart(2,"0")}</span>
                    <span className="min-w-0 flex-1"><span className="block text-[15px] font-medium leading-6 tracking-[-0.02em] text-zinc-800 group-hover:text-cyan-800">{story.title}</span><span className="mt-2 block text-[11px] text-zinc-400">{story.source}{story.published && !Number.isNaN(Date.parse(story.published)) ? ` · ${new Date(story.published).toLocaleDateString(language === "en" ? "en-US" : "es-US", { month:"short", day:"numeric" })}` : ""}</span></span>
                    <span aria-hidden="true" className="text-cyan-600">↗</span>
                  </a>
                )) : <div className="p-8"><h4 className="text-lg font-medium">{en ? "Headlines temporarily unavailable" : "Titulares temporalmente no disponibles"}</h4><p className="mt-3 text-sm leading-7 text-zinc-500">{en ? "The external feed may be offline or limiting requests. Follow the source directly in the meantime." : "Es posible que la fuente externa esté fuera de servicio o limitando solicitudes."}</p><a className="mt-5 inline-block text-sm text-cyan-700" href="https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFZ4ZERBU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen" target="_blank" rel="noopener noreferrer">Google News ↗</a></div>}
              </div>
              <p className="mt-3 text-[11px] leading-5 text-zinc-400">{en ? "Headlines are attributed to their publishers and open the original Google News source. SEAINT does not claim authorship of third-party news." : "Cada titular indica su fuente y abre su publicación original. SEAINT no se atribuye noticias de terceros."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafb] px-5 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-cyan-200/40 bg-white px-7 py-12 shadow-[0_22px_60px_-40px_rgba(0,0,0,0.15)] sm:px-12 md:flex md:items-center md:justify-between md:gap-12">
          <div><p className="text-[10px] font-medium uppercase tracking-[0.3em] text-cyan-600">03 / {en ? "FOUNDER FILMS" : "VIDEOS Y VLOGS"}</p><h2 className="mt-5 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">{en ? "Go behind the work." : "Conoce el trabajo por dentro."}</h2><p className="mt-3 max-w-xl text-sm font-light leading-7 text-zinc-500">{en ? "A dedicated film library for founder conversations, company updates and behind-the-scenes moments." : "Una biblioteca de videos para conversaciones, novedades empresariales y momentos detrás de cámaras."}</p></div>
          <Link href="/vlogs" className="mt-8 inline-flex shrink-0 items-center justify-center rounded-full bg-[#0a0c0e] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-cyan-700 md:mt-0">{en ? "Explore the films ↗" : "Explorar videos ↗"}</Link>
        </div>
      </section>
      <aside aria-label={en ? "ALTA founding team" : "Equipo fundador de ALTA"} className="bg-white px-5 pb-7 pt-2 sm:px-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] pt-6 text-[11px] leading-6 text-zinc-400">
          <p>{en ? "ALTA leadership" : "Dirección de ALTA"} <span className="mx-2 text-zinc-300">/</span> Luis Altamirano, {en ? "Co-Founder & CEO" : "Cofundador y CEO"} <span className="mx-2 text-zinc-300">·</span> Cruz Altamirano, {en ? "Co-Founder" : "Cofundador"}</p>
          <a href="https://www.linkedin.com/in/luis-altamirano-60b4ab3b8" target="_blank" rel="noopener noreferrer me" className="text-cyan-700/80 hover:text-cyan-700 hover:underline">{en ? "Luis Altamirano on LinkedIn ↗" : "Luis Altamirano en LinkedIn ↗"}</a>
        </div>
      </aside>
      <Footer />
    </main>
  );
}
