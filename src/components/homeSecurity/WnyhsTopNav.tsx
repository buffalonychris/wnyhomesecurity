import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { brandHomeSecurity } from '../../lib/brand';
import { getAllHomeSecurityNavItems, homeSecurityMarketingNav } from '../../content/wnyhsNavigation';

type WnyhsTopNavProps = {
  ctaLink: string;
};

const WnyhsTopNav = ({ ctaLink }: WnyhsTopNavProps) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.search, location.hash]);

  const drawerItems = getAllHomeSecurityNavItems();
  type NavItem = ReturnType<typeof getAllHomeSecurityNavItems>[number];

  const isActiveLink = (item: NavItem) => {
    if (item.external || item.href.startsWith('http') || item.href.startsWith('mailto:')) {
      return false;
    }
    const matchPath = item.matchPath ?? item.href.split('?')[0].split('#')[0];
    const pathMatches = location.pathname === matchPath;
    if (!item.matchHash) return pathMatches;
    return pathMatches && location.hash === item.matchHash;
  };

  return (
    <header ref={navRef} className="wnyhs-top-nav">
      <div className="wnyhs-top-nav-inner">
        <Link to="/home-security" className="wnyhs-top-nav-brand" aria-label={`${brandHomeSecurity} home`}>
          <span className="wnyhs-top-nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <path d="M12 2l7 3v6c0 5-3.2 9.3-7 11-3.8-1.7-7-6-7-11V5l7-3z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M9.2 12.5l2 2.1 3.7-4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          <span>{brandHomeSecurity}</span>
        </Link>

        <nav className="wnyhs-top-nav-links" aria-label="WNY Home Security">
          {homeSecurityMarketingNav.primary.map((item) => {
            const active = isActiveLink(item);
            const className = ['wnyhs-top-nav-link', active ? 'is-active' : null].filter(Boolean).join(' ');
            return (
              <NavLink key={item.id} className={className} to={item.href}>
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="wnyhs-top-nav-actions">
          <button
            type="button"
            className="wnyhs-top-nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="wnyhs-top-nav-drawer"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <Link className="btn btn-primary wnyhs-top-nav-cta" to={ctaLink}>
            Get Started
          </Link>
        </div>
      </div>

      <div id="wnyhs-top-nav-drawer" className={`wnyhs-top-nav-drawer${menuOpen ? ' is-open' : ''}`}>
        <div className="wnyhs-top-nav-drawer-inner" role="dialog" aria-label="Home Security menu">
          <div className="wnyhs-top-nav-drawer-group">
            <p className="wnyhs-top-nav-drawer-title">Menu</p>
            <div className="wnyhs-top-nav-drawer-links">
              {drawerItems.map((item) => {
                const active = isActiveLink(item);
                const className = ['wnyhs-top-nav-link', active ? 'is-active' : null].filter(Boolean).join(' ');
                return (
                  <NavLink key={item.id} className={className} to={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WnyhsTopNav;
