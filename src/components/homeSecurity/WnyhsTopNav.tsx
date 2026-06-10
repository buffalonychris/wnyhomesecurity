import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { brandHomeSecurity } from '../../lib/brand';
import { getAllHomeSecurityNavItems, homeSecurityMarketingNav } from '../../content/wnyhsNavigation';
import { buildTel, wnyhsContact } from '../../content/wnyhsContact';

type WnyhsTopNavProps = {
  ctaLink?: string;
  ctaLabel?: string;
};

const WnyhsTopNav = ({ ctaLink = '/contact?vertical=home-security', ctaLabel = 'Request Estimate' }: WnyhsTopNavProps) => {
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
    const pathMatches = location.pathname === matchPath || location.pathname.startsWith(`${matchPath}/`);
    if (!item.matchHash) return pathMatches;
    return pathMatches && location.hash === item.matchHash;
  };

  return (
    <header ref={navRef} className="wnyhs-top-nav">
      <div className="wnyhs-top-nav-inner">
        <Link to="/home-security" className="wnyhs-top-nav-brand" aria-label={`${brandHomeSecurity} home`}>
          <span className="wnyhs-top-nav-icon" aria-hidden="true">
            <img src="/brand/crest-system/IconizedLogo.png" alt="" loading="eager" />
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
          <Link className="btn btn-primary wnyhs-top-nav-cta" to={ctaLink}>
            {ctaLabel}
          </Link>
          <a className="wnyhs-top-nav-phone" href={buildTel()}>
            Call/Text {wnyhsContact.phone.display}
          </a>
          <button
            type="button"
            className="wnyhs-top-nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="wnyhs-top-nav-drawer"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <div id="wnyhs-top-nav-drawer" className={`wnyhs-top-nav-drawer${menuOpen ? ' is-open' : ''}`}>
        <div className="wnyhs-top-nav-drawer-inner" role="dialog" aria-label="Home Security menu">
          <div className="wnyhs-top-nav-drawer-group">
            <p className="wnyhs-top-nav-drawer-title">Menu</p>
            <div className="wnyhs-top-nav-drawer-links">
              <a className="wnyhs-top-nav-link" href={buildTel()} onClick={() => setMenuOpen(false)}>
                Call/Text {wnyhsContact.phone.display}
              </a>
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
