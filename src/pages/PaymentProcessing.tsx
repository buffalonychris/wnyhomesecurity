import { useMemo } from 'react';
import { siteConfig } from '../config/site';
import { brandShort } from '../lib/brand';
import { loadRetailFlow } from '../lib/retailFlow';
import HelpContactPanel from '../components/HelpContactPanel';
import PaymentInstallDayAccordion from '../components/PaymentInstallDayAccordion';
import { paymentTodayChecklist } from '../content/paymentInstallDay';
import { calculateDepositDue } from '../lib/paymentTerms';

const formatCurrency = (amount: number) => `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const PaymentProcessing = () => {
  const flow = loadRetailFlow();
  const isHomeSecurity = flow.quote?.vertical === 'home-security';
  const total = flow.quote?.pricing.total ?? 0;
  const depositDue = useMemo(() => calculateDepositDue(total, siteConfig.depositPolicy), [total]);
  const balanceDue = useMemo(() => Math.max(total - depositDue, 0), [depositDue, total]);

  return (
    <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '1.5rem' }}>
      <div className="card-grid" style={{ alignItems: 'start' }}>
        <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
          <div className="badge">Stripe deposit checkout</div>
          <h1 style={{ margin: 0, color: '#fff7e6' }}>Pay the deposit to reserve your install date</h1>
          <p style={{ margin: 0, color: '#c8c0aa' }}>
            Secure checkout will be handled by Stripe. Card entry, Apple Pay, and Google Pay are supported so your deposit can be captured without exposing card data to {brandShort}.
          </p>
        </div>
        {isHomeSecurity && <HelpContactPanel />}
      </div>
      <div className="card" style={{ display: 'grid', gap: '1rem' }}>
        <div className="badge">Deposit breakdown</div>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          <strong>Deposit and remaining balance</strong>
          <div style={{ display: 'grid', gap: '0.25rem', color: '#c8c0aa' }}>
            <div>Deposit due today: <strong style={{ color: '#fff7e6' }}>{formatCurrency(depositDue)}</strong></div>
            <div>Remaining balance on arrival: <strong style={{ color: '#fff7e6' }}>{formatCurrency(balanceDue)}</strong></div>
          </div>
          <small style={{ color: '#c8c0aa' }}>
            Deposit policy: {siteConfig.depositPolicy.type === 'flat' ? `Flat ${formatCurrency(siteConfig.depositPolicy.value)}` : `${siteConfig.depositPolicy.value * 100}% of total`}.
          </small>
        </div>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">Secure checkout</div>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          <strong>Pay with card, Apple Pay, or Google Pay</strong>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c8c0aa' }}>
            <span aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 11h12v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 11V7a4 4 0 0 1 8 0v4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <small>Secure checkout via Stripe</small>
          </div>
          <div className="card" style={{ border: '1px dashed rgba(245, 192, 66, 0.5)', background: '#0f0e0d' }}>
            <p style={{ margin: 0, color: '#c8c0aa' }}>
              Stripe Elements placeholder. Card entry and wallet buttons will render here once the live Stripe integration is enabled.
            </p>
          </div>
          <ul className="list" style={{ marginTop: 0 }}>
            <li>
              <span />
              <span>Card payment (Stripe secure fields)</span>
            </li>
            <li>
              <span />
              <span>Apple Pay (Safari on iPhone / Mac)</span>
            </li>
            <li>
              <span />
              <span>Google Pay (Chrome / Android)</span>
            </li>
          </ul>
          {isHomeSecurity && (
            <div className="card" style={{ display: 'grid', gap: '0.5rem', background: '#0f0e0d' }}>
              <strong>What you&apos;ll see today</strong>
              <ul className="list" style={{ marginTop: 0 }}>
                {paymentTodayChecklist.map((item) => (
                  <li key={item}>
                    <span />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">Alternate payment options</div>
        <p style={{ margin: 0, color: '#c8c0aa' }}>
          Cash App and Venmo are accepted as alternate deposit methods. Email{' '}
          <a href="mailto:admin@reliableeldercare.com" style={{ color: '#f5c042' }}>
            admin@reliableeldercare.com
          </a>{' '}
          for the correct handle and include your quote reference so we apply the deposit immediately.
        </p>
      </div>

      {!isHomeSecurity && (
        <div className="card" style={{ display: 'grid', gap: '0.5rem' }}>
          <div className="badge">Payment terms</div>
          <p style={{ margin: 0, color: '#c8c0aa' }}>
            A deposit reserves your install date. The remaining balance is due when we arrive, before installation begins. This
            avoids payment issues after work is complete and keeps your install day on schedule.
          </p>
        </div>
      )}
      {isHomeSecurity && <PaymentInstallDayAccordion />}
    </div>
  );
};

export default PaymentProcessing;
