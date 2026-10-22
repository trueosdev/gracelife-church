import type React from "react"
import { Aurora, Waves } from "@/components/ambient"

/**
 * Navy banner at the top of interior pages: an optional photo under a navy wash,
 * drifting glows, and waves that flow into the first section (`waveFill`).
 */
export function PageHero({
  title,
  children,
  image,
  imagePosition = "center",
  waveFill = "#F5F3EE",
  className = "",
}: {
  title: React.ReactNode
  children?: React.ReactNode
  image?: string
  imagePosition?: string
  waveFill?: string
  className?: string
}) {
  return (
    <section
      className={`relative overflow-hidden bg-[#2C4061] px-6 pt-36 pb-32 md:pt-48 md:pb-44 ${className}`}
    >
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover"
            style={{ backgroundImage: `url('${image}')`, backgroundPosition: imagePosition }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#2C4061]/70" aria-hidden="true" />
        </>
      )}
      <Aurora tone="dark" />

      <div className="relative max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
        <h1 className="text-5xl md:text-7xl text-[#F5F3EE]">{title}</h1>
        {children && (
          <div className="mt-6 md:mt-8 text-lg md:text-xl text-[#F5F3EE]/80 leading-relaxed max-w-2xl mx-auto">
            {children}
          </div>
        )}
      </div>

      <Waves fill={waveFill} />
    </section>
  )
}
