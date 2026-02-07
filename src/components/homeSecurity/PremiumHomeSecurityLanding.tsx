import { Link } from 'react-router-dom';
import type { PackageTier } from '../../content/packages';
import DemoDashboardLink from '../DemoDashboardLink';
import PackageTierCards from './PackageTierCards';
import WnyhsTopNav from './WnyhsTopNav';
import '../../styles/homeSecurityPremium.css';

type Props = {
  packages: PackageTier[];
  ctaLink: string;
  pathParam?: string;
};

const PremiumHomeSecurityLanding = ({ packages, ctaLink, pathParam }: Props) => {
  return (
    <div className="hs-premium-shell">
      <WnyhsTopNav ctaLink={ctaLink} pathParam={pathParam} />

      <div className="hs-premium-value-strip" aria-label="Key coverage highlights">
        <div className="hs-premium-strip-item">
          <span className="hs-premium-strip-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 7v6l4 2" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          24/7 Intrusion Monitoring
        </div>
        <div className="hs-premium-strip-item">
          <span className="hs-premium-strip-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          Smart Cameras
        </div>
        <div className="hs-premium-strip-item">
          <span className="hs-premium-strip-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <rect x="7" y="3.5" width="10" height="17" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="12" cy="16.5" r="1" fill="currentColor" />
            </svg>
          </span>
          App Control
        </div>
      </div>

      <section className="hs-premium-hero">
        <div className="hs-premium-hero-content">
          <p className="hs-premium-eyebrow">Local-first</p>
          <h1>Home security that works even when the internet doesn’t</h1>
          <p className="hs-premium-hero-subhead">
            A wireless home security system you control from one simple dashboard. No required subscriptions. No “cloud-only”
            lock-in. Your sensors and alarms still work inside your home even if the internet goes out.
          </p>
          <ul className="hs-premium-hero-list">
            <li>Offline-first protection with local control.</li>
            <li>No subscriptions sold by us; you own the equipment.</li>
            <li>Control from one dashboard with optional remote access.</li>
          </ul>
          <div className="hs-premium-hero-actions">
            <Link className="btn btn-primary hs-premium-primary-cta" to={ctaLink}>
              Get My Free Quote
            </Link>
            <Link className="btn btn-secondary" to="/packages?vertical=home-security">
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

      <div id="whats-included" className="hs-premium-anchor" aria-hidden="true" />
      <section id="how-it-works" className="hs-premium-how">
        <div className="hs-premium-how-intro">
          <p className="hs-premium-eyebrow">How it Works</p>
          <h2>Simple steps, professional installation</h2>
          <ol className="hs-premium-steps">
            <li>Choose a package.</li>
            <li>Confirm fit in minutes.</li>
            <li>Lock your quote with a deposit.</li>
            <li>Pick an installation date.</li>
          </ol>
        </div>
        <div className="hs-premium-feature-grid">
          <article className="hs-premium-feature-card">
            <div className="hs-premium-feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 2l7 3v6c0 5-3.2 9.3-7 11-3.8-1.7-7-6-7-11V5l7-3z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </div>
            <h3>Local &amp; Reliable</h3>
            <p>
              Professionally installed home security with a local-first dashboard that stays reliable even when internet access drops.
            </p>
          </article>
          <article className="hs-premium-feature-card">
            <div className="hs-premium-feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </div>
            <h3>24/7 Monitoring</h3>
            <p>
              Professional monitoring is optional and, if selected, is provided directly through third-party monitoring services
              chosen by the customer.
            </p>
          </article>
          <article className="hs-premium-feature-card">
            <div className="hs-premium-feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M8 15l3-3 2 2 3-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </div>
            <h3>Quote in Minutes</h3>
            <p>Confirm your fit check, lock in pricing with a deposit, and move straight into scheduling.</p>
          </article>
          <article className="hs-premium-feature-card">
            <div className="hs-premium-feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M6 3h12v18H6z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M9 7h6M9 11h6M9 15h6" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </div>
            <h3>Clear Next Steps</h3>
            <p>Sign your agreement, complete payment, and choose the installation date that works for you.</p>
          </article>
        </div>
      </section>

      <div id="comparison" className="hs-premium-anchor" aria-hidden="true" />
      <section id="packages" className="hs-premium-packages">
        <div className="hs-premium-section-header">
          <p className="hs-premium-eyebrow">Packages</p>
          <h2>Home Security Packages for Every Need</h2>
          <p>Bronze, Silver, and Gold tiers are professionally installed and keep Home Assistant as your single dashboard.</p>
        </div>
        <PackageTierCards packages={packages} ctaLink={ctaLink} />
      </section>

      <section id="dashboard" className="hs-premium-dashboard-cta">
        <div>
          <p className="hs-premium-eyebrow">Dashboard Preview</p>
          <h2>See the home dashboard you’ll use</h2>
          <ul className="hs-premium-dashboard-list">
            <li>Live-style camera views and sensor status.</li>
            <li>Alerts, history, and controls in one place.</li>
          </ul>
        </div>
        <div className="hs-premium-dashboard-actions">
          <DemoDashboardLink variant="button" label="Open Dashboard Demo" />
          <div className="hs-premium-dashboard-note">Opens in a new tab.</div>
        </div>
      </section>

      <section id="get-started" className="hs-premium-cta">
        <div>
          <p className="hs-premium-eyebrow">Your Safety, Our Priority</p>
          <h2>Start your fit check in minutes</h2>
          <p>
            Answer a few quick questions about your home so we can match you with the right tier and recommended coverage.
            <span className="hs-premium-cta-inline">
              {' '}
              ✓ No subscriptions sold by us · ✓ Local control with optional remote access.
            </span>
          </p>
        </div>
        <div className="hs-premium-cta-actions">
          <Link className="btn btn-primary" to={ctaLink}>
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PremiumHomeSecurityLanding;
