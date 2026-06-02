import { Link } from 'react-router-dom';
import type { PackageTier } from '../../content/packages';
import { buildTel } from '../../content/wnyhsContact';
import '../../styles/homeSecurityPremium.css';

type Props = {
  packages: PackageTier[];
  ctaLink: string;
};

const solutionsPreview = [
  {
    id: 'a1',
    name: 'Package Protection',
    detail: 'Know when deliveries arrive, see who approaches your door, and reduce the risk of package theft.',
  },
  {
    id: 'a2',
    name: 'Garage & Property Awareness',
    detail: 'Know if the garage was left open, receive activity alerts, and stay connected to key areas around your property.',
  },
  {
    id: 'a3',
    name: 'Smart Home Security',
    detail: 'Bring cameras, alerts, automation, and awareness together into one practical solution.',
  },
] as const;

const exampleProjects = [
  {
    title: 'Front Entry Protection',
    image: '/images/home-security/hs_card_video-door-chime.webp',
    body: 'Video doorbells, package awareness, and entry notifications.',
  },
  {
    title: 'Garage & Property Awareness',
    image: '/images/home-security/hs_card_indoor-outdoor-coverage.webp',
    body: 'Know when access points are opened and stay connected to key areas around your property.',
  },
  {
    title: 'Smart Home Control',
    image: '/images/home-security/hs_card_core-platform.webp',
    body: 'Security, automation, and notifications working together.',
  },
] as const;

const HomeSecurityLanding = ({ ctaLink }: Props) => {
  return (
    <div className="hs-premium-shell hs-premium-shell--home-trust">
      <section className="hs-premium-hero hs-premium-hero--split">
        <div className="hs-premium-hero-content">
          <p className="hs-premium-eyebrow">LOCAL-FIRST. PLAN FIRST. PROTECT WHAT MATTERS.</p>
          <h1>Practical protection for Western New York homes and small businesses.</h1>
          <p className="hs-premium-hero-subhead">
            Whether you're trying to stop package theft, keep an eye on your property, check in on loved ones, or make
            your home easier to manage, we design practical security and smart property solutions built around your
            goals.
          </p>
        </div>
        <div className="hs-premium-hero-media" aria-hidden="true">
          <img src="/brand/heros/HomePageHero.png" alt="" loading="eager" />
        </div>
      </section>

      <section className="hs-premium-trust-strip" aria-label="Trust pillars">
        <article className="hs-premium-strip-item hs-premium-strip-item--stacked">
          <span className="hs-premium-strip-icon" aria-hidden="true">◆</span>
          <h3>Local &amp; Independent</h3>
          <p>Western New York based and operated.</p>
        </article>
        <article className="hs-premium-strip-item hs-premium-strip-item--stacked">
          <span className="hs-premium-strip-icon" aria-hidden="true">◆</span>
          <h3>No Monthly Contracts</h3>
          <p>Clear pricing. No mandatory monthly fees.</p>
        </article>
        <article className="hs-premium-strip-item hs-premium-strip-item--stacked">
          <span className="hs-premium-strip-icon" aria-hidden="true">◆</span>
          <h3>Right-Sized Solutions</h3>
          <p>Recommendations based on your property and priorities.</p>
        </article>
        <article className="hs-premium-strip-item hs-premium-strip-item--stacked">
          <span className="hs-premium-strip-icon" aria-hidden="true">◆</span>
          <h3>Installation You Can Trust</h3>
          <p>Professional installs. Clean. Respectful. Local.</p>
        </article>
      </section>

      <section className="hs-premium-section-panel hs-premium-process">
        <div className="hs-premium-section-header">
          <h2>How It Works</h2>
        </div>
        <ol className="hs-premium-process-timeline">
          <li>
            <h3>Step 1 - Fit Check</h3>
            <p>Answer a few quick questions about your property, concerns, and goals.</p>
          </li>
          <li>
            <h3>Step 2 - Talk To Us</h3>
            <p>
              Request a callback so we can discuss your situation, answer questions, and determine the best next steps
              for your property.
            </p>
          </li>
          <li>
            <h3>Step 3 - Plan Installation</h3>
            <p>Once you're comfortable with the recommendation, we'll schedule installation at a time and date that works for you.</p>
          </li>
          <li>
            <h3>Step 4 - Enjoy</h3>
            <p>Enjoy greater awareness, convenience, and peace of mind knowing your property is better protected.</p>
          </li>
        </ol>
      </section>

      <section id="packages" className="hs-premium-packages hs-premium-section-panel">
        <div className="hs-premium-section-header hs-premium-section-header--row">
          <div>
            <p className="hs-premium-eyebrow">Solutions</p>
            <h2>Solutions</h2>
            <p>Common solution starting points based on your goals, concerns, and property type.</p>
          </div>
          <Link className="hs-premium-text-link" to="/packages?vertical=home-security">
            View More Solutions
          </Link>
        </div>
        <div className="hs-premium-package-preview-grid">
          {solutionsPreview.map((item) => (
            <article key={item.id} className="hs-premium-package-preview-card">
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hs-premium-section-panel hs-premium-our-work">
        <h2>Example Projects</h2>
        <p>
          A few examples of the kinds of protection, awareness, and smart-property projects we install throughout
          Western New York.
        </p>
        <div className="hs-premium-example-project-grid">
          {exampleProjects.map((project) => (
            <article key={project.title} className="hs-premium-example-project-card">
              <img src={project.image} alt="" loading="lazy" />
              <div>
                <h3>{project.title}</h3>
                <p>{project.body}</p>
              </div>
            </article>
          ))}
        </div>
        <Link className="hs-premium-text-link" to="/our-work?vertical=home-security">
          See More Projects
        </Link>
      </section>

      <section className="hs-premium-section-panel hs-premium-final-cta-panel">
        <div className="hs-premium-final-cta-copy">
          <h2>Ready To Talk Through Your Property?</h2>
          <p>
            Start with a quick callback. We'll learn about your property, answer questions, and help determine whether
            an on-site estimate makes sense.
          </p>
        </div>
        <div className="hs-premium-final-cta-actions">
          <Link className="btn btn-primary" to={ctaLink}>
            Request a Callback
          </Link>
          <a className="btn btn-secondary" href={buildTel()}>
            Call/Text 716-201-0364
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomeSecurityLanding;
