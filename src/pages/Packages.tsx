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
  publicSolutions,
  vaultBuckets,
  wnyhsCoreOffer,
} from '../content/wnyhsOfferCatalog';
import { buildTel, wnyhsContact } from '../content/wnyhsContact';
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
  const getSolutionCategoryName = (categoryId: string) =>
    offerCategories.find((category) => category.id === categoryId)?.name ?? 'WNYHS Solution';

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
    <div className={isHomeSecurity ? 'wnyhs-page wnyhs-marketing-stack wnyhs-solutions-listing' : 'container section'}>
      {isHomeSecurity && (
        <div className="wnyhs-inline-actions">
          <Link className="wnyhs-button wnyhs-button--secondary" to="/home-security">
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
      <section className="packages-hero wnyhs-solutions-hero">
        <div className="wnyhs-solutions-hero-copy">
          <h1 className="wnyhs-heading">
            {vertical === 'home-security' ? 'Solutions for the way your home actually works' : `Choose the ${brandSite} package that fits`}
          </h1>
          <p className="wnyhs-description">
            {vertical === 'home-security'
              ? 'Browse homeowner-readable WNYHS solutions that can be installed individually, combined into packages, or reviewed as custom work. Each solution can grow around WNYHS Core when that foundation is part of your plan.'
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
            <div className="wnyhs-inline-actions wnyhs-inline-actions--spaced">
              <Link className="wnyhs-button wnyhs-button--primary btn btn-primary" to={estimatePath}>
                Request Estimate
              </Link>
              <Link className="wnyhs-button wnyhs-button--secondary btn btn-secondary" to={discoveryLink}>
                Start Fit Check
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
        <section id="standard-planning-solutions" className="wnyhs-section wnyhs-section--solutions packages-context-panel packages-browse-panel wnyhs-solution-panel" aria-labelledby="packages-solutions-heading">
          <div className="wnyhs-section-header packages-context-header">
            <p className="wnyhs-eyebrow">Image-Led Solution Grid</p>
            <h2 id="packages-solutions-heading" className="wnyhs-heading">Choose a concern, then choose the next step.</h2>
            <span className="wnyhs-description">Live solution pages link directly. Other visible topics route to Fit Check or estimate until a full detail page exists.</span>
          </div>
          <div className="wnyhs-solution-grid">
            {publicSolutions.map((item) => (
              <Link
                key={item.id}
                id={`solution-${item.id}`}
                className="wnyhs-card wnyhs-card--solution wnyhs-solution-card"
                to={item.href}
              >
                <img className="wnyhs-solution-card-media" src={item.imageSrc} alt={item.imageAlt} width="1536" height="1024" loading="lazy" />
                <div className="wnyhs-solution-card-meta">
                  <small>{getSolutionCategoryName(item.categoryId)} / {item.status}</small>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <strong>{item.ctaLabel}</strong>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      {isHomeSecurity && (
        <section id="the-vault" className="wnyhs-section wnyhs-section--dark packages-context-panel packages-vault-panel wnyhs-vault-panel" aria-labelledby="packages-vault-heading">
          <div className="wnyhs-section-header packages-context-header">
            <p className="wnyhs-eyebrow">The Vault / Custom Projects</p>
            <h2 id="packages-vault-heading" className="wnyhs-heading">Custom smart-property projects reviewed individually</h2>
            <span className="wnyhs-description">
              Specialty controls for outdoor living, detached spaces, lighting, gates, pools, hot tubs, workshops, and other site-specific needs. Each custom idea is reviewed for compatibility, wiring, weather exposure, safety/trade boundaries, manufacturer dependency, support scope, and customer goals. Quote-only after review and available where equipment and site conditions support it.
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
        <section id="wnyhs-core" className="wnyhs-section wnyhs-section--dark packages-context-panel packages-core-panel wnyhs-core-value-panel" aria-labelledby="packages-core-heading">
          <div>
            <p className="wnyhs-eyebrow">{wnyhsCoreOffer.eyebrow}</p>
            <h2 id="packages-core-heading">Buy the foundation once. Add solutions over time.</h2>
            <p>
              WNYHS Core is normally obtained with the first WNYHS solution or package. Once Core is in place, future supported solutions can be added to the same dashboard and control-plane foundation without rebuilding that foundation each time.
            </p>
            <ul>
              <li>Customer-owned foundation for supported WNYHS solutions.</li>
              <li>Fewer scattered apps where supported devices and integrations allow it.</li>
              <li>Expansion over time through add-on hardware, dashboard updates, alerts, and routines.</li>
            </ul>
          </div>
          <figure className="hs-home-core-media" aria-label="WNYHS Core platform visuals">
            <img
              className="hs-home-core-dashboard"
              src="/images/home-security/homepage/WNYHSCoreDashboard.png"
              alt="WNYHS Core dashboard for supported home systems"
              width="1536"
              height="1024"
              loading="lazy"
            />
            <img
              className="hs-home-core-phone"
              src="/images/home-security/homepage/WNYHSCorePhone.png"
              alt="WNYHS Core phone view for homeowner system awareness"
              width="1024"
              height="1536"
              loading="lazy"
            />
            <img
              className="hs-home-core-logo"
              src="/images/home-security/homepage/core-logo-mark-on-black.png"
              alt="WNYHS Core logo mark"
              width="1254"
              height="1254"
              loading="lazy"
            />
          </figure>
        </section>
      )}
      {isHomeSecurity && (
        <section className="wnyhs-section packages-final-cta-panel wnyhs-page-cta" aria-labelledby="packages-final-cta-heading">
          <div className="wnyhs-section-header packages-context-header">
            <p className="wnyhs-eyebrow">Primary CTA</p>
            <h2 id="packages-final-cta-heading" className="wnyhs-heading">Ready to talk through your home?</h2>
            <span className="wnyhs-description">
              Request an estimate or call/text WNYHS to discuss solutions that fit your property.
            </span>
          </div>
          <div className="packages-final-cta-actions">
            <Link className="wnyhs-button wnyhs-button--primary btn btn-primary" to={estimatePath}>
              Request Estimate
            </Link>
            <a className="wnyhs-button wnyhs-button--secondary btn btn-secondary" href={buildTel()}>
              Call / Text {wnyhsContact.phone.display}
            </a>
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
