"use client"

import { useState } from "react"

export function SubscribeSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Configure subscription logic
    console.log("Subscribe:", email)
  }

  return (
    <section className="py-20 px-6 bg-[#F5F3EE]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a3a] mb-8">
          Stay Connected
        </h2>
        
        <form onSubmit={handleSubmit}>
          <label className="block text-lg text-[#1a2a3a] mb-3">
            Enter your email here*
          </label>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-4 border-1 border-[#c2c1be] bg-white text-[#1a2a3a] text-lg focus:outline-none focus:ring-2 focus:ring-[#5a8a9a]"
              placeholder=""
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#2C4061] rounded-full text-white text-lg font-medium hover:bg-[#4a7a8a] transition-colors"
            >
              Subscribe Now
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

