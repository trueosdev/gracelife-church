"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PodcastFeed } from "@/components/podcast-feed"

export default function SermonsPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 px-6 bg-[#2C4061]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-[#F5F3EE] mb-4">Sermons</h1>
          <p className="text-xl text-[#F5F3EE] max-w-2xl">
            Listen to sermons from the preaching ministry of GraceLife Church
          </p>
        </div>
      </section>

      {/* Podcast Feed Section */}
      <section className="py-20 px-6 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto">
          <PodcastFeed />
        </div>
      </section>

      <Footer />
    </main>
  )
}

