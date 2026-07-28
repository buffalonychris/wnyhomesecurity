import {
  useEffect,
  useId,
  useRef,
  useState,
  type Dispatch,
  type KeyboardEvent,
  type SetStateAction,
} from "react";
import { Link, useLocation } from "react-router-dom";
import type { BetaTheme } from "./BetaShell";
import {
  assessmentHref,
  betaPrimaryNavigation,
  betaSolutionNavigation,
  solutionsOverviewHref,
  type BetaNavigationItem,
} from "./navigation";

type Props = {
  theme: BetaTheme;
  onThemeChange: Dispatch<SetStateAction<BetaTheme>>;
};

function isActive(item: BetaNavigationItem, pathname: string, hash: string) {
  if (!item.href) return false;
  const [path, destinationHash = ""] = item.href.split("#");
  return (
    path === pathname && (!destinationHash || `#${destinationHash}` === hash)
  );
}

function Destination({
  item,
  className,
  onNavigate,
}: {
  item: BetaNavigationItem;
  className?: string;
  onNavigate?: () => void;
}) {
  if (!item.href) {
    return (
      <span className={className} aria-disabled="true">
        <span>{item.label}</span>
        {item.description && <small>{item.description}</small>}
        <em>Destination in development</em>
      </span>
    );
  }
  return (
    <Link className={className} to={item.href} onClick={onNavigate}>
      <span>{item.label}</span>
      {item.description && <small>{item.description}</small>}
    </Link>
  );
}

function BetaNavigation({ theme, onThemeChange }: Props) {
  const location = useLocation();
  const solutionsActive = location.pathname.startsWith(solutionsOverviewHref);
  const solutionsId = useId();
  const mobileId = useId();
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(true);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);
  const solutionsPanelRef = useRef<HTMLDivElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const mobileSheetRef = useRef<HTMLDivElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!solutionsOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (
        !solutionsPanelRef.current?.contains(event.target as Node) &&
        !solutionsButtonRef.current?.contains(event.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [solutionsOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    const main = document.getElementById("beta-main");
    const footer = document.querySelector(".beta-footer");
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    mobileCloseRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    window.requestAnimationFrame(() => mobileButtonRef.current?.focus());
  };

  const handleDesktopKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && solutionsOpen) {
      setSolutionsOpen(false);
      solutionsButtonRef.current?.focus();
    }
  };

  const handleMobileKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMobile();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = Array.from(
      mobileSheetRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ) ?? [],
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const toggleTheme = () => onThemeChange(theme === "light" ? "dark" : "light");

  return (
    <header className="beta-header">
      <div className="beta-shell beta-header__inner">
        <Link
          className="beta-brand"
          to="/beta"
          aria-label="W. N. Y. Home Security beta home"
        >
          <img src="/brand/IconFinalHQ.jpg" width="52" height="53" alt="" />
          <span>
            <strong>W. N. Y. Home Security</strong>
            <small>One property. One designed system.</small>
          </span>
        </Link>

        <nav
          className="beta-primary-nav"
          aria-label="Replacement site navigation"
          onKeyDown={handleDesktopKeyDown}
        >
          <div className="beta-solutions-nav">
            <button
              ref={solutionsButtonRef}
              type="button"
              aria-expanded={solutionsOpen}
              aria-current={solutionsActive ? "page" : undefined}
              aria-controls={solutionsId}
              onClick={() => setSolutionsOpen((value) => !value)}
            >
              Solutions <span aria-hidden="true">⌄</span>
            </button>
            <div
              ref={solutionsPanelRef}
              id={solutionsId}
              className={`beta-solutions-menu${solutionsOpen ? " beta-solutions-menu--open" : ""}`}
              hidden={!solutionsOpen}
            >
              <div className="beta-solutions-menu__intro">
                <p className="beta-eyebrow">One designed property system</p>
                <strong>Explore connected solutions</strong>
                <p>
                  Start with one priority or connect several around the way your
                  property works.
                </p>
                <Link
                  to={solutionsOverviewHref}
                  onClick={() => setSolutionsOpen(false)}
                >
                  View all solutions →
                </Link>
              </div>
              <div className="beta-solutions-menu__grid">
                {betaSolutionNavigation.map((item) => (
                  <Destination
                    key={item.label}
                    item={item}
                    className="beta-solution-link"
                    onNavigate={() => setSolutionsOpen(false)}
                  />
                ))}
              </div>
              <div className="beta-solutions-menu__action">
                <p>Not sure where to begin?</p>
                <Link
                  className="beta-action beta-action--compact"
                  to={assessmentHref}
                  onClick={() => setSolutionsOpen(false)}
                >
                  Request a Property Assessment
                </Link>
              </div>
            </div>
          </div>
          {betaPrimaryNavigation.map((item) => (
            <Destination
              key={item.label}
              item={item}
              className={
                isActive(item, location.pathname, location.hash)
                  ? "is-active"
                  : undefined
              }
            />
          ))}
        </nav>

        <div className="beta-header__actions">
          <button
            className="beta-theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            onClick={toggleTheme}
          >
            <span aria-hidden="true">{theme === "light" ? "◐" : "◑"}</span>
            <span>{theme === "light" ? "Dark" : "Light"}</span>
          </button>
          <Link
            className="beta-action beta-action--compact"
            to={assessmentHref}
          >
            Request a Property Assessment
          </Link>
        </div>

        <button
          ref={mobileButtonRef}
          className="beta-mobile-trigger"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls={mobileId}
          onClick={() => setMobileOpen(true)}
        >
          Menu
        </button>
      </div>

      {mobileOpen && (
        <div className="beta-mobile-backdrop">
          <div
            ref={mobileSheetRef}
            id={mobileId}
            className="beta-mobile-sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Replacement site navigation"
            onKeyDown={handleMobileKeyDown}
          >
            <div className="beta-mobile-sheet__header">
              <span>
                <strong>W. N. Y. Home Security</strong>
                <small>Navigation</small>
              </span>
              <button
                ref={mobileCloseRef}
                type="button"
                aria-label="Close navigation"
                onClick={closeMobile}
              >
                Close
              </button>
            </div>
            <nav aria-label="Mobile replacement site navigation">
              <Link
                className="beta-mobile-home"
                to="/beta"
                onClick={closeMobile}
              >
                Home
              </Link>
              <button
                className="beta-mobile-disclosure"
                type="button"
                aria-expanded={mobileSolutionsOpen}
                onClick={() => setMobileSolutionsOpen((value) => !value)}
              >
                Solutions{" "}
                <span aria-hidden="true">
                  {mobileSolutionsOpen ? "−" : "+"}
                </span>
              </button>
              {mobileSolutionsOpen && (
                <div className="beta-mobile-solutions">
                  <Link
                    to={solutionsOverviewHref}
                    aria-current={solutionsActive ? "page" : undefined}
                    onClick={closeMobile}
                  >
                    Explore all solutions
                  </Link>
                  {betaSolutionNavigation.map((item) => (
                    <Destination
                      key={item.label}
                      item={item}
                      onNavigate={closeMobile}
                    />
                  ))}
                </div>
              )}
              {betaPrimaryNavigation.map((item) => (
                <Destination
                  key={item.label}
                  item={item}
                  onNavigate={closeMobile}
                />
              ))}
            </nav>
            <div className="beta-mobile-sheet__actions">
              <button
                className="beta-theme-toggle"
                type="button"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
                onClick={toggleTheme}
              >
                <span aria-hidden="true">{theme === "light" ? "◐" : "◑"}</span>
                <span>{theme === "light" ? "Dark theme" : "Light theme"}</span>
              </button>
              <Link
                className="beta-action"
                to={assessmentHref}
                onClick={closeMobile}
              >
                Request a Property Assessment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default BetaNavigation;
