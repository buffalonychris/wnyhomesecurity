import { Link } from 'react-router-dom';
import { experienceCategories } from '../../content/experience/baseline';

const ExperienceHome = () => (
  <div className="experience-page">
    <section className="experience-hero" aria-labelledby="experience-home-title">
      <p className="experience-eyebrow">A smarter property starts with one foundation</p>
      <h1 id="experience-home-title">Bring the systems around your property into one clear experience.</h1>
      <p className="experience-lede">
        WNY Home Security designs and installs expandable smart-property systems around the way a
        home, family, or managed property actually works.
      </p>
      <div className="experience-actions">
        <a className="wnyhs-button wnyhs-button--primary" href="#categories">
          Explore categories
        </a>
        <Link className="wnyhs-button wnyhs-button--secondary" to="/solutions">
          View solution ideas
        </Link>
      </div>
    </section>

    <section className="experience-trust-strip" aria-label="Prototype principles">
      <span>Local-first where supported</span>
      <span>Privacy-first planning</span>
      <span>Customer-owned foundation</span>
      <span>Expandable by design</span>
    </section>

    <section className="experience-section" aria-labelledby="experience-how-title">
      <p className="experience-eyebrow">Baseline experience</p>
      <h2 id="experience-how-title">One foundation, shaped around the property.</h2>
      <p>
        The complete Smart Property Experience arrives in Iteration 2. This baseline establishes a
        clear, inert route and content foundation without connecting to customer systems.
      </p>
    </section>

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
