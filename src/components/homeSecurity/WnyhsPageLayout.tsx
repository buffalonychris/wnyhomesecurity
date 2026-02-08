import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { brandHomeSecurity } from '../../lib/brand';
import { getHomeSecurityCtaLink, HOME_SECURITY_ROUTES } from '../../content/wnyhsNavigation';
import FunnelStepRail from './FunnelStepRail';
import WnyhsTopNav from './WnyhsTopNav';
import '../../styles/homeSecurityPremium.css';

type WnyhsPageLayoutProps = {
  mode: 'marketing' | 'funnel';
  ctaLink?: string;
  showStepRail?: boolean;
  children: ReactNode;
};

const WnyhsPageLayout = ({ mode, ctaLink = getHomeSecurityCtaLink(), showStepRail, children }: WnyhsPageLayoutProps) => {
  return (
    <div className={`wnyhs-page-layout wnyhs-page-layout--${mode}`}>
      {mode === 'marketing' ? (
        <WnyhsTopNav ctaLink={ctaLink} />
      ) : (
        <div className="wnyhs-funnel-header">
          <Link to={HOME_SECURITY_ROUTES.home} className="wnyhs-funnel-brand" aria-label={`${brandHomeSecurity} home`}>
            <span className="wnyhs-funnel-brand-icon" aria-hidden="true">
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
          <Link className="btn btn-secondary wnyhs-funnel-exit" to={HOME_SECURITY_ROUTES.home}>
            Exit to Home
          </Link>
        </div>
      )}
      {mode === 'funnel' && showStepRail ? (
        <div className="wnyhs-funnel-rail">
          <FunnelStepRail />
        </div>
      ) : null}
      <div className="wnyhs-page-layout-body">
        <div className="container wnyhs-page-layout-container">{children}</div>
      </div>
    </div>
  );
};

export default WnyhsPageLayout;
