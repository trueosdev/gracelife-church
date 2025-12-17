import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CalendarPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Calendar Section */}
      <section className="relative pt-32 pb-20 px-6 bg-[#2C4061] min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-[#F5F3EE] text-center mb-8">
            Calendar
          </h1>

          {/* Calendar Embed */}
          <div className="w-full rounded-lg overflow-hidden border border-[#F5F3EE]/30">
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

