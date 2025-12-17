
export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url(/gracelifebg.png)",
        }}
      />

      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-[#F5F3EE] mb-8 leading-tight">
              Find grace.
              <br />
              Find truth.
              <br />
              Find life.
              <br />
            <img 
              src="/white-logoText.svg" 
              alt="GraceLife Church" 
              className="h-20 md:h-25 w-auto mt-4"/>
          </h1>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="text-[#F5F3EE] text-xs tracking-widest writing-mode-vertical rotate-180">
              MULTIPLYING TRANSFORMATIONAL CHURCHES
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
