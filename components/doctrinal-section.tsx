import Link from "next/link"
import { Button } from "@/components/ui/button"

export function DoctrinalSection() {
  return (
    <section id="doctrinal-statement" className="py-12 md:py-20 px-6 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 text-center md:text-right">
          <h2 className="text-3xl md:text-6xl font-bold text-[#2C4061] mb-8 leading-tight">
            Our Doctrinal<br />Statement
          </h2>
          <p className="text-lg text-[#2C4061] mb-8 leading-relaxed max-w-lg mx-auto md:ml-auto md:mr-0">
            GraceLife Church Statement of Faith is a summary of Basic Christian Doctrine that summarizes the beliefs of GraceLife Church.
          </p>
          <div className="flex justify-center md:justify-end">
          <Link href="/about/statement-of-faith">
            <Button className="bg-[#F5F3EE] text-[#2C4061] border border-[#2C4061] hover:bg-[#2C4061]/80 hover:text-[#F5F3EE] transition-colors px-8 py-6 text-base rounded-full">
              Read the Statement
            </Button>
          </Link>
          </div>
        </div>



        <div className="order-1 md:order-2 relative group overflow-hidden rounded-lg">
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

