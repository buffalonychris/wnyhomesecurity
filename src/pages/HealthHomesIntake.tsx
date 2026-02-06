import { FormEvent, useMemo, useState } from 'react';
import AccordionSection from '../components/AccordionSection';

type PopulationOption = {
  id: string;
  label: string;
};

const populationOptions: PopulationOption[] = [
  { id: 'seniors-alone', label: 'Seniors living alone' },
  { id: 'high-fall', label: 'High fall risk' },
  { id: 'frequent-ems', label: 'Frequent EMS use' },
  { id: 'caregiver-limited', label: 'Caregiver-limited' },
  { id: 'other', label: 'Other' },
];

const HealthHomesIntake = () => {
  const [organization, setOrganization] = useState('');
  const [region, setRegion] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [population, setPopulation] = useState<string[]>([]);
  const [memberRange, setMemberRange] = useState('');
  const [fundingPath, setFundingPath] = useState('');
  const [startWindow, setStartWindow] = useState('');
  const [notes, setNotes] = useState('');
  const [submittedSummary, setSubmittedSummary] = useState('');
  const [copied, setCopied] = useState(false);
  const [packetCopied, setPacketCopied] = useState(false);
  const [shareEmail, setShareEmail] = useState('');

  const handlePopulationChange = (id: string) => {
    setPopulation((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const summary = useMemo(
    () =>
      [
        `Organization: ${organization || '—'}`,
        `County/Region: ${region || '—'}`,
        `Contact: ${contactName || '—'} (${email || 'no email provided'}, ${phone || 'no phone provided'})`,
        `Intended population: ${population.length ? population.join(', ') : '—'}`,
        `Estimated member count: ${memberRange || '—'}`,
        `Preferred funding path: ${fundingPath || '—'}`,
        `Desired start window: ${startWindow || '—'}`,
        `Notes: ${notes || '—'}`,
      ].join('\n'),
    [organization, region, contactName, email, phone, population, memberRange, fundingPath, startWindow, notes],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedSummary(summary);
    setCopied(false);
    setPacketCopied(false);
  };

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setSubmittedSummary(summary);
    } catch (error) {
      setCopied(false);
    }
  };

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent('Health Home pilot intake request');
    const body = encodeURIComponent(summary);
    return `mailto:hello@kickasseldercare.com?subject=${subject}&body=${body}`;
  }, [summary]);

  const packetUrl = useMemo(() => `${window.location.origin}/health-homes/packet`, []);

  const packetMailtoLink = useMemo(() => {
    const recipient = encodeURIComponent(shareEmail.trim());
    const subject = encodeURIComponent('KAEC Health Home Executive Justification Packet');
    const mailBody = [
      `Packet URL: ${packetUrl}`,
      '',
      'Intake summary:',
      submittedSummary || summary,
      '',
      'For payer/MCO/internal review',
    ].join('\n');

    return `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(mailBody)}`;
  }, [packetUrl, shareEmail, submittedSummary, summary]);

  const copyPacketLink = async () => {
    try {
      await navigator.clipboard.writeText(packetUrl);
      setPacketCopied(true);
    } catch (error) {
      setPacketCopied(false);
    }
  };

  const openPacketAndPrint = () => {
    const packetWindow = window.open(packetUrl, '_blank', 'noopener,noreferrer');

    if (packetWindow) {
      packetWindow.focus();
      packetWindow.onload = () => packetWindow.print();
      setTimeout(() => packetWindow.print(), 600);
    } else {
      window.location.href = packetUrl;
      setTimeout(() => window.print(), 600);
    }
  };

  return (
    <div className="container section" style={{ display: 'grid', gap: '1.25rem' }}>
      <div>
        <p className="badge">Start a pilot</p>
        <h1 style={{ margin: 0 }}>Health Home pilot intake</h1>
        <p style={{ maxWidth: 760, color: '#e6ddc7' }}>
          Retail-safe intake to scope a deterministic pilot. No backend storage here; information is for
          coordination only. Emergencies are always directed to 911.
        </p>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.75rem' }}>
          <div className="grid grid-2" style={{ gap: '0.75rem' }}>
            <label className="form-field">
              <span>Organization name</span>
              <input value={organization} onChange={(event) => setOrganization(event.target.value)} required />
            </label>
            <label className="form-field">
              <span>County / Region</span>
              <input value={region} onChange={(event) => setRegion(event.target.value)} required />
            </label>
          </div>
          <div className="grid grid-3" style={{ gap: '0.75rem' }}>
            <label className="form-field">
              <span>Contact name</span>
              <input value={contactName} onChange={(event) => setContactName(event.target.value)} required />
            </label>
            <label className="form-field">
              <span>Contact email</span>
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </label>
            <label className="form-field">
              <span>Contact phone</span>
              <input value={phone} onChange={(event) => setPhone(event.target.value)} required />
            </label>
          </div>

          <AccordionSection title="Intended population" description="Select all that apply" defaultOpen>
            <div className="grid grid-3" style={{ gap: '0.5rem' }}>
              {populationOptions.map((option) => (
                <label key={option.id} className="form-field" style={{ gap: '0.35rem', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={population.includes(option.id)}
                    onChange={() => handlePopulationChange(option.id)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </AccordionSection>

          <div className="grid grid-3" style={{ gap: '0.75rem' }}>
            <label className="form-field">
              <span>Estimated member count</span>
              <select value={memberRange} onChange={(event) => setMemberRange(event.target.value)} required>
                <option value="">Select range</option>
                <option value="10-25">10–25</option>
                <option value="25-50">25–50</option>
                <option value="50-100">50–100</option>
                <option value="100+">100+</option>
              </select>
            </label>
            <label className="form-field">
              <span>Preferred funding path</span>
              <select value={fundingPath} onChange={(event) => setFundingPath(event.target.value)} required>
                <option value="">Select funding path</option>
                <option value="mco">MCO vendor</option>
                <option value="waiver">Waiver program</option>
                <option value="grant">Grant / pilot</option>
                <option value="unsure">Unsure</option>
              </select>
            </label>
            <label className="form-field">
              <span>Desired start window</span>
              <select value={startWindow} onChange={(event) => setStartWindow(event.target.value)} required>
                <option value="">Select window</option>
                <option value="30-60">Next 30–60 days</option>
                <option value="60-90">Next 60–90 days</option>
                <option value="90-120">Next 90–120 days</option>
                <option value="later">Later / to be scheduled</option>
              </select>
            </label>
          </div>

          <label className="form-field">
            <span>Notes (site constraints, priorities, or existing vendors)</span>
            <textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={4} />
          </label>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button type="submit" className="btn btn-primary">
              Submit intake (retail-safe)
            </button>
            <button type="button" className="btn btn-secondary" onClick={copySummary}>
              Copy summary
            </button>
            <a className="btn" href={mailtoLink}>
              Mailto fallback
            </a>
            {copied && <small style={{ color: '#c8c0aa' }}>Summary copied.</small>}
          </div>
        </form>
      </div>

      {submittedSummary && (
        <div className="card" style={{ display: 'grid', gap: '0.5rem' }}>
          <strong style={{ color: '#fff7e6' }}>Request received</strong>
          <p style={{ margin: 0, color: '#e6ddc7' }}>
            This confirmation is client-side only. We will follow up using the provided contact details.
          </p>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', background: 'rgba(0,0,0,0.35)', padding: '0.75rem', borderRadius: 12 }}>
            {submittedSummary}
          </pre>

          <div style={{ marginTop: '0.5rem', display: 'grid', gap: '0.75rem' }}>
            <div>
              <strong style={{ color: '#fff7e6' }}>Next: Share the Executive Packet</strong>
              <p style={{ margin: '0.25rem 0 0', color: '#e6ddc7' }}>
                Open, print, and share the justification packet with payer or internal stakeholders.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <button type="button" className="btn btn-primary" onClick={openPacketAndPrint}>
                Print / Save Executive Packet
              </button>
              <a className="btn btn-secondary" href={packetUrl} target="_blank" rel="noreferrer">
                Open Executive Packet
              </a>
              <button type="button" className="btn btn-secondary" onClick={copyPacketLink}>
                Copy Packet Link
              </button>
              {packetCopied && <small style={{ alignSelf: 'center', color: '#c8c0aa' }}>Packet link copied.</small>}
            </div>

            <div className="card" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(245,192,66,0.2)', display: 'grid', gap: '0.5rem' }}>
              <label className="form-field" style={{ margin: 0 }}>
                <span>Email packet link to:</span>
                <input
                  type="email"
                  value={shareEmail}
                  onChange={(event) => setShareEmail(event.target.value)}
                  placeholder="payer@example.com"
                  style={{ maxWidth: 360 }}
                />
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => shareEmail.trim() && (window.location.href = packetMailtoLink)}
                  disabled={!shareEmail.trim()}
                >
                  Open Email Draft
                </button>
                <small style={{ color: '#c8c0aa' }}>
                  Subject and body pre-filled with packet link and intake summary (mailto fallback).
                </small>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthHomesIntake;
