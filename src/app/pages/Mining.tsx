import {
  Landmark,
  Users,
  FileSearch,
  TrendingUp,
  DollarSign,
  Target,
  Building2,
  Handshake,
  ArrowRight,
  Eye,
  ClipboardCheck,
  Network,
  Layers,
  Award,
  Briefcase,
  Compass,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router";
import HeroVideo from "../components/HeroVideo";

// Color palette
// Primary Black: var(--color-bg)
// Charcoal: var(--color-bg-alt)
// Dark Grey: var(--color-border)
// Gold Accent: var(--color-accent)
// Light Gold Hover: var(--color-accent-hover)
// White: var(--color-text)
// Muted Text: var(--color-text-muted)

export default function Mining() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
      {/* ============ HERO with VIDEO ============ */}
      <HeroVideo
        sources={[
          "https://cdn.pixabay.com/video/2020/07/30/45469-446174853_large.mp4",
          "https://cdn.pixabay.com/video/2022/03/14/110624-688573598_large.mp4",
          "https://cdn.pixabay.com/video/2021/06/17/78480-565157086_large.mp4",
        ]}
        poster="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=80"
      >
        <div className="max-w-3xl">
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
            Our Services
          </div>
          <h1
            className="mb-8 text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
            style={{
              color: "#FFFFFF",
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            Mining Advisory &{" "}
            <span style={{ color: "var(--color-accent)" }}>Capital Solutions</span>
          </h1>
          <div
            className="w-16 h-px mb-8"
            style={{ backgroundColor: "var(--color-accent)" }}
          ></div>
          <p
            className="text-lg mb-6 leading-relaxed"
            style={{
              color: "#FFFFFF",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            At NYIN International FZCO, we go beyond trading and off-take. Through our advisory arm, we help concession holders and mine owners navigate complex ownership transitions, while connecting capital-ready investors with high-quality gold assets across Africa.
          </p>
          <p
            className="leading-relaxed"
            style={{
              color: "#E5E5E5",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            We bridge the gap between African gold mining operations and global institutional capital through comprehensive transaction advisory, due diligence, and deal structuring.
          </p>
        </div>
      </HeroVideo>

      {/* ============ INTRO IMAGE BAND ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
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
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80"
                  alt="Advisory and capital solutions"
                  className="w-full h-[480px] object-cover"
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
              <div
                className="absolute -bottom-6 -right-6 p-6 hidden md:block"
                style={{
                  backgroundColor: "var(--color-bg-alt)",
                  border: "1px solid var(--color-accent)",
                  borderRadius: "4px",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                }}
              >
                <div
                  className="text-3xl font-light mb-1"
                  style={{ color: "var(--color-accent)" }}
                >
                  $200M+
                </div>
                <div
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Transaction Value Advised
                </div>
              </div>
            </div>

            <div>
              <div
                className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Bridging Two Worlds
              </div>
              <h2
                className="mb-4 text-3xl md:text-4xl font-light leading-tight"
                style={{ color: "var(--color-text)" }}
              >
                African Gold Assets, Global Capital
              </h2>
              <div
                className="w-12 h-px mb-6"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>
              <p className="mb-5 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Our deep understanding of both African mining operations and international capital markets allows us to structure transactions that work for all parties.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                We've advised on transactions ranging from{" "}
                <span style={{ color: "var(--color-accent)" }}>$5M working capital raises</span> to{" "}
                <span style={{ color: "var(--color-accent)" }}>$50M+ asset sales</span>, always with discretion, rigor, and a long-term view.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { value: "$200M+", label: "Advised" },
                  { value: "15+", label: "Transactions" },
                  { value: "8", label: "Countries" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="text-center p-4"
                    style={{
                      backgroundColor: "var(--color-bg-alt)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      className="text-2xl font-light mb-1"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs tracking-[0.15em] uppercase"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOR MINE OWNERS / FOR INVESTORS ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div
              className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Who We Serve
            </div>
            <h2
              className="mb-4 text-3xl md:text-4xl font-light"
              style={{ color: "var(--color-text)" }}
            >
              Tailored to Your Position
            </h2>
            <div
              className="w-16 h-px mx-auto mb-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>
            <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Whether you hold the asset or hold the capital, we provide end-to-end guidance tailored to your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* For Mine Owners */}
            <div
              className="p-10 transition-all duration-300"
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
                className="w-14 h-14 flex items-center justify-center mb-6"
                style={{
                  backgroundColor: "var(--color-accent-soft)",
                  border: "1px solid var(--color-accent-strong)",
                  borderRadius: "4px",
                }}
              >
                <Landmark style={{ color: "var(--color-accent)" }} size={26} />
              </div>
              <div
                className="text-xs tracking-[0.3em] uppercase mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                Asset Holders
              </div>
              <h3 className="mb-3 text-2xl font-light" style={{ color: "var(--color-text)" }}>
                For Mine Owners & Concessionaires
              </h3>
              <div
                className="w-10 h-px mb-5"
                style={{ backgroundColor: "var(--color-accent-medium)" }}
              ></div>
              <p className="mb-8 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Whether you are looking to partially exit, fully divest, or bring in a strategic partner, we provide end-to-end guidance tailored to your goals.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Target,
                    title: "Exit Strategy & Valuation",
                    desc: "We assess your asset's true worth, considering reserves, production profile, and market conditions.",
                  },
                  {
                    icon: ClipboardCheck,
                    title: "Due Diligence Preparation",
                    desc: "We help you organize technical, financial, legal, and ESG data to meet investor standards.",
                  },
                  {
                    icon: Users,
                    title: "Buyer Identification",
                    desc: "Access to our network of institutional investors, family offices, and mining funds seeking African gold opportunities.",
                  },
                  {
                    icon: Handshake,
                    title: "Transaction Structuring",
                    desc: "Earn-ins, joint ventures, streaming, royalties, or outright sales — structured to maximize value.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div
                        className="shrink-0 w-9 h-9 flex items-center justify-center mt-0.5"
                        style={{
                          backgroundColor: "var(--color-accent-soft)",
                          border: "1px solid var(--color-accent-strong)",
                          borderRadius: "4px",
                        }}
                      >
                        <Icon style={{ color: "var(--color-accent)" }} size={16} />
                      </div>
                      <div>
                        <h4
                          className="mb-1 text-base"
                          style={{ color: "var(--color-text)" }}
                        >
                          {item.title}
                        </h4>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* For Investors */}
            <div
              className="p-10 transition-all duration-300"
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
                className="w-14 h-14 flex items-center justify-center mb-6"
                style={{
                  backgroundColor: "var(--color-accent-soft)",
                  border: "1px solid var(--color-accent-strong)",
                  borderRadius: "4px",
                }}
              >
                <Briefcase style={{ color: "var(--color-accent)" }} size={26} />
              </div>
              <div
                className="text-xs tracking-[0.3em] uppercase mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                Capital Providers
              </div>
              <h3 className="mb-3 text-2xl font-light" style={{ color: "var(--color-text)" }}>
                For Capital-Ready Investors
              </h3>
              <div
                className="w-10 h-px mb-5"
                style={{ backgroundColor: "var(--color-accent-medium)" }}
              ></div>
              <p className="mb-8 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Finding the right mining asset requires more than capital. It demands rigorous analysis and local knowledge — both of which we provide.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Building2,
                    title: "Asset Sourcing",
                    desc: "We identify vetted gold concessions and operating mines that match your return and risk profile.",
                  },
                  {
                    icon: FileSearch,
                    title: "Independent Due Diligence",
                    desc: "Technical reports, licences, historical production, compliance, and community relations — all reviewed by our team.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Valuation & Negotiation Support",
                    desc: "We help you arrive at a fair price and negotiate terms that protect your interests.",
                  },
                  {
                    icon: DollarSign,
                    title: "Capital Raising for Acquisitions",
                    desc: "If additional funds are needed, we structure and raise equity or debt to complete the transaction.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div
                        className="shrink-0 w-9 h-9 flex items-center justify-center mt-0.5"
                        style={{
                          backgroundColor: "var(--color-accent-soft)",
                          border: "1px solid var(--color-accent-strong)",
                          borderRadius: "4px",
                        }}
                      >
                        <Icon style={{ color: "var(--color-accent)" }} size={16} />
                      </div>
                      <div>
                        <h4
                          className="mb-1 text-base"
                          style={{ color: "var(--color-text)" }}
                        >
                          {item.title}
                        </h4>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW WE ADD VALUE ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div
              className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Our Differentiator
            </div>
            <h2
              className="mb-4 text-3xl md:text-4xl font-light"
              style={{ color: "var(--color-text)" }}
            >
              How We Add Value
            </h2>
            <div
              className="w-16 h-px mx-auto mb-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>
            <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Our approach bridges the gap between African mine owners and global capital. Because we operate in the same markets where we trade and off-take gold, we bring something most advisors cannot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: "On-the-Ground Intelligence",
                desc: "Real-time knowledge of assets, operators, and regulatory environments across African gold-producing regions.",
              },
              {
                icon: Network,
                title: "Trusted Local Relationships",
                desc: "Direct access to concessionaires and mining communities — relationships built over years, not weeks.",
              },
              {
                icon: Layers,
                title: "Integrated Services",
                desc: "Post-investment, we can also provide off-take, logistics, or streaming support through our trading division.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 transition-all duration-300"
                  style={{
                    backgroundColor: "var(--color-bg-alt)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "4px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      border: "1px solid var(--color-accent-strong)",
                      borderRadius: "4px",
                    }}
                  >
                    <Icon style={{ color: "var(--color-accent)" }} size={24} />
                  </div>
                  <h3 className="mb-3 text-xl font-light" style={{ color: "var(--color-text)" }}>
                    {item.title}
                  </h3>
                  <div
                    className="w-8 h-px mb-4"
                    style={{ backgroundColor: "var(--color-accent-medium)" }}
                  ></div>
                  <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ TRANSACTION LIFECYCLE ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div
              className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              From Start to Finish
            </div>
            <h2
              className="mb-4 text-3xl md:text-4xl font-light"
              style={{ color: "var(--color-text)" }}
            >
              Transaction Support Lifecycle
            </h2>
            <div
              className="w-16 h-px mx-auto mb-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>
            <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              From initial introduction to final closing, we manage the entire transaction lifecycle.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Vertical line behind steps */}
            <div
              className="absolute left-6 md:left-8 top-4 bottom-4 w-px hidden md:block"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, var(--color-accent-medium) 10%, var(--color-accent-medium) 90%, transparent 100%)",
              }}
            ></div>

            <div className="space-y-5">
              {[
                {
                  num: "01",
                  title: "Initial Assessment",
                  desc: "Understanding owner and investor objectives, asset quality, ownership structure, and transaction readiness.",
                },
                {
                  num: "02",
                  title: "Due Diligence",
                  desc: "Technical (geology, reserves, operations), legal (licences, permits), financial (historical performance, projections), and ESG reviews.",
                },
                {
                  num: "03",
                  title: "Structuring & Term Sheets",
                  desc: "Defining value, timing, and risk allocation. Independent valuation and deal structure optimization.",
                },
                {
                  num: "04",
                  title: "Capital Raising",
                  desc: "Sourcing debt or equity partners if required. Confidential marketing to qualified counterparties.",
                },
                {
                  num: "05",
                  title: "Closing & Transition",
                  desc: "Final documentation, regulatory approvals, fund transfer, and ensuring smooth handover or ongoing partnership.",
                },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-5 md:gap-8 items-start relative">
                  <div
                    className="shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative z-10"
                    style={{
                      backgroundColor: "var(--color-bg)",
                      border: "1px solid var(--color-accent)",
                      borderRadius: "4px",
                    }}
                  >
                    <span
                      className="text-lg md:text-xl font-light"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <div
                    className="flex-1 p-6 transition-all duration-300"
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
                    <h3 className="mb-2 text-lg" style={{ color: "var(--color-text)" }}>
                      {step.title}
                    </h3>
                    <div
                      className="w-8 h-px mb-3"
                      style={{ backgroundColor: "var(--color-accent-medium)" }}
                    ></div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CREDIBILITY BAND ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="p-10 md:p-16"
            style={{
              backgroundColor: "var(--color-bg-alt)",
              border: "1px solid var(--color-border)",
              borderRadius: "4px",
              background: "var(--gradient-card-tinted)",
            }}
          >
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div
                className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Track Record
              </div>
              <h2
                className="mb-4 text-3xl md:text-4xl font-light"
                style={{ color: "var(--color-text)" }}
              >
                Bridging Capital and Production
              </h2>
              <div
                className="w-16 h-px mx-auto mb-6"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>
              <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Our deep understanding of both African mining operations and international capital markets allows us to structure transactions that work for all parties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { value: "$200M+", label: "Transaction Value Advised", icon: DollarSign },
                { value: "15+", label: "Completed Transactions", icon: CheckCircle },
                { value: "8", label: "African Countries", icon: Compass },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="text-center p-6"
                    style={{
                      backgroundColor: "var(--color-bg)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full"
                      style={{
                        backgroundColor: "var(--color-accent-soft)",
                        border: "1px solid var(--color-accent-strong)",
                      }}
                    >
                      <Icon style={{ color: "var(--color-accent)" }} size={20} />
                    </div>
                    <div
                      className="text-4xl md:text-5xl font-light mb-2"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="w-8 h-px mx-auto mb-3"
                      style={{ backgroundColor: "var(--color-accent-medium)" }}
                    ></div>
                    <p
                      className="text-xs tracking-[0.15em] uppercase"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section
        className="py-24"
        style={{
          backgroundColor: "var(--color-bg-alt)",
          borderTop: "1px solid var(--color-accent-line)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            Need <span style={{ color: "var(--color-accent)" }}>Advisory Services</span>?
          </h2>
          <div
            className="w-16 h-px mx-auto mb-6"
            style={{ backgroundColor: "var(--color-accent)" }}
          ></div>
          <p className="mb-10 text-lg leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            Whether you're a mine owner exploring strategic options or an investor seeking opportunities, our team can help structure the right outcome.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 transition-all duration-300 tracking-[0.2em] uppercase text-sm font-medium"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-bg)",
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
            Schedule a Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}