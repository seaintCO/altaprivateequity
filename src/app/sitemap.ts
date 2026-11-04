import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/content/editorial";

const origin = "https://seaintenterprises.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/saint", "/about", "/team", "/founders", "/portfolio", "/focus-areas", "/investment-approach", "/operating-model", "/business-owners", "/contact", "/insights", "/vlogs"];
  const pages: MetadataRoute.Sitemap = paths.map(path => ({
    url: `${origin}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" || path === "/saint" ? 1 : 0.6,
  }));
  const posts: MetadataRoute.Sitemap = getPublishedPosts().map(post => ({
    url: `${origin}/insights/${post.slug}`,
    lastModified: new Date(`${post.date}T12:00:00Z`),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));
  return [...pages, ...posts];
}
