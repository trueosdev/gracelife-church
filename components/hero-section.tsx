
export function HeroSection() {
  const videoLink = (extraClassName: string) => (
    <a
      href="https://www.youtube.com/watch?v=ldiYtoaFAS8"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Watch GraceLife Church video on YouTube"
      className={`group relative block aspect-video overflow-hidden rounded-xl border border-[#F5F3EE]/30 bg-black/40 shadow-2xl transition-transform duration-300 ease-out hover:scale-105 ${extraClassName}`}
    >
      <iframe
        className="pointer-events-none absolute inset-0 h-full w-full"
        src="https://www.youtube-nocookie.com/embed/ldiYtoaFAS8?autoplay=1&mute=1&controls=0&loop=1&playlist=ldiYtoaFAS8&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&fs=0&color=white"
        title="GraceLife Church video"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        tabIndex={-1}
        aria-hidden="true"
      />
      <span className="holo-overlay" aria-hidden="true" />
      <span className="absolute inset-0" aria-hidden="true" />
    </a>
  )

  return (
    <section className="relative min-h-screen bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url(/gracelifebg.png)",
        }}
      />

      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#F5F3EE] mb-8 leading-tight">
              Find grace.
              <br />
              Find truth.
              <br />
              Find life.
              <br />
            <img 
              src="/white-logoText.svg" 
              alt="GraceLife Church" 
              className="h-16 sm:h-20 md:h-28 w-auto mt-4"/>
          </h1>

          <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 items-center gap-6 lg:flex">
            {videoLink("w-auto xl:w-125")}
            <div className="text-[#F5F3EE] text-xs tracking-widest writing-mode-vertical rotate-180">
              MULTIPLYING TRANSFORMATIONAL CHURCHES
            </div>
          </div>
        </div>

        <div className="mt-10 mx-auto w-full max-w-2xl lg:hidden">
          {videoLink("w-full")}
        </div>
      </div>
    </section>
  )
}
