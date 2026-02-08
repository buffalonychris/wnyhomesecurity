import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import WnyhsFunnelLayout from '../components/homeSecurity/WnyhsFunnelLayout';
import WnyhsFunnelStepHeader from '../components/homeSecurity/WnyhsFunnelStepHeader';
import { useLayoutConfig } from '../components/LayoutConfig';
import { buildSupportMailto, buildTel, buildSms, wnyhsContact } from '../content/wnyhsContact';
import { markFlowStep, setDepositStatusForQuote } from '../lib/retailFlow';
import { HOME_SECURITY_ROUTES } from '../content/wnyhsNavigation';

const HomeSecurityPaymentSuccess = () => {
  const location = useLocation();
  const [status, setStatus] = useState<'idle' | 'loading' | 'verified' | 'missing' | 'error'>('idle');
  const [verifiedQuoteRef, setVerifiedQuoteRef] = useState<string | null>(null);

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
        const response = await fetch(`/api/verify-checkout-session?session_id=${encodeURIComponent(sessionId)}`);
        const data = (await response.json().catch(() => null)) as
          | { ok?: boolean; paid?: boolean; quoteRef?: string }
          | null;
        if (!isMounted) return;
        if (response.ok && data?.ok && data.paid && data.quoteRef) {
          setDepositStatusForQuote(data.quoteRef, 'completed');
          setVerifiedQuoteRef(data.quoteRef);
          setStatus('verified');
        } else {
          setStatus('error');
        }
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

  return (
    <WnyhsFunnelLayout showStepRail>
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
            {status === 'error' && 'We are still verifying your deposit.'}
          </small>
        </div>

        {status === 'verified' ? (
          <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
            <div className="badge">Next steps</div>
            <p style={{ margin: 0, color: '#c8c0aa' }}>
              Continue to scheduling and share your preferred installation dates. We&apos;ll follow up to confirm the final
              window.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link className="btn btn-primary" to={HOME_SECURITY_ROUTES.schedule}>
                Continue to Scheduling
              </Link>
              <Link className="btn btn-secondary" to={HOME_SECURITY_ROUTES.deposit}>
                View Deposit Details
              </Link>
            </div>
          </div>
        ) : (
          <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
            <div className="badge">Need help?</div>
            <p style={{ margin: 0, color: '#c8c0aa' }}>
              If you do not see a confirmation yet, reach out and we&apos;ll verify your payment or help you complete the
              checkout.
            </p>
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
        )}
      </div>
    </WnyhsFunnelLayout>
  );
};

export default HomeSecurityPaymentSuccess;
