import InternalPage from "@/components/internal/InternalPage";

export default function TeamPage() {
  return (
    <InternalPage
      eyebrow="Leadership"
      title="Built by people"
      accent="who operate."
      introduction="SEAINT is developing a multidisciplinary team spanning investment, technology, operations, growth, communications, community and creative execution."
      statement="Our culture values initiative, judgment, ownership and the ability to transform ambitious ideas into disciplined operating companies."
      details={[
        {
          number: "01",
          title: "Investment and Strategy",
          meta: "Capital Allocation",
          description:
            "Evaluating opportunities, structuring partnerships, defining strategic priorities and maintaining alignment across the portfolio.",
        },
        {
          number: "02",
          title: "Technology and Product",
          meta: "Software, AI and Infrastructure",
          description:
            "Designing and building the systems, platforms and digital infrastructure powering SEAINT and its operating companies.",
        },
        {
          number: "03",
          title: "Growth and Operations",
          meta: "Execution",
          description:
            "Developing go-to-market systems, internal processes, partnerships, sales infrastructure and measurable operating plans.",
        },
        {
          number: "04",
          title: "Communications and Brand",
          meta: "Positioning",
          description:
            "Protecting the SEAINT identity while translating complex companies, strategies and opportunities into clear public communication.",
        },
        {
          number: "05",
          title: "Community and Influence",
          meta: "Relationships",
          description:
            "Connecting founders, creators, strategic partners and local communities through programming, experiences and collaboration.",
        },
      ]}
      closingTitle="We are building the institution as we build the portfolio."
      closingText="SEAINT will introduce formal leadership profiles as roles and responsibilities are finalized. Until then, external communications should reflect the firm rather than overstating individual titles or team scale."
      primaryAction="Book a Consultation"
    />
  );
}

