import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Documents and guides from GraceLife Church, Decatur AL — a confessional Reformed Baptist church (New Hampshire Confession) committed to biblical teaching and church life.",
  alternates: { canonical: "/resources" },
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
