import type { Metadata } from "next"
import type React from "react"
import { CHURCH_GEO, CHURCH_PHONE, SITE_NAME } from "@/lib/site-seo"
import {
  COUNSELING_EMAIL,
  COUNSELING_KEYWORDS,
  COUNSELING_LONG_DESCRIPTION,
  COUNSELING_META_DESCRIPTION,
  COUNSELING_OG_IMAGE,
  COUNSELING_OG_IMAGE_ALT,
  COUNSELING_PATH,
  COUNSELING_TITLE,
} from "@/lib/counseling-seo"

const FULL_TITLE = `${COUNSELING_TITLE} | ${SITE_NAME}`

export const metadata: Metadata = {
  title: COUNSELING_TITLE,
  description: COUNSELING_META_DESCRIPTION,
  keywords: COUNSELING_KEYWORDS,
  category: "Biblical Counseling",
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: COUNSELING_PATH },
  // Child openGraph/twitter replace the root's entirely, so every field is restated here.
  openGraph: {
    title: FULL_TITLE,
    description: COUNSELING_LONG_DESCRIPTION,
    url: COUNSELING_PATH,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    countryName: "United States",
    emails: [COUNSELING_EMAIL],
    phoneNumbers: [CHURCH_PHONE],
    images: [
      {
        url: COUNSELING_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: COUNSELING_OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: FULL_TITLE,
    description: COUNSELING_META_DESCRIPTION,
    images: [{ url: COUNSELING_OG_IMAGE, alt: COUNSELING_OG_IMAGE_ALT }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Local-search geo tags: the church building in Decatur, AL.
  other: {
    "geo.region": "US-AL",
    "geo.placename": "Decatur, Alabama",
    "geo.position": `${CHURCH_GEO.latitude};${CHURCH_GEO.longitude}`,
    ICBM: `${CHURCH_GEO.latitude}, ${CHURCH_GEO.longitude}`,
  },
}

export default function CounselingLayout({ children }: { children: React.ReactNode }) {
  return children
}
