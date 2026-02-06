import { useEffect, useState } from 'react';
import { copyToClipboard } from '../lib/displayUtils';
import { isValidEmail } from '../lib/emailPayload';
import { EmailSendResponse } from '../lib/emailSend';

type SaveProgressCardProps = {
  defaultEmail?: string;
  resumeUrl?: string;
  available: boolean;
  sending?: boolean;
  // eslint-disable-next-line no-unused-vars
  onEmailChange?: (value: string) => void;
  // eslint-disable-next-line no-unused-vars
  onSend: (recipient: string) => Promise<EmailSendResponse | null>;
};

type Status = 'idle' | 'sent' | 'error';

const SaveProgressCard = ({
  defaultEmail,
  resumeUrl,
  available,
  sending,
  onEmailChange,
  onSend,
}: SaveProgressCardProps) => {
  const [recipient, setRecipient] = useState(defaultEmail ?? '');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle');
  const [localSending, setLocalSending] = useState(false);

  useEffect(() => {
    setRecipient(defaultEmail ?? '');
  }, [defaultEmail]);

  const handleCopy = async () => {
    if (!resumeUrl) return;
    await copyToClipboard(resumeUrl);
    setCopyState('copied');
    setTimeout(() => setCopyState('idle'), 2000);
  };

  const handleRecipientChange = (value: string) => {
    setRecipient(value);
    onEmailChange?.(value);
    setStatus('idle');
    setError('');
  };

  const handleSend = async () => {
    if (!isValidEmail(recipient) || !available || localSending) return;
    setLocalSending(true);
    setStatus('idle');
    setError('');
    const response = await onSend(recipient);
    setLocalSending(false);
    if (response?.ok) {
      setStatus('sent');
    } else {
      setStatus('error');
      setError(response?.error || '');
    }
  };

  const isBusy = Boolean(sending) || localSending;
  const valid = isValidEmail(recipient);

  return (
    <div className="card" style={{ display: 'grid', gap: '0.65rem', border: '1px solid rgba(245, 192, 66, 0.35)' }}>
      <div>
        <div className="badge">Save your progress</div>
        <h3 style={{ margin: '0.25rem 0', color: '#fff7e6' }}>Want to save this and come back later?</h3>
        <p style={{ margin: 0, color: '#c8c0aa' }}>
          Enter an email address and we&apos;ll send your official links.
        </p>
      </div>

      <label style={{ display: 'grid', gap: '0.35rem', maxWidth: '520px' }}>
        <span>Email address</span>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <input
            value={recipient}
            onChange={(e) => handleRecipientChange(e.target.value)}
            placeholder="name@example.com"
            style={{
              flex: 1,
              minWidth: '240px',
              padding: '0.75rem',
              borderRadius: '10px',
              border: '1px solid rgba(245,192,66,0.35)',
              background: '#0f0e0d',
              color: '#fff7e6',
            }}
          />
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleSend}
            disabled={!valid || isBusy || !available}
          >
            {isBusy ? 'Sending…' : 'Send'}
          </button>
        </div>
        {!valid && recipient && <small style={{ color: '#f0b267' }}>Enter a valid email.</small>}
        {!available && <small style={{ color: '#f0b267' }}>Generate the document to enable saving.</small>}
      </label>

      {status === 'sent' && <strong style={{ color: '#c8c0aa' }}>Sent. Check your inbox.</strong>}
      {status === 'error' && (
        <div style={{ display: 'grid', gap: '0.25rem' }}>
          <strong style={{ color: '#f0b267' }}>We couldn&apos;t send it. Please try again.</strong>
          {error && <small style={{ color: '#c8c0aa' }}>{error}</small>}
        </div>
      )}

      {resumeUrl && (
        <div style={{ display: 'grid', gap: '0.35rem' }}>
          <strong>Resume link (copyable fallback)</strong>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href={resumeUrl} style={{ fontWeight: 800 }}>
              Resume your order
            </a>
            <button type="button" className="btn btn-secondary" onClick={handleCopy}>
              {copyState === 'copied' ? 'Copied' : 'Copy link'}
            </button>
          </div>
          <small className="break-all" style={{ color: '#c8c0aa' }}>
            {resumeUrl}
          </small>
        </div>
      )}
    </div>
  );
};

export default SaveProgressCard;
