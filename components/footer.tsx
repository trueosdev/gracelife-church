import Image from "next/image"
import Link from "next/link"
import { Aurora, Waves } from "@/components/ambient"

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Statement of Faith", href: "/about/statement-of-faith" },
  { label: "Pastor's Pen", href: "https://accordingtoorder.substack.com/" },
  { label: "Calendar", href: "/calendar" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
  { label: "Shirts and Pens", href: "https://gracelifedecatur.printful.me/" },
  { label: "Give", href: "#give" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#2C4061] text-[#F5F3EE]">
      {/* Waves rise out of whatever section sits above the footer */}
      <Waves fill="#2C4061" className="absolute inset-x-0 bottom-full" />
      {/* Faded in from the top so the glow never meets the solid wave in a seam */}
      <Aurora tone="dark" className="[mask-image:linear-gradient(to_bottom,transparent,#000_35%)]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10 md:pt-20 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <img
                src="/white-gracelife.svg"
                alt="GraceLife Church"
                className="h-12 md:h-15 w-auto mb-4"
              />
            </Link>
            <p className="font-serif text-lg text-[#F5F3EE]/80">
              Find Grace · Find Truth · Find Life
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl mb-5">Navigation</h3>
            <nav className="flex flex-col gap-2 items-center md:items-start">
              {quickLinks.map((link) => {
                const isInternalLink = link.href.startsWith("/")
                const Component = isInternalLink ? Link : "a"
                const props = isInternalLink 
                  ? { href: link.href }
                  : { href: link.href }
                
                return (
                  <Component
                    key={link.label}
                    {...props}
                    className="text-[#F5F3EE]/80 hover:text-[#F5F3EE] transition-colors text-sm"
                  >
                    {link.label}
                  </Component>
                )
              })}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl mb-5">Visit Us</h3>
            <address className="not-italic text-[#F5F3EE]/80 text-sm text-center md:text-left space-y-2">
              <p>GraceLife Church</p>
              <p>1311 19th Ave SE</p>
              <p>Decatur, AL 35601</p>
              <p className="pt-2">
                <span className="font-medium text-[#F5F3EE]">Sunday Service</span>
                <br />
                10:00 AM - 11:20 PM CST
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F5F3EE]/15 mt-14 pt-8">
          <p className="text-center text-[#F5F3EE]/50 text-xs tracking-wide">
            © {currentYear} GraceLife Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

