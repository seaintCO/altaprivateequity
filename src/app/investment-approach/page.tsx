import InternalPage from "@/components/internal/InternalPage";

export default function InvestmentApproachPage() {
  return (
    <InternalPage
      eyebrow="Investment Approach"
      title="Capital with"
      accent="operating conviction."
      introduction="SEAINT evaluates opportunities where capital alone is not enough and our broader operating capabilities can materially influence the outcome."
      statement="We pursue businesses we can understand deeply, support directly and position for durable growth through technology, disciplined execution and strategic alignment."
      details={[
        {
          number: "01",
          title: "Acquire",
          meta: "Control and Strategic Transactions",
          description:
            "We consider full acquisitions, majority investments and structured transactions involving founder-led or owner-operated businesses.",
        },
        {
          number: "02",
          title: "Invest",
          meta: "Growth Capital",
          description:
            "We may provide principal capital to businesses with clear demand, capable leadership and a credible opportunity to scale.",
        },
        {
          number: "03",
          title: "Build",
          meta: "Internal Ventures",
          description:
            "SEAINT creates companies internally when we identify a market need that can be addressed through our technology, media and distribution capabilities.",
        },
        {
          number: "04",
          title: "Operate",
          meta: "Active Value Creation",
          description:
            "Our model is designed for active involvement, including product development, AI integration, go-to-market strategy, brand development and operational infrastructure.",
        },
        {
          number: "05",
          title: "Compound",
          meta: "Long-Term Horizon",
          description:
            "We seek connected businesses that can strengthen one another through shared intelligence, technology, audience, infrastructure and opportunity flow.",
        },
      ]}
      closingTitle="We are looking for companies worth building around."
      closingText="Owners seeking growth capital, partial liquidity, succession solutions or a strategic sale can begin a confidential conversation with SEAINT."
    />
  );
}
