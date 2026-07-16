import { Link, useParams } from 'react-router-dom';
import { findExperienceCategory } from '../../content/experience/baseline';

const ExperienceCategoryPage = () => {
  const { categorySlug } = useParams();
  const category = findExperienceCategory(categorySlug);

  if (!category) {
    return (
      <div className="experience-page experience-page--compact">
        <section className="experience-section">
          <p className="experience-eyebrow">Prototype category</p>
          <h1>Category not found</h1>
          <p>This route is not part of the approved six-category baseline.</p>
          <Link className="experience-text-link" to="/#categories">
            View all categories
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="experience-page experience-page--compact">
      <section className="experience-hero experience-hero--inner">
        <p className="experience-eyebrow">Category prototype</p>
        <h1>{category.name}</h1>
        <p className="experience-lede">{category.summary}</p>
      </section>
      <section className="experience-section">
        <h2>A governed starting point</h2>
        <p>
          This baseline demonstrates category intent and direct-entry usability. Category exploration
          and approved related-solution content are reserved for later authorized iterations.
        </p>
        <div className="experience-actions">
          <Link className="wnyhs-button wnyhs-button--primary" to="/solutions">
            Browse solution ideas
          </Link>
          <Link className="wnyhs-button wnyhs-button--secondary" to="/#categories">
            All categories
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ExperienceCategoryPage;
