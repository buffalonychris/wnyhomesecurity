import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const HaloPushbutton = () => {
  return (
    <div className="container section">
      <Seo
        title="HALO™ Pushbutton | Reliable Elder Care"
        description="A calm, privacy-first pushbutton with no monthly fees. HALO™ removes paid relay layers without surveillance or monitoring claims."
      />
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <div>
          <p className="badge" style={{ marginBottom: '0.5rem' }}>
            Reliable Elder Care — HALO™
          </p>
          <h2 style={{ margin: 0 }}>HALO™ Pushbutton keeps help reachable without monthly fees.</h2>
          <p style={{ maxWidth: 720, marginTop: '0.75rem' }}>
            A simple, wireless button designed for real homes. No microphone monitoring, no GPS
            tracking, and no continuous surveillance. It adds protection without replacing existing
            care.
          </p>
        </div>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>How traditional alert subscriptions actually work</h3>
          <p>
            Most alert buttons route every press through a paid relay center before anyone you know
            is contacted. That relay is a service layer, not a technical requirement.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Why monthly fees exist (neutral, factual)</h3>
          <p>
            Monthly fees in the alert-button industry are fear-based monetization, not technical
            requirements. They pay for ongoing call-center overhead, marketing, and escalation
            scripts—not the button itself.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>What HALO™ removes — and why that matters</h3>
          <ul className="list">
            <li>
              <span />
              <span>Paid relay layers that slow down the path to your chosen contacts.</span>
            </li>
            <li>
              <span />
              <span>Subscription billing that can outlast the hardware itself.</span>
            </li>
            <li>
              <span />
              <span>Always-on surveillance expectations that trade privacy for access.</span>
            </li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>
            HALO™ exists to restore truth, privacy, and speed with a one-time purchase.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Privacy legitimacy explained simply</h3>
          <p>
            HALO™ is designed to avoid constant monitoring. No microphone monitoring. No GPS
            tracking. No continuous surveillance. Your home remains your home.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Speed and reliability, without hype</h3>
          <p>
            By removing paid relay layers, notifications can move directly to the people you choose.
            That reduces handoffs and complexity, without promising emergency outcomes.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Who HALO™ Pushbutton is for</h3>
          <ul className="list">
            <li>
              <span />
              <span>Elders who want a simple, respectful way to call for help.</span>
            </li>
            <li>
              <span />
              <span>Families who want privacy without recurring fees.</span>
            </li>
            <li>
              <span />
              <span>Care coordinators who need clarity and honest constraints.</span>
            </li>
          </ul>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Transparent pricing disclosure</h3>
          <p>
            HALO™ Pushbutton is a one-time price of <strong>$399</strong>. No monthly fees — ever.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            It is self-install capable and wireless, with offline-first design priorities.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Looking for a full system?</h3>
          <p>
            HALO™ Pushbutton is the simplest entry. If you need broader coverage, the full Reliable
            Elder Care package adds a complete, privacy-legitimate system.
          </p>
          <Link className="btn btn-secondary" to="/halo-package">
            Explore HALO™ Reliable Elder Care Package
          </Link>
        </section>

        <section>
          <h3 style={{ marginTop: 0 }}>Disclaimers</h3>
          <ul className="list">
            <li>
              <span />
              <span>Not a medical device.</span>
            </li>
            <li>
              <span />
              <span>No emergency response guarantee.</span>
            </li>
            <li>
              <span />
              <span>Not a replacement for caregivers, 911, or clinical services.</span>
            </li>
            <li>
              <span />
              <span>Privacy statement: no surveillance, no microphone monitoring, no GPS tracking.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default HaloPushbutton;
