import { NavLink } from 'react-router-dom';
import { SITE_BUILD_LABEL } from '../../lib/siteVersion';
import '../../styles/homeSecurityPremium.css';

const WnyhsSiteFooter = () => {
  return (
    <footer className="wnyhs-footer wnyhs-marketing-footer">
      <div className="wnyhs-marketing-footer-main">
        <div className="wnyhs-marketing-footer-column wnyhs-marketing-footer-local">
          <span>Locally Owned & Operated</span>
          <span>Serving Western New York</span>
        </div>
        <nav className="wnyhs-marketing-footer-links" aria-label="WNY Home Security footer">
          <NavLink to="/about?vertical=home-security">About</NavLink>
          <NavLink to="/contact?vertical=home-security">Contact</NavLink>
          <NavLink to="/privacy?vertical=home-security">Privacy</NavLink>
          <NavLink to="/terms?vertical=home-security">Terms</NavLink>
          <NavLink to="/support?vertical=home-security">Support</NavLink>
        </nav>
        <div className="wnyhs-marketing-footer-column wnyhs-marketing-footer-company">
          <span>WNY Home Security</span>
          <span>Operated by JDL Communications</span>
        </div>
      </div>
      <div className="wnyhs-marketing-footer-bottom">
        <span>{SITE_BUILD_LABEL}</span>
      </div>
    </footer>
  );
};

export default WnyhsSiteFooter;
