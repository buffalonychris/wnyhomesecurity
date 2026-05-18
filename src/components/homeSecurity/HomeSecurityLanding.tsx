import { Link } from 'react-router-dom';
import type { PackageTier } from '../../content/packages';
import '../../styles/homeSecurityPremium.css';
import { recommendedBrandAssets } from '../../data/brandAssets';

type Props = {
  packages: PackageTier[];
  ctaLink: string;
};

const packagePreview = [
  { id: 'a1', name: 'Bronze', detail: 'Core cameras and entry sensors for practical first coverage.' },
  { id: 'a2', name: 'Silver', detail: 'Balanced whole-home protection with expanded detection and alerts.' },
  { id: 'a3', name: 'Gold', detail: 'Broader property coverage with advanced automation planning.' },
] as const;

const HomeSecurityLanding = ({ ctaLink }: Props) => {
  return (
    <div className="hs-premium-shell hs-premium-shell--home-trust">
      <section className="hs-premium-hero hs-premium-hero--trust">
        <div className="hs-premium-hero-content">
          <p className="hs-premium-eyebrow">Local-first home security</p>
          <h1>Calm, practical protection for Western New York homes and small businesses.</h1>
          <p className="hs-premium-hero-subhead">
            We plan and install systems built around what you actually need: cameras, sensors, alarms, and smart automations.
          </p>
          <p className="hs-premium-hero-trust">No mandatory monthly contracts. One clear plan, one clear next step.</p>
          <div className="hs-premium-hero-actions">
            <Link className="btn btn-primary hs-premium-primary-cta" to={ctaLink}>
              Start With Fit Check
            </Link>
            <Link className="btn btn-link hs-premium-text-link" to="/packages?vertical=home-security">
              View Packages
            </Link>
          </div>
          <div className="hs-premium-hero-brand-row" aria-hidden="true">
            <img className="hs-premium-hero-crest" src={recommendedBrandAssets.footerCrest} alt="" />
            <img className="hs-premium-hero-brand" src={recommendedBrandAssets.primaryLogo} alt="WNY Home Security brand logo" />
          </div>
        </div>
      </section>

      <section className="hs-premium-how hs-premium-section-panel">
        <p className="hs-premium-eyebrow">Trust-first approach</p>
        <h2>Protection should feel planned, not pushed.</h2>
        <p>
          Every property is different. We start with your layout, entrances, routines, and priorities, then recommend coverage that fits real daily life.
        </p>
      </section>

      <section className="hs-premium-section-panel">
        <p className="hs-premium-eyebrow">System overview</p>
        <h2>Built from practical components that work together.</h2>
        <ul className="hs-premium-steps">
          <li>Cameras for visibility in key areas.</li>
          <li>Sensors for doors, windows, and movement.</li>
          <li>Alarm options with clear local alerts.</li>
          <li>Smart automations tailored to your routines.</li>
          <li>Mobile alerts and locally controlled options.</li>
        </ul>
      </section>

      <section className="hs-premium-section-panel">
        <p className="hs-premium-eyebrow">How it works</p>
        <h2>A simple path through the site.</h2>
        <ol className="hs-premium-steps hs-premium-steps--ordered">
          <li>Start with Fit Check to identify the right system direction.</li>
          <li>Review package options and request your estimate.</li>
          <li>Get a professionally planned install scope.</li>
          <li>Use Support any time you need help after install.</li>
        </ol>
      </section>

      <section id="packages" className="hs-premium-packages hs-premium-section-panel">
        <div className="hs-premium-section-header">
          <p className="hs-premium-eyebrow">Packages</p>
          <h2>Packages are starting points, not one-size-fits-all plans.</h2>
          <p>Compare details on the Packages page and choose the path that best matches your property.</p>
        </div>
        <div className="hs-premium-package-preview-grid">
          {packagePreview.map((item) => (
            <article key={item.id} className="hs-premium-package-preview-card">
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
              <Link className="hs-premium-text-link" to={`/packages/${item.id}?vertical=home-security`}>
                Review {item.name} package
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="hs-premium-section-panel">
        <p className="hs-premium-eyebrow">Our Work</p>
        <h2>See how real installs are planned and finished.</h2>
        <p>Explore selected project examples to understand coverage layout, equipment placement, and finish quality.</p>
        <Link className="hs-premium-text-link" to="/our-work?vertical=home-security">
          See Our Work
        </Link>
      </section>

      <section className="hs-premium-cta hs-premium-cta--calm">
        <h2>Ready for a clear recommendation?</h2>
        <p>Start with Fit Check for a practical path, then review package detail at your own pace.</p>
        <div className="hs-premium-cta-actions">
          <Link className="btn btn-primary" to={ctaLink}>
            Find the Right System
          </Link>
          <Link className="btn btn-secondary" to="/packages?vertical=home-security">
            View Packages
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeSecurityLanding;
