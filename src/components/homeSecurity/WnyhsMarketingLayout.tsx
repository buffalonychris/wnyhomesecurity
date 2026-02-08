import { ReactNode } from 'react';
import WnyhsTopNav from './WnyhsTopNav';
import '../../styles/homeSecurityPremium.css';

type WnyhsMarketingLayoutProps = {
  ctaLink?: string;
  children: ReactNode;
};

const WnyhsMarketingLayout = ({ ctaLink = '/discovery?vertical=home-security', children }: WnyhsMarketingLayoutProps) => {
  return (
    <div className="wnyhs-page-layout wnyhs-page-layout--marketing">
      <WnyhsTopNav ctaLink={ctaLink} />
      <div className="wnyhs-page-layout-body">
        <div className="container wnyhs-page-layout-container">{children}</div>
      </div>
    </div>
  );
};

export default WnyhsMarketingLayout;
