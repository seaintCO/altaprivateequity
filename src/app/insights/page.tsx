import type { Metadata } from "next";
import JournalPageClient from "@/components/editorial/JournalPageClient";
import { getMarketHeadlines } from "@/lib/market-news";

const origin = "https://seaintenterprises.com";
const linkedin = "https://www.linkedin.com/in/luis-altamirano-60b4ab3b8";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "SEAINT News | Market Heatmap, Business Headlines & Insights",
  description: "Explore the market heatmap, publisher-attributed business news, original technology and private equity perspectives, and founder vlogs from ALTA.",
  alternates: { canonical: "/insights" },
  openGraph: {
    type: "website",
    url: `${origin}/insights`,
    title: "SEAINT News | Markets, Insights & Vlogs",
    description: "Market heatmap, independent financial headlines, and original perspectives from ALTA.",
  },
  twitter: { card: "summary", title: "ALTA | Market Intelligence & Insights" },
  robots: { index: true, follow: true },
};

// The people/roles listed here are also readable in the on-page leadership byline.
// This is informative structured data, not a promise of Google/AI rankings.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${origin}/insights#webpage`,
      url: `${origin}/insights`,
      name: "SEAINT News | Market Intelligence, Business Headlines & Original Perspectives",
      description: "Original market perspectives, attributed business headlines, market heatmap and founder media.",
      inLanguage: "en",
      publisher: { "@id": `${origin}/#organization` },
      isPartOf: { "@type": "WebSite", url: origin, name: "SEAINT Enterprises" },
      about: { "@id": `${origin}/insights#alta` },
    },
    {
      "@type": "Organization",
      "@id": `${origin}/insights#editorial`,
      name: "ALTA / SEAINT Editorial",
      url: `${origin}/insights`,
      parentOrganization: { "@id": `${origin}/#organization` },
      publishingPrinciples: `${origin}/insights/editorial-policy`,
    },
    {
      "@type": "Organization",
      "@id": `${origin}/insights#alta`,
      name: "ALTA Private Equity",
      description: "Technology-focused private investment, company building, market commentary and founder media.",
      founder: [
        { "@id": `${origin}/leadership/luis-altamirano#person` },
        { "@type": "Person", name: "Cruz Altamirano", jobTitle: "Co-Founder" },
      ],
    },
    {
      "@type": "Person",
      "@id": `${origin}/leadership/luis-altamirano#person`,
      name: "Luis Altamirano",
      alternateName: "Luis Saint Altamirano",
      jobTitle: "Co-Founder and CEO",
      url: `${origin}/leadership/luis-altamirano`,
      sameAs: [linkedin],
    },
  ],
};

export default async function InsightsPage() {
  const headlines = await getMarketHeadlines();
  return <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
    />
    <JournalPageClient headlines={headlines} />
  </>;
}
