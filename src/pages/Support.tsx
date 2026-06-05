import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { useLayoutConfig } from '../components/LayoutConfig';
import SectionHeader from '../components/operator/SectionHeader';
import SpaceFrame from '../components/operator/SpaceFrame';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';
import { resolveVertical } from '../lib/verticals';
import { buildSms, buildSupportMailto, buildTel, wnyhsContact } from '../content/wnyhsContact';

const supportCategories = [
  {
    title: 'Existing customer support',
    body: 'Help with an installed camera, alert, lock, doorbell, hub, app access, or system question.',
  },
  {
    title: 'System issue or troubleshooting',
    body: 'A device seems offline, alerts changed, internet or power recently changed, or something needs review.',
  },
  {
    title: 'Estimate or new project question',
    body: 'Questions about starting a WNY Home Security project or choosing the right Smart Property Solution.',
  },
  {
    title: 'Add-on or upgrade question',
    body: 'Existing customers can ask about expanding cameras, water alerts, garage awareness, smart entry, or automation.',
  },
];

const supportFaqs = [
  {
    question: 'What should I do if a camera or device seems offline?',
    answer:
      'First check power, internet, and any recently changed Wi-Fi or router settings. If the device still looks offline, send the device name, what changed, and a screenshot if you have one.',
  },
  {
    question: 'What information should I include with a support request?',
    answer:
      'Include your name, property address, best call or text number, the device or area involved, when the issue started, and whether power or internet changed recently.',
  },
  {
    question: 'What happens after I submit the form?',
    answer:
      'The request is reviewed during normal business operations. For time-sensitive help, calling or texting is the best path because the form is not an immediate-service channel.',
  },
  {
    question: 'Can I request changes or additions to an existing setup?',
    answer:
      'Yes. Existing customers can ask about adding cameras, water or leak alerts, garage coverage, smart entry, lighting, or other practical property-awareness upgrades.',
  },
  {
    question: 'What if the issue started after a WNY winter storm, outage, or internet change?',
    answer:
      'Note the timing, whether power or internet was interrupted, and what equipment appears affected. That context helps narrow down whether the issue is device, network, or power related.',
  },
];

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
        subtitle="Local help for Western New York customers with cameras, alerts, smart entry, automation, access, and property-awareness questions."
      />

      <SpaceFrame>
        <h2>Local support from people familiar with WNY homes</h2>
        <p>
          Whether you need help with an existing system or want to ask about a practical add-on, start here. Call,
          text, email, and the support form all stay available so you can choose the path that fits the issue.
        </p>
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
        <h2>What can we help with?</h2>
        <div className="wnyhs-gallery-grid">
          {supportCategories.map((category) => (
            <article key={category.title} className="card wnyhs-gallery-card wnyhs-gallery-card--compact">
              <div className="wnyhs-gallery-card-body wnyhs-gallery-card-body--compact">
                <h3 className="wnyhs-gallery-card-title--compact">{category.title}</h3>
                <p className="wnyhs-gallery-body wnyhs-gallery-body--compact">{category.body}</p>
              </div>
            </article>
          ))}
        </div>
      </SpaceFrame>

      <SpaceFrame>
        <h2>Email support</h2>
        <p>Send a message and include your name, property address, best number, and the device or area involved.</p>
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
        <p>Call or text for existing customer questions, system concerns, or help deciding whether the form is the right path.</p>
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
        <h2>FAQ and self-serve checks</h2>
        <div className="space-grid">
          {supportFaqs.map((faq) => (
            <article key={faq.question} className="card">
              <h3 className="wnyhs-gallery-card-title--compact">{faq.question}</h3>
              <p className="wnyhs-gallery-body">{faq.answer}</p>
            </article>
          ))}
        </div>
      </SpaceFrame>

      <SpaceFrame>
        <h2>Follow-up expectations</h2>
        <p>
          Support requests are reviewed during normal business operations. For time-sensitive help, call or text{' '}
          {wnyhsContact.phone.display}; do not rely on the form as an immediate-service channel.
        </p>
      </SpaceFrame>

      <SpaceFrame>
        <h2>Already a customer and want to expand your system?</h2>
        <p>
          If your current setup is working and you want to add cameras, water alerts, garage awareness, smart entry,
          or automation, use the support form or request a local walkthrough.
        </p>
        <div className="wnyhs-gallery-actions">
          <Link className="btn btn-secondary" to="/contact?vertical=home-security">
            Ask About an Add-On
          </Link>
        </div>
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
  const [topic, setTopic] = useState('Existing customer support');
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
      setTopic('Existing customer support');
      setMessage('');
    } catch {
      setErrorMessage('The form is not available right now. Please call or text 716-201-0364, or email support@wnyhomesecurity.com.');
      setStatus('error');
    }
  };
  return (
    <SpaceFrame>
      <h2>Submit support request</h2>
      <p>Use the form for support questions, troubleshooting details, new project questions, or add-on requests.</p>
      <form className="form" onSubmit={onSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <select value={topic} onChange={(e) => setTopic(e.target.value)} required>
          {supportCategories.map((category) => (
            <option key={category.title} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us what is happening, what changed recently, and the best number for follow-up." rows={4} required />
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send request'}
        </button>
        {status === 'success' && <p>Support request received. Follow-up happens during normal business operations.</p>}
        {status === 'error' && <p>{errorMessage || 'Please call or text 716-201-0364, or email support@wnyhomesecurity.com.'}</p>}
      </form>
    </SpaceFrame>
  );
};

export default Support;
