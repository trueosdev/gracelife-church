"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siFacebook, siYoutube, siApplepodcasts, siSpotify } from "simple-icons/icons"

const menuItems = [
  { label: "About", href: "/about" },
  { label: "Statement of Faith", href: "/about/statement-of-faith" },
  { label: "Pastor's Pen", href: "https://accordingtoorder.substack.com/" },
  { label: "Calendar", href: "/calendar" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
  { label: "Merchandise", href: "https://gracelifedecatur.printful.me/" },
  { label: "Give", href: "https://gracelife-church-426203.churchcenter.com/giving" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-5 right-0 z-40 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <img 
              src="/white-gracelife.svg" 
              alt="GraceLife Church" 
              className="h-15 md:h-20 w-auto"
            />
          </Link>
        </div>

        <div className="flex items-center gap-2 relative">
          {/* Social Icons - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-3 mr-2">
            <a href="https://www.facebook.com/GraceLifeChurchDecatur/" target="_blank" rel="noopener noreferrer" className="text-[#F5F3EE] hover:opacity-80 transition-opacity" aria-label="Facebook">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d={siFacebook.path} />
              </svg>
            </a>
            <a href="https://www.youtube.com/@gracelifechurchdecatur" target="_blank" rel="noopener noreferrer" className="text-[#F5F3EE] hover:opacity-80 transition-opacity" aria-label="YouTube">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d={siYoutube.path} />
              </svg>
            </a>
            <a href="https://podcasts.apple.com/us/podcast/gracelife-church-podcast/id1676514693" target="_blank" rel="noopener noreferrer" className="text-[#F5F3EE] hover:opacity-80 transition-opacity" aria-label="Apple Podcasts">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d={siApplepodcasts.path} />
              </svg>
            </a>
            <a href="https://open.spotify.com/show/5NAtfGfB9BEs5LCk1tnvd1?si=d46394a47b654587" target="_blank" rel="noopener noreferrer" className="text-[#F5F3EE] hover:opacity-80 transition-opacity" aria-label="Spotify">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d={siSpotify.path} />
              </svg>
            </a>
          </div>

          <Button variant="ghost" size="sm" className="text-[#F5F3EE] hover:bg-black/5">
            <Search className="w-4 h-4 md:mr-2" />
            <span className="hidden md:inline">Search</span>
          </Button>
          
          <div className="relative">
            <Button 
              variant="outline" 
              size="sm" 
              className={`text-black transition-colors ${
                isMenuOpen 
                  ? "bg-[#F5F3EE]/90 hover:bg-black/5" 
                  : "bg-[#F5F3EE] hover:bg-black/5"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-4 h-4 mr-2" />
              ) : (
                <Menu className="w-4 h-4 mr-2" />
              )}
              Menu
            </Button>

            {isMenuOpen && (
              <>
                {/* Backdrop */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsMenuOpen(false)}
                />
                
                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-56 bg-[#F5F3EE] rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <nav className="py-2">
                    {menuItems.map((item) => {
                      const isInternalLink = item.href.startsWith("/")
                      const Component = isInternalLink ? Link : "a"
                      const props = isInternalLink 
                        ? { href: item.href }
                        : { href: item.href }
                      
                      return (
                        <Component
                          key={item.label}
                          {...props}
                          className="block px-4 py-3 text-gray-800 hover:bg-black/8.5 hover:text-black transition-colors font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Component>
                      )
                    })}
                  </nav>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
