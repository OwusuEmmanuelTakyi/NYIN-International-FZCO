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

// Color palette
// Primary Black: var(--color-bg)
// Charcoal: var(--color-bg-alt)
// Dark Grey: var(--color-border)
// Gold Accent: var(--color-accent)
// Light Gold Hover: var(--color-accent-hover)
// White: var(--color-text)
// Muted Text: var(--color-text-muted)

const SOCIALS = [
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Twitter, label: "Twitter / X", href: "#" },
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center mb-6">
              <Logo size={44} variant="lockup" />
            </Link>

            <p
              className="text-sm leading-relaxed mb-6 max-w-md"
              style={{ color: "var(--color-text-muted)" }}
            >
              Africa's gateway to gold capital. We provide integrated solutions across the gold value chain — bullion trading, streaming and royalties, and strategic mining advisory services.
            </p>

            {/* Trust badges */}
            
          </div>

          {/* Services links */}
          <div className="lg:col-span-2">
            <div
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "var(--color-accent)" }}
            >
              Services
            </div>
            <ul className="space-y-3">
              {[
                { label: "Streaming & Royalties", path: "/streaming" },
                { label: "Trading & Execution", path: "/trading" },
                { label: "Mining Advisory & Capital Solutions", path: "/mining" },
                
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-sm transition-all inline-flex items-center gap-1 group"
                    style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-text-muted)")
                    }
                  >
                    <span
                      className="w-0 h-px transition-all duration-300 group-hover:w-3"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    ></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2">
            <div
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "var(--color-accent)" }}
            >
              Company
            </div>
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
                    className="text-sm transition-all inline-flex items-center gap-1 group"
                    style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-text-muted)")
                    }
                  >
                    <span
                      className="w-0 h-px transition-all duration-300 group-hover:w-3"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    ></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices & Contact */}
          <div className="lg:col-span-4">
            <div
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "var(--color-accent)" }}
            >
              Get in Touch
            </div>

            {/* Office locations */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3 mb-6">
              {[
                { city: "Dubai, UAE", region: "MENA Hub" },
                { city: "Accra, Ghana", region: "West Africa" },
                { city: "Hong Kong", region: "Asia-Pacific" },
              ].map((office, idx) => (
                <div
                  key={idx}
                  className="p-3 transition-all duration-300"
                  style={{
                    backgroundColor: "var(--color-bg-alt)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "4px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={12} style={{ color: "var(--color-accent)" }} />
                    <div
                      className="text-xs font-medium"
                      style={{ color: "var(--color-text)" }}
                    >
                      {office.city}
                    </div>
                  </div>
                  <div
                    className="text-[10px] tracking-[0.15em] uppercase pl-5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {office.region}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="space-y-3">
              <a
                href="mailto:info@nyininternational.com"
                className="flex items-center gap-3 text-sm transition-all"
                style={{ color: "var(--color-text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-text-muted)")
                }
              >
                <div
                  className="w-8 h-8 flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: "var(--color-accent-soft)",
                    border: "1px solid var(--color-accent-strong)",
                    borderRadius: "4px",
                  }}
                >
                  <Mail size={12} style={{ color: "var(--color-accent)" }} />
                </div>
                info@nyininternational.com
              </a>
              <a
                href="tel:+971000000000"
                className="flex items-center gap-3 text-sm transition-all"
                style={{ color: "var(--color-text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-text-muted)")
                }
              >
                <div
                  className="w-8 h-8 flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: "var(--color-accent-soft)",
                    border: "1px solid var(--color-accent-strong)",
                    borderRadius: "4px",
                  }}
                >
                  <Phone size={12} style={{ color: "var(--color-accent)" }} />
                </div>
                +971 XXX XXXX
              </a>
            </div>

            {/* Get in touch CTA 
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-all"
              style={{ color: "var(--color-accent)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
            >
              Schedule a Consultation
              <ArrowRight size={12} />
            </Link>  
            */}
          </div>
        </div>
      </div>

      {/* ============ CONNECT WITH US — SOCIAL FEATURE BAND ============ 
      <div
        className="relative"
        style={{
          backgroundColor: "var(--color-bg-alt)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 60%)",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center text-center">
            <div
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              Connect With Us
            </div>
            <h3
              className="text-2xl md:text-3xl font-light leading-tight mb-3"
              style={{ color: "var(--color-text)" }}
            >
              Follow our journey across{" "}
              <span style={{ color: "var(--color-accent)" }}>social channels</span>
            </h3>
            <div
              className="w-12 h-px mb-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>

            {/* Larger, more prominent social icons *
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {SOCIALS.map(({ Icon, label, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="group relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-muted)",
                    borderRadius: "4px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-accent)";
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.color = "var(--color-text-on-accent)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px var(--color-accent-strong)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-bg)";
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.color = "var(--color-text-muted)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Icon size={20} />
                  <span
                    className="absolute -bottom-7 text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>  
      */}

      {/* ============ COPYRIGHT BAR ============ */}
      <div
        className="relative"
        style={{ backgroundColor: "var(--color-bg)" }}
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