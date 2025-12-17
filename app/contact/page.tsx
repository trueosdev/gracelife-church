"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siFacebook, siYoutube, siSpotify } from "simple-icons/icons"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add API call here to send the form data
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Top Row: Last Name, Email, Phone */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="lastName" className="block text-[#F5F3EE] mb-2 text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-transparent border border-[#F5F3EE]/30 rounded text-[#F5F3EE] placeholder-[#F5F3EE]/50 focus:outline-none focus:border-[#F5F3EE] transition-colors"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[#F5F3EE] mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-transparent border border-[#F5F3EE]/30 rounded text-[#F5F3EE] placeholder-[#F5F3EE]/50 focus:outline-none focus:border-[#F5F3EE] transition-colors"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[#F5F3EE] mb-2 text-sm font-medium">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-transparent border border-[#F5F3EE]/30 rounded text-[#F5F3EE] placeholder-[#F5F3EE]/50 focus:outline-none focus:border-[#F5F3EE] transition-colors"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-[#F5F3EE] mb-2 text-sm font-medium">
                    Type your message here...
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 bg-transparent border border-[#F5F3EE]/30 rounded text-[#F5F3EE] placeholder-[#F5F3EE]/50 focus:outline-none focus:border-[#F5F3EE] transition-colors resize-none"
                    placeholder=""
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#4A9B9C] text-[#F5F3EE] font-semibold rounded-lg hover:bg-[#3d8283] transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="w-full h-[400px] lg:h-full rounded-lg overflow-hidden border border-[#F5F3EE]/30">
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

