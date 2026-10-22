import { useId, type CSSProperties } from "react"

type Glow = { x: string; y: string; color: string; size?: string; duration?: string; delay?: string }

const GLOWS: Record<"light" | "dark", Glow[]> = {
  // On cream: faint sage, blue, and gold washes
  light: [
    { x: "12%", y: "18%", color: "rgb(98 158 130 / 0.2)", duration: "34s" },
    { x: "88%", y: "35%", color: "rgb(91 139 165 / 0.16)", size: "55vmax", duration: "40s", delay: "-8s" },
    { x: "55%", y: "92%", color: "rgb(196 164 73 / 0.11)", size: "50vmax", duration: "46s", delay: "-16s" },
  ],
  // On navy: brighter blue and sage glows so the color reads against the dark
  dark: [
    { x: "18%", y: "25%", color: "rgb(91 139 165 / 0.5)", duration: "30s" },
    { x: "82%", y: "70%", color: "rgb(98 158 130 / 0.38)", size: "55vmax", duration: "38s", delay: "-10s" },
    { x: "60%", y: "8%", color: "rgb(150 178 214 / 0.22)", size: "45vmax", duration: "44s", delay: "-20s" },
  ],
}

/**
 * Slowly drifting gradient glows behind a section. The parent needs `relative`
 * (and its content `relative` to sit above the glow).
 */
export function Aurora({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <div className={`aurora ${tone === "light" ? "aurora-light" : ""} ${className}`} aria-hidden="true">
      {GLOWS[tone].map((glow) => (
        <span
          key={glow.x + glow.y}
          style={
            {
              left: glow.x,
              top: glow.y,
              "--glow": glow.color,
              "--size": glow.size,
              "--duration": glow.duration,
              "--delay": glow.delay,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}

/**
 * Layered waves that flow along a section's bottom edge. `fill` should match the
 * background of whatever comes next, so the front wave melts into it; the back
 * layers carry a faint sage-to-blue gradient.
 */
export function Waves({ fill = "#F5F3EE", className = "absolute inset-x-0 bottom-0" }: { fill?: string; className?: string }) {
  // useId output can include characters that aren't safe in a url(#…) reference
  const id = `wave${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`

  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg
        className="block w-full h-12 md:h-20"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id={`${id}-path`}
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
          <linearGradient id={`${id}-tint`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#629E82" />
            <stop offset="55%" stopColor="#5B8BA5" />
            <stop offset="100%" stopColor="#629E82" />
          </linearGradient>
        </defs>
        <g className="waves-flow">
          <use href={`#${id}-path`} x="48" y="0" fill={`url(#${id}-tint)`} fillOpacity={0.35} />
          <use href={`#${id}-path`} x="48" y="3" fill={fill} fillOpacity={0.35} />
          <use href={`#${id}-path`} x="48" y="5" fill={fill} fillOpacity={0.6} />
          <use href={`#${id}-path`} x="48" y="7" fill={fill} />
        </g>
      </svg>
    </div>
  )
}
