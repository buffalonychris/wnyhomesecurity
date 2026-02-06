import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import PackageCard from '../components/PackageCard';
import ComparisonLadder from '../components/ComparisonLadder';
import HomeSecurityComparisonTable from '../components/HomeSecurityComparisonTable';
import OwnershipOfflineGuarantee from '../components/OwnershipOfflineGuarantee';
import AccordionSection from '../components/AccordionSection';
import DemoDashboardLink from '../components/DemoDashboardLink';
import { getPackages } from '../content/packages';
import { HOME_SECURITY_TIER_MEDIA } from '../content/homeSecurityPackageData';
import { brandSite } from '../lib/brand';
import { track } from '../lib/analytics';
import { loadRetailFlow, markFlowStep, updateRetailFlow } from '../lib/retailFlow';
import { resolveVertical } from '../lib/verticals';
import { useLayoutConfig } from '../components/LayoutConfig';
import HomeSecurityFunnelSteps from '../components/HomeSecurityFunnelSteps';
import SelfMonitoringDisclosure from '../components/disclosures/SelfMonitoringDisclosure';

const Packages = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [guidedMode, setGuidedMode] = useState<boolean>(() => loadRetailFlow().guidedMode ?? false);
  const vertical = resolveVertical(searchParams.get('vertical'));
  const packageList = getPackages(vertical);
  const isHomeSecurity = vertical === 'home-security';
  const homeSecurityTierMedia = isHomeSecurity ? HOME_SECURITY_TIER_MEDIA : null;
  const plannerHref = '/home-security/planner?vertical=home-security';

  useLayoutConfig({
    layoutVariant: isHomeSecurity ? 'funnel' : 'sitewide',
    showBreadcrumbs: isHomeSecurity,
    breadcrumb: isHomeSecurity
      ? [
          { label: 'Home Security', href: '/home-security' },
          { label: 'Packages', href: '/packages?vertical=home-security' },
        ]
      : [],
  });

  useEffect(() => {
    const guidedParam = searchParams.get('guided') === '1';
    const pathParam = searchParams.get('path');
    if (pathParam === 'online' || pathParam === 'onsite') {
      updateRetailFlow({ homeSecurity: { selectedPath: pathParam } });
    }
    if (guidedParam) {
      setGuidedMode(true);
      updateRetailFlow({ guidedMode: true, currentStep: 'select' });
      return;
    }
    markFlowStep('select');
    const stored = loadRetailFlow().guidedMode;
    if (stored) setGuidedMode(true);
  }, [searchParams]);

  const exitGuidedMode = () => {
    setGuidedMode(false);
    updateRetailFlow({ guidedMode: false });
    navigate('/');
  };

  const handlePlannerOpen = () => {
    track('hs_planner_opened', { source: 'packages' });
  };

  return (
    <div className={`container section ${isHomeSecurity ? 'hub-container' : ''}`}>
      {isHomeSecurity && <HomeSecurityFunnelSteps currentStep="packages" />}
      {isHomeSecurity && (
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link className="btn btn-link" to="/home-security">
            Back to overview
          </Link>
        </div>
      )}
      {guidedMode && !isHomeSecurity && (
        <div
          className="hero-card motion-fade-up"
          role="status"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}
        >
          <div>
            <strong style={{ color: '#fff7e6' }}>Guided setup</strong>
            <p style={{ margin: '0.25rem 0 0', color: '#e6ddc7' }}>
              You are browsing packages inside guided setup. We will keep steering you toward a quote.
            </p>
          </div>
          <button type="button" className="btn btn-secondary" onClick={exitGuidedMode}>
            Exit guided setup
          </button>
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          <h1 style={{ margin: 0 }}>
            {vertical === 'home-security' ? 'Choose a Home Security package' : `Choose the ${brandSite} package that fits`}
          </h1>
          <p style={{ margin: 0, color: 'var(--kaec-muted)', maxWidth: 560 }}>
            {vertical === 'home-security'
              ? 'One-time pricing, local-first control, and optional pro install.'
              : 'One-time pricing, delivered with Home Assistant as your single control surface.'}
          </p>
        </div>
        {!isHomeSecurity && (
          <div style={{ display: 'grid', gap: '0.35rem', justifyItems: 'start' }}>
            <Link className="btn btn-primary" to="/quote">
              Continue to Fit Check
            </Link>
            <small style={{ color: '#c8c0aa' }}>
              Clear pricing with pro install, ready for offline resilience.
            </small>
          </div>
        )}
      </div>
      {isHomeSecurity && (
        <div
          className="card"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1rem',
          }}
        >
          <div style={{ display: 'grid', gap: '0.35rem' }}>
            <strong>Want surgical precision?</strong>
            <span style={{ color: 'var(--kaec-muted)' }}>Use the Precision Planner for optional layout detail.</span>
          </div>
          <Link className="btn btn-secondary" to={plannerHref} onClick={handlePlannerOpen}>
            Use Precision Planner (optional)
          </Link>
        </div>
      )}
      <div className="card-grid motion-stagger">
        {packageList.map((pkg) => {
          const tierMedia = homeSecurityTierMedia?.[pkg.id as keyof typeof HOME_SECURITY_TIER_MEDIA];
          return (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              vertical={vertical}
              imageCaption={tierMedia?.caption}
              image={tierMedia?.image}
            />
          );
        })}
      </div>
      {vertical === 'home-security' && (
        <SelfMonitoringDisclosure variant="short" className="ka-disclosure--spaced" />
      )}
      {vertical === 'home-security' && (
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '0.5rem' }}>
          <span style={{ color: 'var(--kaec-muted)' }}>Want to preview the interface?</span>
          <DemoDashboardLink variant="link" />
        </div>
      )}
      {vertical === 'home-security' && (
        <p style={{ marginTop: '1rem', color: 'var(--kaec-muted)' }}>
          All packages are expandable later. You can add cameras, sensors, or coverage areas as your needs change.
        </p>
      )}

      {vertical === 'home-security' && (
        <div className="section">
          <AccordionSection
            title="Compare Home Security tiers"
            description="One dashboard for everything. Remote access needs internet, but local control still works on your home network."
            defaultOpen={false}
          >
            <HomeSecurityComparisonTable />
          </AccordionSection>
        </div>
      )}

      {vertical !== 'home-security' && <ComparisonLadder />}

      {!isHomeSecurity && (
        <OwnershipOfflineGuarantee
          intro="Every package honors the Offline Dignity Rule and keeps ownership with the household."
          className="section motion-fade-up"
        />
      )}
    </div>
  );
};

export default Packages;
