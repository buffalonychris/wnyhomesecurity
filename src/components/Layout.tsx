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
  const storedFlow = loadRetailFlow();
  const verticalParam = searchParams.get('vertical');
  const storedVertical = storedFlow.quote?.vertical ?? (storedFlow.homeSecurity ? 'home-security' : null);
  const isHomeSecurityVertical =
    location.pathname === '/' ||
    verticalParam === 'home-security' ||
    storedVertical === 'home-security' ||
    location.pathname.startsWith('/home-security');
  const isNewSite = location.pathname.startsWith('/newsite');
  const isHomeSecurityLanding = location.pathname === '/' || location.pathname === '/home-security';
  const isHomeSecurityMarketingRoute = useMemo(() => {
    const marketingRoutes = new Set([
      '/',
      '/home-security',
      '/packages',
      '/discovery',
      '/fit-check',
      '/contact',
      '/estimate',
      '/support',
      '/our-work',
      '/qrlanding',
      '/qrlanding.htm',
      '/about',
      '/privacy',
      '/terms',
    ]);
    return location.pathname.startsWith('/home-security') || (isHomeSecurityVertical && marketingRoutes.has(location.pathname));
  }, [isHomeSecurityVertical, location.pathname]);
  const isHomeSecurityMarketingShell = isHomeSecurityMarketingRoute && !isNewSite;
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
  const hideFunnelHeader = isHomeSecurityVertical;
  const brandLink = '/';
  const supportLink = isHomeSecurityFunnel ? '/support?vertical=home-security' : '/support';
  const contactLink = isHomeSecurityFunnel ? '/contact?vertical=home-security' : '/contact';

  return (
    <LayoutConfigContext.Provider value={{ layoutConfig, setLayoutConfig }}>
      <div>
        <Seo />
        {isFunnel && !hideFunnelHeader && !isNewSite ? (
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
        {!isNewSite && !isHomeSecurityMarketingShell && (
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
                                <small className="footer-hub-meta">
                  © 2025 {brandSite} · {brandLegal}. All Rights Reserved.
                </small>
              </div>
            ) : (
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
              </div>
            )}
          </footer>
        )}
      </div>
    </LayoutConfigContext.Provider>
  );
};

export default Layout;
