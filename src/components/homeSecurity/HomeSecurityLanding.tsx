import { Link } from 'react-router-dom';
import type { PackageTier } from '../../content/packages';
import DemoDashboardLink from '../DemoDashboardLink';
import PackageTierCards from './PackageTierCards';
import '../../styles/homeSecurityPremium.css';
import { HOME_SECURITY_ROUTES } from '../../content/wnyhsNavigation';

type Props = {
  packages: PackageTier[];
  ctaLink: string;
};

const HomeSecurityLanding = ({ packages, ctaLink }: Props) => {
  return (
    <div className="hs-premium-shell">
      <section className="hs-premium-hero">
        <div className="hs-premium-hero-content">
          <p className="hs-premium-eyebrow">Local-first security</p>
          <h1>Home security that stays reliable when the internet drops</h1>
          <p className="hs-premium-hero-subhead">
            A professionally installed system with one calm dashboard, clear one-time pricing, and local control that
            keeps working inside your home.
          </p>
          <ul className="hs-premium-hero-list">
            <li>Local-first protection with optional remote access.</li>
            <li>No subscriptions sold by us; you own the equipment.</li>
            <li>Simple, predictable steps from fit check to install.</li>
          </ul>
          <div className="hs-premium-hero-actions">
            <Link className="btn btn-primary hs-premium-primary-cta" to={ctaLink}>
              Get Started
            </Link>
            <Link className="btn btn-secondary" to={HOME_SECURITY_ROUTES.packages}>
              View Packages
            </Link>
          </div>
        </div>
        <div className="hs-premium-hero-media" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="/images/home-security/hs_hero_home-security.webp" />
            <img
              src="/images/home-security/hs_hero_home-security.png"
              alt="Local-first home security dashboard with calm lighting"
              loading="eager"
            />
          </picture>
          <div className="hs-premium-hero-overlay" aria-hidden="true" />
        </div>
      </section>

      <section id="how-it-works" className="hs-premium-how">
        <div className="hs-premium-how-intro">
          <p className="hs-premium-eyebrow">How it works</p>
          <h2>From fit check to install in six consistent steps</h2>
          <ol className="hs-premium-steps">
            <li>Fit Check: answer a few quick questions.</li>
            <li>Quote: lock your package pricing.</li>
            <li>Planner: optional layout precision.</li>
            <li>Agreement → Deposit → Schedule.</li>
          </ol>
        </div>
      </section>

      <section id="packages" className="hs-premium-packages">
        <div className="hs-premium-section-header">
          <p className="hs-premium-eyebrow">Packages</p>
          <h2>Pick a tier, then we confirm your fit</h2>
          <p>Bronze, Silver, and Gold tiers keep Home Assistant as your single dashboard.</p>
        </div>
        <PackageTierCards packages={packages} ctaLink={ctaLink} />
      </section>

      <section id="dashboard" className="hs-premium-dashboard-cta">
        <div>
          <p className="hs-premium-eyebrow">Dashboard preview</p>
          <h2>See the home dashboard you’ll use</h2>
          <p className="hs-premium-dashboard-note">
            Preview camera views, alerts, and sensor status in one place.
          </p>
        </div>
        <div className="hs-premium-dashboard-actions">
          <DemoDashboardLink variant="link" label="Open Dashboard Demo" />
          <div className="hs-premium-dashboard-note">Opens in a new tab.</div>
        </div>
      </section>

      <section id="get-started" className="hs-premium-cta">
        <div>
          <p className="hs-premium-eyebrow">Ready to begin?</p>
          <h2>Start your fit check in minutes</h2>
          <p>
            Answer a few questions so we can confirm the right tier and get you ready for installation scheduling.
          </p>
        </div>
        <div className="hs-premium-cta-actions">
          <Link className="hs-premium-text-link" to={ctaLink}>
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeSecurityLanding;
