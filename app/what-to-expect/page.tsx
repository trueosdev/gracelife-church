import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Aurora } from "@/components/ambient"

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

      <PageHero title="What to Expect">
        <p>
          Planning your first visit? Here's a look at what a Sunday morning at GraceLife Church
          is like.
        </p>
      </PageHero>

      {/* Intentional Worship */}
      <section id="intentional-worship" className="relative py-20 md:py-28 px-6 bg-[#F5F3EE]">
        <Aurora />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl text-[#2C4061] mb-10" data-reveal>
            Intentional Worship
          </h2>
          <div className="space-y-7 text-lg text-[#5D5D5D] leading-[1.85]" data-reveal>
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
              Christ never leaves us in our sin. Because of this the confession of sin is always followed by the
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
          <div className="mt-16 md:mt-20 grid gap-5 sm:grid-cols-2" data-reveal-group>
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
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-7 md:p-8 shadow-[0_20px_50px_-30px_rgba(44,64,97,0.35)] border border-white"
              >
                <span className="block font-serif text-sm text-[#3F7660] mb-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl text-[#2C4061] mb-3">
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
        className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-[#F5F3EE] via-[#5B8BA5]/8 to-[#629E82]/10 overflow-hidden"
      >
        {/* Playful color accents echoing the Littles logo */}
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#C4A449]/15 blur-xl float-soft" aria-hidden="true" />
        <div className="absolute top-1/3 -right-12 w-48 h-48 rounded-full bg-[#A45E59]/12 blur-xl float-soft [animation-delay:-3s]" aria-hidden="true" />
        <div className="absolute -bottom-16 left-1/4 w-56 h-56 rounded-full bg-[#65A459]/12 blur-xl float-soft [animation-delay:-6s]" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <div className="flex justify-center" data-reveal>
            <img
              src="/gracelifelittles.svg"
              alt="GraceLife Littles"
              className="w-full max-w-lg h-auto"
            />
          </div>
          <div data-reveal>
            <h2 className="text-4xl md:text-6xl text-[#5B8BA5] mb-8">
              Childcare
            </h2>
            <p className="text-lg text-[#5D5D5D] leading-[1.85] mb-10">
              GraceLife Littles is our childcare ministry, providing a safe and loving
              environment for your youngest children so parents can worship with confidence.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-[0_15px_40px_-30px_rgba(44,64,97,0.4)] border-l-4 border-[#A45E59]">
                <span
                  className="mt-1 flex-shrink-0 w-3 h-3 rounded-full"
                  style={{ backgroundColor: "#A45E59" }}
                />
                <span className="text-lg text-[#5D5D5D] leading-relaxed">
                  Nursery available for ages birth through 4 years old.
                </span>
              </li>
              <li className="flex gap-4 items-start bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-[0_15px_40px_-30px_rgba(44,64,97,0.4)] border-l-4 border-[#65A459]">
                <span
                  className="mt-1 flex-shrink-0 w-3 h-3 rounded-full"
                  style={{ backgroundColor: "#65A459" }}
                />
                <span className="text-lg text-[#5D5D5D] leading-relaxed">
                  All volunteers are background checked.
                </span>
              </li>
              <li className="flex gap-4 items-start bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-[0_15px_40px_-30px_rgba(44,64,97,0.4)] border-l-4 border-[#C68045]">
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
        <div id="children-in-worship" className="relative overflow-hidden max-w-3xl mx-auto mt-20 md:mt-28 bg-[#2C4061] rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(44,64,97,0.6)] p-8 md:p-14" data-reveal>
          <Aurora tone="dark" />
          <div className="relative">
          <h3 className="text-3xl md:text-5xl text-[#F5F3EE] mb-10">
            To Parents with Small Children
          </h3>
          <div className="space-y-6 text-lg text-[#F5F3EE]/85 leading-[1.8]">
            <p>
              First, we want you to hear this clearly:{" "}<br />
              <span className="font-serif text-2xl md:text-3xl text-[#F5F3EE]">
                Relax. Your children are a blessing, not a burden.
              </span>
            </p>
            <p>
              We understand that having children sit through an entire worship service can feel
              daunting&mdash;and perhaps even unique by today's standards. Yet, when we examine
              Scripture, we see that children were actively present when the church gathered for
              worship (Ephesians 6:1&ndash;3).
            </p>
            <p>
              Because of this, we choose not to separate children from our gathering on the
              Lord's Day. Instead, we want to champion their discipleship right alongside the
              rest of the body.
            </p>

            <h4 className="text-2xl md:text-3xl text-[#F5F3EE] pt-6">
              Modeling Worship Together
            </h4>
            <p>
              One of the most impactful ways we disciple our children is by modeling what worship
              looks like in real-time. We invite you to actively help them participate:
            </p>
            <ul className="space-y-3 list-none">
              <li className="pl-6 border-l-2 border-[#F5F3EE]/40">
                <span className="font-semibold text-[#F5F3EE]">Sing &amp; Pray:</span>{" "}
                Encourage your kids to sing when we sing and bow their heads when we pray.
              </li>
              <li className="pl-6 border-l-2 border-[#F5F3EE]/40">
                <span className="font-semibold text-[#F5F3EE]">Engage with Scripture:</span>{" "}
                Help them stand when we stand and find the passage in the Bible when the sermon
                is preached.
              </li>
              <li className="pl-6 border-l-2 border-[#F5F3EE]/40">
                <span className="font-semibold text-[#F5F3EE]">Use the Kids' Worship Guide:</span>{" "}
                We provide a simple, kid-friendly worship guide at the welcome table each Sunday
                to help them follow along and stay engaged.
              </li>
            </ul>

            <h4 className="text-2xl md:text-3xl text-[#F5F3EE] pt-6">
              Grace for the &ldquo;Wiggles&rdquo;
            </h4>
            <p>
              We know that sitting still for a 45-minute sermon is a big ask for little ones.
              Please know that we expect a little noise and movement!
            </p>
            <ul className="space-y-3 list-none">
              <li className="pl-6 border-l-2 border-[#F5F3EE]/40">
                <span className="font-semibold text-[#F5F3EE]">It is okay to wiggle.</span>{" "}
                If your child needs to shift around, that is perfectly fine.
              </li>
              <li className="pl-6 border-l-2 border-[#F5F3EE]/40">
                <span className="font-semibold text-[#F5F3EE]">Teach in the moment.</span>{" "}
                We encourage you to whisper simple instructions or quietly explain what is
                happening during the service.
              </li>
              <li className="pl-6 border-l-2 border-[#F5F3EE]/40">
                <span className="font-semibold text-[#F5F3EE]">Take a moment if needed.</span>{" "}
                If you need to step out and walk to the foyer for a moment to reset, please feel
                free.
              </li>
            </ul>

            <h4 className="text-2xl md:text-3xl text-[#F5F3EE] pt-6">
              Our Nursery
            </h4>
            <p>
              While we love having children in the service, we also want to support you. We have
              a safe, loving nursery available for children ages 4 and under during the service,
              and we encourage you to utilize it at any point if it would best serve your family!
            </p>

            <h4 className="text-2xl md:text-3xl text-[#F5F3EE] pt-6">
              Our Heart for Your Family
            </h4>
            <p>
              Your children are not a distraction from our worship; their presence is a profound
              encouragement to everyone around you. We consider it a great joy to watch them grow
              in the Lord.
            </p>
            <p>
              Enjoy this vital season of parenting, knowing you have the full support, prayers,
              and understanding of your GraceLife church family!
            </p>

            <div className="border-l-2 border-[#F5F3EE]/40 pl-6 italic text-[#F5F3EE]/80 space-y-3">
              <p className="font-semibold not-italic text-[#F5F3EE]">
                A Note to the Members of GraceLife Church
              </p>
              <p>
                Let's consider it a privilege and a great responsibility to encourage the next
                generation to follow Christ (Psalm 78:4&ndash;8; 145:4&ndash;6). This means
                actively involving our children in our worship services, warmly extending grace
                to young families, and partnering together to nurture their spiritual growth.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
