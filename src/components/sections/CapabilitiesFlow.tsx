import {
  Building2,
  HandCoins,
  Rocket,
  Handshake,
  Network,
  Cpu,
  Zap,
  ShieldCheck,
  Workflow,
  Gauge,
} from "lucide-react";

const nodes = [
  { label: "Private Equity", icon: HandCoins, x: 150 },
  { label: "Venture Capital", icon: Rocket, x: 270 },
  { label: "Company Building", icon: Building2, x: 390 },
  { label: "Strategic Acquisitions", icon: Handshake, x: 510 },
  { label: "Portfolio Operations", icon: Network, x: 630 },
  { label: "Technology Infrastructure", icon: Cpu, x: 750 },
];

const pillars = [
  { label: "Capital strategy", icon: Workflow },
  { label: "Operational support", icon: ShieldCheck },
  { label: "AI infrastructure", icon: Gauge },
  { label: "Founder execution", icon: Zap },
];

export default function CapabilitiesFlow() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,178,115,0.18),transparent_35%),radial-gradient(circle,#f3f4f6_1px,transparent_1px)] [background-size:100%_100%,40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/95 to-white" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1 rounded-full border border-[#C8B273]/30 bg-white/50 px-3 py-1 text-[11px] uppercase tracking-tight text-[#8B7A3E] shadow-[0_10px_30px_rgba(200,178,115,0.16)] backdrop-blur-xl">
            <Zap className="h-3.5 w-3.5" />
            SEAINT Enterprise
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
            SEAINT Enterprise
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
            Capital, technology, strategy, and execution — built into one operating system.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl sm:mt-16">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
            {nodes.map(({ label, icon: Icon }) => (
              <div key={label} className="group flex flex-col items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/50 shadow-[0_18px_50px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#C8B273]/60 group-hover:shadow-[0_20px_60px_rgba(200,178,115,0.22)]">
                  <Icon className="h-5 w-5 text-[#111111] transition-colors group-hover:text-[#C8B273]" />
                </span>
                <span className="max-w-[120px] text-center text-xs font-medium leading-4 text-neutral-500 group-hover:text-[#111111]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="relative mt-8 h-64 sm:mt-10 sm:h-72">
            <svg viewBox="0 0 900 360" className="absolute inset-0 hidden h-full w-full sm:block" fill="none">
              <defs>
                <filter id="goldGlowGlass">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {nodes.map((node, index) => (
                <g key={node.label}>
                  <circle cx={node.x} cy="30" r="4" fill="#C8B273" filter="url(#goldGlowGlass)">
                    <animate attributeName="opacity" values="0.35;1;0.35" dur="2.4s" begin={`${index * 0.18}s`} repeatCount="indefinite" />
                  </circle>

                  <path
                    d={`M450 300 C 450 ${index < 2 ? 200 : 150}, ${node.x} 120, ${node.x} 30`}
                    stroke="#C8B273"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.85"
                    style={{ strokeDasharray: 620, strokeDashoffset: 620 }}
                  >
                    <animate attributeName="stroke-dashoffset" values="620;0;620" dur="4s" begin={`${index * 0.22}s`} repeatCount="indefinite" />
                  </path>
                </g>
              ))}
            </svg>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 sm:bottom-2 sm:top-auto">
              <span
                className="inline-flex h-16 w-16 items-center justify-center rounded-3xl border border-[#C8B273]/35 bg-white/60 text-[#C8B273] shadow-[0_30px_90px_rgba(200,178,115,0.30),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-2xl"
                style={{ boxShadow: "0 0 26px rgba(200,178,115,0.42), 0 0 70px rgba(200,178,115,0.18)" }}
              >
                <Zap className="h-7 w-7" />
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-5xl sm:mt-12">
          <div className="grid grid-cols-1 gap-3 text-sm text-[#111111] sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-4">
            {pillars.map(({ label, icon: Icon }, index) => (
              <div key={label} className="flex items-center justify-center gap-4">
                <div className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/70 bg-white/55 px-4 py-3 shadow-[0_12px_35px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl sm:w-auto">
                  <Icon className="h-4 w-4 text-[#C8B273]" />
                  <span className="font-medium">{label}</span>
                </div>

                {index !== pillars.length - 1 && (
                  <div className="hidden h-px w-14 border-t border-dashed border-[#C8B273]/45 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
