"use client"

import { useEffect } from "react"
import Script from "next/script"

declare global {
  interface Window {
    refTagger: any
  }
}

export function RefTagger() {
  useEffect(() => {
    // If the script is already loaded, re-tag the page on mount or updates
    if (window.refTagger && typeof window.refTagger.tag === "function") {
      window.refTagger.tag()
    }
  }, [])

  return (
    <>
      <Script id="reftagger-config" strategy="afterInteractive">
        {`
          var refTagger = {
            settings: {
              bibleVersion: 'ESV',
              tooltipStyle: 'dark'
            }
          };
        `}
      </Script>
      <Script
        src="https://api.reftagger.com/v2/RefTagger.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.refTagger && typeof window.refTagger.tag === "function") {
            window.refTagger.tag()
          }
        }}
      />
    </>
  )
}

