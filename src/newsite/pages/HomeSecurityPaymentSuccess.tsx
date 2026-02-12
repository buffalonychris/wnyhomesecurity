import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

type HomeSecurityTier = 'bronze' | 'silver' | 'gold';

type VerifyState =
  | { status: 'loading' }
  | { status: 'missing' }
  | { status: 'verified'; tier: HomeSecurityTier }
  | { status: 'unverified' }
  | { status: 'error' };

const formatTierLabel = (tier: HomeSecurityTier) => `${tier.charAt(0).toUpperCase()}${tier.slice(1)}`;

const HomeSecurityPaymentSuccess = () => {
  const location = useLocation();
  const [verifyState, setVerifyState] = useState<VerifyState>({ status: 'loading' });

  const sessionId = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get('session_id');
  }, [location.search]);

  useEffect(() => {
    if (!sessionId) {
      setVerifyState({ status: 'missing' });
      return;
    }

    let isMounted = true;

    const verify = async () => {
      setVerifyState({ status: 'loading' });
      try {
        const response = await fetch(`/api/stripe/verify-session?session_id=${encodeURIComponent(sessionId)}`);
        const data = (await response.json().catch(() => null)) as
          | { verified?: boolean; tier?: HomeSecurityTier }
          | null;

        if (!isMounted) return;

        if (response.ok && data?.verified && data.tier) {
          setVerifyState({ status: 'verified', tier: data.tier });
          return;
        }

        if (response.ok) {
          setVerifyState({ status: 'unverified' });
          return;
        }

        setVerifyState({ status: 'error' });
      } catch {
        if (isMounted) {
          setVerifyState({ status: 'error' });
        }
      }
    };

    verify();

    return () => {
      isMounted = false;
    };
  }, [sessionId]);

  const scheduleTo =
    verifyState.status === 'verified'
      ? `/newsite/schedule?tier=${encodeURIComponent(verifyState.tier)}&source=verified`
      : '/newsite/schedule';

  return (
    <div className="newsite-container">
      <section className="newsite-hero">
        <div>
          <span className="newsite-badge">Deposit confirmation</span>
          <h1>
            {verifyState.status === 'verified'
              ? 'Payment confirmed.'
              : verifyState.status === 'missing'
                ? 'We couldn\'t find your session.'
                : 'We\'re confirming your payment.'}
          </h1>
          {verifyState.status === 'verified' ? (
            <>
              <p>Your Home Security deposit is verified and your install scheduling is ready.</p>
              <p>Verified package tier: {formatTierLabel(verifyState.tier)}.</p>
            </>
          ) : (
            <p>
              If you just completed checkout, keep this page open for a moment and try refreshing. If this persists,
              contact our team and we&apos;ll confirm your payment quickly.
            </p>
          )}
          {verifyState.status === 'loading' ? <p>Checking Stripe confirmation...</p> : null}
          {verifyState.status === 'unverified' ? <p>Payment was not yet verified for this session.</p> : null}
          {verifyState.status === 'error' ? <p>We hit an issue while checking Stripe. Please contact us.</p> : null}
        </div>
        <div className="newsite-card">
          <strong>Next steps</strong>
          {verifyState.status === 'verified' ? (
            <>
              <p>Your payment is confirmed.</p>
              <NavLink className="newsite-btn" to={scheduleTo}>
                Schedule your install
              </NavLink>
            </>
          ) : (
            <>
              <p>We&apos;ll help verify and schedule with you directly.</p>
              <a className="newsite-btn" href="tel:17163912405">
                Call (716) 391-2405
              </a>
            </>
          )}
          <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/home-security/packages">
            Explore packages
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomeSecurityPaymentSuccess;
