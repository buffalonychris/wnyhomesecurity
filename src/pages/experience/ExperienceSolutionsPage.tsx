import { Link } from 'react-router-dom';
import { experienceSolutions } from '../../content/experience/baseline';

const ExperienceSolutionsPage = () => (
  <div className="experience-page experience-page--compact">
    <section className="experience-hero experience-hero--inner">
      <p className="experience-eyebrow">Prototype solution library</p>
      <h1>Explore practical smart-property ideas.</h1>
      <p className="experience-lede">
        These baseline destinations demonstrate navigation only. Complete governed discovery,
        filtering, and solution content are reserved for Iteration 5.
      </p>
    </section>
    <section className="experience-section" aria-labelledby="experience-solutions-title">
      <h2 id="experience-solutions-title">Baseline solution destinations</h2>
      <div className="experience-grid experience-grid--solutions">
        {experienceSolutions.map((solution) => (
          <article className="wnyhs-card" key={solution.slug}>
            <h3>{solution.name}</h3>
            <p>{solution.summary}</p>
            <Link to={`/solutions/${solution.slug}`}>View prototype detail</Link>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default ExperienceSolutionsPage;
