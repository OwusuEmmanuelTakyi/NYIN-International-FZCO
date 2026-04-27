import { type ReactNode } from "react";

type HeroVideoProps = {
  /** Array of video source URLs. Browser will play the first one that loads. */
  sources: string[];
  /** Fallback poster image shown while videos load (or if all fail). */
  poster?: string;
  /** Hero content (headline, badges, CTAs, etc.) */
  children: ReactNode;
  /** Optional minimum height. Defaults to 100vh for true hero. Use a smaller value (e.g. "70vh") for inner-page heroes. */
  minHeight?: string;
};

/**
 * Reusable video-background hero used across all pages.
 * - Auto-plays muted, looped video
 * - Multi-layer dark overlay for premium feel and text legibility
 * - Subtle gold radial accent
 * - Falls back to poster image if videos fail
 */
export default function HeroVideo({
  sources,
  poster,
  children,
  minHeight = "70vh",
}: HeroVideoProps) {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight }}
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.55) contrast(1.1) saturate(1.1)" }}
        >
          {sources.map((src, idx) => (
            <source key={idx} src={src} type="video/mp4" />
          ))}
        </video>

        {/* Multi-layer overlay (always dark — for text legibility against video) */}
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        {children}
      </div>
    </section>
  );
}