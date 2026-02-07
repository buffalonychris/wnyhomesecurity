import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import LegacyHomeSecurityContent from '../components/homeSecurity/LegacyHomeSecurityContent';
import PremiumHomeSecurityLanding from '../components/homeSecurity/PremiumHomeSecurityLanding';
import WnyhsPageLayout from '../components/homeSecurity/WnyhsPageLayout';
import { useLayoutConfig } from '../components/LayoutConfig';
import { getPackages } from '../content/packages';
import { HomeSecurityPathChoice } from '../lib/homeSecurityFunnel';
import { loadRetailFlow, updateRetailFlow } from '../lib/retailFlow';

const HomeSecurity = () => {
  const [searchParams] = useSearchParams();
  const packages = useMemo(() => getPackages('home-security'), []);
  const [selectedPath, setSelectedPath] = useState<HomeSecurityPathChoice | null>(() => {
    return loadRetailFlow().homeSecurity?.selectedPath ?? null;
  });
  const [legacyOpen, setLegacyOpen] = useState(false);

  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: false,
  });

  useEffect(() => {
    const pathParam = searchParams.get('path');
    if (pathParam === 'online' || pathParam === 'onsite') {
      setSelectedPath(pathParam);
      updateRetailFlow({ homeSecurity: { selectedPath: pathParam } });
    }
  }, [searchParams]);

  const pathParam = selectedPath ? `&path=${selectedPath}` : '';
  const ctaLink = `/discovery?vertical=home-security${pathParam}`;
  return (
    <WnyhsPageLayout mode="marketing" ctaLink={ctaLink}>
      <PremiumHomeSecurityLanding packages={packages} ctaLink={ctaLink} />
      <div className="hs-premium-legacy-accordion">
        <button
          type="button"
          className="hs-premium-legacy-toggle"
          aria-expanded={legacyOpen}
          onClick={() => setLegacyOpen((open) => !open)}
        >
          More details
        </button>
        <div className="hs-premium-legacy-meta">
          <span>Prefer the original layout?</span>
          <Link to="/home-security/legacy">Open the standalone legacy route</Link>
        </div>
        {legacyOpen ? (
          <div className="hs-premium-legacy-body">
            <LegacyHomeSecurityContent packages={packages} pathParam={pathParam} />
          </div>
        ) : null}
      </div>
    </WnyhsPageLayout>
  );
};

export default HomeSecurity;
