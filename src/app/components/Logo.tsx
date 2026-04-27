// Color palette
// Gold Accent: var(--color-accent)
// Light Gold Hover: var(--color-accent-hover)

type LogoProps = {
  /** Total size of the logo mark in pixels (width + height). */
  size?: number;
  /** Variant: "mark" = icon only, "lockup" = icon + wordmark. */
  variant?: "mark" | "lockup";
  /** Optional className passthrough for spacing tweaks. */
  className?: string;
  /**
   * Optional override for the gold color.
   * Defaults to `var(--color-accent)` so it adapts to dark/light theme.
   */
  color?: string;
  /** Color of the wordmark text (when variant is "lockup"). Defaults to `var(--color-text)`. */
  textColor?: string;
};

/**
 * NYIN International — "Ingot & Summit" logo mark.
 *
 * Symbolism:
 *   - Hexagonal frame: precision, refined gold, structural integrity
 *   - Three mountain peaks: mining, ascent, the three core service lines
 *   - Bullion bar at base: foundational gold trading
 *   - Sun above peaks: rising prosperity, "follow-the-sun" global coverage
 */
export default function Logo({
  size = 44,
  variant = "lockup",
  className = "",
  color = "var(--color-accent)",
  textColor = "var(--color-text)",
}: LogoProps) {
  // The mark itself (always square, scales by `size`)
  const Mark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="NYIN International logo"
      style={{ flexShrink: 0, overflow: "visible" }}
    >
      <title>NYIN International</title>

      {/* Animated outer rotating ring — adds life to the logo */}
      <g
        style={{
          transformOrigin: "50% 50%",
          animation: "nyinLogoRotate 18s linear infinite",
        }}
      >
        {/* Dashed orbit ring */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke={color}
          strokeWidth="0.6"
          strokeDasharray="2 4"
          opacity="0.55"
        />
        {/* Four gold accent dots placed at compass points */}
        <circle cx="50" cy="2" r="1.6" fill={color} />
        <circle cx="98" cy="50" r="1.2" fill={color} opacity="0.5" />
        <circle cx="50" cy="98" r="1.2" fill={color} opacity="0.5" />
        <circle cx="2" cy="50" r="1.2" fill={color} opacity="0.5" />
      </g>

      {/* Hexagonal frame */}
      <polygon
        points="50,8 86,29 86,71 50,92 14,71 14,29"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.85"
      />
      {/* Inner hex (subtle inset) */}
      <polygon
        points="50,16 79,32 79,68 50,84 21,68 21,32"
        fill="none"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.35"
      />

      {/* Sun above peaks */}
      <circle cx="50" cy="34" r="4.2" fill={color} />
      <circle
        cx="50"
        cy="34"
        r="7"
        fill="none"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.5"
      />

      {/* Mountain peaks (back, center, right) */}
      {/* Back peak (smaller, left) */}
      <polygon points="24,66 36,44 48,66" fill={color} opacity="0.75" />
      {/* Front center peak (largest) */}
      <polygon points="32,66 52,34 72,66" fill={color} />
      {/* Right peak */}
      <polygon points="58,66 68,52 78,66" fill={color} opacity="0.85" />

      {/* Bullion bar at base */}
      <path
        d="M 24 68 L 76 68 L 72 78 L 28 78 Z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      />
      {/* Subtle highlight across top of bar */}
      <line
        x1="26"
        y1="69.5"
        x2="74"
        y2="69.5"
        stroke="var(--color-accent-hover)"
        strokeWidth="0.8"
        opacity="0.6"
      />

      {/* Animation keyframes — scoped via style tag so they live with the SVG */}
      <style>{`
        @keyframes nyinLogoRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </svg>
  );

  // Mark only — for tight spaces
  if (variant === "mark") {
    return <span className={className}>{Mark}</span>;
  }

  // Full lockup — mark + wordmark
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {Mark}
      <div className="flex flex-col leading-tight">
        <span
          className="text-base font-medium tracking-wide"
          style={{ color: textColor }}
        >
          NYIN International
        </span>
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "var(--color-accent)" }}
        >
          FZCO
        </span>
      </div>
    </div>
  );
}