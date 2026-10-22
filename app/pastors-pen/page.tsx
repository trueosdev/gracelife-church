import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Pastor's Pen",
  description:
    "Writing from GraceLife Church pastors, Decatur AL — confessional Reformed Baptist shepherds committed to the NH Confession and expository ministry.",
  alternates: { canonical: "/pastors-pen" },
}

export default function PastorsPenPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <PageHero title="Pastor's Pen" waveFill="#2C4061" className="min-h-[80vh] flex flex-col justify-center">
        <p>Coming soon.</p>
      </PageHero>

      <Footer />
    </main>
  )
}

