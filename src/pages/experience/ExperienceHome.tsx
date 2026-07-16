import { Link } from 'react-router-dom';
import CategoryExplorer from '../../components/experience/categories/CategoryExplorer';
import SmartPropertyVisualization from '../../components/experience/property/SmartPropertyVisualization';
import SmartPropertyHero from '../../components/experience/story/SmartPropertyHero';

const ExperienceHome = () => (
  <div className="experience-page">
    <SmartPropertyHero />

    <SmartPropertyVisualization />

    <CategoryExplorer />

    <section className="experience-section experience-section--quiet" aria-labelledby="experience-preview-title">
      <p className="experience-eyebrow">Solution preview</p>
      <h2 id="experience-preview-title">Move from a concern to a practical next step.</h2>
      <p>
        Baseline solution pages demonstrate the future discovery path. They do not create requests,
        bookings, payments, or messages.
      </p>
      <Link className="experience-text-link" to="/solutions">
        Open the prototype solution library
      </Link>
    </section>

    <section className="experience-section experience-section--final" aria-labelledby="experience-final-title">
      <p className="experience-eyebrow">Operator review gate</p>
      <h2 id="experience-final-title">This private baseline is ready for structured iteration.</h2>
      <p>Future work proceeds only after explicit operator approval for the next iteration.</p>
    </section>
  </div>
);

export default ExperienceHome;
