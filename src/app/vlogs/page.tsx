import type { Metadata } from "next";
import VlogsPageClient from "@/components/editorial/VlogsPageClient";
import { getVlogs } from "@/lib/youtube-vlogs";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Founder Films & Vlogs",
  description: "SEAINT founder films, conversations and behind-the-scenes video updates.",
};

export default async function VlogsPage() {
  const videos = await getVlogs();
  return <VlogsPageClient videos={videos} />;
}
