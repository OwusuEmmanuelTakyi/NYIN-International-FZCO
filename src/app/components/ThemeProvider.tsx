import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "nyin-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* ignore */
  }
  return "dark"; // brand default
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  // Apply theme to <html data-theme="..."> so CSS variables take effect
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((t) => (t === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setTheme: setThemeState }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}