import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TheologicalSection() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 md:gap-24 items-center">
        <div className="order-2 md:order-1 text-center md:text-right" data-reveal>
          <h2 className="text-4xl md:text-6xl text-[#2C4061] mb-8">Theological Distinctives</h2>
          <p className="text-lg text-[#5D5D5D] mb-10 leading-[1.85]">
          Expository preaching. Biblical Community.<br />Kingdom Advancement. Soli Deo Gloria.
          </p>
          <div className="flex justify-center md:justify-end">
            <Button asChild className="bg-[#2C4061] text-[#F5F3EE] hover:bg-[#3b5479] transition-colors px-9 py-6 text-base rounded-full">
              <Link href="/about#distinctives">What we believe</Link>
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2 relative group overflow-hidden rounded-3xl shadow-[0_40px_80px_-40px_rgba(44,64,97,0.45)]" data-reveal>
          <img src="/theology.webp" alt="Theological Distinctives" className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105" />
        </div>
      </div>
    </section>
  )
}
