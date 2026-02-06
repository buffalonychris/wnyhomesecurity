import { faqs } from '../content/faq';
import { brandSite } from '../lib/brand';

const FAQ = () => {
  return (
    <div className="container section">
      <h2 style={{ marginTop: 0 }}>Frequently asked</h2>
      <p style={{ maxWidth: 680 }}>
        Straight answers about how {brandSite} packages work. If you need more detail, reach
        out through the contact form.
      </p>
      <div className="card-grid">
        {faqs.map((faq) => (
          <div key={faq.question} className="card">
            <h3 style={{ marginTop: 0, color: '#fff7e6' }}>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
