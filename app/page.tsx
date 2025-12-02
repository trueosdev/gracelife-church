import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatementSection } from "@/components/statement-section"
import { TheologicalSection } from "@/components/theological-section"
import { MissionSection } from "@/components/mission-section"

export default function Page() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StatementSection />
      <TheologicalSection />
      <MissionSection />
    </main>
  )
}
