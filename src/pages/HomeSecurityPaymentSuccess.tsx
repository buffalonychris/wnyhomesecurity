import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import WnyhsFunnelLayout from '../components/homeSecurity/WnyhsFunnelLayout';
import WnyhsFunnelStepHeader from '../components/homeSecurity/WnyhsFunnelStepHeader';
import { useLayoutConfig } from '../components/LayoutConfig';
import { markFlowStep, updateRetailFlow } from '../lib/retailFlow';
import { HOME_SECURITY_ROUTES } from '../content/wnyhsNavigation';

const HomeSecurityPaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    markFlowStep('payment');
    updateRetailFlow({ payment: { depositStatus: 'completed' } });
  }, []);

  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: false,
    breadcrumb: [],
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
          {sessionId && <small style={{ color: '#c8c0aa' }}>Deposit processing complete.</small>}
        </div>

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
      </div>
    </WnyhsFunnelLayout>
  );
};

export default HomeSecurityPaymentSuccess;
