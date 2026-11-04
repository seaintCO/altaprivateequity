import type { Metadata } from "next";
import JournalPageClient from "@/components/editorial/JournalPageClient";
import { getMarketHeadlines } from "@/lib/market-news";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Journal, Market News & Insights",
  description: "Original SEAINT perspectives, attributed business headlines, TradingView market news and founder films.",
};

export default async function InsightsPage() {
  const headlines = await getMarketHeadlines();
  return <JournalPageClient headlines={headlines} />;
}
