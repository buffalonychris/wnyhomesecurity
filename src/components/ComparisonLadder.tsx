import { Link } from 'react-router-dom';
import { FeatureGroup, getFeatureGroups } from '../data/features';
import { packagePricing, PackageTierId } from '../data/pricing';
import TierBadge from './TierBadge';

const normalizeHeading = (tierId: PackageTierId, heading: string): string => {
  if (tierId === 'A1') return 'Included Features';
  if (tierId === 'A2' && heading.toLowerCase().includes('basic')) {
    return 'Includes Everything in Basic';
  }
  if (tierId === 'A3' && heading.toLowerCase().includes('basic')) {
    return 'Includes Everything in Basic & Plus';
  }
  return heading;
};

const tierOrder: PackageTierId[] = ['A1', 'A2', 'A3'];

const ComparisonLadder = () => {
  return (
    <div className="comparison-ladder" aria-label="Elder Tech comparison ladder">
      <div className="ladder-header">
        <div>
          <p className="badge">Basic → Plus → Pro</p>
          <h2 style={{ margin: '0.25rem 0' }}>Compare Elder Tech tiers</h2>
          <p style={{ margin: 0, color: 'var(--kaec-muted)' }}>
            See exactly what you gain as you move up. Pricing, package contents, and checkout flows remain
            unchanged.
          </p>
        </div>
        <Link className="btn btn-primary" to="/quote">
          Get a Quote
        </Link>
      </div>
      <div className="ladder-grid">
        {tierOrder.map((tierId) => {
          const pricing = packagePricing.find((pkg) => pkg.id === tierId);
          const featureGroups = getFeatureGroups(tierId, []).map<FeatureGroup>((group) => ({
            ...group,
            heading: normalizeHeading(tierId, group.heading),
          }));

          return (
            <div
              key={tierId}
              className={`ladder-column ${tierId === 'A2' ? 'ladder-column-silver' : ''} ${
                tierId === 'A3' ? 'ladder-column-gold' : ''
              }`}
            >
              <div className="ladder-column-head">
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <div style={{ display: 'grid', gap: '0.35rem' }}>
                    <TierBadge tierId={tierId} />
                    <h3 style={{ margin: 0 }}>{pricing?.name}</h3>
                    <p style={{ margin: 0, color: 'var(--kaec-muted)' }}>{pricing?.summary}</p>
                  </div>
                  {tierId === 'A3' && <span className="ladder-highlight">Most Comprehensive</span>}
                </div>
              </div>

              <div className="ladder-sections">
                {featureGroups.map((group) => (
                  <div key={group.heading} className="ladder-section">
                    <div className="ladder-section-title">{group.heading}</div>
                    <div className="ladder-section-list">
                      {group.categories.map((category) => (
                        <div key={category.title} className="ladder-category">
                          <strong>{category.title}</strong>
                          <ul className="list">
                            {category.items.map((item) => (
                              <li key={item}>
                                <span />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="ladder-cta-row">
                <Link
                  className={`btn ${tierId === 'A3' ? 'btn-primary ladder-cta-gold' : 'btn-secondary'}`}
                  to="/quote"
                >
                  Get a Quote
                </Link>
                {tierId === 'A2' && <small className="ladder-note">Adds Basic coverage + Plus upgrades</small>}
                {tierId === 'A3' && <small className="ladder-note">Includes Basic & Plus plus Pro exclusives</small>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComparisonLadder;
