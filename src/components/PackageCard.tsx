import { Link } from 'react-router-dom';
import type { PackageTier } from '../content/packages';
import { PackageTierId } from '../data/pricing';
import { VerticalKey } from '../lib/verticals';
import { updateRetailFlow } from '../lib/retailFlow';

type Props = {
  pkg: PackageTier;
  vertical?: VerticalKey;
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

const PackageCard = ({ pkg, vertical, image }: Props) => {
  const tierId = pkg.id.toUpperCase() as PackageTierId;
  const isHomeSecurity = vertical === 'home-security';
  const styleLabelMap: Record<string, string> = {
    a1: 'Essential Awareness',
    a2: 'Balanced Home Coverage',
    a3: 'Expanded Property Coverage',
  };
  const styleLabel = isHomeSecurity ? styleLabelMap[pkg.id] ?? pkg.name : pkg.name;
  const primaryLabel = isHomeSecurity ? 'Request Walkthrough' : `View ${pkg.name}`;
  const tierQueryMap: Record<string, string> = {
    a1: 'bronze',
    a2: 'silver',
    a3: 'gold',
  };
  const tierParam = tierQueryMap[pkg.id] ?? pkg.name.toLowerCase();
  const primaryHref = isHomeSecurity
    ? `/contact?vertical=home-security&tier=${encodeURIComponent(tierParam)}&estimateIntent=selected-package`
    : `/packages/${pkg.id}`;
  const featureList = isHomeSecurity ? pkg.features ?? [] : pkg.includes;

  const handleSelect = () => {
    if (!isHomeSecurity) return;
    updateRetailFlow({ homeSecurity: { selectedPackageId: tierId } });
  };

  return (
    <div className={`card package-card${isHomeSecurity ? ' package-card--home-security' : ''}`} data-tier={isHomeSecurity ? pkg.id : undefined} aria-label={`${styleLabel} protection style`}>
      {image ? (
        <div className="package-card-media">
          <picture>
            {image.sources?.map((source) => (
              <source key={source.type} type={source.type} srcSet={source.srcSet} />
            ))}
            <img src={image.src} srcSet={image.srcSet} sizes={image.sizes} alt={image.alt} loading="lazy" />
          </picture>
        </div>
      ) : null}
      <div className="package-card-header">
        <div style={{ display: 'grid', gap: '0.35rem' }}>
          <h3 style={{ margin: 0, color: '#fff7e6' }}>{styleLabel}</h3>
          <div style={{ color: 'var(--kaec-muted)' }}>{pkg.oneLiner}</div>
        </div>
        {isHomeSecurity ? (
          <div className="package-card-context">
            <small style={{ color: 'var(--kaec-muted)' }}>{pkg.tagline}</small>
          </div>
        ) : null}
      </div>
      <ul className="list" aria-label="Included features">
        {featureList.map((item) => (
          <li key={item}>
            <span />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
        <Link className={`btn btn-primary${isHomeSecurity ? ' package-cta' : ''}`} to={primaryHref} aria-label={primaryLabel} onClick={handleSelect}>
          {primaryLabel}
        </Link>
      </div>
      {!isHomeSecurity && (
        <div className="package-card-links">
          <Link className="package-card-link" to={'/contact'} aria-label="Talk to us about this package">
            Talk to us
          </Link>
        </div>
      )}
    </div>
  );
};

export default PackageCard;
