import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Montserrat_Alternates } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import {
  churchJsonLd,
  getSiteUrl,
  SEO_KEYWORDS,
  SEO_LONG_DESCRIPTION,
  SEO_META_DESCRIPTION,
  SEO_TAGLINE,
  SITE_NAME,
} from "@/lib/site-seo"
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
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_NAME}, Decatur, AL`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SEO_META_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: getSiteUrl() }],
  robots: { index: true, follow: true },
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
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: `${SITE_NAME}, Decatur, AL`,
    description: SEO_LONG_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/ogimage.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${SEO_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME}, Decatur, AL`,
    description: SEO_LONG_DESCRIPTION,
    images: ["/ogimage.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = churchJsonLd()

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=BBH+Bartle&display=swap" rel="stylesheet" />
      </head>
      <body className={`${montserrat.variable} ${montserratAlternates.variable} ${montserrat.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
