const Funding = () => {
  return (
    <div className="container section">
      <h2 style={{ marginTop: 0 }}>Funding and coverage ideas</h2>
      <p>
        We keep pricing one-time and transparent to make approvals straightforward. Here are common
        approaches families and operators use to fund installations.
      </p>
      <div className="card-grid">
        <div className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Property improvement budgets</h3>
          <p>
            Treat packages as a capital improvement with clear one-time costs. We provide itemized
            scopes to support approvals.
          </p>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Insurance / risk mitigation</h3>
          <p>
            Some insurers recognize proactive safety tech. We document offline-first coverage and
            local recording capabilities to support submissions.
          </p>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Family cost-share</h3>
          <p>
            Because pricing is upfront with no monthly fee, families often split the one-time cost to
            keep care predictable.
          </p>
        </div>
      </div>
      <div className="card" style={{ marginTop: '1.5rem' }}>
        <h3 style={{ marginTop: 0, color: '#fff7e6' }}>What we provide</h3>
        <ul className="list">
          <li>
            <span />
            <span>Plain-language proposals with fixed one-time pricing.</span>
          </li>
          <li>
            <span />
            <span>Home Assistant-focused training for residents and caregivers.</span>
          </li>
          <li>
            <span />
            <span>Documentation of offline operation boundaries and power requirements.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Funding;
