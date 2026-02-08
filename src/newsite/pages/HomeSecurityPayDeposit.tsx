import { useMemo, useState } from 'react';
import { homeSecurityPackages, type HomeSecurityTier } from '../data/homeSecurity.packages';

const formatCurrency = (amountCents: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amountCents / 100);

const HomeSecurityPayDeposit = () => {
  const [selectedTier, setSelectedTier] = useState<HomeSecurityTier>('silver');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const selectedPackage = useMemo(
    () => homeSecurityPackages.find((pkg) => pkg.tier === selectedTier) ?? homeSecurityPackages[0],
    [selectedTier],
  );

  const pricing = useMemo(() => {
    const totalCents = selectedPackage.priceCents;
    const depositCents = Math.round(totalCents * 0.5);
    const remainingCents = totalCents - depositCents;
    return { totalCents, depositCents, remainingCents };
  }, [selectedPackage]);

  const handleCheckout = async () => {
    setStatus('loading');
    setErrorMessage(null);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier: selectedTier }),
      });
      const data = (await response.json().catch(() => null)) as { url?: string; error?: string } | null;

      if (!response.ok || !data?.url) {
        setStatus('error');
        setErrorMessage(data?.error ?? 'Unable to start checkout. Please try again.');
        return;
      }

      window.location.href = data.url;
    } catch (error) {
      setStatus('error');
      setErrorMessage('Unable to start checkout. Please try again.');
    }
  };

  return (
    <div className="newsite-container">
      <section className="newsite-hero">
        <div>
          <span className="newsite-badge">Pay your 50% deposit</span>
          <h1>Reserve your installation with a deposit.</h1>
          <p>
            Choose a tier below and secure your Home Security installation with a 50% deposit.
          </p>
          <p>
            Remaining balance is due on arrival (day of install) after a walkthrough confirmation.
          </p>
        </div>
        <div className="newsite-card">
          <strong>Deposit summary</strong>
          <p>{selectedPackage.name}</p>
          <div className="newsite-list">
            <div>Total: {formatCurrency(pricing.totalCents)}</div>
            <div>Deposit today (50%): {formatCurrency(pricing.depositCents)}</div>
            <div>Remaining balance: {formatCurrency(pricing.remainingCents)}</div>
          </div>
        </div>
      </section>

      <section className="newsite-section">
        <h2>Select your tier</h2>
        <p>Pick the tier you want to reserve. Pricing is locked to your selection.</p>
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
                <div className="newsite-price">{formatCurrency(pkg.priceCents)} total</div>
                <p>{pkg.summary}</p>
              </button>
            );
          })}
        </div>
      </section>

      <section className="newsite-section">
        <div className="newsite-surface">
          <h2>Deposit breakdown</h2>
          <p>Review the total, your 50% deposit today, and what remains on install day.</p>
          <ul className="newsite-list">
            <li>Tier total: {formatCurrency(pricing.totalCents)}</li>
            <li>Deposit due today (50%): {formatCurrency(pricing.depositCents)}</li>
            <li>Remaining balance on install day: {formatCurrency(pricing.remainingCents)}</li>
          </ul>
          <p>
            Remaining balance is due on arrival (day of install) after a walkthrough confirmation.
          </p>
        </div>
      </section>

      <section className="newsite-section">
        <div className="newsite-surface">
          <h2>Secure checkout</h2>
          <p>You&apos;ll be redirected to Stripe Checkout to complete the deposit securely.</p>
          <button
            className="newsite-btn"
            type="button"
            onClick={handleCheckout}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Starting checkout...' : 'Pay 50% deposit'}
          </button>
          {status === 'error' ? <p>{errorMessage}</p> : null}
        </div>
      </section>
    </div>
  );
};

export default HomeSecurityPayDeposit;
