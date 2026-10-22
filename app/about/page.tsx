import type { Metadata } from "next"
import { Header } from "@/components/header"
import { DoctrinalSection } from "@/components/doctrinal-section"
import { DistinctivesSection } from "@/components/distinctives-section"
import { StaffSection } from "@/components/staff-section"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Aurora } from "@/components/ambient"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet GraceLife Church in Decatur, AL — a confessional Reformed Baptist congregation: staff, distinctives, New Hampshire Confession, and verse-by-verse expository ministry.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      <PageHero title="About Us" image="/churchbuilding.png" imagePosition="center 20%">
        <p>Learn more about GraceLife Church — our beliefs, our mission, and our community.</p>
      </PageHero>

      <div className="relative bg-[#F5F3EE]">
        <Aurora />
        <div className="relative">
          <DoctrinalSection />
          <StaffSection />
          <DistinctivesSection />
        </div>
      </div>
      <Footer />
    </main>
  )
}

