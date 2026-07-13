import InternalPage from "@/components/internal/InternalPage";

export default function FoundersPage() {
  return (
    <InternalPage
      eyebrow="For Founders"
      title="More than"
      accent="a capital partner."
      introduction="SEAINT works with ambitious founders who want strategic capital, technical execution and access to a connected operating ecosystem."
      statement="The strongest founder partnerships are built on aligned ambition, clear ownership, honest communication and the willingness to execute beyond the original idea."
      details={[
        {
          number: "01",
          title: "Strategic Capital",
          meta: "Aligned Investment",
          description:
            "We evaluate opportunities where additional capital can accelerate a validated product, market, team or distribution advantage.",
        },
        {
          number: "02",
          title: "Technology",
          meta: "Software and AI Infrastructure",
          description:
            "Through SEAINT Intelligence and the broader ALMA ecosystem, we can support software platforms, AI agents, internal systems, automation and customer-facing products.",
        },
        {
          number: "03",
          title: "Go-to-Market",
          meta: "Brand, Media and Distribution",
          description:
            "Our ecosystem includes founder communities, influencer relationships, events, content infrastructure and digital commerce capabilities.",
        },
        {
          number: "04",
          title: "Operating Discipline",
          meta: "Build for Scale",
          description:
            "We help define priorities, milestones, operating systems, accountability and the infrastructure required for sustainable expansion.",
        },
        {
          number: "05",
          title: "Founder Community",
          meta: "Founders Clube",
          description:
            "Founders Clube is being developed as a private community connecting ambitious founders, creators, operators and future business leaders.",
        },
      ]}
      closingTitle="Bring us a company with real potential."
      closingText="The ideal founder has conviction, evidence of demand and the humility to build alongside a strategic operating partner."
      primaryAction="Book a Consultation"
      primaryHref="https://calendly.com/seaintco/new-meeting"
    />
  );
}

