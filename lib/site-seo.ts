/**
 * Central SEO copy and structured data. Set NEXT_PUBLIC_SITE_URL in production
 * (e.g. https://www.yourdomain.com) so canonicals, OG URLs, and sitemap are correct.
 */
export const SITE_NAME = "GraceLife Church"

export const SEO_TAGLINE = "Find Grace · Find Truth · Find Life"

/** Full positioning paragraph for Open Graph, JSON-LD, and rich snippets. */
export const SEO_LONG_DESCRIPTION =
  "GraceLife is a confessional Reformed Baptist church in Decatur, Alabama: we are united around the New Hampshire Confession of Faith as a public summary of biblical doctrine, while Scripture alone remains our supreme authority. That confessional identity places us in the historic Reformed Baptist stream—covenant theology, the Doctrines of Grace (Calvinistic soteriology), regenerate church membership, and believer's baptism—proclaimed through verse-by-verse expository preaching for the glory of God. We emphasize biblical order through meaningful membership, our Church Covenant, and faithful shepherding. Join us for Lord's Day worship Sundays at 10:30 AM and mid-week Bible study Wednesdays at 6 PM."

/** ~155 chars for meta description SERP display. */
export const SEO_META_DESCRIPTION =
  "Confessional Reformed Baptist church in Decatur, AL: New Hampshire Confession, covenant theology, Doctrines of Grace, expository preaching. Sun 10:30 AM, Wed 6 PM."

/** Topics for JSON-LD `knowsAbout` (doctrinal / search-relevant phrases). */
export const SEO_KNOWS_ABOUT = [
  "Confessional Reformed Baptist theology",
  "New Hampshire Confession of Faith",
  "Historic Reformed Baptist tradition",
  "Covenant theology",
  "Doctrines of Grace",
  "Calvinistic soteriology",
  "Regenerate church membership",
  "Believer's baptism (credobaptism)",
  "Expository preaching",
  "1689 London Baptist Confession (historical context)",
] as const

export const SEO_KEYWORDS = [
  "GraceLife Church",
  "confessional Reformed Baptist church",
  "confessional Baptist church Decatur AL",
  "GraceLife Church Decatur",
  "Decatur AL church",
  "Reformed Baptist church Alabama",
  "New Hampshire Confession church",
  "historic Baptist confession",
  "Particular Baptist",
  "1689 Baptist",
  "credobaptist Reformed church",
  "Calvinist Baptist church",
  "expository preaching",
  "verse by verse preaching",
  "New Hampshire Confession",
  "Doctrines of Grace",
  "covenant theology",
  "Gospel-centered church",
  "regenerate church membership",
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
    knowsAbout: [...SEO_KNOWS_ABOUT],
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
