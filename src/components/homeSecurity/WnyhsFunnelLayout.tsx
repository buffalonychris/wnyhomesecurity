import { ReactNode } from 'react';
import { getHomeSecurityCtaLink } from '../../content/wnyhsNavigation';
import FunnelStepRail from './FunnelStepRail';
import WnyhsTopNav from './WnyhsTopNav';
import WnyhsSiteFooter from './WnyhsSiteFooter';
import '../../styles/homeSecurityPremium.css';

type WnyhsFunnelLayoutProps = {
  showStepRail?: boolean;
  ctaLink?: string;
  ctaLabel?: string;
  children: ReactNode;
};

const WnyhsFunnelLayout = ({
  showStepRail = true,
  ctaLink = getHomeSecurityCtaLink(),
  ctaLabel,
  children,
}: WnyhsFunnelLayoutProps) => {
  return (
    <div className="wnyhs-page-layout wnyhs-page-layout--funnel">
      <WnyhsTopNav ctaLink={ctaLink} ctaLabel={ctaLabel} />
      {showStepRail ? (
        <div className="wnyhs-funnel-rail">
          <FunnelStepRail />
        </div>
      ) : null}
      <div className="wnyhs-page-layout-body">
        <div className="container wnyhs-page-layout-container">{children}</div>
      </div>
      <WnyhsSiteFooter />
    </div>
  );
};

export default WnyhsFunnelLayout;
