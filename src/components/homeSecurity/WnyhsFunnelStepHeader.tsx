import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getHomeSecurityFunnelSteps } from '../../content/wnyhsNavigation';

type WnyhsFunnelStepHeaderProps = {
  stepId: ReturnType<typeof getHomeSecurityFunnelSteps>[number]['id'];
  title?: string;
  description: string;
  support?: string;
  showBreadcrumb?: boolean;
};

const WnyhsFunnelStepHeader = ({ stepId, title, description, support, showBreadcrumb = true }: WnyhsFunnelStepHeaderProps) => {
  const [searchParams] = useSearchParams();
  const pathParam = searchParams.get('path');
  const step = useMemo(
    () => getHomeSecurityFunnelSteps(pathParam).find((item) => item.id === stepId),
    [pathParam, stepId],
  );

  if (!step) {
    return null;
  }

  return (
    <div className="wnyhs-funnel-step-header">
      {showBreadcrumb ? <div className="wnyhs-funnel-breadcrumb">Home Security / {step.label}</div> : null}
      <div className="wnyhs-funnel-eyebrow">{`Step ${step.stepNumber} — ${step.label}`}</div>
      <h1 className="wnyhs-funnel-title">{title ?? step.label}</h1>
      <p className="wnyhs-funnel-subtitle">{description}</p>
      {support ? <p className="wnyhs-funnel-support">{support}</p> : null}
    </div>
  );
};

export default WnyhsFunnelStepHeader;
