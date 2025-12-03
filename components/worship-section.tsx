export function WorshipSection() {
  return (
    <section 
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url(/sunday.jpg)" }}
    >

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Heading */}
          <div>
            <h2 className="text-white text-5xl md:text-6xl font-bold leading-none text-left">
              Sunday Morning<br />
              <span className="text-7xl md:text-8xl" style={{ fontFamily: "var(--font-montserrat-alt)", fontWeight: 500 }}>WORSHIP</span>
            </h2>
          </div>

          {/* Right: Service Info */}
          <div className="flex justify-end">
            <div className="bg-[#808080]/40 backdrop-blur-md px-8 py-6 hover:bg-[#ffffff]/25 transition-colors rounded-lg border border-white/20">
              <p className="text-gray-200 text-lg leading-relaxed text-center">
                10:00 AM – 11:20 PM CST<br />
                GraceLife Church<br />
                1311 19th Ave SE<br />
                Decatur, AL 35601
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
