import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Documents, guides, and materials from GraceLife Church in Decatur, AL — a Gospel-centered church committed to biblical teaching and the Reformed Baptist tradition.",
  alternates: { canonical: "/resources" },
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
