import { Link } from "react-router";
import Logo from "./Logo";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
  Globe,
  Shield,
  Award,
} from "lucide-react";

const OFFICES = [
  { city: "Dubai, UAE", region: "MENA Hub", phone: "+971 55 356 7545" },
  { city: "Accra, Ghana", region: "West Africa", phone: "+233 54 447 9798" },
  { city: "Hong Kong", region: "Asia-Pacific", phone: "+852 95 401 093" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      {/* Gold accent line at very top */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)",
          opacity: 0.4,
        }}
      ></div>
      <div
        aria-hidden
        className="absolute top-0 right-0 w-1/3 h-1/2 opacity-[0.03] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 0%, var(--color-accent) 0%, transparent 70%)",
        }}
      ></div>

      {/* ============ MAIN FOOTER GRID ============ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">

        {/* Top row: Brand | Services | Company | Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">

          {/* Col 1 — Brand */}
          <div className="flex flex-col">
            <Link to="/" className="inline-flex items-center mb-5">
              <Logo size={44} variant="lockup" />
            </Link>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              Africa's gateway to precious metals capital. Integrated solutions across the gold value chain — bullion trading, streaming &amp; royalties, and mining advisory.
            </p>
          </div>

          {/* Col 2 — Services */}
          <div className="flex flex-col">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "var(--color-accent)" }}
            >
              Services
            </p>
            <ul className="space-y-3">
              {[
                { label: "Streaming & Royalties", path: "/streaming" },
                { label: "Trading & Execution", path: "/trading" },
                { label: "Mining Advisory & Capital Solutions", path: "/mining" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-sm transition-all inline-flex items-center gap-2 group"
                    style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
                  >
                    <span
                      className="w-0 h-px transition-all duration-300 group-hover:w-3 shrink-0"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div className="flex flex-col">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "var(--color-accent)" }}
            >
              Company
            </p>
            <ul className="space-y-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Leadership", path: "/leadership" },
                { label: "Mission & Values", path: "/about#mission-vision-values" },
                { label: "Contact Us", path: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-sm transition-all inline-flex items-center gap-2 group"
                    style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
                  >
                    <span
                      className="w-0 h-px transition-all duration-300 group-hover:w-3 shrink-0"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="flex flex-col">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "var(--color-accent)" }}
            >
              Contact
            </p>
            {/* Email row */}
            <a
              href="mailto:info@nyininternational.com"
              className="inline-flex items-center gap-2 text-sm mb-5 transition-all"
              style={{ color: "var(--color-text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
            >
              <Mail size={14} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
              info@nyininternational.com
            </a>

            {/* One phone row per office */}
            <div className="space-y-2">
              {OFFICES.map((office, idx) => (
                <a
                  key={idx}
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm transition-all"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
                >
                  <Phone size={13} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                  <span>{office.phone}</span>
                  <span
                    className="text-[10px] tracking-[0.15em] uppercase ml-1"
                    style={{ color: "var(--color-text-muted)", opacity: 0.6 }}
                  >
                    {office.region}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-10"
          style={{ backgroundColor: "var(--color-border)" }}
        />

        {/* Offices row — three equal cards side by side */}
        <div>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-5"
            style={{ color: "var(--color-accent)" }}
          >
            Our Offices
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {OFFICES.map((office, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-bg-alt)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
              >
                <div
                  className="w-8 h-8 flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    backgroundColor: "var(--color-accent-soft)",
                    border: "1px solid var(--color-accent-strong)",
                    borderRadius: "4px",
                  }}
                >
                  <MapPin size={13} style={{ color: "var(--color-accent)" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-medium mb-0.5"
                    style={{ color: "var(--color-text)" }}
                  >
                    {office.city}
                  </p>
                  <p
                    className="text-[10px] tracking-[0.15em] uppercase mb-2"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {office.region}
                  </p>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-1.5 text-xs transition-all"
                    style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
                  >
                    <Phone size={11} style={{ color: "var(--color-accent)" }} />
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ COPYRIGHT BAR ============ */}
      <div
        className="relative"
        style={{
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p
            className="text-xs tracking-wide text-center"
            style={{ color: "var(--color-text-muted)" }}
          >
            © {currentYear} NYIN International FZCO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}