"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PodcastFeed } from "@/components/podcast-feed"
import { PageHero } from "@/components/page-hero"
import { Aurora } from "@/components/ambient"

export default function SermonsPage() {
  return (
    <main>
      <Header />
      
      <PageHero title="Sermons">
        <p>Listen to sermons from the preaching ministry of GraceLife Church</p>
      </PageHero>

      {/* Podcast Feed Section */}
      <section className="relative py-20 md:py-28 px-6 bg-[#F5F3EE]">
        <Aurora />
        <div className="relative max-w-7xl mx-auto">
          <PodcastFeed />
        </div>
      </section>

      <Footer />
    </main>
  )
}

