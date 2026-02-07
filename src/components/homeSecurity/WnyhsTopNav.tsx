import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { brandHomeSecurity } from '../../lib/brand';

type WnyhsTopNavProps = {
  ctaLink: string;
  pathParam?: string;
};

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const APP_ROUTES = new Set(['/comparison', '/home-security/whats-included']);

const appendPathParam = (href: string, pathParam?: string) => {
  if (!pathParam) return href;
  if (href.includes('?')) {
    return `${href}${pathParam}`;
  }
  return `${href}${pathParam.replace('&', '?')}`;
};

const WnyhsTopNav = ({ ctaLink, pathParam }: WnyhsTopNavProps) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const hasComparisonRoute = APP_ROUTES.has('/comparison');
  const hasWhatsIncludedRoute = APP_ROUTES.has('/home-security/whats-included');
  const comparisonHref = hasComparisonRoute ? '/comparison?vertical=home-security' : '/home-security#comparison';
  const whatsIncludedHref = hasWhatsIncludedRoute ? '/home-security/whats-included' : '/home-security#whats-included';

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.search, location.hash]);

  const navItems = useMemo<NavItem[]>(() => {
    return [
      { label: 'Home', href: '/home-security' },
      { label: 'Packages', href: '/packages?vertical=home-security' },
      { label: 'Comparison', href: comparisonHref },
      { label: 'What’s Included', href: whatsIncludedHref },
      { label: 'Dashboard (Demo)', href: '/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html', external: true },
      { label: 'Fit Check', href: appendPathParam('/discovery?vertical=home-security', pathParam) },
      { label: 'Quote Builder', href: appendPathParam('/quote?vertical=home-security', pathParam) },
      { label: 'Planner', href: '/home-security/planner?vertical=home-security' },
      { label: 'Agreement Review', href: '/agreementReview' },
      { label: 'Agreement Print', href: '/agreementPrint' },
      { label: 'Payment', href: '/payment' },
      { label: 'Payment Success', href: '/home-security/payment/success' },
      { label: 'Payment Canceled', href: '/home-security/payment/canceled' },
      { label: 'Scheduling', href: appendPathParam('/schedule', pathParam) },
      { label: 'Contact', href: '/contact' },
      { label: 'About Us', href: '/about' },
      { label: 'Support', href: '/support' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ];
  }, [comparisonHref, pathParam, whatsIncludedHref]);

  const primaryNavItems = navItems.filter((item) =>
    ['Home', 'Packages', 'Comparison', 'What’s Included', 'Planner'].includes(item.label),
  );

  const drawerGroups = [
    {
      title: 'Start Here',
      items: navItems.filter((item) => ['Fit Check', 'Quote Builder', 'Packages'].includes(item.label)),
    },
    {
      title: 'Plan',
      items: navItems.filter((item) => ['Planner', 'What’s Included', 'Comparison', 'Dashboard (Demo)'].includes(item.label)),
    },
    {
      title: 'Finish',
      items: navItems.filter((item) =>
        ['Agreement Review', 'Agreement Print', 'Payment', 'Payment Success', 'Payment Canceled', 'Scheduling'].includes(
          item.label,
        ),
      ),
    },
    {
      title: 'Support',
      items: navItems.filter((item) => ['Contact', 'Support', 'Privacy', 'Terms'].includes(item.label)),
    },
  ];

  const isActiveLink = (href: string) => {
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return false;
    }
    const [pathWithQuery, hash] = href.split('#');
    const [path] = pathWithQuery.split('?');
    const pathMatches = location.pathname === path;
    if (!hash) return pathMatches;
    return pathMatches && location.hash === `#${hash}`;
  };

  return (
    <header className="wnyhs-top-nav">
      <div className="wnyhs-top-nav-inner">
        <Link to="/home-security" className="wnyhs-top-nav-brand" aria-label={`${brandHomeSecurity} home`}>
          <span className="wnyhs-top-nav-icon" aria-hidden="true">
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
        </Link>

        <nav className="wnyhs-top-nav-links" aria-label="WNY Home Security">
          {primaryNavItems.map((item) => {
            const active = isActiveLink(item.href);
            const className = ['wnyhs-top-nav-link', active ? 'is-active' : null].filter(Boolean).join(' ');
            if (item.external) {
              return (
                <a key={item.label} className={className} href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              );
            }
            return (
              <NavLink key={item.label} className={className} to={item.href}>
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

      <div className="wnyhs-top-nav-strip" aria-label="Home Security highlights">
        <span>Local-first</span>
        <span>Professionally installed</span>
        <span>No subscriptions sold by us</span>
      </div>

      <div id="wnyhs-top-nav-drawer" className={`wnyhs-top-nav-drawer${menuOpen ? ' is-open' : ''}`}>
        <div className="wnyhs-top-nav-drawer-inner" role="dialog" aria-label="Home Security menu">
          {drawerGroups.map((group) => (
            <div key={group.title} className="wnyhs-top-nav-drawer-group">
              <p className="wnyhs-top-nav-drawer-title">{group.title}</p>
              <div className="wnyhs-top-nav-drawer-links">
                {group.items.map((item) => {
                  const active = isActiveLink(item.href);
                  const className = ['wnyhs-top-nav-link', active ? 'is-active' : null].filter(Boolean).join(' ');
                  if (item.external) {
                    return (
                      <a
                        key={item.label}
                        className={className}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    );
                  }
                  return (
                    <NavLink key={item.label} className={className} to={item.href} onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
          <div className="wnyhs-top-nav-drawer-cta">
            <Link className="btn btn-primary" to={ctaLink} onClick={() => setMenuOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WnyhsTopNav;
