import { useLocation, useSearchParams } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { useLayoutConfig } from '../components/LayoutConfig';
import SectionHeader from '../components/operator/SectionHeader';
import SpaceFrame from '../components/operator/SpaceFrame';
import OwnershipOfflineGuarantee from '../components/OwnershipOfflineGuarantee';
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
        title="FAQ & Support"
        subtitle="Quick answers, plus a direct way to reach the team."
      />

      <OwnershipOfflineGuarantee
        variant="frame"
        title="Ownership & Offline Guarantee"
        intro="These rules apply across Home Security, Home Automation, and Elder Tech — you stay in control, and the system keeps working locally."
        items={[
          'You own the equipment, automations, and your data.',
          'We don’t sell monthly subscriptions. Optional third-party services are between you and them.',
          'Key features keep working on your home network even if the internet goes out.',
          'Remote access is optional and requires internet.',
          'Home Assistant is the main dashboard across our installs.',
        ]}
      />

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
              style={{ color: '#f5c042' }}
            >
              {wnyhsContact.emails.support}
            </a>
          </strong>
        </p>
      </SpaceFrame>
      <SupportRequestForm pageRoute={`${location.pathname}${location.search}`} />
      <SpaceFrame>
        <h2>Phone or text</h2>
        <p>Call or text the WNY Home Security team for urgent support.</p>
        <p style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a href={buildTel()} style={{ color: '#f5c042' }}>
            Call {wnyhsContact.phone.display}
          </a>
          <a href={buildSms('Hi! I need help with my Home Security system.')} style={{ color: '#f5c042' }}>
            Text {wnyhsContact.phone.display}
          </a>
        </p>
      </SpaceFrame>

      <SpaceFrame>
        <h2>Response expectations</h2>
        <p>
          We reply within 1–2 business days. If it’s urgent, put URGENT in the subject line and tell us your best
          callback window.
        </p>
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
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    const response = await fetch('/api/support', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, topic, message, pageRoute }) });
    setStatus(response.ok ? 'success' : 'error');
  };
  return <SpaceFrame><h2>Submit support request</h2><form className="form" onSubmit={onSubmit}><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required /><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /><input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Topic" required /><textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" rows={4} required /><button className="btn btn-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send request'}</button>{status === 'success' && <p>Request received. We will follow up.</p>}{status === 'error' && <p>We could not send your request. Please try again.</p>}</form></SpaceFrame>;
};

export default Support;
