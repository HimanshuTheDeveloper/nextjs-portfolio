"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("light", stored === "light");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial: "dark" | "light" = prefersDark ? "dark" : "dark"; // dark-first aesthetic by default
      setTheme(initial);
      document.documentElement.classList.toggle("light", false);
    }
  }, []);

  const toggleTheme = () => {
    const next: "dark" | "light" = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("light", next === "light");
  };

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme placeholder"
        className="p-2.5 rounded-xl border border-slate-700/60 bg-slate-900/60 text-slate-400"
      >
        <Moon className="w-4 h-4 opacity-0" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="p-2.5 rounded-xl border border-slate-700/60 bg-slate-900/60 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-200"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-blue-600 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
