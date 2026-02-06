import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { brandSite } from '../lib/brand';
import BusinessMenu from '../components/nav/BusinessMenu';
import Pill from '../components/operator/Pill';

type NavItem = {
  path: string;
  label: string;
};

const businessLinks = [
  { path: '/home-security', label: 'Home Security' },
  { path: '/home-automation', label: 'Home Automation' },
  { path: '/elder-care-tech', label: 'Elder Care Tech' },
  { path: '/halo', label: 'HALO PERS' },
  { path: '/operator', label: 'Operator', badge: 'SaaS' },
];

const secondaryLinks: NavItem[] = [
  { path: '/pricing', label: 'Pricing' },
  { path: '/partners', label: 'Partners' },
  { path: '/support', label: 'Support' },
];

const OperatorLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHub = location.pathname === '/';

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setMobileOpen(false);
    }
  };

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const businessesActive = businessLinks.some((item) => location.pathname.startsWith(item.path));

  return (
    <>
      <header className="hide-when-print">
        <div className="container nav">
          <NavLink to="/" className="brand" aria-label={`${brandSite} home`}>
            <div className="brand-mark" aria-hidden="true">
              RE
            </div>
            <div>
              <div className="brand-name">{brandSite}</div>
              <small className="brand-tagline">Business portals for connected care</small>
            </div>
          </NavLink>
          <div className="nav-center">
            <details className="dropdown">
              <summary className={`dropdown-trigger${businessesActive ? ' active' : ''}`}>
                Businesses
                <Pill className="pill-inline">5</Pill>
              </summary>
              <div className="dropdown-menu dropdown-menu-wide">
                <BusinessMenu items={businessLinks} />
              </div>
            </details>
          </div>
          <div className="nav-actions">
            <button
              className="nav-toggle"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
            <nav className="nav-links" aria-label="Secondary navigation">
              {secondaryLinks.map((item) => (
                <NavLink key={item.path} to={item.path} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <NavLink className="btn btn-primary nav-cta" to="/demo">
              See a Live Demo
            </NavLink>
          </div>
        </div>
        {mobileOpen && (
          <div className="mobile-menu" role="dialog" aria-label="Mobile navigation" onClick={handleOverlayClick}>
            <div className="mobile-menu-inner">
              <div className="mobile-links" role="menu">
                <details>
                  <summary>Businesses</summary>
                  <div className="mobile-dropdown">
                    <BusinessMenu items={businessLinks} />
                  </div>
                </details>
                {secondaryLinks.map((item) => (
                  <NavLink key={item.path} to={item.path} role="menuitem">
                    {item.label}
                  </NavLink>
                ))}
                <NavLink className="btn btn-primary" to="/demo">
                  See a Live Demo
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </header>
      {!isHub && (
        <div className="sitewide-notice" role="status">
          No pricing, guarantees, or promises are given by the assistant.
        </div>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default OperatorLayout;
