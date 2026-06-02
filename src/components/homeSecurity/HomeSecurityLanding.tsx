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

const workPreview = [
  '/images/our-work/Winter night at a suburban home.png',
  '/images/our-work/Suburban night with cars and security camera.png',
  '/images/our-work/Cozy family night with smart home security.png',
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
        <p className="hs-premium-eyebrow">Our work</p>
        <h2>Our work</h2>
        <p>Real installs. Real homes. Real results.</p>
        <div className="hs-premium-our-work-strip" aria-hidden="true">
          {workPreview.map((src) => (
            <img key={src} src={src} alt="" loading="lazy" />
          ))}
        </div>
        <Link className="hs-premium-text-link" to="/our-work?vertical=home-security">
          See more of our projects
        </Link>
      </section>

      <section className="hs-premium-cta hs-premium-cta--calm">
        <div className="hs-premium-cta-brand">
          <img src="/brand/crest-system/CrestLogo.png" alt="WNY Home Security crest" loading="lazy" />
        </div>
        <div className="hs-premium-cta-copy">
          <h2>Ready for a clear recommendation?</h2>
          <p>Request a free estimate or start with Fit Check to see what fits your home.</p>
        </div>
        <div className="hs-premium-cta-actions hs-premium-cta-actions--compact">
          <Link className="btn btn-primary" to={ctaLink}>
            Request a Free Estimate
          </Link>
          <a className="btn btn-secondary" href={buildTel()}>
            Call/Text
          </a>
          <Link className="btn btn-secondary" to="/packages?vertical=home-security">
            View Packages
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeSecurityLanding;
