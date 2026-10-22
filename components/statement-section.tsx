import Link from "next/link"
import { Button } from "@/components/ui/button"

export function StatementSection() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 md:gap-24 items-center">
        <div className="relative group overflow-hidden rounded-3xl shadow-[0_40px_80px_-40px_rgba(44,64,97,0.45)]" data-reveal>
          <img src="/gospelcentered.webp" alt="Gospel-Centered Church" className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105" />
        </div>

        <div className="text-center md:text-left" data-reveal>
          <h2 className="text-4xl md:text-6xl text-[#2C4061] mb-8">A Gospel-Centered Church</h2>
          <p className="text-lg text-[#5D5D5D] mb-10 leading-[1.85] max-w-md mx-auto md:mx-0">
          We believe Christianity is better than a list of rules,
          and more than believing the right things. The Christian life is a life transformed by the gospel,
          experienced in community, and lived out for the glory of God and the good of our neighbors.
          </p>
          <Button asChild className="bg-[#2C4061] text-[#F5F3EE] hover:bg-[#3b5479] transition-colors px-9 py-6 text-base rounded-full">
            <Link href="/about">Get to know us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
