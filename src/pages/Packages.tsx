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
import { loadRetailFlow, markFlowStep, updateRetailFlow } from '../lib/retailFlow';
import { resolveVertical } from '../lib/verticals';
import { useLayoutConfig } from '../components/LayoutConfig';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';
import { getHomeSecurityCtaLink } from '../content/wnyhsNavigation';

const Packages = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [guidedMode, setGuidedMode] = useState<boolean>(() => loadRetailFlow().guidedMode ?? false);
  const pathParam = searchParams.get('path');
  const vertical = resolveVertical(searchParams.get('vertical'));
  const packageList = getPackages(vertical);
  const isHomeSecurity = vertical === 'home-security';
  const homeSecurityTierMedia = isHomeSecurity ? HOME_SECURITY_TIER_MEDIA : null;
  const discoveryLink = getHomeSecurityCtaLink(pathParam);

  useLayoutConfig({
    layoutVariant: isHomeSecurity ? 'funnel' : 'sitewide',
    showBreadcrumbs: !isHomeSecurity,
    breadcrumb: [],
  });

  useEffect(() => {
    const guidedParam = searchParams.get('guided') === '1';
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

  const content = (
    <div className={isHomeSecurity ? 'wnyhs-marketing-stack' : 'container section'}>
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
            {vertical === 'home-security' ? 'Explore protection styles for your home' : `Choose the ${brandSite} package that fits`}
          </h1>
          <p style={{ margin: 0, color: 'var(--kaec-muted)', maxWidth: 560 }}>
            {vertical === 'home-security'
              ? 'Use these protection styles as starting points before your walkthrough estimate. Final recommendations depend on layout, entry points, wiring, network readiness, and coverage goals.'
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
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '0.5rem' }}>
          <span style={{ color: 'var(--kaec-muted)' }}>Want to preview the interface?</span>
          <DemoDashboardLink variant="link" />
        </div>
      )}
      {vertical === 'home-security' && (
        <p style={{ marginTop: '1rem', color: 'var(--kaec-muted)' }}>
          No required monthly monitoring contracts. Locally installed and locally supported, with equipment options you can own.
        </p>
      )}
      {vertical === 'home-security' && (
        <section className="card motion-fade-up" style={{ marginTop: '1rem' }}>
          <h2 style={{ marginTop: 0 }}>Build Your System</h2>
          <p style={{ color: 'var(--kaec-muted)' }}>
            Plan around indoor and outdoor cameras, video doorbells, garage coverage/control, smart locks, door/window sensors, motion sensors, floodlight or spotlight cameras, local recording, remote access, smart automations, and Home Assistant integration.
          </p>
          <p style={{ color: 'var(--kaec-muted)', marginBottom: 0 }}>
            We’ll tell you if a system is overbuilt or missing an important concern. Final scope and pricing are confirmed in writing after review.
          </p>
        </section>
      )}

      {vertical === 'home-security' && (
        <div className="section">
          <AccordionSection
            title="Compare protection styles"
            description="Use this as directional guidance only. Your final recommendation is built around your property, entry points, and goals."
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

  if (isHomeSecurity) {
    return (
      <WnyhsMarketingLayout ctaLink={discoveryLink}>
        {content}
      </WnyhsMarketingLayout>
    );
  }

  return content;
};

export default Packages;
