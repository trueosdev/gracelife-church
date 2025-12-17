import Link from "next/link"
import { Button } from "@/components/ui/button"

export function DoctrinalSection() {
  return (
    <section id="doctrinal-statement" className="py-20 px-6 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2C4061] mb-8 leading-tight text-right">
            Our Doctrinal<br />Statement
          </h2>
          <p className="text-lg text-[#2C4061] mb-8 leading-relaxed max-w-lg text-right">
            GraceLife Church Statement of Faith is a summary of Basic Christian Doctrine that summarizes the beliefs of GraceLife Church.
          </p>
          <div className="flex justify-end">
          <Link href="/about/statement-of-faith">
            <Button className="bg-[#F5F3EE] text-[#2C4061] border border-[#2C4061] hover:bg-[#2C4061]/80 hover:text-[#F5F3EE] transition-colors px-8 py-6 text-base rounded-full">
              Read the Statement
            </Button>
          </Link>
          </div>
        </div>



        <div className="relative group overflow-hidden rounded-lg">
          <img 
            src="/theology.webp" 
            alt="Open Bible" 
            className="w-full h-auto transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-[#F5F3EE]/0 transition-all duration-300 group-hover:bg-[#F5F3EE]/10" />
        </div>
      </div>
    </section>
  )
}

