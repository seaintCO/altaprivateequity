import BeamButton from '@/components/ui/BeamButton';
import CapabilitiesFlow from "@/components/sections/CapabilitiesFlow";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Cpu,
  Handshake,
  Infinity,
  LockKeyhole,
  Menu,
} from "lucide-react";

const portfolio = [
  ["ALMA", "AI Operating System", "Helping individuals and businesses work smarter with advanced intelligence integration."],
  ["SEAINT Intelligence", "Business Automation", "Software, AI agents, websites, and automation infrastructure for modern enterprises."],
  ["NOCTURAI", "Creative AI Platform", "Image generation, video generation, marketing assets, and scalable digital content."],
  ["PURITY", "Faith-Based Education", "Community, structured courses, and premium digital experiences for believers."],
  ["ALTA Sports", "Sports Technology", "Advanced athlete development and operational technology for sports organizations."],
  ["ALTA Global", "International Growth", "Cross-border business operations, capital deployment, and strategic growth initiatives."],
  ["FOUNDERS", "Private Community", "Exclusive network for entrepreneurs building tomorrow's category-defining companies."],
  ["CHOSEN", "Apparel & Media", "Faith-driven premium apparel, digital media, and global community initiatives."],
];

const capabilities = [
  "Founder Advisory",
  "Technology Strategy",
  "AI Transformation",
  "Growth Consulting",
  "Strategic Partnerships",
  "Custom Software",
  "Business Automation",
  "Operational Systems",
  "Executive Consulting",
];

const timeline = [
  ["2026", "SEAINT Enterprise Founded"],
  ["Portfolio", "Launch of ALMA"],
  ["Infrastructure", "Launch of SEAINT Intelligence"],
  ["Creative AI", "Launch of Nocturai"],
  ["Future", "Expansion of Portfolio"],
  ["Ongoing", "Future Acquisitions"],
];

export default function Home() {
  return (
    <main className="bg-white text-[#111111] antialiased">
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="#" className="text-lg font-semibold tracking-tighter">
              SEAINT <span className="ml-1 font-normal text-gray-500">Enterprise</span>
            </a>

            <div className="hidden space-x-10 md:flex">
              
              
              
            </div>

            <a
  href="https://calendly.com/seaintco/new-meeting"
  target="_blank"
  rel="noopener noreferrer"
  className="relative inline-block group w-full sm:w-auto"
>
  <button
    className="relative z-10 overflow-hidden rounded-xl border border-white/20 bg-neutral-900/60 px-6 py-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-200 active:scale-[0.98]"
    onMouseMove={(e)=>{
      const r=e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--x",`${e.clientX-r.left}px`);
      e.currentTarget.style.setProperty("--y",`${e.clientY-r.top}px`);
    }}
    onMouseEnter={(e)=>e.currentTarget.style.setProperty("--o","1")}
    onMouseLeave={(e)=>e.currentTarget.style.setProperty("--o","0")}
    style={{
      "--x":"50%",
      "--y":"50%",
      "--o":"0"
    } as React.CSSProperties}
  >
    <span className="relative z-10 inline-flex items-center gap-2 font-medium">
      Book Consultation
      <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
    </span>

    <span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-all duration-500 group-hover:left-0 group-hover:right-0"></span>

    <span
      className="pointer-events-none absolute inset-0"
      style={{
        opacity:"var(--o)",
        background:"radial-gradient(220px circle at var(--x) var(--y), rgba(255,255,255,.12), transparent 60%)",
        transition:"opacity .25s"
      }}
    />
  </button>

  <span
    className="pointer-events-none absolute -bottom-3 left-1/2 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
    style={{
      background:"radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.55), rgba(255,255,255,.28) 35%, transparent 70%)"
    }}
  />
</a>

            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-40 pb-24 lg:pt-56 lg:pb-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#f3f4f6_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center lg:px-8">
          <div className="mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500">
            <span>Private Equity</span>
            <span className="h-1 w-1 rounded-full bg-[#C8B273]" />
            <span>Venture Capital</span>
            <span className="h-1 w-1 rounded-full bg-[#C8B273]" />
            <span>Company Building</span>
          </div>

          <h1 className="mx-auto mb-8 max-w-4xl text-5xl font-medium leading-tight tracking-tight lg:text-7xl">
            Build Tomorrow, Today.
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-gray-500 lg:text-xl">
            Building, acquiring, and scaling companies that shape the future across technology,
            artificial intelligence, media, consumer products, and digital infrastructure.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="/portfolio"><BeamButton /></a>
            <a
  href="https://calendly.com/seaintco/new-meeting"
  target="_blank"
  rel="noopener noreferrer"
  className="relative inline-block group w-full sm:w-auto"
>
  <button
    className="relative z-10 overflow-hidden rounded-xl border border-white/20 bg-neutral-900/60 px-6 py-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-200 active:scale-[0.98]"
    onMouseMove={(e)=>{
      const r=e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--x",`${e.clientX-r.left}px`);
      e.currentTarget.style.setProperty("--y",`${e.clientY-r.top}px`);
    }}
    onMouseEnter={(e)=>e.currentTarget.style.setProperty("--o","1")}
    onMouseLeave={(e)=>e.currentTarget.style.setProperty("--o","0")}
    style={{
      "--x":"50%",
      "--y":"50%",
      "--o":"0"
    } as React.CSSProperties}
  >
    <span className="relative z-10 inline-flex items-center gap-2 font-medium">
      Book Consultation
      <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
    </span>

    <span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-all duration-500 group-hover:left-0 group-hover:right-0"></span>

    <span
      className="pointer-events-none absolute inset-0"
      style={{
        opacity:"var(--o)",
        background:"radial-gradient(220px circle at var(--x) var(--y), rgba(255,255,255,.12), transparent 60%)",
        transition:"opacity .25s"
      }}
    />
  </button>

  <span
    className="pointer-events-none absolute -bottom-3 left-1/2 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
    style={{
      background:"radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.55), rgba(255,255,255,.28) 35%, transparent 70%)"
    }}
  />
</a>
          </div>
        </div>
      </section>

      <CapabilitiesFlow />

      


      <section id="philosophy" className="bg-white py-24 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 lg:gap-24">
            {[
              ["Long-Term Thinking", "We deploy capital with a generational mindset. We are not constrained by traditional fund lifecycles, allowing us to compound value over decades."],
              ["Technology First", "Every company we build or acquire is enhanced through digital transformation, proprietary AI integrations, and structural operational efficiency."],
              ["Founder Partnership", "We align our incentives with visionary operators. We provide the institutional infrastructure necessary for founders to execute their life's work."],
            ].map(([title, text], i) => (
              <div key={title} className="group">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#F7F7F5] transition-colors duration-500 group-hover:bg-[#111111]">
                  {i === 1 ? <Cpu className="h-5 w-5 text-[#C8B273]" /> : <Handshake className="h-5 w-5 text-[#C8B273]" />}
                </div>
                <h3 className="mb-4 text-xl font-medium tracking-tight">{title}</h3>
                <p className="text-sm font-light leading-relaxed text-gray-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<footer className="border-t border-gray-100 bg-white pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <a href="#" className="mb-6 block text-lg font-semibold tracking-tighter">
                SEAINT <span className="ml-1 font-normal text-gray-500">Enterprise</span>
              </a>
              <p className="max-w-xs text-sm font-light leading-relaxed text-gray-500">Build Tomorrow, Today.</p>
            </div>

            <div>
              <h4 className="mb-6 text-xs font-medium uppercase tracking-widest">Firm</h4>
              <ul className="space-y-4 text-sm font-light text-gray-500">
                <li>Private Equity</li>
                <li>Venture Capital</li>
                <li>Company Building</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-xs font-medium uppercase tracking-widest">Navigate</h4>
              <ul className="space-y-4 text-sm font-light text-gray-500">


                <li><a
  href="https://calendly.com/seaintco/new-meeting"
  target="_blank"
  rel="noopener noreferrer"
  className="relative inline-block group w-full sm:w-auto"
>
  <button
    className="relative z-10 overflow-hidden rounded-xl border border-white/20 bg-neutral-900/60 px-6 py-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-200 active:scale-[0.98]"
    onMouseMove={(e)=>{
      const r=e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--x",`${e.clientX-r.left}px`);
      e.currentTarget.style.setProperty("--y",`${e.clientY-r.top}px`);
    }}
    onMouseEnter={(e)=>e.currentTarget.style.setProperty("--o","1")}
    onMouseLeave={(e)=>e.currentTarget.style.setProperty("--o","0")}
    style={{
      "--x":"50%",
      "--y":"50%",
      "--o":"0"
    } as React.CSSProperties}
  >
    <span className="relative z-10 inline-flex items-center gap-2 font-medium">
      Book Consultation
      <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
    </span>

    <span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-all duration-500 group-hover:left-0 group-hover:right-0"></span>

    <span
      className="pointer-events-none absolute inset-0"
      style={{
        opacity:"var(--o)",
        background:"radial-gradient(220px circle at var(--x) var(--y), rgba(255,255,255,.12), transparent 60%)",
        transition:"opacity .25s"
      }}
    />
  </button>

  <span
    className="pointer-events-none absolute -bottom-3 left-1/2 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
    style={{
      background:"radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.55), rgba(255,255,255,.28) 35%, transparent 70%)"
    }}
  />
</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 md:flex-row">
            <p className="text-xs font-light text-gray-400">© 2026 SEAINT Enterprise. All rights reserved.</p>
            <div className="flex gap-6 text-xs font-light text-gray-400">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
















