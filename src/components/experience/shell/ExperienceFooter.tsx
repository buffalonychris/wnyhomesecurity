import { Link } from 'react-router-dom';
import ExperienceNavigation from './ExperienceNavigation';

const ExperienceFooter = () => (
  <footer className="experience-footer">
    <div className="experience-shell experience-footer__inner">
      <div className="experience-footer__brand">
        <Link className="experience-brand experience-brand--footer" to="/" aria-label="WNY Home Security private prototype home">
          <img
            className="experience-brand__mark"
            src="/brand/crest-system/IconizedLogo.png"
            width="52"
            height="52"
            alt=""
          />
          <span className="experience-brand__text">
            <strong>WNY Home Security</strong>
            <span>Western New York</span>
          </span>
        </Link>
        <p>Private prototype for owner review. Not the customer production website.</p>
      </div>

      <div className="experience-footer__navigation">
        <ExperienceNavigation variant="footer" />
        <p className="experience-footer__disclosure">
          Interactions do not submit or store information.
        </p>
      </div>
    </div>
  </footer>
);

export default ExperienceFooter;
