import { useLocation, useSearchParams } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { useLayoutConfig } from '../components/LayoutConfig';
import SectionHeader from '../components/operator/SectionHeader';
import SpaceFrame from '../components/operator/SpaceFrame';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';
import { resolveVertical } from '../lib/verticals';
import { buildSms, buildSupportMailto, buildTel, wnyhsContact } from '../content/wnyhsContact';

const Support = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const vertical = resolveVertical(searchParams.get('vertical'));
  const isHomeSecurityHost = typeof window !== 'undefined' && window.location.hostname.includes('wnyhomesecurity.com');
  const isHomeSecurity = vertical === 'home-security' || isHomeSecurityHost;

  useLayoutConfig({
    layoutVariant: isHomeSecurity ? 'funnel' : 'sitewide',
    showBreadcrumbs: false,
    breadcrumb: [],
  });

  const content = (
    <>
      <SectionHeader
        kicker="Support"
        title="WNY Home Security Support"
        subtitle="Call, text, email, or send a support request for your camera, video doorbell, smart lock, or security system."
      />

      <SpaceFrame>
        <h2>Fastest way to reach us</h2>
        <p>For existing customers and estimate questions, call or text the WNY Home Security team.</p>
        <p style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a href={buildTel()} style={{ color: 'var(--color-accent)' }}>
            Call {wnyhsContact.phone.display}
          </a>
          <a href={buildSms('Hi! I need help with my WNY Home Security system.')} style={{ color: 'var(--color-accent)' }}>
            Text {wnyhsContact.phone.display}
          </a>
        </p>
      </SpaceFrame>

      <SpaceFrame>
        <h2>Email</h2>
        <p>Send us a message and include your name, address, and the best number to reach you.</p>
        <p>
          <strong>
            <a
              href={buildSupportMailto({
                issue: 'Tell us what you need help with.',
                pageRoute: `${location.pathname}${location.search}`,
              })}
              style={{ color: 'var(--color-accent)' }}
            >
              {wnyhsContact.emails.support}
            </a>
          </strong>
        </p>
      </SpaceFrame>
      <SupportRequestForm pageRoute={`${location.pathname}${location.search}`} />
      <SpaceFrame>
        <h2>Phone or text</h2>
        <p>Call or text the WNY Home Security team for support.</p>
        <p style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a href={buildTel()} style={{ color: 'var(--color-accent)' }}>
            Call {wnyhsContact.phone.display}
          </a>
          <a href={buildSms('Hi! I need help with my Home Security system.')} style={{ color: 'var(--color-accent)' }}>
            Text {wnyhsContact.phone.display}
          </a>
        </p>
      </SpaceFrame>

      <SpaceFrame>
        <h2>Response expectations</h2>
        <p>We reply within 1-2 business days. For time-sensitive help, call or text {wnyhsContact.phone.display}.</p>
      </SpaceFrame>
    </>
  );

  if (isHomeSecurity) {
    return (
      <WnyhsMarketingLayout ctaLink="/discovery?vertical=home-security">
        <div className="space-shell">
          <div className="section space-grid">{content}</div>
        </div>
      </WnyhsMarketingLayout>
    );
  }

  return (
    <div className="space-shell">
      <div className="container section space-grid">{content}</div>
    </div>
  );
};

const SupportRequestForm = ({ pageRoute }: { pageRoute: string }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('General support question');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    try {
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, topic, message, pageRoute }),
      });
      if (!response.ok) {
        const payload = (await response.json().catch(() => ({}))) as { userMessage?: string };
        setErrorMessage(payload.userMessage || 'We could not send your request through the form. Please call or text 716-201-0364, or email support@wnyhomesecurity.com.');
        setStatus('error');
        return;
      }
      setStatus('success');
      setName('');
      setEmail('');
      setTopic('General support question');
      setMessage('');
    } catch {
      setErrorMessage('The form is not available right now. Please call or text 716-201-0364, or email support@wnyhomesecurity.com.');
      setStatus('error');
    }
  };
  return <SpaceFrame><h2>Submit support request</h2><form className="form" onSubmit={onSubmit}><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required /><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /><input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="What do you need help with?" required /><textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" rows={4} required /><button className="btn btn-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send request'}</button>{status === 'success' && <p>Support request received. We will follow up during normal business operations.</p>}{status === 'error' && <p>{errorMessage || 'Please call or text 716-201-0364, or email support@wnyhomesecurity.com.'}</p>}</form></SpaceFrame>;
};

export default Support;
