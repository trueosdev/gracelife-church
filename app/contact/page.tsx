import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siFacebook, siYoutube, siSpotify } from "simple-icons/icons"

export default function ContactPage() {

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Contact Section */}
      <section className="relative pt-32 pb-20 px-6 bg-[#2C4061] min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-[#F5F3EE] text-center mb-8">
            Connect With Us
          </h1>

          {/* Contact Info */}
          <div className="text-center mb-8 text-[#F5F3EE]">
            <p className="text-lg md:text-xl">
              <a href="tel:12563553790" className="underline hover:text-[#b3c9e3] transition-colors">(256) 355-3790</a>
              <br /><a href="mailto:gracelifedecatur@gmail.com" className="underline hover:text-[#b3c9e3] transition-colors">gracelifedecatur@gmail.com</a>
              <br />
              1311 19th Ave SE, Decatur, AL 35601
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <a 
              href="https://www.facebook.com/GraceLifeChurchDecatur/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#F5F3EE] hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
              >
                <path d={siFacebook.path} />
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/@gracelifechurchdecatur" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#F5F3EE] hover:opacity-80 transition-opacity"
              aria-label="YouTube"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
              >
                <path d={siYoutube.path} />
              </svg>
            </a>
            <a 
              href="https://open.spotify.com/show/5NAtfGfB9BEs5LCk1tnvd1?si=d46394a47b654587" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#F5F3EE] hover:opacity-80 transition-opacity"
              aria-label="Spotify"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
              >
                <path d={siSpotify.path} />
              </svg>
            </a>
          </div>

          {/* Form and Map Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <div className="w-full">
              <div className="w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden border border-[#F5F3EE]/30">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScW-Dfk8CKz3J66YofnvtVP4LNRnaSgfQdYgBOn-aBFlKIVOA/viewform?embedded=true"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full h-full"
                >
                  Loading…
                </iframe>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden border border-[#F5F3EE]/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.692808463346!2d-86.96599732426048!3d34.586638672960376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88628694a0a2dacf%3A0x3fd9bd1418907de0!2sGraceLife%20Church!5e0!3m2!1sen!2sus!4v1766003662619!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

