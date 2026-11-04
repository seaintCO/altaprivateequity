/**
 * Option A: add videos below. Paste the 11-character YouTube VIDEO ID, not a full URL.
 * Option B: set YOUTUBE_CHANNEL_ID in your Vercel project to load the latest channel videos automatically.
 * No fictional videos are included.
 */
export type Vlog = {
  youtubeId: string;
  title: string;
  published?: string;
  description?: string;
};

export const manualVlogs: Vlog[] = [
  // { youtubeId: "YOUR_VIDEO_ID", title: "Your founder interview", published: "2026-11-03" },
];
