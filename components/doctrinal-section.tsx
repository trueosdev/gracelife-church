import Link from "next/link"

export function DoctrinalSection() {
  return (
    <section className="py-20 px-6 bg-[#2C4061]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Our Doctrinal<br />Statement
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
            GraceLife Church Statement of Faith is a summary of Basic Christian Doctrine that summarizes the beliefs of GraceLife Church.
          </p>
          <Link 
            href="/about/statement-of-faith" 
            className="text-white text-xl italic underline underline-offset-4 hover:text-gray-300 transition-colors"
          >
            Read the Statement
          </Link>
        </div>

        <div className="relative group overflow-hidden rounded-lg">
          <img 
            src="/theology.webp" 
            alt="Open Bible" 
            className="w-full h-auto transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-white/0 transition-all duration-300 group-hover:bg-white/10" />
        </div>
      </div>
    </section>
  )
}

