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
            <Button className="bg-[#2C4061] text-white hover:bg-[#4a7a8a] transition-colors px-8 py-6 text-base rounded-full">
              Read More
            </Button>
          </div>
        </div>

        <div className="relative">
          <img src="/theology.webp" alt="Theological Distinctives" className="rounded-lg w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
