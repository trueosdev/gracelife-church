
export function HeroSection() {
  const videoLink = (extraClassName: string) => (
    <a
      href="https://www.youtube.com/watch?v=ldiYtoaFAS8"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Watch GraceLife Church video on YouTube"
      className={`group relative block aspect-video overflow-hidden rounded-2xl border border-[#F5F3EE]/20 bg-black/40 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out hover:scale-[1.03] ${extraClassName}`}
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
      {/* Navy wash from the left keeps the headline legible and softens the photo */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#1c2a40]/80 via-[#2C4061]/30 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen max-w-7xl mx-auto px-6 py-28 md:py-20">
        <div className="max-w-3xl">
          {/* Entrance animation lives on the h1, not the wrapper: a transform on the
              wrapper would become the containing block for the absolute video below. */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl text-[#F5F3EE] mb-8 leading-[1.02] animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out">
              Find grace.
              <br />
              Find truth.
              <br />
              Find life.
              <br />
            <img 
              src="/white-logoText.svg" 
              alt="GraceLife Church" 
              className="h-16 sm:h-20 md:h-28 w-auto mt-6 md:mt-8 opacity-90"/>
          </h1>

          <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 items-center gap-6 lg:flex">
            {videoLink("w-auto xl:w-125")}
            <div className="text-[#F5F3EE]/70 text-[11px] tracking-[0.3em] writing-mode-vertical rotate-180">
              ADVANCING THE GOSPEL FOR THE GLORY OF GOD
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
