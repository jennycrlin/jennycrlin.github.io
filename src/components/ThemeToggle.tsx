"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      className="theme-btn"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title="Toggle dark mode"
    >
      {mounted ? (theme === "dark" ? "☽" : "☀") : "☀"}
    </button>
  );
}
