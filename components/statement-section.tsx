import { Button } from "@/components/ui/button"

export function StatementSection() {
  return (
    <section className="py-20 px-6 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src="/gospelcentered.webp" alt="EFCA church building" className="rounded-lg w-full h-auto" />
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6">A Gospel-Centered Church</h2>
          <p className="text-lg text-[#5D5D5D] mb-8 leading-relaxed">
          We believe Christianity is better than a list of rules, and more than believing the right things. The Christian life is a life transformed by the gospel, experienced in community, and lived out for the glory of God and the good of our neighbors.
          </p>
          <Button className="bg-[#2D2D2D] text-white hover:bg-[#2D2D2D]/90 px-8 py-6 text-base rounded-full">
            Read More
          </Button>
        </div>
      </div>
    </section>
  )
}
