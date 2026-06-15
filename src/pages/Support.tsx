import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { useLayoutConfig } from '../components/LayoutConfig';
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
      <section className="wnyhs-section wnyhs-contact-support-hero">
        <div className="wnyhs-section-header">
          <p className="wnyhs-eyebrow">Support</p>
          <h1 className="wnyhs-heading">WNY Home Security Support</h1>
          <p className="wnyhs-description">
            Local help for Western New York customers with cameras, alerts, smart entry, automation, access, and
            property-awareness questions.
          </p>
        </div>
        <p className="wnyhs-card-copy">
          Whether you need help with an existing system or want to ask about a practical add-on, start here. Call,
          text, email, and the support form all stay available so you can choose the path that fits the issue.
        </p>
        <div className="wnyhs-contact-support-actions">
          <a className="wnyhs-button wnyhs-button--primary" href={buildTel()}>
            Call {wnyhsContact.phone.display}
          </a>
          <a
            className="wnyhs-button wnyhs-button--secondary"
            href={buildSms('Hi! I need help with my WNY Home Security system.')}
          >
            Text {wnyhsContact.phone.display}
          </a>
        </div>
      </section>

      <section className="wnyhs-section">
        <div className="wnyhs-section-header">
          <p className="wnyhs-eyebrow">Support topics</p>
          <h2 className="wnyhs-heading">What can we help with?</h2>
        </div>
        <div className="wnyhs-contact-support-grid">
          {supportCategories.map((category) => (
            <article key={category.title} className="wnyhs-card">
              <h3 className="wnyhs-card-title">{category.title}</h3>
              <p className="wnyhs-card-copy">{category.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wnyhs-section">
        <div className="wnyhs-section-header">
          <p className="wnyhs-eyebrow">Email</p>
          <h2 className="wnyhs-heading">Email support</h2>
          <p className="wnyhs-description">
            Send a message and include your name, property address, best number, and the device or area involved.
          </p>
        </div>
        <strong>
          <a
            className="wnyhs-contact-support-link"
            href={buildSupportMailto({
              issue: 'Tell us what you need help with.',
              pageRoute: `${location.pathname}${location.search}`,
            })}
          >
            {wnyhsContact.emails.support}
          </a>
        </strong>
      </section>
      <SupportRequestForm pageRoute={`${location.pathname}${location.search}`} />
      <section className="wnyhs-section">
        <h2 className="wnyhs-heading">Phone or text</h2>
        <p>
          Call or text for existing customer questions, system concerns, or help deciding whether the form is the right
          path.
        </p>
        <div className="wnyhs-contact-support-actions">
          <a className="wnyhs-button wnyhs-button--primary" href={buildTel()}>
            Call {wnyhsContact.phone.display}
          </a>
          <a
            className="wnyhs-button wnyhs-button--secondary"
            href={buildSms('Hi! I need help with my Home Security system.')}
          >
            Text {wnyhsContact.phone.display}
          </a>
        </div>
      </section>

      <section className="wnyhs-section">
        <div className="wnyhs-section-header">
          <p className="wnyhs-eyebrow">FAQ</p>
          <h2 className="wnyhs-heading">FAQ and self-serve checks</h2>
        </div>
        <div className="wnyhs-contact-support-grid">
          {supportFaqs.map((faq) => (
            <article key={faq.question} className="wnyhs-card">
              <h3 className="wnyhs-card-title">{faq.question}</h3>
              <p className="wnyhs-card-copy">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wnyhs-section">
        <h2 className="wnyhs-heading">Follow-up expectations</h2>
        <p>
          Support requests are reviewed during normal business operations. For time-sensitive help, call or text{' '}
          {wnyhsContact.phone.display}; do not rely on the form as an immediate-service channel.
        </p>
      </section>

      <section className="wnyhs-section">
        <h2 className="wnyhs-heading">Already a customer and want to expand your system?</h2>
        <p>
          If your current setup is working and you want to add cameras, water alerts, garage awareness, smart entry,
          or automation, use the support form or request a local walkthrough.
        </p>
        <div className="wnyhs-contact-support-actions">
          <Link className="wnyhs-button wnyhs-button--secondary" to="/contact?vertical=home-security">
            Ask About an Add-On
          </Link>
        </div>
      </section>
    </>
  );

  if (isHomeSecurity) {
    return (
      <WnyhsMarketingLayout ctaLink="/discovery?vertical=home-security">
        <div className="wnyhs-shell wnyhs-contact-support-shell">{content}</div>
      </WnyhsMarketingLayout>
    );
  }

  return (
    <div className="wnyhs-page">
      <div className="container section">
        <div className="wnyhs-shell wnyhs-contact-support-shell">{content}</div>
      </div>
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
        setErrorMessage(
          payload.userMessage ||
            'We could not send your request through the form. Please call or text 716-201-0364, or email support@wnyhomesecurity.com.',
        );
        setStatus('error');
        return;
      }
      setStatus('success');
      setName('');
      setEmail('');
      setTopic('Existing customer support');
      setMessage('');
    } catch {
      setErrorMessage(
        'The form is not available right now. Please call or text 716-201-0364, or email support@wnyhomesecurity.com.',
      );
      setStatus('error');
    }
  };
  return (
    <section className="wnyhs-section wnyhs-contact-support-form-panel">
      <div className="wnyhs-section-header">
        <p className="wnyhs-eyebrow">Form</p>
        <h2 className="wnyhs-heading">Submit support request</h2>
        <p className="wnyhs-description">
          Use the form for support questions, troubleshooting details, new project questions, or add-on requests.
        </p>
      </div>
      <form className="form wnyhs-contact-support-form" onSubmit={onSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <select value={topic} onChange={(e) => setTopic(e.target.value)} required>
          {supportCategories.map((category) => (
            <option key={category.title} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what is happening, what changed recently, and the best number for follow-up."
          rows={4}
          required
        />
        <button className="wnyhs-button wnyhs-button--primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send request'}
        </button>
        {status === 'success' && <p>Support request received. Follow-up happens during normal business operations.</p>}
        {status === 'error' && (
          <p>{errorMessage || 'Please call or text 716-201-0364, or email support@wnyhomesecurity.com.'}</p>
        )}
      </form>
    </section>
  );
};

export default Support;
