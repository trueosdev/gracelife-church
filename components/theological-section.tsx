import { Button } from "@/components/ui/button"

export function TheologicalSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6">Theological Distinctives</h2>
          <p className="text-lg text-[#5D5D5D] mb-8 leading-relaxed">
          Expository preaching.<br />Biblical Community.<br />Kingdom Advancement.<br />Soli Deo Gloria.
          </p>
          <Button className="bg-[#2D2D2D] text-white hover:bg-[#2D2D2D]/90 px-8 py-6 text-base rounded-full">
            Read More
          </Button>
        </div>

        <div className="relative">
          <img src="/theology.webp" alt="Theological Distinctives" className="rounded-lg w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
