import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RefTagger } from "@/components/ref-tagger"
import { Aurora, Waves } from "@/components/ambient"
import {
  COUNSELING_PORTAL_URL as CARE_PORTAL_URL,
  counselingJsonLd,
} from "@/lib/counseling-seo"
import {
  BookOpen,
  Users,
  ShieldCheck,
  Phone,
  ArrowRight,
  HandHeart,
  Church,
  Check,
  X,
} from "lucide-react"

/**
 * Latin cross. Lucide's `Cross` is a Greek cross (plus-shaped) and reads as a
 * medical symbol, so this is drawn to match lucide's stroke conventions.
 */
function CrossIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9.5 2h5v4.5H20v5h-5.5V22h-5V11.5H4v-5h5.5Z" />
    </svg>
  )
}

/**
 * Pull quote for Scripture. `tone` picks the palette for the section it sits in;
 * the centered variant drops the rule, since a left border reads as off-axis in
 * a centered block.
 */
function Scripture({
  reference,
  tone = "onLight",
  align = "left",
  className = "",
  children,
}: {
  reference: string
  tone?: "onLight" | "onDark"
  align?: "left" | "center"
  className?: string
  children: React.ReactNode
}) {
  const dark = tone === "onDark"
  const centered = align === "center"

  return (
    <figure
      className={[
        centered ? "text-center" : "border-l-2 pl-5 sm:pl-6",
        centered ? "" : dark ? "border-[#F5F3EE]/40" : "border-[#629E82]",
        className,
      ].join(" ")}
    >
      <blockquote
        className={`font-serif text-xl md:text-2xl leading-relaxed ${dark ? "text-[#F5F3EE]/90" : "text-[#2C4061]/85"}`}
      >
        &ldquo;{children}&rdquo;
      </blockquote>
      <figcaption
        className={`mt-3 text-xs font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-[#F5F3EE]/60" : "text-[#3F7660]"
        }`}
      >
        {reference}
      </figcaption>
    </figure>
  )
}

const CARE_PORTAL_LABEL = "Request Counseling"

const commitments = [
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "Scripture Is Sufficient",
    body: "God's Word is not a supplement to real help. It is the help. Scripture speaks to the exact struggles people bring into a counseling room, and it is living and active enough to reach the heart.",
    verse:
      "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.",
    reference: "2 Timothy 3:16-17",
  },
  {
    icon: <CrossIcon className="w-7 h-7" />,
    title: "Christ, Not Therapy",
    body: "We don’t try to relate you to ourselves for healing, but to Jesus Christ. Lasting change comes from the Spirit’s work through the Gospel, the renewing of our mind through the truth of scripture, not the counselor’s cleverness.",
    verse:
      "Do not be conformed to this world, but be transformed by the renewal of your mind.",
    reference: "Romans 12:2",
  },
  {
    icon: <Church className="w-7 h-7" />,
    title: "Care Within the Church",
    body: "You were never meant to change alone. Counseling here is tied to the life of a local congregation: preaching, prayer, ordinary friendship, and the people who will still be there when counseling ends.",
    verse: "Bear one another's burdens, and so fulfill the law of Christ.",
    reference: "Galatians 6:2",
  },
  {
    icon: <HandHeart className="w-7 h-7" />,
    title: "Honest About Real Life",
    body: "Biblical counseling does not wave away hard things. Grief, abuse, depression, addiction, medication, and physical illness are taken seriously, understood biblically, and met with truth and compassion.",
    verse: "Rejoice with those who rejoice, weep with those who weep.",
    reference: "Romans 12:15",
  },
]

const whatItIs = [
  {
    title: "Careful Listening",
    detail: "Many questions before much of an answer, so counsel fits your actual life.",
  },
  {
    title: "Intensely Practical",
    detail: "Real work between sessions, not just conversation in the room.",
  },
  {
    title: "A Ministry of the Church",
    detail: "Free to members, regular attenders, and active participants.",
  },
  {
    title: "Confidential",
    detail: "Carefully guarded, within the limits we state up front.",
  },
  {
    title: "A Season, Not a Fixture",
    detail: "Aimed at an end, leading back into the ordinary life of discipleship.",
  },
]

const whatItIsnt = [
  {
    title: "Licensed Psychotherapy",
    detail: "We are not mental health professionals or health care providers.",
  },
  {
    title: "Medical Care",
    detail: "We give no medical advice, and never advise changing a medication.",
  },
  {
    title: "Legal or Financial Counsel",
    detail: "For those matters, please see an independent professional.",
  },
  {
    title: "A Dismissal of Suffering",
    detail: "Real pain, physical illness, and trauma are taken seriously here.",
  },
  {
    title: "An Emergency Service",
    detail: "When someone is in danger, call 911 or 988 first, then tell us.",
  },
]

const process = [
  {
    step: "01",
    title: "Reach Out",
    body: "Contact the church office and let us know you'd like counseling. There's no polished way to ask. A short email is enough.",
  },
  {
    step: "02",
    title: "Personal Data Inventory",
    body: "You'll fill out our intake form before your first session. It helps your counselor understand your history and your situation before you sit down.",
  },
  {
    step: "03",
    title: "Informed Consent",
    body: "Before counseling begins, you'll read and sign the Informed Consent Agreement, so nothing about how we counsel is a surprise to you.",
  },
  {
    step: "04",
    title: "Weekly Sessions",
    body: "You'll meet with a counselor, usually weekly. Sessions involve listening, Scripture, prayer, and homework to work through between meetings. A trainee may observe, and an advocate may attend with you.",
  },
  {
    step: "05",
    title: "Conclusion & Discipleship",
    body: "Counseling is a season, not a permanent arrangement. When it concludes, the goal is that you keep growing in the ordinary life of the church.",
  },
]

export default function CounselingPage() {
  return (
    <main>
      {/* Structured data: the counseling service, FAQ, breadcrumb, and steps below */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(counselingJsonLd(process)).replace(/</g, "\\u003c"),
        }}
      />
      {/* Turns the Scripture references below into hover-to-read ESV links */}
      <RefTagger />
      <Header />

      {/* Hero Banner */}
      <section className="relative overflow-hidden pt-28 md:pt-36 pb-32 md:pb-44 px-6 bg-[#2C4061]">
        <Aurora tone="dark" />
        <div className="relative max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
          <h1 className="sr-only">GraceLife Biblical Counseling in Decatur, Alabama</h1>
          {/* The logo art is a single navy color, so it would disappear against this
              navy banner. Paint it as a mask instead to render the same file in cream. */}
          <div
            role="img"
            aria-label="GraceLife Biblical Counseling — Come to me, all who labor and are heavy laden, and I will give you rest. Matthew 11:28"
            className="w-full max-w-3xl mx-auto aspect-[3643/1223] bg-[#F5F3EE]"
            style={{
              WebkitMaskImage: "url('/counseling/biblical-counseling-logo.svg')",
              maskImage: "url('/counseling/biblical-counseling-logo.svg')",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
          <p className="mt-6 md:mt-8 text-center font-serif text-lg md:text-2xl text-[#F5F3EE]/80">
            The biblical counseling ministry of GraceLife Church in Decatur, Alabama
          </p>
          <div className="mt-8 md:mt-10 flex justify-center">
            <a
              href={CARE_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F5F3EE] text-[#2C4061] px-8 sm:px-9 py-4 rounded-full font-medium hover:bg-white transition-colors"
            >
              {CARE_PORTAL_LABEL}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <Waves />
      </section>

      {/* The Heart Behind It */}
      <section id="what-is-biblical-counseling" className="relative py-20 md:py-28 px-6 bg-[#F5F3EE]">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: "url('/counseling/bg1.jpg')" }}
          aria-hidden="true"
        />
        {/* Wash so body copy stays readable over the photo; solid at the top so the
            hero's waves flow straight into it */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#F5F3EE] via-[#F5F3EE]/75 to-[#F5F3EE]/75"
          aria-hidden="true"
        />

        <div
          className="relative max-w-3xl mx-auto bg-[#F5F3EE]/85 backdrop-blur-md rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(44,64,97,0.35)] border border-white/70 p-7 sm:p-10 md:p-16"
          data-reveal
        >
          <h2 className="text-4xl md:text-6xl text-[#2C4061] mb-10">
            The Heart Behind It
          </h2>
          <div className="space-y-7 text-lg text-[#5D5D5D] leading-[1.85]">
            <p>
              Life in a fallen world breaks people. Marriages grow cold, grief settles in and
              won't lift, anger surfaces in ways we swore it never would, anxiety tightens its
              grip, and old sin patterns prove far more stubborn than we expected. Sooner or
              later, most of us need someone to sit down with us and help.
            </p>

            <Scripture reference="Psalm 34:18">
              The <span className="uppercase text-[0.85em] tracking-wide">Lord</span> is near to the
              brokenhearted and saves the crushed in spirit.
            </Scripture>

            <p>
              We believe God has not left His people without that help. He has given us His Word,
              His Spirit, and His church. Biblical counseling is simply the conviction that these
              are enough: that Scripture actually speaks to the struggles people carry
              through the door, and that God uses ordinary conversations shaped by His Word to
              change hearts.
            </p>
            <p>
              This is not advice-giving, and it is not a lecture. Counseling begins with careful
              listening. A good counselor asks a great many questions before offering much of an
              answer, because loving someone well requires understanding them well
              (Proverbs&nbsp;18:13). Only then does the counselor bring Scripture to bear on what
              is actually there.
            </p>
            <p>
              And the goal is not behavior management. Behavior matters, but the heart is where
              real change happens: what you love, what you fear, what you trust, what you
              are convinced is true about God. When the heart is met by the gospel, the rest
              follows. Our aim is that you would find Christ sufficient, and be transformed by His
              Spirit into His likeness.
            </p>
            <p className="font-serif text-[#2C4061] text-2xl md:text-3xl leading-snug">
              You are worse off than you dare admit, and more loved than you ever dared hope. That
              is the ground every counseling conversation here stands on.
            </p>

            <Scripture reference="Matthew 11:28-30">
              Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke
              upon you, and learn from me, for I am gentle and lowly in heart, and you will find
              rest for your souls. For my yoke is easy, and my burden is light.
            </Scripture>
          </div>
        </div>
      </section>

      {/* What We're Committed To */}
      <section id="commitments" className="relative py-20 md:py-28 px-6 bg-white">
        <Aurora />
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl text-[#2C4061] mb-12 md:mb-16" data-reveal>
            What We&rsquo;re Committed To
          </h2>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2" data-reveal-group>
            {commitments.map((item) => (
              <div
                key={item.title}
                className="bg-[#F5F3EE]/80 backdrop-blur-sm rounded-3xl p-7 sm:p-10 border border-white shadow-[0_25px_60px_-35px_rgba(44,64,97,0.35)]"
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-12 h-12 rounded-full bg-white text-[#2C4061] flex items-center justify-center flex-shrink-0 [&_svg]:w-6 [&_svg]:h-6">
                    {item.icon}
                  </span>
                  <h3 className="text-2xl md:text-3xl text-[#2C4061]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#5D5D5D] leading-[1.8]">{item.body}</p>
                <p className="mt-6 pt-6 border-t border-[#2C4061]/10 font-serif text-lg text-[#2C4061]/80 leading-relaxed">
                  &ldquo;{item.verse}&rdquo;{" "}
                  <span className="block mt-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#3F7660]">
                    {item.reference}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What It Is / What It Isn't */}
      <section id="what-it-is" className="relative pt-20 md:pt-28 pb-36 md:pb-48 px-6 bg-[#F5F3EE]">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: "url('/counseling/bg3.jpg')" }}
          aria-hidden="true"
        />
        {/* Wash so the heading and closing note stay readable over the sun */}
        <div className="absolute inset-0 bg-[#F5F3EE]/80" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl text-[#2C4061] mb-10" data-reveal>
            What Counseling Here Is, and What It Isn&rsquo;t
          </h2>

          <Scripture
            reference="Colossians 3:16"
            className="mb-14 max-w-3xl bg-[#F5F3EE]/85 backdrop-blur-sm rounded-r-3xl py-5 pr-6"
          >
            Let the word of Christ dwell in you richly, teaching and admonishing one another in all
            wisdom.
          </Scripture>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2" data-reveal-group>
            {/* What It Is */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-[0_30px_70px_-35px_rgba(44,64,97,0.45)] border border-white overflow-hidden">
              <div className="flex items-center gap-3 px-6 md:px-8 py-5 bg-[#629E82]/10 border-b border-[#2C4061]/8">
                <span className="w-9 h-9 rounded-full bg-[#629E82] text-white flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5" strokeWidth={2.5} />
                </span>
                <h3 className="text-2xl md:text-3xl text-[#2C4061]">What It Is</h3>
              </div>
              <ul className="divide-y divide-[#2C4061]/8">
                {whatItIs.map((item) => (
                  <li key={item.title} className="flex gap-3 px-6 md:px-8 py-4">
                    <Check className="w-4 h-4 mt-1 text-[#629E82] flex-shrink-0" strokeWidth={3} />
                    <div>
                      <p className="font-semibold text-[#2C4061]">{item.title}</p>
                      <p className="text-sm text-[#5D5D5D] leading-relaxed mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* What It Isn't */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-[0_30px_70px_-35px_rgba(44,64,97,0.45)] border border-white overflow-hidden">
              <div className="flex items-center gap-3 px-6 md:px-8 py-5 bg-[#A45E59]/10 border-b border-[#2C4061]/8">
                <span className="w-9 h-9 rounded-full bg-[#A45E59] text-white flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5" strokeWidth={2.5} />
                </span>
                <h3 className="text-2xl md:text-3xl text-[#2C4061]">
                  What It Isn&rsquo;t
                </h3>
              </div>
              <ul className="divide-y divide-[#2C4061]/8">
                {whatItIsnt.map((item) => (
                  <li key={item.title} className="flex gap-3 px-6 md:px-8 py-4">
                    <X className="w-4 h-4 mt-1 text-[#A45E59] flex-shrink-0" strokeWidth={3} />
                    <div>
                      <p className="font-semibold text-[#2C4061]">{item.title}</p>
                      <p className="text-sm text-[#5D5D5D] leading-relaxed mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-[#5D5D5D] leading-[1.8] mt-8 max-w-3xl bg-[#F5F3EE]/85 backdrop-blur-sm rounded-3xl border border-white p-7" data-reveal>
            We are certified through the{" "}
            <strong className="text-[#2C4061]">ACBC</strong> (Association of Certified Biblical
            Counselors) or <strong className="text-[#2C4061]">IBCD</strong> (Institute of Biblical
            Counseling and Discipleship), or are working toward certification under supervision.
            They are not licensed psychotherapists or mental health professionals, and should not
            be expected to follow the methods of such specialists.
          </p>
        </div>
        <Waves fill="#2C4061" />
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative overflow-hidden pt-16 md:pt-20 pb-36 md:pb-48 px-6 bg-[#2C4061]">
        <Aurora tone="dark" />
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl text-[#F5F3EE] mb-6" data-reveal>How It Works</h2>
          <p className="text-lg text-[#F5F3EE]/80 leading-[1.8] mb-10 max-w-2xl" data-reveal>
            Nothing about the process is meant to be mysterious. Here is what to expect from the
            first email to the last session.
          </p>

          <Scripture reference="James 1:22" tone="onDark" className="mb-14 max-w-2xl">
            But be doers of the word, and not hearers only, deceiving yourselves.
          </Scripture>

          <div className="space-y-5" data-reveal-group>
            {process.map((item) => (
              <div
                key={item.step}
                className="flex gap-5 sm:gap-8 items-start bg-white/[0.06] backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10"
              >
                <span className="font-serif text-3xl md:text-4xl text-[#F5F3EE]/40 w-10 md:w-12 flex-shrink-0 leading-none pt-1">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl text-[#F5F3EE] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#F5F3EE]/80 leading-[1.8]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Waves />
      </section>

      {/* Who It's For & Cost */}
      <section id="who-its-for" className="relative py-20 md:py-28 px-6 bg-[#F5F3EE]">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: "url('/counseling/bg2.jpg')" }}
          aria-hidden="true"
        />
        {/* Wash to soften the sky behind the cards; solid at the top to meet the waves */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#F5F3EE] via-[#F5F3EE]/40 to-[#F5F3EE]/40"
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto grid gap-8 md:grid-cols-2" data-reveal-group>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-7 sm:p-10 shadow-[0_30px_70px_-35px_rgba(44,64,97,0.45)] border border-white">
            <h3 className="text-3xl md:text-4xl text-[#2C4061] mb-6">Who It&rsquo;s For</h3>
            <div className="space-y-4 text-[#5D5D5D] leading-[1.8]">
              <p>
                Counseling is available to members, regular attenders, and active participants of
                GraceLife Church. We simply ask that you be involved in the community of faith
                during the duration of care. Where we have capacity, we also serve those from other
                churches.
              </p>
              <p>
                If you attend elsewhere, we&rsquo;ll ask you to bring an{" "}
                <strong className="text-[#2C4061]">advocate</strong> from your own church: a
                leader or someone in spiritual leadership there (for women, a woman in that role).
                We believe your home church should remain the primary place you are cared for.
              </p>
              <p>
                For counselees under 18, we require parents to be involved in sessions, homework,
                and accountability.
              </p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-7 sm:p-10 shadow-[0_30px_70px_-35px_rgba(44,64,97,0.45)] border border-white">
            <h3 className="text-3xl md:text-4xl text-[#2C4061] mb-6">What It Costs</h3>
            <div className="space-y-4 text-[#5D5D5D] leading-[1.8]">
              <p>
                <strong className="text-[#2C4061]">Free</strong> for members, regular attenders,
                and active participants of GraceLife Church. You may need to purchase study
                materials for your own use.
              </p>
              <p>
                For those who remain members or attenders of another church, a suggested{" "}
                <strong className="text-[#2C4061]">donation of $60 per session</strong> helps
                offset facility and administrative costs. Donations go directly to GraceLife
                Church and are not tax-deductible.
              </p>
              <p className="text-[#2C4061] font-medium">
                Financial hardship options are available on request. No one is turned away because
                they cannot pay.
              </p>
              <Scripture reference="Matthew 10:8" className="pt-1">
                You received without paying; give without pay.
              </Scripture>
            </div>
          </div>
        </div>
      </section>

      {/* If You Are In Danger */}
      <section id="crisis" className="py-20 md:py-28 px-6 bg-gradient-to-b from-white to-[#F5F3EE]">
        <div className="max-w-4xl mx-auto bg-[#A45E59]/[0.07] border-l-4 border-[#A45E59] rounded-3xl p-7 sm:p-10 md:p-12" data-reveal>
          <div className="flex items-start gap-3 mb-4">
            <Phone className="w-7 h-7 text-[#A45E59] flex-shrink-0 mt-0.5" />
            <h2 className="text-3xl md:text-4xl text-[#2C4061]">
              If You Are In Danger
            </h2>
          </div>
          <p className="text-[#5D5D5D] leading-relaxed mb-6">
            Counseling is not an emergency service. If you or someone you love is in immediate
            danger, or is at risk of harming themselves or someone else, please call for help
            right now. Then tell us, because we want to walk with you through it.
          </p>
          {/* Each number is its own tappable row so it's easy to hit on a phone */}
          <ul className="space-y-2">
            {[
              { label: "Emergency", number: "911", tel: "911" },
              { label: "Suicide & Crisis Lifeline", number: "988", tel: "988", note: "call or text" },
              {
                label: "Alabama Domestic Violence Hotline",
                number: "1-800-500-1119",
                tel: "18005001119",
              },
              { label: "Morgan County DHR", number: "(256) 301-8800", tel: "12563018800" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={`tel:${item.tel}`}
                  className="flex flex-wrap items-baseline gap-x-2 gap-y-1 bg-white/70 rounded-2xl px-5 py-3.5 hover:bg-white transition-colors"
                >
                  <span className="font-semibold text-[#2C4061]">{item.label}:</span>
                  <span className="text-[#A45E59] font-semibold underline">{item.number}</span>
                  {item.note && (
                    <span className="text-sm text-[#5D5D5D]">({item.note})</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <Scripture reference="Psalm 46:1" className="mt-6">
            God is our refuge and strength, a very present help in trouble.
          </Scripture>

          <p className="text-sm text-[#5D5D5D]/90 leading-relaxed mt-6">
            We follow written protocols for domestic abuse, child abuse reporting,
            and risk of harm to self or others, in keeping with Alabama law and our duty to
            protect the vulnerable.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="relative py-24 md:py-36 px-6 bg-[#F5F3EE]">
        <Aurora />
        <div className="relative max-w-3xl mx-auto text-center" data-reveal>
          <h2 className="text-4xl md:text-6xl text-[#2C4061] mb-8">
            Take the First Step
          </h2>
          <p className="text-lg text-[#5D5D5D] leading-[1.8] mb-10">
            You don&rsquo;t need to have it figured out or know how to explain it. Send us a note,
            and we&rsquo;ll go from there.
          </p>

          <Scripture reference="Hebrews 4:16" align="center" className="mb-10 max-w-2xl mx-auto">
            Let us then with confidence draw near to the throne of grace, that we may receive mercy
            and find grace to help in time of need.
          </Scripture>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <a
              href={CARE_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#2C4061] text-[#F5F3EE] px-8 sm:px-9 py-4 rounded-full font-medium hover:bg-[#3b5479] transition-colors"
            >
              {CARE_PORTAL_LABEL}
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-[#2C4061]/25 text-[#2C4061] px-8 sm:px-9 py-4 rounded-full font-medium hover:bg-[#2C4061]/5 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <div className="text-[#5D5D5D] mt-6">
            <a
              href="mailto:Parker@gracelifedecatur.org?subject=Biblical%20Counseling"
              className="inline-block underline px-3 py-2 rounded-lg hover:text-[#2C4061] hover:bg-[#2C4061]/5 transition-colors break-all"
            >
              Parker@gracelifedecatur.org
            </a>
          </div>
          <div className="text-[#5D5D5D] mt-6">
            <a
              href="tel:12563553790"
              className="inline-block underline px-3 py-2 rounded-lg hover:text-[#2C4061] hover:bg-[#2C4061]/5 transition-colors"
            >
              (256) 355-3790
            </a>
            <address className="mt-1 not-italic">1311 19th Ave SE, Decatur, AL 35601</address>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
