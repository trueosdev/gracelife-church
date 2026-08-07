"use client"

import { useState } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RefTagger } from "@/components/ref-tagger"
import {
  BookOpen,
  Users,
  ShieldCheck,
  FileText,
  Phone,
  ArrowRight,
  HandHeart,
  Church,
  Check,
  X,
  ClipboardList,
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
        className={`italic leading-relaxed ${dark ? "text-[#F5F3EE]/85" : "text-[#5D5D5D]"}`}
      >
        &ldquo;{children}&rdquo;
      </blockquote>
      <figcaption
        className={`mt-2 text-sm font-semibold tracking-wide ${
          dark ? "text-[#F5F3EE]/60" : "text-[#2C4061]/70"
        }`}
      >
        {reference}
      </figcaption>
    </figure>
  )
}

// Dynamically import PdfModal with SSR disabled to avoid DOMMatrix issues
const PdfModal = dynamic(
  () => import("@/components/pdf-modal").then((mod) => ({ default: mod.PdfModal })),
  { ssr: false }
)

interface CounselingDoc {
  id: string
  title: string
  description: string
  pdfUrl: string
}

const INTAKE_FORM_URL = "https://form.jotform.com/gracelifedecatur/gracelife-biblical-counseling"

const documents: CounselingDoc[] = [
  {
    id: "personal-data-inventory",
    title: "Personal Data Inventory",
    description:
      "The intake form we ask you to complete before counseling begins, so your counselor can know your history, your health, and your situation well.",
    pdfUrl: "/counseling/GL_Personal_Data_Inventory.pdf",
  },
  {
    id: "informed-consent",
    title: "Informed Consent Agreement",
    description:
      "The agreement every counselee reads and signs before the first session. Covers our goal, our biblical basis, confidentiality and its limits, medication, fees, and arbitration.",
    pdfUrl: "/counseling/GL_Informed_Consent_Agreement.pdf",
  },
  {
    id: "advocate-agreement",
    title: "Counseling Advocate Agreement",
    description:
      "For the friend, family member, or church leader who walks through counseling alongside a counselee. Explains the advocate's role, expectations, and confidentiality.",
    pdfUrl: "/counseling/GL_Counseling_Advocate_Agreement.pdf",
  },
  {
    id: "trainee-agreement",
    title: "Trainee / Observer Agreement",
    description:
      "For counselors-in-training observing sessions as part of their certification. We are a training facility, so a trainee may sit in, always with your knowledge.",
    pdfUrl: "/counseling/GL_Counseling_Trainee_Observer_Agreement.pdf",
  },
]

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
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null)

  function openDocument(doc: CounselingDoc) {
    // Mobile browsers don't reliably render a PDF inside an iframe (iOS Safari
    // shows only the first page; some Android browsers show nothing), so hand
    // small screens off to the browser's own PDF viewer instead of the modal.
    const isSmallScreen =
      typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches

    if (isSmallScreen) {
      window.open(doc.pdfUrl, "_blank", "noopener,noreferrer")
      return
    }

    setSelectedPdf({ url: doc.pdfUrl, title: doc.title })
  }

  return (
    <main>
      {/* Turns the Scripture references below into hover-to-read ESV links */}
      <RefTagger />
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-6 bg-[#2C4061]">
        <div className="max-w-7xl mx-auto">
          <h1 className="sr-only">GraceLife Biblical Counseling</h1>
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
        </div>
      </section>

      {/* The Heart Behind It */}
      <section className="relative py-12 md:py-20 px-6 bg-[#F5F3EE]">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: "url('/counseling/bg1.jpg')" }}
          aria-hidden="true"
        />
        {/* Wash so body copy stays readable over the photo */}
        <div className="absolute inset-0 bg-[#F5F3EE]/75" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto bg-[#F5F3EE]/90 backdrop-blur-sm rounded-3xl shadow-sm border border-[#2C4061]/10 p-6 sm:p-8 md:p-12">
          <h2 className="text-3xl md:text-6xl font-bold text-[#2C4061] mb-6">
            The Heart Behind It
          </h2>
          <div className="space-y-6 text-lg text-[#5D5D5D] leading-relaxed">
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
            <p className="text-[#2C4061] font-medium text-xl">
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
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2C4061] mb-8 md:mb-10">
            What We&rsquo;re Committed To
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {commitments.map((item) => (
              <div
                key={item.title}
                className="bg-[#F5F3EE] rounded-2xl p-6 sm:p-8 border border-[#2C4061]/10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#2C4061] flex-shrink-0">{item.icon}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#2C4061]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#5D5D5D] leading-relaxed">{item.body}</p>
                <p className="mt-4 pt-4 border-t border-[#2C4061]/10 text-sm italic text-[#5D5D5D] leading-relaxed">
                  &ldquo;{item.verse}&rdquo;{" "}
                  <span className="not-italic font-semibold text-[#2C4061]/70">
                    {item.reference}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What It Is / What It Isn't */}
      <section className="relative py-12 md:py-20 px-6 bg-[#F5F3EE]">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: "url('/counseling/bg3.jpg')" }}
          aria-hidden="true"
        />
        {/* Wash so the heading and closing note stay readable over the sun */}
        <div className="absolute inset-0 bg-[#F5F3EE]/80" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2C4061] mb-6">
            What Counseling Here Is, and What It Isn&rsquo;t
          </h2>

          <Scripture
            reference="Colossians 3:16"
            className="mb-12 max-w-3xl bg-[#F5F3EE]/85 backdrop-blur-sm rounded-r-2xl py-4 pr-6"
          >
            Let the word of Christ dwell in you richly, teaching and admonishing one another in all
            wisdom.
          </Scripture>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {/* What It Is */}
            <div className="bg-white rounded-2xl shadow-lg border border-[#2C4061]/10 overflow-hidden">
              <div className="flex items-center gap-3 px-6 md:px-8 py-5 bg-[#629E82]/10 border-b border-[#2C4061]/8">
                <span className="w-9 h-9 rounded-full bg-[#629E82] text-white flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5" strokeWidth={2.5} />
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#2C4061]">What It Is</h3>
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
            <div className="bg-white rounded-2xl shadow-lg border border-[#2C4061]/10 overflow-hidden">
              <div className="flex items-center gap-3 px-6 md:px-8 py-5 bg-[#A45E59]/10 border-b border-[#2C4061]/8">
                <span className="w-9 h-9 rounded-full bg-[#A45E59] text-white flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5" strokeWidth={2.5} />
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#2C4061]">
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

          <p className="text-[#5D5D5D] leading-relaxed mt-8 max-w-3xl bg-[#F5F3EE]/85 backdrop-blur-sm rounded-2xl border border-[#2C4061]/10 p-6">
            We are certified through the{" "}
            <strong className="text-[#2C4061]">ACBC</strong> (Association of Certified Biblical
            Counselors) or <strong className="text-[#2C4061]">IBCD</strong> (Institute of Biblical
            Counseling and Discipleship), or are working toward certification under supervision.
            They are not licensed psychotherapists or mental health professionals, and should not
            be expected to follow the methods of such specialists.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20 px-6 bg-[#2C4061]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#F5F3EE] mb-4">How It Works</h2>
          <p className="text-lg text-[#F5F3EE]/80 leading-relaxed mb-8 max-w-2xl">
            Nothing about the process is meant to be mysterious. Here is what to expect from the
            first email to the last session.
          </p>

          <Scripture reference="James 1:22" tone="onDark" className="mb-12 max-w-2xl">
            But be doers of the word, and not hearers only, deceiving yourselves.
          </Scripture>

          <div className="space-y-6">
            {process.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 sm:gap-6 items-start bg-[#F5F3EE]/5 rounded-2xl p-5 sm:p-6 border border-[#F5F3EE]/15"
              >
                <span className="text-2xl md:text-3xl font-bold text-[#F5F3EE]/40 flex-shrink-0 leading-none pt-1">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#F5F3EE] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#F5F3EE]/80 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For & Cost */}
      <section className="relative py-12 md:py-20 px-6 bg-[#F5F3EE]">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: "url('/counseling/bg2.jpg')" }}
          aria-hidden="true"
        />
        {/* Wash to soften the sky behind the cards */}
        <div className="absolute inset-0 bg-[#F5F3EE]/40" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-[#2C4061]/10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2C4061] mb-4">Who It&rsquo;s For</h3>
            <div className="space-y-4 text-[#5D5D5D] leading-relaxed">
              <p>
                Counseling is available to members, regular attenders, and active participants of
                GraceLife Church. Where we have capacity, we also serve those from other churches.
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

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-[#2C4061]/10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2C4061] mb-4">What It Costs</h3>
            <div className="space-y-4 text-[#5D5D5D] leading-relaxed">
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
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-[#A45E59]/8 border-l-4 border-[#A45E59] rounded-2xl p-6 sm:p-8 md:p-10">
          <div className="flex items-start gap-3 mb-4">
            <Phone className="w-7 h-7 text-[#A45E59] flex-shrink-0 mt-0.5" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C4061]">
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
                  className="flex flex-wrap items-baseline gap-x-2 gap-y-1 bg-white/60 rounded-lg px-4 py-3 hover:bg-white transition-colors"
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

      {/* The Documents */}
      <section id="documents" className="relative py-12 md:py-20 px-6 bg-[#2C4061]">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: "url('/counseling/bg4.jpg')" }}
          aria-hidden="true"
        />
        {/* Navy wash keeps this a dark section so the light text holds up */}
        <div className="absolute inset-0 bg-[#2C4061]/88" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-bold text-[#F5F3EE] mb-4">The Documents</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {documents.map((doc) => (
              <button
                key={doc.id}
                type="button"
                onClick={() => openDocument(doc)}
                className="text-left bg-[#F5F3EE] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col group hover:-translate-y-1 cursor-pointer"
              >
                <FileText className="w-8 h-8 text-[#2C4061] mb-4" />
                <h4 className="text-xl font-bold text-[#2C4061] mb-3">{doc.title}</h4>
                <p className="text-[#5D5D5D] leading-relaxed text-sm flex-grow mb-4">
                  {doc.description}
                </p>
                <span className="flex items-center text-[#2C4061] font-medium group-hover:underline">
                  <FileText className="w-4 h-4 mr-2" />
                  Open PDF
                </span>
              </button>
            ))}
          </div>

          <p className="text-sm text-[#F5F3EE]/60 leading-relaxed mt-10 max-w-3xl">
            Additional internal protocols, including our procedures for domestic abuse, mandatory
            reporting of child abuse, and risk assessment for threat of harm, are maintained for
            us and are available on request.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F3EE]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2C4061] mb-6">
            Take the First Step
          </h2>
          <p className="text-lg text-[#5D5D5D] leading-relaxed mb-8">
            You don&rsquo;t need to have it figured out or know how to explain it. Send us a note,
            and we&rsquo;ll go from there.
          </p>

          <Scripture reference="Hebrews 4:16" align="center" className="mb-10 max-w-2xl mx-auto">
            Let us then with confidence draw near to the throne of grace, that we may receive mercy
            and find grace to help in time of need.
          </Scripture>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <a
              href={INTAKE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#2C4061] text-[#F5F3EE] px-6 sm:px-8 py-4 rounded-lg font-medium hover:bg-[#2C4061]/90 transition-colors"
            >
              <ClipboardList className="w-4 h-4" />
              Start the Intake Form
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-[#2C4061]/30 text-[#2C4061] px-6 sm:px-8 py-4 rounded-lg font-medium hover:bg-[#2C4061]/5 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
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
            <p className="mt-1">1311 19th Ave SE, Decatur, AL 35601</p>
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {selectedPdf && (
        <PdfModal
          isOpen={!!selectedPdf}
          onClose={() => setSelectedPdf(null)}
          pdfUrl={selectedPdf.url}
          title={selectedPdf.title}
        />
      )}

      <Footer />
    </main>
  )
}
