import { wnyhsContact, buildSupportMailto, buildTel, buildSms } from '../content/wnyhsContact';

type HelpContactPanelProps = {
  quoteRef?: string;
  issuePrompt?: string;
};

const HelpContactPanel = ({ quoteRef, issuePrompt }: HelpContactPanelProps) => {
  const mailto = buildSupportMailto({ quoteRef, issue: issuePrompt });
  const smsBody = `Hi! I need help with my Home Security quote${quoteRef ? ` (Ref ${quoteRef})` : ''}.`;
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
          <a href={mailto} style={{ color: '#f5c042' }}>
            {wnyhsContact.emails.support}
          </a>
        </span>
        <span>
          Phone:{' '}
          <a href={buildTel()} style={{ color: '#f5c042' }}>
            {wnyhsContact.phone.display}
          </a>
        </span>
        <span>
          Text:{' '}
          <a href={buildSms(smsBody)} style={{ color: '#f5c042' }}>
            {wnyhsContact.phone.display}
          </a>
        </span>
        <span>Location: {wnyhsContact.location}</span>
      </div>
    </div>
  );
};

export default HelpContactPanel;
