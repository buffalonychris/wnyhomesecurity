import { useEffect, useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import FitCheck from '../components/FitCheck';
import { useLayoutConfig } from '../components/LayoutConfig';
import { fitCheckConfigs } from '../content/fitCheckConfigs';
import WnyhsFunnelLayout from '../components/homeSecurity/WnyhsFunnelLayout';
import WnyhsFunnelStepHeader from '../components/homeSecurity/WnyhsFunnelStepHeader';
import WnyhsFunnelNotice from '../components/homeSecurity/WnyhsFunnelNotice';
import { updateRetailFlow } from '../lib/retailFlow';
import { HOME_SECURITY_ROUTES } from '../content/wnyhsNavigation';

const Discovery = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const requestedVertical = searchParams.get('vertical') ?? 'home-security';
  const pathParam = searchParams.get('path');

  const resolvedVertical = useMemo(() => {
    if (fitCheckConfigs[requestedVertical]) {
      return requestedVertical;
    }
    return 'home-security';
  }, [requestedVertical]);
  const isHomeSecurity = resolvedVertical === 'home-security';

  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: !isHomeSecurity,
    breadcrumb: !isHomeSecurity
      ? [
          { label: 'Discovery', href: `/discovery?vertical=${resolvedVertical}` },
          { label: 'Fit Check' },
        ]
      : [],
  });

  const config = fitCheckConfigs[resolvedVertical];
  const showUnknownNote = requestedVertical !== resolvedVertical;

  useEffect(() => {
    if (isHomeSecurity && (pathParam === 'online' || pathParam === 'onsite')) {
      updateRetailFlow({ homeSecurity: { selectedPath: pathParam } });
    }
  }, [isHomeSecurity, pathParam]);

  const redirectMessage = (location.state as { message?: string } | undefined)?.message;

  return (
    <WnyhsFunnelLayout showStepRail={isHomeSecurity}>
      <div className="wnyhs-funnel-stack">
        {isHomeSecurity && (
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link className="btn btn-link" to={HOME_SECURITY_ROUTES.packages}>
              Back to packages
            </Link>
          </div>
        )}
        {redirectMessage ? <WnyhsFunnelNotice message={redirectMessage} /> : null}
        {isHomeSecurity && (
          <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
            <WnyhsFunnelStepHeader
              stepId="fit-check"
              title="Fit Check"
              description="Answer a few quick questions to match the right tier."
            />
          </div>
        )}
        {showUnknownNote ? (
          <div>
            <p style={{ margin: 0, color: 'rgba(165, 216, 247, 0.8)' }}>
              We couldn’t find that discovery vertical, so we loaded Home Security instead.
            </p>
          </div>
        ) : null}
        {isHomeSecurity ? <FitCheck config={config} layout="embedded" /> : <FitCheck config={config} />}
      </div>
    </WnyhsFunnelLayout>
  );
};

export default Discovery;
