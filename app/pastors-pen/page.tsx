import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Construction } from "lucide-react"

export const metadata: Metadata = {
  title: "Pastor's Pen",
  description:
    "Writing and resources from the pastors of GraceLife Church, Decatur AL — Gospel-centered shepherds in the Reformed Baptist tradition.",
  alternates: { canonical: "/pastors-pen" },
}

export default function PastorsPenPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="relative pt-32 pb-20 px-6 bg-[#2C4061] min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#F5F3EE] mb-8">
            coming soon...
          </h1>
        </div>
      </section>

      <Footer />
    </main>
  )
}

