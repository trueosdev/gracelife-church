import type { Metadata } from "next"
import { Header } from "@/components/header"
import { DoctrinalSection } from "@/components/doctrinal-section"
import { DistinctivesSection } from "@/components/distinctives-section"
import { StaffSection } from "@/components/staff-section"
import { Footer } from "@/components/footer"

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
      
      {/* Hero Banner */}
      <section
        className="relative pt-48 pb-32 px-6 bg-[#2C4061] bg-cover bg-[center_20%]"
        style={{ backgroundImage: "url('/churchbuilding.png')" }}
      >
        <div className="absolute inset-0 bg-[#2C4061]/60" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#F5F3EE] mb-4">About Us</h1>
          <p className="text-xl text-[#F5F3EE] max-w-2xl mx-auto">
            Learn more about GraceLife Church — our beliefs, our mission, and our community.
          </p>
        </div>
      </section>

      <DoctrinalSection />
      <StaffSection />
      <DistinctivesSection />
      <Footer />
    </main>
  )
}

