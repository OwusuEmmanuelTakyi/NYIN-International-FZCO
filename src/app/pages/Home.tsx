import { Link } from "react-router";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Landmark,
  Globe,
  Leaf,
  MapPin,
  Award,
  Users,
  Building2,
  Coins,
  Truck,
} from "lucide-react";

// Color palette
// Primary Black: var(--color-bg)
// Charcoal: var(--color-bg-alt)
// Dark Grey: var(--color-border)
// Gold Accent: var(--color-accent)
// Light Gold Hover: var(--color-accent-hover)
// White: var(--color-text)
// Muted Text: var(--color-text-muted)

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
      {/* ============ HERO WITH VIDEO BACKGROUND ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video background — multiple sources for reliability.
            Browser will use the first that loads. Replace with your own when ready. */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1920&q=80"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.55) contrast(1.1) saturate(1.1)" }}
          >
            {/* Primary: gold bullion bars cinematic */}
            <source
              src="https://cdn.pixabay.com/video/2024/02/18/200679-915334534_large.mp4"
              type="video/mp4"
            />
            {/* Fallback 1: gold ingots / finance */}
            <source
              src="https://cdn.pixabay.com/video/2023/06/12/166697-836429291_large.mp4"
              type="video/mp4"
            />
            {/* Fallback 2: original gold-themed video */}
            <source
              src="https://cdn.pixabay.com/video/2021/06/17/78480-565157086_large.mp4"
              type="video/mp4"
            />
          </video>

          {/* Multi-layer overlay for premium feel */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(11,11,11,0.7) 0%, rgba(11,11,11,0.5) 50%, rgba(11,11,11,0.95) 100%)",
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 0%, rgba(11,11,11,0.4) 70%, rgba(11,11,11,0.95) 100%)",
            }}
          ></div>
          {/* Subtle gold glow accent */}
          <div
            className="absolute top-1/4 right-0 w-1/2 h-1/2 opacity-[0.06] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, var(--color-accent) 0%, transparent 60%)",
            }}
          ></div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-4xl">
            <div
              className="inline-block mb-8 px-4 py-1.5 text-xs tracking-[0.3em] uppercase"
              style={{
                color: "var(--color-accent)",
                border: "1px solid var(--color-accent-medium)",
                borderRadius: "2px",
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(11, 11, 11, 0.4)",
              }}
            >
              NYIN International FZCO
            </div>

            <h1
              className="mb-8 text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05]"
              style={{
                color: "#FFFFFF",
                textShadow: "0 4px 30px rgba(0,0,0,0.5)",
              }}
            >
              Africa's Gateway to{" "}
              <span style={{ color: "var(--color-accent)" }}>Mining Capital</span> & Precious Metals Trading
            </h1>

            <div
              className="w-20 h-px mb-8"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>

            <p
              className="text-lg md:text-xl mb-12 max-w-2xl leading-relaxed"
              style={{
                color: "#FFFFFF",
                textShadow: "0 2px 20px rgba(0,0,0,0.4)",
              }}
            >
              An integrated platform for bullion trading, streaming and royalties, and mining advisory services — connecting African production to global markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 transition-all duration-300 tracking-[0.2em] uppercase text-sm font-medium"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-text-on-accent)",
                  border: "1px solid var(--color-accent)",
                  borderRadius: "4px",
                  boxShadow: "0 8px 30px var(--color-accent-strong)",
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
                Explore Services
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 transition-all duration-300 tracking-[0.2em] uppercase text-sm font-medium"
                style={{
                  backgroundColor: "rgba(11, 11, 11, 0.4)",
                  color: "var(--color-accent)",
                  border: "1px solid var(--color-accent)",
                  borderRadius: "4px",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-accent)";
                  e.currentTarget.style.color = "var(--color-text-on-accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(11, 11, 11, 0.4)";
                  e.currentTarget.style.color = "var(--color-accent)";
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          style={{ color: "#B5B5B5" }}
        >
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <div
            className="w-px h-12"
            style={{
              background:
                "linear-gradient(180deg, var(--color-accent) 0%, transparent 100%)",
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          ></div>
        </div>

        <style>{`
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.3; transform: translateY(0); }
            50% { opacity: 1; transform: translateY(4px); }
          }
        `}</style>
      </section>

      {/* ============ INTRO STATEMENT ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div
                className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Who We Are
              </div>
              <h2
                className="mb-6 text-3xl md:text-4xl lg:text-5xl font-light leading-tight"
                style={{ color: "var(--color-text)" }}
              >
                At the heart of the global{" "}
                <span style={{ color: "var(--color-accent)" }}>gold industry</span>.
              </h2>
              <div
                className="w-16 h-px mb-6"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "var(--color-text)" }}>
                NYIN International FZCO is headquartered in Dubai, with strategic hubs in Ghana and Hong Kong, giving us direct access to the world's most vital precious metal markets.
              </p>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "var(--color-text)" }}>
                We oversee every phase of the precious metal value chain — from mine financing via streaming and royalties to bullion trading,  as well as strategic advisory for mine owners and capital-ready investors.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-xs tracking-[0.2em] uppercase transition-all"
                style={{ color: "var(--color-accent)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
              >
                Learn More About Us
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CORE BUSINESS LINES ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Our Services
            </div>
            <h2
              className="mb-4 text-3xl md:text-4xl font-light"
              style={{ color: "var(--color-text)" }}
            >
              Three Core Business Lines
            </h2>
            <div
              className="w-16 h-px mx-auto mb-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>
            <p className="max-w-2xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
              Comprehensive solutions across the entire gold value chain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                icon: TrendingUp,
                title: "Trading & Execution",
                desc: "Production off-take, bullion trading, hedging strategies, and end-to-end logistics coordination across African and global markets.",
                href: "/trading",
              },
              {
                num: "02",
                icon: Shield,
                title: "Streaming & Royalties",
                desc: "Non-dilutive financing solutions backed by physical metal production, empowering miners while delivering asset-backed returns.",
                href: "/streaming",
              },
              {
                num: "03",
                icon: Landmark,
                title: "Mining Advisory",
                desc: "Strategic capital solutions and transaction advisory for concession holders, mine owners, and capital-ready investors.",
                href: "/mining",
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link
                  key={idx}
                  to={service.href}
                  className="group relative p-8 transition-all duration-300 block"
                  style={{
                    backgroundColor: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "4px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.transform = "translateY(-6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="absolute top-6 right-6 text-4xl font-light leading-none opacity-25"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {service.num}
                  </div>
                  <div
                    className="w-14 h-14 flex items-center justify-center mb-6"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      border: "1px solid var(--color-accent-strong)",
                      borderRadius: "4px",
                    }}
                  >
                    <Icon style={{ color: "var(--color-accent)" }} size={26} />
                  </div>
                  <h3
                    className="mb-3 text-xl font-light transition-colors"
                    style={{ color: "var(--color-text)" }}
                  >
                    {service.title}
                  </h3>
                  <div
                    className="w-10 h-px mb-4"
                    style={{ backgroundColor: "var(--color-accent-medium)" }}
                  ></div>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {service.desc}
                  </p>
                  <div
                    className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-all"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Learn More
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ END-TO-END VALUE CHAIN (with image) ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
            <div className="lg:col-span-5 relative">
              <div
                className="absolute -inset-2"
                style={{
                  border: "1px solid var(--color-accent-medium)",
                  borderRadius: "4px",
                  pointerEvents: "none",
                }}
              ></div>
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: "4px",
                  border: "1px solid var(--color-border)",
                }}
              >
                <img
                  src="https://i.pinimg.com/736x/34/e8/e4/34e8e4b30f79ee2f8859e446021a4a4c.jpg"
                  alt="Gold mining operations"
                  className="w-full h-[420px] object-cover"
                  style={{ filter: "brightness(0.72) contrast(1.05)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(11,11,11,0.5) 0%, rgba(11,11,11,0.1) 50%, var(--color-accent-line) 100%)",
                  }}
                ></div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                From Mine to Market
              </div>
              <h2
                className="mb-4 text-3xl md:text-4xl lg:text-5xl font-light leading-tight"
                style={{ color: "var(--color-text)" }}
              >
                End-to-End Gold{" "}
                <span style={{ color: "var(--color-accent)" }}>Value Chain</span>
              </h2>
              <div
                className="w-12 h-px mb-6"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>
              <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Integrated expertise from mine financing through to global market access. Our three-stage model ensures certainty, transparency, and shared value at every step.
              </p>
            </div>
          </div>

          {/* Three-step flow with arrows */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative">
            {[
              {
                num: "01",
                icon: Coins,
                title: "Mine Financing",
                subtitle: "Streaming & Royalties",
                desc: "Non-dilutive capital deployment to miners.",
              },
              {
                num: "02",
                icon: Truck,
                title: "Production Off-take",
                subtitle: "Direct Purchase",
                desc: "Verified, conflict-free gold sourcing from miners and aggregators.",
              },
              {
                num: "03",
                icon: Globe,
                title: "Market Access",
                subtitle: "Global Trading",
                desc: "Distribution to Dubai and Hong Kong refineries and end users.",
              },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative">
                  <div
                    className="p-8 h-full transition-all duration-300"
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
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-14 h-14 flex items-center justify-center"
                        style={{
                          backgroundColor: "var(--color-accent-soft)",
                          border: "1px solid var(--color-accent-strong)",
                          borderRadius: "4px",
                        }}
                      >
                        <Icon style={{ color: "var(--color-accent)" }} size={24} />
                      </div>
                      <div
                        className="text-4xl font-light leading-none"
                        style={{ color: "var(--color-accent)", opacity: 0.4 }}
                      >
                        {step.num}
                      </div>
                    </div>
                    <h3 className="mb-1 text-xl font-light" style={{ color: "var(--color-text)" }}>
                      {step.title}
                    </h3>
                    <div
                      className="text-xs tracking-[0.2em] uppercase mb-4"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {step.subtitle}
                    </div>
                    <div
                      className="w-8 h-px mb-4"
                      style={{ backgroundColor: "var(--color-accent-medium)" }}
                    ></div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Arrow between cards (desktop only) */}
                  {idx < 2 && (
                    <div
                      className="hidden md:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: "var(--color-bg)",
                        border: "1px solid var(--color-accent)",
                      }}
                    >
                      <ArrowRight style={{ color: "var(--color-accent)" }} size={14} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SUSTAINABLE MINING + GLOBAL PRESENCE (with image) ============ */}
      <section className="py-20" style={{ backgroundColor: "var(--color-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Sustainable Mining with image */}
            <div>
              
              <div
                className="inline-block mb-4 text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Our Commitment
              </div>
              <h2
                className="mb-4 text-3xl md:text-4xl font-light leading-tight"
                style={{ color: "var(--color-text)" }}
              >
                Committed to{" "}
                <span style={{ color: "var(--color-accent)" }}>Sustainable Mining</span>
              </h2>
              <div
                className="w-12 h-px mb-6"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>
              <p className="mb-8 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                We prioritize ESG compliance, environmental responsibility, and positive community impact across all our operations and partnerships.
              </p>

              <div className="space-y-3">
                {[
                  {
                    icon: Leaf,
                    title: "Environmental Stewardship",
                    desc: "Supporting responsible mining practices.",
                  },
                  {
                    icon: Shield,
                    title: "Compliance & Transparency",
                    desc: "Full AML/KYC adherence and ethical sourcing.",
                  },
                  {
                    icon: Users,
                    title: "Community Impact",
                    desc: "Creating shared value for local stakeholders and host communities.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 transition-all duration-300"
                      style={{
                        backgroundColor: "var(--color-bg)",
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
                      <div
                        className="shrink-0 w-10 h-10 flex items-center justify-center"
                        style={{
                          backgroundColor: "var(--color-accent-soft)",
                          border: "1px solid var(--color-accent-strong)",
                          borderRadius: "4px",
                        }}
                      >
                        <Icon style={{ color: "var(--color-accent)" }} size={18} />
                      </div>
                      <div>
                        <h4 className="mb-1 text-sm" style={{ color: "var(--color-text)" }}>
                          {item.title}
                        </h4>
                        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right — Global Presence */}
            <div
              className="p-10"
              style={{
                backgroundColor: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "4px",
                background: "var(--gradient-card-tinted)",
              }}
            >
              <div
                className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Where We Operate
              </div>
              <h3
                className="mb-2 text-2xl md:text-3xl font-light"
                style={{ color: "var(--color-text)" }}
              >
                Global Presence
              </h3>
              <div
                className="w-12 h-px mb-6"
                style={{ backgroundColor: "var(--color-accent-medium)" }}
              ></div>
              <p className="mb-8 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              </p>

              <div className="space-y-3">
                {[
                  { city: "Dubai, UAE", region: "MENA Hub & Headquarters" },
                  { city: "Accra, Ghana", region: "West Africa Operations" },
                  { city: "Hong Kong", region: "Asia-Pacific Gateway" },
                ].map((loc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 transition-all duration-300"
                    style={{
                      backgroundColor: "var(--color-bg-alt)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-accent)";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-border)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <div
                      className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full"
                      style={{
                        backgroundColor: "var(--color-accent-soft)",
                        border: "1px solid var(--color-accent-strong)",
                      }}
                    >
                      <MapPin style={{ color: "var(--color-accent)" }} size={16} />
                    </div>
                    <div>
                      <div
                        className="text-sm font-medium tracking-wide"
                        style={{ color: "var(--color-text)" }}
                      >
                        {loc.city}
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                        {loc.region}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-6 text-xs tracking-[0.2em] uppercase transition-all"
                style={{ color: "var(--color-accent)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
              >
                View All Locations
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS BAND ============ */}
      

      {/* ============ FINAL CTA ============ */}
      <section
        className="relative py-32 overflow-hidden"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 60%)",
          }}
        ></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-block mb-4 text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            Get Started
          </div>
          <h2
            className="mb-6 text-3xl md:text-4xl lg:text-5xl font-light leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            Ready to <span style={{ color: "var(--color-accent)" }}>Partner</span>?
          </h2>
          <div
            className="w-16 h-px mx-auto mb-6"
            style={{ backgroundColor: "var(--color-accent)" }}
          ></div>
          <p className="mb-10 text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
            Connect with our team to explore how we can support your precious metal trading, financing, or advisory needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 transition-all duration-300 tracking-[0.2em] uppercase text-sm font-medium"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-text-on-accent)",
                border: "1px solid var(--color-accent)",
                borderRadius: "4px",
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
              Get in Touch
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 transition-all duration-300 tracking-[0.2em] uppercase text-sm font-medium"
              style={{
                backgroundColor: "transparent",
                color: "var(--color-accent)",
                border: "1px solid var(--color-accent)",
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-accent-soft)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}