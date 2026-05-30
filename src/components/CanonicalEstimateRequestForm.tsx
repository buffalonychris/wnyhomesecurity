import { useMemo, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { sendLeadSignal } from '../lib/hubspotLeadSignal';
import '../styles/canonicalEstimateForm.css';

type PreferredContactMethod = 'Text' | 'Phone call' | 'Email';
type IntakeMode = 'call' | 'estimate';

type FormState = {
  fullName: string;
  firstName: string;
  lastName: string;
  mobilePhone: string;
  email: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  propertyType: string;
  requestedHelp: string;
  requestDetails: string;
  referredByName: string;
  preferredContactMethod: PreferredContactMethod | '';
  textConsent: boolean;
  emailConsent: boolean;
  phoneConsent: boolean;
  contactTimeAcknowledgement: boolean;
  preferredEstimateDate: string;
  preferredEstimateTimeSlot: string;
  whereDidYouSeeUs: string;
};

type Props = {
  entryRoute?: string;
  sourceFamily: string;
  source: string;
  landingRoute: string;
  requestId?: string;
  onFirstInteraction?: () => void;
  submitEventName?: string;
  context?: Record<string, unknown>;
  enableIntakeSplit?: boolean;
};

const todayIsoDate = new Date().toISOString().slice(0, 10);
const initialState: FormState = {
  fullName: '',
  firstName: '',
  lastName: '',
  mobilePhone: '',
  email: '',
  streetAddress: '',
  city: '',
  state: '',
  zip: '',
  propertyType: '',
  requestedHelp: '',
  requestDetails: '',
  referredByName: '',
  preferredContactMethod: '',
  preferredEstimateDate: todayIsoDate,
  preferredEstimateTimeSlot: '',
  textConsent: false,
  emailConsent: false,
  phoneConsent: false,
  contactTimeAcknowledgement: false,
  whereDidYouSeeUs: '',
};

const splitFullName = (fullName: string) => {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  const [firstName, ...rest] = parts;
  return { firstName: firstName || '', lastName: rest.join(' ') };
};

const CanonicalEstimateRequestForm = ({
  entryRoute,
  sourceFamily,
  source,
  landingRoute,
  requestId,
  onFirstInteraction,
  submitEventName,
  context,
  enableIntakeSplit = false,
}: Props) => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [intakeMode, setIntakeMode] = useState<IntakeMode>(enableIntakeSplit ? 'call' : 'estimate');
  const [submitted, setSubmitted] = useState(false);
  const [submittedMode, setSubmittedMode] = useState<IntakeMode>('estimate');
  const [apiFailure, setApiFailure] = useState<string | null>(null);
  const [failureRequestId, setFailureRequestId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [started, setStarted] = useState(false);
  const fieldRefs = useRef<Partial<Record<keyof FormState, HTMLElement | null>>>({});
  const timeSlotOptions = useMemo(() => {
    const d = new Date(`${formState.preferredEstimateDate}T12:00:00`);
    if (Number.isNaN(d.getTime())) return [];
    const day = d.getDay();
    const closeHour = day >= 1 && day <= 5 ? 19 : 16;
    return Array.from({ length: closeHour - 10 }, (_, i) => {
      const s = i + 10;
      const f = (h: number) => h === 0 ? '12:00 AM' : h < 12 ? `${h}:00 AM` : h === 12 ? '12:00 PM' : `${h - 12}:00 PM`;
      return `${f(s)}-${f(s + 1)}`;
    });
  }, [formState.preferredEstimateDate]);

  const markStarted = () => {
    if (!started) {
      setStarted(true);
      onFirstInteraction?.();
    }
  };

  const handleModeChange = (mode: IntakeMode) => {
    markStarted();
    setIntakeMode(mode);
    setApiFailure(null);
  };

  const handleChange = (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    markStarted();
    const nextValue = event.target.value;
    const checked = 'checked' in event.target ? event.target.checked : false;
    setFormState((prev) => {
      if (field === 'textConsent' || field === 'emailConsent' || field === 'contactTimeAcknowledgement' || field === 'phoneConsent') {
        return { ...prev, [field]: checked };
      }
      if (field === 'preferredEstimateDate') return { ...prev, preferredEstimateDate: nextValue, preferredEstimateTimeSlot: '' };
      return { ...prev, [field]: nextValue };
    });
  };

  const buildReferralContext = () => {
    const referredByName = formState.referredByName.trim();
    return referredByName ? { referredByName } : {};
  };

  const submitCallbackRequest = async (submitTimestamp: string) => {
    const fullName = formState.fullName.trim();
    if (!fullName || !formState.mobilePhone.trim()) {
      setApiFailure('Please enter your name and phone number so we can call you back.');
      return null;
    }
    const parsed = splitFullName(fullName);
    return sendLeadSignal({
      event: 'callback_requested',
      eventName: 'callback_requested',
      requestId,
      timestamp: submitTimestamp,
      entryRoute,
      sourceFamily,
      source: `${source}_callback`,
      landingRoute,
      submittedAt: submitTimestamp,
      textConsent: false,
      emailConsent: Boolean(formState.email.trim()),
      contactTimeAcknowledgement: false,
      consentTimestamp: submitTimestamp,
      contactHours: '8am_9pm_7_days',
      contact: {
        fullName,
        firstName: parsed.firstName,
        lastName: parsed.lastName,
        phone: formState.mobilePhone.trim(),
        email: formState.email.trim(),
      },
      request: {
        requestedHelp: 'callback_request',
        requestDetails: formState.requestDetails.trim() || undefined,
        preferredContactMethod: 'Phone call',
        leadEntryPath: 'REQUEST_A_CALL',
        ...buildReferralContext(),
      },
      pathChoice: 'contact_first',
      ...context,
    });
  };

  const submitEstimateRequest = async (submitTimestamp: string) => sendLeadSignal({
    event: 'qr_estimate_requested',
    eventName: submitEventName,
    requestId,
    timestamp: submitTimestamp,
    entryRoute,
    sourceFamily,
    source,
    landingRoute,
    submittedAt: submitTimestamp,
    textConsent: formState.textConsent,
    emailConsent: formState.emailConsent,
    contactTimeAcknowledgement: formState.contactTimeAcknowledgement,
    consentTimestamp: new Date().toISOString(),
    contactHours: '8am_9pm_7_days',
    contact: {
      firstName: formState.firstName.trim(),
      lastName: formState.lastName.trim(),
      phone: formState.mobilePhone.trim(),
      email: formState.email.trim(),
      address: {
        street: formState.streetAddress.trim(),
        city: formState.city.trim(),
        state: formState.state.trim(),
        zip: formState.zip.trim(),
        propertyType: formState.propertyType.trim(),
      },
    },
    request: {
      requestedHelp: formState.requestedHelp.trim(),
      requestDetails: formState.requestDetails.trim() || undefined,
      preferredContactMethod: formState.preferredContactMethod.trim(),
      preferredEstimateDate: formState.preferredEstimateDate.trim(),
      preferredEstimateTimeSlot: formState.preferredEstimateTimeSlot.trim(),
      followUpAllowedMethods: [formState.textConsent ? 'Text Messages' : null, formState.phoneConsent ? 'Phone Calls' : null, formState.emailConsent ? 'Emails' : null].filter(Boolean),
      leadEntryPath: 'REQUEST_ON_SITE_ESTIMATE',
      ...buildReferralContext(),
    },
    ...context,
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setApiFailure(null);
    setFailureRequestId(null);
    try {
      const submitTimestamp = new Date().toISOString();
      const response = intakeMode === 'call'
        ? await submitCallbackRequest(submitTimestamp)
        : await submitEstimateRequest(submitTimestamp);
      if (!response) return;
      setSubmittedMode(intakeMode);
      setSubmitted(true);
      setFailureRequestId(response?.requestId || null);
    } catch (error) {
      const cause = error instanceof Error ? error.cause as Record<string, unknown> | undefined : undefined;
      setFailureRequestId(typeof cause?.requestId === 'string' ? cause.requestId : null);
      setApiFailure(typeof cause?.userMessage === 'string' ? cause.userMessage : 'We could not submit your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="qr-panel qr-success-card">
        <h2>{submittedMode === 'call' ? 'Call request received.' : 'Estimate request received.'}</h2>
        <p>{submittedMode === 'call' ? 'We will review your request and call you back.' : 'We will review your request and confirm next steps by your approved contact methods.'}</p>
        {failureRequestId ? <p><strong>Reference:</strong> {failureRequestId}</p> : null}
      </section>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="estimate-form-shell">
      {enableIntakeSplit ? (
        <fieldset className="qr-section estimate-form-stage intake-path-stage">
          <legend>Choose a path</legend>
          <div className="intake-path-grid">
            <button type="button" className={`intake-path-option${intakeMode === 'call' ? ' is-active' : ''}`} onClick={() => handleModeChange('call')} aria-pressed={intakeMode === 'call'}>
              <span>Request a Call</span>
              <small>Not ready to fill everything out? Send your name and phone number and we'll call you back.</small>
            </button>
            <button type="button" className={`intake-path-option${intakeMode === 'estimate' ? ' is-active' : ''}`} onClick={() => handleModeChange('estimate')} aria-pressed={intakeMode === 'estimate'}>
              <span>Request On-Site Estimate</span>
              <small>Tell us what you're looking for and request a preferred time. We'll review the request and confirm availability before anything is scheduled.</small>
            </button>
          </div>
        </fieldset>
      ) : null}

      {intakeMode === 'call' ? (
        <fieldset className="qr-section estimate-form-stage">
          <legend>Request a Call</legend>
          <div className="qr-form-grid">
            <label className="estimate-field">
              <span>Name</span>
              <input ref={(e) => { fieldRefs.current.fullName = e; }} type="text" value={formState.fullName} onChange={handleChange('fullName')} required />
            </label>
            <label className="estimate-field">
              <span>Phone</span>
              <input ref={(e) => { fieldRefs.current.mobilePhone = e; }} type="tel" value={formState.mobilePhone} onChange={handleChange('mobilePhone')} required />
            </label>
            <label className="estimate-field">
              <span>Email (optional)</span>
              <input type="email" value={formState.email} onChange={handleChange('email')} />
            </label>
            <label className="estimate-field">
              <span>Referred by (optional)</span>
              <input type="text" value={formState.referredByName} onChange={handleChange('referredByName')} />
            </label>
          </div>
          <label className="estimate-field">
            <span>Notes / what you want help with (optional)</span>
            <textarea value={formState.requestDetails} onChange={handleChange('requestDetails')} />
          </label>
        </fieldset>
      ) : (
        <>
          <fieldset className="qr-section estimate-form-stage">
            <legend>Stage 1 - Start Here</legend>
            <div className="qr-form-grid">
              {([['firstName', 'First name'], ['lastName', 'Last name'], ['mobilePhone', 'Mobile phone'], ['email', 'Email']] as const).map(([f, l]) => (
                <label key={f} className="estimate-field">
                  <span>{l}</span>
                  <input ref={(e) => { fieldRefs.current[f] = e; }} type={f === 'email' ? 'email' : f === 'mobilePhone' ? 'tel' : 'text'} value={formState[f]} onChange={handleChange(f)} required />
                </label>
              ))}
            </div>
            <label className="estimate-field">
              <span>What do you need help with?</span>
              <select value={formState.requestedHelp} onChange={handleChange('requestedHelp')} required>
                <option value="">Select a service</option>
                <option value="Complete Security System">Complete Security System</option>
                <option value="Cameras Only">Cameras Only</option>
                <option value="System Repair">System Repair</option>
                <option value="System Upgrade">System Upgrade</option>
                <option value="Smart Home Automation">Smart Home Automation</option>
                <option value="Not Sure Yet">Not Sure Yet</option>
              </select>
            </label>
            <label className="estimate-field">
              <span>Additional details / what you want protected</span>
              <textarea value={formState.requestDetails} onChange={handleChange('requestDetails')} />
            </label>
            <label className="estimate-field">
              <span>Referred by (optional)</span>
              <input type="text" value={formState.referredByName} onChange={handleChange('referredByName')} />
            </label>
          </fieldset>
          <fieldset className="qr-section estimate-form-stage">
            <legend>Stage 2 - Property Details</legend>
            <div className="qr-form-grid">
              {([['streetAddress', 'Street address'], ['city', 'City'], ['state', 'State'], ['zip', 'ZIP']] as const).map(([f, l]) => (
                <label key={f} className="estimate-field">
                  <span>{l}</span>
                  <input ref={(e) => { fieldRefs.current[f] = e; }} value={formState[f]} onChange={handleChange(f)} required />
                </label>
              ))}
            </div>
            <label className="estimate-field">
              <span>Property type</span>
              <select value={formState.propertyType} onChange={handleChange('propertyType')} required>
                <option value="">Select property type</option>
                <option value="Home">Home</option>
                <option value="Apartment / Condo">Apartment / Condo</option>
                <option value="Business">Business</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label className="estimate-field">
              <span>Where did you hear about us</span>
              <select value={formState.whereDidYouSeeUs} onChange={handleChange('whereDidYouSeeUs')}>
                <option value="">Select one</option>
                <option value="QR Placard">QR Placard</option>
                <option value="Yard Sign">Yard Sign</option>
                <option value="Google">Google</option>
                <option value="Referral">Referral</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </fieldset>
          <fieldset className="qr-section estimate-form-stage">
            <legend>Stage 3 - Estimate Window</legend>
            <div className="estimate-form-grid-2">
              <label className="estimate-field">
                <span>Preferred estimate date</span>
                <input type="date" min={todayIsoDate} value={formState.preferredEstimateDate} onChange={handleChange('preferredEstimateDate')} required />
              </label>
              <label className="estimate-field">
                <span>Preferred 1-hour estimate window</span>
                <select value={formState.preferredEstimateTimeSlot} onChange={handleChange('preferredEstimateTimeSlot')} required>
                  <option value="">Select a 1-hour window</option>
                  {timeSlotOptions.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
                </select>
              </label>
            </div>
          </fieldset>
          <fieldset className="qr-section estimate-form-stage">
            <legend>Stage 4 - Contact Permissions</legend>
            <div className="qr-radio-row">
              {(['Text', 'Phone call', 'Email'] as PreferredContactMethod[]).map((m) => (
                <label key={m} className="qr-choice estimate-choice">
                  <input type="radio" name="preferredContactMethod" value={m} checked={formState.preferredContactMethod === m} onChange={handleChange('preferredContactMethod')} required />
                  <span>{m}</span>
                </label>
              ))}
            </div>
            <div className="qr-checkbox-list">
              <label className="qr-choice estimate-choice"><input type="checkbox" checked={formState.textConsent} onChange={handleChange('textConsent')} /><span>Text Messages</span></label>
              <label className="qr-choice estimate-choice"><input type="checkbox" checked={formState.phoneConsent} onChange={handleChange('phoneConsent')} /><span>Phone Calls</span></label>
              <label className="qr-choice estimate-choice"><input type="checkbox" checked={formState.emailConsent} onChange={handleChange('emailConsent')} /><span>Emails</span></label>
              <label className="qr-choice estimate-choice"><input type="checkbox" checked={formState.contactTimeAcknowledgement} onChange={handleChange('contactTimeAcknowledgement')} required /><span>I understand contact hours are 8am-9pm, 7 days/week.</span></label>
            </div>
          </fieldset>
        </>
      )}
      {apiFailure && <p className="qr-error">{apiFailure}{failureRequestId ? ` Reference ID: ${failureRequestId}.` : ''}</p>}
      <button type="submit" className="qr-cta estimate-submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : intakeMode === 'call' ? 'Request a Call' : 'Request On-Site Estimate'}</button>
    </form>
  );
};

export default CanonicalEstimateRequestForm;
