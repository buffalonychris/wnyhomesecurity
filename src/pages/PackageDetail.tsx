import { useEffect, useMemo } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { getPackages } from '../content/packages';
import TierBadge from '../components/TierBadge';
import { PackageTierId } from '../data/pricing';
import { siteConfig } from '../config/site';
import { resolveVertical } from '../lib/verticals';
import { HOME_SECURITY_PDP_CONTENT } from '../content/homeSecurityPdp';
import { useLayoutConfig } from '../components/LayoutConfig';
import { updateRetailFlow } from '../lib/retailFlow';
import HomeSecurityFunnelSteps from '../components/HomeSecurityFunnelSteps';
import {
  HOME_SECURITY_CLARITY_FOOTER,
  getHomeSecurityHardwareList,
  getHomeSecurityPackageSpec,
} from '../content/homeSecurityPackageData';

const PackageDetail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const vertical = resolveVertical(searchParams.get('vertical'));
  const packageList = getPackages(vertical);
  const pkg = packageList.find((item) => item.id === id);
  const verticalQuery = vertical === 'home-security' ? '?vertical=home-security' : '';
  const isHomeSecurityPdp = vertical === 'home-security' && (id === 'a1' || id === 'a2' || id === 'a3');
  const isMostPopular = isHomeSecurityPdp && id === 'a2';
  const homeSecurityTierStrip = isHomeSecurityPdp
    ? {
        a1: '/images/home-security/tier-bronze-960w.png',
        a2: '/images/home-security/tier-silver-960w.png',
        a3: '/images/home-security/tier-gold-960w.png',
      }
    : null;
  const packageContent = useMemo(
    () => (isHomeSecurityPdp && pkg ? HOME_SECURITY_PDP_CONTENT[pkg.id as 'a1' | 'a2' | 'a3'] : null),
    [isHomeSecurityPdp, pkg]
  );
  const contactLink =
    vertical === 'home-security'
      ? pkg
        ? `/contact?vertical=home-security&package=${pkg.id}`
        : '/contact?vertical=home-security'
      : '/contact';
  const homeSecurityTierLabel = pkg?.name ?? 'Package';
  const primaryActionLabel = isHomeSecurityPdp ? `Continue with ${homeSecurityTierLabel}` : 'Request install';
  const primaryActionLink = isHomeSecurityPdp ? '/discovery?vertical=home-security' : contactLink;
  const tierLabel = pkg?.name ?? 'Package';
  const selectedTierId = pkg ? (pkg.id.toUpperCase() as PackageTierId) : undefined;
  useLayoutConfig({
    layoutVariant: isHomeSecurityPdp ? 'funnel' : 'sitewide',
    showBreadcrumbs: isHomeSecurityPdp,
    breadcrumb: isHomeSecurityPdp
      ? [
          { label: 'Home Security', href: '/home-security' },
          { label: 'Packages', href: '/packages?vertical=home-security' },
          { label: tierLabel },
        ]
      : [],
  });

  useEffect(() => {
    if (isHomeSecurityPdp && selectedTierId) {
      updateRetailFlow({ homeSecurity: { selectedPackageId: selectedTierId } });
    }
  }, [isHomeSecurityPdp, selectedTierId]);

  if (!pkg) {
    return (
      <div className="container section">
        <h2>Package not found</h2>
        <p>Please return to the packages page.</p>
        <Link className="btn btn-primary" to={`/packages${verticalQuery}`}>
          Back to packages
        </Link>
      </div>
    );
  }

  if (isHomeSecurityPdp && packageContent) {
    const heroStripImage = pkg ? homeSecurityTierStrip?.[pkg.id as keyof typeof homeSecurityTierStrip] : null;
    const tierSpec = getHomeSecurityPackageSpec(pkg.id as 'a1' | 'a2' | 'a3');

    return (
      <div className="container section pdp-shell">
        <HomeSecurityFunnelSteps currentStep="packages" />
        <Link to={`/packages${verticalQuery}`} className="btn btn-link pdp-back">
          Back to packages
        </Link>
        <section className="hero-card pdp-hero motion-fade-up">
          {heroStripImage ? (
            <div className="pdp-hero-strip" style={{ backgroundImage: `url(${heroStripImage})` }} aria-hidden="true" />
          ) : null}
          <div className="pdp-hero-header">
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              <div className="pdp-hero-badges">
                <TierBadge
                  tierId={(pkg.id.toUpperCase() as PackageTierId) ?? 'A1'}
                  labelOverride={pkg.badge ?? undefined}
                  vertical={vertical}
                />
                {isMostPopular && <span className="popular-pill">Recommended</span>}
              </div>
              <h1 className="pdp-title">{pkg.name}</h1>
              <p className="pdp-tagline">{packageContent.heroOneLiner}</p>
            </div>
            <div className="pdp-price">
              <div className="pdp-price-value">{pkg.price}</div>
              <small>One-time upfront cost</small>
            </div>
          </div>
            <div className="pdp-hero-actions">
              <Link className="btn btn-primary" to={primaryActionLink}>
                {primaryActionLabel}
              </Link>
          </div>
        </section>

        <div className="pdp-sticky-cta" aria-label="Quick actions">
          <div className="pdp-sticky-inner">
            <Link className="btn btn-primary" to={primaryActionLink}>
              {primaryActionLabel}
            </Link>
          </div>
        </div>

        <section id="what-you-get" className="card pdp-section motion-fade-up">
          <div className="pdp-section-header">
            <h2>What you get</h2>
            <p>Hardware included in this tier.</p>
          </div>
          <ul className="list">
            {getHomeSecurityHardwareList(pkg.id as 'a1' | 'a2' | 'a3').map((item) => (
              <li key={item}>
                <span />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="typical-coverage" className="card pdp-section motion-fade-up">
          <div className="pdp-section-header">
            <h2>Typical coverage</h2>
            <p>Typical footprint and entry assumptions for this tier.</p>
          </div>
          <ul className="list">
            <li>
              <span />
              <span>Square footage: {tierSpec.coverage}</span>
            </li>
            <li>
              <span />
              <span>Entrances: {tierSpec.entrances}</span>
            </li>
            <li>
              <span />
              <span>Cameras: {tierSpec.cameras}</span>
            </li>
          </ul>
        </section>

        <section id="capabilities" className="card pdp-section motion-fade-up">
          <div className="pdp-section-header">
            <h2>Capabilities</h2>
            <p>What this tier can do on day one.</p>
          </div>
          <ul className="list">
            {tierSpec.capabilities.map((item) => (
              <li key={item}>
                <span />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="clarity-footer" className="card pdp-section motion-fade-up">
          <div className="pdp-section-header">
            <h2>Clarity</h2>
            <p>{HOME_SECURITY_CLARITY_FOOTER}</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="container section">
      <Link to={`/packages${verticalQuery}`} className="btn btn-secondary" style={{ marginBottom: '1.5rem' }}>
        Back to packages
      </Link>
      <div className="card" aria-label={`${pkg.name} details`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <TierBadge
              tierId={(pkg.id.toUpperCase() as PackageTierId) ?? 'A1'}
              labelOverride={pkg.badge ?? undefined}
              vertical={vertical}
            />
            <h2 style={{ margin: 0 }}>{pkg.name}</h2>
            <p style={{ margin: 0, color: '#c8c0aa' }}>{pkg.tagline}</p>
            <p style={{ maxWidth: 720 }}>{pkg.oneLiner}</p>
            <p style={{ fontWeight: 700, color: '#fff7e6' }}>
              {vertical === 'home-security' ? 'Who it is for' : 'Ideal for'}: {pkg.idealFor}
            </p>
            {pkg.typicalCoverage && (
              <p style={{ fontWeight: 700, color: '#fff7e6' }}>
                Typical coverage: {pkg.typicalCoverage}
              </p>
            )}
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--kaec-gold)' }}>{pkg.price}</div>
            <small style={{ color: 'var(--kaec-muted)' }}>One-time upfront cost</small>
          </div>
        </div>
        <div className="card" style={{ marginTop: '1.5rem' }}>
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Package bio</h3>
          <p style={{ margin: 0, color: '#c8c0aa' }}>{pkg.bio}</p>
        </div>
        <div className="card" style={{ marginTop: '1rem' }}>
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>
            {vertical === 'home-security' ? "What's included (plain-English)" : 'Included equipment + setup'}
          </h3>
          <ul className="list">
            {pkg.includes.map((item) => (
              <li key={item}>
                <span />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {vertical !== 'home-security' && (
          <div className="card" style={{ marginTop: '1rem' }}>
            <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Bill of materials (BOM)</h3>
            <ul className="list">
              {pkg.billOfMaterials.map((item) => (
                <li key={item}>
                  <span />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="card" style={{ marginTop: '1rem' }}>
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Differentiators</h3>
          <ul className="list">
            {pkg.differentiators.map((item) => (
              <li key={item}>
                <span />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card" style={{ marginTop: '1rem' }}>
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>
            {vertical === 'home-security' ? 'What your system can and will do' : 'Automation flows'}
          </h3>
          <ul className="list">
            {pkg.automationFlows.map((item) => (
              <li key={item}>
                <span />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card" style={{ marginTop: '1rem' }}>
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Intake → delivery journey</h3>
          <ul className="list">
            {pkg.journeyFlow.map((item) => (
              <li key={item}>
                <span />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card" style={{ marginTop: '1rem' }}>
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Agreement + deposit checkpoints</h3>
          <ul className="list">
            {pkg.agreements.map((item) => (
              <li key={item}>
                <span />
                <span>{item}</span>
              </li>
            ))}
            <li>
              <span />
              <span>
                Deposit policy:{' '}
                {siteConfig.depositPolicy.type === 'flat'
                  ? `Flat $${siteConfig.depositPolicy.value}`
                  : `${siteConfig.depositPolicy.value * 100}% of the deterministic total`}
              </span>
            </li>
          </ul>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <Link className="btn btn-primary" to={contactLink}>
            Ask about this package
          </Link>
          <Link
            className="btn btn-secondary"
            to={vertical === 'home-security' ? '/reliability?vertical=home-security' : '/reliability'}
          >
            Learn about offline readiness
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
