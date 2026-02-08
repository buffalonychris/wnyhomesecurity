import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import { NavLink } from 'react-router-dom';

type CallbackFormState = {
  name: string;
  phone: string;
  email: string;
  bestTime: string;
  notes: string;
};

type CallbackFormErrors = Partial<Record<keyof CallbackFormState, string>>;

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

const NewSiteCallback = () => {
  const [formState, setFormState] = useState<CallbackFormState>({
    name: '',
    phone: '',
    email: '',
    bestTime: '',
    notes: '',
  });
  const [errors, setErrors] = useState<CallbackFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const body = [
      'NewSite Callback Request',
      '',
      `Name: ${formState.name || 'N/A'}`,
      `Phone: ${formState.phone || 'N/A'}`,
      `Email: ${formState.email || 'N/A'}`,
      `Best time to call: ${formState.bestTime || 'N/A'}`,
      `Notes: ${formState.notes || 'N/A'}`,
    ].join('\n');
    return buildMailto('NewSite Callback Request', body);
  }, [formState]);

  const handleChange = (field: keyof CallbackFormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const validate = () => {
    const nextErrors: CallbackFormErrors = {};
    if (!formState.name.trim()) {
      nextErrors.name = 'Please share your name.';
    }
    if (!formState.phone.trim()) {
      nextErrors.phone = 'Please provide a phone number.';
    }
    if (!formState.bestTime.trim()) {
      nextErrors.bestTime = 'Let us know your preferred call time.';
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
      type: 'callback',
      submittedAt: new Date().toISOString(),
      name: formState.name.trim(),
      phone: formState.phone.trim(),
      email: formState.email.trim(),
      bestTime: formState.bestTime.trim(),
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
            <h1>Thanks — we are preparing your callback</h1>
            <p>One of our concierge advisors will reach out at your preferred time.</p>
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
                <strong>Best time to call:</strong> {formState.bestTime}
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
          <span className="newsite-badge">Request a callback</span>
          <h1>Tell us when to call</h1>
          <p>
            Share a few details and a concierge advisor will call you to recommend the best-fit packages for your home.
          </p>
          <p>If you’d rather not decide alone, we can walk you through it.</p>
        </div>
        <div className="newsite-card">
          <strong>What happens next?</strong>
          <p>We will confirm your timing, outline options, and align on any on-site needs.</p>
          <ul className="newsite-list">
            <li>Personalized package guidance.</li>
            <li>Clear pricing expectations.</li>
            <li>Zero pressure — just clarity.</li>
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
              <span>Best time to call *</span>
              <input
                className="newsite-input"
                type="text"
                value={formState.bestTime}
                onChange={handleChange('bestTime')}
                placeholder="Weekdays after 4 pm"
                required
              />
              {errors.bestTime && <span className="newsite-form-error">{errors.bestTime}</span>}
            </label>
          </div>
          <label className="newsite-field">
            <span>Notes</span>
            <textarea
              className="newsite-textarea"
              value={formState.notes}
              onChange={handleChange('notes')}
              placeholder="Tell us anything that will help us prepare."
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

export default NewSiteCallback;
