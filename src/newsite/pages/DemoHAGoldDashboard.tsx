const summaryCards = [
  { label: 'Monitoring status', value: 'Active · All zones secure' },
  { label: 'Response readiness', value: 'Verified · 24/7 dispatch ready' },
  { label: 'System health', value: '98% · All devices online' },
];

const zones = [
  { name: 'Front entry', status: 'Secured', lastEvent: 'Door check · 2h ago' },
  { name: 'Garage', status: 'Secured', lastEvent: 'Motion sweep · 35m ago' },
  { name: 'Back patio', status: 'Secured', lastEvent: 'Camera sync · 10m ago' },
  { name: 'Upper hallway', status: 'Secured', lastEvent: 'Glassbreak ready · 5m ago' },
];

const routines = [
  { name: 'Evening arrival', detail: 'Exterior lights, entry sensors, foyer cam' },
  { name: 'Night secure', detail: 'All doors locked, motion zones armed, cameras record' },
  { name: 'Weekend away', detail: 'Randomized lights, smart audio, emergency contacts' },
];

const devices = [
  { device: 'Smart lock · Entry', signal: 'Excellent', battery: '92%' },
  { device: 'Motion sensor · Garage', signal: 'Strong', battery: '88%' },
  { device: 'Glassbreak · Living room', signal: 'Strong', battery: '85%' },
  { device: 'Camera · Back patio', signal: 'Excellent', battery: '90%' },
];

const DemoHAGoldDashboard = () => {
  return (
    <div className="newsite-container">
      <section className="newsite-hero">
        <div>
          <span className="newsite-badge">HA Gold demo</span>
          <h1>Homeowner dashboard</h1>
          <p>Review monitoring coverage, device health, and automation routines in a read-only environment.</p>
        </div>
        <div className="newsite-card">
          <strong>Demo mode — simulated data</strong>
          <p>This dashboard is read-only and displays a staged household snapshot.</p>
        </div>
      </section>

      <section className="newsite-section">
        <h2>At-a-glance</h2>
        <div className="newsite-grid">
          {summaryCards.map((card) => (
            <div className="newsite-card" key={card.label}>
              <span className="newsite-badge">{card.label}</span>
              <strong>{card.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="newsite-section">
        <h2>Zone status</h2>
        <div className="newsite-surface">
          <table className="newsite-table">
            <thead>
              <tr>
                <th>Zone</th>
                <th>Status</th>
                <th>Last activity</th>
              </tr>
            </thead>
            <tbody>
              {zones.map((zone) => (
                <tr key={zone.name}>
                  <td>{zone.name}</td>
                  <td>{zone.status}</td>
                  <td>{zone.lastEvent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="newsite-section">
        <h2>Automation routines</h2>
        <div className="newsite-grid">
          {routines.map((routine) => (
            <div className="newsite-card" key={routine.name}>
              <strong>{routine.name}</strong>
              <p>{routine.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="newsite-section">
        <h2>Device health</h2>
        <div className="newsite-surface">
          <table className="newsite-table">
            <thead>
              <tr>
                <th>Device</th>
                <th>Signal</th>
                <th>Battery</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((item) => (
                <tr key={item.device}>
                  <td>{item.device}</td>
                  <td>{item.signal}</td>
                  <td>{item.battery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default DemoHAGoldDashboard;
