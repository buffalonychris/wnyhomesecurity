import { NavLink } from 'react-router-dom';
import { SITE_BUILD_LABEL } from '../../lib/siteVersion';
import { wnyhsContact } from '../../content/wnyhsContact';

const WnyhsSiteFooter = () => {
  return (
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
      <div className="wnyhs-marketing-footer-brand">
        <img
          className="wnyhs-marketing-footer-crest"
          src="/brand/crest-system/IconizedLogo.png"
          alt="WNY Home Security crest"
          loading="lazy"
        />
      </div>
    </footer>
  );
};

export default WnyhsSiteFooter;
