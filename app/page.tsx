import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WorshipSection } from "@/components/worship-section"
import { StatementSection } from "@/components/statement-section"
import { TheologicalSection } from "@/components/theological-section"
import { SubscribeSection } from "@/components/subscribe-section"
import { Footer } from "@/components/footer"
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
      <StatementSection />
      <TheologicalSection />
      <SubscribeSection />
      <Footer />
    </main>
  )
}
