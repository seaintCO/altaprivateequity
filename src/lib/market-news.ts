
/** Public headlines only. Full news articles stay with the original publisher. */
export type MarketHeadline = {
  title: string;
  url: string;
  source: string;
  published: string;
};

const FEED_URL = "https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=en-US&gl=US&ceid=US:en";

function decodeEntities(value: string): string {
  const entities: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/gi, "$1")
    .replace(/&#(x[0-9a-f]+|\d+);/gi, (_, num: string) => {
      const code = num[0]?.toLowerCase() === "x" ? Number.parseInt(num.slice(1), 16) : Number.parseInt(num, 10);
      return Number.isFinite(code) && code > 0 && code <= 0x10ffff && !(code >= 0xd800 && code <= 0xdfff)
        ? String.fromCodePoint(code)
        : "";
    })
    .replace(/&(amp|lt|gt|quot|apos|nbsp);/gi, (_, entity: string) => entities[entity.toLowerCase()] ?? "")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function readTag(xml: string, name: string): string {
  const pattern = new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\/${name}>`, "i");
  return decodeEntities(xml.match(pattern)?.[1] ?? "");
}

export async function getMarketHeadlines(): Promise<MarketHeadline[]> {
  try {
    const response = await fetch(FEED_URL, {
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
      next: { revalidate: 1800 },
      signal: AbortSignal.timeout(6000),
    });
    if (!response.ok) return [];
    const xml = await response.text();
    const items = xml.match(/<item(?:\s[^>]*)?>[\s\S]*?<\/item>/gi) ?? [];
    const results = items.flatMap((item): MarketHeadline[] => {
      const title = readTag(item, "title");
      const url = readTag(item, "link");
      if (!title || !url) return [];
      try {
        if (new URL(url).protocol !== "https:") return [];
      } catch { return []; }
      return [{
        title,
        url,
        source: readTag(item, "source") || "Google News",
        published: readTag(item, "pubDate"),
      }];
    });
    const seen = new Set<string>();
    return results.filter((story) => {
      if (seen.has(story.url)) return false;
      seen.add(story.url);
      return true;
    }).slice(0, 9);
  } catch {
    // Network limits should never break the rest of the page or its build.
    return [];
  }
}
