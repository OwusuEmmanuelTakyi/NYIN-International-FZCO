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
      "Building A2, Unit 101",
      "Silicon Oasis",
      "Dubai, United Arab Emirates",
    ],
    phone: "+971 55 356 7545",
    email: "info@nyinintl.com",
    timezone: "GST (UTC+4)",
    hours: "Sun – Thu · 09:00 – 18:00",
  },
  {
    id: "accra",
    name: "Accra",
    region: "West Africa Operations",
    left: "49.9%",
    top: "46.9%",
    address: ["No. 3 Sergeant Adjetey Street, Nouakchott Road", "East Legon, Accra", "Ghana"],
    phone: "+233 54 447 9798",
    email: "info@nyinintl.com",
    timezone: "GMT (UTC+0)",
    hours: "Mon – Fri · 08:30 – 17:30",
  },
  {
    id: "hongkong",
    name: "Hong Kong",
    region: "Asia-Pacific Gateway",
    left: "81.7%",
    top: "37.6%",
    address: ["21/F City Plaza Three", "14 Taikoo Wan Road, Taikoo", "Hong Kong"],
    phone: "+852 95 401 093",
    email: "info@nyinintl.com",
    timezone: "HKT (UTC+8)",
    hours: "Mon – Fri · 09:00 – 18:00",
  },
];

type Props = {
  embedded?: boolean;
};

export default function WorldMap({ embedded = false }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = OFFICES.find((o) => o.id === activeId);

  const Map = (
    <div className="relative w-full">
      {/* Map container — 2:1 aspect ratio */}
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
            x1="0" y1="250" x2="1000" y2="250"
            stroke="var(--color-accent)"
            strokeOpacity="0.08"
            strokeWidth="0.5"
            strokeDasharray="2 4"
          />

          {/* World map paths */}
          <path
            d={WORLD_PATHS}
            fill="url(#wmLand)"
            stroke="var(--color-accent)"
            strokeOpacity="0.45"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />

          {/* Connection arcs */}
          <g opacity="0.55">
            <path d="M 654 180 Q 575 200 499 234" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="3 4" fill="none" />
            <path d="M 654 180 Q 735 155 817 188" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="3 4" fill="none" />
            <path d="M 499 234 Q 658 320 817 188" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="3 4" fill="none" opacity="0.5" />
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

              {/*
                City label — only shown on md+ screens (≥768px).
                On mobile screens the pins are too close together and labels overlap,
                so we hide them and show a tap-to-see legend below the map instead.
              */}
              <div
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none hidden md:block"
                style={{ top: "calc(100% + 10px)" }}
              >
                <div
                  className="text-[11px] tracking-[0.12em] uppercase font-medium whitespace-nowrap transition-colors"
                  style={{
                    color: isActive ? "var(--color-accent-hover)" : "var(--color-accent)",
                    textShadow: "0 2px 12px rgba(0,0,0,0.8)",
                  }}
                >
                  {office.name}
                </div>
              </div>
            </button>
          );
        })}

        {/* Detail panel overlay — sits inside the map */}
        {active && (
          <div
            className="absolute z-30"
            style={{
              top: "12px",
              right: "12px",
              maxWidth: "calc(100% - 24px)",
              width: "300px",
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
              {/* Gold accent line */}
              <div
                className="h-px"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)",
                }}
              />

              <div className="p-4 sm:p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div
                      className="text-[10px] tracking-[0.3em] uppercase mb-1"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {active.region}
                    </div>
                    <h3
                      className="text-lg sm:text-xl font-light leading-tight"
                      style={{ color: "var(--color-text)" }}
                    >
                      {active.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveId(null)}
                    className="p-1 transition-colors shrink-0 ml-2"
                    style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
                    aria-label="Close details"
                  >
                    <X size={14} />
                  </button>
                </div>

                <div className="w-10 h-px mb-3" style={{ backgroundColor: "var(--color-accent-medium)" }} />

                {/* Address */}
                <div className="flex gap-3 mb-3">
                  <div
                    className="shrink-0 w-7 h-7 flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      border: "1px solid var(--color-accent-strong)",
                      borderRadius: "4px",
                    }}
                  >
                    <MapPin size={11} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {active.address.map((line, i) => <div key={i}>{line}</div>)}
                  </div>
                </div>

                {/* Phone */}
                <a
                  href={`tel:${active.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 mb-3 text-xs transition-colors"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
                >
                  <div
                    className="shrink-0 w-7 h-7 flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      border: "1px solid var(--color-accent-strong)",
                      borderRadius: "4px",
                    }}
                  >
                    <Phone size={11} style={{ color: "var(--color-accent)" }} />
                  </div>
                  {active.phone}
                </a>

                {/* Email */}
                <a
                  href={`mailto:${active.email}`}
                  className="flex items-center gap-3 mb-3 text-xs transition-colors"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
                >
                  <div
                    className="shrink-0 w-7 h-7 flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      border: "1px solid var(--color-accent-strong)",
                      borderRadius: "4px",
                    }}
                  >
                    <Mail size={11} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <span className="truncate">{active.email}</span>
                </a>

                {/* Hours */}
                <div
                  className="flex items-start gap-3 pt-3"
                  style={{ borderTop: "1px solid var(--color-border)" }}
                >
                  <div
                    className="shrink-0 w-7 h-7 flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      border: "1px solid var(--color-accent-strong)",
                      borderRadius: "4px",
                    }}
                  >
                    <Clock size={11} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <div className="text-xs leading-relaxed">
                    <div style={{ color: "var(--color-text)" }}>{active.hours}</div>
                    <div className="mt-0.5" style={{ color: "var(--color-text-muted)" }}>{active.timezone}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/*
        Mobile legend — visible only on small screens (< md).
        Shows all three offices as tappable chips so users know what the pins are
        without overlapping labels on the map.
      */}
      <div className="mt-4 md:hidden">
        <div className="flex flex-wrap justify-center gap-2">
          {OFFICES.map((office) => {
            const isActive = activeId === office.id;
            return (
              <button
                key={office.id}
                type="button"
                onClick={() => setActiveId(isActive ? null : office.id)}
                className="flex items-center gap-2 px-3 py-2 text-xs tracking-[0.12em] uppercase transition-all duration-200"
                style={{
                  backgroundColor: isActive ? "var(--color-accent-soft)" : "var(--color-bg-alt)",
                  border: `1px solid ${isActive ? "var(--color-accent)" : "var(--color-border)"}`,
                  borderRadius: "4px",
                  color: isActive ? "var(--color-accent)" : "var(--color-text-muted)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                {office.name}
              </button>
            );
          })}
        </div>
        {!active && (
          <p
            className="text-center mt-3 text-[11px] tracking-[0.15em]"
            style={{ color: "var(--color-text-muted)" }}
          >
            Tap a location to view office details
          </p>
        )}
      </div>

      {/* Desktop helper text */}
      {!active && (
        <div
          className="hidden md:block text-center mt-4 text-xs tracking-[0.2em]"
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

  if (embedded) return Map;

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
        </div>
        {Map}
      </div>
    </section>
  );
}