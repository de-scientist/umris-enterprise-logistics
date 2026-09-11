import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/* eslint-disable react-refresh/only-export-components -- theme engine: provider + helpers by design */

/* ============================================================
   THEME ENGINE — frontend-only, SSR-safe by design
   ------------------------------------------------------------
   Logical states: "light" | "dark" | "system".
   - First visit (no saved choice) → follows prefers-color-scheme.
   - Explicit choice → persisted to localStorage ("umris-theme").
   - Returning visit → saved preference wins over system.
   - System changes are followed only while preference is "system".
   The resolved value is mirrored to <html data-theme="..."> so
   ALL styling flows through CSS semantic tokens — components
   never need theme props. An inline script in index.html sets
   data-theme pre-paint to prevent any theme flash.
   ============================================================ */

export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "umris-theme";

const THEME_COLORS: Record<ResolvedTheme, string> = {
  light: "#ffffff",
  dark: "#0a0f1c",
};

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readStoredPreference(): ThemePreference {
  try {
    const v = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (v === "light" || v === "dark" || v === "system") return v;
  } catch {
    /* storage unavailable (private mode) — fall through to system */
  }
  return "system";
}

function resolvePreference(pref: ThemePreference): ResolvedTheme {
  return pref === "system" ? getSystemTheme() : pref;
}

/** Apply the resolved theme to the document (attribute + chrome). */
export function applyTheme(resolved: ResolvedTheme): void {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", resolved);
  const meta = document.head.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", THEME_COLORS[resolved]);
}

interface ThemeContextValue {
  /** Explicit user preference ("system" = follow OS). */
  preference: ThemePreference;
  /** Effective theme currently applied. */
  resolved: ResolvedTheme;
  setPreference: (p: ThemePreference) => void;
  /** Flip light ↔ dark and persist the explicit choice. */
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  preference: "system",
  resolved: "light",
  setPreference: () => {},
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>("system");
  const [resolved, setResolved] = useState<ResolvedTheme>("light");
  const [hydrated, setHydrated] = useState(false);

  // Initialise from storage/system on mount (client-only, no SSR mismatch:
  // first render matches pre-paint script output via data-theme attr).
  useEffect(() => {
    const stored = readStoredPreference();
    setPreferenceState(stored);
    const r = resolvePreference(stored);
    setResolved(r);
    applyTheme(r);
    setHydrated(true);
  }, []);

  // Follow OS changes only while the user hasn't chosen explicitly.
  useEffect(() => {
    if (!hydrated || preference !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const r = getSystemTheme();
      setResolved(r);
      applyTheme(r);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [hydrated, preference]);

  const setPreference = useCallback((p: ThemePreference) => {
    setPreferenceState(p);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, p);
    } catch {
      /* ignore storage failures */
    }
    const r = resolvePreference(p);
    setResolved(r);
    applyTheme(r);
  }, []);

  const toggle = useCallback(() => {
    setPreferenceState((prev) => {
      const current = prev === "system" ? getSystemTheme() : prev;
      const next: ResolvedTheme = current === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        /* ignore storage failures */
      }
      setResolved(next);
      applyTheme(next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ preference, resolved, setPreference, toggle }),
    [preference, resolved, setPreference, toggle]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
