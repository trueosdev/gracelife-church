
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
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
            <div className="text-white text-xs tracking-widest writing-mode-vertical rotate-180">
              MULTIPLYING TRANSFORMATIONAL CHURCHES
            </div>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Pause"
      >
        <span className="text-2xl">❚❚</span>
      </button>
    </section>
  )
}
