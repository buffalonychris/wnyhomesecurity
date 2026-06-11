import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import PackageCard from '../components/PackageCard';
import ComparisonLadder from '../components/ComparisonLadder';
import OwnershipOfflineGuarantee from '../components/OwnershipOfflineGuarantee';
import { getPackages } from '../content/packages';
import { brandSite } from '../lib/brand';
import { loadRetailFlow, markFlowStep, updateRetailFlow } from '../lib/retailFlow';
import { resolveVertical } from '../lib/verticals';
import { useLayoutConfig } from '../components/LayoutConfig';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';
import { getHomeSecurityCtaLink } from '../content/wnyhsNavigation';

const homeSecuritySolutionPillars = [
  'No required monthly fees where supported',
  'Customer-owned equipment',
  'Locally installed and supported',
  'Built around your property',
] as const;

const signatureSolutionCategories = [
  {
    title: 'Home Security',
    headline: 'Know what is happening around the everyday areas people worry about most.',
    purpose: 'Plan practical visibility and alerts around doors, driveways, packages, visitors, garages, and property activity without turning the home into a hardware catalog.',
    image: '/images/solutions/smart-home-security.png',
    imageAlt: 'Home exterior with smart security awareness',
    examples: ['Video doorbells', 'Security cameras', 'Driveway awareness', 'Smart entry', 'Package protection', 'Local recording'],
    ctaLabel: 'Request Callback About Home Security',
    to: '/contact?vertical=home-security',
  },
  {
    title: 'Home Automation',
    headline: 'Simplify routines with controls that fit the way your household already works.',
    purpose: 'Connect useful smart-property controls, notifications, comfort routines, and environmental awareness into a plan that feels practical instead of complicated.',
    image: '/images/solutions/connected-garage-workshop.png',
    imageAlt: 'Garage and smart-property controls in a home setting',
    examples: ['Smart lighting', 'Garage control', 'Smart locks', 'Comfort routines', 'Energy awareness', 'Environmental awareness'],
    ctaLabel: 'Talk Through Home Automation',
    to: '/discovery?vertical=home-security',
  },
  {
    title: 'Aging In Place',
    headline: 'Support independence while giving families better ways to check in.',
    purpose: 'Build non-intrusive awareness around daily routines, entry activity, family notifications, and future expansion planning for loved ones living more independently.',
    image: '/images/home-security/solutions/solutions-aging-hero.png',
    imageAlt: 'Calm home setting for aging-in-place awareness',
    examples: ['Daily activity awareness', 'Entry activity awareness', 'Family notifications', 'Routine check-in options', 'Non-intrusive awareness', 'Future expansion planning'],
    ctaLabel: 'Explore Aging In Place Solutions',
    to: '/solutions/senior-safety',
  },
] as const;

const browseSolutionCategories = [
  {
    title: 'Home Security',
    intro: 'Browse solutions for entries, arrivals, visitors, deliveries, garages, driveways, and time away from home.',
    items: [
      {
        title: 'Family Awareness',
        body: 'For busy households that want clearer awareness around arrivals, garage activity, packages, and routines.',
        to: '/solutions/family-awareness',
        label: 'View Solution',
        status: 'Live solution',
      },
      {
        title: 'Vacation Homes',
        body: 'For seasonal or second properties where remote property awareness can reduce uncertainty between visits.',
        to: '/solutions/vacation-homes',
        label: 'View Solution',
        status: 'Live solution',
      },
      {
        title: 'Package Protection',
        body: 'For deliveries, porch activity, and clearer awareness around what happened at the front door.',
        to: 'fit-check',
        label: 'Ask In Fit Check',
        status: 'Planning topic',
      },
      {
        title: 'Driveway Awareness',
        body: 'For arrivals, visitors, vehicles, and activity near the approach to the property.',
        to: 'fit-check',
        label: 'Ask In Fit Check',
        status: 'Planning topic',
      },
      {
        title: 'Smart Entry',
        body: 'For locks, entry routines, garage access, and household access planning.',
        to: 'fit-check',
        label: 'Ask In Fit Check',
        status: 'Planning topic',
      },
    ],
  },
  {
    title: 'Home Automation',
    intro: 'Browse practical controls and environmental awareness ideas that make the property easier to understand and manage.',
    items: [
      {
        title: 'Water Protection',
        body: 'For leaks, freeze concerns, sump areas, basements, and utility spaces where early awareness matters.',
        to: '/solutions/water-protection',
        label: 'View Solution',
        status: 'Live solution',
      },
      {
        title: 'Smart Lighting',
        body: 'For everyday lighting routines, arrival scenes, and practical household convenience.',
        to: 'fit-check',
        label: 'Ask In Fit Check',
        status: 'Planning topic',
      },
      {
        title: 'Garage Control',
        body: 'For garage status, access routines, and fewer unknowns around a common entry point.',
        to: 'fit-check',
        label: 'Ask In Fit Check',
        status: 'Planning topic',
      },
      {
        title: 'Energy Awareness',
        body: 'For better visibility into usage patterns, comfort settings, and practical ways to reduce waste.',
        to: 'fit-check',
        label: 'Ask In Fit Check',
        status: 'Planning topic',
      },
    ],
  },
  {
    title: 'Aging In Place',
    intro: 'Browse options for supporting independence, family awareness, routine check-ins, and future planning.',
    items: [
      {
        title: 'Senior Safety',
        body: 'For families supporting an aging parent or loved one who wants more independence at home.',
        to: '/solutions/senior-safety',
        label: 'View Solution',
        status: 'Live solution',
      },
      {
        title: 'Caregiver Awareness',
        body: 'For relatives and caregivers who want practical ways to know when something may need attention.',
        to: 'fit-check',
        label: 'Ask In Fit Check',
        status: 'Planning topic',
      },
      {
        title: 'Daily Activity Awareness',
        body: 'For non-intrusive signals around normal routines, movement patterns, and household activity.',
        to: 'fit-check',
        label: 'Ask In Fit Check',
        status: 'Planning topic',
      },
    ],
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
    <div className={isHomeSecurity ? 'wnyhs-page wnyhs-marketing-stack' : 'container section'}>
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
              ? 'Start here to browse WNY Home Security solution families, compare common homeowner situations, and choose whether a Fit Check, estimate, or solution detail page is the right next step.'
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
              <Link className="wnyhs-button wnyhs-button--primary btn btn-primary" to={discoveryLink}>
                Start Fit Check
              </Link>
              <Link className="wnyhs-button wnyhs-button--secondary btn btn-secondary" to="/contact?vertical=home-security">
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
        <section className="wnyhs-section wnyhs-section--solutions packages-context-panel packages-premier-panel" aria-labelledby="packages-premier-heading">
          <div className="wnyhs-section-header packages-context-header">
            <p className="wnyhs-eyebrow">Featured / Premier Solutions</p>
            <h2 id="packages-premier-heading">Window-shop the flagship WNYHS solution families</h2>
            <span>
              Start with the outcome you want, then drill into the situations that sound most like your property.
            </span>
          </div>
          <div className="packages-premier-grid">
            {signatureSolutionCategories.map((item) => (
              <article key={item.title} className="wnyhs-card wnyhs-card--solution packages-premier-card">
                <figure className="packages-premier-media">
                  <img src={item.image} alt={item.imageAlt} loading="lazy" />
                </figure>
                <div className="packages-premier-copy">
                  <span>{item.title}</span>
                  <h3>{item.headline}</h3>
                </div>
                <p>{item.purpose}</p>
                <ul>
                  {item.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
                <Link className="wnyhs-button wnyhs-button--secondary btn btn-secondary packages-premier-cta" to={item.to}>
                  {item.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
      {isHomeSecurity && (
        <section className="wnyhs-section wnyhs-section--category packages-context-panel packages-browse-panel" aria-labelledby="packages-browse-heading">
          <div className="wnyhs-section-header packages-context-header">
            <p className="wnyhs-eyebrow">Browse Our Solutions By Category</p>
            <h2 id="packages-browse-heading">Find a starting point that matches your property</h2>
            <span>
              Use these storefront categories to browse current solution pages and related fit-check topics.
            </span>
          </div>
          <div className="packages-browse-grid">
            {browseSolutionCategories.map((category) => (
              <article key={category.title} className="wnyhs-card wnyhs-card--category packages-browse-card">
                <div className="packages-browse-card-header">
                  <h3>{category.title}</h3>
                  <p>{category.intro}</p>
                </div>
                <div className="packages-browse-item-grid">
                  {category.items.map((item) => {
                    const destination = item.to === 'fit-check' ? discoveryLink : item.to;
                    const isPlanningTopic = item.to === 'fit-check';

                    return (
                      <Link
                        key={item.title}
                        className={`packages-browse-item-card${isPlanningTopic ? ' packages-browse-item-card--planned' : ''}`}
                        to={destination}
                      >
                        <small>{item.status}</small>
                        <span>{item.title}</span>
                        <p>{item.body}</p>
                        <strong>{item.label}</strong>
                      </Link>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
      {isHomeSecurity && (
        <section className="wnyhs-section packages-final-cta-panel" aria-labelledby="packages-final-cta-heading">
          <div className="wnyhs-section-header packages-context-header">
            <p className="wnyhs-eyebrow">Not Sure Where To Start?</p>
            <h2 id="packages-final-cta-heading">Start with a fit check or request an estimate</h2>
            <span>
              You do not need to know the exact solution yet. Tell us what you are trying to solve and we will help sort the right direction.
            </span>
          </div>
          <div className="packages-final-cta-actions">
            <Link className="wnyhs-button wnyhs-button--primary btn btn-primary" to={discoveryLink}>
              Start Fit Check
            </Link>
            <Link className="wnyhs-button wnyhs-button--secondary btn btn-secondary" to="/contact?vertical=home-security">
              Request Estimate
            </Link>
          </div>
        </section>
      )}
      {!isHomeSecurity && (
        <div className="card-grid motion-stagger">
          {packageList.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              vertical={vertical}
            />
          ))}
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
