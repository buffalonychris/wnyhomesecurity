import Seo from '../components/Seo';
import { haloContent } from '../lib/haloContent';
import { getHaloFeatureFlags } from '../lib/haloFlags';

const HaloCheckout = () => {
  const { checkout } = haloContent;
  const { enablePayments } = getHaloFeatureFlags();

  return (
    <div className="container section">
      <Seo title={checkout.seo.title} description={checkout.seo.description} />
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <section style={{ textAlign: 'center' }}>
          <p className="badge" style={{ marginBottom: '0.5rem' }}>
            {checkout.badge}
          </p>
          <h2 style={{ margin: 0 }}>{checkout.title}</h2>
          <p style={{ maxWidth: 760, margin: '0.75rem auto 0' }}>{checkout.intro}</p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>{checkout.summary.title}</h3>
          <p>{checkout.summary.body}</p>
          <p style={{ marginTop: '0.5rem' }}>
            <strong>{checkout.summary.price}</strong>
          </p>
          <p style={{ marginTop: '0.75rem' }}>{checkout.summary.note}</p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>{checkout.steps.title}</h3>
          <ul className="list">
            {checkout.steps.items.map((item) => (
              <li key={item}>
                <span />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>{checkout.cta.label}</h3>
          <p>{checkout.cta.note}</p>
          <button
            className="btn btn-secondary"
            type="button"
            disabled={!enablePayments}
            aria-disabled={!enablePayments}
          >
            {enablePayments ? 'Proceed to payment' : checkout.cta.label}
          </button>
        </section>
      </div>
    </div>
  );
};

export default HaloCheckout;
