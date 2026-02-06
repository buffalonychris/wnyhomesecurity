import { Link } from 'react-router-dom';
import type { PackageTier } from '../content/packages';
import TierBadge from './TierBadge';
import { PackageTierId } from '../data/pricing';
import { VerticalKey } from '../lib/verticals';
import { updateRetailFlow } from '../lib/retailFlow';
import AccordionSection from './AccordionSection';

type Props = {
  pkg: PackageTier;
  vertical?: VerticalKey;
  imageCaption?: string;
  image?: {
    alt: string;
    src: string;
    srcSet?: string;
    sizes?: string;
    sources?: Array<{
      type: string;
      srcSet: string;
    }>;
  };
};

const PackageCard = ({ pkg, vertical, imageCaption, image }: Props) => {
  const tierId = pkg.id.toUpperCase() as PackageTierId;
  const verticalQuery = vertical === 'home-security' ? '?vertical=home-security' : '';
  const isMostPopular = vertical === 'home-security' && pkg.id === 'a2';
  const contactLink = vertical === 'home-security' ? `/contact?vertical=home-security&package=${pkg.id}` : '/contact';
  const primaryLabel = vertical === 'home-security' ? `Choose ${pkg.name}` : `View ${pkg.name}`;
  const isHomeSecurity = vertical === 'home-security';
  const featureList = isHomeSecurity ? pkg.features ?? [] : pkg.includes;
  const featurePreview = isHomeSecurity ? featureList.slice(0, 4) : featureList;
  const hardwareList = isHomeSecurity ? pkg.hardware ?? [] : [];
  const handleSelect = () => {
    if (vertical !== 'home-security') return;
    updateRetailFlow({ homeSecurity: { selectedPackageId: tierId } });
  };
  return (
    <div
      className={`card package-card${isMostPopular ? ' card-popular package-card--featured' : ''}${
        isHomeSecurity ? ' package-card--home-security' : ''
      }`}
      data-tier={isHomeSecurity ? pkg.id : undefined}
      aria-label={`${pkg.name} package`}
    >
      {image ? (
        <div className="package-card-media">
          <picture>
            {image.sources?.map((source) => (
              <source key={source.type} type={source.type} srcSet={source.srcSet} />
            ))}
            <img
              src={image.src}
              srcSet={image.srcSet}
              sizes={image.sizes}
              alt={image.alt}
              loading="lazy"
            />
          </picture>
          <div className="package-card-media-overlay" aria-hidden="true" />
          {imageCaption ? <div className="package-card-caption">{imageCaption}</div> : null}
          {isMostPopular ? <div className="package-card-ribbon">Recommended</div> : null}
        </div>
      ) : null}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'grid', gap: '0.35rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
            <TierBadge tierId={tierId} labelOverride={pkg.badge ?? undefined} vertical={vertical} />
            {isMostPopular && <span className="popular-pill">Recommended</span>}
          </div>
          <h3 style={{ margin: 0, color: '#fff7e6' }}>{pkg.name}</h3>
          <div style={{ color: 'var(--kaec-muted)' }}>{pkg.tagline}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--kaec-gold)' }}>
            {pkg.price}
          </div>
          <small style={{ color: 'var(--kaec-muted)' }}>One-time upfront</small>
        </div>
      </div>
      <p style={{ marginTop: '1rem', color: '#e6ddc7' }}>{pkg.oneLiner}</p>
      <ul className="list" aria-label="Included features">
        {featurePreview.map((item) => (
          <li key={item}>
            <span />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {isHomeSecurity && (
        <AccordionSection title="What’s included" description="Full hardware counts for this tier.">
          <ul className="list" aria-label="Full hardware list" style={{ marginTop: 0 }}>
            {hardwareList.map((item) => (
              <li key={item.label}>
                <span />
                <span>
                  {item.label} ({item.qty})
                </span>
              </li>
            ))}
          </ul>
        </AccordionSection>
      )}
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
        <Link
          className={`btn btn-primary${isHomeSecurity ? ' package-cta' : ''}`}
          to={`/packages/${pkg.id}${verticalQuery}`}
          aria-label={primaryLabel}
          onClick={handleSelect}
        >
          {primaryLabel}
        </Link>
        {vertical !== 'home-security' && (
          <Link
            className="btn btn-secondary"
            to={contactLink}
            aria-label="Talk to us about this package"
          >
            Talk to us
          </Link>
        )}
      </div>
    </div>
  );
};

export default PackageCard;
