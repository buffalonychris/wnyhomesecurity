import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { brandHomeSecurity } from '../../lib/brand';

type WnyHomeSecurityNavProps = {
  ctaLink?: string;
  pathParam?: string;
};

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  ['wny-hs-nav-link', isActive ? 'is-active' : null].filter(Boolean).join(' ');

const WnyHomeSecurityNav = ({ pathParam = '' }: WnyHomeSecurityNavProps) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.search]);

  const fitCheckLink = `/discovery?vertical=home-security${pathParam}`;

  return (
    <header className="wny-hs-nav">
      <div className="wny-hs-nav-bar">
        <NavLink to="/" className="wny-hs-brand" aria-label={`${brandHomeSecurity} home`}>
          <span className="wny-hs-brand-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <path
                d="M12 2l7 3v6c0 5-3.2 9.3-7 11-3.8-1.7-7-6-7-11V5l7-3z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path d="M9.2 12.5l2 2.1 3.7-4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          <span>{brandHomeSecurity}</span>
        </NavLink>
        <div className="wny-hs-nav-actions">
          <button
            type="button"
            className="wny-hs-nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="wny-hs-nav-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      <div id="wny-hs-nav-menu" className={`wny-hs-nav-menu${menuOpen ? ' is-open' : ''}`}>
        <nav className="wny-hs-nav-primary" aria-label="Home Security primary navigation">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/categories/home-security" className={navLinkClass}>
            Solutions
          </NavLink>
          <NavLink to={fitCheckLink} className={navLinkClass}>
            Fit Check
          </NavLink>
          <NavLink to="/contact?vertical=home-security" className={navLinkClass}>
            Estimate
          </NavLink>
        </nav>
        <div className="wny-hs-nav-secondary" aria-label="Home Security support navigation">
          <details className="wny-hs-nav-dropdown">
            <summary>Support & More</summary>
            <div className="wny-hs-nav-dropdown-panel">
              <NavLink to="/contact?vertical=home-security" className={navLinkClass}>
                Contact
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About Us
              </NavLink>
              <NavLink to="/support?vertical=home-security" className={navLinkClass}>
                Support
              </NavLink>
              <NavLink to="/home-security/planner?vertical=home-security" className={navLinkClass}>
                System Planner (Preview)
              </NavLink>
              <details className="wny-hs-nav-subdropdown">
                <summary>Legal</summary>
                <div className="wny-hs-nav-subpanel">
                  <NavLink to="/privacy" className={navLinkClass}>
                    Privacy
                  </NavLink>
                  <NavLink to="/terms" className={navLinkClass}>
                    Terms
                  </NavLink>
                </div>
              </details>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
};

export default WnyHomeSecurityNav;
