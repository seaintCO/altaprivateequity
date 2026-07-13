import SiteHeader from "@/components/home/SiteHeader";
import Footer from "@/components/home/Footer";

export default function ContactPage() {
  return (
    <main id="top" className="min-h-screen overflow-x-hidden bg-white text-[#0a0c0e]">
      <SiteHeader />

      <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-36 md:px-8 md:pt-44">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,200,255,0.13) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 88%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 88%)",
          }}
        />

        <div
          className="pointer-events-none absolute left-[70%] top-[45%] h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.5), transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-cyan-600 sm:text-xs">
            Contact SEAINT
          </p>

          <div className="mt-8 grid gap-10 sm:gap-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="max-w-5xl text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] text-black min-[380px]:text-[48px] sm:text-7xl sm:leading-[0.92] sm:tracking-[-0.065em] md:text-[92px] lg:text-[112px]">
                Begin a
                <span className="internal-headline-shimmer block w-fit font-light">
                  conversation.
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pb-3">
              <p className="text-base font-light leading-7 text-zinc-500 md:text-lg md:leading-8">
                Contact SEAINT regarding an acquisition, investment,
                partnership, founder opportunity, portfolio company or
                strategic inquiry.
              </p>
            </div>
          </div>

          <div className="mt-14 border-t border-black/10 sm:mt-20">
            <a
              href="mailto:support@seaintenterprise.com?subject=Business%20Opportunity%20for%20SEAINT"
              className="group grid gap-6 border-b border-black/10 py-10 transition md:grid-cols-12 md:items-center md:py-14"
            >
              <span className="font-mono text-xs text-cyan-600 md:col-span-2">
                01
              </span>

              <div className="md:col-span-4">
                <h2 className="text-3xl font-normal tracking-[-0.04em] text-black">
                  Business Opportunity
                </h2>
              </div>

              <div className="flex items-center justify-between gap-6 md:col-span-6">
                <p className="text-zinc-500">
                  Selling a company, seeking capital or exploring a strategic
                  partnership.
                </p>
                <span className="text-xl text-cyan-600 transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </a>

            <a
              href="mailto:support@seaintenterprise.com?subject=Founder%20Introduction"
              className="group grid gap-6 border-b border-black/10 py-10 transition md:grid-cols-12 md:items-center md:py-14"
            >
              <span className="font-mono text-xs text-cyan-600 md:col-span-2">
                02
              </span>

              <div className="md:col-span-4">
                <h2 className="text-3xl font-normal tracking-[-0.04em] text-black">
                  Founder Introduction
                </h2>
              </div>

              <div className="flex items-center justify-between gap-6 md:col-span-6">
                <p className="text-zinc-500">
                  Introducing a founder-led company, product or investment
                  opportunity.
                </p>
                <span className="text-xl text-cyan-600 transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </a>

            <a
              href="mailto:support@seaintenterprise.com?subject=Strategic%20Partnership"
              className="group grid gap-6 border-b border-black/10 py-10 transition md:grid-cols-12 md:items-center md:py-14"
            >
              <span className="font-mono text-xs text-cyan-600 md:col-span-2">
                03
              </span>

              <div className="md:col-span-4">
                <h2 className="text-3xl font-normal tracking-[-0.04em] text-black">
                  Strategic Partnership
                </h2>
              </div>

              <div className="flex items-center justify-between gap-6 md:col-span-6">
                <p className="text-zinc-500">
                  Technology, distribution, events, media or ecosystem
                  collaboration.
                </p>
                <span className="text-xl text-cyan-600 transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </a>
          </div>

          <div className="grid gap-10 py-20 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-400">
                Direct Contact
              </p>
            </div>

            <div className="lg:col-span-8">
              <a
                href="mailto:support@seaintenterprise.com"
                className="break-all text-2xl font-light tracking-[-0.03em] text-black transition hover:text-cyan-600 sm:text-4xl"
              >
                support@seaintenterprise.com
              </a>

              <p className="mt-6 max-w-xl text-sm font-light leading-7 text-zinc-500">
                Include your name, company, website, industry, approximate
                company size and the type of conversation you are requesting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

