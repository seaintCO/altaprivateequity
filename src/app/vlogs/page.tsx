import type { Metadata } from "next";
import VlogsPageClient from "@/components/editorial/VlogsPageClient";
import { getVlogs } from "@/lib/youtube-vlogs";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Founder Films & Vlogs",
  description: "Founder films, entrepreneur interviews, technology ventures and behind-the-scenes videos from ALTA and SEAINT.",
  alternates: { canonical: "/vlogs" },
  openGraph: { type: "website", url: "https://seaintenterprises.com/vlogs", title: "ALTA | Founder Films & Vlogs" },
};

export default async function VlogsPage() {
  const videos = await getVlogs();
  return <VlogsPageClient videos={videos} />;
}
