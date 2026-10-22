import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Waves } from "@/components/ambient"
import { siGooglemaps, siApple } from "simple-icons"

export function WorshipSection() {

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-scroll md:bg-fixed"
      style={{ backgroundImage: "url('/sunday-morning.png')" }}
    >
      {/* Overlay to keep text readable */}
      <div className="absolute inset-0 bg-[#1c2a40]/35" aria-hidden="true" />

      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-6 md:px-8 pt-24 pb-36 md:pt-36 md:pb-52" data-reveal>
          <div className="relative z-10 mb-10 md:mb-12">
            <h2 className="superXL">
              SUNDAY<br></br>WORSHIP
            </h2>
          </div>
          <div className="px-4 md:px-8 relative z-10">
            <p className="text-white/90 text-lg md:text-xl leading-loose text-center tracking-wide">
              10:00 AM – 11:20 PM CST<br />
              GraceLife Church<br />
              1311 19th Ave SE<br />
              Decatur, AL 35601
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <Button
                variant="outline"
                asChild
                size="icon-lg"
                className="rounded-full bg-white/10 border-white/30 backdrop-blur-sm hover:bg-white/20"
              >
                <a
                  href="https://maps.app.goo.gl/e3xLrBoh9hHnTPSX6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open in Google Maps"
                  className="group"
                >
                  <svg className="w-5 h-5 fill-[#F5F3EE]/80 group-hover:fill-[#F5F3EE] transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={siGooglemaps.path} />
                  </svg>
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                size="icon-lg"
                className="rounded-full bg-white/10 border-white/30 backdrop-blur-sm hover:bg-white/20"
              >
                <a
                  href="https://maps.apple/p/yf0ay2tLnTHrLI"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open in Apple Maps"
                  className="group"
                >
                  <svg className="w-5 h-5 fill-[#F5F3EE]/80 group-hover:fill-[#F5F3EE] transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={siApple.path} />
                  </svg>
                </a>
              </Button>
            </div>
            <div className="flex justify-center mt-8">
              <Button
                asChild
                className="bg-[#F5F3EE] text-[#2C4061] hover:bg-white transition-colors px-9 py-6 text-base rounded-full"
              >
                <Link href="/what-to-expect">What to Expect</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Waves />
    </section>
  )
}
