import { NavLink } from 'react-router-dom';
import { getHomeSecurityFunnelSteps, HOME_SECURITY_ROUTES } from '../content/wnyhsNavigation';
import { loadRetailFlow } from '../lib/retailFlow';

export type HomeSecurityFunnelStep = 'packages' | 'fit-check' | 'quote' | 'planner' | 'agreement' | 'deposit' | 'schedule';

const HomeSecurityFunnelSteps = ({ currentStep }: { currentStep: HomeSecurityFunnelStep }) => {
  const flow = loadRetailFlow();
  const selectedPackage = flow.homeSecurity?.selectedPackageId;
  const selectedPath = flow.homeSecurity?.selectedPath;

  const funnelSteps = getHomeSecurityFunnelSteps();
  const steps: Array<{ id: HomeSecurityFunnelStep; label: string; path: string }> = [
    { id: 'packages', label: 'Packages', path: HOME_SECURITY_ROUTES.packages },
    ...funnelSteps.map((step) => ({
      id: step.id,
      label: step.label,
      path: step.href,
    })),
  ];

  return (
    <div className="card flow-guide" style={{ display: 'grid', gap: '0.5rem' }}>
      <div className="flow-guide-steps" role="list">
        {steps.map((step) => {
          const currentIndex = steps.findIndex((item) => item.id === currentStep);
          const stepIndex = steps.findIndex((item) => item.id === step.id);
          const status = stepIndex < currentIndex ? 'complete' : step.id === currentStep ? 'current' : 'upcoming';
          const path = selectedPackage && step.id === 'quote' ? `${step.path}${step.path.includes('?') ? '&' : '?'}package=${selectedPackage}` : step.path;
          const withPath = selectedPath ? `${path}${path.includes('?') ? '&' : '?'}path=${selectedPath}` : path;
          return (
            <NavLink key={step.id} to={withPath} className={`flow-guide-step ${status}`} role="listitem">
              <span className="flow-guide-icon" aria-hidden="true">
                {status === 'complete' ? '✓' : status === 'current' ? '•' : ''}
              </span>
              <span>{step.label}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default HomeSecurityFunnelSteps;
