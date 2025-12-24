import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Montserrat_Alternates } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat"
})

const montserratAlternates = Montserrat_Alternates({ 
  subsets: ["latin"], 
  weight: ["500"],
  variable: "--font-montserrat-alt"
})

export const metadata: Metadata = {
  title: "GraceLife Church, Decatur, AL",
  description: "FIND GRACE - FIND TRUTH - FIND LIFE",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=BBH+Bartle&display=swap" rel="stylesheet" />
      </head>
      <body className={`${montserrat.variable} ${montserratAlternates.variable} ${montserrat.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
