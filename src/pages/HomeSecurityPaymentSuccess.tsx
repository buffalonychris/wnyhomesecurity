import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import HomeSecurityFunnelSteps from '../components/HomeSecurityFunnelSteps';
import { useLayoutConfig } from '../components/LayoutConfig';
import { markFlowStep, updateRetailFlow } from '../lib/retailFlow';

const HomeSecurityPaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    markFlowStep('payment');
    updateRetailFlow({ payment: { depositStatus: 'completed' } });
  }, []);

  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: true,
    breadcrumb: [
      { label: 'Home Security', href: '/home-security' },
      { label: 'Deposit' },
    ],
  });

  return (
    <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '1.5rem' }}>
      <HomeSecurityFunnelSteps currentStep="deposit" />
      <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">Deposit received</div>
        <h1 style={{ margin: 0, color: '#fff7e6' }}>Payment confirmed</h1>
        <p style={{ margin: 0, color: '#c8c0aa' }}>
          Your Home Security deposit is confirmed. Next, we&apos;ll coordinate your installation window and finalize
          on-site placement.
        </p>
        {sessionId && (
          <small style={{ color: '#c8c0aa' }}>Stripe session: {sessionId}</small>
        )}
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">Next steps</div>
        <p style={{ margin: 0, color: '#c8c0aa' }}>
          Continue to scheduling and share your preferred installation dates. We&apos;ll follow up to confirm the final
          window.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link className="btn btn-primary" to="/schedule">
            Continue to Scheduling
          </Link>
          <Link className="btn btn-secondary" to="/payment">
            View Deposit Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSecurityPaymentSuccess;
