import InternalPage from "@/components/internal/InternalPage";

export default function AboutPage() {
  return (
    <InternalPage
      eyebrow="About SEAINT"
      title="Built as operators."
      accent="Structured as investors."
      introduction="SEAINT is a private investment and operating company headquartered in Nashville, building and acquiring businesses designed for long-term relevance."
      statement="We believe enduring value is created when capital, technology, brand, distribution and disciplined execution operate as one connected system."
      details={[
        {
          number: "01",
          title: "Private Capital",
          meta: "Principal Investment",
          description:
            "SEAINT intends to invest its own capital into businesses and opportunities where we have conviction, operating insight and a clear path to value creation.",
        },
        {
          number: "02",
          title: "Company Building",
          meta: "Venture Creation",
          description:
            "We develop companies internally across artificial intelligence, software, digital infrastructure, media, commerce and founder-focused platforms.",
        },
        {
          number: "03",
          title: "Operating Partnership",
          meta: "Beyond Capital",
          description:
            "Our involvement can include technology, product development, marketing, positioning, sales systems, automation and strategic expansion.",
        },
        {
          number: "04",
          title: "Long-Term Ownership",
          meta: "Compounding Value",
          description:
            "We are building an ecosystem intended to compound over time rather than relying on short-term transactions or temporary market attention.",
        },
      ]}
      closingTitle="Build the next chapter with SEAINT."
      closingText="We welcome conversations with founders, owners and strategic partners who believe their company can become significantly more valuable with the right capital and operating platform."
    />
  );
}

