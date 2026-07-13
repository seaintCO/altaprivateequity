import InternalPage from "@/components/internal/InternalPage";

export default function OperatingModelPage() {
  return (
    <InternalPage
      eyebrow="Operating Model"
      title="One ecosystem."
      accent="Multiple advantages."
      introduction="SEAINT is designed so its companies can share technology, intelligence, distribution, relationships and operating infrastructure."
      statement="Instead of treating each company as an isolated asset, we build systems that allow every part of the ecosystem to make the others stronger."
      details={[
        {
          number: "01",
          title: "Intelligence Layer",
          meta: "ALMA",
          description:
            "ALMA is envisioned as the intelligence layer across the ecosystem, supporting chat, voice, image, video, code, memory, research and business execution.",
        },
        {
          number: "02",
          title: "Technology Layer",
          meta: "SEAINT Intelligence",
          description:
            "SEAINT Intelligence builds software, operating systems, websites, dashboards, AI agents and automation for portfolio companies and external businesses.",
        },
        {
          number: "03",
          title: "Community Layer",
          meta: "Founders Clube",
          description:
            "Founders Clube creates relationships, experiences, programming and opportunities among founders, operators, creators and emerging business leaders.",
        },
        {
          number: "04",
          title: "Distribution Layer",
          meta: "Founders Influence and Media",
          description:
            "Influencer partnerships, content, events and brand collaboration provide portfolio companies with access to attention and community-led distribution.",
        },
        {
          number: "05",
          title: "Commerce Layer",
          meta: "Alta Ecosystem",
          description:
            "Alta supports events, sports commerce, e-commerce concepts, digital products and brand-led commercial opportunities.",
        },
        {
          number: "06",
          title: "Creative Layer",
          meta: "NoctrAI",
          description:
            "NoctrAI is being developed for AI-assisted image, video and creative production across brands, campaigns and digital commerce.",
        },
      ]}
      closingTitle="Built independently. Stronger together."
      closingText="SEAINT’s long-term advantage is the ability to repeatedly create, acquire and scale companies using infrastructure that improves with every new business."
    />
  );
}

