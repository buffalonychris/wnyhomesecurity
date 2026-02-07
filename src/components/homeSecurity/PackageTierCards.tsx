import { Link } from 'react-router-dom';
import type { PackageTier } from '../../content/packages';
import { HOME_SECURITY_TIER_MEDIA } from '../../content/homeSecurityPackageData';

type Props = {
  packages: PackageTier[];
};

const PackageTierCards = ({ packages }: Props) => {
  return (
    <div className="hs-premium-package-grid">
      {packages.map((pkg) => {
        const tierMedia = HOME_SECURITY_TIER_MEDIA[pkg.id as keyof typeof HOME_SECURITY_TIER_MEDIA];
        const image = tierMedia?.image;
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
              <ul className="hs-premium-package-list">
                {(pkg.features ?? pkg.includes).slice(0, 4).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="btn btn-secondary" to={`/packages/${pkg.id}?vertical=home-security`}>
                Learn More
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default PackageTierCards;
