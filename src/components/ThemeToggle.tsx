import { useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return "dark";
  });

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="btn-secondary text-sm"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}

export function initTheme(): void {
  const stored = localStorage.getItem("theme");
  const theme = stored === "light" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", theme);
}
