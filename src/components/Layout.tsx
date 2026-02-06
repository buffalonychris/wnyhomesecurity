import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Seo from './Seo';
import { captureUtmParams } from '../lib/utm';
import { brandLegal, brandPhonePrimary, brandServiceLocation, brandSite } from '../lib/brand';
import { defaultLayoutConfig, LayoutConfigContext } from './LayoutConfig';
import { loadRetailFlow } from '../lib/retailFlow';

const Layout = () => {
  const location = useLocation();
  const [layoutConfig, setLayoutConfig] = useState(defaultLayoutConfig);

  useEffect(() => {
    captureUtmParams({ search: location.search, pathname: location.pathname });
  }, [location.pathname, location.search]);

  const isHub = location.pathname === '/';
  const isFunnel = layoutConfig.layoutVariant === 'funnel';
  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const storedFlow = useMemo(() => loadRetailFlow(), [location.pathname, location.search]);
  const verticalParam = searchParams.get('vertical');
  const storedVertical = storedFlow.quote?.vertical ?? (storedFlow.homeSecurity ? 'home-security' : null);
  const isHomeSecurityVertical =
    verticalParam === 'home-security' || storedVertical === 'home-security' || location.pathname.startsWith('/home-security');
  const isHomeSecurityLanding = location.pathname === '/home-security';
  const funnelStepRoutes = useMemo(
    () =>
      new Set([
        '/discovery',
        '/quote',
        '/quoteReview',
        '/quote-review',
        '/agreement',
        '/agreementReview',
        '/agreement-review',
        '/payment',
        '/schedule',
      ]),
    []
  );
  const isHomeSecurityFunnelStep = isHomeSecurityVertical && funnelStepRoutes.has(location.pathname);
  const isHomeSecurityFunnel =
    isFunnel &&
    (location.pathname.startsWith('/home-security') || location.search.includes('vertical=home-security'));
  const brandLink = isHomeSecurityFunnel ? '/home-security' : '/';
  const supportLink = isHomeSecurityFunnel ? '/support?vertical=home-security' : '/support';
  const contactLink = isHomeSecurityFunnel ? '/contact?vertical=home-security' : '/contact';

  return (
    <LayoutConfigContext.Provider value={{ layoutConfig, setLayoutConfig }}>
      <div>
        <Seo />
        {isFunnel ? (
          <header className={`funnel-header hide-when-print${isHomeSecurityFunnelStep ? ' funnel-header-muted' : ''}`}>
            <div className="container funnel-header-inner">
              <NavLink to={brandLink} className="brand" aria-label={`${brandSite} home`}>
                <div className="brand-mark" aria-hidden="true">
                  RE
                </div>
                <div className="brand-name">{brandSite}</div>
              </NavLink>
              {!isHomeSecurityLanding && (
                <div className={`funnel-header-actions${isHomeSecurityFunnelStep ? ' funnel-header-actions-muted' : ''}`}>
                  {isHomeSecurityFunnel ? <NavLink to="/">Back to site</NavLink> : <NavLink to={supportLink}>Support</NavLink>}
                </div>
              )}
            </div>
          </header>
        ) : null}
        <Outlet />
        <footer className={`footer hide-when-print${isHub ? ' footer-hub' : ''}${isFunnel ? ' footer-funnel' : ''}`}>
          {isFunnel ? (
            <div className="container footer-funnel-inner">
              <div className="footer-funnel-links">
                <NavLink to="/privacy">Privacy Policy</NavLink>
                <NavLink to="/terms">Terms &amp; Conditions</NavLink>
                <NavLink to={supportLink}>Support</NavLink>
                <NavLink to={contactLink}>Contact</NavLink>
              </div>
              <small className="footer-funnel-meta">
                Service location: {brandServiceLocation} · {brandPhonePrimary}
              </small>
              <small className="footer-funnel-meta">
                © 2025 {brandSite} · {brandLegal}. All Rights Reserved.
              </small>
              {isHomeSecurityLanding && (
                <small className="footer-funnel-meta">
                  © 2025 KickAss Inc. All Rights Reserved. Unauthorized use is prohibited.
                </small>
              )}
            </div>
          ) : isHub ? (
            <div className="container footer-hub-inner">
              <div className="footer-hub-links">
                <NavLink to="/privacy">Privacy Policy</NavLink>
                <NavLink to="/terms">Terms &amp; Conditions</NavLink>
                <NavLink to="/support">Support</NavLink>
              </div>
              <small className="hub-disclaimer">No pricing, guarantees, or promises are given by the assistant.</small>
              <small className="footer-hub-meta">
                © 2025 {brandSite} · {brandLegal}. All Rights Reserved.
              </small>
            </div>
          ) : (
            <>
              <div className="container footer-grid">
                <div>
                  <div className="footer-heading">Product</div>
                  <div className="footer-links">
                    <NavLink to="/operator">Operator</NavLink>
                    <NavLink to="/never-miss-another-estimate">Never Miss Another Estimate</NavLink>
                    <NavLink to="/demo">Request Demo</NavLink>
                    <NavLink to="/pricing">View Pricing</NavLink>
                    <NavLink to="/5-day-demo">Start Free 5-Day Demo</NavLink>
                    <NavLink to="/partners">Become a Partner</NavLink>
                  </div>
                </div>
                <div>
                  <div className="footer-heading">Actions</div>
                  <div className="footer-links">
                    <NavLink to="/pricing">Purchase / Start Plan</NavLink>
                    <NavLink to="/demo#mailing-list">Join Mailing List</NavLink>
                    <NavLink to="/support">Contact Support</NavLink>
                  </div>
                </div>
                <div>
                  <div className="footer-heading">Legal</div>
                  <div className="footer-links">
                    <NavLink to="/privacy">Privacy Policy</NavLink>
                    <NavLink to="/terms">Terms &amp; Conditions</NavLink>
                    <NavLink to="/support">Support</NavLink>
                  </div>
                  <small className="footer-note">
                    No pricing, guarantees, or promises are given by the assistant.
                  </small>
                </div>
              </div>
              <div className="container footer-meta">
                <small>© 2025 {brandSite} · {brandLegal}. All Rights Reserved.</small>
              </div>
            </>
          )}
        </footer>
      </div>
    </LayoutConfigContext.Provider>
  );
};

export default Layout;
