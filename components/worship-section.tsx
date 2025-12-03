export function WorshipSection() {
  return (
    <section 
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url(/sunday.jpg)" }}
    >

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-8 py-20 text-center">
        <h2 className="text-white text-5xl md:text-6xl font-bold mb-8 leading-none">
          Sunday Morning<br />
          <span className="text-7xl md:text-8xl" style={{ fontFamily: "var(--font-montserrat-alt)", fontWeight: 500 }}>WORSHIP</span>
        </h2>

        <div className="bg-[#2C4061]/40 backdrop-blur-md px-8 py-6 mb-8 hover:bg-[#2C4061]/25 transition-colors rounded-lg border border-white/20">
          <p className="text-gray-200 text-lg leading-relaxed">
            10:00 AM – 11:20 PM CST<br />
            GraceLife Church<br />
            1311 19th Ave SE<br />
            Decatur, AL 35601
          </p>
        </div>
        
      <div className="bg-white/10 backdrop-blur-md px-8 py-6 hover:bg-white/20 transition-colors rounded-lg border border-white/20">
          <p className="text-gray-200 text-lg leading-relaxed">
            We would love for you to worship with us!
          </p>
        </div>
      </div>
    </section>
  )
}
