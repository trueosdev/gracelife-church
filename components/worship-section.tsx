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

        <div className="bg-[#2C4061]/60 px-8 py-6 mb-8 hover:bg-[#4a7a8a]/60 transition-colors rounded-lg">
          <p className="text-gray-200 text-lg leading-relaxed">
            10:00 AM – 11:20 AM CST<br />
            GraceLife Church<br />
            1311 19th Ave SE<br />
            Decatur, AL 35601
          </p>
        </div>
      <div className="bg-[#808080]/60 px-8 py-6 hover:bg-[#a1a1a1]/60 transition-colors rounded-lg">
          <p className="text-gray-200 text-lg leading-relaxed">
            We would love for you to worship with us!
          </p>
        </div>
      </div>
    </section>
  )
}
