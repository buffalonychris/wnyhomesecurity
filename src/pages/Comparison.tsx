import { useSearchParams } from 'react-router-dom';
import HomeSecurityComparisonTable from '../components/HomeSecurityComparisonTable';
import WnyhsPageLayout from '../components/homeSecurity/WnyhsPageLayout';
import { useLayoutConfig } from '../components/LayoutConfig';
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

  useLayoutConfig({
    layoutVariant: vertical === 'home-security' ? 'funnel' : 'sitewide',
    showBreadcrumbs: false,
  });
  const content = (
    <div className={vertical === 'home-security' ? 'wnyhs-marketing-stack' : 'container section'}>
      {vertical === 'home-security' ? (
        <>
          <div className="wnyhs-comparison-header">
            <div className="badge">Comparison</div>
            <h1 style={{ margin: 0 }}>Compare Home Security packages</h1>
            <p className="wnyhs-comparison-subtitle">
              Home Security tiers keep Home Assistant as the single dashboard. Remote access requires internet; local control stays available on LAN.
            </p>
          </div>
          <div className="wnyhs-comparison-grid">
            <div className="wnyhs-comparison-card">
              <strong>Local-first operation</strong>
              <p>Every tier keeps local automations, alerts, and dashboards running on your home network.</p>
            </div>
            <div className="wnyhs-comparison-card">
              <strong>Coverage difference</strong>
              <p>Bronze focuses on entry coverage, Silver extends indoor + outdoor cameras, and Gold expands every zone.</p>
            </div>
            <div className="wnyhs-comparison-card">
              <strong>Optional monitoring</strong>
              <p>Professional monitoring is optional and provided directly by third-party services you choose.</p>
            </div>
          </div>
          <div className="wnyhs-comparison-table">
            <HomeSecurityComparisonTable />
          </div>
        </>
      ) : (
        <>
          <h2 style={{ marginTop: 0 }}>{`Compare ${brandSite} packages`}</h2>
          <p>
            All tiers keep Home Assistant as the single control surface and prioritize local operation when power is available. Pricing is one-time and upfront across the board.
          </p>
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
        </>
      )}
    </div>
  );

  if (vertical === 'home-security') {
    return (
      <WnyhsPageLayout mode="marketing" ctaLink="/discovery?vertical=home-security">
        {content}
      </WnyhsPageLayout>
    );
  }

  return content;
};

export default Comparison;
