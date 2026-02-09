import { NavLink, Navigate, useParams } from 'react-router-dom';
import {
  formatPackagePrice,
  getHomeSecurityPackage,
  HomeSecurityTier,
} from '../data/homeSecurity.packages';

const HomeSecurityPackageTierPage = () => {
  const { tier } = useParams<{ tier: HomeSecurityTier }>();
  const pkg = tier ? getHomeSecurityPackage(tier) : undefined;

  if (!pkg) {
    return <Navigate to="/newsite/home-security/packages" replace />;
  }

  return (
    <div className="newsite-container">
      <section className="newsite-hero">
        <div>
          {pkg.highlight && <span className="newsite-badge">{pkg.highlight}</span>}
          <h1>{pkg.name}</h1>
          <p>{formatPackagePrice(pkg.priceCents)} one-time · Professional setup included</p>
          <p>{pkg.summary}</p>
          <div className="newsite-cta-row">
            <NavLink className="newsite-btn" to="/newsite/quote">
              Start online quote
            </NavLink>
            <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/contact">
              Request callback
            </NavLink>
          </div>
        </div>
        <div className="newsite-card">
          <strong>Included highlights</strong>
          <ul className="newsite-list">
            {pkg.includedSummary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/home-security/packages">
            View all packages
          </NavLink>
        </div>
      </section>

      <section className="newsite-section">
        <h2>What you get</h2>
        <div className="newsite-grid">
          {pkg.features.map((feature) => (
            <div className="newsite-card" key={feature.title}>
              <strong>{feature.title}</strong>
              <p>{feature.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="newsite-section">
        <div className="newsite-surface">
          <h2>Good fit for</h2>
          <ul className="newsite-list">
            {pkg.goodFit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="newsite-section">
        <div className="newsite-surface">
          <h2>Next steps</h2>
          <p>Connect with a security advisor or place your deposit to reserve installation.</p>
          <div className="newsite-cta-row">
            <NavLink className="newsite-btn" to="/newsite/quote">
              Start online quote
            </NavLink>
            <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/contact">
              Request callback
            </NavLink>
            <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/home-security/pay-deposit">
              Pay deposit
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSecurityPackageTierPage;
