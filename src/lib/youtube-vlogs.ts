import { manualVlogs, type Vlog } from "@/content/vlogs";

function value(xml: string, tag: "yt:videoId" | "title" | "published"): string {
  const match = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return (match?.[1] ?? "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

export async function getVlogs(): Promise<Vlog[]> {
  let fromChannel: Vlog[] = [];
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  if (channelId && /^UC[a-zA-Z0-9_-]{22}$/.test(channelId)) {
    try {
      const response = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(channelId)}`, {
        next: { revalidate: 1800 }, signal: AbortSignal.timeout(6000),
      });
      if (response.ok) {
        const xml = await response.text();
        const entries = xml.match(/<entry(?:\s[^>]*)?>[\s\S]*?<\/entry>/gi) ?? [];
        fromChannel = entries.flatMap((entry): Vlog[] => {
          const youtubeId = value(entry, "yt:videoId");
          const title = value(entry, "title");
          if (!/^[a-zA-Z0-9_-]{11}$/.test(youtubeId) || !title) return [];
          return [{ youtubeId, title, published: value(entry, "published") }];
        });
      }
    } catch { /* YouTube may limit requests; manually configured videos still work. */ }
  }
  const seen = new Set<string>();
  return [...manualVlogs, ...fromChannel].filter((video) => {
    if (!/^[a-zA-Z0-9_-]{11}$/.test(video.youtubeId) || seen.has(video.youtubeId)) return false;
    seen.add(video.youtubeId);
    return true;
  }).slice(0, 18);
}
