import { Link } from 'react-router-dom';
import type { PackageTier } from '../../content/packages';
import PackageTierCards from './PackageTierCards';
import '../../styles/homeSecurityPremium.css';
import { recommendedBrandAssets } from '../../data/brandAssets';

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
          <div className="hs-premium-hero-brand-row">
            <img
              className="hs-premium-hero-brand"
              src={recommendedBrandAssets.primaryLogo}
              alt="WNY Home Security brand logo"
            />
          </div>
          <div className="hs-premium-hero-actions">
            <Link className="btn btn-primary hs-premium-primary-cta" to="/discovery?vertical=home-security">
              Find The Right System
            </Link>
            <Link className="btn btn-secondary" to="/packages?vertical=home-security">
              View Packages
            </Link>
            <Link className="btn btn-link" to="/contact?vertical=home-security">
              Request On-Site Estimate
            </Link>
          </div>
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
    </div>
  );
};

export default HomeSecurityLanding;
