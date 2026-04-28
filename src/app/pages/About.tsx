import {
  Target,
  Eye,
  Award,
  Users,
  Globe,
  Shield,
  Lightbulb,
  Handshake,
  Layers,
  CheckCircle,
  ArrowRight,
  Building2,
} from "lucide-react";
import { Link } from "react-router";
import HeroVideo from "../components/HeroVideo";

// Leadership portraits — local images
import leader1 from "../../images/1.png";
import leader2 from "../../images/2.png";
import leader3 from "../../images/3.png";
import leader4 from "../../images/4.png";

// Color palette
// Primary Black: var(--color-bg)
// Charcoal: var(--color-bg-alt)
// Dark Grey: var(--color-border)
// Gold Accent: var(--color-accent)
// Light Gold Hover: var(--color-accent-hover)
// White: var(--color-text)
// Muted Text: var(--color-text-muted)

// Leadership preview data — full bios live in /leadership
const leaders = [
  {
    slug: "joseph-arthur-dick",
    name: "Joseph Arthur Dick",
    role: "Managing Director & CEO",
    summary:
      "Over 15 years in global financial markets, with prior experience managing a multi-million dollar Asian corporate credit risk book at Vantage Capital Markets in Hong Kong.",
    image: leader1,
  },
  {
    slug: "emmanuel-conduah",
    name: "Emmanuel Conduah, CPA",
    role: "Chief Investment Officer",
    summary:
      "A decade of senior financial leadership including a tenure at Caterpillar Inc., with cross-sector expertise in asset-backed finance and investment strategy.",
    image: leader2,
  },
  {
    slug: "terrence",
    name: "Terrence Ofoe",
    role: "Chief Financial Officer",
    summary:
      "Career spanning Databank Group, First Atlantic Bank, and Equipall Ghana — combining financial governance, AML compliance, and mining-sector finance.",
    image: leader3,
  },
  {
    slug: "selorm-afudego",
    name: "Selorm Afudego",
    role: "Chief Operating Officer",
    summary:
      "Over a decade in sales, trading, and capital markets. Former Head of Fixed Income at Databank Group and a Registered Securities Dealer of the Ghana Stock Exchange.",
    image: leader4,
  },
];

export default function About() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
      {/* ============ HERO with VIDEO ============ */}
      <HeroVideo
        sources={[
          "https://cdn.pixabay.com/video/2023/10/30/187938-879478968_large.mp4",
          "https://cdn.pixabay.com/video/2020/08/30/48569-454825064_large.mp4",
          "https://cdn.pixabay.com/video/2021/06/17/78480-565157086_large.mp4",
        ]}
        poster="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80"
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
            About Us
          </div>
          <h1
            className="mb-8 text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
            style={{
              color: "#FFFFFF",
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            At the heart of the{" "}
            <span style={{ color: "var(--color-accent)" }}>global gold industry</span>.
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
            At NYIN International FZCO, we operate at the heart of the global precious metals industry. Headquartered in Dubai, with strategic hubs in Ghana and Hong Kong, we maintain direct access to the world’s most influential precious metals markets.
          </p>
          <p
            className="text-lg mb-6 leading-relaxed"
            style={{
              color: "#FFFFFF",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
           
            We provide a full spectrum of services, including physical and financial trading of gold and other precious metals, mining support through streaming and royalties, and tailored advisory solutions. Our expertise uniquely positions us to connect asset owners seeking successful exits with capital-ready investors.
          </p>
          
        </div>
      </HeroVideo>

      {/* ============ END-TO-END VALUE CHAIN INTRO ============ */}
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
                  src="https://i.pinimg.com/736x/be/fd/dd/befddd6f1a22fc176dd3060309240a2d.jpg"
                  alt="Dubai skyline"
                  className="w-full h-[480px] object-cover"
                  style={{ filter: "brightness(0.7) contrast(1.05) saturate(1.05)" }}
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
                 
                </div>
                <div
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ color: "var(--color-text-muted)" }}
                >
                 
                </div>
              </div>
            </div>

            <div>
              <div
                className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                
              </div>
              <h2
                className="mb-4 text-3xl md:text-4xl font-light leading-tight"
                style={{ color: "var(--color-text)" }}
              >
                End-to-End Solutions
              </h2>
              <div
                className="w-12 h-px mb-6"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>
              <p className="mb-8 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                We oversee every phase of the precious metals value chain and deliver end-to-end solutions tailored to our clients' unique needs. Whether you're a first-time buyer seeking entry-level guidance or an experienced precious metals trader or mining professional, we take the time to understand your goals and show you exactly how NYIN International FZCO can help you achieve them.
              </p>

              <div className="space-y-3">
                {[
                  "Physical and financial trading of gold and other precious metals",
                  "Mining support via streaming and royalties",
                  "Bespoke advisory and exit services",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle
                      style={{ color: "var(--color-accent)" }}
                      size={18}
                      className="shrink-0"
                    />
                    <span style={{ color: "var(--color-text)" }} className="text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISSION & VISION ============ */}
      <section
        id="mission-vision-values"
        className="py-24 scroll-mt-20"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Our Purpose
            </div>
            <h2
              className="mb-4 text-3xl md:text-4xl font-light"
              style={{ color: "var(--color-text)" }}
            >
              Mission & Vision
            </h2>
            <div
              className="w-16 h-px mx-auto mb-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <Target style={{ color: "var(--color-accent)" }} size={26} />
              </div>
              <div
                className="text-xs tracking-[0.3em] uppercase mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                Mission
              </div>
              <h3 className="mb-4 text-2xl font-light" style={{ color: "var(--color-text)" }}>
                Unlocking Africa's Precious Metals Potential
              </h3>
              <div
                className="w-12 h-px mb-6"
                style={{ backgroundColor: "var(--color-accent-medium)" }}
              ></div>
              <p style={{ color: "var(--color-text-muted)" }} className="leading-relaxed">
                To provide an integrated platform combining transparent bullion trading, non-dilutive financing via streaming and royalties, and strategic advisory services — ensuring miners, investors, and communities prosper together.
              </p>
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
                <Eye style={{ color: "var(--color-accent)" }} size={26} />
              </div>
              <div
                className="text-xs tracking-[0.3em] uppercase mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                Vision
              </div>
              <h3 className="mb-4 text-2xl font-light" style={{ color: "var(--color-text)" }}>
                Africa's Trusted Gateway for Precious Metals Capital
              </h3>
              <div
                className="w-12 h-px mb-6"
                style={{ backgroundColor: "var(--color-accent-medium)" }}
              ></div>
              <p style={{ color: "var(--color-text-muted)" }} className="leading-relaxed">
                To be Africa’s most trusted gateway for precious metals capital — driving ethical production, financial innovation, and sustainable growth across the entire mining value chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VALUES (6) ============ */}
      <section className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              What We Stand For
            </div>
            <h2
              className="mb-4 text-3xl md:text-4xl font-light"
              style={{ color: "var(--color-text)" }}
            >
              Our Values
            </h2>
            <div
              className="w-16 h-px mx-auto mb-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>
            <p className="max-w-2xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                icon: Shield,
                title: "Integrity",
                desc: "We operate with uncompromising honesty in every transaction — from off-take agreements to advisory mandates. Transparency, regulatory compliance, and conflict-free gold are non-negotiable.",
              },
              {
                num: "02",
                icon: Handshake,
                title: "Partnership",
                desc: "We succeed only when our clients succeed. Whether trading bullion, structuring a stream, or advising on an exit, our interests are fully aligned with those of miners, concessionaires, and investors.",
              },
              {
                num: "03",
                icon: Globe,
                title: "Local Expertise, Global Reach",
                desc: "We bridge African gold producers to world markets seamlessly — combining on-the-ground presence in key African hubs with international logistics, refining, and capital networks.",
              },
              
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="relative p-7 transition-all duration-300"
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
                    className="absolute top-5 right-6 text-3xl font-light leading-none opacity-25"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {value.num}
                  </div>
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
                    {value.title}
                  </h3>
                  <div
                    className="w-8 h-px mb-3"
                    style={{ backgroundColor: "var(--color-accent-medium)" }}
                  ></div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ LEADERSHIP TEAM PREVIEW ============ */}
      <section
        id="leadership-team"
        className="py-24 scroll-mt-20"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-block mb-3 text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              The People Behind Us
            </div>
            <h2
              className="mb-4 text-3xl md:text-4xl font-light"
              style={{ color: "var(--color-text)" }}
            >
              Leadership Team
            </h2>
            <div
              className="w-16 h-px mx-auto mb-6"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>
            
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="group transition-all duration-300 overflow-hidden"
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
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: "grayscale(0.3) brightness(0.85) contrast(1.05)" }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(11,11,11,0) 50%, rgba(11,11,11,0.8) 100%)",
                    }}
                  ></div>
                </div>

                <div className="p-6">
                  <h3 className="mb-1 text-lg leading-tight" style={{ color: "var(--color-text)" }}>
                    {leader.name}
                  </h3>
                  <p
                    className="text-xs tracking-[0.15em] uppercase mb-3"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {leader.role}
                  </p>
                  <div
                    className="w-8 h-px mb-4"
                    style={{ backgroundColor: "var(--color-accent-medium)" }}
                  ></div>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {leader.summary}
                  </p>
                  <Link
                    to={`/leadership#${leader.slug}`}
                    className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                    style={{ color: "var(--color-accent)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-accent-hover)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--color-accent)";
                    }}
                  >
                    Read More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/leadership"
              className="inline-flex items-center gap-3 px-8 py-3 transition-all duration-300 tracking-[0.2em] uppercase text-xs font-medium"
              style={{
                color: "var(--color-accent)",
                border: "1px solid var(--color-accent)",
                borderRadius: "4px",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-accent)";
                e.currentTarget.style.color = "var(--color-bg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--color-accent)";
              }}
            >
              View Full Leadership Profiles
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      
    </div>
  );
}