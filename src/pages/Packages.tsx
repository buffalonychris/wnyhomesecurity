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

const homeSecuritySolutionPillars = [
  'No required monthly fees',
  'Customer-owned equipment',
  'Locally installed and supported',
  'Built around your property',
] as const;

const signatureSolutionCategories = [
  {
    title: 'Home Security',
    purpose: 'Awareness around doors, driveways, packages, visitors, and property activity.',
    examples: ['Cameras', 'Video doorbells', 'Smart entry', 'Driveway awareness', 'Package protection'],
    ctaLabel: 'Talk Through Home Security',
    to: '/contact?vertical=home-security',
  },
  {
    title: 'Home Automation',
    purpose: 'Practical automation and smart-property controls that simplify everyday routines.',
    examples: ['Lighting', 'Garage doors', 'Smart locks', 'Notifications', 'Energy awareness', 'Environmental controls'],
    ctaLabel: 'Talk Through Home Automation',
    to: '/discovery?vertical=home-security',
  },
  {
    title: 'Aging In Place',
    purpose: 'Support independence while giving families better awareness and peace of mind.',
    examples: ['Daily activity awareness', 'Family notifications', 'Entry awareness', 'Routine check-in options', 'Check-in planning'],
    ctaLabel: 'Explore Aging In Place Solutions',
    to: '/solutions/senior-safety',
  },
] as const;

const homeSecuritySituationLinks = [
  {
    title: 'Senior Safety',
    body: 'For families supporting an aging parent or loved one who wants more independence at home.',
    to: '/solutions/senior-safety',
    ctaLabel: 'Learn About Senior Safety',
  },
  {
    title: 'Water Protection',
    body: 'For homeowners worried about leaks, freeze concerns, sump areas, basements, and utility spaces.',
    to: '/solutions/water-protection',
    ctaLabel: 'Learn About Water Protection',
  },
  {
    title: 'Family Awareness',
    body: 'For households that want clearer awareness around arrivals, garage activity, packages, and busy routines.',
    to: '/solutions/family-awareness',
    ctaLabel: 'Learn About Family Awareness',
  },
  {
    title: 'Vacation Homes',
    body: 'For seasonal or second properties where practical remote awareness can reduce uncertainty between visits.',
    to: '/solutions/vacation-homes',
    ctaLabel: 'Learn About Vacation Homes',
  },
] as const;

const secondarySolutionIdeas = [
  {
    title: 'Package Protection',
    body: 'Front-door visibility and arrival awareness planned around how your household receives deliveries.',
  },
  {
    title: 'Smart Entry',
    body: 'Lock, door, and access planning that fits everyday routines without making the system feel complicated.',
  },
  {
    title: 'Outdoor Property Automation',
    body: 'Practical awareness for driveways, detached garages, sheds, workshops, and common outdoor activity zones.',
  },
  {
    title: 'Energy Awareness',
    body: 'Smart-property controls that help you understand and adjust everyday lighting and environmental routines.',
  },
  {
    title: 'Small Business Awareness',
    body: 'A future planning direction for simple property awareness around small shops, offices, or workspaces.',
  },
  {
    title: 'Whole-Property Awareness',
    body: 'A broader planning category for owners who want better awareness across more than one property area.',
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
              ? 'WNY Home Security builds practical smart-property systems around homeowner needs: awareness, automation, family routines, water concerns, and the way your property is actually used. Start with a major category, then drill into a situation that sounds familiar.'
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
                Start Fit Check
              </Link>
              <Link className="btn btn-secondary" to="/contact?vertical=home-security">
                Request Estimate
              </Link>
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
        <section className="packages-context-panel packages-signature-panel" aria-labelledby="packages-signature-heading">
          <div className="packages-context-header">
            <p>Signature Solution Categories</p>
            <h2 id="packages-signature-heading">Start with the kind of help you need</h2>
            <span>
              These are not fixed packages or gadget lists. They are planning categories for building a practical system around your home.
            </span>
          </div>
          <div className="packages-signature-grid">
            {signatureSolutionCategories.map((item) => (
              <article key={item.title} className="packages-signature-card">
                <h3>{item.title}</h3>
                <p>{item.purpose}</p>
                <ul>
                  {item.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
                <Link className="packages-card-link" to={item.to}>
                  {item.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
      {isHomeSecurity && (
        <section className="card opportunity-section" aria-labelledby="packages-situations-heading">
          <div className="packages-context-header">
            <p>Common Homeowner Situations</p>
            <h2 id="packages-situations-heading">Find the situation that sounds familiar</h2>
            <span>
              Each page explains the homeowner problem, the planning approach, and how a tailored system might help reduce uncertainty.
            </span>
          </div>
          <div className="opportunity-link-grid">
            {homeSecuritySituationLinks.map((item) => (
              <Link key={item.to} className="opportunity-link-card" to={item.to}>
                <span>{item.title}</span>
                <small>{item.body}</small>
                <strong>{item.ctaLabel}</strong>
              </Link>
            ))}
          </div>
        </section>
      )}
      {isHomeSecurity && (
        <section className="packages-context-panel packages-secondary-panel" aria-labelledby="packages-secondary-heading">
          <div className="packages-context-header">
            <p>More Ways We Can Help</p>
            <h2 id="packages-secondary-heading">Secondary ideas for the fit check</h2>
            <span>
              If one of these sounds closer to your property, use Fit Check or Request Estimate so we can talk through whether it belongs in the plan.
            </span>
          </div>
          <div className="packages-secondary-grid">
            {secondarySolutionIdeas.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="packages-secondary-actions">
            <Link className="btn btn-primary" to={discoveryLink}>
              Start Fit Check
            </Link>
            <Link className="btn btn-secondary" to="/contact?vertical=home-security">
              Request Estimate
            </Link>
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
