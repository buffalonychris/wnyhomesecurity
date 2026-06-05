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

const homeSecuritySolutionPillars = [
  'No required monthly fees',
  'Customer-owned equipment',
  'Locally installed and supported',
  'Built around your property',
] as const;

const homeSecurityProblemContexts = [
  {
    title: 'Entry & Package Awareness',
    body: 'Start with front-door visibility, package theft concerns, and the entries your household uses most.',
  },
  {
    title: 'Driveways, Garages & Workshops',
    body: 'Plan camera and alert coverage around driveways, side doors, detached garages, workshops, and outbuildings.',
  },
  {
    title: 'Water & Freeze Awareness',
    body: 'Add practical alerts for WNY seasonal risks such as leaks, freeze concerns, sump areas, and utility spaces.',
  },
  {
    title: 'Family Awareness',
    body: 'Support daily household routines, arrivals, and check-ins without turning the system into unnecessary equipment.',
  },
] as const;

const homeSecurityOpportunityLinks = [
  {
    title: 'Senior Safety',
    body: 'Non-invasive awareness for an aging parent living more independently at home.',
    to: '/solutions/senior-safety',
  },
  {
    title: 'Water Protection',
    body: 'Water, freeze, sump, and basement awareness planned around WNY seasonal risks.',
    to: '/solutions/water-protection',
  },
  {
    title: 'Family Awareness',
    body: 'Doors, garage, driveway, smart entry, and package awareness for busy households.',
    to: '/solutions/family-awareness',
  },
  {
    title: 'Vacation Home Awareness',
    body: 'Practical remote awareness for second homes, seasonal properties, and time away.',
    to: '/solutions/vacation-homes',
  },
] as const;

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
  }, [pathParam, searchParams]);

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
            {vertical === 'home-security' ? 'Smart Property Solutions Built Around Your Home' : `Choose the ${brandSite} package that fits`}
          </h1>
          <p style={{ margin: 0, color: 'var(--kaec-muted)', maxWidth: 560 }}>
            {vertical === 'home-security'
              ? 'Compare practical starting points for cameras, property protection, smart entry, garage awareness, water alerts, and family peace of mind. Final recommendations depend on layout, entry points, wiring, network readiness, and coverage goals.'
              : 'One-time pricing, delivered with Home Assistant as your single control surface.'}
          </p>
          {isHomeSecurity && (
            <div className="packages-solution-pillars" aria-label="WNY Home Security solution differentiators">
              {homeSecuritySolutionPillars.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          )}
          {isHomeSecurity && (
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.35rem' }}>
              <Link className="btn btn-primary" to={discoveryLink}>
                Request Walkthrough Estimate
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
      {isHomeSecurity && (
        <section className="packages-context-panel" aria-labelledby="packages-context-heading">
          <div className="packages-context-header">
            <p>Start With The Problem</p>
            <h2 id="packages-context-heading">Then Build The Right System</h2>
          </div>
          <div className="packages-context-grid">
            {homeSecurityProblemContexts.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      )}
      {isHomeSecurity && (
        <section className="card opportunity-section" aria-labelledby="packages-opportunity-heading">
          <div className="packages-context-header">
            <p>Explore By Concern</p>
            <h2 id="packages-opportunity-heading">High-Opportunity Smart Property Solutions</h2>
          </div>
          <div className="opportunity-link-grid">
            {homeSecurityOpportunityLinks.map((item) => (
              <Link key={item.to} className="opportunity-link-card" to={item.to}>
                <span>{item.title}</span>
                <small>{item.body}</small>
              </Link>
            ))}
          </div>
        </section>
      )}
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
        <section className="packages-pricing-note" aria-label="Pricing and ownership clarity">
          <strong>Pricing clarity:</strong> starting points shown above use the current package prices. Final
          scope is confirmed after walkthrough based on property layout, wiring, network readiness, and coverage goals.
          <span>No required monthly fees; equipment options are customer-owned.</span>
        </section>
      )}
      {vertical === 'home-security' && (
        <section className="card motion-fade-up" style={{ marginTop: '1rem' }}>
          <h2 style={{ marginTop: 0 }}>Build Around Your Property</h2>
          <p style={{ color: 'var(--kaec-muted)' }}>
            Choose from planning modules like Indoor Cameras, Outdoor Cameras, Video Doorbells, Garage Coverage, Smart Locks, Door/Window Sensors, Motion Sensors, Floodlights, Water Alerts, Remote Access, Local Recording, and Smart Automations.
          </p>
          <p style={{ color: 'var(--kaec-muted)', marginBottom: 0 }}>
            We will help determine what actually makes sense for your layout and priorities. Every plan is customized during your local walkthrough and confirmed in writing after review, so you can add on later without replacing the whole system.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
            {['Indoor Cameras','Outdoor Cameras','Video Doorbells','Garage Coverage','Smart Locks','Door/Window Sensors','Motion Sensors','Floodlights','Water Alerts','Remote Access','Local Recording','Smart Automations'].map((item) => (
              <span key={item} className="packages-module-chip">{item}</span>
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
