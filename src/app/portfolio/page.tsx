"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/i18n/LanguageProvider";

const portfolioData = [
  { name: { en: "ALMA", es: "ALMA" }, label: { en: "01 GPU AI Brain", es: "01 Cerebro de IA con GPU" }, value: "$100M", width: "96%", text: { en: "The GPU-powered AI brain across the SEAINT ecosystem: chat, voice, image, video, coding, memory, marketing, and company intelligence.", es: "El cerebro de IA impulsado por GPU en todo el ecosistema SEAINT: chat, voz, imagen, video, código, memoria, marketing e inteligencia empresarial." } },
  { name: { en: "ALMA Tech", es: "ALMA Tech" }, label: { en: "02 Technology", es: "02 Tecnología" }, value: "$45M", width: "78%", text: { en: "Technology we develop, package, license, and sell: AI tools, automation systems, business software, and reusable digital infrastructure.", es: "Tecnología que desarrollamos, empaquetamos, licenciamos y vendemos: herramientas de IA, sistemas de automatización, software empresarial e infraestructura digital reutilizable." } },
  { name: { en: "SEAINT Intelligence", es: "SEAINT Intelligence" }, label: { en: "03 Software", es: "03 Software" }, value: "$35M", width: "68%", text: { en: "Custom software company building CRMs, websites, AI agents, dashboards, automations, and operating systems for businesses.", es: "Empresa de software a la medida que crea CRM, sitios web, agentes de IA, paneles, automatizaciones y sistemas operativos para empresas." } },
  { name: { en: "SEAINT FinTech", es: "SEAINT FinTech" }, label: { en: "04 FinTech", es: "04 FinTech" }, value: "$25M", width: "55%", text: { en: "Financial technology division building POS systems, merchant tools, checkout infrastructure, and business payment systems.", es: "División de tecnología financiera que crea sistemas de punto de venta, herramientas para comercios, infraestructura de pago y sistemas de cobro empresarial." } },
  { name: { en: "NoctrAI", es: "NoctrAI" }, label: { en: "05 Creative AI", es: "05 IA Creativa" }, value: "$25M", width: "58%", text: { en: "Image and video generation platform for creators, brands, campaigns, content production, and AI creative workflows.", es: "Plataforma de generación de imagen y video para creadores, marcas, campañas, producción de contenido y flujos creativos con IA." } },
  { name: { en: "Alta Ecosystem", es: "Ecosistema Alta" }, label: { en: "06 Events + Ecom", es: "06 Eventos + Ecom" }, value: "$20M", width: "48%", text: { en: "Alta includes events, e-commerce, Shopify stores, sports commerce, founder activations, and brand-driven digital commerce.", es: "Alta incluye eventos, comercio electrónico, tiendas Shopify, comercio deportivo, activaciones para fundadores y comercio digital impulsado por marcas." } },
  { name: { en: "Others", es: "Otros" }, label: { en: "07 Operating Systems", es: "07 Sistemas Operativos" }, value: "$15M", width: "34%", text: { en: "Purity OS, Leadly, Sales OS, Construct CROS, and internal software assets supporting the SEAINT ecosystem.", es: "Purity OS, Leadly, Sales OS, Construct CROS y activos internos de software que respaldan el ecosistema SEAINT." } },
];

export default function PortfolioPage() {
  const { language } = useLanguage();
  const [active, setActive] = useState(0);
  const portfolio = portfolioData.map((company) => ({
    ...company,
    name: company.name[language],
    label: company.label[language],
    text: company.text[language],
  }));
  const item = portfolio[active];
  const t = language === "en" ? {
    back: "Back Home", targetValuation: "Target Valuation", internalValuation: "Internal Ecosystem Valuation", target: "/target",
    summary: "SEAINT is building, acquiring, and scaling a connected portfolio across AI infrastructure, software, fintech, creative AI, commerce, events, and global digital systems.",
    headingStart: "Building a", headingAccent: "quarter-billion", headingEnd: "ecosystem.", instruction: "Click a portfolio company to view details.", active: "Active Selection",
  } : {
    back: "Volver al Inicio", targetValuation: "Valoración Objetivo", internalValuation: "Valoración Interna del Ecosistema", target: "/objetivo",
    summary: "SEAINT está creando, adquiriendo y escalando un portafolio conectado de infraestructura de IA, software, fintech, IA creativa, comercio, eventos y sistemas digitales globales.",
    headingStart: "Construyendo un", headingAccent: "ecosistema de", headingEnd: "$250 millones.", instruction: "Selecciona una empresa del portafolio para ver los detalles.", active: "Selección Activa",
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f8fb] p-6 text-[#0a0c0e] md:p-10">
      <style>{`
        @keyframes glowPulse{
  0%,100%{
    filter:drop-shadow(0 0 10px rgba(34,211,238,.18));
  }
  50%{
    filter:drop-shadow(0 0 26px rgba(34,211,238,.45));
  }
}
@keyframes shimmer {
  0%, 100% { background-position: 200% 0; }
  50% { background-position: 0% 0; }
}

.headline-shimmer {
  background: linear-gradient(90deg, #020617 0%, #020617 35%, #22d3ee 50%, #38bdf8 60%, #020617 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3.5s ease-in-out infinite;
}

@keyframes growIn {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }
        .glow-bar {
          height: 46px;
          background: linear-gradient(90deg, rgba(0, 180, 255, 0.02) 0%, #00c8ff 100%);
          border-radius: 99px;
          position: relative;
          transform-origin: left;
          animation: growIn 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
          opacity: 0;
        }
        .glow-bar::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          width: 70%;
          height: 120%;
          background: inherit;
          transform: translateY(-50%);
          filter: blur(22px);
          opacity: 0.28;
          border-radius: 99px;
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,145,255,0.10)_1px,transparent_1px),radial-gradient(rgba(0,0,0,0.035)_1px,transparent_1px)] [background-size:32px_32px,16px_16px] [background-position:0_0,8px_8px]" />
      <div className="pointer-events-none fixed left-1/2 top-1/2 z-0 h-[80vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 opacity-[0.14] blur-[160px]" />

      <header className="relative z-10 mb-12 flex items-start justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-black">
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        <div className="flex items-start gap-3">
          <LanguageToggle />
          <div className="text-right">
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gray-400">
              {t.targetValuation}
            </div>
            <div className="font-mono text-sm">$250,000,000</div>
          </div>
        </div>
      </header>

      <section className="relative z-10 grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="mb-12 rounded-3xl border border-black/5 bg-white/70 p-8 shadow-[0_30px_100px_-60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="mb-6 flex items-end justify-between">
              <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gray-400">
                {t.internalValuation}
              </div>
              <div className="text-3xl font-light text-cyan-500">
                $250M<span className="ml-1 text-lg text-gray-400">{t.target}</span>
              </div>
            </div>

            <div className="mb-6 h-px w-full bg-black/5" />

            <p className="text-lg leading-relaxed text-gray-500">
              {t.summary}
            </p>
          </div>

          <h1 className="headline-shimmer mb-8 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[76px]">
            {t.headingStart} <br />
            <span className="font-bold">{t.headingAccent}</span> {t.headingEnd}
          </h1>

          <div className="flex flex-wrap items-center gap-6">
            <button className="inline-flex items-center gap-3 rounded-full border border-cyan-400 px-8 py-4 text-sm font-medium text-cyan-600 transition hover:bg-cyan-400 hover:text-white">
              {item.name}
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="text-sm text-gray-400">
              {t.instruction}
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center lg:col-span-7">
          <div className="absolute bottom-0 left-[20%] top-0 hidden w-px bg-black/5 md:block" />

          <div className="space-y-7">
            {portfolio.map((company, index) => (
              <button
                key={company.name}
                onClick={() => setActive(index)}
                className={`group flex w-full items-center transition ${
                  active === index ? "opacity-100" : "opacity-35 hover:opacity-80"
                }`}
              >
                <div className="w-[20%] pr-8 text-right">
                  <span className={`text-[0.7rem] font-semibold uppercase tracking-[0.2em] ${
                    active === index ? "text-black" : "text-gray-400"
                  }`}>
                    {company.label}
                  </span>
                </div>

                <div className="relative flex h-12 flex-1 items-center">
                  <div
                    className="glow-bar"
                    style={{
                      width: company.width,
                      animationDelay: `${0.1 + index * 0.08}s`,
                    }}
                  />

                  {active === index && (
                    <>

                      <div className="ml-4 hidden max-w-[220px] text-left text-[11px] font-mono text-cyan-600 md:block">
                        {company.value} — {company.text}
                      </div>
                    </>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur-xl">
            <div className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cyan-600">
              {t.active}
            </div>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl font-light">{item.name}</h2>
                <p className="mt-2 max-w-xl text-gray-500">{item.text}</p>
              </div>
              <div className="font-mono text-2xl text-cyan-500">{item.value}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}







