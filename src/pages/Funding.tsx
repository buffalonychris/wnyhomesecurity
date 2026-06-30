const Funding = () => {
  return (
    <main className="wnyhs-page">
      <div className="wnyhs-shell wnyhs-marketing-stack wnyhs-info-page">
        <section className="wnyhs-section">
          <div className="wnyhs-section-header">
            <h2 className="wnyhs-heading">Funding and coverage ideas</h2>
            <p className="wnyhs-description">
              We keep pricing one-time and transparent to make approvals straightforward. Here are common
              approaches families and operators use to fund installations.
            </p>
          </div>
        </section>
        <section className="wnyhs-info-grid" aria-label="Funding and coverage ideas">
          <article className="wnyhs-card">
            <h3 className="wnyhs-card-title">Property improvement budgets</h3>
            <p className="wnyhs-card-copy">
              Treat packages as a capital improvement with clear one-time costs. We provide itemized
              scopes to support approvals.
            </p>
          </article>
          <article className="wnyhs-card">
            <h3 className="wnyhs-card-title">Insurance / risk mitigation</h3>
            <p className="wnyhs-card-copy">
              Some insurers recognize proactive safety tech. We document offline-first coverage and
              local recording capabilities to support submissions.
            </p>
          </article>
          <article className="wnyhs-card">
            <h3 className="wnyhs-card-title">Family cost-share</h3>
            <p className="wnyhs-card-copy">
              Because pricing is upfront with no monthly fee, families often split the one-time cost to
              keep care predictable.
            </p>
          </article>
        </section>
        <section className="wnyhs-card">
          <h3 className="wnyhs-card-title">What we provide</h3>
          <ul className="list wnyhs-list-reset">
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
        </section>
      </div>
    </main>
  );
};

export default Funding;
