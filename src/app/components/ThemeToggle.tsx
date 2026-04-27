import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-flex items-center justify-center w-10 h-10 transition-all ${className}`}
      style={{
        backgroundColor: "transparent",
        border: "1px solid var(--color-border)",
        borderRadius: "4px",
        color: "var(--color-accent)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-accent)";
        e.currentTarget.style.backgroundColor = "var(--color-accent-soft)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      {/* Animated icon swap */}
      <Sun
        size={16}
        className="absolute transition-all"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? "rotate(-90deg) scale(0.5)" : "rotate(0) scale(1)",
        }}
      />
      <Moon
        size={16}
        className="absolute transition-all"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? "rotate(0) scale(1)" : "rotate(90deg) scale(0.5)",
        }}
      />
    </button>
  );
}