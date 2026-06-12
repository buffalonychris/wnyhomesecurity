import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import PackageCard from '../components/PackageCard';
import ComparisonLadder from '../components/ComparisonLadder';
import OwnershipOfflineGuarantee from '../components/OwnershipOfflineGuarantee';
import { getPackages } from '../content/packages';
import {
  estimatePath,
  fitCheckPath,
  offerCategories,
  packageStartingPoints,
  publicSolutions,
  vaultBuckets,
  wnyhsCoreOffer,
} from '../content/wnyhsOfferCatalog';
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

const Packages = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [guidedMode, setGuidedMode] = useState<boolean>(() => loadRetailFlow().guidedMode ?? false);
  const pathParam = searchParams.get('path');
  const vertical = resolveVertical(searchParams.get('vertical'));
  const packageList = getPackages(vertical);
  const isHomeSecurity = vertical === 'home-security';
  const discoveryLink = getHomeSecurityCtaLink(pathParam);
  const solutionsByCategory = offerCategories
    .map((category) => ({
      category,
      items: publicSolutions.filter((solution) => solution.categoryId === category.id),
    }))
    .filter((group) => group.items.length > 0);

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
              : 'One-time package selection, delivered with Home Assistant as your single control surface.'}
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
              Clear package selection with pro install, ready for offline resilience.
            </small>
          </div>
        )}
      </section>
      {isHomeSecurity && (
        <section id="wnyhs-core" className="wnyhs-section wnyhs-section--dark packages-context-panel packages-core-panel" aria-labelledby="packages-core-heading">
          <div className="wnyhs-section-header packages-context-header">
            <p className="wnyhs-eyebrow">{wnyhsCoreOffer.eyebrow}</p>
            <h2 id="packages-core-heading">{wnyhsCoreOffer.title}</h2>
            <span>{wnyhsCoreOffer.body}</span>
          </div>
          <div className="packages-core-grid">
            <article className="wnyhs-card packages-core-card">
              <h3>First-time customers</h3>
              <p>{wnyhsCoreOffer.firstCustomer}</p>
            </article>
            <article className="wnyhs-card packages-core-card">
              <h3>Existing WNYHS Core customers</h3>
              <p>{wnyhsCoreOffer.existingCustomer}</p>
            </article>
            <article className="wnyhs-card packages-core-card packages-core-card--wide">
              <h3>What Core supports</h3>
              <ul>
                {wnyhsCoreOffer.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      )}
      {isHomeSecurity && (
        <section id="offer-categories" className="wnyhs-section wnyhs-section--category packages-context-panel packages-browse-panel" aria-labelledby="packages-category-heading">
          <div className="wnyhs-section-header packages-context-header">
            <p className="wnyhs-eyebrow">Public Service Categories</p>
            <h2 id="packages-category-heading">Start with the homeowner outcome</h2>
            <span>Categories help connect broad concerns to live solutions, planning topics, package starting points, and custom review paths.</span>
          </div>
          <div className="packages-category-grid">
            {offerCategories.map((category) => (
              <Link
                key={category.id}
                id={`category-${category.id}`}
                className="wnyhs-card wnyhs-card--category packages-category-card"
                to={category.anchor}
              >
                <h3>{category.name}</h3>
                <p>{category.outcome}</p>
                <strong>Browse related offers</strong>
              </Link>
            ))}
          </div>
        </section>
      )}
      {isHomeSecurity && (
        <section id="standard-planning-solutions" className="wnyhs-section wnyhs-section--solutions packages-context-panel packages-browse-panel" aria-labelledby="packages-solutions-heading">
          <div className="wnyhs-section-header packages-context-header">
            <p className="wnyhs-eyebrow">Standard / Planning Solutions</p>
            <h2 id="packages-solutions-heading">Live pages and visible planning topics</h2>
            <span>Live solution pages link directly. Other governed topics stay visible as Fit Check, estimate, or category paths until a full detail page exists.</span>
          </div>
          <div className="packages-browse-grid">
            {solutionsByCategory.map(({ category, items }) => (
              <article key={category.id} className="wnyhs-card wnyhs-card--category packages-browse-card">
                <div className="packages-browse-card-header">
                  <h3>{category.name}</h3>
                  <p>{category.outcome}</p>
                </div>
                <div className="packages-browse-item-grid">
                  {items.map((item) => (
                    <Link
                      key={item.id}
                      id={`solution-${item.id}`}
                      className={`packages-browse-item-card${item.status === 'Planning topic' ? ' packages-browse-item-card--planned' : ''}`}
                      to={item.href}
                    >
                      <small>{item.status}</small>
                      <span>{item.title}</span>
                      <p>{item.body}</p>
                      <strong>{item.ctaLabel}</strong>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
      {isHomeSecurity && (
        <section id="package-starting-points" className="wnyhs-section wnyhs-section--packages packages-context-panel packages-package-panel" aria-labelledby="packages-starting-heading">
          <div className="wnyhs-section-header packages-context-header">
            <p className="wnyhs-eyebrow">Package Starting Points</p>
            <h2 id="packages-starting-heading">Customer-understandable ways to begin</h2>
            <span>These are governed package concepts, not fixed public offers. Final scope confirmed after property review.</span>
          </div>
          <div className="packages-signature-grid">
            {packageStartingPoints.map((item) => (
              <article key={item.id} className="wnyhs-card wnyhs-card--package packages-signature-card">
                <small>{item.status}</small>
                <h3>{item.name}</h3>
                <p>{item.customerProblem}</p>
                <ul>
                  {item.includedTopics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                <p>{item.coreRule}</p>
                <div className="packages-card-actions">
                  <Link className="packages-card-link" to={item.href}>
                    {item.href === estimatePath ? 'Request Estimate' : 'Start Fit Check'}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
      {isHomeSecurity && (
        <section id="the-vault" className="wnyhs-section wnyhs-section--dark packages-context-panel packages-vault-panel" aria-labelledby="packages-vault-heading">
          <div className="wnyhs-section-header packages-context-header">
            <p className="wnyhs-eyebrow">The Vault / Custom Projects</p>
            <h2 id="packages-vault-heading">Custom smart-property projects reviewed individually</h2>
            <span>
              Specialty controls for outdoor living, detached spaces, lighting, gates, pools, hot tubs, workshops, and other site-specific needs. Designed around compatibility, safety, wiring, weather exposure, and customer goals. Quote-only after review and available where equipment and site conditions support it.
            </span>
          </div>
          <div className="packages-vault-grid">
            {vaultBuckets.map((item) => (
              <article key={item.id} className="wnyhs-card packages-vault-card">
                <small>Quote-only after review</small>
                <h3>{item.name}</h3>
                <p>{item.body}</p>
                <strong>Reviewed individually</strong>
              </article>
            ))}
          </div>
          <div className="packages-secondary-actions">
            <Link className="wnyhs-button wnyhs-button--primary btn btn-primary" to={estimatePath}>
              Request Estimate
            </Link>
            <Link className="wnyhs-button wnyhs-button--secondary btn btn-secondary" to={fitCheckPath}>
              Start Fit Check
            </Link>
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
