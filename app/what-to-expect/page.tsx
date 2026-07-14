import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "What to Expect",
  description:
    "Planning your first visit to GraceLife Church in Decatur, AL? Here's what to expect on a Sunday morning — intentional worship, warm community, and childcare through GraceLife Littles.",
  alternates: { canonical: "/what-to-expect" },
}

export default function WhatToExpectPage() {
  return (
    <main>
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 px-6 bg-[#2C4061]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-[#F5F3EE] mb-4">What to Expect</h1>
          <p className="text-xl text-[#F5F3EE] max-w-2xl">
            Planning your first visit? Here's a look at what a Sunday morning at GraceLife Church
            is like.
          </p>
        </div>
      </section>

      {/* Intentional Worship */}
      <section id="intentional-worship" className="py-12 md:py-20 px-6 bg-[#F5F3EE]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-bold text-[#2C4061] mb-6">
            Intentional Worship
          </h2>
          <div className="space-y-6 text-lg text-[#5D5D5D] leading-relaxed">
            <p>
              Everything we do on Sunday morning is intentional. Our order of worship is not
              random, and it is not built around what we happen to prefer. We aim to worship God
              the way He has asked to be worshiped in His Word, and Scripture shapes each part of
              the service into the story of the gospel, so that every week we walk through the
              same good news that saves us.
            </p>
            <p>
              It begins with God. He calls us to worship, because we come only because He first
              invites us. Then we do something that may feel unusual: we confess our sin together.
              We stop pretending we have it all figured out and we tell the truth about who we
              are before a holy God.
            </p>
            <p>
              But we never leave you in your sin. The confession is always followed by the
              assurance of pardon, where we hear again that in Christ our sins are fully forgiven.
              This is the heart of the gospel. We are worse than we dare admit, and yet we are
              more loved than we ever dared hope, all because of Jesus.
            </p>
            <p>
              From there we respond. We sing, we read God's Word, and we pray. At the center of
              it all is the preaching of Scripture, where the Word is opened and explained
              passage by passage, because we believe God builds His church through the ordinary
              means of His Word, prayer, and His people gathered together. Then we are sent back
              out into the world with a commissioning, carrying the same grace we just received.
              Our prayer is that whether you have followed Christ for decades or are just
              beginning to wonder who He is, you would see the gospel clearly in how we worship.
            </p>
          </div>

          {/* Elements of Worship */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Call to Worship",
                body: "God speaks first. We open by hearing His invitation, a reminder that we gather because He calls us to Himself.",
              },
              {
                title: "Confession of Sin",
                body: "Together we tell God the truth about ourselves. We stop pretending and bring our sin honestly before Him.",
              },
              {
                title: "Assurance of Pardon",
                body: "We hear the good news that in Christ our sins are fully forgiven. This is the heart of the gospel we cling to.",
              },
              {
                title: "The Word",
                body: "We read Scripture and sit under the expository preaching of God's Word, working through books of the Bible passage by passage as God speaks to and shapes His people.",
              },
              {
                title: "Prayer & Song",
                body: "We respond to God's grace with prayer and singing, lifting our voices together in praise and thanksgiving.",
              },
              {
                title: "Commissioning",
                body: "We are sent back into the world with a blessing, carrying the same grace we just received out to the people around us.",
              },
            ].map((part, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#2C4061]/10"
              >
                <h3 className="text-xl font-bold text-[#2C4061] mb-2">
                  {part.title}
                </h3>
                <p className="text-[#5D5D5D] leading-relaxed">{part.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Childcare — GraceLife Littles */}
      <section
        id="childcare"
        className="relative py-12 md:py-20 px-6 bg-gradient-to-b from-[#5B8BA5]/8 to-[#629E82]/8 overflow-hidden"
      >
        {/* Playful color accents echoing the Littles logo */}
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#C4A449]/15" />
        <div className="absolute top-1/3 -right-12 w-48 h-48 rounded-full bg-[#A45E59]/12" />
        <div className="absolute -bottom-16 left-1/4 w-56 h-56 rounded-full bg-[#65A459]/12" />

        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="/gracelifelittles.svg"
              alt="GraceLife Littles"
              className="w-full max-w-lg h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#5B8BA5] mb-6">
              Childcare
            </h2>
            <p className="text-lg text-[#5D5D5D] leading-relaxed mb-8">
              GraceLife Littles is our childcare ministry, providing a safe and loving
              environment for your youngest children so parents can worship with confidence.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start bg-white/70 rounded-2xl p-4 border-l-4 border-[#A45E59]">
                <span
                  className="mt-1 flex-shrink-0 w-3 h-3 rounded-full"
                  style={{ backgroundColor: "#A45E59" }}
                />
                <span className="text-lg text-[#5D5D5D] leading-relaxed">
                  Nursery available for ages birth through 4 years old.
                </span>
              </li>
              <li className="flex gap-4 items-start bg-white/70 rounded-2xl p-4 border-l-4 border-[#65A459]">
                <span
                  className="mt-1 flex-shrink-0 w-3 h-3 rounded-full"
                  style={{ backgroundColor: "#65A459" }}
                />
                <span className="text-lg text-[#5D5D5D] leading-relaxed">
                  All volunteers are background checked.
                </span>
              </li>
              <li className="flex gap-4 items-start bg-white/70 rounded-2xl p-4 border-l-4 border-[#C68045]">
                <span
                  className="mt-1 flex-shrink-0 w-3 h-3 rounded-full"
                  style={{ backgroundColor: "#C68045" }}
                />
                <span className="text-lg text-[#5D5D5D] leading-relaxed">
                  Kids Sunday School class at 9:00 AM, using <em>The Biggest Story</em>{" "}
                  curriculum.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* To Parents with Small Children */}
        <div id="children-in-worship" className="relative max-w-3xl mx-auto mt-16 md:mt-20 bg-[#2C4061] rounded-3xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-4xl font-bold text-[#F5F3EE] mb-8">
            To Parents with Small Children
          </h3>
          <div className="space-y-6 text-lg text-[#F5F3EE]/90 leading-relaxed">
            <p className="text-xl md:text-2xl font-semibold text-[#F5F3EE]">
              Relax. Your children are a blessing, not a burden.
            </p>
            <p>
              Sitting through a worship service may feel new to your kids, and that's okay.
              Scripture shows us that children were present when the church gathered to worship
              (Ephesians 6:1&ndash;3). Because of this, we don't want to separate children from
              our gathering on the Lord's Day. We want to help them grow as followers of Christ
              right alongside us, and one of the best ways we do that is by showing them how to
              worship.
            </p>
            <p>
              So encourage your kids to sing when we sing and pray when we pray. Have them stand
              when we stand, and help them find their place in the Bible when God's Word is read
              and preached. We've put together a simple worship guide to help them follow along
              throughout the service.
            </p>
            <p>
              We know sitting still for a 45-minute sermon can feel like a lot. If your kids need
              to wiggle, that's fine. If you need to step out to the foyer for a moment, please
              feel free. And if you need to whisper a quiet instruction or explain what's
              happening, go right ahead. Your children are never a distraction from our worship.
              Their presence is an encouragement to the people around you, and we count it a joy
              to watch them grow in the Lord.
            </p>
            <p>
              So relax and enjoy the most important part of parenting: raising your children to
              know and love the Lord. You have the full support and understanding of our church
              family as you do.
            </p>
            <p className="border-l-2 border-[#F5F3EE]/40 pl-6 italic text-[#F5F3EE]/80">
              And to the members of GraceLife: it is our responsibility and our privilege to
              encourage the next generation to follow Christ (Psalm 78:4&ndash;8; 145:4&ndash;6).
              That means welcoming our children into worship and helping them grow in their faith.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
