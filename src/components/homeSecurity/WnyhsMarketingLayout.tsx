import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import WnyhsTopNav from './WnyhsTopNav';
import { getHomeSecurityCtaLink } from '../../content/wnyhsNavigation';
import { SITE_BUILD_LABEL } from '../../lib/siteVersion';
import { wnyhsContact } from '../../content/wnyhsContact';
import '../../styles/homeSecurityPremium.css';

type WnyhsMarketingLayoutProps = {
  ctaLink?: string;
  children: ReactNode;
};

const WnyhsMarketingLayout = ({ ctaLink = getHomeSecurityCtaLink(), children }: WnyhsMarketingLayoutProps) => {
  return (
    <div className="wnyhs-page-layout wnyhs-page-layout--marketing">
      <WnyhsTopNav ctaLink={ctaLink} />
      <div className="wnyhs-page-layout-body">
        <div className="container wnyhs-page-layout-container">{children}</div>
      </div>
      <footer className="wnyhs-marketing-footer">
        <div className="wnyhs-marketing-footer-links">
          <NavLink to="/about?vertical=home-security">About</NavLink>
          <NavLink to="/contact?vertical=home-security">Contact</NavLink>
          <NavLink to="/privacy?vertical=home-security">Privacy</NavLink>
          <NavLink to="/terms?vertical=home-security">Terms</NavLink>
          <NavLink to="/support?vertical=home-security">Support</NavLink>
        </div>
        <div className="wnyhs-marketing-footer-meta">
          <span>WNY Home Security</span>
          <span>Western New York</span>
          <a href={`tel:${wnyhsContact.phone.tel}`}>{wnyhsContact.phone.display}</a>
          <a href={`mailto:${wnyhsContact.emails.hello}`}>{wnyhsContact.emails.hello}</a>
          <span>{SITE_BUILD_LABEL}</span>
        </div>
      </footer>
    </div>
  );
};

export default WnyhsMarketingLayout;
