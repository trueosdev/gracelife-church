/**
 * SEO copy and structured data for /biblical-counseling. The FAQ answers restate
 * what the page already says: Google ignores (and can penalize) structured data
 * that isn't backed by visible content, so update both together.
 */
import {
  CHURCH_ADDRESS,
  CHURCH_GEO,
  CHURCH_PHONE,
  churchId,
  getSiteUrl,
  SITE_NAME,
} from "@/lib/site-seo"

export const COUNSELING_PATH = "/biblical-counseling"

export const COUNSELING_NAME = "GraceLife Biblical Counseling"

export const COUNSELING_EMAIL = "Parker@gracelifedecatur.org"

// BibliCare portal: new counselees create an account, complete the required forms,
// and submit a care request there; returning counselees sign in at the same link.
export const COUNSELING_PORTAL_URL =
  "https://biblicare.net/Site/Access/Login?KeyID=EBCAC141-1224-490B-B7F5-27852787"

/** Page <title>; the root template appends " | GraceLife Church". */
export const COUNSELING_TITLE = "Biblical Counseling in Decatur, AL"

/** ~155 chars for meta description SERP display. */
export const COUNSELING_META_DESCRIPTION =
  "Biblical counseling in Decatur, AL at GraceLife Church: Christ-centered help from Scripture for marriage, grief, anxiety & depression. Free to attenders."

/** Full who/where/what paragraph for Open Graph and JSON-LD. */
export const COUNSELING_LONG_DESCRIPTION =
  "GraceLife Biblical Counseling is the counseling ministry of GraceLife Church, a confessional Reformed Baptist church at 1311 19th Ave SE in Decatur, Alabama. Our counselors are certified through ACBC (Association of Certified Biblical Counselors) or IBCD (Institute of Biblical Counseling and Discipleship), or are working toward certification under supervision. We offer Christ-centered, Scripture-based counseling for marriage and family conflict, grief, anxiety, depression, anger, addiction, abuse, and the struggles of life in a fallen world, through careful listening, weekly sessions, and practical homework. Counseling is free to members, regular attenders, and active participants of GraceLife Church; as capacity allows, we also serve people from other churches across Decatur, Morgan County, and North Alabama."

export const COUNSELING_OG_IMAGE = "/counseling/counseling-og.png"

export const COUNSELING_OG_IMAGE_ALT =
  "GraceLife Biblical Counseling, Decatur, AL — “Come to me, all who labor and are heavy laden, and I will give you rest.” Matthew 11:28"

export const COUNSELING_KEYWORDS = [
  "GraceLife Biblical Counseling",
  "GraceLife Counseling",
  "GraceLife Church Decatur",
  "biblical counseling",
  "biblical counseling Decatur AL",
  "biblical counselor Decatur Alabama",
  "biblical counseling near me",
  "Christian counseling Decatur AL",
  "Christian counselor Decatur Alabama",
  "Christian counseling near me",
  "free Christian counseling Decatur AL",
  "church counseling Decatur AL",
  "pastoral counseling Decatur AL",
  "faith-based counseling Decatur AL",
  "biblical counseling Morgan County AL",
  "biblical counseling North Alabama",
  "biblical counseling Hartselle AL",
  "biblical counseling Huntsville AL",
  "biblical counseling Madison AL",
  "biblical counseling Athens AL",
  "ACBC certified biblical counselor",
  "ACBC biblical counseling Alabama",
  "IBCD biblical counseling",
  "nouthetic counseling",
  "Reformed Baptist biblical counseling",
  "Christ-centered counseling",
  "Scripture-based counseling",
  "gospel-centered counseling",
  "biblical marriage counseling Decatur AL",
  "Christian marriage counseling Decatur AL",
  "biblical grief counseling",
  "Christian counseling for anxiety",
  "Christian counseling for depression",
  "biblical counseling for anger",
  "biblical counseling for addiction",
]

/** Struggles the page names; listed as the ministry's areas of care. */
const AREAS_OF_CARE = [
  "Marriage and family conflict",
  "Grief and loss",
  "Anxiety and fear",
  "Depression",
  "Anger",
  "Addiction and stubborn sin patterns",
  "Abuse",
  "Physical illness and suffering",
  "Spiritual growth and discipleship",
]

/** In person at the church in Decatur; these are the communities within reach of it. */
const AREA_SERVED = [
  { "@type": "City", name: "Decatur, Alabama" },
  { "@type": "City", name: "Hartselle, Alabama" },
  { "@type": "City", name: "Priceville, Alabama" },
  { "@type": "City", name: "Trinity, Alabama" },
  { "@type": "City", name: "Huntsville, Alabama" },
  { "@type": "City", name: "Madison, Alabama" },
  { "@type": "City", name: "Athens, Alabama" },
  { "@type": "AdministrativeArea", name: "Morgan County, Alabama" },
  { "@type": "AdministrativeArea", name: "North Alabama" },
]

const COUNSELING_FAQS = [
  {
    question: "What is biblical counseling?",
    answer:
      "Biblical counseling is the conviction that God has not left His people without help: He has given us His Word, His Spirit, and His church, and these are enough. Scripture speaks to the struggles people carry through the door, and God uses ordinary conversations shaped by His Word to change hearts. Counseling begins with careful listening, then brings Scripture to bear on what is actually there. The aim is not behavior management but a heart that finds Christ sufficient and is transformed by His Spirit.",
  },
  {
    question: "Where is GraceLife Biblical Counseling located?",
    answer:
      "GraceLife Biblical Counseling is the counseling ministry of GraceLife Church, 1311 19th Ave SE, Decatur, AL 35601, in Morgan County, North Alabama. You can reach the church office at (256) 355-3790 or Parker@gracelifedecatur.org.",
  },
  {
    question: "What kinds of struggles does biblical counseling help with?",
    answer:
      "Marriages that have grown cold, grief that won't lift, anger, anxiety, depression, addiction, abuse, stubborn sin patterns, and the weight of physical illness. Biblical counseling does not wave away hard things; they are taken seriously, understood biblically, and met with truth and compassion.",
  },
  {
    question: "Who can receive counseling at GraceLife Church?",
    answer:
      "Counseling is available to members, regular attenders, and active participants of GraceLife Church in Decatur, AL. Where we have capacity, we also serve those from other churches, who are asked to bring an advocate from their own church: a leader or someone in spiritual leadership there (for women, a woman in that role). For counselees under 18, parents are required to be involved in sessions, homework, and accountability.",
  },
  {
    question: "How much does biblical counseling cost?",
    answer:
      "Counseling is free for members, regular attenders, and active participants of GraceLife Church; you may need to purchase study materials for your own use. For those who remain members or attenders of another church, a suggested donation of $60 per session helps offset facility and administrative costs. Donations go directly to GraceLife Church and are not tax-deductible. Financial hardship options are available on request, and no one is turned away because they cannot pay.",
  },
  {
    question: "Are your counselors licensed therapists?",
    answer:
      "No. Our counselors are certified through ACBC (Association of Certified Biblical Counselors) or IBCD (Institute of Biblical Counseling and Discipleship), or are working toward certification under supervision. They are not licensed psychotherapists, mental health professionals, or health care providers. We give no medical, legal, or financial advice, and never advise changing a medication.",
  },
  {
    question: "How do I start counseling?",
    answer:
      "Request counseling through our online care portal, or contact the church office at (256) 355-3790 or Parker@gracelifedecatur.org. A short email is enough. Before your first session you'll complete our Personal Data Inventory and read and sign the Informed Consent Agreement. You'll then meet with a counselor, usually weekly.",
  },
  {
    question: "Is counseling confidential?",
    answer:
      "Yes. What you share is carefully guarded, within the limits we state up front in the Informed Consent Agreement. We follow written protocols for domestic abuse, child abuse reporting, and risk of harm to self or others, in keeping with Alabama law and our duty to protect the vulnerable.",
  },
  {
    question: "How long does counseling last?",
    answer:
      "Counseling is a season, not a permanent arrangement. Sessions are usually weekly and include listening, Scripture, prayer, and homework between meetings. When counseling concludes, the goal is that you keep growing in the ordinary life of the church.",
  },
  {
    question: "What should I do if I'm in crisis?",
    answer:
      "Counseling is not an emergency service. If you or someone you love is in immediate danger, call 911. For the Suicide & Crisis Lifeline, call or text 988. The Alabama Domestic Violence Hotline is 1-800-500-1119, and Morgan County DHR is (256) 301-8800. Then tell us, because we want to walk with you through it.",
  },
]

/**
 * Schema.org graph for the counseling page: the page itself (with its FAQ), a
 * breadcrumb, the counseling Service offered by the church, and the "How It Works"
 * steps. The church node comes from the root layout and is referenced by @id.
 */
export function counselingJsonLd(steps: readonly { title: string; body: string }[]) {
  const base = getSiteUrl()
  const url = `${base}${COUNSELING_PATH}`
  const church = { "@id": churchId() }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["WebPage", "FAQPage"],
        "@id": `${url}#webpage`,
        url,
        name: `${COUNSELING_TITLE} | ${SITE_NAME}`,
        description: COUNSELING_META_DESCRIPTION,
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${base}/#website`,
          name: SITE_NAME,
          url: base,
          publisher: church,
        },
        publisher: church,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: { "@id": `${url}#primaryimage` },
        image: { "@id": `${url}#primaryimage` },
        about: [
          { "@id": `${url}#service` },
          { "@type": "Thing", name: "Biblical counseling" },
          { "@type": "Thing", name: "Christian counseling" },
          { "@type": "Thing", name: "Pastoral care" },
          { "@type": "Thing", name: "Sufficiency of Scripture" },
        ],
        mentions: [
          {
            "@type": "Organization",
            name: "Association of Certified Biblical Counselors",
            alternateName: "ACBC",
            url: "https://biblicalcounseling.com",
          },
          {
            "@type": "Organization",
            name: "Institute of Biblical Counseling and Discipleship",
            alternateName: "IBCD",
            url: "https://www.ibcd.org",
          },
        ],
        keywords: COUNSELING_KEYWORDS.join(", "),
        mainEntity: COUNSELING_FAQS.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      {
        "@type": "ImageObject",
        "@id": `${url}#primaryimage`,
        url: `${base}${COUNSELING_OG_IMAGE}`,
        contentUrl: `${base}${COUNSELING_OG_IMAGE}`,
        width: 1200,
        height: 630,
        caption: COUNSELING_OG_IMAGE_ALT,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: base },
          { "@type": "ListItem", position: 2, name: "Biblical Counseling", item: url },
        ],
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: COUNSELING_NAME,
        alternateName: [
          "GraceLife Counseling",
          "GraceLife Church Biblical Counseling",
          "Biblical Counseling at GraceLife Church Decatur",
        ],
        serviceType: "Biblical counseling",
        category: ["Biblical counseling", "Christian counseling", "Pastoral care"],
        description: COUNSELING_LONG_DESCRIPTION,
        slogan:
          "Come to me, all who labor and are heavy laden, and I will give you rest. Matthew 11:28",
        url,
        image: `${base}${COUNSELING_OG_IMAGE}`,
        logo: `${base}/counseling/biblical-counseling-logo.svg`,
        provider: church,
        areaServed: AREA_SERVED,
        audience: {
          "@type": "Audience",
          audienceType:
            "Members, regular attenders, and active participants of GraceLife Church; individuals, couples, and families from other churches who come with an advocate from their home church",
          geographicArea: { "@type": "AdministrativeArea", name: "North Alabama" },
        },
        availableChannel: {
          "@type": "ServiceChannel",
          name: "Request Care",
          serviceUrl: COUNSELING_PORTAL_URL,
          availableLanguage: { "@type": "Language", name: "English", alternateName: "en" },
          servicePhone: {
            "@type": "ContactPoint",
            contactType: "Biblical counseling",
            telephone: CHURCH_PHONE,
            email: COUNSELING_EMAIL,
            areaServed: "US-AL",
            availableLanguage: "English",
          },
          serviceLocation: {
            "@type": "Place",
            name: SITE_NAME,
            address: CHURCH_ADDRESS,
            geo: CHURCH_GEO,
            hasMap:
              "https://www.google.com/maps/search/?api=1&query=GraceLife+Church+1311+19th+Ave+SE+Decatur+AL+35601",
          },
        },
        offers: [
          {
            "@type": "Offer",
            name: "Biblical counseling for GraceLife Church members and attenders",
            description:
              "Free for members, regular attenders, and active participants of GraceLife Church. You may need to purchase study materials for your own use.",
            price: 0,
            priceCurrency: "USD",
            url,
          },
          {
            "@type": "Offer",
            name: "Biblical counseling for members of other churches",
            description:
              "Suggested donation of $60 per session to offset facility and administrative costs. Not tax-deductible. Financial hardship options are available on request; no one is turned away because they cannot pay.",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: 60,
              priceCurrency: "USD",
              unitText: "session",
            },
            url,
          },
        ],
        termsOfService: `${base}/counseling/GL_Informed_Consent_Agreement.pdf`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Areas of care",
          itemListElement: AREAS_OF_CARE.map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: `Biblical counseling for ${name.toLowerCase()}` },
          })),
        },
      },
      {
        "@type": "HowTo",
        "@id": `${url}#how-it-works`,
        name: "How to begin biblical counseling at GraceLife Church in Decatur, AL",
        description:
          "Nothing about the process is meant to be mysterious. Here is what to expect from the first email to the last session.",
        step: steps.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: step.title,
          text: step.body,
          url: `${url}#how-it-works`,
        })),
      },
    ],
  }
}
