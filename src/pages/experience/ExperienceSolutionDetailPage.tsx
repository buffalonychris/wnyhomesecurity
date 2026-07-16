import { Link, useParams } from 'react-router-dom';
import { findExperienceSolution } from '../../content/experience/baseline';

const ExperienceSolutionDetailPage = () => {
  const { solutionSlug } = useParams();
  const solution = findExperienceSolution(solutionSlug);

  return (
    <div className="experience-page experience-page--compact">
      <section className="experience-hero experience-hero--inner">
        <p className="experience-eyebrow">Prototype solution detail</p>
        <h1>{solution?.name ?? 'Solution detail unavailable'}</h1>
        <p className="experience-lede">
          {solution?.summary ?? 'This solution is not included in the approved baseline content.'}
        </p>
      </section>
      <section className="experience-section">
        <h2>Private, inert demonstration</h2>
        <p>
          This page presents route and layout intent only. It does not check compatibility, produce an
          estimate, submit information, or contact an external service.
        </p>
        <Link className="experience-text-link" to="/solutions">
          Return to solutions
        </Link>
      </section>
    </div>
  );
};

export default ExperienceSolutionDetailPage;
