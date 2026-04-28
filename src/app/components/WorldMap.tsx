import { useState } from "react";
import { MapPin, Mail, Phone, X, Clock } from "lucide-react";
import { WORLD_PATHS } from "../components/worldMapData";

// Color palette
// Primary Black: var(--color-bg)
// Charcoal: var(--color-bg-alt)
// Dark Grey: var(--color-border)
// Gold Accent: var(--color-accent)
// Light Gold Hover: var(--color-accent-hover)
// White: var(--color-text)
// Muted Text: var(--color-text-muted)

type OfficeDetails = {
  id: string;
  name: string;
  region: string;
  /** SVG-coordinate position as percentage strings (matches viewBox 1000x500). */
  left: string;
  top: string;
  address: string[];
  phone: string;
  email: string;
  timezone: string;
  hours: string;
};

const OFFICES: OfficeDetails[] = [
  {
    id: "dubai",
    name: "Dubai",
    region: "MENA Hub & Headquarters",
    left: "65.4%",
    top: "36.0%",
    address: [
      "DMCC Free Zone",
      "Jumeirah Lakes Towers",
      "Dubai, United Arab Emirates",
    ],
    phone: "+971 55 356 7545 ",
    email: "dubai@nyininternational.com",
    timezone: "GST (UTC+4)",
    hours: "Sun – Thu · 09:00 – 18:00",
  },
  {
    id: "accra",
    name: "Accra",
    region: "West Africa Operations",
    left: "49.9%",
    top: "46.9%",
    address: ["Airport Residential Area", "Accra, Ghana"],
    phone: " +233 54 447 9798 ",
    email: "accra@nyininternational.com",
    timezone: "GMT (UTC+0)",
    hours: "Mon – Fri · 08:30 – 17:30",
  },
  {
    id: "hongkong",
    name: "Hong Kong",
    region: "Asia-Pacific Gateway",
    left: "81.7%",
    top: "37.6%",
    address: ["Central District", "Hong Kong SAR"],
    phone: "+852 95 401 093",
    email: "hongkong@nyininternational.com",
    timezone: "HKT (UTC+8)",
    hours: "Mon – Fri · 09:00 – 18:00",
  },
];

type Props = {
  /** When true, removes the surrounding section padding/headline. Useful when embedding inside another section. */
  embedded?: boolean;
};

/**
 * Big interactive world map.
 * - Clicking a pulsing gold pin reveals that office's full details in an overlay panel.
 * - Click the X (or pin again) to close.
 * - Always-visible city labels under each pin.
 */
export default function WorldMap({ embedded = false }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = OFFICES.find((o) => o.id === activeId);

  const Map = (
    <div className="relative w-full">
      {/* Map container — 2:1 aspect ratio (1000 x 500 viewBox) */}
      <div className="relative w-full" style={{ paddingBottom: "50%" }}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="wmOcean" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-bg-alt)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--color-bg)" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="wmLand" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.10" />
            </linearGradient>
          </defs>

          {/* Ocean */}
          <rect x="0" y="0" width="1000" height="500" fill="url(#wmOcean)" />

          {/* Subtle lat/lng grid */}
          <g opacity="0.04" stroke="var(--color-accent)" strokeWidth="0.5">
            {[...Array(11)].map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} />
            ))}
            {[...Array(13)].map((_, i) => (
              <line key={`v-${i}`} x1={i * 83.33} y1="0" x2={i * 83.33} y2="500" />
            ))}
          </g>

          {/* Equator */}
          <line
            x1="0"
            y1="250"
            x2="1000"
            y2="250"
            stroke="var(--color-accent)"
            strokeOpacity="0.08"
            strokeWidth="0.5"
            strokeDasharray="2 4"
          />

          {/* Real world map (Natural Earth, 177 countries) */}
          <path
            d={WORLD_PATHS}
            fill="url(#wmLand)"
            stroke="var(--color-accent)"
            strokeOpacity="0.45"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />

          {/* Connection arcs between offices */}
          <g opacity="0.55">
            {/* Dubai → Accra */}
            <path
              d="M 654 180 Q 575 200 499 234"
              stroke="var(--color-accent)"
              strokeWidth="1"
              strokeDasharray="3 4"
              fill="none"
            />
            {/* Dubai → Hong Kong */}
            <path
              d="M 654 180 Q 735 155 817 188"
              stroke="var(--color-accent)"
              strokeWidth="1"
              strokeDasharray="3 4"
              fill="none"
            />
            {/* Accra → Hong Kong */}
            <path
              d="M 499 234 Q 658 320 817 188"
              stroke="var(--color-accent)"
              strokeWidth="1"
              strokeDasharray="3 4"
              fill="none"
              opacity="0.5"
            />
          </g>
        </svg>

        {/* Clickable pins */}
        {OFFICES.map((office, index) => {
          const isActive = activeId === office.id;
          return (
            <button
              key={office.id}
              type="button"
              onClick={() => setActiveId(isActive ? null : office.id)}
              className="absolute z-20"
              style={{
                left: office.left,
                top: office.top,
                transform: "translate(-50%, -50%)",
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
              aria-label={`View ${office.name} office details`}
              aria-pressed={isActive}
            >
              <div className="relative flex items-center justify-center">
                {/* Outer pulsing ring */}
                <div
                  className="absolute w-10 h-10 rounded-full"
                  style={{
                    backgroundColor: "var(--color-accent-strong)",
                    animation: `wmGoldPing 2.4s cubic-bezier(0, 0, 0.2, 1) infinite ${index * 0.4}s`,
                  }}
                />
                {/* Middle ring */}
                <div
                  className="absolute w-6 h-6 rounded-full"
                  style={{
                    backgroundColor: "var(--color-accent-medium)",
                    animation: `wmGoldPulse 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite ${index * 0.4}s`,
                  }}
                />
                {/* Center dot */}
                <div
                  className="relative rounded-full transition-all duration-300"
                  style={{
                    width: isActive ? "18px" : "14px",
                    height: isActive ? "18px" : "14px",
                    backgroundColor: "var(--color-accent)",
                    boxShadow: isActive
                      ? "0 0 24px rgba(201, 166, 70, 1)"
                      : "0 0 12px rgba(201, 166, 70, 0.9)",
                    border: "2px solid #FFFFFF",
                  }}
                />
              </div>

              {/* Always-visible city label */}
              <div
                className="absolute left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap text-center pointer-events-none"
                style={{ top: "100%" }}
              >
                <div
                  className="text-xs md:text-sm tracking-[0.15em] uppercase font-medium transition-colors"
                  style={{
                    color: isActive
                      ? "var(--color-accent-hover)"
                      : "var(--color-accent)",
                    textShadow: "0 2px 12px rgba(0,0,0,0.6)",
                  }}
                >
                  {office.name}
                </div>
              </div>
            </button>
          );
        })}

        {/* Active office detail panel — overlays on top of the map */}
        {active && (
          <div
            className="absolute z-30"
            style={{
              top: "16px",
              right: "16px",
              maxWidth: "calc(100% - 32px)",
              width: "320px",
              animation: "wmFadeIn 0.25s ease-out",
            }}
          >
            <div
              className="relative"
              style={{
                backgroundColor: "var(--color-bg-alt)",
                border: "1px solid var(--color-accent)",
                borderRadius: "4px",
                boxShadow: "0 16px 48px rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Top gold accent line */}
              <div
                className="h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)",
                }}
              />

              <div className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div
                      className="text-[10px] tracking-[0.3em] uppercase mb-1"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {active.region}
                    </div>
                    <h3
                      className="text-xl font-light leading-tight"
                      style={{ color: "var(--color-text)" }}
                    >
                      {active.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveId(null)}
                    className="p-1 transition-colors"
                    style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-text-muted)")
                    }
                    aria-label="Close details"
                  >
                    <X size={14} />
                  </button>
                </div>

                <div
                  className="w-10 h-px mb-4"
                  style={{ backgroundColor: "var(--color-accent-medium)" }}
                />

                {/* Address */}
                <div className="flex gap-3 mb-3">
                  <div
                    className="shrink-0 w-8 h-8 flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      border: "1px solid var(--color-accent-strong)",
                      borderRadius: "4px",
                    }}
                  >
                    <MapPin size={12} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <div
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {active.address.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>

                {/* Phone */}
                <a
                  href={`tel:${active.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 mb-3 text-xs transition-colors"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-text-muted)")
                  }
                >
                  <div
                    className="shrink-0 w-8 h-8 flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      border: "1px solid var(--color-accent-strong)",
                      borderRadius: "4px",
                    }}
                  >
                    <Phone size={12} style={{ color: "var(--color-accent)" }} />
                  </div>
                  {active.phone}
                </a>

                {/* Email */}
                <a
                  href={`mailto:${active.email}`}
                  className="flex items-center gap-3 mb-4 text-xs transition-colors"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-text-muted)")
                  }
                >
                  <div
                    className="shrink-0 w-8 h-8 flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      border: "1px solid var(--color-accent-strong)",
                      borderRadius: "4px",
                    }}
                  >
                    <Mail size={12} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <span className="truncate">{active.email}</span>
                </a>

                {/* Hours */}
                <div
                  className="flex items-start gap-3 pt-3"
                  style={{ borderTop: "1px solid var(--color-border)" }}
                >
                  <div
                    className="shrink-0 w-8 h-8 flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      border: "1px solid var(--color-accent-strong)",
                      borderRadius: "4px",
                    }}
                  >
                    <Clock size={12} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <div className="text-xs leading-relaxed">
                    <div style={{ color: "var(--color-text)" }}>
                      {active.hours}
                    </div>
                    <div
                      className="mt-0.5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {active.timezone}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Helper text below map — disappears when a pin is active */}
      {!active && (
        <div
          className="text-center mt-3 text-xs tracking-[0.2em] "
          style={{ color: "var(--color-text-muted)" }}
        >
          Click a pin to view office details
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes wmGoldPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes wmGoldPing {
          0% { opacity: 0.6; transform: scale(0.6); }
          75%, 100% { opacity: 0; transform: scale(2.2); }
        }
        @keyframes wmFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );

  // When embedded, we just return the map without the wrapping section/header
  if (embedded) return Map;

  // Standalone usage (e.g. on Home page) shows a section header above the map
  return (
    <section className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div
            className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            Where We Operate
          </div>
          <h2
            className="mb-4 text-3xl md:text-4xl lg:text-5xl font-light leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            Cross-time-zone support.{" "}
            <span style={{ color: "var(--color-accent)" }}>
              Whenever, wherever you need us.
            </span>
          </h2>
          <div
            className="w-16 h-px mx-auto mb-6"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
          <p
            className="leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            
          </p>
        </div>
        {Map}
      </div>
    </section>
  );
}