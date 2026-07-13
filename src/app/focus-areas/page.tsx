import InternalPage from "@/components/internal/InternalPage";

export default function FocusAreasPage() {
  return (
    <InternalPage
      eyebrow="Focus Areas"
      title="Where SEAINT"
      accent="builds and invests."
      introduction="Our focus is concentrated in sectors where technology, changing consumer behavior and modern distribution are creating new categories of value."
      statement="We are sector-aware but opportunity-driven, prioritizing markets where SEAINT can contribute a genuine operating advantage."
      details={[
        {
          number: "01",
          title: "Artificial Intelligence",
          meta: "Platforms and Applied AI",
          description:
            "AI operating systems, intelligent agents, creative tools, workflow automation and vertical software with embedded intelligence.",
        },
        {
          number: "02",
          title: "Enterprise Software",
          meta: "Digital Infrastructure",
          description:
            "Business operating systems, CRM platforms, dashboards, lead systems, automation and software supporting small and middle-market companies.",
        },
        {
          number: "03",
          title: "FinTech",
          meta: "Payments and Business Tools",
          description:
            "Merchant systems, payment infrastructure, POS technology, financial workflows and software improving how companies manage transactions.",
        },
        {
          number: "04",
          title: "Media and Community",
          meta: "Attention and Relationships",
          description:
            "Founder communities, creator networks, events, educational platforms and media businesses with differentiated distribution.",
        },
        {
          number: "05",
          title: "Commerce",
          meta: "Digital and Brand-Led",
          description:
            "E-commerce, sports commerce, digital products, consumer concepts and technology-enabled brand platforms.",
        },
        {
          number: "06",
          title: "Select Founder-Led Businesses",
          meta: "Profitable and Scalable",
          description:
            "Established companies with strong customer relationships, durable demand and opportunities for technology-enabled growth.",
        },
      ]}
      closingTitle="We invest where our capabilities matter."
      closingText="Industry fit is only the beginning. We also evaluate leadership, demand, economics, differentiation, operating complexity and the specific value SEAINT can contribute."
    />
  );
}

