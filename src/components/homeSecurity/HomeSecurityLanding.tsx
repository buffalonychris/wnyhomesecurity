import { Link } from 'react-router-dom';
import type { PackageTier } from '../../content/packages';
import { buildTel, wnyhsContact } from '../../content/wnyhsContact';
import '../../styles/homeSecurityPremium.css';

type Props = {
  packages: PackageTier[];
  ctaLink: string;
};

const packagePreview = [
  { id: 'a1', name: 'Bronze', detail: 'Cameras and entry sensors for practical first coverage.' },
  { id: 'a2', name: 'Silver', detail: 'Balanced coverage with expanded alerts and visibility where it matters most.' },
  { id: 'a3', name: 'Gold', detail: 'Broader property coverage with automation planning for larger layouts.' },
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
            We design and install security cameras, video doorbells, package theft protection, and smart home security
            systems built around your property, routines, and goals.
          </p>
          <div className="hs-premium-hero-actions">
            <Link className="btn btn-primary hs-premium-primary-cta" to={ctaLink}>
              Request a Free Estimate
            </Link>
            <a className="btn btn-secondary" href={buildTel()}>
              Call/Text {wnyhsContact.phone.display}
            </a>
            <Link className="btn btn-link hs-premium-text-link" to="/packages?vertical=home-security">
              View Packages
            </Link>
          </div>
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
          <h3>Right-Sized Systems</h3>
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
          <p className="hs-premium-eyebrow">How it works</p>
          <h2>How it works</h2>
        </div>
        <ol className="hs-premium-process-timeline">
          <li>
            <span>01</span>
            <h3>Fit Check</h3>
            <p>Answer a few questions about your property and your goals.</p>
          </li>
          <li>
            <span>02</span>
            <h3>Review &amp; Estimate</h3>
            <p>We review your needs and provide clear options and pricing.</p>
          </li>
          <li>
            <span>03</span>
            <h3>Planned Installation</h3>
            <p>Professional installation scheduled at a time that works for you.</p>
          </li>
          <li>
            <span>04</span>
            <h3>Support</h3>
            <p>We’re here after install for questions, adjustments, and future needs.</p>
          </li>
        </ol>
      </section>

      <section id="packages" className="hs-premium-packages hs-premium-section-panel">
        <div className="hs-premium-section-header hs-premium-section-header--row">
          <div>
            <p className="hs-premium-eyebrow">Packages</p>
            <h2>Packages</h2>
            <p>Starting points, not one-size-fits-all plans.</p>
          </div>
          <Link className="hs-premium-text-link" to="/packages?vertical=home-security">
            View all packages
          </Link>
        </div>
        <div className="hs-premium-package-preview-grid">
          {packagePreview.map((item) => (
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
