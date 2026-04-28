import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Sermons & Podcast",
  description:
    "Listen to verse-by-verse expository sermons from GraceLife Church, Decatur AL — Reformed Baptist preaching for the glory of God. Podcast on Spotify, Apple Podcasts, and more.",
  alternates: { canonical: "/resources/sermons" },
}

export default function SermonsLayout({ children }: { children: React.ReactNode }) {
  return children
}
