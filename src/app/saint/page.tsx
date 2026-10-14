import type { Metadata } from "next";
import InternalPage from "@/components/internal/InternalPage";

export const metadata: Metadata = {
  title: "Luis ‘Saint’ Altamirano | Technology Founder & SEAINT Co-Founder",
  description: "Meet Luis ‘Saint’ Altamirano, technology entrepreneur and co-founder of SEAINT Enterprises. His work spans AI, enterprise software, automation and investment initiatives.",
  alternates: { canonical: "/saint" },
  openGraph: { title: "Luis ‘Saint’ Altamirano | SEAINT Co-Founder", description: "Technology entrepreneur focused on AI, software, automation and company building.", url: "/saint", type: "profile" },
};

export default function SaintPage() {
  const structuredData = {
    "@context": "https://schema.org", "@type": "ProfilePage", "@id": "https://seaintenterprises.com/saint#profile",
    url: "https://seaintenterprises.com/saint", mainEntity: {
      "@type": "Person", "@id": "https://seaintenterprises.com/saint#person",
      name: "Luis Altamirano", alternateName: ["Saint", "Luis Saint Altamirano", "Luis ‘Saint’ Altamirano"],
      url: "https://seaintenterprises.com/saint", jobTitle: "Technology Entrepreneur and Co-Founder",
      description: "Co-founder of SEAINT Enterprises, focused on AI, software, automation and company building.",
      worksFor: { "@type": "Organization", name: "SEAINT Enterprises", url: "https://seaintenterprises.com" },
      sameAs: ["https://www.linkedin.com/in/luis-altamirano-60b4ab3b8"],
    },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\u003c") }} />
    <InternalPage eyebrow="Co-Founder · SEAINT Enterprises" title="Luis ‘Saint’" accent="Altamirano." introduction="Luis “Saint” Altamirano is a technology entrepreneur and co-founder of SEAINT Enterprises, focused on building businesses across artificial intelligence, enterprise technology and private investment initiatives." statement="His entrepreneurial approach connects applied technology with operating discipline, strategic partnerships and long-term enterprise value creation." details={[
      { number: "01", title: "Technology & AI", meta: "Software · Automation", description: "As founder of SEAINT Enterprises, Altamirano leads initiatives in enterprise software, artificial intelligence, intelligent automation and technology products serving established industries." },
      { number: "02", title: "Company Building", meta: "SEAINT Enterprises", description: "Together with Carlos Altamirano, he brings a technology-focused perspective to business development, strategic ownership and investment opportunities spanning traditional and emerging industries." },
      { number: "03", title: "Entrepreneurial Background", meta: "Private Transaction · 2021", description: "His entrepreneurial history includes a privately negotiated company sale in 2021. The counterparties, transaction value and confidential terms are not publicly disclosed." },
      { number: "04", title: "Professional Profile", meta: "Verified Profile Link", description: "LinkedIn: linkedin.com/in/luis-altamirano-60b4ab3b8" },
    ]} closingTitle="Build Tomorrow, Today." closingText="Connect with SEAINT to discuss technology, business building and strategic opportunities." />
  </>;
}
