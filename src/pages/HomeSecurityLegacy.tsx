import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import LegacyHomeSecurityContent from '../components/homeSecurity/LegacyHomeSecurityContent';
import { useLayoutConfig } from '../components/LayoutConfig';
import { getPackages } from '../content/packages';
import { HomeSecurityPathChoice } from '../lib/homeSecurityFunnel';
import { loadRetailFlow, updateRetailFlow } from '../lib/retailFlow';

const HomeSecurityLegacy = () => {
  const [searchParams] = useSearchParams();
  const packages = useMemo(() => getPackages('home-security'), []);
  const [selectedPath, setSelectedPath] = useState<HomeSecurityPathChoice | null>(() => {
    return loadRetailFlow().homeSecurity?.selectedPath ?? null;
  });

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

  return (
    <div className="container section home-security-page hub-container">
      <LegacyHomeSecurityContent packages={packages} pathParam={pathParam} />
    </div>
  );
};

export default HomeSecurityLegacy;
