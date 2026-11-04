import SiteHeader from "@/components/home/SiteHeader";
import Hero from "@/components/home/Hero";
import EcosystemTicker from "@/components/home/EcosystemTicker";
import EnterpriseOrbit from "@/components/home/EnterpriseOrbit";
import Footer from "@/components/home/Footer";
import MediaPreview from "@/components/editorial/MediaPreview";
import HomeNewsMarket from "@/components/home/HomeNewsMarket";
import { getMarketHeadlines } from "@/lib/market-news";

export const revalidate = 1800;

export default async function Home() {
  const headlines = await getMarketHeadlines();
  return (
    <main id="top" className="min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <Hero />
      <EcosystemTicker />
      <EnterpriseOrbit />
      <HomeNewsMarket headlines={headlines} />
      <MediaPreview />
      <Footer />
    </main>
  );
}

