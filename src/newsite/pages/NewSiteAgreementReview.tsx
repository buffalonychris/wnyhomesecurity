import { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getHomeSecurityPackage, homeSecurityPackages, type HomeSecurityTier } from '../data/homeSecurity.packages';
import {
  ensureAgreementDraft,
  ensureQuoteDraft,
  formatCurrency,
  getAgreementDraft,
  getQuoteDraft,
  saveAgreementDraft,
} from '../lib/quoteStorage';

const fallbackTier: HomeSecurityTier = 'silver';

const NewSiteAgreementReview = () => {
  const initialTier = getQuoteDraft()?.selectedTier ?? getAgreementDraft()?.selectedTier ?? fallbackTier;
  const [selectedTier] = useState<HomeSecurityTier>(initialTier);
  const [agreementId, setAgreementId] = useState<string>(() => getAgreementDraft()?.agreementId ?? '');
  const [acceptedName, setAcceptedName] = useState<string>(() => getAgreementDraft()?.acceptedName ?? '');
  const [acceptedDate, setAcceptedDate] = useState<string>(() => getAgreementDraft()?.acceptedDate ?? '');
  const [accepted, setAccepted] = useState<boolean>(() => getAgreementDraft()?.accepted ?? false);

  useEffect(() => {
    const quoteDraft = ensureQuoteDraft(selectedTier);
    const agreementDraft = ensureAgreementDraft(quoteDraft.selectedTier);
    setAgreementId(agreementDraft.agreementId);
    setAcceptedName(agreementDraft.acceptedName);
    setAcceptedDate(agreementDraft.acceptedDate);
    setAccepted(agreementDraft.accepted);
  }, [selectedTier]);

  useEffect(() => {
    const draft = ensureAgreementDraft(selectedTier);
    saveAgreementDraft({
      ...draft,
      agreementId: agreementId || draft.agreementId,
      acceptedName,
      acceptedDate,
      accepted,
    });
  }, [selectedTier, agreementId, acceptedName, acceptedDate, accepted]);

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
          <span className="newsite-badge">Agreement review</span>
          <h1>Finalize your WNY Home Security agreement.</h1>
          <p>
            Review the agreement details and confirm acceptance to move forward with scheduling and deposit.
          </p>
        </div>
        <div className="newsite-card">
          <strong>Agreement ID</strong>
          <div className="newsite-summary">
            <div>{agreementId || 'WNYHS-A-YYYYMMDD-000'}</div>
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
        <div className="newsite-grid">
          <div className="newsite-card">
            <strong>Package inclusions</strong>
            <ul className="newsite-list">
              {selectedPackage.includedSummary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{selectedPackage.summary}</p>
          </div>
          <div className="newsite-card">
            <strong>Acceptance</strong>
            <p>Please confirm acceptance to proceed.</p>
            <label className="newsite-field">
              Typed name
              <input
                className="newsite-input"
                value={acceptedName}
                onChange={(event) => setAcceptedName(event.target.value)}
                placeholder="Full name"
              />
            </label>
            <label className="newsite-field">
              Date
              <input
                className="newsite-input"
                type="date"
                value={acceptedDate}
                onChange={(event) => setAcceptedDate(event.target.value)}
              />
            </label>
            <label className="newsite-field">
              <span>
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(event) => setAccepted(event.target.checked)}
                />
                {' '}I accept the package and pricing summary above.
              </span>
            </label>
          </div>
        </div>
      </section>

      <section className="newsite-section">
        <div className="newsite-surface">
          <h2>Next steps</h2>
          <p>When you&apos;re ready, place your deposit to reserve your installation.</p>
          <div className="newsite-cta-row">
            <NavLink className="newsite-btn" to="/newsite/home-security/pay-deposit">
              Pay deposit
            </NavLink>
            <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/agreement/print">
              Printable agreement
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

export default NewSiteAgreementReview;
