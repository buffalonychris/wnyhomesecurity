import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import VendorJourneyNav from '../components/VendorJourneyNav';
import { brandSite } from '../lib/brand';

const VendorApply = () => {
  return (
    <div className="container section">
      <Seo
        title={`Vendor Applications Closed | ${brandSite}`}
        description="Vendor applications are not open. Review standards and alignment expectations before requesting evaluation access."
      />
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <section style={{ textAlign: 'center' }}>
          <p className="badge" style={{ marginBottom: '0.5rem' }}>
            Status: closed
          </p>
          <h2 style={{ margin: 0 }}>Vendor applications are not open</h2>
          <p style={{ maxWidth: 760, margin: '0.75rem auto 0' }}>
            {brandSite} is not accepting vendor applications at this time. This remains a selective,
            standards-led alignment path.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Review standards &amp; alignment</h3>
          <p>
            If you intend to align in the future, review the standards and evaluation overview to understand
            the requirements and posture.
          </p>
          <ul className="list">
            <li>
              <span />
              <span>
                <Link to="/vendors/standards">Standards &amp; alignment overview</Link>
              </span>
            </li>
            <li>
              <span />
              <span>
                <Link to="/vendors/evaluation-toolkit">Evaluation toolkit (informational)</Link>
              </span>
            </li>
          </ul>
        </section>

        <VendorJourneyNav />
      </div>
    </div>
  );
};

export default VendorApply;
