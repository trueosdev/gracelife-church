import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WorshipSection } from "@/components/worship-section"
import { StatementSection } from "@/components/statement-section"
import { TheologicalSection } from "@/components/theological-section"
import { SubscribeSection } from "@/components/subscribe-section"
import { Footer } from "@/components/footer"
import { Aurora } from "@/components/ambient"
import { getSiteUrl } from "@/lib/site-seo"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: getSiteUrl() },
}

export default function Page() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WorshipSection />
      {/* One cream canvas with drifting glows behind the lighter sections */}
      <div className="relative bg-[#F5F3EE]">
        <Aurora />
        <div className="relative">
          <StatementSection />
          <TheologicalSection />
          <SubscribeSection />
        </div>
      </div>
      <Footer />
    </main>
  )
}
