import { Outlet } from 'react-router-dom';
import PrototypeNotice from '../../components/experience/PrototypeNotice';
import ExperienceFooter from '../../components/experience/shell/ExperienceFooter';
import ExperienceHeader from '../../components/experience/shell/ExperienceHeader';
import '../../styles/experience/baseline.css';

const ExperienceLayout = () => (
  <div className="experience-root">
    <a className="experience-skip-link" href="#experience-main">
      Skip to content
    </a>
    <PrototypeNotice />
    <ExperienceHeader />
    <main id="experience-main" tabIndex={-1}>
      <Outlet />
    </main>
    <ExperienceFooter />
  </div>
);

export default ExperienceLayout;
