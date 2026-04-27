import {
  Shield,
  TrendingUp,
  CheckCircle,
  Zap,
  Leaf,
  BarChart3,
  Cpu,
  Users,
  Award,
  Globe,
  Coins,
  Building2,
  Truck,
  Package,
  Search,
  ArrowRight,
  MapPin,
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

export default function Streaming() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
      {/* ============ HERO with VIDEO ============ */}
      <HeroVideo
        sources={[
          "https://cdn.pixabay.com/video/2022/03/14/110624-688573598_large.mp4",
          "https://cdn.pixabay.com/video/2024/02/18/200679-915334534_large.mp4",
          "https://cdn.pixabay.com/video/2021/06/17/78480-565157086_large.mp4",
        ]}
        poster="https://images.unsplash.com/photo-1605792657660-596af9009e82?w=1920&q=80"
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
            Streaming, Royalties &{" "}
            <span style={{ color: "var(--color-accent)" }}>Bullion Trading</span>
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
            NYIN Minerals Ltd, a wholly owned subsidiary of NYIN International FZCO, is a pioneering Ghanaian gold streaming and royalty company focused on transforming gold mine financing across the country.
          </p>
          <p
            className="leading-relaxed"
            style={{
              color: "#E5E5E5",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            We deliver non-dilutive capital solutions to licensed, responsible gold miners — moving beyond restrictive debt and traditional equity models. Through strategic financing and technology partnerships, we empower gold miners to boost production, improve recovery rates, and fully realize their gold assets' potential.
          </p>
        </div>
      </HeroVideo>

      {/* ============ STREAMING & ROYALTIES — INTRO + IMAGE ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image with frame */}
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
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80"
                  alt="Gold mining heavy machinery"
                  className="w-full h-[480px] object-cover"
                  style={{ filter: "brightness(0.75) contrast(1.05)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(11,11,11,0.4) 0%, rgba(11,11,11,0.1) 50%, var(--color-accent-line) 100%)",
                  }}
                ></div>
              </div>
              {/* Stat badge overlay */}
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
                  100%
                </div>
                <div
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Conflict-Free Gold
                </div>
              </div>
            </div>

            {/* Right: Sustainable model copy */}
            <div>
              <div
                className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Streaming & Royalties
              </div>
              <h2
                className="mb-4 text-3xl md:text-4xl font-light"
                style={{ color: "var(--color-text)" }}
              >
                Our Sustainable Model
              </h2>
              <div
                className="w-12 h-px mb-6"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>
              <p className="mb-5 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                We provide capital by funding essential equipment — such as heavy-duty gold mining machinery and eco-friendly processing plants — while retaining ownership throughout the project lifecycle.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Partners gain immediate operational capacity; in return, we receive a fixed share of future gold production at a discount (a gold stream) or revenue (a gold royalty). This alignment ensures that our success grows alongside theirs, fostering mutual prosperity for gold miners, investors, and local communities.
              </p>

              {/* Approach pillars */}
              <div className="space-y-4">
                {[
                  {
                    icon: Cpu,
                    title: "Cutting-Edge Technology",
                    desc: "Advanced gold extraction and processing tools, including environmentally safe leaching reagents.",
                  },
                  {
                    icon: Users,
                    title: "Tailored Partnerships",
                    desc: "Custom solutions to enhance gold recovery efficiency and meet ESG standards.",
                  },
                  {
                    icon: Shield,
                    title: "Asset-Backed Security",
                    desc: "Reduced risk through retained ownership of gold-producing equipment.",
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
                        <h4
                          className="mb-1 text-base"
                          style={{ color: "var(--color-text)" }}
                        >
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

      {/* ============ HOW IT WORKS — Process ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              The Process
            </div>
            <h2
              className="mb-4 text-3xl md:text-4xl font-light"
              style={{ color: "var(--color-text)" }}
            >
              How It Works
            </h2>
            <div
              className="w-16 h-px mx-auto mb-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>
            <p className="max-w-2xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
              A structured four-step approach to mine financing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                num: "01",
                title: "Initial Capital",
                desc: "Upfront payment to mining company for operational or development needs",
              },
              {
                num: "02",
                title: "Production Rights",
                desc: "Agreement to purchase a percentage of future gold production",
              },
              {
                num: "03",
                title: "Ongoing Delivery",
                desc: "Regular gold deliveries at predetermined discounted price",
              },
              {
                num: "04",
                title: "Market Sale",
                desc: "Gold sold at spot price generating returns for investors",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative p-8 transition-all duration-300 group"
                style={{
                  backgroundColor: "var(--color-bg)",
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
                  className="text-5xl font-light mb-4 leading-none"
                  style={{ color: "var(--color-accent)", opacity: 0.85 }}
                >
                  {step.num}
                </div>
                <div
                  className="w-8 h-px mb-4"
                  style={{ backgroundColor: "var(--color-accent-medium)" }}
                ></div>
                <h3 className="mb-3 text-lg" style={{ color: "var(--color-text)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY PARTNER WITH US ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              The Difference
            </div>
            <h2
              className="mb-4 text-3xl md:text-4xl font-light"
              style={{ color: "var(--color-text)" }}
            >
              Why Partner With Us
            </h2>
            <div
              className="w-16 h-px mx-auto mb-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Deep Local Roots",
                desc: "Unmatched community engagement and Ghanaian gold market expertise.",
              },
              {
                icon: Search,
                title: "Rigorous Selection",
                desc: "Meticulous due diligence for high-impact gold projects.",
              },
              {
                icon: Users,
                title: "Trusted Relationships",
                desc: "Strong ties with gold miners, regulators, and communities.",
              },
              {
                icon: Leaf,
                title: "Responsible Stewardship",
                desc: "Commitment to environmental and social governance in the gold sector.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 transition-all duration-300"
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
                    className="w-12 h-12 flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      border: "1px solid var(--color-accent-strong)",
                      borderRadius: "4px",
                    }}
                  >
                    <Icon style={{ color: "var(--color-accent)" }} size={22} />
                  </div>
                  <h3 className="mb-3 text-lg" style={{ color: "var(--color-text)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ KEY BENEFITS ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Advantages
            </div>
            <h2
              className="mb-4 text-3xl md:text-4xl font-light"
              style={{ color: "var(--color-text)" }}
            >
              Key Benefits
            </h2>
            <div
              className="w-16 h-px mx-auto mb-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Asset-Backed Security", desc: "Physical gold production provides tangible collateral and downside protection" },
              { icon: TrendingUp, title: "Non-Dilutive for Miners", desc: "Preserves equity ownership while accessing necessary capital" },
              { icon: CheckCircle, title: "Flexible Structures", desc: "Customized agreements tailored to specific project needs and timelines" },
              { icon: Zap, title: "Rapid Deployment", desc: "Faster execution compared to traditional financing routes" },
              { icon: Leaf, title: "ESG Compliance", desc: "Strict environmental and social governance requirements" },
              { icon: BarChart3, title: "Technology-Driven", desc: "Modern mining operations with transparent reporting systems" },
            ].map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="p-7 transition-all duration-300"
                  style={{
                    backgroundColor: "var(--color-bg)",
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
                    className="w-12 h-12 flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      border: "1px solid var(--color-accent-strong)",
                      borderRadius: "4px",
                    }}
                  >
                    <Icon style={{ color: "var(--color-accent)" }} size={22} />
                  </div>
                  <h3 className="mb-3 text-lg" style={{ color: "var(--color-text)" }}>
                    {b.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ DIVIDER / TRANSITION TO BROKERAGE ============ */}
      <section
        className="py-32 relative overflow-hidden"
        style={{
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-accent-line)",
          borderBottom: "1px solid var(--color-accent-line)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 70%)",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Brokerage & Trading
              </div>
              <h2
                className="mb-6 text-3xl md:text-5xl font-light leading-tight"
                style={{ color: "var(--color-text)" }}
              >
                The vital link between{" "}
                <span style={{ color: "var(--color-accent)" }}>African gold producers</span>{" "}
                and international markets.
              </h2>
              <div
                className="w-16 h-px mb-6"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>
              <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                NYIN International FZCO specializes in the physical trading and off-take of gold bullion from licensed miners and authorized aggregators across Africa, offering a transparent, fully compliant pathway from mine to refinery.
              </p>
            </div>

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
                  src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1200&q=80"
                  alt="Gold bullion bars"
                  className="w-full h-[420px] object-cover"
                  style={{ filter: "brightness(0.85) contrast(1.05) saturate(1.1)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(11,11,11,0.3) 0%, transparent 50%, var(--color-accent-line) 100%)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GOLD OFF-TAKE IN AFRICA ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div
                className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Sourcing
              </div>
              <h2
                className="mb-4 text-3xl md:text-4xl font-light"
                style={{ color: "var(--color-text)" }}
              >
                Gold Off-Take in Africa
              </h2>
              <div
                className="w-12 h-px mb-6"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>
              <p className="mb-6 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                We purchase gold directly from verified sources, including licensed small-scale and large-scale miners as well as authorized local aggregators.
              </p>
              <p className="mb-6 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Our due diligence process verifies origin, quality, and compliance with{" "}
                <span style={{ color: "var(--color-accent)" }}>OECD guidelines</span> and local regulations. We trade exclusively in conflict-free gold.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    icon: Award,
                    title: "Licensed Miners",
                    desc: "Both small-scale and large-scale licensed gold miners across Ghana and the wider African region.",
                  },
                  {
                    icon: Building2,
                    title: "Authorized Aggregators",
                    desc: "Verified local aggregators operating under government-issued licenses and regulatory oversight.",
                  },
                  {
                    icon: CheckCircle,
                    title: "OECD-Compliant",
                    desc: "Strict adherence to OECD Due Diligence Guidance and conflict-free sourcing standards.",
                  },
                  {
                    icon: Shield,
                    title: "Origin Verification",
                    desc: "Complete chain-of-custody documentation from mine to refinery for every transaction.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 transition-all duration-300 h-full"
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
                        className="w-11 h-11 flex items-center justify-center mb-4"
                        style={{
                          backgroundColor: "var(--color-accent-soft)",
                          border: "1px solid var(--color-accent-strong)",
                          borderRadius: "4px",
                        }}
                      >
                        <Icon style={{ color: "var(--color-accent)" }} size={20} />
                      </div>
                      <h4
                        className="mb-2 text-base"
                        style={{ color: "var(--color-text)" }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BULLION TRADING ============ */}
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
              Bullion Trading
            </h2>
            <div
              className="w-16 h-px mx-auto mb-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>
            <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              We supply gold doré, unrefined bars, and LBMA-standard refined gold to refineries and end users worldwide.
            </p>
          </div>

          {/* Two large cards: Refineries & End Users */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
                <Building2 style={{ color: "var(--color-accent)" }} size={26} />
              </div>
              <div
                className="text-xs tracking-[0.3em] uppercase mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                Tier 1 Partners
              </div>
              <h3 className="mb-3 text-2xl font-light" style={{ color: "var(--color-text)" }}>
                Refineries
              </h3>
              <div
                className="w-10 h-px mb-5"
                style={{ backgroundColor: "var(--color-accent-medium)" }}
              ></div>
              <p className="mb-5 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Primarily in <span style={{ color: "var(--color-accent)" }}>Dubai</span> and{" "}
                <span style={{ color: "var(--color-accent)" }}>Hong Kong</span>, for further processing into investment-grade bars.
              </p>
              <div className="flex flex-wrap gap-2">
                {["LBMA Standard", "Doré Bars", "Refined Gold"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs tracking-wider"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      color: "var(--color-accent)",
                      border: "1px solid var(--color-accent-strong)",
                      borderRadius: "2px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

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
                <Coins style={{ color: "var(--color-accent)" }} size={26} />
              </div>
              <div
                className="text-xs tracking-[0.3em] uppercase mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                Direct Markets
              </div>
              <h3 className="mb-3 text-2xl font-light" style={{ color: "var(--color-text)" }}>
                End Users
              </h3>
              <div
                className="w-10 h-px mb-5"
                style={{ backgroundColor: "var(--color-accent-medium)" }}
              ></div>
              <p className="mb-5 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Including dealers, jewelers, and institutional investors who require trusted access to physical gold.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Dealers", "Jewelers", "Institutional"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs tracking-wider"
                    style={{
                      backgroundColor: "var(--color-accent-soft)",
                      color: "var(--color-accent)",
                      border: "1px solid var(--color-accent-strong)",
                      borderRadius: "2px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Capabilities row */}
          <div
            className="p-8 md:p-10"
            style={{
              backgroundColor: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: "4px",
              background: "var(--gradient-card-tinted)",
            }}
          >
            <p className="mb-8 leading-relaxed text-center max-w-3xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
              In addition, we buy and sell all forms of bullion, refined products, coins, and collectibles. Our global market presence, network of accredited refiners, and extensive logistics capabilities give our clients access to competitive pricing, efficient fulfillment, and international transport and storage solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Globe, label: "Global Presence" },
                { icon: Award, label: "Accredited Refiners" },
                { icon: Truck, label: "Logistics & Transport" },
                { icon: Package, label: "Storage Solutions" },
              ].map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <div key={idx} className="text-center">
                    <div
                      className="w-14 h-14 mx-auto mb-3 flex items-center justify-center rounded-full"
                      style={{
                        backgroundColor: "var(--color-accent-soft)",
                        border: "1px solid var(--color-accent-strong)",
                      }}
                    >
                      <Icon style={{ color: "var(--color-accent)" }} size={22} />
                    </div>
                    <div
                      className="text-xs tracking-[0.15em] uppercase"
                      style={{ color: "var(--color-text)" }}
                    >
                      {cap.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ ESG / SUSTAINABLE MINING FINANCE ============ */}
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
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div
                className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Our Commitment
              </div>
              <h2
                className="mb-4 text-3xl md:text-4xl font-light"
                style={{ color: "var(--color-text)" }}
              >
                Sustainable Mining Finance
              </h2>
              <div
                className="w-16 h-px mx-auto mb-6"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>
              <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                We exclusively partner with mining operations that demonstrate commitment to responsible practices, including environmental stewardship, community engagement, and transparent governance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  letter: "E",
                  title: "Environmental",
                  desc: "Minimal ecological impact and rehabilitation plans",
                },
                {
                  letter: "S",
                  title: "Social",
                  desc: "Fair labor practices and community benefit sharing",
                },
                {
                  letter: "G",
                  title: "Governance",
                  desc: "Full compliance and ethical business conduct",
                },
              ].map((esg, idx) => (
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
                    className="text-5xl font-light mb-3"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {esg.letter}
                  </div>
                  <div
                    className="w-8 h-px mx-auto mb-4"
                    style={{ backgroundColor: "var(--color-accent-medium)" }}
                  ></div>
                  <h3 className="mb-2 text-lg" style={{ color: "var(--color-text)" }}>
                    {esg.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {esg.desc}
                  </p>
                </div>
              ))}
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
            Interested in <span style={{ color: "var(--color-accent)" }}>Streaming</span> or{" "}
            <span style={{ color: "var(--color-accent)" }}>Trading</span>?
          </h2>
          <div
            className="w-16 h-px mx-auto mb-6"
            style={{ backgroundColor: "var(--color-accent)" }}
          ></div>
          <p className="mb-10 text-lg leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            Whether you're a mining company seeking capital or an investor looking for gold-backed opportunities, we can help structure the right solution.
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
            Partner With Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}