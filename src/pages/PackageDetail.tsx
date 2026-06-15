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
  getHomeSecurityHardwareList,
  getHomeSecurityPackageSpec,
} from '../content/homeSecurityPackageData';
import { buildTel, wnyhsContact } from '../content/wnyhsContact';

const homeSecurityTierStrip = {
  a1: '/images/home-security/tier-bronze-960w.png',
  a2: '/images/home-security/tier-silver-960w.png',
  a3: '/images/home-security/tier-gold-960w.png',
} as const;

const styleLabelMap: Record<string, string> = {
  a1: 'Essential Awareness',
  a2: 'Balanced Home Coverage',
  a3: 'Expanded Property Coverage',
};

const renderList = (items: string[]) => (
  <ul className="list wnyhs-package-detail-list">
    {items.map((item) => (
      <li key={item}>
        <span />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const PackageDetail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const vertical = resolveVertical(searchParams.get('vertical'));
  const packageList = getPackages(vertical);
  const pkg = packageList.find((item) => item.id === id);
  const verticalQuery = vertical === 'home-security' ? '?vertical=home-security' : '';
  const isHomeSecurityPdp = vertical === 'home-security' && (id === 'a1' || id === 'a2' || id === 'a3');
  const isMostPopular = isHomeSecurityPdp && id === 'a2';
  const packageContent = useMemo(
    () => (isHomeSecurityPdp && pkg ? HOME_SECURITY_PDP_CONTENT[pkg.id as 'a1' | 'a2' | 'a3'] : null),
    [isHomeSecurityPdp, pkg]
  );
  const contactLink =
    vertical === 'home-security'
      ? pkg
        ? `/contact?vertical=home-security&package=${pkg.id}&estimateIntent=selected-package`
        : '/contact?vertical=home-security'
      : '/contact';
  const styleLabel = isHomeSecurityPdp && pkg ? styleLabelMap[pkg.id] ?? pkg.name : pkg?.name ?? 'Package';
  const primaryActionLabel = isHomeSecurityPdp ? 'Request a Free Estimate' : 'Request install';
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
      <div className="wnyhs-page wnyhs-shell wnyhs-marketing-stack">
        <section className="wnyhs-section">
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">Package Detail</p>
            <h1 className="wnyhs-heading">Package not found</h1>
            <p className="wnyhs-description">Please return to the packages page.</p>
          </div>
          <Link className="wnyhs-button wnyhs-button--primary" to={`/packages${verticalQuery}`}>
            Back to packages
          </Link>
        </section>
      </div>
    );
  }

  if (isHomeSecurityPdp && packageContent) {
    const heroStripImage = homeSecurityTierStrip[pkg.id as keyof typeof homeSecurityTierStrip];
    const tierSpec = getHomeSecurityPackageSpec(pkg.id as 'a1' | 'a2' | 'a3');

    return (
      <div className="wnyhs-page wnyhs-shell wnyhs-marketing-stack wnyhs-package-detail">
        <HomeSecurityFunnelSteps currentStep="packages" />
        <Link to={`/packages${verticalQuery}`} className="wnyhs-button wnyhs-button--secondary wnyhs-package-detail-back">
          Back to packages
        </Link>

        <section className="wnyhs-section wnyhs-section--category wnyhs-package-detail-hero motion-fade-up">
          <img className="wnyhs-package-detail-hero-media" src={heroStripImage} alt="" aria-hidden="true" loading="lazy" />
          <div className="wnyhs-package-detail-hero-content">
            <div className="wnyhs-section-header">
              <div className="wnyhs-package-detail-badges">
                <TierBadge
                  tierId={pkg.id.toUpperCase() as PackageTierId}
                  labelOverride={pkg.badge ?? undefined}
                  vertical={vertical}
                />
                {isMostPopular && <span className="wnyhs-price-chip">Recommended</span>}
              </div>
              <p className="wnyhs-eyebrow">WNYHS package starting point</p>
              <h1 className="wnyhs-heading wnyhs-package-detail-title">{styleLabel}</h1>
              <p className="wnyhs-description wnyhs-package-detail-lede">{packageContent.heroOneLiner}</p>
            </div>
            <div className="wnyhs-card wnyhs-package-detail-price" aria-label="Pricing note">
              <strong>Customized walkthrough pricing</strong>
              <span>Typical systems vary based on layout and coverage goals.</span>
            </div>
          </div>
          <div className="wnyhs-package-detail-actions">
            <Link className="wnyhs-button wnyhs-button--primary" to={primaryActionLink}>
              {primaryActionLabel}
            </Link>
            <a className="wnyhs-button wnyhs-button--secondary" href={buildTel()}>
              Call/Text {wnyhsContact.phone.display}
            </a>
          </div>
        </section>

        <section id="what-you-get" className="wnyhs-section motion-fade-up">
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">Equipment examples</p>
            <h2 className="wnyhs-heading">Starting-point equipment examples</h2>
            <p className="wnyhs-description">These are common modules for this protection style, not a rigid SKU.</p>
          </div>
          <div className="wnyhs-card">{renderList(getHomeSecurityHardwareList(pkg.id as 'a1' | 'a2' | 'a3'))}</div>
        </section>

        <div className="wnyhs-package-detail-grid">
          <section id="typical-coverage" className="wnyhs-section motion-fade-up">
            <div className="wnyhs-section-header">
              <p className="wnyhs-eyebrow">Property fit</p>
              <h2 className="wnyhs-heading">Typical property fit</h2>
              <p className="wnyhs-description">Directional footprint guidance. Final scope is confirmed in writing after walkthrough review.</p>
            </div>
            <div className="wnyhs-card">
              {renderList([
                `Square footage: ${tierSpec.coverage}`,
                `Entrances: ${tierSpec.entrances}`,
                `Cameras: ${tierSpec.cameras}`,
              ])}
            </div>
          </section>

          <section id="capabilities" className="wnyhs-section motion-fade-up">
            <div className="wnyhs-section-header">
              <p className="wnyhs-eyebrow">Options</p>
              <h2 className="wnyhs-heading">Build Your System options</h2>
              <p className="wnyhs-description">Common capabilities we can combine into a custom recommendation.</p>
            </div>
            <div className="wnyhs-card">{renderList(tierSpec.capabilities)}</div>
          </section>
        </div>

        <section id="clarity-footer" className="wnyhs-section wnyhs-page-cta motion-fade-up">
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">Estimate clarity</p>
            <h2 className="wnyhs-heading">A walkthrough shapes the final recommendation.</h2>
            <p className="wnyhs-description">No required monthly contracts. Most systems are customized after walkthrough, and final recommendations are built around your layout, entry points, and coverage goals.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="wnyhs-page wnyhs-shell wnyhs-marketing-stack wnyhs-package-detail">
      <Link to={`/packages${verticalQuery}`} className="wnyhs-button wnyhs-button--secondary wnyhs-package-detail-back">
        Back to packages
      </Link>
      <section className="wnyhs-section wnyhs-section--category" aria-label={`${pkg.name} details`}>
        <div className="wnyhs-package-detail-hero-content">
          <div className="wnyhs-section-header">
            <TierBadge
              tierId={pkg.id.toUpperCase() as PackageTierId}
              labelOverride={pkg.badge ?? undefined}
              vertical={vertical}
            />
            <p className="wnyhs-eyebrow">Package Detail</p>
            <h1 className="wnyhs-heading wnyhs-package-detail-title">{pkg.name}</h1>
            <p className="wnyhs-description wnyhs-package-detail-lede">{pkg.tagline}</p>
            <p className="wnyhs-description">{pkg.oneLiner}</p>
            <p className="wnyhs-package-detail-strong">{vertical === 'home-security' ? 'Who it is for' : 'Ideal for'}: {pkg.idealFor}</p>
            {pkg.typicalCoverage && <p className="wnyhs-package-detail-strong">Typical coverage: {pkg.typicalCoverage}</p>}
          </div>
          <div className="wnyhs-card wnyhs-package-detail-price">
            <strong>{pkg.price}</strong>
            <span>One-time upfront cost</span>
          </div>
        </div>
      </section>

      <section className="wnyhs-section">
        <div className="wnyhs-section-header">
          <p className="wnyhs-eyebrow">Overview</p>
          <h2 className="wnyhs-heading">Package bio</h2>
          <p className="wnyhs-description">{pkg.bio}</p>
        </div>
      </section>

      <div className="wnyhs-package-detail-grid">
        <section className="wnyhs-section">
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">Included</p>
            <h2 className="wnyhs-heading">{vertical === 'home-security' ? "What's included (plain-English)" : 'Included equipment + setup'}</h2>
          </div>
          <div className="wnyhs-card">{renderList(pkg.includes)}</div>
        </section>

        {vertical !== 'home-security' && (
          <section className="wnyhs-section">
            <div className="wnyhs-section-header">
              <p className="wnyhs-eyebrow">Materials</p>
              <h2 className="wnyhs-heading">Bill of materials (BOM)</h2>
            </div>
            <div className="wnyhs-card">{renderList(pkg.billOfMaterials)}</div>
          </section>
        )}

        <section className="wnyhs-section">
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">Why this package</p>
            <h2 className="wnyhs-heading">Differentiators</h2>
          </div>
          <div className="wnyhs-card">{renderList(pkg.differentiators)}</div>
        </section>

        <section className="wnyhs-section">
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">Capabilities</p>
            <h2 className="wnyhs-heading">{vertical === 'home-security' ? 'What your system can and will do' : 'Automation flows'}</h2>
          </div>
          <div className="wnyhs-card">{renderList(pkg.automationFlows)}</div>
        </section>

        <section className="wnyhs-section">
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">Process</p>
            <h2 className="wnyhs-heading">Intake to delivery journey</h2>
          </div>
          <div className="wnyhs-card">{renderList(pkg.journeyFlow)}</div>
        </section>

        <section className="wnyhs-section">
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">Checkpoints</p>
            <h2 className="wnyhs-heading">Agreement + deposit checkpoints</h2>
          </div>
          <div className="wnyhs-card">
            {renderList([
              ...pkg.agreements,
              `Deposit policy: ${
                siteConfig.depositPolicy.type === 'flat'
                  ? `Flat $${siteConfig.depositPolicy.value}`
                  : `${siteConfig.depositPolicy.value * 100}% of the deterministic total`
              }`,
            ])}
          </div>
        </section>
      </div>

      <section className="wnyhs-section wnyhs-page-cta">
        <div className="wnyhs-package-detail-actions">
          <Link className="wnyhs-button wnyhs-button--primary" to={contactLink}>
            Ask about this package
          </Link>
          <Link
            className="wnyhs-button wnyhs-button--secondary"
            to={vertical === 'home-security' ? '/reliability?vertical=home-security' : '/reliability'}
          >
            Learn about offline readiness
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PackageDetail;
