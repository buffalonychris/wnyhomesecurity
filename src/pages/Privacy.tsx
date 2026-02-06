const Privacy = () => (
  <div className="container section" style={{ display: 'grid', gap: '1.5rem' }}>
    <section style={{ display: 'grid', gap: '0.75rem' }}>
      <div className="badge">Privacy Policy</div>
      <h1 style={{ marginTop: 0, color: '#fff7e6' }}>Privacy for the scheduling assistant</h1>
      <p style={{ margin: 0, color: '#c8c0aa' }}>
        This policy explains how call and text data is handled for the estimate scheduling assistant.
      </p>
    </section>

    <section className="card" style={{ display: 'grid', gap: '0.75rem' }}>
      <h2 style={{ marginTop: 0 }}>Call recordings</h2>
      <p style={{ margin: 0, color: '#c8c0aa' }}>
        Calls may be recorded for quality, scheduling accuracy, and audit trail purposes. Access is limited to
        authorized users.
      </p>
    </section>

    <section className="card" style={{ display: 'grid', gap: '0.75rem' }}>
      <h2 style={{ marginTop: 0 }}>SMS usage</h2>
      <p style={{ margin: 0, color: '#c8c0aa' }}>
        SMS is used for appointment confirmations, reminders, and opt-in scheduling updates. Message rates may
        apply based on your carrier.
      </p>
    </section>

    <section className="card" style={{ display: 'grid', gap: '0.75rem' }}>
      <h2 style={{ marginTop: 0 }}>Data retention</h2>
      <p style={{ margin: 0, color: '#c8c0aa' }}>
        Scheduling interactions are retained only as long as needed for audit trails, scheduling accuracy, and
        compliance. Retention windows are shared during onboarding.
      </p>
    </section>

    <section className="card" style={{ display: 'grid', gap: '0.75rem' }}>
      <h2 style={{ marginTop: 0 }}>Opt-out handling</h2>
      <p style={{ margin: 0, color: '#c8c0aa' }}>
        Customers can opt out of SMS updates at any time. Opt-out requests are honored promptly and recorded in
        the scheduling log.
      </p>
    </section>
  </div>
);

export default Privacy;
