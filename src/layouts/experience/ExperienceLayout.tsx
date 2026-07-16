import { Link, Outlet } from 'react-router-dom';
import PrototypeNotice from '../../components/experience/PrototypeNotice';
import '../../styles/experience/baseline.css';

const ExperienceLayout = () => (
  <div className="experience-root">
    <a className="experience-skip-link" href="#experience-main">
      Skip to content
    </a>
    <PrototypeNotice />
    <header className="experience-header">
      <Link className="experience-brand" to="/" aria-label="WNY Home Security prototype home">
        <img
          src="/brand/crest-system/IconizedLogo.png"
          width="42"
          height="42"
          alt=""
        />
        <span>WNY Home Security</span>
      </Link>
      <nav aria-label="Prototype navigation">
        <Link to="/">Home</Link>
        <Link to="/#categories">Categories</Link>
        <Link to="/solutions">Solutions</Link>
      </nav>
    </header>
    <main id="experience-main">
      <Outlet />
    </main>
    <footer className="experience-footer">
      <div>
        <strong>WNY Home Security</strong>
        <p>Private design prototype for operator review.</p>
      </div>
      <img src="/brand/crest-system/IconizedLogo.png" width="38" height="38" alt="" />
    </footer>
  </div>
);

export default ExperienceLayout;
