import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import '../theme/tokens.css';
import '../theme/presets/theme-warm-bronze.css';
import './NewSiteLayout.css';

const NewSiteLayout = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.search, location.hash]);

  return (
    <div className="newsite-theme newsite-app">
      <header className="newsite-nav">
        <div className="newsite-container newsite-nav-bar">
          <NavLink to="/newsite" className="newsite-brand" aria-label="WNY Home Security NewSite home">
            <span className="newsite-brand-mark" aria-hidden="true">
              WNY
            </span>
            <span>WNY Home Security</span>
          </NavLink>
          <div className="newsite-nav-actions">
            <a className="newsite-call-cta" href="tel:17163912405">
              (716) 391-2405
            </a>
            <button
              type="button"
              className="newsite-menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="newsite-nav-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
        <div id="newsite-nav-menu" className={`newsite-nav-menu${menuOpen ? ' is-open' : ''}`}>
          <nav className="newsite-container newsite-nav-links" aria-label="NewSite primary navigation">
            <details className="newsite-dropdown">
              <summary>Packages</summary>
              <div className="newsite-dropdown-panel">
                <NavLink to="/newsite/home-security/packages">All packages</NavLink>
                <NavLink to="/newsite/home-security/packages/bronze">Bronze package</NavLink>
                <NavLink to="/newsite/home-security/packages/silver">Silver package</NavLink>
                <NavLink to="/newsite/home-security/packages/gold">Gold package</NavLink>
              </div>
            </details>
            <details className="newsite-dropdown">
              <summary>How it works</summary>
              <div className="newsite-dropdown-panel">
                <NavLink to="/newsite#overview">Overview</NavLink>
                <NavLink to="/newsite#fit-check">Fit Check</NavLink>
                <NavLink to="/newsite#planner">Precision Planner (Advanced)</NavLink>
                <NavLink to="/newsite/demos">Demos</NavLink>
              </div>
            </details>
            <NavLink to="/newsite#pricing">Pricing</NavLink>
            <NavLink to="/newsite#faq">FAQ</NavLink>
            <NavLink to="/newsite#contact">Contact</NavLink>
            <details className="newsite-dropdown">
              <summary>Get Started</summary>
              <div className="newsite-dropdown-panel">
                <NavLink to="/quote">Start online quote</NavLink>
                <NavLink to="/home-security/pay-deposit">Pay deposit</NavLink>
                <NavLink to="/contact">Request callback</NavLink>
                <NavLink to="/schedule">Request on-site quote</NavLink>
              </div>
            </details>
          </nav>
        </div>
      </header>
      <main className="newsite-main">
        <Outlet />
      </main>
      <footer className="newsite-footer">
        <div className="newsite-container">
          <div className="newsite-footer-links">
            <NavLink to="/privacy">Privacy</NavLink>
            <NavLink to="/terms">Terms</NavLink>
            <NavLink to="/support">Support</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className="newsite-footer-meta">
            Premium security experiences tailored for Western New York households.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewSiteLayout;
