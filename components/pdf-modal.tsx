"use client"

import { X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PdfModalProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
  title?: string
}

export function PdfModal({ isOpen, onClose, pdfUrl, title }: PdfModalProps) {
  function handleDownload() {
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = title || "document.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 bg-[#F5F3EE] rounded-lg shadow-2xl w-full h-full max-w-6xl max-h-[90vh] m-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-xl font-bold text-[#2C4061]">
            {title || "PDF Viewer"}
          </h3>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDownload}
              className="text-[#2C4061] hover:bg-black/5"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-[#2C4061] hover:bg-black/5"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="flex-1 overflow-hidden bg-gray-100">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
            className="w-full h-full border-0"
            title={title || "PDF Viewer"}
            allow="fullscreen"
          />
        </div>
      </div>
    </div>
  )
}
