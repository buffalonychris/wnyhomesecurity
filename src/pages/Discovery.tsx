import { useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import FitCheck from '../components/FitCheck';
import { useLayoutConfig } from '../components/LayoutConfig';
import { fitCheckConfigs } from '../content/fitCheckConfigs';
import HomeSecurityFunnelSteps from '../components/HomeSecurityFunnelSteps';
import { updateRetailFlow } from '../lib/retailFlow';

const Discovery = () => {
  const [searchParams] = useSearchParams();
  const requestedVertical = searchParams.get('vertical') ?? 'home-security';
  const pathParam = searchParams.get('path');

  const resolvedVertical = useMemo(() => {
    if (fitCheckConfigs[requestedVertical]) {
      return requestedVertical;
    }
    return 'home-security';
  }, [requestedVertical]);

  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: true,
    breadcrumb: [
      { label: 'Discovery', href: `/discovery?vertical=${resolvedVertical}` },
      { label: 'Fit Check' },
    ],
  });

  const config = fitCheckConfigs[resolvedVertical];
  const isHomeSecurity = resolvedVertical === 'home-security';
  const showUnknownNote = requestedVertical !== resolvedVertical;

  useEffect(() => {
    if (isHomeSecurity && (pathParam === 'online' || pathParam === 'onsite')) {
      updateRetailFlow({ homeSecurity: { selectedPath: pathParam } });
    }
  }, [isHomeSecurity, pathParam]);

  return (
    <section className="section">
      {isHomeSecurity && <HomeSecurityFunnelSteps currentStep="fit-check" />}
      {isHomeSecurity && (
        <div className="container" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link className="btn btn-link" to="/packages?vertical=home-security">
            Back to packages
          </Link>
        </div>
      )}
      {showUnknownNote ? (
        <div className="container" style={{ marginBottom: '1rem' }}>
          <p style={{ margin: 0, color: 'rgba(165, 216, 247, 0.8)' }}>
            We couldn’t find that discovery vertical, so we loaded Home Security instead.
          </p>
        </div>
      ) : null}
      {isHomeSecurity ? (
        <div className="container">
          <FitCheck config={config} layout="embedded" />
        </div>
      ) : (
        <FitCheck config={config} />
      )}
    </section>
  );
};

export default Discovery;
