import { useSearchParams } from 'react-router-dom';
import HomeSecurityComparisonTable from '../components/HomeSecurityComparisonTable';
import { getPackages } from '../content/packages';
import { brandSite } from '../lib/brand';
import { resolveVertical } from '../lib/verticals';

const featureRows = [
  'Home Assistant as sole control app',
  'Local automations during outages (with power)',
  'Smart locks + lighting for safe paths',
  'Indoor camera coverage',
  'Outdoor camera coverage',
  'Local video recording included',
  'Water/leak/temperature sensing',
  'Cellular notification option',
];

const comparisonValues: Record<string, Record<string, string>> = {
  a1: {
    [featureRows[0]]: 'Yes',
    [featureRows[1]]: 'Yes',
    [featureRows[2]]: 'Core circuits',
    [featureRows[3]]: '2 Wi-Fi cameras',
    [featureRows[4]]: 'Add-on',
    [featureRows[5]]: 'Ready (local capable)',
    [featureRows[6]]: 'Add-on',
    [featureRows[7]]: 'Not included',
  },
  a2: {
    [featureRows[0]]: 'Yes',
    [featureRows[1]]: 'Yes',
    [featureRows[2]]: '6 circuits',
    [featureRows[3]]: '4 indoor cameras',
    [featureRows[4]]: '1 outdoor + doorbell',
    [featureRows[5]]: 'Local storage ready',
    [featureRows[6]]: 'Included',
    [featureRows[7]]: 'Add-on option',
  },
  a3: {
    [featureRows[0]]: 'Yes',
    [featureRows[1]]: 'Yes',
    [featureRows[2]]: 'Expanded whole-home',
    [featureRows[3]]: 'Extended with NVR',
    [featureRows[4]]: '5 outdoor incl. floodlight',
    [featureRows[5]]: 'Reolink NVR included',
    [featureRows[6]]: 'Included',
    [featureRows[7]]: 'Supported',
  },
};

const Comparison = () => {
  const [searchParams] = useSearchParams();
  const vertical = resolveVertical(searchParams.get('vertical'));
  const packages = getPackages(vertical);
  return (
    <div className="container section">
      <h2 style={{ marginTop: 0 }}>
        {vertical === 'home-security' ? 'Compare Home Security packages' : `Compare ${brandSite} packages`}
      </h2>
      <p>
        {vertical === 'home-security'
          ? 'Home Security tiers keep Home Assistant as the single dashboard. Remote access requires internet; local control stays available on LAN.'
          : 'All tiers keep Home Assistant as the single control surface and prioritize local operation when power is available. Pricing is one-time and upfront across the board.'}
      </p>
      {vertical === 'home-security' ? (
        <HomeSecurityComparisonTable />
      ) : (
        <div className="card" style={{ overflowX: 'auto' }}>
          <table className="table" aria-label="Package comparison table">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                {packages.map((pkg) => (
                  <th scope="col" key={pkg.id}>
                    <div style={{ display: 'grid' }}>
                      <span style={{ fontWeight: 700 }}>{pkg.name}</span>
                      <small style={{ color: 'var(--kaec-gold)' }}>{pkg.price}</small>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureRows.map((feature) => (
                <tr key={feature}>
                  <th scope="row">{feature}</th>
                  {packages.map((pkg) => (
                    <td key={`${pkg.id}-${feature}`}>{comparisonValues[pkg.id][feature]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Comparison;
