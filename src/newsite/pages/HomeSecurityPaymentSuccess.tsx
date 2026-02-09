import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const HomeSecurityPaymentSuccess = () => {
  const location = useLocation();
  const [status, setStatus] = useState<'idle' | 'loading' | 'verified' | 'missing' | 'unpaid' | 'error'>('idle');
  const [metadata, setMetadata] = useState<Record<string, string> | null>(null);

  const sessionId = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get('session_id');
  }, [location.search]);

  useEffect(() => {
    if (!sessionId) {
      setStatus('missing');
      return;
    }

    let isMounted = true;
    const verify = async () => {
      setStatus('loading');
      try {
        const response = await fetch('/api/verify-checkout-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ session_id: sessionId }),
        });
        const data = (await response.json().catch(() => null)) as
          | { ok?: boolean; paid?: boolean; metadata?: Record<string, string> }
          | null;

        if (!isMounted) return;

        if (response.ok && data?.ok) {
          if (data.paid) {
            setMetadata(data.metadata ?? null);
            setStatus('verified');
            return;
          }
          setStatus('unpaid');
          return;
        }
        setStatus('error');
      } catch (error) {
        if (isMounted) setStatus('error');
      }
    };

    verify();

    return () => {
      isMounted = false;
    };
  }, [sessionId]);

  const tierLabel = metadata?.tier ? `${metadata.tier.charAt(0).toUpperCase()}${metadata.tier.slice(1)}` : null;

  return (
    <div className="newsite-container">
      <section className="newsite-hero">
        <div>
          <span className="newsite-badge">Deposit confirmation</span>
          <h1>Deposit confirmed.</h1>
          <p>Your Home Security deposit is confirmed and we&apos;ll follow up to schedule installation.</p>
          <p>
            Remaining balance is due on arrival (day of install) after a walkthrough confirmation.
          </p>
          <p>
            {status === 'loading' && 'Confirming your deposit...'}
            {status === 'verified' && 'Deposit processing complete.'}
            {status === 'missing' && 'We did not detect a checkout session yet.'}
            {status === 'unpaid' && 'This checkout is not marked as paid yet.'}
            {status === 'error' && 'We are still verifying your deposit.'}
          </p>
        </div>
        <div className="newsite-card">
          <strong>Next steps</strong>
          <p>
            We&apos;ll coordinate your installation window and confirm the final placement checklist.
          </p>
          {tierLabel ? <p>Deposit received for the {tierLabel} tier.</p> : null}
          <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/home-security/packages">
            Explore packages
          </NavLink>
        </div>
      </section>

      <section className="newsite-section">
        <div className="newsite-surface">
          <h2>Need anything else?</h2>
          <p>Our team is standing by if you have questions about the next steps.</p>
          <div className="newsite-cta-row">
            <NavLink className="newsite-btn" to="/newsite/contact">
              Contact support
            </NavLink>
            <a className="newsite-btn newsite-btn-secondary" href="tel:17163912405">
              Call (716) 391-2405
            </a>
            <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/home-security/pay-deposit">
              Back to deposit
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSecurityPaymentSuccess;
