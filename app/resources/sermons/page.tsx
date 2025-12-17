"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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

      {/* Podcast Embed Section */}
      <section className="py-20 px-6 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#F8F6F3] rounded-lg shadow-md p-8 flex justify-center">
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="450"
              style={{ width: '100%', maxWidth: '1000px', overflow: 'hidden', borderRadius: '10px' }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.podcasts.apple.com/us/podcast/gracelife-church-podcast/id1676514693"
              title="GraceLife Church Podcast"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

