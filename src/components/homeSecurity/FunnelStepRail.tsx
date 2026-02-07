import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { defaultHomeSecurityFitCheckAnswers, isHomeSecurityFitCheckComplete } from '../../lib/homeSecurityFunnel';
import { loadRetailFlow } from '../../lib/retailFlow';

type FunnelStep = {
  label: string;
  href: string;
  matchPath: string;
};

const appendPathParam = (href: string, pathParam?: string | null) => {
  if (!pathParam) return href;
  if (href.includes('?')) {
    return `${href}&path=${pathParam}`;
  }
  return `${href}?path=${pathParam}`;
};

const FunnelStepRail = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const pathParam = searchParams.get('path');
  const [gateMessage, setGateMessage] = useState('');
  const flowState = useMemo(() => loadRetailFlow(), [location.pathname, location.search]);
  const fitCheckComplete = isHomeSecurityFitCheckComplete(
    flowState.homeSecurity?.fitCheckAnswers ?? defaultHomeSecurityFitCheckAnswers,
  );
  const quoteComplete = Boolean(flowState.quote);
  const plannerComplete = Boolean(flowState.homeSecurity?.plannerRecommendation || flowState.homeSecurity?.floorplan);
  const agreementComplete = Boolean(flowState.agreementAcceptance?.accepted);
  const paymentComplete = flowState.payment?.depositStatus === 'completed';
  const scheduleComplete = Boolean(flowState.scheduleRequest);
  const completionMap = [fitCheckComplete, quoteComplete, plannerComplete, agreementComplete, paymentComplete, scheduleComplete];

  const steps: FunnelStep[] = [
    {
      label: 'Fit Check',
      href: appendPathParam('/discovery?vertical=home-security', pathParam),
      matchPath: '/discovery',
    },
    {
      label: 'Quote',
      href: appendPathParam('/quote?vertical=home-security', pathParam),
      matchPath: '/quote',
    },
    {
      label: 'Planner',
      href: appendPathParam('/home-security/planner?vertical=home-security', pathParam),
      matchPath: '/home-security/planner',
    },
    {
      label: 'Agreement',
      href: '/agreementReview',
      matchPath: '/agreementReview',
    },
    {
      label: 'Payment',
      href: '/payment',
      matchPath: '/payment',
    },
    {
      label: 'Schedule',
      href: '/schedule',
      matchPath: '/schedule',
    },
  ];

  useEffect(() => {
    if (!gateMessage) return;
    const timer = window.setTimeout(() => setGateMessage(''), 3000);
    return () => window.clearTimeout(timer);
  }, [gateMessage]);

  return (
    <div className="hs-funnel-step-rail-wrap">
      <nav className="hs-funnel-step-rail" aria-label="Home Security funnel steps">
        {steps.map((step, index) => {
          const isActive = location.pathname === step.matchPath;
          const isComplete = completionMap[index];
          const isEnabled = isActive || index === 0 || completionMap[index - 1];
          const className = [
            'hs-funnel-step-rail-link',
            isActive ? 'is-active' : null,
            isComplete ? 'is-complete' : null,
            !isEnabled ? 'is-disabled' : null,
          ]
            .filter(Boolean)
            .join(' ');

          if (!isEnabled) {
            return (
              <button
                key={step.label}
                type="button"
                className={className}
                aria-disabled="true"
                onClick={() => setGateMessage('Complete the prior step first.')}
              >
                {step.label}
              </button>
            );
          }

          return (
            <NavLink key={step.label} to={step.href} className={className}>
              {step.label}
            </NavLink>
          );
        })}
      </nav>
      {gateMessage ? <div className="hs-funnel-step-rail-banner">{gateMessage}</div> : null}
    </div>
  );
};

export default FunnelStepRail;
