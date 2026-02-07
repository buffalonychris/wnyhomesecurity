import { Link } from 'react-router-dom';
import type { PackageTier } from '../../content/packages';
import HomeSecurityTopNav from './HomeSecurityTopNav';
import PackageTierCards from './PackageTierCards';
import '../../styles/homeSecurityPremium.css';

type Props = {
  packages: PackageTier[];
  ctaLink: string;
};

const PremiumHomeSecurityLanding = ({ packages, ctaLink }: Props) => {
  return (
    <div className="hs-premium-shell">
      <HomeSecurityTopNav ctaLink={ctaLink} />

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
            <Link className="btn btn-primary" to={ctaLink}>
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

      <section id="how-it-works" className="hs-premium-how">
        <div className="hs-premium-how-intro">
          <p className="hs-premium-eyebrow">How it Works</p>
          <h2>Simple steps, professional installation</h2>
          <ol>
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
        </div>
      </section>

      <section id="plans" className="hs-premium-packages">
        <div className="hs-premium-section-header">
          <p className="hs-premium-eyebrow">Packages</p>
          <h2>Home Security Packages for Every Need</h2>
          <p>Bronze, Silver, and Gold tiers are professionally installed and keep Home Assistant as your single dashboard.</p>
        </div>
        <PackageTierCards packages={packages} />
      </section>

      <section className="hs-premium-cta">
        <div>
          <p className="hs-premium-eyebrow">Your Safety, Our Priority</p>
          <h2>Start your fit check in minutes</h2>
          <p>
            Answer a few quick questions about your home so we can match you with the right tier and recommended coverage.
          </p>
        </div>
        <div className="hs-premium-cta-actions">
          <Link className="btn btn-primary" to={ctaLink}>
            Get Started
          </Link>
          <div className="hs-premium-cta-micro">
            <div>
              <span aria-hidden="true">✓</span> No subscriptions sold by us
            </div>
            <div>
              <span aria-hidden="true">✓</span> Local control with optional remote access
            </div>
          </div>
        </div>
      </section>

      <section className="hs-premium-reassurance">
        <div>
          <h2>Get Peace of Mind Today</h2>
          <p>Local-first coverage, professional installation, and a clear path from quote to installation.</p>
        </div>
        <div className="hs-premium-reassurance-actions">
          <Link className="btn btn-secondary" to={ctaLink}>
            Get My Free Quote
          </Link>
          <div className="hs-premium-reassurance-badges">
            <span>Security you control</span>
            <span>Reliable local monitoring</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumHomeSecurityLanding;
