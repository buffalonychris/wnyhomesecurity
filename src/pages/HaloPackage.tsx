import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const HaloPackage = () => {
  return (
    <div className="container section">
      <Seo
        title="HALO™ Reliable Elder Care Package | Reliable Elder Care"
        description="A full, privacy-legitimate elder care system: wireless, self-install, offline-first reliability with no monthly fees."
      />
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <div style={{ textAlign: 'center' }}>
          <p className="badge" style={{ marginBottom: '0.5rem' }}>
            Reliable Elder Care — HALO™
          </p>
          <h2 style={{ margin: 0 }}>Independence and dignity, protected with a real system.</h2>
          <p style={{ maxWidth: 720, margin: '0.75rem auto 0' }}>
            The HALO™ Reliable Elder Care Package is wireless, self-install capable, and built for
            offline-first reliability. It is easy to use, designed for real homes, and never requires
            monthly fees.
          </p>
        </div>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Why wearable-only solutions fall short</h3>
          <p>
            Wearables depend on being worn, charged, and remembered. They often miss the home itself—
            the doors, rooms, and routines where most risks actually live.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>What makes HALO™ a real system</h3>
          <p>
            This is not a gadget. This is not monitoring theater. This is the most honest elder care
            system available—focused on practical coverage, calm alerts, and dignity-first design.
          </p>
          <ul className="list" style={{ marginTop: '0.75rem' }}>
            <li>
              <span />
              <span>Wireless coverage that respects the layout of real homes.</span>
            </li>
            <li>
              <span />
              <span>Self-install capable without requiring invasive construction.</span>
            </li>
            <li>
              <span />
              <span>No monthly fees and no subscription dependence.</span>
            </li>
          </ul>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Offline-first and privacy architecture</h3>
          <p>
            HALO™ is built to keep core functions local, even when internet service is interrupted.
            It avoids surveillance by design—no microphone monitoring, no GPS tracking, and no
            continuous surveillance expectations.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Health Home alignment (high-level)</h3>
          <p>
            The package can align with Health Home workflows by documenting outcomes, privacy posture,
            and clear eligibility constraints. We keep documentation plain and audit-ready.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Funding eligibility overview</h3>
          <p>
            Some households may qualify for full or partial funding through relevant programs.
            Eligibility depends on program criteria, documentation, and reviewer approval. We provide
            honest support without guarantees.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>What’s included (high-level)</h3>
          <ul className="list">
            <li>
              <span />
              <span>Core HALO™ hub and alert pathways configured for the home.</span>
            </li>
            <li>
              <span />
              <span>Wireless sensors and entry coverage selected for the layout.</span>
            </li>
            <li>
              <span />
              <span>Guided setup materials and calm operating instructions.</span>
            </li>
          </ul>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Who this package is for</h3>
          <ul className="list">
            <li>
              <span />
              <span>Elders who want dignity-first support without surveillance.</span>
            </li>
            <li>
              <span />
              <span>Families seeking a reliable system instead of a single gadget.</span>
            </li>
            <li>
              <span />
              <span>Care coordinators and reviewers who value transparency.</span>
            </li>
          </ul>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Next step</h3>
          <p>
            If you want a calm walkthrough or an eligibility conversation, reach out. We’ll explain
            what fits and what does not.
          </p>
          <Link className="btn btn-primary" to="/contact">
            Start a conversation
          </Link>
        </section>

        <section>
          <h3 style={{ marginTop: 0 }}>Disclaimers</h3>
          <ul className="list">
            <li>
              <span />
              <span>No guarantee of funding approval.</span>
            </li>
            <li>
              <span />
              <span>No medical claims.</span>
            </li>
            <li>
              <span />
              <span>No emergency guarantees.</span>
            </li>
            <li>
              <span />
              <span>No surveillance: no microphone monitoring, no GPS tracking.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default HaloPackage;
