import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Biblical Counseling",
  description:
    "GraceLife Counseling is the biblical counseling ministry of GraceLife Church in Decatur, AL. Christ-centered care from God's Word, offered through the local church.",
  alternates: { canonical: "/biblical-counseling" },
  // DRAFT: page is unlinked and hidden from search until it's approved.
  robots: { index: false, follow: false },
}

export default function CounselingLayout({ children }: { children: React.ReactNode }) {
  return children
}
