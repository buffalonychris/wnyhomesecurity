import { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getHomeSecurityPackage, homeSecurityPackages, type HomeSecurityTier } from '../data/homeSecurity.packages';
import { ensureQuoteDraft, formatCurrency, getQuoteDraft } from '../lib/quoteStorage';

const NewSiteQuote = () => {
  const [selectedTier, setSelectedTier] = useState<HomeSecurityTier>(() => getQuoteDraft()?.selectedTier ?? 'silver');

  const selectedPackage = useMemo(
    () => getHomeSecurityPackage(selectedTier) ?? homeSecurityPackages[0],
    [selectedTier],
  );

  const pricing = useMemo(() => {
    const totalCents = selectedPackage.priceCents;
    const depositCents = Math.round(totalCents * 0.5);
    const remainingCents = totalCents - depositCents;
    return { totalCents, depositCents, remainingCents };
  }, [selectedPackage]);

  const handleContinue = () => {
    ensureQuoteDraft(selectedTier);
  };

  return (
    <div className="newsite-container">
      <section className="newsite-hero">
        <div>
          <span className="newsite-badge">Online quote</span>
          <h1>Build your WNY Home Security quote.</h1>
          <p>
            Select the package that fits your home. We&apos;ll summarize your one-time total, deposit, and what&apos;s left
            for installation day.
          </p>
        </div>
        <div className="newsite-card">
          <strong>Quote snapshot</strong>
          <p>{selectedPackage.name}</p>
          <div className="newsite-summary">
            <div>One-time total: {formatCurrency(pricing.totalCents)}</div>
            <div>50% deposit: {formatCurrency(pricing.depositCents)}</div>
            <div>Remaining balance: {formatCurrency(pricing.remainingCents)}</div>
          </div>
          <p>
            Remaining balance is due on arrival (day of install) after a walkthrough confirmation.
          </p>
          <p>
            1-year warranty on all equipment. Optional extended warranty available for purchase.
          </p>
        </div>
      </section>

      <section className="newsite-section">
        <h2>Select a package</h2>
        <p>Choose the coverage level you want to lock in for your quote.</p>
        <div className="newsite-grid">
          {homeSecurityPackages.map((pkg) => {
            const isSelected = pkg.tier === selectedTier;
            return (
              <button
                key={pkg.tier}
                type="button"
                className="newsite-card"
                onClick={() => setSelectedTier(pkg.tier)}
                aria-pressed={isSelected}
                style={{
                  textAlign: 'left',
                  border: isSelected ? '2px solid var(--newsite-accent, #c89b47)' : undefined,
                }}
              >
                {pkg.highlight && <span className="newsite-badge">{pkg.highlight}</span>}
                <strong>{pkg.name}</strong>
                <div className="newsite-price">{formatCurrency(pkg.priceCents)} one-time</div>
                <p>{pkg.summary}</p>
                <ul className="newsite-list">
                  {pkg.includedSummary.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>
      </section>

      <section className="newsite-section">
        <div className="newsite-surface">
          <h2>Ready to review?</h2>
          <p>Continue to review your quote details and prepare the agreement.</p>
          <div className="newsite-cta-row">
            <NavLink className="newsite-btn" to="/newsite/quote/review" onClick={handleContinue}>
              Review quote
            </NavLink>
            <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/contact">
              Talk to an advisor
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewSiteQuote;
