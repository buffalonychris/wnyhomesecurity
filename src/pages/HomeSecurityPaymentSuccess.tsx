import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import WnyhsFunnelLayout from '../components/homeSecurity/WnyhsFunnelLayout';
import WnyhsFunnelStepHeader from '../components/homeSecurity/WnyhsFunnelStepHeader';
import { useLayoutConfig } from '../components/LayoutConfig';
import { buildSupportMailto, buildTel, buildSms, wnyhsContact } from '../content/wnyhsContact';
import { markFlowStep, setDepositStatusForQuote } from '../lib/retailFlow';

const HomeSecurityPaymentSuccess = () => {
  const location = useLocation();
  const [status, setStatus] = useState<'idle' | 'loading' | 'verified' | 'missing' | 'unpaid' | 'error'>('idle');
  const [verifiedQuoteRef, setVerifiedQuoteRef] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<Record<string, string> | null>(null);

  const sessionId = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get('session_id');
  }, [location.search]);

  useEffect(() => {
    markFlowStep('payment');
  }, []);

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
            const quoteRef = data.metadata?.quoteRef;
            if (quoteRef) {
              setDepositStatusForQuote(quoteRef, 'completed');
              setVerifiedQuoteRef(quoteRef);
            }
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

  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: false,
    breadcrumb: [],
  });

  const supportMailto = buildSupportMailto({
    quoteRef: verifiedQuoteRef ?? undefined,
    issue: 'Payment confirmation help',
    pageRoute: `${location.pathname}${location.search}`,
  });

  const tierLabel = metadata?.tier ? `${metadata.tier.charAt(0).toUpperCase()}${metadata.tier.slice(1)}` : null;

  return (
    <WnyhsFunnelLayout showStepRail={false}>
      <div className="wnyhs-funnel-stack">
        <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
          <WnyhsFunnelStepHeader
            stepId="deposit"
            title="Deposit confirmed"
            description="Your Home Security deposit is confirmed."
            support="Next, we’ll coordinate your installation window and finalize on-site placement."
          />
          <small style={{ color: '#c8c0aa' }}>
            {status === 'loading' && 'Confirming your deposit...'}
            {status === 'verified' && 'Deposit processing complete.'}
            {status === 'missing' && 'We did not detect a checkout session yet.'}
            {status === 'unpaid' && 'This checkout is not marked as paid yet.'}
            {status === 'error' && 'We are still verifying your deposit.'}
          </small>
        </div>

        {status === 'verified' ? (
          <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
            <div className="badge">Next steps</div>
            <p style={{ margin: 0, color: '#c8c0aa' }}>
              We&apos;ll follow up to confirm your installation window. If you need anything immediately, reach out and we
              will help.
            </p>
            {tierLabel ? (
              <p style={{ margin: 0, color: '#c8c0aa' }}>
                Deposit received for the <strong style={{ color: '#fff7e6' }}>{tierLabel}</strong> tier.
              </p>
            ) : null}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a className="btn btn-secondary" href={supportMailto}>
                Email {wnyhsContact.emails.support}
              </a>
              <a className="btn btn-secondary" href={buildTel()}>
                Call {wnyhsContact.phone.display}
              </a>
              <a className="btn btn-secondary" href={buildSms('Hi! I need help with my Home Security deposit confirmation.')}>
                Text us
              </a>
            </div>
          </div>
        ) : (
          <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
            <div className="badge">Need help?</div>
            <p style={{ margin: 0, color: '#c8c0aa' }}>
              If you do not see a confirmation yet, restart checkout or contact us and we&apos;ll verify your payment.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link className="btn btn-primary" to="/home-security/pay-deposit">
                Back to Deposit
              </Link>
              <a className="btn btn-secondary" href={supportMailto}>
                Email {wnyhsContact.emails.support}
              </a>
              <a className="btn btn-secondary" href={buildTel()}>
                Call {wnyhsContact.phone.display}
              </a>
              <a className="btn btn-secondary" href={buildSms('Hi! I need help with my Home Security deposit confirmation.')}>
                Text us
              </a>
            </div>
          </div>
        )}
      </div>
    </WnyhsFunnelLayout>
  );
};

export default HomeSecurityPaymentSuccess;
