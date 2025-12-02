import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
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

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
          <Button variant="outline" size="sm" className="bg-white text-black hover:bg-white/90">
            <Menu className="w-4 h-4 mr-2" />
            Menu
          </Button>
        </div>
      </div>
    </header>
  )
}
