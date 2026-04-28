import { Link, useLocation, useNavigate } from "react-router";
import {
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Coins,
  Clock,
  Activity,
  Info,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

// Color palette
// Primary Black: var(--color-bg)
// Charcoal: var(--color-bg-alt)
// Dark Grey: var(--color-border)
// Gold Accent: var(--color-accent)
// Light Gold Hover: var(--color-accent-hover)
// White: var(--color-text)
// Muted Text: var(--color-text-muted)

type DropdownItem = { path: string; label: string };
type NavLink = { path: string; label: string; dropdown?: DropdownItem[] };

const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  {
    path: "/about",
    label: "About Us",
    dropdown: [
      { path: "/about#mission-vision-values", label: "Mission, Vision & Values" },
      { path: "/about#leadership-team", label: "Leadership Team" },
      
    ],
  },
  {
    path: "/streaming",
    label: "Streaming & Royalties",
    dropdown: [
      { path: "/streaming#sustainable-model", label: "Our Sustainable Model" },
      { path: "/streaming#how-it-works", label: "How It Works" },
      { path: "/streaming#why-partner", label: "Why Partner With Us" },
      { path: "/streaming#brokerage-trading", label: "Brokerage & Trading" },
      { path: "/streaming#esg", label: "Sustainable Mining Finance" },
    ],
  },
  { path: "/trading", label: "Trading & Execution" },
  { path: "/mining", label: "Mining Advisory & Capital Solutions" },
  { path: "/contact", label: "Contact Us" },
  //{ path: "/blog", label: "Blog" },
];

// =================== LIVE PRICE TICKER ===================

type Price = {
  symbol: string;
  name: string;
  price: number | null;
  prev: number | null;
  history: number[];      // last few prices for sparkline / day range
  sessionHigh: number | null;
  sessionLow: number | null;
  updatedAt: string | null;
};

// Static educational content shown in the popover (price-independent context)
const ASSET_INFO: Record<string, {
  fullName: string;
  description: string;
  unit: string;
  facts: { label: string; value: string }[];
}> = {
  XAU: {
    fullName: "Gold (XAU)",
    description:
      "The world's most enduring store of value. Gold is traded globally 23 hours a day, with the LBMA AM and PM auctions in London setting the most-watched benchmark prices.",
    unit: "USD per troy ounce",
    facts: [
      { label: "Symbol", value: "XAU / oz" },
      { label: "Benchmark", value: "LBMA London Fix" },
      { label: "Major Markets", value: "London · Zurich · Dubai · Hong Kong" },
      { label: "Trading Hours", value: "Sun 23:00 – Fri 22:00 GMT" },
    ],
  },
  XAG: {
    fullName: "Silver (XAG)",
    description:
      "Silver is both a precious metal and a critical industrial input — used in electronics, solar panels, and medicine. It typically trades with higher volatility than gold.",
    unit: "USD per troy ounce",
    facts: [
      { label: "Symbol", value: "XAG / oz" },
      { label: "Benchmark", value: "LBMA Silver Price" },
      { label: "Major Markets", value: "London · New York · Shanghai" },
      { label: "Gold/Silver Ratio", value: "Typically 60–90:1" },
    ],
  },
};

// Mini sparkline component built with inline SVG
function Sparkline({ data, isUp }: { data: number[]; isUp: boolean }) {
  if (data.length < 2) {
    return (
      <div
        className="h-12 flex items-center justify-center text-[10px] tracking-wider"
        style={{ color: "var(--color-text-muted)" }}
      >
        Collecting data…
      </div>
    );
  }
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 100;
  const h = 30;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
  const stroke = isUp ? "var(--color-accent)" : "var(--color-text-muted)";

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className="w-full h-12"
    >
      <defs>
        <linearGradient id="sparkfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.25" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={`0,${h} ${points} ${w},${h}`}
        fill="url(#sparkfill)"
        stroke="none"
      />
      <polyline
        points={points}
        fill="none"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PriceTicker() {
  const [prices, setPrices] = useState<Price[]>([
    {
      symbol: "XAU",
      name: "Gold",
      price: null,
      prev: null,
      history: [],
      sessionHigh: null,
      sessionLow: null,
      updatedAt: null,
    },
    {
      symbol: "XAG",
      name: "Silver",
      price: null,
      prev: null,
      history: [],
      sessionHigh: null,
      sessionLow: null,
      updatedAt: null,
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [openInsight, setOpenInsight] = useState<string | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setOpenInsight(null);
      }
    };
    if (openInsight) {
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }
  }, [openInsight]);

  // Close popover on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenInsight(null);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    let mounted = true;

    const fetchPrice = async (symbol: string): Promise<number | null> => {
      try {
        const res = await fetch(`https://api.gold-api.com/price/${symbol}`);
        if (!res.ok) return null;
        const data = await res.json();
        return typeof data.price === "number" ? data.price : null;
      } catch {
        return null;
      }
    };

    const fetchAll = async () => {
      const [gold, silver] = await Promise.all([
        fetchPrice("XAU"),
        fetchPrice("XAG"),
      ]);
      if (!mounted) return;

      setPrices((current) =>
        current.map((p) => {
          const newPrice = p.symbol === "XAU" ? gold : silver;
          if (newPrice === null) return p;

          const newHistory = [...p.history, newPrice].slice(-30);
          const sessionHigh =
            p.sessionHigh === null ? newPrice : Math.max(p.sessionHigh, newPrice);
          const sessionLow =
            p.sessionLow === null ? newPrice : Math.min(p.sessionLow, newPrice);

          return {
            ...p,
            prev: p.price,
            price: newPrice,
            history: newHistory,
            sessionHigh,
            sessionLow,
            updatedAt: new Date().toISOString(),
          };
        })
      );
      setLoading(false);
    };

    fetchAll();
    // Refresh every 60 seconds
    const interval = setInterval(fetchAll, 60_000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const formatPrice = (price: number | null) => {
    if (price === null) return "—";
    return price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formatTime = (iso: string | null) => {
    if (!iso) return "—";
    return new Date(iso).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const activeInsight = prices.find((p) => p.symbol === openInsight);

  return (
    <div
      className="relative w-full"
      style={{
        backgroundColor: "var(--color-bg)",
        borderBottom: "1px solid var(--color-accent-line)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-6 py-2 text-xs">
          {/* Left side — label */}
          <div
            className="hidden sm:flex items-center gap-2 tracking-[0.2em] uppercase"
            style={{ color: "var(--color-text-muted)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: loading ? "var(--color-text-muted)" : "var(--color-accent)",
                animation: loading ? "none" : "livePulse 2s ease-in-out infinite",
              }}
            ></span>
            Live Spot Prices
          </div>

          {/* Right side — price tickers (clickable).
              Mobile: only Gold shown, compact.
              Desktop (sm+): both Gold and Silver, full layout. */}
          <div className="flex items-center gap-1 sm:gap-3 ml-auto">
            {prices.map((p) => {
              const change =
                p.price !== null && p.prev !== null && p.prev !== p.price
                  ? p.price - p.prev
                  : 0;
              const isUp = change > 0;
              const isDown = change < 0;
              const isOpen = openInsight === p.symbol;
              // Hide Silver below sm breakpoint
              const hideOnMobile = p.symbol === "XAG";

              return (
                <button
                  key={p.symbol}
                  onClick={() =>
                    setOpenInsight(isOpen ? null : p.symbol)
                  }
                  className={`flex items-center gap-1.5 sm:gap-2 whitespace-nowrap px-2 sm:px-3 py-1 sm:py-1.5 transition-all text-[11px] sm:text-xs ${
                    hideOnMobile ? "hidden sm:flex" : "flex"
                  }`}
                  style={{
                    backgroundColor: isOpen
                      ? "var(--color-accent-soft)"
                      : "transparent",
                    border: `1px solid ${
                      isOpen ? "var(--color-accent)" : "transparent"
                    }`,
                    borderRadius: "2px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!isOpen) {
                      e.currentTarget.style.backgroundColor =
                        "rgba(201, 166, 70, 0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                  aria-label={`View ${p.name} price details`}
                  aria-expanded={isOpen}
                >
                  <span
                    className="tracking-[0.15em] uppercase"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {p.name}
                  </span>
                  <span style={{ color: "var(--color-text)" }} className="font-medium">
                    ${formatPrice(p.price)}
                    <span
                      className="ml-1 text-[9px] sm:text-[10px] hidden sm:inline"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      /oz
                    </span>
                  </span>
                  {/* Change delta — hidden on mobile to save space */}
                  {(isUp || isDown) && (
                    <span
                      className="hidden sm:flex items-center gap-0.5 text-[10px]"
                      style={{ color: isUp ? "var(--color-accent)" : "var(--color-text-muted)" }}
                    >
                      {isUp ? (
                        <TrendingUp size={10} />
                      ) : (
                        <TrendingDown size={10} />
                      )}
                      {Math.abs(change).toFixed(2)}
                    </span>
                  )}
                  <Info
                    size={10}
                    style={{
                      color: isOpen ? "var(--color-accent)" : "var(--color-text-muted)",
                      opacity: 0.6,
                    }}
                    className="sm:!w-[11px] sm:!h-[11px]"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Insight popover */}
      {activeInsight && (
        <div
          ref={popoverRef}
          className="absolute left-2 right-2 sm:left-auto sm:right-8 top-full mt-2 sm:w-[340px] z-[60] mx-auto sm:mx-0"
          style={{
            backgroundColor: "var(--color-bg-alt)",
            border: "1px solid var(--color-border)",
            borderRadius: "4px",
            boxShadow: "0 16px 48px rgba(0, 0, 0, 0.6)",
            animation: "fadeInDown 0.2s ease-out",
            maxWidth: "calc(100vw - 16px)",
          }}
        >
          {/* Top gold accent line */}
          <div
            className="h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)",
            }}
          ></div>

          <div className="p-5">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Coins style={{ color: "var(--color-accent)" }} size={16} />
                  <h3
                    className="text-base font-medium"
                    style={{ color: "var(--color-text)" }}
                  >
                    {ASSET_INFO[activeInsight.symbol].fullName}
                  </h3>
                </div>
                <div
                  className="text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {ASSET_INFO[activeInsight.symbol].unit}
                </div>
              </div>
              <button
                onClick={() => setOpenInsight(null)}
                className="p-1 transition-colors"
                style={{ color: "var(--color-text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>

            {/* Price headline */}
            <div className="mb-4">
              <div
                className="text-3xl font-light leading-none mb-1"
                style={{ color: "var(--color-accent)" }}
              >
                ${formatPrice(activeInsight.price)}
              </div>
              <div
                className="flex items-center gap-3 text-[11px]"
                style={{ color: "var(--color-text-muted)" }}
              >
                <span className="flex items-center gap-1">
                  <Clock size={10} />
                  {formatTime(activeInsight.updatedAt)}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Activity size={10} style={{ color: "var(--color-accent)" }} />
                  Live
                </span>
              </div>
            </div>

            {/* Sparkline */}
            <div className="mb-4">
              <div
                className="text-[10px] tracking-[0.2em] uppercase mb-1"
                style={{ color: "var(--color-text-muted)" }}
              >
                Recent Trend
              </div>
              <Sparkline
                data={activeInsight.history}
                isUp={
                  activeInsight.history.length >= 2 &&
                  activeInsight.history[activeInsight.history.length - 1] >=
                    activeInsight.history[0]
                }
              />
            </div>

            {/* Session high/low */}
            <div
              className="grid grid-cols-2 gap-3 mb-4 p-3"
              style={{
                backgroundColor: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "4px",
              }}
            >
              <div>
                <div
                  className="text-[10px] tracking-[0.2em] uppercase mb-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Session High
                </div>
                <div className="text-sm" style={{ color: "var(--color-text)" }}>
                  ${formatPrice(activeInsight.sessionHigh)}
                </div>
              </div>
              <div>
                <div
                  className="text-[10px] tracking-[0.2em] uppercase mb-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Session Low
                </div>
                <div className="text-sm" style={{ color: "var(--color-text)" }}>
                  ${formatPrice(activeInsight.sessionLow)}
                </div>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-xs leading-relaxed mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              {ASSET_INFO[activeInsight.symbol].description}
            </p>

            {/* Facts */}
            <div className="space-y-2 mb-4">
              {ASSET_INFO[activeInsight.symbol].facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex justify-between gap-3 text-[11px]"
                >
                  <span
                    className="tracking-wide"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {fact.label}
                  </span>
                  <span
                    className="text-right"
                    style={{ color: "var(--color-text)" }}
                  >
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div
              className="text-[10px] leading-relaxed pt-3"
              style={{
                color: "var(--color-text-muted)",
                borderTop: "1px solid var(--color-border)",
              }}
            >
              Spot prices shown for reference only. Refreshed every 60 seconds.
              Not a quote or solicitation to trade.
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes livePulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(201,166,70,0.6); }
          50% { opacity: 0.6; box-shadow: 0 0 0 4px rgba(201,166,70,0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

// =================== NAVIGATION ===================
export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>(
    {}
  );

  const handleDropdownClick = (path: string) => {
    const [route, hash] = path.split("#");
    navigate(route);
    setTimeout(() => {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  const toggleMobileDropdown = (path: string) => {
    setMobileDropdowns((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Live price ticker */}
      <PriceTicker />

      {/* Main nav */}
      <nav
        style={{
          backgroundColor: "var(--nav-bg)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <Logo size={44} variant="lockup" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.path)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      to={link.path}
                      className="text-sm transition-colors flex items-center gap-1 tracking-wide"
                      style={{
                        color:
                          location.pathname === link.path
                            ? "var(--color-accent)"
                            : "var(--color-text)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--color-accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          location.pathname === link.path
                            ? "var(--color-accent)"
                            : "var(--color-text)")
                      }
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className="transition-transform"
                        style={{
                          transform:
                            openDropdown === link.path
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                        }}
                      />
                    </Link>

                    {openDropdown === link.path && (
                      <div
                        className="absolute top-full left-0 mt-3 w-72 py-2 z-50"
                        style={{
                          backgroundColor: "var(--color-bg-alt)",
                          border: "1px solid var(--color-border)",
                          borderRadius: "4px",
                          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        <div
                          className="h-px mx-4 mb-2"
                          style={{
                            background:
                              "linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)",
                          }}
                        ></div>
                        {link.dropdown.map((item) => (
                          <button
                            key={item.path}
                            onClick={() => handleDropdownClick(item.path)}
                            className="w-full text-left px-5 py-2.5 text-sm transition-all"
                            style={{ color: "var(--color-text-muted)" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "var(--color-accent)";
                              e.currentTarget.style.backgroundColor =
                                "var(--color-accent-softer)";
                              e.currentTarget.style.paddingLeft = "24px";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "var(--color-text-muted)";
                              e.currentTarget.style.backgroundColor =
                                "transparent";
                              e.currentTarget.style.paddingLeft = "20px";
                            }}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm transition-colors tracking-wide"
                    style={{
                      color:
                        location.pathname === link.path
                          ? "var(--color-accent)"
                          : "var(--color-text)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        location.pathname === link.path
                          ? "var(--color-accent)"
                          : "var(--color-text)")
                    }
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Theme toggle + mobile menu button */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                className="lg:hidden"
                style={{ color: "var(--color-text)" }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden"
            style={{
              borderTop: "1px solid var(--color-border)",
              backgroundColor: "var(--color-bg)",
            }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.path}>
                    <div className="flex items-center justify-between">
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-3 text-sm flex-1 tracking-wide"
                        style={{
                          color:
                            location.pathname === link.path
                              ? "var(--color-accent)"
                              : "var(--color-text)",
                        }}
                      >
                        {link.label}
                      </Link>
                      <button
                        onClick={() => toggleMobileDropdown(link.path)}
                        className="p-2"
                        aria-label={`Toggle ${link.label} submenu`}
                      >
                        <ChevronDown
                          size={16}
                          style={{
                            color: "var(--color-accent)",
                            transform: mobileDropdowns[link.path]
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.2s",
                          }}
                        />
                      </button>
                    </div>
                    {mobileDropdowns[link.path] && (
                      <div
                        className="pl-4 ml-2 space-y-1 mb-2"
                        style={{
                          borderLeft: "1px solid var(--color-accent-strong)",
                        }}
                      >
                        {link.dropdown.map((item) => (
                          <button
                            key={item.path}
                            onClick={() => {
                              handleDropdownClick(item.path);
                            }}
                            className="block w-full text-left py-2 px-3 text-sm transition-colors"
                            style={{ color: "var(--color-text-muted)" }}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 text-sm tracking-wide"
                    style={{
                      color:
                        location.pathname === link.path
                          ? "var(--color-accent)"
                          : "var(--color-text)",
                    }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}