import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import BetaFooter from "./BetaFooter";
import BetaNavigation from "./BetaNavigation";
import "./BetaShell.css";

export type BetaTheme = "light" | "dark";

function getInitialTheme(): BetaTheme {
  const stored = window.localStorage.getItem("wnyhs-beta-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function BetaShell() {
  const [theme, setTheme] = useState<BetaTheme>(getInitialTheme);

  useEffect(() => {
    window.localStorage.setItem("wnyhs-beta-theme", theme);
  }, [theme]);

  return (
    <div className="beta-site" data-theme={theme}>
      <a className="beta-skip-link" href="#beta-main">
        Skip to main content
      </a>
      <BetaNavigation theme={theme} onThemeChange={setTheme} />
      <main id="beta-main" tabIndex={-1}>
        <Outlet />
      </main>
      <BetaFooter />
    </div>
  );
}

export default BetaShell;
