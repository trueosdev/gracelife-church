import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Sermons & Podcast",
  description:
    "Confessional Reformed Baptist preaching from GraceLife Church, Decatur AL — verse-by-verse expository sermons in covenant theology and the Doctrines of Grace. Spotify, Apple Podcasts, and more.",
  alternates: { canonical: "/resources/sermons" },
}

export default function SermonsLayout({ children }: { children: React.ReactNode }) {
  return children
}
