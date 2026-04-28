import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site-seo"

const PATHS: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about/statement-of-faith", priority: 0.85, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
  { path: "/calendar", priority: 0.8, changeFrequency: "weekly" },
  { path: "/resources", priority: 0.8, changeFrequency: "monthly" },
  { path: "/resources/sermons", priority: 0.85, changeFrequency: "weekly" },
  { path: "/pastors-pen", priority: 0.7, changeFrequency: "monthly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const now = new Date()
  return PATHS.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
