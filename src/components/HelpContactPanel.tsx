import { supportContact } from '../content/paymentInstallDay';

const HelpContactPanel = () => {
  return (
    <div
      className="card"
      style={{
        display: 'grid',
        gap: '0.5rem',
        border: '1px solid rgba(56, 189, 248, 0.35)',
      }}
    >
      <div className="badge">Need help?</div>
      <strong style={{ color: '#fff7e6' }}>Talk to a coordinator</strong>
      <div style={{ display: 'grid', gap: '0.35rem', color: '#c8c0aa' }}>
        <span>
          Email:{' '}
          <a href={`mailto:${supportContact.email}`} style={{ color: '#f5c042' }}>
            {supportContact.email}
          </a>
        </span>
        <span>
          Phone:{' '}
          <a href={`tel:${supportContact.phone}`} style={{ color: '#f5c042' }}>
            {supportContact.phone}
          </a>
        </span>
        <span>Location: {supportContact.location}</span>
      </div>
    </div>
  );
};

export default HelpContactPanel;
