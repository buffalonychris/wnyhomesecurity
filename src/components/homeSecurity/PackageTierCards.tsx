import { Link } from 'react-router-dom';
import type { PackageTier } from '../../content/packages';
import { HOME_SECURITY_TIER_MEDIA } from '../../content/homeSecurityPackageData';
import { appendQueryParam } from '../../content/wnyhsNavigation';
import { updateRetailFlow } from '../../lib/retailFlow';
import { PackageTierId } from '../../data/pricing';

type Props = {
  packages: PackageTier[];
  ctaLink: string;
};

const PackageTierCards = ({ packages, ctaLink }: Props) => {
  const tierQueryMap: Record<string, string> = {
    a1: 'bronze',
    a2: 'silver',
    a3: 'gold',
  };
  return (
    <div className="hs-premium-package-grid">
      {packages.map((pkg) => {
        const tierMedia = HOME_SECURITY_TIER_MEDIA[pkg.id as keyof typeof HOME_SECURITY_TIER_MEDIA];
        const image = tierMedia?.image;
        const tierId = pkg.id.toUpperCase() as PackageTierId;
        const tierParam = tierQueryMap[pkg.id] ?? pkg.name.toLowerCase();
        const tierCtaLink = appendQueryParam(ctaLink, 'tier', tierParam);
        const features = pkg.features ?? pkg.includes ?? [];
        const highlights = features.slice(0, 2);
        const handleSelect = () => updateRetailFlow({ homeSecurity: { selectedPackageId: tierId } });
        return (
          <article key={pkg.id} className="hs-premium-package-card" aria-label={`${pkg.name} package`}>
            {image ? (
              <div className="hs-premium-package-media">
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
                {tierMedia?.caption ? <div className="hs-premium-package-caption">{tierMedia.caption}</div> : null}
              </div>
            ) : null}
            <div className="hs-premium-package-body">
              <div className="hs-premium-package-header">
                <div>
                  <p className="hs-premium-package-tier">{pkg.name}</p>
                  <h3>{pkg.tagline}</h3>
                </div>
                <div className="hs-premium-package-price">{pkg.price}</div>
              </div>
              <p className="hs-premium-package-summary">{pkg.oneLiner}</p>
              {highlights.length ? (
                <ul className="hs-premium-package-highlights">
                  {highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {features.length ? (
                <details className="hs-premium-package-accordion">
                  <summary>What’s included</summary>
                  <ul className="hs-premium-package-list">
                    {features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </details>
              ) : null}
              <div className="hs-premium-package-actions">
                <Link className="btn btn-primary" to={tierCtaLink} onClick={handleSelect}>
                  Choose {pkg.name}
                </Link>
              </div>
              <div className="hs-premium-package-meta">
                <Link className="hs-premium-package-link" to={`/packages/${pkg.id}?vertical=home-security`}>
                  View details
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default PackageTierCards;
