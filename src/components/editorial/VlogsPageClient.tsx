"use client";

import Link from "next/link";
import SiteHeader from "@/components/home/SiteHeader";
import Footer from "@/components/home/Footer";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Vlog } from "@/content/vlogs";

export default function VlogsPageClient({ videos }: { videos: Vlog[] }) {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-white text-[#0a0c0e]">
      <SiteHeader />
      <section className="relative overflow-hidden px-5 pb-14 pt-36 sm:px-6 md:px-8 md:pt-48">
        <div className="pointer-events-none absolute left-[50%] top-0 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-100/50 blur-[140px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-600">SEAINT / {en ? "FOUNDER FILMS" : "VIDEOS Y VLOGS"}</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <h1 className="text-[56px] font-medium leading-[.98] tracking-[-0.065em] sm:text-[88px] lg:text-[112px]">{en ? "Behind" : "Detrás"}<span className="internal-headline-shimmer block w-fit font-light">{en ? "the work." : "del trabajo."}</span></h1>
            <p className="max-w-md text-base font-light leading-8 text-zinc-500 lg:ml-auto">{en ? "Stories from the people building companies: conversations, visits, ideas and moments in motion." : "Historias de quienes construyen empresas: conversaciones, visitas, ideas y momentos en movimiento."}</p>
          </div>
          <div className="mt-11 flex gap-4 border-t border-black/[0.08] pt-5"><Link href="/insights" className="text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-700">← {en ? "Back to the journal" : "Volver a la revista"}</Link></div>
        </div>
      </section>
      <section className="bg-[#f8fafb] px-5 pb-28 pt-10 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          {videos.length ? (
            <div className="grid gap-7 md:grid-cols-2">
              {videos.map((video, i) => (
                <article key={video.youtubeId} className={`overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-[0_16px_60px_-44px_rgba(0,0,0,.24)] ${i === 0 ? "md:col-span-2" : ""}`}>
                  <div className={`relative w-full bg-[#09131b] ${i === 0 ? "aspect-video" : "aspect-video"}`}>
                    <iframe
                      title={video.title}
                      src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-7 sm:p-9"><p className="text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-600">{en ? "Founder films" : "Videos"} {video.published ? ` / ${video.published.slice(0, 10)}` : ""}</p><h2 className="mt-4 text-2xl font-medium tracking-[-0.04em] sm:text-3xl">{video.title}</h2>{video.description && <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-500">{video.description}</p>}<a href={`https://www.youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-xs font-medium text-cyan-700">{en ? "Watch on YouTube" : "Ver en YouTube"} ↗</a></div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[32px] border border-cyan-200/60 bg-white p-9 sm:p-16">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-2xl text-cyan-700">▶</div>
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-cyan-600">{en ? "Film library" : "Biblioteca de videos"}</p>
              <h2 className="mt-5 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">{en ? "The first episode is coming." : "Pronto llegará nuestro primer video."}</h2>
              <p className="mt-5 max-w-xl text-sm font-light leading-7 text-zinc-500">{en ? "This space is reserved for authentic founder vlogs and interviews. No placeholder videos are shown as published content." : "Este espacio estará dedicado a vlogs y entrevistas auténticos. No presentamos videos de ejemplo como contenido publicado."}</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
