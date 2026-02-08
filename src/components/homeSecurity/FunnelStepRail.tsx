import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { defaultHomeSecurityFitCheckAnswers, isHomeSecurityFitCheckComplete } from '../../lib/homeSecurityFunnel';
import { loadRetailFlow } from '../../lib/retailFlow';
import { getHomeSecurityFunnelSteps } from '../../content/wnyhsNavigation';

const FunnelStepRail = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
  const earliestIncompleteIndex = Math.max(completionMap.findIndex((completed) => !completed), 0);

  const steps = useMemo(() => getHomeSecurityFunnelSteps(pathParam), [pathParam]);

  useEffect(() => {
    if (!gateMessage) return;
    const timer = window.setTimeout(() => setGateMessage(''), 3000);
    return () => window.clearTimeout(timer);
  }, [gateMessage]);

  const requiredStep = steps[earliestIncompleteIndex];
  const gateCopy = requiredStep
    ? `Next up: ${requiredStep.label}. ${requiredStep.helperText ?? ''}`.trim()
    : 'Complete the required step first.';

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
                onClick={() => {
                  setGateMessage(gateCopy);
                  navigate(steps[earliestIncompleteIndex]?.href ?? steps[0].href);
                }}
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
