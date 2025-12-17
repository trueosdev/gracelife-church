"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText, BookOpen, Users, MessageSquare, Download } from "lucide-react"

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
      icon: <MessageSquare className="w-8 h-8" />,
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
      title: "Examples and Tips for Prayer",
      description: "See short examples and helpful tips for praying in the corporate worship service.",
      icon: <MessageSquare className="w-8 h-8" />,
      pdfUrl: "/resources/GL_Examples_and_Tips_for_Prayer.pdf"
    },
    {
      id: "sermons",
      title: "Sermons",
      description: "Sermons from the preaching ministry of GraceLife Church.",
      icon: <FileText className="w-8 h-8" />,
      externalUrl: "#", // Update with actual sermons URL
    },
    {
      id: "elder-training",
      title: "Elder Training",
      description: "See PDF of the process for potential Elder Candidates at GraceLife Church",
      icon: <Users className="w-8 h-8" />,
      pdfUrl: "/resources/GL_Elder_Training.pdf"
    },
  ]

  const handleResourceClick = (resource: Resource) => {
    if (resource.pdfUrl) {
      setSelectedPdf({ url: resource.pdfUrl, title: resource.title })
    } else if (resource.externalUrl) {
      window.open(resource.externalUrl, "_blank")
    }
  }

  return (
    <main>
      <Header />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 px-6 bg-[#2C4061]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-[#F5F3EE] mb-4">Resources</h1>
          <p className="text-xl text-[#F5F3EE] max-w-2xl">
            Check out resources from GraceLife Church
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-6 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
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
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-[#2C4061]">
                      {resource.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#2C4061]">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-[#5D5D5D] leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-[#2C4061] font-medium group-hover:underline">
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

