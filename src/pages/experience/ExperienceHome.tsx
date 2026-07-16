import { Link } from 'react-router-dom';
import SmartPropertyVisualization from '../../components/experience/property/SmartPropertyVisualization';
import SmartPropertyHero from '../../components/experience/story/SmartPropertyHero';
import { experienceCategories } from '../../content/experience/baseline';

const ExperienceHome = () => (
  <div className="experience-page">
    <SmartPropertyHero />

    <SmartPropertyVisualization />

    <section id="categories" className="experience-section" aria-labelledby="experience-categories-title">
      <p className="experience-eyebrow">Start with the outcome</p>
      <h2 id="experience-categories-title">Explore six connected categories.</h2>
      <div className="experience-grid experience-grid--categories">
        {experienceCategories.map((category, index) => (
          <article className="wnyhs-card" key={category.slug}>
            <span className="experience-index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3>{category.name}</h3>
            <p>{category.summary}</p>
            <Link to={`/categories/${category.slug}`}>Explore {category.name}</Link>
          </article>
        ))}
      </div>
    </section>

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
