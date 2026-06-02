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
import { buildTel, wnyhsContact } from '../content/wnyhsContact';

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
      <section className="packages-hero">
        <div style={{ display: 'grid', gap: '0.65rem', maxWidth: 760 }}>
          <h1 style={{ margin: 0 }}>
            {vertical === 'home-security' ? 'Explore protection styles for your home' : `Choose the ${brandSite} package that fits`}
          </h1>
          <p style={{ margin: 0, color: 'var(--kaec-muted)', maxWidth: 560 }}>
            {vertical === 'home-security'
              ? 'Compare starting points for cameras, video doorbells, package theft protection, and smart home security. Final recommendations depend on layout, entry points, wiring, network readiness, and coverage goals.'
              : 'One-time pricing, delivered with Home Assistant as your single control surface.'}
          </p>
          {isHomeSecurity && (
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.35rem' }}>
              <Link className="btn btn-primary" to={discoveryLink}>
                Request a Free Estimate
              </Link>
              <a className="btn btn-secondary" href={buildTel()}>
                Call/Text {wnyhsContact.phone.display}
              </a>
            </div>
          )}
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
      </section>
      <div className="card-grid motion-stagger">
        {packageList.map((pkg) => {
          const tierMedia = homeSecurityTierMedia?.[pkg.id as keyof typeof HOME_SECURITY_TIER_MEDIA];
          return (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              vertical={vertical}
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
          No required monthly contracts. Many Western New York customers choose local-first systems that are locally installed and supported without recurring service contracts.
        </p>
      )}
      {vertical === 'home-security' && (
        <section className="card motion-fade-up" style={{ marginTop: '1rem' }}>
          <h2 style={{ marginTop: 0 }}>Build Around Your Property</h2>
          <p style={{ color: 'var(--kaec-muted)' }}>
            Choose from planning modules like Indoor Cameras, Outdoor Cameras, Video Doorbells, Garage Coverage, Smart Locks, Door/Window Sensors, Motion Sensors, Floodlights, Remote Access, Local Recording, and Smart Automations.
          </p>
          <p style={{ color: 'var(--kaec-muted)', marginBottom: 0 }}>
            We’ll help determine what actually makes sense for your layout and priorities. Every plan is customized during your local walkthrough and confirmed in writing after review.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
            {['Indoor Cameras','Outdoor Cameras','Video Doorbells','Garage Coverage','Smart Locks','Door/Window Sensors','Motion Sensors','Floodlights','Remote Access','Local Recording','Smart Automations'].map((item) => (
              <span key={item} style={{ border: '1px solid var(--kaec-border)', padding: '0.35rem 0.6rem', borderRadius: '999px', color: '#fff7e6', fontSize: '0.9rem' }}>{item}</span>
            ))}
          </div>
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
