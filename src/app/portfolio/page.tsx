"use client";

import UnicornBackground from "@/components/effects/UnicornBackground";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-black text-white">
      <UnicornBackground />

      <div className="pointer-events-none fixed inset-0 z-10 bg-black/10" />

      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 pt-[calc(env(safe-area-inset-top)+18px)] sm:px-8">
        <a
          href="/"
          className="pointer-events-auto rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80 backdrop-blur-xl transition hover:text-white"
        >
          ← Home
        </a>

        <div className="text-right">
          <div className="text-[10px] uppercase tracking-[0.28em] text-cyan-300/70">
            SEAINT
          </div>
          <div className="text-sm font-semibold sm:text-base">
            $240M Valuation
          </div>
        </div>
      </header>

      <section className="relative z-40 flex min-h-[100svh] flex-col items-center justify-center px-5 pb-[calc(env(safe-area-inset-bottom)+96px)] pt-[calc(env(safe-area-inset-top)+96px)] text-center">
        <div className="max-w-3xl">
          <div className="mx-auto mb-5 inline-flex rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-200 backdrop-blur-xl sm:text-xs">
            Portfolio Intelligence
          </div>

          <h1 className="text-4xl font-light leading-[0.92] tracking-tight sm:text-6xl md:text-7xl">
            SEAINT Enterprise
            <span className="block font-semibold text-cyan-300">
              Portfolio Engine
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/60 sm:text-lg">
            AI infrastructure, software, fintech, creative AI, commerce, events,
            and operating systems built under one ecosystem.
          </p>
        </div>

        <a
          href="https://calendly.com/seaintco/new-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="group pointer-events-auto relative mt-10 hidden sm:inline-block"
        >
          <button className="relative z-10 overflow-hidden rounded-xl border border-white/20 bg-neutral-900/70 px-8 py-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl transition duration-200 active:scale-[0.98]">
            <span className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold">
              Book Consultation
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
            <span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-all duration-500 group-hover:left-0 group-hover:right-0" />
          </button>

          <span
            className="pointer-events-none absolute -bottom-3 left-1/2 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.55), rgba(255,255,255,.28) 35%, transparent 70%)",
            }}
          />
        </a>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/35 px-5 pb-[calc(env(safe-area-inset-bottom)+16px)] pt-4 backdrop-blur-xl sm:hidden">
        <a
          href="https://calendly.com/seaintco/new-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-xl border border-white/20 bg-white px-5 py-4 text-center text-sm font-semibold text-black shadow-[0_20px_80px_rgba(0,0,0,0.45)] active:scale-[0.98]"
        >
          Book Consultation →
        </a>
      </div>
    </main>
  );
}
