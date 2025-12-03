import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TheologicalSection() {
  return (
    <section className="py-20 px-6 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C4061] mb-6 text-right">Theological Distinctives</h2>
          <p className="text-lg text-[#5D5D5D] mb-8 leading-relaxed text-right">
          Expository preaching. Biblical Community.<br />Kingdom Advancement. Soli Deo Gloria.
          </p>
          <div className="flex justify-end">
            <Link href="/about#distinctives">
              <Button className="bg-[#2C4061] text-white hover:bg-[#4a7a8a] transition-colors px-8 py-6 text-base rounded-full">
                Read More
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-lg">
          <img src="/theology.webp" alt="Theological Distinctives" className="w-full h-auto transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-white/0 backdrop-blur-0 transition-all duration-300 group-hover:bg-white/10" />
        </div>
      </div>
    </section>
  )
}
