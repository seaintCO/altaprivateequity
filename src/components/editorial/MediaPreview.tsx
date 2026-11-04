"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function MediaPreview() {
  const { language } = useLanguage();
  const english = language === "en";
  const cards = [
    {
      label: english ? "01 / Perspectives" : "01 / Perspectivas",
      heading: english ? "The Journal" : "Nuestro Blog",
      copy: english
        ? "Original commentary on technology, capital and the companies shaping what comes next."
        : "Análisis propio sobre tecnología, capital y las empresas que construyen el futuro.",
      href: "/insights#journal",
      link: english ? "Explore articles" : "Leer artículos",
    },
    {
      label: english ? "02 / Market intelligence" : "02 / Inteligencia de Mercados",
      heading: english ? "Market News" : "Noticias del Mercado",
      copy: english
        ? "Latest market headlines alongside TradingView's official news feed."
        : "Titulares recientes del mercado junto al canal oficial de noticias de TradingView.",
      href: "/insights#markets",
      link: english ? "Follow the markets" : "Ver mercados",
    },
    {
      label: english ? "03 / On film" : "03 / En Video",
      heading: english ? "Founder Films" : "Vlogs y Videos",
      copy: english
        ? "Conversations, field notes and stories from the people behind the work."
        : "Conversaciones, experiencias e historias de las personas detrás del trabajo.",
      href: "/vlogs",
      link: english ? "Watch films" : "Ver videos",
    },
  ];

  return (
    <section aria-label={english ? "Insights and media" : "Perspectivas y medios"} className="relative overflow-hidden border-t border-black/[0.06] bg-[#f8fafb] px-5 py-24 text-[#0a0c0e] sm:px-6 md:px-8 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-32 h-[460px] w-[460px] rounded-full bg-cyan-300/10 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-7 lg:grid-cols-[1.25fr_1fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-600">SEAINT / {english ? "INSIGHTS & MEDIA" : "PUBLICACIONES"}</p>
            <h2 className="mt-5 max-w-2xl text-[42px] font-medium leading-[0.99] tracking-[-0.055em] sm:text-6xl">{english ? "Thoughts, markets" : "Ideas, mercados"}<span className="internal-headline-shimmer block w-fit font-light">{english ? "& the people behind them." : "y las personas detrás."}</span></h2>
          </div>
          <p className="max-w-lg text-base font-light leading-8 text-zinc-500 lg:ml-auto">{english ? "A new space for ideas and field notes — separate from our investment pages, built for the long view." : "Un espacio nuevo para ideas y perspectivas, separado de nuestras páginas de inversión y pensado para el largo plazo."}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <Link key={card.heading} href={card.href} className="group relative flex min-h-[290px] flex-col rounded-[28px] border border-black/[0.07] bg-white/85 p-7 shadow-[0_18px_50px_-35px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_24px_60px_-36px_rgba(0,170,210,0.25)] sm:p-9">
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-600">{card.label}</span>
              <h3 className="mt-8 text-[29px] font-medium tracking-[-0.05em] text-[#0a0c0e]">{card.heading}</h3>
              <p className="mt-3 max-w-xs text-sm font-light leading-7 text-zinc-500">{card.copy}</p>
              <span className="mt-auto flex items-center gap-3 pt-8 text-[11px] font-medium uppercase tracking-[0.17em] text-cyan-700">{card.link}<span aria-hidden="true" className="transition duration-300 group-hover:translate-x-1">↗</span></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
