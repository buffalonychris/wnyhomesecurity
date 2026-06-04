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
    detail: "See who's at the door, know when packages arrive, and get alerts when activity happens at your front entry.",
    priceLine: 'Starting At $399 Installed',
    priceAmount: '$399',
    availabilityLine: 'Available As A Base Or Add-On Solution',
  },
  {
    id: 'smart-home-security',
    name: 'Smart Home Security',
    image: '/images/solutions/smart-home-security.png',
    detail: 'Cameras, alerts, smart automations, and property protection working together in one system.',
    priceLine: 'Starting At $899 Installed',
    priceAmount: '$899',
    availabilityLine: 'Available As A Base Or Add-On Solution',
  },
  {
    id: 'connected-garage-workshop',
    name: 'Connected Garage / Workshop',
    image: '/images/solutions/connected-garage-workshop.png',
    detail: 'Know if the garage was left open, control it from anywhere, and automate lighting when you arrive home.',
    priceLine: 'Starting At $349 Installed',
    priceAmount: '$349',
    availabilityLine: 'Available As A Base Or Add-On Solution',
  },
] as const;

const homeownerProblems = [
  {
    title: 'Security & Awareness',
    body:
      'Know what is happening around doors, driveways, garages, and packages with cameras and alerts planned around your property.',
  },
  {
    title: 'Property Protection',
    body:
      'Add practical awareness for water leaks, freeze risks, sump areas, garages, and other WNY property concerns before they become bigger problems.',
  },
  {
    title: 'Family Awareness',
    body:
      'Help your household check in on entries, routines, loved ones, and daily activity without turning your home into a complicated system.',
  },
] as const;

const HomeSecurityLanding = ({ ctaLink }: Props) => {
  return (
    <div className="hs-premium-shell hs-premium-shell--home-trust">
      <section className="hs-premium-hero hs-premium-hero--split">
        <div className="hs-premium-hero-content">
          <p className="hs-premium-eyebrow">Protect What Matters</p>
          <h1>Local smart property solutions for Western New York homeowners.</h1>
          <p className="hs-premium-hero-subhead">
            Cameras, property protection, and smart home solutions built around your home, your routines, and the
            concerns you actually want solved.
          </p>
          <div className="hs-premium-hero-actions">
            <Link className="btn btn-primary" to={ctaLink}>
              Start Free Fit Check
            </Link>
            <a className="btn btn-secondary" href={buildTel()}>
              Call/Text 716-201-0364
            </a>
          </div>
          <div className="hs-premium-hero-proof-strip" aria-label="WNY Home Security positioning">
            <span>No required monthly fees</span>
            <span>Customer-owned equipment options</span>
            <span>Professionally installed and locally supported</span>
          </div>
        </div>
        <div className="hs-premium-hero-media" aria-hidden="true">
          <img src="/brand/heros/HomePageHero.png" alt="" loading="eager" />
        </div>
      </section>

      <section className="hs-premium-section-panel hs-premium-problem-panel" aria-labelledby="homeowner-problems-heading">
        <div className="hs-premium-section-header">
          <p className="hs-premium-eyebrow">Built Around Real Homeowner Concerns</p>
          <h2 id="homeowner-problems-heading">Start With The Problem, Then Build The Right System</h2>
          <p>
            WNY homes need more than a box of devices. We plan around the way you use your property, what you want to
            know about, and how much control you want to keep.
          </p>
        </div>
        <div className="hs-premium-problem-grid">
          {homeownerProblems.map((item) => (
            <article key={item.title} className="hs-premium-problem-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
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
                <div className="hs-premium-package-preview-value-row" aria-label={item.priceLine}>
                  <div className="hs-premium-package-preview-price">
                    <span>Starting At</span>
                    <strong>{item.priceAmount}</strong>
                    <span>Installed</span>
                  </div>
                  <div className="hs-premium-package-preview-status" aria-label={item.availabilityLine}>
                    <span>Available As A</span>
                    <span>Base Or Add-On</span>
                    <span>Solution</span>
                  </div>
                </div>
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
          <p>
            Local planning, clear recommendations, and systems designed for homeowner control without pushing
            unnecessary equipment or required ongoing fees.
          </p>
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
