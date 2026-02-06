import { brandServiceLocation } from '../lib/brand';

const Home = () => {
  return (
    <div>
      <section className="section">
        <div className="container hero">
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            <span className="badge">Reliable Elder Care platform</span>
            <h1 style={{ margin: 0, fontSize: 'clamp(2.4rem, 4vw, 3.4rem)' }}>
              Residential, commercial, and SaaS security &amp; automation—grounded in elder care
              expertise.
            </h1>
            <p style={{ margin: 0, color: 'var(--kaec-text-muted)', fontSize: '1.05rem' }}>
              Reliable Elder Care delivers modern protection and automation for homes, businesses,
              and partners. Elder care remains our foundational design philosophy, so every system
              is human-centered, dependable, and ready to scale.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a className="btn btn-primary" href="/schedule">
                Schedule an Estimate
              </a>
              <a className="btn btn-secondary" href="/contact">
                Business &amp; Partner Inquiries
              </a>
            </div>
            <div style={{ color: 'var(--kaec-text-subtle)' }}>
              Service location: {brandServiceLocation}.
            </div>
          </div>
          <div className="hero-card" style={{ display: 'grid', gap: '1rem' }}>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--kaec-text-strong)' }}>Three audience paths</div>
              <p style={{ margin: '0.35rem 0 0', color: 'var(--kaec-text-muted)' }}>
                Choose the experience that fits your property and operational needs.
              </p>
            </div>
            <div className="card-grid" style={{ gap: '0.75rem' }}>
              <div className="card" style={{ padding: '1rem' }}>
                <strong>Residential Solutions</strong>
                <p style={{ margin: '0.45rem 0', color: 'var(--kaec-text-muted)' }}>
                  Smart protection, automation, and wellness-ready monitoring for households.
                </p>
                <a className="btn btn-secondary" href="/home-security">
                  Explore Residential
                </a>
              </div>
              <div className="card" style={{ padding: '1rem' }}>
                <strong>Business Solutions</strong>
                <p style={{ margin: '0.45rem 0', color: 'var(--kaec-text-muted)' }}>
                  Commercial-grade security, access, and automation for offices and facilities.
                </p>
                <a className="btn btn-secondary" href="/contact">
                  Explore Business
                </a>
              </div>
              <div className="card" style={{ padding: '1rem' }}>
                <strong>SaaS &amp; Partners</strong>
                <p style={{ margin: '0.45rem 0', color: 'var(--kaec-text-muted)' }}>
                  Partner-ready platform integrations, reporting, and managed program support.
                </p>
                <a className="btn btn-secondary" href="/contact">
                  Explore SaaS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>What we do</h2>
          <p style={{ color: 'var(--kaec-text-muted)', maxWidth: '780px' }}>
            Reliable Elder Care is a full security and automation platform that supports households,
            businesses, and SaaS partners. Elder care informs every workflow, giving you calm,
            reliable experiences across any property.
          </p>
          <div className="card-grid">
            <div className="card">
              <h3 style={{ marginTop: 0, color: 'var(--kaec-text-strong)' }}>Residential</h3>
              <p style={{ color: 'var(--kaec-text-muted)' }}>
                Home security, automation, and wellness layers tuned for families and caregivers.
              </p>
            </div>
            <div className="card">
              <h3 style={{ marginTop: 0, color: 'var(--kaec-text-strong)' }}>Business</h3>
              <p style={{ color: 'var(--kaec-text-muted)' }}>
                Access control, monitoring, and automation designed for commercial spaces.
              </p>
            </div>
            <div className="card">
              <h3 style={{ marginTop: 0, color: 'var(--kaec-text-strong)' }}>SaaS</h3>
              <p style={{ color: 'var(--kaec-text-muted)' }}>
                Data-ready, partner-friendly infrastructure that scales with enterprise needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container hero">
          <div>
            <span className="badge">SaaS Operator Services</span>
            <h2 style={{ marginTop: '0.75rem' }}>Never Miss A Call Again</h2>
            <p style={{ color: 'var(--kaec-text-muted)' }}>
              Keep revenue flowing when your team is off the clock. Our SaaS operator service
              handles after-hours intake, lead qualification, and estimate scheduling for
              businesses deploying security and automation solutions.
            </p>
            <p style={{ color: 'var(--kaec-text-muted)' }}>
              We act as an extension of your operations team, documenting every interaction and
              routing the right opportunities to the right people.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a className="btn btn-primary" href="/schedule">
                Book a Demo
              </a>
              <a className="btn btn-secondary" href="/contact">
                SaaS &amp; Partners
              </a>
            </div>
          </div>
          <div className="hero-card" style={{ display: 'grid', gap: '1rem' }}>
            <div className="card-grid" style={{ gap: '0.85rem' }}>
              <div className="card" style={{ padding: '1rem' }}>
                <strong>After-hours intake</strong>
                <p style={{ margin: '0.5rem 0 0', color: 'var(--kaec-text-muted)' }}>
                  Capture urgent requests and new leads with a trained operator responding in your
                  brand voice.
                </p>
              </div>
              <div className="card" style={{ padding: '1rem' }}>
                <strong>Lead qualification</strong>
                <p style={{ margin: '0.5rem 0 0', color: 'var(--kaec-text-muted)' }}>
                  Confirm project scope, timelines, and decision-making status before sending work
                  to your sales team.
                </p>
              </div>
              <div className="card" style={{ padding: '1rem' }}>
                <strong>Estimate scheduling</strong>
                <p style={{ margin: '0.5rem 0 0', color: 'var(--kaec-text-muted)' }}>
                  Book onsite or virtual assessments quickly, so revenue-ready leads never go cold.
                </p>
              </div>
              <div className="card" style={{ padding: '1rem' }}>
                <strong>Operator services</strong>
                <p style={{ margin: '0.5rem 0 0', color: 'var(--kaec-text-muted)' }}>
                  Centralized reporting, intake notes, and escalation support for multi-location
                  teams and partner networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Solutions breakdown</h2>
          <div className="card-grid">
            <div className="card">
              <h3 style={{ marginTop: 0, color: 'var(--kaec-text-strong)' }}>
                Home Security &amp; Automation
              </h3>
              <ul className="list">
                <li>
                  <span />
                  <span>Smart entry, lighting, and monitoring built for everyday living.</span>
                </li>
                <li>
                  <span />
                  <span>Flexible expansions as households grow or caregiving needs change.</span>
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 style={{ marginTop: 0, color: 'var(--kaec-text-strong)' }}>
                Business Security &amp; Automation
              </h3>
              <ul className="list">
                <li>
                  <span />
                  <span>Commercial-grade coverage for offices, retail, and multi-site teams.</span>
                </li>
                <li>
                  <span />
                  <span>Structured reporting and operational visibility for leadership.</span>
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 style={{ marginTop: 0, color: 'var(--kaec-text-strong)' }}>Elder Care &amp; PERS</h3>
              <ul className="list">
                <li>
                  <span />
                  <span>Proactive safety monitoring integrated into every system design.</span>
                </li>
                <li>
                  <span />
                  <span>Human-centered alerts and escalation workflows for caregivers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container hero">
          <div>
            <h2>Bronze / Silver / Gold tiers</h2>
            <p style={{ color: 'var(--kaec-text-muted)' }}>
              Start with the tier that matches your property, then upgrade as coverage and
              automation needs expand. We align each tier to operational readiness without locking
              you into one-size-fits-all packages.
            </p>
          </div>
          <div className="hero-card" style={{ display: 'grid', gap: '0.85rem' }}>
            <div>
              <strong>Tier highlights</strong>
              <p style={{ margin: '0.35rem 0 0', color: 'var(--kaec-text-muted)' }}>
                Bronze sets the essentials, Silver expands monitoring and automation, and Gold
                supports the most advanced environments with full-stack readiness.
              </p>
            </div>
            <div style={{ color: 'var(--kaec-text-subtle)' }}>
              Ask for a walkthrough to understand the upgrade path—no pricing tables yet, just
              clear guidance.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Why Reliable Elder Care</h2>
          <div className="card-grid">
            <div className="card">
              <h3 style={{ marginTop: 0, color: 'var(--kaec-text-strong)' }}>Reliability</h3>
              <p style={{ color: 'var(--kaec-text-muted)' }}>
                Offline-capable protection with resilient automation built for real-world conditions.
              </p>
            </div>
            <div className="card">
              <h3 style={{ marginTop: 0, color: 'var(--kaec-text-strong)' }}>Human-centered design</h3>
              <p style={{ color: 'var(--kaec-text-muted)' }}>
                Elder care expertise informs every interface, alert, and workflow across use cases.
              </p>
            </div>
            <div className="card">
              <h3 style={{ marginTop: 0, color: 'var(--kaec-text-strong)' }}>Local expertise</h3>
              <p style={{ color: 'var(--kaec-text-muted)' }}>
                Buffalo and Western New York teams deliver on-site deployments and long-term support.
              </p>
            </div>
            <div className="card">
              <h3 style={{ marginTop: 0, color: 'var(--kaec-text-strong)' }}>Scalability</h3>
              <p style={{ color: 'var(--kaec-text-muted)' }}>
                Built to serve single homes, commercial portfolios, and SaaS partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container hero">
          <div>
            <h2>Regional trust</h2>
            <p style={{ color: 'var(--kaec-text-muted)' }}>
              We are based in Buffalo, NY and serve Western New York with local technicians, onsite
              assessments, and responsive support. Your deployment stays close to home.
            </p>
          </div>
          <div className="hero-card" style={{ display: 'grid', gap: '1rem' }}>
            <strong>Ready to plan your next step?</strong>
            <p style={{ margin: 0, color: 'var(--kaec-text-muted)' }}>
              Schedule an estimate, explore solution paths, or start a partner conversation today.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a className="btn btn-primary" href="/schedule">
                Schedule an Estimate
              </a>
              <a className="btn btn-secondary" href="/home-automation">
                Explore Solutions
              </a>
              <a className="btn btn-secondary" href="/contact">
                Partner / SaaS Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
