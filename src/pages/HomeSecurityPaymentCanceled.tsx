import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WnyhsFunnelLayout from '../components/homeSecurity/WnyhsFunnelLayout';
import WnyhsFunnelStepHeader from '../components/homeSecurity/WnyhsFunnelStepHeader';
import { useLayoutConfig } from '../components/LayoutConfig';
import { markFlowStep, updateRetailFlow } from '../lib/retailFlow';
import { HOME_SECURITY_ROUTES } from '../content/wnyhsNavigation';

const HomeSecurityPaymentCanceled = () => {
  useEffect(() => {
    markFlowStep('payment');
    updateRetailFlow({ payment: { depositStatus: 'pending' } });
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
            title="Deposit needed"
            description="Your card has not been charged."
            support="If you’re ready, retry secure checkout to complete the Home Security deposit."
          />
        </div>

        <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
          <div className="badge">Retry</div>
          <p style={{ margin: 0, color: '#c8c0aa' }}>
            Return to the deposit step to restart checkout or review the quoted total.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" to={HOME_SECURITY_ROUTES.deposit}>
              Retry Deposit
            </Link>
            <Link className="btn btn-secondary" to={HOME_SECURITY_ROUTES.agreement}>
              Review Agreement
            </Link>
          </div>
        </div>
      </div>
    </WnyhsFunnelLayout>
  );
};

export default HomeSecurityPaymentCanceled;
