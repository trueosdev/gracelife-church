import type { Metadata } from "next"
import type React from "react"
import { SITE_NAME } from "@/lib/site-seo"

const TITLE = "Biblical Counseling"
const DESCRIPTION =
  "GraceLife Counseling is the biblical counseling ministry of GraceLife Church in Decatur, AL. Christ-centered care from God's Word, offered through the local church."
const OG_IMAGE = "/counseling/counseling-og.png"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/biblical-counseling" },
  // Child openGraph/twitter replace the root's entirely, so every field is restated here.
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: "/biblical-counseling",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "GraceLife Biblical Counseling — “Come to me, all who labor and are heavy laden, and I will give you rest.” Matthew 11:28",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  // DRAFT: page is unlinked and hidden from search until it's approved.
  robots: { index: false, follow: false },
}

export default function CounselingLayout({ children }: { children: React.ReactNode }) {
  return children
}
