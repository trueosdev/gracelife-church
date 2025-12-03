"use client"

import { useState } from "react"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { label: "About", href: "#about" },
  { label: "Pastor's Pen", href: "#pastors-pen" },
  { label: "Calendar", href: "#calendar" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
  { label: "Give", href: "#give" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/white-gracelife.svg" 
            alt="GraceLife Church" 
            className="h-10 w-auto"
          />
        </div>

        <div className="flex items-center gap-2 relative">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
          
          <div className="relative">
            <Button 
              variant="outline" 
              size="sm" 
              className={`text-black transition-colors ${
                isMenuOpen 
                  ? "bg-white/90 hover:bg-white" 
                  : "bg-white hover:bg-white/20"
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
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <nav className="py-2">
                    {menuItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-black transition-colors font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
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
