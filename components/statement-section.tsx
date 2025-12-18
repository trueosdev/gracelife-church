import Link from "next/link"
import { Button } from "@/components/ui/button"

export function StatementSection() {
  return (
    <section className="py-12 md:py-20 px-6 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group overflow-hidden rounded-lg">
          <img src="/gospelcentered.webp" alt="Gospel-Centered Church" className="w-full h-auto transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[#F5F3EE]/0 backdrop-blur-0 transition-all duration-300 group-hover:bg-[#F5F3EE]/10" />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2C4061] mb-6">A Gospel-Centered Church</h2>
          <p className="text-lg text-[#5D5D5D] mb-8 leading-relaxed">
          We believe Christianity is better than a list of rules,
          and more than believing the right things. The Christian life is a life transformed by the gospel,
          experienced in community, and lived out for the glory of God and the good of our neighbors.
          </p>
          <Link href="/about">
            <Button className="bg-[#2C4061] text-[#F5F3EE] hover:bg-[#4a7a8a] transition-colors px-8 py-6 text-base rounded-full">
              Get to know us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
