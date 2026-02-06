import Seo from '../components/Seo';
import VendorJourneyNav from '../components/VendorJourneyNav';
import { brandSite } from '../lib/brand';

const VendorStandards = () => {
  return (
    <div className="container section">
      <Seo
        title={`Standards & Alignment | ${brandSite}`}
        description={`Platform alignment standards for vendors considering the ${brandSite} evaluation path.`}
      />
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <section style={{ textAlign: 'center' }}>
          <p className="badge" style={{ marginBottom: '0.5rem' }}>
            Vendor standards
          </p>
          <h2 style={{ margin: 0 }}>Standards &amp; Alignment</h2>
          <p style={{ maxWidth: 760, margin: '0.75rem auto 0' }}>
            This page defines the alignment doctrine for hardware and technology vendors. It is a clear,
            standards-driven gateway before any evaluation begins.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>1) What this is</h3>
          <p>
            A platform alignment gateway. We use it to confirm fit before committing to any evaluation time or
            hardware shipment.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>2) What this is NOT</h3>
          <ul className="list">
            <li>
              <span />
              <span>Not a reseller program.</span>
            </li>
            <li>
              <span />
              <span>Not a marketplace listing.</span>
            </li>
            <li>
              <span />
              <span>Not co-marketing or joint branding.</span>
            </li>
            <li>
              <span />
              <span>Not a cloud integration request channel.</span>
            </li>
          </ul>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>3) Offline-first doctrine</h3>
          <p>
            Core operation must remain functional without internet access. Optional cloud services may exist
            but cannot be required for everyday use.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>4) Control doctrine</h3>
          <p>
            Local control is required. No mandatory cloud, no required subscriptions, and no hidden dependencies
            for essential functions.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>5) Brand authority &amp; packaging/software rules</h3>
          <p>
            {brandSite} retains brand authority in customer UX and packaging. Vendor apps, dashboards,
            or logos are not exposed to end users.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>6) Ethical posture</h3>
          <p>
            Privacy and dignity are non-negotiable. No audio monitoring, no video monitoring, and no GPS required
            for core operation. Behavior must be deterministic and explainable.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>7) Evaluation discipline</h3>
          <ul className="list">
            <li>
              <span />
              <span>Binary gate to start evaluation.</span>
            </li>
            <li>
              <span />
              <span>1–2 units for initial testing.</span>
            </li>
            <li>
              <span />
              <span>14–21 day evaluation window.</span>
            </li>
            <li>
              <span />
              <span>Objective scoring only.</span>
            </li>
            <li>
              <span />
              <span>Formal sign-off at the end.</span>
            </li>
          </ul>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>8) Recognition model</h3>
          <p>
            Recognition is B2B-only and internal to procurement. “Verified Hardware Partner” status is an
            internal designation and is not a consumer-facing endorsement.
          </p>
        </section>

        <VendorJourneyNav />
      </div>
    </div>
  );
};

export default VendorStandards;
