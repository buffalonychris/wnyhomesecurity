import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WnyhsFunnelLayout from '../components/homeSecurity/WnyhsFunnelLayout';
import { useLayoutConfig } from '../components/LayoutConfig';
import { markFlowStep, updateRetailFlow } from '../lib/retailFlow';

const HomeSecurityPaymentCanceled = () => {
  useEffect(() => {
    markFlowStep('payment');
    updateRetailFlow({ payment: { depositStatus: 'pending' } });
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
    <WnyhsFunnelLayout showStepRail>
      <div className="wnyhs-funnel-stack" style={{ padding: '3rem 0', display: 'grid', gap: '1.5rem' }}>
      <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">Payment canceled</div>
        <h1 className="wnyhs-funnel-title">Step 5: Payment needed</h1>
        <p style={{ margin: 0, color: '#c8c0aa' }}>
          Your card has not been charged. If you&apos;re ready, you can retry the secure checkout to complete the
          Home Security deposit.
        </p>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">Retry</div>
        <p style={{ margin: 0, color: '#c8c0aa' }}>
          Return to the deposit step to restart checkout or review the quoted total.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link className="btn btn-primary" to="/payment">
            Retry Deposit Payment
          </Link>
          <Link className="btn btn-secondary" to="/agreementReview">
            Review Agreement
          </Link>
        </div>
      </div>
    </div>
    </WnyhsFunnelLayout>
  );
};

export default HomeSecurityPaymentCanceled;
