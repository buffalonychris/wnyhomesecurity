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
    id: 'front-door-package-protection',
    name: 'Front Door & Package Protection',
    image: '/images/solutions/front-door-package-protection.png',
    detail: 'See who comes to your door, know when deliveries arrive, and check on your front entry from anywhere.',
    priceLine: 'Starting At $399 Installed',
    availabilityLine: 'Available As A Base Or Add-On Solution',
  },
  {
    id: 'smart-home-security',
    name: 'Smart Home Security',
    image: '/images/solutions/smart-home-security.png',
    detail: 'Bring cameras, alerts, and smart automations together into a single security and automation solution.',
    priceLine: 'Starting At $899 Installed',
    availabilityLine: 'Available As A Base Or Add-On Solution',
  },
  {
    id: 'connected-garage-workshop',
    name: 'Connected Garage / Workshop',
    image: '/images/solutions/connected-garage-workshop.png',
    detail:
      'Know if the garage was left open, open or close it from anywhere, and make arriving home easier with smart garage and lighting controls.',
    priceLine: 'Starting At $349 Installed',
    availabilityLine: 'Available As A Base Or Add-On Solution',
  },
] as const;

const HomeSecurityLanding = ({ ctaLink }: Props) => {
  return (
    <div className="hs-premium-shell hs-premium-shell--home-trust">
      <section className="hs-premium-hero hs-premium-hero--split">
        <div className="hs-premium-hero-content">
          <p className="hs-premium-eyebrow">Protect What Matters</p>
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
        <div className="hs-premium-section-header">
          <h2>Solutions</h2>
          <p>Common solution starting points based on your goals, concerns, and property type.</p>
        </div>
        <div className="hs-premium-package-preview-grid">
          {solutionsPreview.map((item) => (
            <article key={item.id} className="hs-premium-package-preview-card">
              <img src={item.image} alt="" loading="lazy" />
              <div className="hs-premium-package-preview-card-copy">
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
                <p className="hs-premium-package-preview-price">{item.priceLine}</p>
                <p className="hs-premium-package-preview-status">{item.availabilityLine}</p>
              </div>
            </article>
          ))}
        </div>
        <Link className="hs-premium-text-link" to="/packages?vertical=home-security">
          View More Solutions
        </Link>
      </section>

      <section className="hs-premium-section-panel hs-premium-trust-panel" aria-labelledby="home-trust-heading">
        <div className="hs-premium-section-header">
          <h2 id="home-trust-heading">Why Homeowners Choose WNY Home Security</h2>
        </div>
        <div className="hs-premium-trust-card-grid">
          <article className="hs-premium-trust-card">
            <h3>Built To Grow</h3>
            <p>
              Your first solution includes the system foundation. After that, you can add as much or as little as you
              need without having to upgrade or replace anything.
            </p>
          </article>
          <article className="hs-premium-trust-card">
            <h3>Only What You Need</h3>
            <p>We recommend solutions based on your property and goals, not extra equipment you do not need.</p>
          </article>
          <article className="hs-premium-trust-card">
            <h3>Your Home Stays Private</h3>
            <p>
              Your cameras, alerts, and activity are for you and your family. We believe what happens inside your home
              should stay inside your home.
            </p>
          </article>
          <article className="hs-premium-trust-card">
            <h3>Works When You Need It</h3>
            <p>
              Your home should continue doing its job even when the internet is having a bad day. We build solutions
              designed to keep working when you need them most.
            </p>
          </article>
        </div>
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
          <span className="hs-premium-final-cta-or">OR</span>
          <a className="btn btn-secondary" href={buildTel()}>
            Call/Text 716-201-0364
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomeSecurityLanding;
