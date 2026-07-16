import { Link } from 'react-router-dom';

const ExperienceNotFoundPage = () => (
  <div className="experience-page experience-page--compact">
    <section className="experience-section">
      <p className="experience-eyebrow">Private prototype</p>
      <h1>This prototype route is not available.</h1>
      <p>No information was submitted or stored.</p>
      <Link className="wnyhs-button wnyhs-button--primary" to="/">
        Return to prototype home
      </Link>
    </section>
  </div>
);

export default ExperienceNotFoundPage;
