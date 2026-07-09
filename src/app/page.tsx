import ConsultationButton from "@/components/ui/ConsultationButton";
import BeamButton from "@/components/ui/BeamButton";
import CapabilitiesFlow from "@/components/sections/CapabilitiesFlow";
import {
  ArrowRight,
  Brain,
  Building2,
  Cpu,
  Handshake,
  Rocket,
  Zap,
} from "lucide-react";

const pillars = [
  { title: "Private Equity", icon: Building2 },
  { title: "Venture Capital", icon: Rocket },
  { title: "Company Building", icon: Brain },
  { title: "AI Infrastructure", icon: Cpu },
  { title: "Strategic Acquisitions", icon: Handshake },
  { title: "Founder Execution", icon: Zap },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-[#0a0c0e] antialiased">
      <style>{`
        @keyframes glowPulse {
          0%,100% { filter: drop-shadow(0 0 12px rgba(200,178,115,.25)); }
          50% { filter: drop-shadow(0 0 32px rgba(200,178,115,.65)); }
        }

        @keyframes floatSoft {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes shimmerText {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        .seaint-glow {
          animation: glowPulse 2.2s ease-in-out infinite;
        }

        .seaint-float {
          animation: floatSoft 4s ease-in-out infinite;
        }

        .ecosystem-text {
          background: linear-gradient(90deg, #0a0c0e, #c8b273, #0a0c0e);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmerText 4s linear infinite;
        }
      `}</style>

      <nav className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="/" className="leading-none">
            <span className="block text-lg font-bold tracking-tight">SEAINT</span>
            <span className="block text-sm font-light text-neutral-500">Enterprise</span>
          </a>

          <div className="scale-75 sm:scale-100 origin-right">
            <ConsultationButton />
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 pb-24 pt-36 sm:pt-44 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#dfe4ea_1px,transparent_1px)] opacity-60 [background-size:42px_42px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-[#f6f8fb]/90 to-[#f6f8fb]" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="seaint-glow mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-[1.75rem] border border-[#c8b273]/25 bg-white shadow-[0_30px_90px_rgba(200,178,115,.28)]">
            <Zap className="h-8 w-8 text-[#c8b273]" />
          </div>

          <p className="mx-auto mb-6 inline-flex rounded-full border border-[#c8b273]/20 bg-white/80 px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-[#8f7d45] shadow-sm">
            SEAINT Enterprise
          </p>

          <h1 className="mx-auto max-w-6xl text-5xl font-semibold tracking-[-0.08em] sm:text-7xl lg:text-8xl">
            Building a{" "}
            <span className="ecosystem-text">quarter billion</span>{" "}
            ecosystem.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-neutral-500 sm:text-xl">
            Capital, technology, strategy, and execution — built into one operating system for building, acquiring, and scaling companies.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="/portfolio">
              <BeamButton />
            </a>
          </div>

          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {pillars.map(({ title, icon: Icon }) => (
              <div key={title} className="seaint-float rounded-[2rem] border border-black/5 bg-white/80 p-5 shadow-[0_25px_80px_rgba(15,23,42,.06)] backdrop-blur">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_15px_40px_rgba(15,23,42,.08)]">
                  <Icon className="h-5 w-5 text-[#0a0c0e]" />
                </div>
                <p className="text-sm font-medium text-neutral-600">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CapabilitiesFlow />

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ["Capital Strategy", "We structure opportunities around long-term value creation."],
            ["Technology Infrastructure", "We build software, AI systems, and operating tools that scale."],
            ["Founder Execution", "We partner with operators to move from concept to market."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[2rem] border border-black/5 bg-[#f6f8fb] p-8">
              <h3 className="text-xl font-medium tracking-tight">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white px-6 py-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-bold tracking-tight">SEAINT</p>
            <p className="text-sm text-neutral-500">Enterprise</p>
          </div>

          <div className="flex gap-6 text-sm text-neutral-500">
            <a href="/privacy" className="hover:text-black">Privacy Policy</a>
            <a href="/terms" className="hover:text-black">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
