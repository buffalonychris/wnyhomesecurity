import { ReactNode } from 'react';
import { getHomeSecurityCtaLink } from '../../content/wnyhsNavigation';
import FunnelStepRail from './FunnelStepRail';
import WnyhsTopNav from './WnyhsTopNav';
import WnyhsSiteFooter from './WnyhsSiteFooter';
import '../../styles/homeSecurityPremium.css';

type WnyhsFunnelLayoutProps = {
  showStepRail?: boolean;
  children: ReactNode;
};

const WnyhsFunnelLayout = ({ showStepRail = true, children }: WnyhsFunnelLayoutProps) => {
  return (
    <div className="wnyhs-page-layout wnyhs-page-layout--funnel">
      <WnyhsTopNav ctaLink={getHomeSecurityCtaLink()} />
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
