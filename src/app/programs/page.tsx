import InternalPage from "@/components/internal/InternalPage";

export default function ProgramsPage() {
  return (
    <InternalPage
      eyebrow="Programs and Community"
      title="Developing the"
      accent="next generation."
      introduction="SEAINT’s programs connect entrepreneurship, technology, community and practical business execution."
      statement="Our programs are designed to create capable founders and operators, not simply audiences, through access, accountability and real-world building."
      details={[
        {
          number: "01",
          title: "Founders Clube",
          meta: "Private Founder Community",
          description:
            "A curated community for founders, creators, operators and business leaders built through private events, experiences and strategic relationships.",
        },
        {
          number: "02",
          title: "Founder Accelerators",
          meta: "Build and Launch",
          description:
            "Selective programs focused on business formation, branding, software, artificial intelligence, marketing, product development and execution.",
        },
        {
          number: "03",
          title: "Future Founders",
          meta: "High School and College",
          description:
            "Programs introducing younger founders to entrepreneurship, technology, financial literacy, leadership and responsible company building.",
        },
        {
          number: "04",
          title: "Founders Influence",
          meta: "Creators and Distribution",
          description:
            "A network connecting creators and influencers with events, brands, founders and portfolio opportunities throughout the SEAINT ecosystem.",
        },
        {
          number: "05",
          title: "Community Experiences",
          meta: "Nashville and Beyond",
          description:
            "Founder dinners, educational sessions, wellness activations, private gatherings and public community events designed to create meaningful relationships.",
        },
      ]}
      closingTitle="Access should lead to execution."
      closingText="SEAINT programs are being built for participants prepared to contribute, learn, collaborate and turn opportunity into measurable progress."
      primaryAction="Explore Partnership"
      primaryHref="/contact"
    />
  );
}
