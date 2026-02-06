import { FormEvent, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLayoutConfig } from '../components/LayoutConfig';
import { brandSite } from '../lib/brand';
import { resolveVertical } from '../lib/verticals';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const vertical = resolveVertical(searchParams.get('vertical'));
  const isHomeSecurity = vertical === 'home-security';

  useLayoutConfig({
    layoutVariant: isHomeSecurity ? 'funnel' : 'sitewide',
    showBreadcrumbs: isHomeSecurity,
    breadcrumb: isHomeSecurity
      ? [
          { label: 'Home Security', href: '/home-security' },
          { label: 'Request install' },
        ]
      : [],
  });

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [bestTime, setBestTime] = useState('');
  const [needs, setNeeds] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const summary = useMemo(
    () =>
      [
        `Name: ${name || '—'}`,
        `Phone: ${phone || '—'}`,
        `Email: ${email || '—'}`,
        `Address / ZIP: ${address || '—'}`,
        `Best time to contact: ${bestTime || '—'}`,
        `Needs: ${needs || '—'}`,
        `Notes: ${notes || '—'}`,
      ].join('\n'),
    [address, bestTime, email, name, needs, notes, phone],
  );

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent('Home Security intake request');
    const body = encodeURIComponent(summary);
    return `mailto:admin@reliableeldercare.com?subject=${subject}&body=${body}`;
  }, [summary]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.location.href = mailtoLink;
  };

  return (
    <div className="container section">
      <h2 style={{ marginTop: 0 }}>Talk with {brandSite}</h2>
      <p style={{ maxWidth: 640 }}>
        Start the intake so we can route you to the right next step. We respond with a simple, one-time quote—no subscriptions.
      </p>
      <form className="form" aria-label="Intake form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" value={name} onChange={(event) => setName(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="(555) 555-1212" value={phone} onChange={(event) => setPhone(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="address">Address / ZIP</label>
          <input id="address" name="address" type="text" placeholder="Street address, city, ZIP" value={address} onChange={(event) => setAddress(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="bestTime">Best time to contact</label>
          <input id="bestTime" name="bestTime" type="text" placeholder="Weekdays after 4pm" value={bestTime} onChange={(event) => setBestTime(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="needs">Needs</label>
          <select id="needs" name="needs" value={needs} onChange={(event) => setNeeds(event.target.value)} required>
            <option value="">Select need</option>
            <option value="new-install">New install</option>
            <option value="upgrade">Upgrade existing system</option>
            <option value="monitoring-optional">Optional monitoring evaluation</option>
            <option value="automation-add-ons">Automation add-ons</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Notes</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about entry points, rooms, or special needs."
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <button className="btn btn-primary" type="submit">Submit intake</button>
          <a className="btn btn-secondary" href={mailtoLink}>Email intake summary</a>
          {submitted && <small style={{ color: 'var(--kaec-text-muted)' }}>Opening your email client to route this intake to admin@reliableeldercare.com.</small>}
        </div>
      </form>
    </div>
  );
};

export default Contact;
