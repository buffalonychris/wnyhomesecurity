import { faqs } from '../content/faq';
import { brandSite } from '../lib/brand';

const FAQ = () => {
  return (
    <main className="wnyhs-page">
      <div className="wnyhs-shell wnyhs-marketing-stack wnyhs-info-page">
        <section className="wnyhs-section">
          <div className="wnyhs-section-header">
            <h2 className="wnyhs-heading">Frequently asked</h2>
            <p className="wnyhs-description">
              Straight answers about how {brandSite} packages work. If you need more detail, reach
              out through the contact form.
            </p>
          </div>
        </section>
        <section className="wnyhs-info-grid" aria-label="Frequently asked questions">
          {faqs.map((faq) => (
            <article key={faq.question} className="wnyhs-card">
              <h3 className="wnyhs-card-title">{faq.question}</h3>
              <p className="wnyhs-card-copy">{faq.answer}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default FAQ;
