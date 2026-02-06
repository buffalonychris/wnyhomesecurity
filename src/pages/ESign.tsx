import { useLocation } from 'react-router-dom';
import { QuoteContext } from '../lib/agreement';
import { brandShort } from '../lib/brand';

const ESign = () => {
  const location = useLocation();
  const state = location.state as { quoteContext?: QuoteContext; fullName?: string; acceptanceDate?: string } | undefined;

  const mailSubject = encodeURIComponent(`${brandShort} E-Signature Request`);

  return (
    <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '1.5rem' }}>
      <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">E-Signature placeholder</div>
        <h1 style={{ margin: 0, color: '#fff7e6' }}>Finalize via secure signing link</h1>
        <p style={{ margin: 0, color: '#c8c0aa' }}>
          E-Signature is completed via a secure signing link (to be implemented in the KAEC backend). Agreement is not fully executed until e-signature is completed.
        </p>
        <small style={{ color: '#c8c0aa' }}>
          {state?.fullName && state?.acceptanceDate
            ? `Provided name: ${state.fullName} on ${state.acceptanceDate}`
            : 'Provide your name on the agreement page to pre-fill signing info.'}
        </small>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <strong>Status</strong>
        <p style={{ margin: 0, color: '#c8c0aa' }}>
          Agreement is not fully executed until e-signature is completed.
        </p>
        <a className="btn btn-primary" href={`mailto:care@kickassfamily.com?subject=${mailSubject}`}>
          Contact us to complete signing
        </a>
        {state?.quoteContext && (
          <small style={{ color: '#c8c0aa' }}>
            Quote reference: {state.quoteContext.packageId} — {state.quoteContext.pricing.total}
          </small>
        )}
      </div>
    </div>
  );
};

export default ESign;
