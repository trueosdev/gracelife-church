import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WorshipSection } from "@/components/worship-section"
import { StatementSection } from "@/components/statement-section"
import { TheologicalSection } from "@/components/theological-section"
import { SubscribeSection } from "@/components/subscribe-section"
import { Footer } from "@/components/footer"

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
