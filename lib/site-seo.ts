/**
 * Central SEO copy and structured data. Set NEXT_PUBLIC_SITE_URL in production
 * (e.g. https://www.yourdomain.com) so canonicals, OG URLs, and sitemap are correct.
 */
export const SITE_NAME = "GraceLife Church"

export const SEO_TAGLINE = "Find Grace · Find Truth · Find Life"

/** Full positioning paragraph for Open Graph, JSON-LD, and rich snippets. */
export const SEO_LONG_DESCRIPTION =
  "GraceLife is a Gospel-centered church dedicated to the glory of God through verse-by-verse expository preaching. While we affirm the New Hampshire Confession, our teaching is rooted in the historical Reformed Baptist tradition and a covenantal view of Scripture. We emphasize biblical order through meaningful membership, our Church Covenant, and a commitment to the Doctrines of Grace. Join us for worship on Sundays at 10:30 AM or Wednesdays at 6pm for mid-week study."

/** ~155 chars for meta description SERP display. */
export const SEO_META_DESCRIPTION =
  "GraceLife Church in Decatur, AL — Gospel-centered expository preaching, Reformed Baptist tradition, New Hampshire Confession, covenant theology, and the Doctrines of Grace. Sunday worship 10:30 AM, Wednesday Bible study 6 PM."

export const SEO_KEYWORDS = [
  "GraceLife Church",
  "GraceLife Church Decatur",
  "Decatur AL church",
  "Reformed Baptist church Alabama",
  "expository preaching",
  "verse by verse preaching",
  "New Hampshire Confession",
  "Doctrines of Grace",
  "covenant theology",
  "Gospel-centered church",
  "1689 Baptist",
  "church Decatur 35601",
]

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL
  if (raw) return raw.replace(/\/$/, "")
  return "https://gracelifedecatur.com"
}

export function churchJsonLd() {
  const base = getSiteUrl()
  return {
    "@context": "https://schema.org",
    "@type": "Church",
    name: SITE_NAME,
    description: SEO_LONG_DESCRIPTION,
    url: base,
    image: `${base}/ogimage.png`,
    logo: `${base}/icon.svg`,
    telephone: "+1-256-355-3790",
    email: "gracelifedecatur@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1311 19th Ave SE",
      addressLocality: "Decatur",
      addressRegion: "AL",
      postalCode: "35601",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.586639,
      longitude: -86.965997,
    },
    sameAs: [
      "https://www.facebook.com/GraceLifeChurchDecatur/",
      "https://www.youtube.com/@gracelifechurchdecatur",
      "https://open.spotify.com/show/5NAtfGfB9BEs5LCk1tnvd1",
      "https://podcasts.apple.com/us/podcast/gracelife-church-podcast/id1676514693",
    ],
  }
}
