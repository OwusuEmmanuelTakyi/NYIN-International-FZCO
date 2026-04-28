import { Mail, Phone, Send, Clock } from "lucide-react";
import { useState } from "react";
import WorldMap from "../components/WorldMap";
import HeroVideo from "../components/HeroVideo";

// Color palette
// Primary Black: var(--color-bg)
// Charcoal: var(--color-bg-alt)
// Dark Grey: var(--color-border)
// Gold Accent: var(--color-accent)
// Light Gold Hover: var(--color-accent-hover)
// White: var(--color-text)
// Muted Text: var(--color-text-muted)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will be in touch shortly.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: "var(--color-bg)",
    border: "1px solid var(--color-border)",
    borderRadius: "4px",
    color: "var(--color-text)",
  };

  const handleInputFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget.style.borderColor = "var(--color-accent)";
    e.currentTarget.style.boxShadow = "0 0 0 1px var(--color-accent-line)";
  };

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget.style.borderColor = "var(--color-border)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      {/* ============ HERO with VIDEO ============ */}
      <HeroVideo
        sources={[
          "https://cdn.pixabay.com/video/2023/10/30/187938-879478968_large.mp4",
          "https://cdn.pixabay.com/video/2024/02/18/200679-915334534_large.mp4",
          "https://cdn.pixabay.com/video/2021/06/17/78480-565157086_large.mp4",
        ]}
        poster="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80"
        minHeight="50vh"
      >
        <div className="max-w-3xl mx-auto text-center">
          
          <h1
            className="mb-6 text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
            style={{
              color: "#FFFFFF",
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            Contact <span style={{ color: "var(--color-accent)" }}>Us</span>
          </h1>
          <div
            className="w-16 h-px mx-auto mb-6"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
          <p
            className="text-lg leading-relaxed"
            style={{
              color: "#E5E5E5",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            Trading opportunities, financing solutions, advisory services — our
            team is ready when you are.
          </p>
        </div>
      </HeroVideo>

      {/* ============ COMPACT FORM ============ */}
      <section className="py-20" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div
              className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Send a Message
            </div>
            <h2
              className="mb-3 text-2xl md:text-3xl font-light"
              style={{ color: "var(--color-text)" }}
            >
              Let's Connect
            </h2>
            <div
              className="w-12 h-px mx-auto mb-4"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Fill out the form below and our team will be in touch within 24
              hours.
            </p>
          </div>

          <div
            className="p-6 md:p-8"
            style={{
              backgroundColor: "var(--color-bg-alt)",
              border: "1px solid var(--color-border)",
              borderRadius: "4px",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email side by side on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xs tracking-wide uppercase"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Name <span style={{ color: "var(--color-accent)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    required
                    className="w-full px-3 py-2.5 outline-none transition-all text-sm"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-xs tracking-wide uppercase"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Email <span style={{ color: "var(--color-accent)" }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    required
                    className="w-full px-3 py-2.5 outline-none transition-all text-sm"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-xs tracking-wide uppercase"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className="w-full px-3 py-2.5 outline-none transition-all text-sm"
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-xs tracking-wide uppercase"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Message <span style={{ color: "var(--color-accent)" }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  required
                  rows={4}
                  className="w-full px-3 py-2.5 outline-none transition-all resize-none text-sm"
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 flex items-center justify-center gap-2 transition-all duration-300 tracking-[0.2em] uppercase text-xs font-medium"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-text-on-accent)",
                  borderRadius: "4px",
                  border: "1px solid var(--color-accent)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-accent-hover)";
                  e.currentTarget.style.borderColor =
                    "var(--color-accent-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-accent)";
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                }}
              >
                Send Message
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ============ BIG INTERACTIVE WORLD MAP ============ */}
      <section
        className="py-20"
        style={{
          backgroundColor: "var(--color-bg-alt)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            
            <h2
              className="mb-4 text-3xl md:text-4xl lg:text-5xl font-light leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              Our Global {" "}
              <span style={{ color: "var(--color-accent)" }}>
                Offices.
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
              Headquartered in Dubai, with strategic hubs in Accra and Hong
              Kong. Click any pin on the map to view that office's full contact
              details.
            </p>
          </div>

          {/* The big interactive map (embedded — no extra section header from the map itself) */}
          <WorldMap embedded />
        </div>
      </section>

      {/* ============ GENERAL INQUIRIES (under the map) ============ */}
      <section className="py-20" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div
              className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
            </div>
            <h2
              className="mb-3 text-2xl md:text-3xl font-light"
              style={{ color: "var(--color-text)" }}
            >
              General{" "}
              <span style={{ color: "var(--color-accent)" }}>Inquiries</span>
            </h2>
            <div
              className="w-12 h-px mx-auto mb-4"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              For general questions or our 24/7 trading desk
            </p>
          </div>

          <div
            className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{
              backgroundColor: "var(--color-bg-alt)",
              border: "1px solid var(--color-accent)",
              borderRadius: "4px",
              background:
                "linear-gradient(135deg, var(--color-bg-alt) 0%, var(--color-accent-softer) 100%)",
            }}
          >
            {/* Email */}
            <a
              href="mailto:info@nyininternational.com"
              className="flex flex-col items-center text-center transition-all"
              style={{ color: "var(--color-text)" }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-3"
                style={{
                  backgroundColor: "var(--color-accent-soft)",
                  border: "1px solid var(--color-accent-strong)",
                  borderRadius: "4px",
                }}
              >
                <Mail size={18} style={{ color: "var(--color-accent)" }} />
              </div>
              <div
                className="text-[10px] tracking-[0.3em] uppercase mb-1"
                style={{ color: "var(--color-accent)" }}
              >
                Email
              </div>
              <div className="text-sm" style={{ color: "var(--color-text)" }}>
                info@nyininternational.com
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+971000000000"
              className="flex flex-col items-center text-center transition-all"
              style={{ color: "var(--color-text)" }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-3"
                style={{
                  backgroundColor: "var(--color-accent-soft)",
                  border: "1px solid var(--color-accent-strong)",
                  borderRadius: "4px",
                }}
              >
                <Phone size={18} style={{ color: "var(--color-accent)" }} />
              </div>
              <div
                className="text-[10px] tracking-[0.3em] uppercase mb-1"
                style={{ color: "var(--color-accent)" }}
              >
                Phone
              </div>
              <div className="text-sm" style={{ color: "var(--color-text)" }}>
                +971 XXX XXXX
              </div>
            </a>

            {/* 24/7 Trading desk */}
            <div className="flex flex-col items-center text-center">
              <div
                className="w-12 h-12 flex items-center justify-center mb-3"
                style={{
                  backgroundColor: "var(--color-accent-soft)",
                  border: "1px solid var(--color-accent-strong)",
                  borderRadius: "4px",
                }}
              >
                <Clock size={18} style={{ color: "var(--color-accent)" }} />
              </div>
              <div
                className="text-[10px] tracking-[0.3em] uppercase mb-1"
                style={{ color: "var(--color-accent)" }}
              >
                Trading Desk
              </div>
              <div className="text-sm" style={{ color: "var(--color-text)" }}>
                24 / 7 Coverage
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}