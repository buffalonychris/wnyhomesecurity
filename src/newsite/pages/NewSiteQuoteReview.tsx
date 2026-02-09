import { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getHomeSecurityPackage, homeSecurityPackages, type HomeSecurityTier } from '../data/homeSecurity.packages';
import { ensureQuoteDraft, formatCurrency, getQuoteDraft } from '../lib/quoteStorage';

const fallbackTier: HomeSecurityTier = 'silver';

const NewSiteQuoteReview = () => {
  const [selectedTier, setSelectedTier] = useState<HomeSecurityTier>(() => getQuoteDraft()?.selectedTier ?? fallbackTier);
  const [quoteId, setQuoteId] = useState<string>(() => getQuoteDraft()?.quoteId ?? '');

  useEffect(() => {
    const draft = ensureQuoteDraft(selectedTier);
    setQuoteId(draft.quoteId);
  }, [selectedTier]);

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

  return (
    <div className="newsite-container">
      <section className="newsite-hero">
        <div>
          <span className="newsite-badge">Quote review</span>
          <h1>Review your WNY Home Security quote.</h1>
          <p>
            Confirm your selected package and pricing summary. You&apos;ll be able to move directly into the agreement when
            you&apos;re ready.
          </p>
        </div>
        <div className="newsite-card">
          <strong>Quote ID</strong>
          <div className="newsite-summary">
            <div>{quoteId || 'WNYHS-Q-YYYYMMDD-000'}</div>
            <div>Selected package: {selectedPackage.name}</div>
          </div>
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
        <h2>Included coverage</h2>
        <p>These are the core inclusions for the package you selected.</p>
        <div className="newsite-grid">
          <div className="newsite-card">
            <strong>{selectedPackage.name}</strong>
            <ul className="newsite-list">
              {selectedPackage.includedSummary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="newsite-card">
            <strong>Package summary</strong>
            <p>{selectedPackage.summary}</p>
            <ul className="newsite-list">
              {selectedPackage.goodFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="newsite-section">
        <div className="newsite-surface">
          <h2>Next steps</h2>
          <p>Proceed to the agreement to capture acceptance details, or print this quote for your records.</p>
          <div className="newsite-cta-row">
            <NavLink className="newsite-btn" to="/newsite/agreement/review">
              Continue to agreement
            </NavLink>
            <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/quote/print">
              Printable quote
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

export default NewSiteQuoteReview;
