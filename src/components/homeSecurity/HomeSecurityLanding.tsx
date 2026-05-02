import { Link } from 'react-router-dom';
import type { PackageTier } from '../../content/packages';
import PackageTierCards from './PackageTierCards';
import '../../styles/homeSecurityPremium.css';

type Props = {
  packages: PackageTier[];
  ctaLink: string;
};

const HomeSecurityLanding = ({ packages }: Props) => {
  return (
    <div className="hs-premium-shell">
      <section className="hs-premium-hero">
        <div className="hs-premium-hero-content">
          <p className="hs-premium-eyebrow">Local-first home security</p>
          <h1>Know what’s happening. Stay in control. No contracts required.</h1>
          <p className="hs-premium-hero-subhead">Local-first home security with cameras, sensors, and automations you own.</p>
          <div className="hs-premium-hero-actions">
            <Link className="btn btn-primary hs-premium-primary-cta" to="/contact?vertical=home-security">
              Schedule On-Site Estimate
            </Link>
            <Link className="btn btn-secondary" to="/discovery?vertical=home-security">
              Check Fit First
            </Link>
          </div>
          <p>
            Already know what you want? <Link to="/packages?vertical=home-security">View Packages</Link>
          </p>
        </div>
      </section>

      <section className="hs-premium-how">
        <div className="hs-premium-how-intro">
          <p className="hs-premium-eyebrow">What this system does / does not do</p>
          <p>
            This is a locally-run home security platform that combines sensors, cameras, and automations. Core local
            functions are designed to keep working on your home network when internet service is unavailable.
          </p>
          <ul className="hs-premium-steps">
            <li>What it is not: a mandatory monitoring contract.</li>
            <li>What it is not: a closed ecosystem.</li>
            <li>What it is not: surveillance-first by default.</li>
            <li>You own your equipment and data.</li>
            <li>No subscriptions are sold by us.</li>
            <li>Expandable later as your needs change.</li>
          </ul>
        </div>
      </section>

      <section id="packages" className="hs-premium-packages">
        <div className="hs-premium-section-header">
          <p className="hs-premium-eyebrow">Packages</p>
          <h2>Choose Bronze, Silver, or Gold</h2>
          <p>Outcomes-first options with clear next steps.</p>
        </div>
        <PackageTierCards packages={packages} ctaLink="/contact?vertical=home-security" />
      </section>

      <section id="how-it-works" className="hs-premium-how">
        <div className="hs-premium-how-intro">
          <p className="hs-premium-eyebrow">How it works</p>
          <ol className="hs-premium-steps">
            <li>Choose a starting point: check fit online, browse packages, or schedule an on-site estimate.</li>
            <li>Confirm the right system: we match your package to layout, entry points, cameras, and reliability needs.</li>
            <li>Approve, deposit, and schedule: quote, agreement, deposit, and installation scheduling stay clear and documented.</li>
          </ol>
        </div>
      </section>

      <section id="fit-check" className="hs-premium-cta">
        <div>
          <p className="hs-premium-eyebrow">Fit Check / Discovery</p>
          <p>
            Not sure where to start? Answer a few quick questions and we’ll recommend a package. If you already know
            you want us to walk the home, schedule an on-site estimate instead.
          </p>
        </div>
        <div className="hs-premium-cta-actions">
          <Link className="btn btn-primary" to="/discovery?vertical=home-security">Get My Recommendation</Link>
          <Link className="btn btn-secondary" to="/contact?vertical=home-security">Schedule On-Site Estimate</Link>
        </div>
      </section>

      <section id="get-started" className="hs-premium-cta">
        <div>
          <p className="hs-premium-eyebrow">Next step</p>
          <h2>Ready to design the right system for your home?</h2>
        </div>
        <div className="hs-premium-cta-actions">
          <Link className="btn btn-primary" to="/contact?vertical=home-security">Schedule On-Site Estimate</Link>
          <Link className="btn btn-secondary" to="/discovery?vertical=home-security">Check Fit First</Link>
          <Link className="hs-premium-text-link" to="/packages?vertical=home-security">View Packages</Link>
        </div>
      </section>
    </div>
  );
};

export default HomeSecurityLanding;
