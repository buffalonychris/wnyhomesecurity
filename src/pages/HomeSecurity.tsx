import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import HomeSecurityLanding from '../components/homeSecurity/HomeSecurityLanding';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';
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
    <WnyhsMarketingLayout ctaLink={ctaLink}>
      <HomeSecurityLanding packages={packages} ctaLink={ctaLink} />
    </WnyhsMarketingLayout>
  );
};

export default HomeSecurity;
