import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { formatPackagePrice, getHomeSecurityPackage } from '../data/homeSecurity.packages';
import { getQuoteDraft } from '../lib/quoteStorage';

const NewSiteSchedule = () => {
  const quoteDraft = useMemo(() => getQuoteDraft(), []);
  const selectedPackage = quoteDraft ? getHomeSecurityPackage(quoteDraft.selectedTier) : null;

  return (
    <div className="newsite-container">
      <section className="newsite-hero">
        <div>
          <span className="newsite-badge">Installation scheduling</span>
          <h1>Next step: schedule your install</h1>
          <p>
            We&apos;ll align on timing, confirm access details, and make sure your home is ready for a seamless
            installation day.
          </p>
        </div>
        <div className="newsite-card">
          <strong>Selected package</strong>
          {selectedPackage ? (
            <>
              <p>{selectedPackage.name}</p>
              <p className="newsite-price">{formatPackagePrice(selectedPackage.priceCents)} one-time</p>
            </>
          ) : (
            <>
              <p>No package selected yet.</p>
              <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/home-security/packages">
                Explore packages
              </NavLink>
            </>
          )}
        </div>
      </section>

      <section className="newsite-section">
        <h2>Choose your scheduling path</h2>
        <p>Pick the option that feels most convenient. We&apos;ll keep it simple and no-pressure.</p>
        <div className="newsite-grid">
          <div className="newsite-card">
            <strong>Call now</strong>
            <p>Speak directly with a scheduling concierge to confirm a time.</p>
            <a className="newsite-btn newsite-btn-secondary" href="tel:17163912405">
              Call (716) 391-2405
            </a>
          </div>
          <div className="newsite-card">
            <strong>Request a callback</strong>
            <p>Send a preferred time and we&apos;ll call you to finalize the schedule.</p>
            <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/callback">
              Request callback
            </NavLink>
          </div>
          <div className="newsite-card">
            <strong>Request an on-site quote</strong>
            <p>Want a final walk-through? Book an on-site visit before we schedule install.</p>
            <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/on-site-quote">
              Request on-site quote
            </NavLink>
          </div>
        </div>
      </section>

      <section className="newsite-section">
        <div className="newsite-surface">
          <h2>Calendar scheduling (coming next)</h2>
          <p>
            We&apos;re preparing a self-serve calendar experience. Soon you&apos;ll be able to pick an installation
            window instantly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NewSiteSchedule;
