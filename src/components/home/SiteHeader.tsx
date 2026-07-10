"use client";

import { useState } from "react";

function ContactButton({ mobile = false }: { mobile?: boolean }) {
  const text = "Contact Us";

  return (
    <a
      href="mailto:support@seaintenterprise.com"
      className={[
        "contact-glow-btn group relative inline-flex items-center justify-center overflow-hidden rounded-full font-normal text-cyan-600 transition",
        mobile ? "h-10 w-full text-[11px]" : "h-[46px] px-5 text-xs",
      ].join(" ")}
    >
      <div className="contact-loader absolute inset-0 z-[1]" />
      <span className="relative z-[2] flex gap-[0.02rem] tracking-[0.18em]">
        {text.split("").map((letter, i) =>
          letter === " " ? (
            <span key={i} className="inline-block w-2" />
          ) : (
            <span
              key={i}
              className="contact-letter inline-block"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              {letter}
            </span>
          )
        )}
      </span>
    </a>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style jsx global>{`
        .contact-glow-btn {
          background: rgba(255,255,255,.92);
          border:1px solid rgba(34,211,238,.35);
          box-shadow:
            0 12px 40px rgba(0,0,0,.08), inset 0 1px 0 rgba(255,255,255,.95);
        }

        .contact-glow-btn:hover {
          transform: translateY(-2px);
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -1px 0 rgba(0, 0, 0, 0.6),
            0 0 0 2px rgba(0, 200, 255, 0.32);
        }

        .contact-loader {
          background-color: transparent;
          mask: repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px);
          -webkit-mask: repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px);
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
          mask: radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%);
          -webkit-mask: radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%);
          animation: contact-transform 2s infinite alternate, contact-opacity 4s infinite;
          animation-timing-function: cubic-bezier(0.6, 0.8, 0.5, 1);
          filter: drop-shadow(0 0 8px rgba(0, 200, 255, 0.65));
        }

        .contact-letter {
          opacity: 0;
          animation: contact-letter 4s infinite linear;
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
            text-shadow: 0 0 8px #00c8ff, 0 0 12px #38bdf8;
            transform: scale(1.1) translateY(-2px);
          }
          20% {
            opacity: 0.35;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>

      <header className="fixed left-0 right-0 top-0 z-[100] px-5 py-5 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-end">
          <div className="hidden md:block">
            <ContactButton />
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/40 bg-white/80 shadow-sm backdrop-blur md:hidden"
            aria-label="Open menu"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-[2px] w-5 rounded-full bg-cyan-600" />
              <span className="h-[2px] w-5 rounded-full bg-cyan-600" />
              <span className="h-[2px] w-5 rounded-full bg-cyan-600" />
            </span>
          </button>
        </div>

        {open && (
          <div className="mt-4 rounded-3xl border border-cyan-400/30 bg-white/90 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur md:hidden">
            <ContactButton mobile />
          </div>
        )}
      </header>
    </>
  );
}
