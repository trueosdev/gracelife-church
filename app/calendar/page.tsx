import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Aurora } from "@/components/ambient"

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "GraceLife Church calendar — confessional Reformed Baptist congregation in Decatur, AL: Lord's Day worship, mid-week Bible study, and church life.",
  alternates: { canonical: "/calendar" },
}

export default function CalendarPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <PageHero title="Calendar" />

      {/* Calendar Embed */}
      <section className="relative py-20 md:py-28 px-6 bg-[#F5F3EE]">
        <Aurora />
        <div className="relative max-w-7xl mx-auto">
          <div className="w-full rounded-3xl overflow-hidden bg-white p-2 md:p-4 shadow-[0_30px_60px_-35px_rgba(44,64,97,0.45)]" data-reveal>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=gracelifedecatur%40gmail.com&ctz=America%2FChicago"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              className="w-full h-[600px] md:h-[700px] lg:h-[800px]"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

