import { homeSecurityComparisonRows } from '../data/homeSecurityComparison';
import { getPackagePricing } from '../data/pricing';

const HomeSecurityComparisonTable = () => {
  const tiers = getPackagePricing('home-security');

  return (
    <div className="card" style={{ overflowX: 'auto' }}>
      <table className="table" aria-label="Home Security package comparison table">
        <thead>
          <tr>
            <th scope="col">Feature</th>
            {tiers.map((tier) => (
              <th scope="col" key={tier.id}>
                <div style={{ display: 'grid' }}>
                  <span style={{ fontWeight: 700 }}>{tier.name}</span>
                  <small style={{ color: 'var(--kaec-gold)' }}>${tier.basePrice.toLocaleString()}</small>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {homeSecurityComparisonRows.map((row) => (
            <tr key={row.feature}>
              <th scope="row">{row.feature}</th>
              {tiers.map((tier) => (
                <td key={`${tier.id}-${row.feature}`}>{row.values[tier.id]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ margin: '0.75rem 0 0', color: 'var(--kaec-muted)' }}>
        Legend: ✅ included • — not included.
      </p>
    </div>
  );
};

export default HomeSecurityComparisonTable;
