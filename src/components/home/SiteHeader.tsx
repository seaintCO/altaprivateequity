"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/i18n/LanguageProvider";

const navigationGroups = [
  {
    label: { en: "About", es: "Nosotros" },
    links: [
      { label: { en: "Our Firm", es: "Nuestra Firma" }, href: "/about" },
      { label: { en: "Our Approach", es: "Nuestro Enfoque" }, href: "/investment-approach" },
      { label: { en: "Operating Model", es: "Modelo Operativo" }, href: "/operating-model" },
    ],
  },
  {
    label: { en: "Investments", es: "Inversiones" },
    links: [
      { label: { en: "Focus Areas", es: "Áreas de Enfoque" }, href: "/focus-areas" },
      { label: { en: "Portfolio", es: "Portafolio" }, href: "/portfolio" },
    ],
  },
  {
    label: { en: "Partnerships", es: "Alianzas" },
    links: [
      { label: { en: "Business Owners", es: "Propietarios" }, href: "/business-owners" },
      { label: { en: "Founders", es: "Fundadores" }, href: "/founders" },
      { label: { en: "Programs", es: "Programas" }, href: "/programs" },
    ],
  },
];

function ContactButton({
  mobile = false,
  onClick,
}: {
  mobile?: boolean;
  onClick?: () => void;
}) {
  const { language } = useLanguage();
  const text = language === "en" ? "Set Up Interview" : "Agendar Entrevista";

  return (
    <Link
      href="https://calendly.com/seaintco/new-meeting"
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className={[
        "contact-glow-btn group relative inline-flex items-center justify-center overflow-hidden rounded-full font-normal text-cyan-600 transition",
        mobile ? "h-12 w-full text-[11px]" : "h-[46px] px-5 text-xs",
      ].join(" ")}
    >
      <div className="contact-loader absolute inset-0 z-[1]" />

      <span className="relative z-[2] flex gap-[0.02rem] tracking-[0.18em]">
        {text.split("").map((letter, index) =>
          letter === " " ? (
            <span key={index} className="inline-block w-2" />
          ) : (
            <span
              key={index}
              className="contact-letter inline-block"
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              {letter}
            </span>
          )
        )}
      </span>
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [desktopGroup, setDesktopGroup] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  useEffect(() => { setDesktopGroup(null); setMobileGroup(null); setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <style jsx global>{`
        .seaint-header-shell {
          background: rgba(255, 255, 255, 0.76);
          border: 1px solid rgba(0, 0, 0, 0.055);
          box-shadow:
            0 18px 60px rgba(0, 0, 0, 0.055),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
        }

        .seaint-nav-link {
          position: relative;
        }

        .seaint-nav-link::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: -7px;
          left: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 200, 255, 0.9),
            transparent
          );
          opacity: 0;
          transform: scaleX(0.4);
          transition:
            opacity 400ms ease,
            transform 400ms ease;
        }

        .seaint-nav-link:hover::after,
        .seaint-nav-link-active::after {
          opacity: 1;
          transform: scaleX(1);
        }

        .contact-glow-btn {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(34, 211, 238, 0.35);
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
        }

        .contact-glow-btn:hover {
          transform: translateY(-2px);
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.95),
            0 0 0 2px rgba(0, 200, 255, 0.18),
            0 0 34px rgba(0, 200, 255, 0.2);
        }

        .contact-loader {
          background-color: transparent;
          mask: repeating-linear-gradient(
            90deg,
            transparent 0,
            transparent 6px,
            black 7px,
            black 8px
          );
          -webkit-mask: repeating-linear-gradient(
            90deg,
            transparent 0,
            transparent 6px,
            black 7px,
            black 8px
          );
        }

        .contact-loader::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 50% 50%, #00c8ff 0%, transparent 50%),
            radial-gradient(circle at 45% 45%, #38bdf8 0%, transparent 45%),
            radial-gradient(circle at 55% 55%, #22d3ee 0%, transparent 45%),
            radial-gradient(circle at 45% 55%, #67e8f9 0%, transparent 45%),
            radial-gradient(circle at 55% 45%, #0891b2 0%, transparent 45%);
          mask: radial-gradient(
            circle at 50% 50%,
            transparent 0%,
            transparent 10%,
            black 25%
          );
          -webkit-mask: radial-gradient(
            circle at 50% 50%,
            transparent 0%,
            transparent 10%,
            black 25%
          );
          animation:
            contact-transform 2s infinite alternate,
            contact-opacity 4s infinite;
          animation-timing-function: cubic-bezier(0.6, 0.8, 0.5, 1);
          filter: drop-shadow(0 0 8px rgba(0, 200, 255, 0.65));
        }

        .contact-letter {
          opacity: 0;
          animation: contact-letter 4s infinite linear;
        }

        .mobile-menu-line {
          transform-origin: center;
          transition:
            transform 350ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 250ms ease;
        }

        .mobile-menu-open .mobile-menu-line:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .mobile-menu-open .mobile-menu-line:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-open .mobile-menu-line:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        @keyframes contact-transform {
          0% {
            transform: translateX(-55%);
          }

          100% {
            transform: translateX(55%);
          }
        }

        @keyframes contact-opacity {
          0%,
          100% {
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          65% {
            opacity: 0;
          }
        }

        @keyframes contact-letter {
          0% {
            opacity: 0;
          }

          5% {
            opacity: 1;
            text-shadow:
              0 0 8px #00c8ff,
              0 0 12px #38bdf8;
            transform: scale(1.1) translateY(-2px);
          }

          20% {
            opacity: 0.35;
          }

          100% {
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-loader::before,
          .contact-letter {
            animation: none;
          }
        }
      `}</style>

      <header className="fixed left-0 right-0 top-0 z-[100] px-4 py-4 sm:px-5 sm:py-5 md:px-8">
        <div className="seaint-header-shell mx-auto flex h-[62px] max-w-7xl items-center justify-between rounded-full px-4 sm:px-5">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label={language === "en" ? "SEAINT Enterprise homepage" : "Página de inicio de SEAINT Enterprise"}
            className="flex shrink-0 items-center"
          >
            <span className="text-[13px] font-semibold tracking-[-0.03em] text-black sm:text-sm">
              SEAINT
            </span>

            <span className="ml-2 hidden text-[8px] font-medium uppercase tracking-[0.23em] text-zinc-400 sm:inline">
              Enterprise
            </span>
          </Link>

          <nav
            aria-label={language === "en" ? "Primary navigation" : "Navegación principal"}
            className="mx-5 hidden min-w-0 items-center justify-center gap-4 xl:flex 2xl:gap-6"
          >
            {navigationGroups.map((group) => {
              const active = group.links.some((link) => pathname === link.href);
              const expanded = desktopGroup === group.label.en;
              return (
                <div key={group.label.en} className="relative" onMouseEnter={() => setDesktopGroup(group.label.en)} onMouseLeave={() => setDesktopGroup(null)}>
                  <button
                    type="button"
                    onClick={() => setDesktopGroup(expanded ? null : group.label.en)}
                    onKeyDown={(event) => { if (event.key === "Escape") setDesktopGroup(null); }}
                    aria-haspopup="true"
                    aria-expanded={expanded}
                    className={["seaint-nav-link inline-flex items-center gap-2 whitespace-nowrap py-4 text-[10px] font-medium uppercase tracking-[0.16em] transition duration-300", active ? "seaint-nav-link-active text-cyan-600" : "text-zinc-500 hover:text-black"].join(" ")}
                  >
                    {group.label[language]}
                    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className={["h-3 w-3 transition-transform duration-200", expanded ? "rotate-180" : ""].join(" ")}><path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                  {expanded && (
                    <div className="absolute left-1/2 top-full z-[110] w-60 -translate-x-1/2 rounded-2xl border border-black/[0.07] bg-white/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
                      {group.links.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setDesktopGroup(null)} className={["block rounded-xl px-4 py-3 text-[11px] font-medium tracking-[0.02em] transition hover:bg-cyan-50 hover:text-cyan-700", pathname === link.href ? "bg-cyan-50 text-cyan-700" : "text-zinc-600"].join(" ")}>{link.label[language]}</Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link href="/team" className={["seaint-nav-link whitespace-nowrap py-4 text-[10px] font-medium uppercase tracking-[0.16em] transition duration-300", pathname === "/team" || pathname === "/saint" ? "seaint-nav-link-active text-cyan-600" : "text-zinc-500 hover:text-black"].join(" ")}>{language === "en" ? "Team" : "Equipo"}</Link>
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <LanguageToggle />
            <ContactButton />
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className={[
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/35 bg-white/80 shadow-sm backdrop-blur transition duration-300 hover:border-cyan-400/70 xl:hidden",
              open ? "mobile-menu-open" : "",
            ].join(" ")}
            aria-label={
              open
                ? language === "en" ? "Close menu" : "Cerrar menú"
                : language === "en" ? "Open menu" : "Abrir menú"
            }
            aria-expanded={open}
          >
            <span className="flex flex-col gap-[6px]">
              <span className="mobile-menu-line h-[2px] w-[19px] rounded-full bg-cyan-600" />
              <span className="mobile-menu-line h-[2px] w-[19px] rounded-full bg-cyan-600" />
              <span className="mobile-menu-line h-[2px] w-[19px] rounded-full bg-cyan-600" />
            </span>
          </button>
        </div>
      </header>

      <div
        className={[
          "fixed inset-0 z-[90] bg-white/45 backdrop-blur-[8px] transition duration-500 xl:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={[
          "fixed bottom-4 right-4 top-[94px] z-[95] w-[calc(100%-2rem)] max-w-[430px] overflow-hidden rounded-[30px] border border-cyan-400/25 bg-white/95 shadow-[0_28px_100px_rgba(0,0,0,0.16)] backdrop-blur-[28px] transition duration-500 xl:hidden",
          open
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-[110%] opacity-0",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div
          className="pointer-events-none absolute right-[-90px] top-[-80px] h-[280px] w-[280px] rounded-full opacity-30 blur-[80px]"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.6), transparent 68%)",
          }}
        />

        <div className="relative flex h-full flex-col p-5 sm:p-6">
          <div className="border-b border-black/[0.07] pb-5">
            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-cyan-600">
              {language === "en" ? "Navigation" : "Navegación"}
            </p>

            <p className="mt-3 max-w-[280px] text-sm font-light leading-6 text-zinc-500">
              {language === "en"
                ? "Explore SEAINT Enterprise, our investment approach and the companies within our ecosystem."
                : "Conoce SEAINT Enterprise, nuestro enfoque de inversión y las empresas que forman parte de nuestro ecosistema."}
            </p>

            <LanguageToggle className="mt-4" />
          </div>

          <nav
            aria-label={language === "en" ? "Mobile navigation" : "Navegación móvil"}
            className="min-h-0 flex-1 overflow-y-auto py-2"
          >
            <Link href="/" onClick={() => setOpen(false)} className="block border-b border-black/[0.065] py-4 text-[15px] text-zinc-700">{language === "en" ? "Home" : "Inicio"}</Link>
            {navigationGroups.map((group) => {
              const expanded = mobileGroup === group.label.en;
              const active = group.links.some((link) => pathname === link.href);
              return (
                <div key={group.label.en} className="border-b border-black/[0.065]">
                  <button type="button" aria-expanded={expanded} onClick={() => setMobileGroup(expanded ? null : group.label.en)} className={["flex w-full items-center justify-between py-4 text-left text-[15px] transition", active ? "text-cyan-600" : "text-black"].join(" ")}>
                    <span>{group.label[language]}</span>
                    <span className={["text-cyan-600 transition-transform duration-200", expanded ? "rotate-180" : ""].join(" ")}>⌄</span>
                  </button>
                  {expanded && <div className="pb-3 pl-4">{group.links.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={["block rounded-lg py-3 text-[13px]", pathname === link.href ? "text-cyan-600" : "text-zinc-500"].join(" ")}>{link.label[language]}</Link>
                  ))}</div>}
                </div>
              );
            })}
            <Link href="/team" onClick={() => setOpen(false)} className="block border-b border-black/[0.065] py-4 text-[15px] text-black">{language === "en" ? "Team" : "Equipo"}</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block border-b border-black/[0.065] py-4 text-[15px] text-black">{language === "en" ? "Contact" : "Contacto"}</Link>
          </nav>

          <div className="pt-4">
            <ContactButton mobile onClick={() => setOpen(false)} />

            <p className="mt-4 text-center text-[8px] font-medium uppercase tracking-[0.22em] text-zinc-400">
              {language === "en" ? "Build Tomorrow, Today." : "Construye el mañana, hoy."}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
