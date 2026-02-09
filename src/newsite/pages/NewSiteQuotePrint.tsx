import { useMemo } from 'react';
import { getHomeSecurityPackage, homeSecurityPackages, type HomeSecurityTier } from '../data/homeSecurity.packages';
import { ensureQuoteDraft, formatCurrency, getQuoteDraft } from '../lib/quoteStorage';

const fallbackTier: HomeSecurityTier = 'silver';

const NewSiteQuotePrint = () => {
  const draft = getQuoteDraft() ?? ensureQuoteDraft(fallbackTier);
  const selectedPackage = useMemo(
    () => getHomeSecurityPackage(draft.selectedTier) ?? homeSecurityPackages[0],
    [draft.selectedTier],
  );

  const pricing = useMemo(() => {
    const totalCents = selectedPackage.priceCents;
    const depositCents = Math.round(totalCents * 0.5);
    const remainingCents = totalCents - depositCents;
    return { totalCents, depositCents, remainingCents };
  }, [selectedPackage]);

  return (
    <div className="newsite-container newsite-print-page">
      <header className="newsite-print-header">
        <div>
          <h1>WNY Home Security Quote</h1>
          <p>Quote ID: {draft.quoteId}</p>
          <p>Date issued: {new Date(draft.createdAt).toLocaleDateString('en-US')}</p>
        </div>
        <div>
          <strong>WNY Home Security</strong>
          <p>Western New York</p>
          <p>(716) 391-2405</p>
        </div>
      </header>

      <div className="newsite-print-actions">
        <button className="newsite-btn" type="button" onClick={() => window.print()}>
          Print this quote
        </button>
      </div>

      <section className="newsite-surface">
        <h2>Pricing summary</h2>
        <div className="newsite-summary">
          <div>Package: {selectedPackage.name}</div>
          <div>One-time total: {formatCurrency(pricing.totalCents)}</div>
          <div>50% deposit: {formatCurrency(pricing.depositCents)}</div>
          <div>Remaining balance: {formatCurrency(pricing.remainingCents)}</div>
        </div>
        <p>
          Remaining balance is due on arrival (day of install) after a walkthrough confirmation.
        </p>
      </section>

      <section className="newsite-surface">
        <h2>Package inclusions</h2>
        <ul className="newsite-list">
          {selectedPackage.includedSummary.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="newsite-surface">
        <h2>Assumptions</h2>
        <ul className="newsite-list">
          <li>Pricing assumes standard installation within the WNY Home Security service area.</li>
          <li>Existing power and Wi-Fi connectivity are available at the installation site.</li>
          <li>Package coverage is based on the included sensor and monitoring scope.</li>
        </ul>
      </section>

      <section className="newsite-surface">
        <h2>Warranty</h2>
        <p>1-year warranty on all equipment. Optional extended warranty available for purchase.</p>
      </section>

      <section className="newsite-surface">
        <h2>Disclaimers</h2>
        <ul className="newsite-list">
          <li>Monitoring service and optional add-ons are billed separately.</li>
          <li>Final installation schedule is confirmed after deposit and walkthrough approval.</li>
        </ul>
      </section>
    </div>
  );
};

export default NewSiteQuotePrint;
