import {
  GraduationCap,
  Briefcase,
  Award,
  ArrowLeft,
  ArrowRight,
  Building2,
  TrendingUp,
  ShieldCheck,
  Cog,
  Mail,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router";
import HeroVideo from "../components/HeroVideo";

// Leadership portraits — local images
import leader1 from "../../images/1.jpeg";
import leader2 from "../../images/2.jpeg";
import leader3 from "../../images/3.jpeg";
import leader4 from "../../images/4.jpeg";

// Color palette
// Primary Black: var(--color-bg)
// Charcoal: var(--color-bg-alt)
// Dark Grey: var(--color-border)
// Gold Accent: var(--color-accent)
// Light Gold Hover: var(--color-accent-hover)
// White: var(--color-text)
// Muted Text: var(--color-text-muted)

type Leader = {
  slug: string;
  name: string;
  role: string;
  shortRole: string;
  icon: any;
  image: string;
  bio: string[]; // paragraphs
  education: string[];
  highlights: string[];
};

const leaders: Leader[] = [
  {
    slug: "joseph-arthur-dick",
    name: "Joseph Arthur Dick",
    role: "Managing Director & Chief Executive Officer",
    shortRole: "MD & CEO",
    icon: Building2,
    image: leader1,
    bio: [
      "Joe is the Managing Director of NYIN Minerals Ltd and the Chief Executive Officer of NYIN International FZCO, a Dubai-headquartered gold trading and mining finance company. With over 15 years of experience across global financial markets, Joe brings a rare combination of institutional trading discipline and on-the-ground insight into Africa's gold sector.",
      "Before founding NYIN's operating companies, Joe managed a multi-million dollar risk book in Asian corporate credit at Vantage Capital Markets in Hong Kong, specializing in credit markets, equity derivatives, and cash equities. This experience sharpened his ability to assess risk, structure complex transactions, and deploy capital with precision.",
      "At NYIN International FZCO, Joe has translated that financial expertise into practical, asset-backed solutions for the mining industry. He leads the company's three core business lines — bullion brokerage and trading, streaming and royalties, and mining advisory and capital solutions — with a focus on transparency, compliance, and shared value.",
      "Joe's direct engagement with small- and medium-scale gold miners across Africa gave him a firsthand understanding of the funding and operational gaps that constrain production. This insight drives his commitment to building strategic partnerships across the mining value chain, delivering non-dilutive financing, market access, and exit advisory services that empower miners and attract institutional capital to the continent.",
    ],
    education: [
      "Bachelor's in International Finance and Capital Markets — University of Brighton",
      "Master's in Quantitative Finance — Westminster Business School",
    ],
    highlights: [
      "15+ years across global financial markets",
      "Former Asian corporate credit risk lead at Vantage Capital Markets",
      "Leads all three NYIN business lines",
    ],
  },
  {
    slug: "emmanuel-conduah",
    name: "Emmanuel Conduah, CPA",
    role: "Chief Investment Officer",
    shortRole: "CIO",
    icon: TrendingUp,
    image: leader2,
    bio: [
      "Emmanuel Conduah, CPA, serves as the Chief Investment Officer of NYIN International FZCO, where he oversees investment strategy, capital deployment, and portfolio risk management across the company's three core divisions: bullion trading, streaming and royalties, and mining advisory.",
      "Emmanuel brings over a decade of senior financial leadership experience, including a distinguished tenure at Caterpillar Inc., where he developed deep expertise in heavy equipment manufacturing, asset-backed finance, and operational risk assessment. His background spans multiple sectors — including healthcare, agribusiness, and governmental finance — providing him with a uniquely broad perspective on capital-intensive industries.",
      "Prior to joining NYIN, Emmanuel served as CFO and COO of RPS Oncology, where he delivered strategic financial solutions to complex business challenges. He is also a co-founder of the SIPAB initiative, a platform dedicated to fostering sustainable growth partnerships for hundreds of SMEs across Ghana and the broader African continent. This work reflects his ongoing commitment to strengthening African enterprise through responsible investment and operational support.",
      "At NYIN International FZCO, Emmanuel applies his rigorous analytical background to evaluate mining assets, structure streaming and royalty agreements, and lead due diligence for potential investments and advisory mandates. His blend of corporate finance discipline, cross-industry insight, and on-the-ground knowledge of African markets positions him as a key driver of NYIN's investment decisions.",
    ],
    education: [
      "Bachelor's in Accounting — Minnesota State University",
      "Certified Public Accountant (CPA)",
    ],
    highlights: [
      "10+ years senior financial leadership",
      "Former roles at Caterpillar Inc. and RPS Oncology",
      "Co-founder of SIPAB initiative for African SMEs",
    ],
  },
  {
    slug: "terrence",
    name: "Terrence",
    role: "Chief Financial Officer",
    shortRole: "CFO",
    icon: ShieldCheck,
    image: leader3,
    bio: [
      "Terrence serves as Chief Financial Officer of NYIN International FZCO, where he oversees all finance, risk, and administration functions. He is responsible for financial planning, internal controls, regulatory compliance, and risk frameworks across the company's three core business lines: bullion trading, streaming and royalties, and mining advisory.",
      "Terrence began his career at the Databank Group, where he developed foundational expertise in financial reporting and analysis. He then moved to First Atlantic Asset Management and Brokers as Risk & Compliance Manager, implementing robust risk assessment frameworks, anti-money laundering (AML) protocols, and compliance programs aligned with SEC and Ghana Stock Exchange (GSE) requirements.",
      "His leadership experience expanded through roles as Internal Control Officer at First Atlantic Bank and Finance Manager at Equipall Ghana Ltd, a mining support and equipment leasing company. At Equipall, he strengthened financial controls, improved operational efficiency, and gained direct insight into the financial dynamics of the mining services sector — knowledge he now applies to NYIN's streaming and advisory operations.",
      "Terrence brings a blended expertise in financial governance, risk management, and regulatory compliance, ensuring that NYIN International FZCO operates with financial integrity and full adherence to international and local standards.",
    ],
    education: ["Degree in Business Finance and Economics — University of East Anglia"],
    highlights: [
      "AML & SEC/GSE compliance specialist",
      "Mining-sector finance experience at Equipall Ghana",
      "Built risk frameworks at First Atlantic",
    ],
  },
  {
    slug: "selorm-afudego",
    name: "Selorm Afudego",
    role: "Chief Operating Officer",
    shortRole: "COO",
    icon: Cog,
    image: leader4,
    bio: [
      "Selorm Afudego serves as Chief Operating Officer of NYIN International FZCO, where he oversees the company's day-to-day operations, logistics coordination, supply chain management, and administrative functions. His role focuses exclusively on non-investment activities, ensuring seamless execution across bullion trading, off-take logistics, and streaming agreement administration.",
      "With over a decade of experience in sales, trading, and capital markets, Selorm brings a strong operational discipline to NYIN. Prior to joining the company, he held key positions at the Databank Group in Ghana, including Head of Fixed Income and Manager of Sales and Trading. In these roles, he managed the execution of trading strategies, supervised sales and back-office operations, and coordinated primary and secondary market transactions for government and corporate bonds.",
      "Selorm is a Registered Securities Dealer of the Ghana Stock Exchange and contributed to the deal team for the Agricultural Development Bank's (ADB) GHS 1.6 billion rights issue. Beyond financial services, he founded Farmgate Resources Ltd, an agribusiness venture that addresses supply gaps in key agricultural commodities in Ghana — experience that sharpened his operational acumen in logistics, procurement, and local supply chains.",
    ],
    education: ["Bachelor of Science in Mathematics — University of Ghana"],
    highlights: [
      "Registered Securities Dealer (Ghana Stock Exchange)",
      "Former Head of Fixed Income, Databank Group",
      "Contributed to ADB's GHS 1.6 billion rights issue",
    ],
  },
];

// Selorm has a specific list of responsibilities — render them only on his card
const selormResponsibilities = [
  "Managing gold collection and transport logistics",
  "Overseeing customs, export compliance, and documentation",
  "Coordinating with logistics partners for secure air freight and insurance",
  "Supervising back-office operations, settlements, and administrative systems",
  "Ensuring efficient execution of streaming and royalty agreements",
];

export default function Leadership() {
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
        <Link
          to="/about"
          className="inline-flex items-center gap-2 mb-8 text-xs tracking-[0.2em] uppercase transition-all"
          style={{ color: "#B5B5B5" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#B5B5B5")}
        >
          <ArrowLeft size={14} />
          Back to About
        </Link>

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
            The People Behind Us
          </div>
          <h1
            className="mb-8 text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
            style={{
              color: "#FFFFFF",
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            <span style={{ color: "var(--color-accent)" }}>Leadership</span> Team
          </h1>
          <div
            className="w-16 h-px mb-8"
            style={{ backgroundColor: "var(--color-accent)" }}
          ></div>
          <p
            className="text-lg leading-relaxed"
            style={{
              color: "#E5E5E5",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            Experienced professionals with deep expertise in gold markets, mining finance, and African operations. Together, they bring institutional rigor and on-the-ground insight to every transaction NYIN executes.
          </p>
        </div>

        {/* Quick-jump nav */}
        <div className="mt-12 flex flex-wrap gap-3">
          {leaders.map((leader) => (
            <a
              key={leader.slug}
              href={`#${leader.slug}`}
              className="px-4 py-2 text-xs tracking-[0.15em] uppercase transition-all"
              style={{
                backgroundColor: "rgba(11, 11, 11, 0.5)",
                border: "1px solid var(--color-accent-strong)",
                color: "#E5E5E5",
                borderRadius: "2px",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.color = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent-strong)";
                e.currentTarget.style.color = "#E5E5E5";
              }}
            >
              {leader.shortRole} — {leader.name.split(",")[0].split(" ").slice(0, 2).join(" ")}
            </a>
          ))}
        </div>
      </HeroVideo>

      {/* ============ LEADER PROFILES ============ */}
      {leaders.map((leader, idx) => {
        const Icon = leader.icon;
        const isEven = idx % 2 === 0;
        const sectionBg = isEven ? "var(--color-bg)" : "var(--color-bg-alt)";
        const cardBg = isEven ? "var(--color-bg-alt)" : "var(--color-bg)";

        return (
          <section
            key={leader.slug}
            id={leader.slug}
            className="py-24 scroll-mt-20"
            style={{ backgroundColor: sectionBg }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Portrait — alternates left/right */}
                <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
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
                        aspectRatio: "4 / 5",
                      }}
                    >
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                          filter: "grayscale(0.2) brightness(0.85) contrast(1.05)",
                        }}
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(11,11,11,0) 60%, rgba(11,11,11,0.85) 100%)",
                        }}
                      ></div>
                      {/* Role badge bottom-left */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div
                          className="inline-block px-3 py-1.5 text-xs tracking-[0.2em] uppercase mb-2"
                          style={{
                            backgroundColor: "rgba(11, 11, 11, 0.7)",
                            color: "var(--color-accent)",
                            border: "1px solid var(--color-accent-medium)",
                            borderRadius: "2px",
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          {leader.shortRole}
                        </div>
                      </div>
                    </div>

                    {/* Highlights below portrait */}
                    <div className="mt-8 space-y-3">
                      {leader.highlights.map((hl, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-3 p-3"
                          style={{
                            backgroundColor: cardBg,
                            border: "1px solid var(--color-border)",
                            borderRadius: "4px",
                          }}
                        >
                          <Award
                            style={{ color: "var(--color-accent)" }}
                            size={16}
                            className="shrink-0 mt-0.5"
                          />
                          <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bio Content */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div
                    className="inline-flex items-center gap-2 mb-4 text-xs tracking-[0.3em] uppercase"
                    style={{ color: "var(--color-accent)" }}
                  >
                    <Icon size={14} />
                    {leader.role}
                  </div>
                  <h2
                    className="mb-3 text-3xl md:text-4xl lg:text-5xl font-light leading-tight"
                    style={{ color: "var(--color-text)" }}
                  >
                    {leader.name}
                  </h2>
                  <div
                    className="w-16 h-px mb-8"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  ></div>

                  <div className="space-y-5">
                    {leader.bio.map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className="leading-relaxed"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Selorm's responsibilities (only him) */}
                  {leader.slug === "selorm-afudego" && (
                    <div
                      className="mt-8 p-6"
                      style={{
                        backgroundColor: cardBg,
                        border: "1px solid var(--color-border)",
                        borderRadius: "4px",
                      }}
                    >
                      <div
                        className="text-xs tracking-[0.3em] uppercase mb-3"
                        style={{ color: "var(--color-accent)" }}
                      >
                        Key Responsibilities at NYIN
                      </div>
                      <div
                        className="w-8 h-px mb-4"
                        style={{ backgroundColor: "var(--color-accent-medium)" }}
                      ></div>
                      <ul className="space-y-2">
                        {selormResponsibilities.map((r, rIdx) => (
                          <li
                            key={rIdx}
                            className="flex items-start gap-3 text-sm"
                            style={{ color: "var(--color-text-muted)" }}
                          >
                            <span
                              className="shrink-0 mt-1.5 w-1 h-1 rounded-full"
                              style={{ backgroundColor: "var(--color-accent)" }}
                            ></span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Education */}
                  <div
                    className="mt-8 p-6"
                    style={{
                      backgroundColor: cardBg,
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-9 h-9 flex items-center justify-center"
                        style={{
                          backgroundColor: "var(--color-accent-soft)",
                          border: "1px solid var(--color-accent-strong)",
                          borderRadius: "4px",
                        }}
                      >
                        <GraduationCap style={{ color: "var(--color-accent)" }} size={18} />
                      </div>
                      <div
                        className="text-xs tracking-[0.3em] uppercase"
                        style={{ color: "var(--color-accent)" }}
                      >
                        Education & Credentials
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {leader.education.map((edu, eIdx) => (
                        <li
                          key={eIdx}
                          className="flex items-start gap-3 text-sm"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          <span
                            className="shrink-0 mt-1.5 w-1 h-1 rounded-full"
                            style={{ backgroundColor: "var(--color-accent)" }}
                          ></span>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connect placeholder */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.15em] uppercase transition-all"
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-text-muted)",
                        borderRadius: "2px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-accent)";
                        e.currentTarget.style.color = "var(--color-accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border)";
                        e.currentTarget.style.color = "var(--color-text-muted)";
                      }}
                    >
                      <Linkedin size={13} />
                      LinkedIn
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.15em] uppercase transition-all"
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-text-muted)",
                        borderRadius: "2px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-accent)";
                        e.currentTarget.style.color = "var(--color-accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border)";
                        e.currentTarget.style.color = "var(--color-text-muted)";
                      }}
                    >
                      <Mail size={13} />
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ============ FINAL CTA ============ */}
      <section
        className="py-24"
        style={{
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-accent-line)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-block mb-4 text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            Work With Our Team
          </div>
          <h2
            className="mb-6 text-3xl md:text-4xl lg:text-5xl font-light leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            Ready to <span style={{ color: "var(--color-accent)" }}>connect</span>?
          </h2>
          <div
            className="w-16 h-px mx-auto mb-6"
            style={{ backgroundColor: "var(--color-accent)" }}
          ></div>
          <p className="mb-10 text-lg leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            Whether you're a mine owner, investor, or trading counterparty, our leadership team is available to discuss how NYIN can support your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 transition-all duration-300 tracking-[0.2em] uppercase text-sm font-medium"
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
        </div>
      </section>
    </div>
  );
}