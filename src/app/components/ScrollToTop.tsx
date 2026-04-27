import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Floating "back to top" button.
 * - Appears after the user scrolls down past a threshold (default 400px)
 * - Smooth-scrolls to top on click
 * - Fades in/out gracefully
 * - Themed to match the gold accent palette
 */
export default function ScrollToTop({
  threshold = 400,
}: {
  threshold?: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > threshold);
    };
    onScroll(); // run once in case page loads scrolled
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      title="Back to top"
      className="fixed z-40 flex items-center justify-center transition-all duration-300"
      style={{
        bottom: "24px",
        right: "24px",
        width: "48px",
        height: "48px",
        backgroundColor: "var(--color-accent)",
        color: "var(--color-text-on-accent)",
        border: "1px solid var(--color-accent)",
        borderRadius: "50%",
        boxShadow: "0 8px 24px var(--color-accent-strong)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.85)",
        pointerEvents: visible ? "auto" : "none",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "var(--color-accent-hover)";
        e.currentTarget.style.borderColor = "var(--color-accent-hover)";
        e.currentTarget.style.transform = "translateY(-4px) scale(1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "var(--color-accent)";
        e.currentTarget.style.borderColor = "var(--color-accent)";
        e.currentTarget.style.transform = "translateY(0) scale(1)";
      }}
    >
      <ArrowUp size={20} strokeWidth={2.5} />

      {/* Subtle gold pulse ring */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          border: "1px solid var(--color-accent)",
          animation: visible ? "scrollToTopPulse 2.5s ease-out infinite" : "none",
          opacity: 0,
        }}
      ></span>

      <style>{`
        @keyframes scrollToTopPulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </button>
  );
}