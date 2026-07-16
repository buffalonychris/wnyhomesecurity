import { Link } from 'react-router-dom';
import ExperienceNavigation from './ExperienceNavigation';

const ExperienceHeader = () => (
  <header className="experience-header">
    <div className="experience-shell experience-header__inner">
      <Link className="experience-brand" to="/" aria-label="WNY Home Security private prototype home">
        <img
          className="experience-brand__mark"
          src="/brand/crest-system/IconizedLogo.png"
          width="48"
          height="48"
          alt=""
        />
        <span className="experience-brand__text">
          <strong>WNY Home Security</strong>
          <span>Private experience prototype</span>
        </span>
      </Link>

      <div className="experience-header__navigation">
        <ExperienceNavigation />
        <button
          className="wnyhs-button wnyhs-button--primary experience-assessment"
          type="button"
          aria-disabled="true"
          aria-describedby="experience-prototype-conditions"
        >
          <span>Assessment preview</span>
          <small>No information submitted or stored</small>
        </button>
      </div>
    </div>
  </header>
);

export default ExperienceHeader;
