import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import { NavLink } from 'react-router-dom';

type QuoteFormState = {
  name: string;
  phone: string;
  email: string;
  address: string;
  preferredTimes: string;
  notes: string;
};

type QuoteFormErrors = Partial<Record<keyof QuoteFormState, string>>;

const storageKey = 'newsite-contact-submissions';

const saveSubmission = (payload: Record<string, string>) => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const existingRaw = window.localStorage.getItem(storageKey);
    const existing = existingRaw ? JSON.parse(existingRaw) : [];
    const next = Array.isArray(existing) ? existing : [];
    next.push(payload);
    window.localStorage.setItem(storageKey, JSON.stringify(next));
  } catch {
    // Ignore storage errors in private browsing or restricted environments.
  }
};

const buildMailto = (subject: string, body: string) => {
  const params = new URLSearchParams({ subject, body });
  return `mailto:admin@reliableeldercare.com?${params.toString()}`;
};

const NewSiteOnSiteQuote = () => {
  const [formState, setFormState] = useState<QuoteFormState>({
    name: '',
    phone: '',
    email: '',
    address: '',
    preferredTimes: '',
    notes: '',
  });
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const body = [
      'NewSite On-Site Quote Request',
      '',
      `Name: ${formState.name || 'N/A'}`,
      `Phone: ${formState.phone || 'N/A'}`,
      `Email: ${formState.email || 'N/A'}`,
      `Address: ${formState.address || 'N/A'}`,
      `Preferred days/times: ${formState.preferredTimes || 'N/A'}`,
      `Notes: ${formState.notes || 'N/A'}`,
    ].join('\n');
    return buildMailto('NewSite On-Site Quote Request', body);
  }, [formState]);

  const handleChange = (field: keyof QuoteFormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const validate = () => {
    const nextErrors: QuoteFormErrors = {};
    if (!formState.name.trim()) {
      nextErrors.name = 'Please share your name.';
    }
    if (!formState.phone.trim()) {
      nextErrors.phone = 'Please provide a phone number.';
    }
    if (!formState.address.trim()) {
      nextErrors.address = 'Please share the address for the visit.';
    }
    if (!formState.preferredTimes.trim()) {
      nextErrors.preferredTimes = 'Let us know the best days or times for you.';
    }
    if (formState.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      nextErrors.email = 'Please enter a valid email or leave it blank.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    saveSubmission({
      type: 'on-site-quote',
      submittedAt: new Date().toISOString(),
      name: formState.name.trim(),
      phone: formState.phone.trim(),
      email: formState.email.trim(),
      address: formState.address.trim(),
      preferredTimes: formState.preferredTimes.trim(),
      notes: formState.notes.trim(),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="newsite-container">
        <section className="newsite-hero">
          <div>
            <span className="newsite-badge">We received it</span>
            <h1>Your on-site quote request is in motion</h1>
            <p>We will confirm timing and outline the next steps for your visit.</p>
            <p>If you’d rather not decide alone, we can walk you through it.</p>
            <div className="newsite-cta-row">
              <a className="newsite-btn" href={mailtoHref}>
                Send details via email
              </a>
              <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/contact">
                Back to contact hub
              </NavLink>
              <a className="newsite-btn newsite-btn-secondary" href="tel:17163912405">
                Call now
              </a>
            </div>
          </div>
          <div className="newsite-surface">
            <h2>Your request summary</h2>
            <div className="newsite-summary">
              <div>
                <strong>Name:</strong> {formState.name}
              </div>
              <div>
                <strong>Phone:</strong> {formState.phone}
              </div>
              <div>
                <strong>Email:</strong> {formState.email || 'Not provided'}
              </div>
              <div>
                <strong>Address:</strong> {formState.address}
              </div>
              <div>
                <strong>Preferred days/times:</strong> {formState.preferredTimes}
              </div>
              <div>
                <strong>Notes:</strong> {formState.notes || 'None'}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="newsite-container">
      <section className="newsite-hero">
        <div>
          <span className="newsite-badge">Request an on-site quote</span>
          <h1>Invite us to map your home</h1>
          <p>
            We will confirm the visit, walk through coverage goals, and recommend the packages that align with your
            priorities.
          </p>
          <p>If you’d rather not decide alone, we can walk you through it.</p>
        </div>
        <div className="newsite-card">
          <strong>What we cover onsite</strong>
          <p>Expect a curated walkthrough, recommendations, and clear next steps.</p>
          <ul className="newsite-list">
            <li>Room-by-room coverage map.</li>
            <li>Package and add-on guidance.</li>
            <li>Timeline and install readiness.</li>
          </ul>
        </div>
      </section>

      <section className="newsite-section">
        <form className="newsite-form" onSubmit={handleSubmit} noValidate>
          <div className="newsite-form-grid">
            <label className="newsite-field">
              <span>Name *</span>
              <input
                className="newsite-input"
                type="text"
                value={formState.name}
                onChange={handleChange('name')}
                autoComplete="name"
                required
              />
              {errors.name && <span className="newsite-form-error">{errors.name}</span>}
            </label>
            <label className="newsite-field">
              <span>Phone *</span>
              <input
                className="newsite-input"
                type="tel"
                value={formState.phone}
                onChange={handleChange('phone')}
                autoComplete="tel"
                required
              />
              {errors.phone && <span className="newsite-form-error">{errors.phone}</span>}
            </label>
            <label className="newsite-field">
              <span>Email (optional)</span>
              <input
                className="newsite-input"
                type="email"
                value={formState.email}
                onChange={handleChange('email')}
                autoComplete="email"
              />
              {errors.email && <span className="newsite-form-error">{errors.email}</span>}
            </label>
            <label className="newsite-field">
              <span>Address *</span>
              <input
                className="newsite-input"
                type="text"
                value={formState.address}
                onChange={handleChange('address')}
                autoComplete="street-address"
                required
              />
              {errors.address && <span className="newsite-form-error">{errors.address}</span>}
            </label>
          </div>
          <label className="newsite-field">
            <span>Preferred days/times *</span>
            <input
              className="newsite-input"
              type="text"
              value={formState.preferredTimes}
              onChange={handleChange('preferredTimes')}
              placeholder="Weekdays mornings, weekends after 2 pm"
              required
            />
            {errors.preferredTimes && <span className="newsite-form-error">{errors.preferredTimes}</span>}
          </label>
          <label className="newsite-field">
            <span>Notes</span>
            <textarea
              className="newsite-textarea"
              value={formState.notes}
              onChange={handleChange('notes')}
              placeholder="Share access details, pets, or priorities."
            />
          </label>
          <p className="newsite-helper">
            Prefer email? A mailto fallback is ready on the confirmation screen.
          </p>
          <div className="newsite-form-actions">
            <button className="newsite-btn" type="submit">
              Submit request
            </button>
            <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/contact">
              Back to contact hub
            </NavLink>
          </div>
        </form>
      </section>
    </div>
  );
};

export default NewSiteOnSiteQuote;
