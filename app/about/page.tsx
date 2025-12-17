import { Header } from "@/components/header"
import { DoctrinalSection } from "@/components/doctrinal-section"
import { DistinctivesSection } from "@/components/distinctives-section"
import { StaffSection } from "@/components/staff-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 px-6 bg-[#2C4061]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-[#F5F3EE] mb-4">About Us</h1>
          <p className="text-xl text-[#F5F3EE] max-w-2xl">
            Learn more about GraceLife Church — our beliefs, our mission, and our community.
          </p>
        </div>
      </section>

      <DoctrinalSection />
      <DistinctivesSection />
      <StaffSection />
      <Footer />
    </main>
  )
}

