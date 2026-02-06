const Terms = () => (
  <div className="container section" style={{ display: 'grid', gap: '1.5rem' }}>
    <section style={{ display: 'grid', gap: '0.75rem' }}>
      <div className="badge">Terms &amp; Conditions</div>
      <h1 style={{ marginTop: 0, color: '#fff7e6' }}>Service terms</h1>
      <p style={{ margin: 0, color: '#c8c0aa' }}>
        These terms outline how the scheduling assistant is provided and what it does not do.
      </p>
    </section>

    <section className="card" style={{ display: 'grid', gap: '0.75rem' }}>
      <h2 style={{ marginTop: 0 }}>Service limitations</h2>
      <p style={{ margin: 0, color: '#c8c0aa' }}>
        The assistant is scheduling-only. It does not provide pricing, guarantees, emergency diagnosis, or staff
        replacement services.
      </p>
    </section>

    <section className="card" style={{ display: 'grid', gap: '0.75rem' }}>
      <h2 style={{ marginTop: 0 }}>Liability boundaries</h2>
      <p style={{ margin: 0, color: '#c8c0aa' }}>
        We are not liable for missed appointments, lost business, or damages resulting from delays, carrier
        outages, or inaccurate customer-provided information.
      </p>
    </section>

    <section className="card" style={{ display: 'grid', gap: '0.75rem' }}>
      <h2 style={{ marginTop: 0 }}>Acceptable use</h2>
      <p style={{ margin: 0, color: '#c8c0aa' }}>
        Users agree not to misuse the assistant for prohibited or deceptive activities. The service may be
        suspended if abuse is detected.
      </p>
    </section>

    <section className="card" style={{ display: 'grid', gap: '0.75rem' }}>
      <h2 style={{ marginTop: 0 }}>Demo terms</h2>
      <p style={{ margin: 0, color: '#c8c0aa' }}>
        Free demos expire after Day 5 and convert to a read-only dashboard unless you explicitly authorize a
        paid plan.
      </p>
    </section>
  </div>
);

export default Terms;
