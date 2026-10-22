"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Aurora } from "@/components/ambient"
import { FileText, BookOpen, Users, MessageSquare, Download, MessagesSquare, MessageCircleQuestion, ShoppingBag, Baby} from "lucide-react"

// Dynamically import PdfModal with SSR disabled to avoid DOMMatrix issues
const PdfModal = dynamic(() => import("@/components/pdf-modal").then((mod) => ({ default: mod.PdfModal })), {
  ssr: false,
})

interface Resource {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  pdfUrl?: string
  externalUrl?: string
  image?: string
}

export default function ResourcesPage() {
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null)
  const router = useRouter()

  const resources: Resource[] = [
    {
      id: "scripture-reading",
      title: "Scripture Reading",
      description: "Resource for reading scripture in the worship service at GraceLife Church.",
      icon: <BookOpen className="w-8 h-8" />,
      pdfUrl: "/resources/GL_Scripture_Reading.pdf"
    },
    {
      id: "corporate-prayer",
      title: "Corporate Prayer",
      description: "Resource for praying during the corporate worship service at GraceLife Church.",
      icon: <MessagesSquare className="w-8 h-8" />,
      pdfUrl: "/resources/GL_Corporate_Prayer.pdf"
    },
    {
      id: "types-of-prayers",
      title: "Types of Prayers",
      description: "Resource on the various types of prayers in the corporate worship service.",
      icon: <MessageSquare className="w-8 h-8" />,
      pdfUrl: "/resources/GL_Types_of_Prayers.pdf"
    },
    {
      id: "prayer-examples",
      title: "Help with Prayer",
      description: "See short examples and helpful tips for praying in the corporate worship service.",
      icon: <MessageCircleQuestion className="w-8 h-8" />,
      pdfUrl: "/resources/GL_Examples_and_Tips_for_Prayer.pdf"
    },
    {
      id: "sermons",
      title: "Sermons",
      description: "Sermons from the preaching ministry of GraceLife Church.",
      icon: <FileText className="w-8 h-8" />,
      externalUrl: "/resources/sermons",
    },
    {
      id: "elder-training",
      title: "Elder Training",
      description: "See PDF of the process for potential Elder Candidates at GraceLife Church",
      icon: <Users className="w-8 h-8" />,
      pdfUrl: "/resources/GL_Elder_Training.pdf"
    },
    {
      id: "childcare",
      title: "Childcare",
      description: "Learn about GraceLife Littles, our childcare ministry for your youngest children.",
      icon: <Baby className="w-8 h-8" />,
      externalUrl: "/what-to-expect#childcare",
    },
    {
      id: "merch",
      title: "Shirts and Pens",
      description: "Grab some GraceLife Church apparel and accessories.",
      icon: <ShoppingBag className="w-8 h-8" />,
      externalUrl: "https://gracelifedecatur.printful.me/",
    },
  ]

  const handleResourceClick = (resource: Resource) => {
    if (resource.pdfUrl) {
      setSelectedPdf({ url: resource.pdfUrl, title: resource.title })
    } else if (resource.externalUrl) {
      // Use Next.js router for internal links, window.open for external links
      if (resource.externalUrl.startsWith("/")) {
        router.push(resource.externalUrl)
      } else {
        window.open(resource.externalUrl, "_blank")
      }
    }
  }

  return (
    <main>
      <Header />
      
      <PageHero title="Resources">
        <p>Check out resources from GraceLife Church</p>
      </PageHero>

      {/* Resources Grid */}
      <section className="relative py-20 md:py-28 px-6 bg-[#F5F3EE]">
        <Aurora />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-reveal-group>
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white/70 backdrop-blur-sm rounded-3xl border border-white shadow-[0_20px_50px_-30px_rgba(44,64,97,0.35)] hover:shadow-[0_35px_70px_-30px_rgba(44,64,97,0.45)] transition-all duration-500 ease-out overflow-hidden group cursor-pointer h-auto min-h-[250px] md:h-[300px] flex flex-col hover:-translate-y-1.5"
                onClick={() => handleResourceClick(resource)}
              >
                {resource.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col items-center text-center flex-grow justify-center">
                  <div className="w-14 h-14 mb-5 rounded-full bg-[#2C4061]/5 text-[#2C4061] flex items-center justify-center transition-colors duration-500 group-hover:bg-[#2C4061] group-hover:text-[#F5F3EE] [&_svg]:w-6 [&_svg]:h-6">
                    {resource.icon}
                  </div>
                  <h3 className="text-2xl text-[#2C4061] mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-[#5D5D5D] leading-relaxed mb-5">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-center text-sm tracking-wide text-[#2C4061] font-medium group-hover:underline underline-offset-4">
                    {resource.pdfUrl ? (
                      <>
                        <FileText className="w-4 h-4 mr-2" />
                        View PDF
                      </>
                    ) : resource.externalUrl ? (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        View Resource
                      </>
                    ) : (
                      "Coming Soon"
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {selectedPdf && (
        <PdfModal
          isOpen={!!selectedPdf}
          onClose={() => setSelectedPdf(null)}
          pdfUrl={selectedPdf.url}
          title={selectedPdf.title}
        />
      )}

      <Footer />
    </main>
  )
}

