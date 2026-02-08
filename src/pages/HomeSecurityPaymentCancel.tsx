import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WnyhsFunnelLayout from '../components/homeSecurity/WnyhsFunnelLayout';
import WnyhsFunnelStepHeader from '../components/homeSecurity/WnyhsFunnelStepHeader';
import { useLayoutConfig } from '../components/LayoutConfig';
import { markFlowStep } from '../lib/retailFlow';

const HomeSecurityPaymentCancel = () => {
  useEffect(() => {
    markFlowStep('payment');
  }, []);

  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: false,
    breadcrumb: [],
  });

  return (
    <WnyhsFunnelLayout showStepRail={false}>
      <div className="wnyhs-funnel-stack">
        <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
          <WnyhsFunnelStepHeader
            stepId="deposit"
            title="Checkout canceled"
            description="No charge was made for your Home Security deposit."
            support="When you&apos;re ready, you can restart checkout from the deposit page."
          />
        </div>

        <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
          <div className="badge">Return to deposit</div>
          <p style={{ margin: 0, color: '#c8c0aa' }}>
            If you still want to reserve your installation, head back to the deposit page to select a tier and pay the 50%
            deposit.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" to="/home-security/pay-deposit">
              Back to Deposit
            </Link>
          </div>
        </div>
      </div>
    </WnyhsFunnelLayout>
  );
};

export default HomeSecurityPaymentCancel;
