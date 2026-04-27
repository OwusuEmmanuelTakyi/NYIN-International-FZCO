import {
  TrendingUp,
  Building2,
  ShieldCheck,
  Truck,
  BarChart3,
  Globe,
  MapPin,
  Network,
  Lock,
  FileCheck,
  Plane,
  Coins,
  Users,
  Landmark,
  Gem,
  ArrowRight,
  CheckCircle,
  Activity,
  Briefcase,
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

export default function Trading() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
      {/* ============ HERO with VIDEO ============ */}
      <HeroVideo
        sources={[
          "https://cdn.pixabay.com/video/2024/02/18/200679-915334534_large.mp4",
          "https://cdn.pixabay.com/video/2023/06/12/166697-836429291_large.mp4",
          "https://cdn.pixabay.com/video/2021/06/17/78480-565157086_large.mp4",
        ]}
        poster="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1920&q=80"
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
            Trading &{" "}
            <span style={{ color: "var(--color-accent)" }}>Execution Services</span>
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
            Comprehensive gold trading services connecting licensed miners, refineries, dealers, and institutional investors across the global precious metals market.
          </p>
          <p
            className="leading-relaxed"
            style={{
              color: "#E5E5E5",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            From upstream off-take agreements to downstream institutional trading, we provide end-to-end execution with a focus on compliance, transparency, and competitive pricing.
          </p>
        </div>
      </HeroVideo>

      {/* ============ UPSTREAM TRADING — split with image ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
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
                  src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=1200&q=80"
                  alt="Gold trading and market activity"
                  className="w-full h-[480px] object-cover"
                  style={{ filter: "brightness(0.78) contrast(1.05) saturate(1.1)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(11,11,11,0.4) 0%, rgba(11,11,11,0.1) 50%, var(--color-accent-line) 100%)",
                  }}
                ></div>
              </div>
              {/* Floating stat badge */}
              <div
                className="absolute -bottom-6 -left-6 p-6 hidden md:block"
                style={{
                  backgroundColor: "var(--color-bg-alt)",
                  border: "1px solid var(--color-accent)",
                  borderRadius: "4px",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                }}
              >
                <div className="text-3xl font-light mb-1" style={{ color: "var(--color-accent)" }}>
                  Direct
                </div>
                <div
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Mine-to-Market Access
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2">
              <div
                className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Our Edge
              </div>
              <h2
                className="mb-4 text-3xl md:text-4xl font-light"
                style={{ color: "var(--color-text)" }}
              >
                Upstream Trading
              </h2>
              <div
                className="w-12 h-px mb-6"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>
              <p className="mb-5 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Our unique upstream approach sets us apart. With local teams positioned near major production belts, we maintain direct relationships with mines and processing facilities. This allows NYIN to offer{" "}
                <span style={{ color: "var(--color-accent)" }}>exclusive pricing advantages</span> to our customers.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Furthermore, our infrastructure enables, for the first time, institutional investment in the small- and medium-scale mining sector.
              </p>

              {/* Three pillars of upstream trading */}
              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: "Local Presence",
                    desc: "Teams positioned near major African production belts for direct mine access.",
                  },
                  {
                    icon: Network,
                    title: "Direct Relationships",
                    desc: "Long-standing partnerships with licensed mines and processing facilities.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Institutional Access",
                    desc: "Opening small- and medium-scale mining to institutional capital for the first time.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 transition-all duration-300"
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
                      <div
                        className="shrink-0 w-11 h-11 flex items-center justify-center"
                        style={{
                          backgroundColor: "var(--color-accent-soft)",
                          border: "1px solid var(--color-accent-strong)",
                          borderRadius: "4px",
                        }}
                      >
                        <Icon style={{ color: "var(--color-accent)" }} size={20} />
                      </div>
                      <div>
                        <h4 className="mb-1 text-base" style={{ color: "var(--color-text)" }}>
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
          </div>
        </div>
      </section>

      {/* ============ HEDGING & RISK MANAGEMENT ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div
              className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Protect Your Position
            </div>
            <h2
              className="mb-4 text-3xl md:text-4xl font-light"
              style={{ color: "var(--color-text)" }}
            >
              Hedging & Risk Management
            </h2>
            <div
              className="w-16 h-px mx-auto mb-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>
            <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              We offer hedging and risk management services to help clients manage price exposure on their physical gold holdings,{" "}
              <span style={{ color: "var(--color-accent)" }}>protecting margins and preserving profits</span>. These services benefit both physical users of gold — such as jewelers and industrial producers — as well as investors.
            </p>
          </div>

          {/* Two beneficiary cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            <div
              className="p-8 transition-all duration-300"
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
                className="w-12 h-12 flex items-center justify-center mb-5"
                style={{
                  backgroundColor: "var(--color-accent-soft)",
                  border: "1px solid var(--color-accent-strong)",
                  borderRadius: "4px",
                }}
              >
                <Gem style={{ color: "var(--color-accent)" }} size={22} />
              </div>
              <div
                className="text-xs tracking-[0.3em] uppercase mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                Physical Users
              </div>
              <h3 className="mb-3 text-xl font-light" style={{ color: "var(--color-text)" }}>
                Jewelers & Industrial Producers
              </h3>
              <div
                className="w-8 h-px mb-4"
                style={{ backgroundColor: "var(--color-accent-medium)" }}
              ></div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Lock in gold input costs to protect production margins from price volatility.
              </p>
            </div>

            <div
              className="p-8 transition-all duration-300"
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
                className="w-12 h-12 flex items-center justify-center mb-5"
                style={{
                  backgroundColor: "var(--color-accent-soft)",
                  border: "1px solid var(--color-accent-strong)",
                  borderRadius: "4px",
                }}
              >
                <Briefcase style={{ color: "var(--color-accent)" }} size={22} />
              </div>
              <div
                className="text-xs tracking-[0.3em] uppercase mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                Investors
              </div>
              <h3 className="mb-3 text-xl font-light" style={{ color: "var(--color-text)" }}>
                Funds & Institutional Holders
              </h3>
              <div
                className="w-8 h-px mb-4"
                style={{ backgroundColor: "var(--color-accent-medium)" }}
              ></div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Preserve profits on physical gold holdings with structured hedging programs.
              </p>
            </div>
          </div>

          {/* Hedging instruments */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: BarChart3,
                  title: "Forward Contracts",
                  desc: "Lock in future delivery prices",
                },
                {
                  icon: Activity,
                  title: "Options Strategies",
                  desc: "Downside protection with upside participation",
                },
                {
                  icon: ShieldCheck,
                  title: "Collar Programs",
                  desc: "Defined price ranges for budget certainty",
                },
                {
                  icon: FileCheck,
                  title: "Custom Structures",
                  desc: "Tailored to specific production profiles",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 text-center transition-all duration-300"
                    style={{
                      backgroundColor: "var(--color-bg)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-accent)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-border)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div
                      className="w-11 h-11 mx-auto mb-3 flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--color-accent-soft)",
                        border: "1px solid var(--color-accent-strong)",
                        borderRadius: "4px",
                      }}
                    >
                      <Icon style={{ color: "var(--color-accent)" }} size={20} />
                    </div>
                    <div
                      className="mb-2 text-sm tracking-wide"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {item.title}
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ LOGISTICS COORDINATION — split with image ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                End-to-End Movement
              </div>
              <h2
                className="mb-4 text-3xl md:text-4xl font-light"
                style={{ color: "var(--color-text)" }}
              >
                Logistics Coordination
              </h2>
              <div
                className="w-12 h-px mb-6"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>
              <p className="mb-8 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Our trusted logistics partners manage every stage of physical gold movement. We minimize delays and counterparty risk, ensuring{" "}
                <span style={{ color: "var(--color-accent)" }}>safe, reliable delivery</span>.
              </p>

              {/* Logistics steps as a vertical list */}
              <div className="space-y-3">
                {[
                  {
                    icon: Lock,
                    title: "Secure Collection",
                    desc: "Direct from mine or aggregation sites with armored transport.",
                  },
                  {
                    icon: FileCheck,
                    title: "Customs & Export Compliance",
                    desc: "Full documentation across African jurisdictions.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Comprehensive Insurance",
                    desc: "Coverage for theft, loss, and damage at every stage.",
                  },
                  {
                    icon: Plane,
                    title: "Air Freight Coordination",
                    desc: "Real-time tracking from origin to destination.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 transition-all duration-300"
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
                        <h4 className="mb-0.5 text-sm" style={{ color: "var(--color-text)" }}>
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

            {/* Image */}
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
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80"
                  alt="Secure cargo transport and logistics"
                  className="w-full h-[520px] object-cover"
                  style={{ filter: "brightness(0.7) contrast(1.05)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(11,11,11,0.5) 0%, transparent 50%, var(--color-accent-line) 100%)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ONWARD SALE ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div
              className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Distribution
            </div>
            <h2
              className="mb-4 text-3xl md:text-4xl font-light"
              style={{ color: "var(--color-text)" }}
            >
              Onward Sale
            </h2>
            <div
              className="w-16 h-px mx-auto mb-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>
            <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              We sell gold through two primary channels, ensuring efficient placement with trusted counterparties.
            </p>
          </div>

          {/* Two channel cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div
              className="p-10 transition-all duration-300 relative"
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
                className="absolute top-6 right-6 text-5xl font-light leading-none opacity-20"
                style={{ color: "var(--color-accent)" }}
              >
                01
              </div>
              <div
                className="w-14 h-14 flex items-center justify-center mb-6"
                style={{
                  backgroundColor: "var(--color-accent-soft)",
                  border: "1px solid var(--color-accent-strong)",
                  borderRadius: "4px",
                }}
              >
                <Building2 style={{ color: "var(--color-accent)" }} size={26} />
              </div>
              <div
                className="text-xs tracking-[0.3em] uppercase mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                Channel One
              </div>
              <h3 className="mb-3 text-2xl font-light" style={{ color: "var(--color-text)" }}>
                Refineries
              </h3>
              <div
                className="w-10 h-px mb-5"
                style={{ backgroundColor: "var(--color-accent-medium)" }}
              ></div>
              <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Often via long-term offtake agreements with LBMA-accredited and tier-1 facilities.
              </p>
            </div>

            <div
              className="p-10 transition-all duration-300 relative"
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
                className="absolute top-6 right-6 text-5xl font-light leading-none opacity-20"
                style={{ color: "var(--color-accent)" }}
              >
                02
              </div>
              <div
                className="w-14 h-14 flex items-center justify-center mb-6"
                style={{
                  backgroundColor: "var(--color-accent-soft)",
                  border: "1px solid var(--color-accent-strong)",
                  borderRadius: "4px",
                }}
              >
                <Users style={{ color: "var(--color-accent)" }} size={26} />
              </div>
              <div
                className="text-xs tracking-[0.3em] uppercase mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                Channel Two
              </div>
              <h3 className="mb-3 text-2xl font-light" style={{ color: "var(--color-text)" }}>
                Direct End Users
              </h3>
              <div
                className="w-10 h-px mb-5"
                style={{ backgroundColor: "var(--color-accent-medium)" }}
              ></div>
              <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Including jewelers, investment funds, and institutional buyers seeking direct access to physical gold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE NYIN ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              The NYIN Advantage
            </div>
            <h2
              className="mb-4 text-3xl md:text-4xl font-light"
              style={{ color: "var(--color-text)" }}
            >
              Why Choose NYIN?
            </h2>
            <div
              className="w-16 h-px mx-auto mb-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                icon: Globe,
                title: "Deep African Network",
                desc: "Direct relationships with miners and aggregators across the continent.",
              },
              {
                icon: Landmark,
                title: "Regulatory & AML Expertise",
                desc: "Strong compliance framework across all operating jurisdictions.",
              },
              {
                icon: Truck,
                title: "Trusted Logistics",
                desc: "Proven partners for both land and air freight movements.",
              },
              {
                icon: Coins,
                title: "Transparent Pricing",
                desc: "Market-linked pricing with full visibility for our counterparties.",
              },
              {
                icon: CheckCircle,
                title: "End-to-End Accountability",
                desc: "Single point of responsibility from off-take to final sale.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
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
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      border: "1px solid var(--color-accent-strong)",
                      borderRadius: "4px",
                    }}
                  >
                    <Icon style={{ color: "var(--color-accent)" }} size={20} />
                  </div>
                  <h3 className="mb-2 text-base" style={{ color: "var(--color-text)" }}>
                    {item.title}
                  </h3>
                  <div
                    className="w-6 h-px mb-3"
                    style={{ backgroundColor: "var(--color-accent-medium)" }}
                  ></div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
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
            Ready to <span style={{ color: "var(--color-accent)" }}>Trade</span>?
          </h2>
          <div
            className="w-16 h-px mx-auto mb-6"
            style={{ backgroundColor: "var(--color-accent)" }}
          ></div>
          <p className="mb-10 text-lg leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            Connect with our trading desk to discuss off-take agreements, bullion purchases, or hedging strategies.
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
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}