import { NavLink } from 'react-router-dom';
import { formatPackagePrice, homeSecurityPackages } from '../data/homeSecurity.packages';

const HomeSecurityPackages = () => {
  return (
    <div className="newsite-container">
      <section className="newsite-hero">
        <div>
          <span className="newsite-badge">Home security packages</span>
          <h1>Choose the package that matches your home.</h1>
          <p>
            Every package includes professional monitoring and concierge onboarding. Compare the tiers below and select
            the coverage level that fits your household.
          </p>
        </div>
        <div className="newsite-card">
          <strong>Need help selecting a package?</strong>
          <p>Talk with a security advisor or begin an online quote to customize your coverage.</p>
          <div className="newsite-cta-row">
            <NavLink className="newsite-btn" to="/newsite/quote">
              Start online quote
            </NavLink>
            <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/contact">
              Request callback
            </NavLink>
          </div>
        </div>
      </section>

      <section className="newsite-section">
        <h2>Package options</h2>
        <p>Transparent one-time pricing with flexible upgrades as your security needs grow.</p>
        <div className="newsite-grid">
          {homeSecurityPackages.map((pkg) => (
            <div className="newsite-card" key={pkg.tier}>
              {pkg.highlight && <span className="newsite-badge">{pkg.highlight}</span>}
              <strong>{pkg.name}</strong>
              <div className="newsite-price">{formatPackagePrice(pkg.priceCents)} one-time</div>
              <p>{pkg.summary}</p>
              <ul className="newsite-list">
                {pkg.includedSummary.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <NavLink className="newsite-btn newsite-btn-secondary" to={`/newsite/home-security/packages/${pkg.tier}`}>
                View {pkg.name}
              </NavLink>
            </div>
          ))}
        </div>
      </section>

      <section className="newsite-section">
        <h2>Compare packages</h2>
        <p>Each tier adds expanded coverage, automation, and support.</p>
        <div className="newsite-grid">
          {homeSecurityPackages.map((pkg) => (
            <div className="newsite-card" key={`${pkg.tier}-compare`}>
              <strong>{pkg.name}</strong>
              <p>{pkg.summary}</p>
              <span className="newsite-badge">{formatPackagePrice(pkg.priceCents)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="newsite-section">
        <div className="newsite-surface">
          <h2>Ready to begin?</h2>
          <p>Choose how you want to connect with our security advisors today.</p>
          <div className="newsite-cta-row">
            <NavLink className="newsite-btn" to="/newsite/quote">
              Start online quote
            </NavLink>
            <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/contact">
              Request callback
            </NavLink>
            <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/on-site-quote">
              Request on-site quote
            </NavLink>
            <a className="newsite-btn newsite-btn-secondary" href="tel:17163912405">
              Call now (716) 391-2405
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSecurityPackages;
