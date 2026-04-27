import { Mail, Phone, MapPin, Send } from "lucide-react";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const offices = [
    {
      city: "Dubai, UAE",
      address: ["DMCC Free Zone", "Jumeirah Lakes Towers", "Dubai, United Arab Emirates"],
      phone: "+971 XXX XXXX",
      email: "dubai@nyininternational.com",
    },
    {
      city: "Accra, Ghana",
      address: ["Airport Residential Area", "Accra, Ghana"],
      phone: "+233 XXX XXXX",
      email: "accra@nyininternational.com",
    },
    {
      city: "Hong Kong",
      address: ["Central District", "Hong Kong SAR"],
      phone: "+852 XXXX XXXX",
      email: "hongkong@nyininternational.com",
    },
  ];

  // Reusable input style
  const inputStyle: React.CSSProperties = {
    backgroundColor: "var(--color-bg)",
    border: "1px solid var(--color-border)",
    borderRadius: "4px",
    color: "var(--color-text)",
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--color-accent)";
    e.currentTarget.style.boxShadow = "0 0 0 1px var(--color-accent-line)";
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--color-border)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
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
          <div
            className="inline-block mb-6 px-4 py-1.5 text-xs tracking-[0.2em] uppercase"
            style={{
              color: "var(--color-accent)",
              border: "1px solid var(--color-accent-strong)",
              borderRadius: "2px",
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(11, 11, 11, 0.4)",
            }}
          >
            Get in Touch
          </div>
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
          ></div>
          <p
            className="text-lg leading-relaxed"
            style={{
              color: "#E5E5E5",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            Get in touch with our team to discuss trading opportunities, financing solutions, or advisory services
          </p>
        </div>
      </HeroVideo>

      {/* Form + Offices */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div
                className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Send a Message
              </div>
              <h2 className="mb-2 text-3xl md:text-4xl font-light" style={{ color: "var(--color-text)" }}>
                Let's Connect
              </h2>
              <div
                className="w-12 h-px mb-8"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm tracking-wide"
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
                    className="w-full px-4 py-3 outline-none transition-all"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm tracking-wide"
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
                    className="w-full px-4 py-3 outline-none transition-all"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block mb-2 text-sm tracking-wide"
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
                    className="w-full px-4 py-3 outline-none transition-all"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm tracking-wide"
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
                    rows={6}
                    className="w-full px-4 py-3 outline-none transition-all resize-none"
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 flex items-center justify-center gap-2 transition-all duration-300 tracking-[0.2em] uppercase text-sm font-medium"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-bg)",
                    borderRadius: "4px",
                    border: "1px solid var(--color-accent)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-accent-hover)";
                    e.currentTarget.style.borderColor = "var(--color-accent-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-accent)";
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                  }}
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            </div>

            {/* Offices */}
            <div>
              <div
                className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Our Locations
              </div>
              <h2 className="mb-2 text-3xl md:text-4xl font-light" style={{ color: "var(--color-text)" }}>
                Global Offices
              </h2>
              <div
                className="w-12 h-px mb-8"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>

              <div className="space-y-5">
                {offices.map((office, idx) => (
                  <div
                    key={idx}
                    className="p-6 transition-all duration-300"
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
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "var(--color-accent-soft)",
                          border: "1px solid var(--color-accent-strong)",
                          borderRadius: "4px",
                        }}
                      >
                        <MapPin style={{ color: "var(--color-accent)" }} size={22} />
                      </div>
                      <div className="flex-1">
                        <h3
                          className="mb-1 text-lg tracking-wide"
                          style={{ color: "var(--color-text)" }}
                        >
                          {office.city}
                        </h3>
                        <div
                          className="w-8 h-px mb-3"
                          style={{ backgroundColor: "var(--color-accent-medium)" }}
                        ></div>
                        <p
                          className="text-sm mb-4 leading-relaxed"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          {office.address.map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < office.address.length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Phone size={14} style={{ color: "var(--color-accent)" }} />
                            <span style={{ color: "var(--color-text-muted)" }}>{office.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail size={14} style={{ color: "var(--color-accent)" }} />
                            <span style={{ color: "var(--color-text-muted)" }}>{office.email}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* General Inquiries */}
              <div
                className="mt-6 p-6 transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-bg-alt)",
                  border: "1px solid var(--color-accent)",
                  borderRadius: "4px",
                  background:
                    "linear-gradient(135deg, var(--color-bg-alt) 0%, rgba(201, 166, 70, 0.05) 100%)",
                }}
              >
                <div
                  className="text-xs tracking-[0.3em] uppercase mb-2"
                  style={{ color: "var(--color-accent)" }}
                >
                  Always Available
                </div>
                <h3
                  className="mb-3 text-lg tracking-wide"
                  style={{ color: "var(--color-text)" }}
                >
                  General Inquiries
                </h3>
                <div
                  className="w-8 h-px mb-4"
                  style={{ backgroundColor: "var(--color-accent-medium)" }}
                ></div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail size={14} style={{ color: "var(--color-accent)" }} />
                    <span style={{ color: "var(--color-text-muted)" }}>info@nyininternational.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} style={{ color: "var(--color-accent)" }} />
                    <span style={{ color: "var(--color-text-muted)" }}>
                      +971 XXX XXXX{" "}
                      <span style={{ color: "var(--color-accent)" }}>(24/7 Trading Desk)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorldMap />
    </div>
  );
}