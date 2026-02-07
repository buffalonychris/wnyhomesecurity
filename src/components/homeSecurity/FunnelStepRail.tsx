import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

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
      label: 'Deposit',
      href: '/payment',
      matchPath: '/payment',
    },
    {
      label: 'Schedule',
      href: '/schedule',
      matchPath: '/schedule',
    },
  ];

  return (
    <nav className="hs-funnel-step-rail" aria-label="Home Security funnel steps">
      {steps.map((step) => {
        const isActive = location.pathname === step.matchPath;
        const className = ['hs-funnel-step-rail-link', isActive ? 'is-active' : null].filter(Boolean).join(' ');
        return (
          <NavLink key={step.label} to={step.href} className={className}>
            {step.label}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default FunnelStepRail;
