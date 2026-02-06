import AccordionSection from './AccordionSection';
import { paymentInstallDaySections } from '../content/paymentInstallDay';

const PaymentInstallDayAccordion = () => {
  return (
    <div className="card" style={{ display: 'grid', gap: '1rem' }}>
      <div style={{ display: 'grid', gap: '0.35rem' }}>
        <div className="badge">Payment &amp; Install Day</div>
        <h3 style={{ margin: 0, color: '#fff7e6' }}>Payment &amp; Install Day</h3>
        <p style={{ margin: 0, color: '#c8c0aa' }}>
          Clear expectations for deposit timing, remaining balance, and install day logistics.
        </p>
      </div>
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        {paymentInstallDaySections.map((section, index) => (
          <AccordionSection key={section.title} title={section.title} defaultOpen={index === 0}>
            <ul className="list" style={{ marginTop: 0 }}>
              {section.items.map((item) => (
                <li key={item}>
                  <span />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AccordionSection>
        ))}
      </div>
    </div>
  );
};

export default PaymentInstallDayAccordion;
