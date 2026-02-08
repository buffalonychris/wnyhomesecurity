import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import WnyhsFunnelLayout from '../components/homeSecurity/WnyhsFunnelLayout';
import WnyhsFunnelStepHeader from '../components/homeSecurity/WnyhsFunnelStepHeader';
import { useLayoutConfig } from '../components/LayoutConfig';
import {
  HOME_SECURITY_DEPOSIT_LABELS,
  HOME_SECURITY_DEPOSIT_TAGLINES,
  HOME_SECURITY_DEPOSIT_TOTAL_CENTS,
  type HomeSecurityDepositTier,
} from '../content/homeSecurityDepositPricing';

const formatCurrency = (amountCents: number) =>
  `$${(amountCents / 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const tierOrder: HomeSecurityDepositTier[] = ['bronze', 'silver', 'gold'];

const HomeSecurityPayDeposit = () => {
  const location = useLocation();
  const [selectedTier, setSelectedTier] = useState<HomeSecurityDepositTier>('silver');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: false,
    breadcrumb: [],
  });

  const pricing = useMemo(() => {
    const totalCents = HOME_SECURITY_DEPOSIT_TOTAL_CENTS[selectedTier];
    const depositCents = Math.round(totalCents * 0.5);
    const remainingCents = totalCents - depositCents;
    return { totalCents, depositCents, remainingCents };
  }, [selectedTier]);

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
    <WnyhsFunnelLayout showStepRail={false}>
      <div className="wnyhs-funnel-stack">
        <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
          <WnyhsFunnelStepHeader
            stepId="deposit"
            title="Pay your 50% installation deposit"
            description="Choose your tier and secure your Home Security installation with a deposit."
            support="Remaining balance is due on arrival (day of install) after a walkthrough confirmation."
          />
          <small style={{ color: '#c8c0aa' }}>
            You are on {location.pathname}. All pricing is locked to the tier you select below.
          </small>
        </div>

        <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
          <div className="badge">Select your tier</div>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {tierOrder.map((tier) => {
              const isSelected = selectedTier === tier;
              return (
                <button
                  key={tier}
                  type="button"
                  className={isSelected ? 'btn btn-primary' : 'btn btn-secondary'}
                  onClick={() => setSelectedTier(tier)}
                  style={{
                    justifyContent: 'space-between',
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'left',
                  }}
                >
                  <span>
                    <strong>{HOME_SECURITY_DEPOSIT_LABELS[tier]}</strong> — {HOME_SECURITY_DEPOSIT_TAGLINES[tier]}
                  </span>
                  {isSelected ? <span aria-hidden="true">✓</span> : null}
                </button>
              );
            })}
          </div>
        </div>

        <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
          <div className="badge">Deposit breakdown</div>
          <div style={{ display: 'grid', gap: '0.35rem', color: '#c8c0aa' }}>
            <div>Tier total: <strong style={{ color: '#fff7e6' }}>{formatCurrency(pricing.totalCents)}</strong></div>
            <div>Deposit due today (50%): <strong style={{ color: 'var(--kaec-gold)' }}>{formatCurrency(pricing.depositCents)}</strong></div>
            <div>Remaining balance on install day: <strong style={{ color: '#fff7e6' }}>{formatCurrency(pricing.remainingCents)}</strong></div>
          </div>
          <p style={{ margin: 0, color: '#c8c0aa' }}>
            Remaining balance is due on arrival (day of install) after a walkthrough confirmation.
          </p>
        </div>

        <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
          <div className="badge">Secure checkout</div>
          <p style={{ margin: 0, color: '#c8c0aa' }}>
            You&apos;ll be redirected to Stripe Checkout to complete the deposit securely.
          </p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleCheckout}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Starting checkout...' : 'Pay 50% Deposit'}
          </button>
          {status === 'error' ? (
            <small style={{ color: '#f5b942' }}>{errorMessage}</small>
          ) : null}
        </div>
      </div>
    </WnyhsFunnelLayout>
  );
};

export default HomeSecurityPayDeposit;
