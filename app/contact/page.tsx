import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Aurora } from "@/components/ambient"
import { siFacebook, siYoutube, siSpotify } from "simple-icons/icons"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit GraceLife Church — confessional Reformed Baptist — 1311 19th Ave SE, Decatur, AL 35601. Phone, email, Sunday 10:30 AM & Wednesday 6 PM study.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {

  return (
    <main className="min-h-screen">
      <Header />
      
      <PageHero title="Connect With Us">
        {/* Contact Info */}
        <p className="leading-loose">
          <a href="tel:12563553790" className="underline underline-offset-4 decoration-[#F5F3EE]/30 hover:decoration-[#F5F3EE] hover:text-[#F5F3EE] transition-colors">(256) 355-3790</a>
          <br /><a href="mailto:gracelifedecatur@gmail.com" className="underline underline-offset-4 decoration-[#F5F3EE]/30 hover:decoration-[#F5F3EE] hover:text-[#F5F3EE] transition-colors">gracelifedecatur@gmail.com</a>
          <br />
          1311 19th Ave SE, Decatur, AL 35601
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <a 
            href="https://www.facebook.com/GraceLifeChurchDecatur/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#F5F3EE]/80 hover:text-[#F5F3EE] transition-colors"
            aria-label="Facebook"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="currentColor"
            >
              <path d={siFacebook.path} />
            </svg>
          </a>
          <a 
            href="https://www.youtube.com/@gracelifechurchdecatur" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#F5F3EE]/80 hover:text-[#F5F3EE] transition-colors"
            aria-label="YouTube"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="currentColor"
            >
              <path d={siYoutube.path} />
            </svg>
          </a>
          <a 
            href="https://open.spotify.com/show/5NAtfGfB9BEs5LCk1tnvd1?si=d46394a47b654587" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#F5F3EE]/80 hover:text-[#F5F3EE] transition-colors"
            aria-label="Spotify"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="currentColor"
            >
              <path d={siSpotify.path} />
            </svg>
          </a>
        </div>
      </PageHero>

      {/* Form and Map */}
      <section className="relative py-20 md:py-28 px-6 bg-[#F5F3EE]">
        <Aurora />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-reveal-group>
            {/* Contact Form */}
            <div className="w-full">
              <div className="w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-white shadow-[0_30px_60px_-35px_rgba(44,64,97,0.45)]">
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
            <div className="w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-white shadow-[0_30px_60px_-35px_rgba(44,64,97,0.45)]">
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

