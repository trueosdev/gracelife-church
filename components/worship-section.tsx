import { Button } from "@/components/ui/button"
import { siGooglemaps, siApple } from "simple-icons"
import Image from "next/image"

export function WorshipSection() {

  return (
    <section 
      className="relative bg-[#F5F3EE]"
    >
      {/* Fixed background wrapper - will be constrained by parent overflow if needed */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url(/sunday.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />

      {/* Content wrapper with white background to mask areas outside text */}
      <div className="relative z-10 bg-[#F5F3EE]">
        <div className="max-w-5xl mx-auto px-8 py-20">
          <div className="relative z-10 mb-8">
            <Image
              src="/worshipsunday.png"
              alt="Sunday Morning Worship"
              width={1200}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="bg-[#F5F3EE] px-8 py-6 hover:bg-black/5 transition-colors duration-500 relative z-10">
            <p className="text-gray-800 text-xl leading-relaxed text-center">
              10:00 AM – 11:20 PM CST<br />
              GraceLife Church<br />
              1311 19th Ave SE<br />
              Decatur, AL 35601
            </p>
            <div className="flex gap-4 justify-center mt-6">
              <Button
                variant="outline"
                asChild
                size="icon-lg"
              >
                <a
                  href="https://maps.app.goo.gl/e3xLrBoh9hHnTPSX6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open in Google Maps"
                  className="group"
                >
                  <svg className="w-5 h-5 fill-gray-500 group-hover:fill-[#F5F3EE] transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={siGooglemaps.path} />
                  </svg>
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                size="icon-lg"
              >
                <a
                  href="https://maps.apple/p/yf0ay2tLnTHrLI"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open in Apple Maps"
                  className="group"
                >
                  <svg className="w-5 h-5 fill-gray-500 group-hover:fill-[#F5F3EE] transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={siApple.path} />
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}