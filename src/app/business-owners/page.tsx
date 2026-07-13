import InternalPage from "@/components/internal/InternalPage";

export default function BusinessOwnersPage() {
  return (
    <InternalPage
      eyebrow="For Business Owners"
      title="Your company."
      accent="Its next era."
      introduction="SEAINT partners with owners considering growth capital, strategic support, succession planning, partial liquidity or the sale of their business."
      statement="A transaction should protect what has already been built while creating the structure, resources and momentum required for the company’s next stage."
      details={[
        {
          number: "01",
          title: "Growth Capital",
          meta: "Expand With Discipline",
          description:
            "Capital may support hiring, technology, new markets, product development, acquisitions, marketing or operating infrastructure.",
        },
        {
          number: "02",
          title: "Strategic Sale",
          meta: "Full or Majority Acquisition",
          description:
            "Owners exploring a sale can engage SEAINT in a confidential discussion regarding fit, valuation, transition goals and long-term stewardship.",
        },
        {
          number: "03",
          title: "Partial Liquidity",
          meta: "Retain Meaningful Ownership",
          description:
            "Some founders may want liquidity while continuing to lead and participate in the company’s future growth.",
        },
        {
          number: "04",
          title: "Succession",
          meta: "Preserve the Enterprise",
          description:
            "We can evaluate situations where an owner needs a credible transition partner without abandoning the identity, employees or customer relationships that created the business.",
        },
        {
          number: "05",
          title: "Operating Support",
          meta: "Technology and Growth",
          description:
            "SEAINT can contribute software, AI systems, automation, marketing, digital infrastructure, brand strategy and access to its broader ecosystem.",
        },
      ]}
      closingTitle="A confidential first conversation costs nothing."
      closingText="Share the company, industry, approximate scale and the outcome you are considering. Initial discussions are exploratory and do not create any obligation."
      primaryAction="Book a Consultation"
      primaryHref="https://calendly.com/seaintco/new-meeting"
    />
  );
}

