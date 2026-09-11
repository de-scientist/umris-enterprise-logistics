import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "../../lib/theme";

/**
 * Theme toggle — icon control driven entirely by the global theme
 * engine. No theme props; presentation inherits semantic tokens.
 * Full keyboard support via native <button> + visible focus ring.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolved, toggle } = useTheme();
  const isDark = resolved === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className={`theme-toggle ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-toggle__icons" aria-hidden="true">
        <FaSun className="theme-toggle__sun" />
        <FaMoon className="theme-toggle__moon" />
      </span>
    </button>
  );
}
