import { useMemo, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { sendLeadSignal } from '../lib/hubspotLeadSignal';
import '../styles/qrLanding.css';

type PreferredContactMethod = 'Text' | 'Phone call' | 'Email';

type QrLandingFormState = {
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
  preferredContactMethod: PreferredContactMethod | '';
  textConsent: boolean;
  emailConsent: boolean;
  phoneConsent: boolean;
  contactTimeAcknowledgement: boolean;
  preferredEstimateDate: string;
  preferredEstimateTimeSlot: string;
  whereDidYouSeeUs: string;
};

type QrLandingErrors = Partial<Record<keyof QrLandingFormState | 'consentSelection', string>>;

const todayIsoDate = new Date().toISOString().slice(0, 10);

const initialState: QrLandingFormState = {
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
  preferredContactMethod: '',
  preferredEstimateDate: todayIsoDate,
  preferredEstimateTimeSlot: '',
  textConsent: false,
  emailConsent: false,
  phoneConsent: false,
  contactTimeAcknowledgement: false,
  whereDidYouSeeUs: '',
};

const allowedSrcValues = new Set(['placard', 'card', 'sticker', 'vehicle', 'yard-sign', 'referral']);

const formatTo12Hour = (hour: number) => {
  if (hour === 0) return '12:00 AM';
  if (hour < 12) return `${hour}:00 AM`;
  if (hour === 12) return '12:00 PM';
  return `${hour - 12}:00 PM`;
};

const buildTimeSlotsForDate = (dateValue: string) => {
  if (!dateValue) return [];
  const selectedDate = new Date(`${dateValue}T12:00:00`);
  if (Number.isNaN(selectedDate.getTime())) return [];

  const day = selectedDate.getDay();
  const closeHour = day >= 1 && day <= 5 ? 19 : 16;
  const slots: string[] = [];

  for (let start = 10; start < closeHour; start += 1) {
    slots.push(`${formatTo12Hour(start)}–${formatTo12Hour(start + 1)}`);
  }

  return slots;
};

const QrLanding = () => {
  const [formState, setFormState] = useState<QrLandingFormState>(initialState);
  const [errors, setErrors] = useState<QrLandingErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [apiFailure, setApiFailure] = useState<string | null>(null);
  const [failureRequestId, setFailureRequestId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [logoAvailable, setLogoAvailable] = useState(true);
  const [searchParams] = useSearchParams();
  const fieldRefs = useRef<Partial<Record<keyof QrLandingFormState, HTMLElement | null>>>({});

  const todayIso = useMemo(() => todayIsoDate, []);

  const normalizedSource = useMemo(() => {
    const src = (searchParams.get('src') || '').toLowerCase().trim();
    return allowedSrcValues.has(src) ? src : 'QR_SCAN_GENERAL';
  }, [searchParams]);

  const handleChange =
    (field: keyof QrLandingFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const nextValue = event.target.value;
      const checked = 'checked' in event.target ? event.target.checked : false;
      setFormState((prev) => {
        if (field === 'textConsent' || field === 'emailConsent' || field === 'contactTimeAcknowledgement' || field === 'phoneConsent') {
          return { ...prev, [field]: checked };
        }
        if (field === 'preferredEstimateDate') {
          return { ...prev, preferredEstimateDate: nextValue, preferredEstimateTimeSlot: '' };
        }
        return { ...prev, [field]: nextValue };
      });
      setErrors((prev) => {
        if (field === 'textConsent' || field === 'emailConsent' || field === 'contactTimeAcknowledgement' || field === 'phoneConsent') {
          const rest = { ...prev };
          delete rest[field];
          return rest;
        }
        if (field === 'preferredEstimateDate') {
          const rest = { ...prev };
          delete rest.preferredEstimateDate;
          delete rest.preferredEstimateTimeSlot;
          return rest;
        }
        const rest = { ...prev };
        delete rest[field];
        return rest;
      });
      setApiFailure(null);
      setFailureRequestId(null);
    };

  const timeSlotOptions = useMemo(() => buildTimeSlotsForDate(formState.preferredEstimateDate), [formState.preferredEstimateDate]);

  const validate = (): QrLandingErrors => {
    const next: QrLandingErrors = {};
    const requiredFields: (keyof Pick<QrLandingFormState,
      'firstName' | 'lastName' | 'mobilePhone' | 'email' | 'streetAddress' | 'city' | 'state' | 'zip' |
      'propertyType' | 'requestedHelp' | 'preferredContactMethod' | 'preferredEstimateDate' | 'preferredEstimateTimeSlot'
    >)[] = [
      'firstName', 'lastName', 'mobilePhone', 'email', 'streetAddress', 'city', 'state', 'zip',
      'propertyType', 'requestedHelp', 'preferredContactMethod', 'preferredEstimateDate', 'preferredEstimateTimeSlot',
    ];
    requiredFields.forEach((field) => {
      if (!formState[field].trim()) next[field] = 'This field is required.';
    });
    if (formState.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    const phoneDigits = formState.mobilePhone.replace(/\D/g, '');
    if (formState.mobilePhone && phoneDigits.length < 10) {
      next.mobilePhone = 'Please enter a valid phone number.';
    }
    if (formState.zip && !/^\d{5}(-\d{4})?$/.test(formState.zip.trim())) {
      next.zip = 'Please enter a valid ZIP code.';
    }
    if (formState.preferredEstimateDate && formState.preferredEstimateDate < todayIso) {
      next.preferredEstimateDate = 'Please choose today or a future date.';
    }
    if (!formState.contactTimeAcknowledgement) {
      next.contactTimeAcknowledgement = 'Please acknowledge our contact-hours notice.';
    }
    if (!formState.textConsent && !formState.emailConsent && !formState.phoneConsent) {
      next.consentSelection = 'Please allow at least one follow-up method.';
    }
    return next;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstInvalidField = ([
        'firstName', 'lastName', 'mobilePhone', 'email', 'streetAddress', 'city', 'state', 'zip',
        'propertyType', 'requestedHelp', 'preferredContactMethod', 'preferredEstimateDate', 'preferredEstimateTimeSlot',
        'textConsent', 'emailConsent', 'phoneConsent', 'contactTimeAcknowledgement',
      ] as (keyof QrLandingFormState)[]).find((field) => field in next || (field === 'textConsent' && 'consentSelection' in next));
      const firstInvalidElement = firstInvalidField ? fieldRefs.current[firstInvalidField] : null;
      if (firstInvalidElement) {
        firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalidElement.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setApiFailure(null);
    setFailureRequestId(null);
    try {
      const response = await sendLeadSignal({
        event: 'qr_estimate_requested',
        sourceFamily: 'QR_SCAN',
        source: normalizedSource,
        landingRoute: '/qrlanding',
        campaignFamily: 'physical_canvassing',
        assetSource: searchParams.get('src') || undefined,
        whereDidYouSeeUs: formState.whereDidYouSeeUs || undefined,
        scheduleStatus: 'requested_pending_confirmation',
        calendarProvider: 'google_business_pending_confirmation',
        submittedAt: new Date().toISOString(),
        textConsent: formState.textConsent,
        emailConsent: formState.emailConsent,
        contactTimeAcknowledgement: formState.contactTimeAcknowledgement,
        consentTimestamp: new Date().toISOString(),
        communicationUseScope: 'quote_estimate_scheduling_service_only',
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
          followUpAllowedMethods: [
            formState.textConsent ? 'Text Messages' : null,
            formState.phoneConsent ? 'Phone Calls' : null,
            formState.emailConsent ? 'Emails' : null,
          ].filter(Boolean),
        },
      });
      setSubmitted(true);
      setFailureRequestId(response?.requestId || null);
    } catch (error) {
      const cause = error instanceof Error ? error.cause as Record<string, unknown> | undefined : undefined;
      const requestId = typeof cause?.requestId === 'string' ? cause.requestId : null;
      const userMessage = typeof cause?.userMessage === 'string'
        ? cause.userMessage
        : 'We couldn’t submit your request. Please try again.';
      setFailureRequestId(requestId);
      setApiFailure(userMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="qr-landing">
        <section className="qr-panel">
          <h1>Estimate request received.</h1>
          <p>Your requested estimate window has been submitted. We’ll review your request and confirm next steps by your approved contact methods.</p>
          {failureRequestId ? <p><strong>Reference:</strong> {failureRequestId}</p> : null}
          <div className="qr-summary">
            <p><strong>Name:</strong> {formState.firstName} {formState.lastName}</p>
            <p><strong>Phone:</strong> {formState.mobilePhone}</p>
            <p><strong>Email:</strong> {formState.email}</p>
            <p><strong>Requested estimate window:</strong> {formState.preferredEstimateDate} — {formState.preferredEstimateTimeSlot}</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="qr-landing">
      <section className="qr-panel qr-hero">
        {logoAvailable ? (
          <img
            src="/ForLouFinalHighEndLogo.png"
            alt="WNY Home Security high-end crest logo"
            className="qr-logo"
            onError={() => setLogoAvailable(false)}
          />
        ) : null}
        <h1>Custom Home Security Installed Locally</h1>
        <p>Cameras, sensors, smart security, local recording, and onsite estimates for Western New York homes.</p>
        <a className="qr-cta" href="#qr-estimate-form">Request My Estimate</a>
        <p className="qr-sub">No phone call required. Start online and we’ll follow up.</p>
      </section>

      <section className="qr-panel">
        <h2>What We Offer</h2>
        <div className="qr-grid">
          {['Cameras & doorbell video', 'Entry sensors & motion detection', 'Smart locks & automations', 'Local recording options', 'System ownership and local control'].map((item) => <article key={item}>{item}</article>)}
        </div>
      </section>

      <section className="qr-panel">
        <h2>Why People Scan</h2>
        <p>Tell us what you want protected, share your contact details, and request an onsite estimate window in a few minutes.</p>
      </section>

      <section className="qr-panel" id="qr-estimate-form">
        <h2>Request My Estimate</h2>
        <form onSubmit={onSubmit} noValidate>
          <fieldset className="qr-section">
            <legend>Contact Information</legend>
            <div className="qr-form-grid">
              {([
                ['firstName', 'First name'], ['lastName', 'Last name'], ['mobilePhone', 'Mobile phone'], ['email', 'Email'],
                ['streetAddress', 'Street address'], ['city', 'City'], ['state', 'State'], ['zip', 'ZIP'],
              ] as [
                'firstName' | 'lastName' | 'mobilePhone' | 'email' | 'streetAddress' | 'city' | 'state' | 'zip',
                string,
              ][]).map(([field, label]) => (
                <label key={field}><span>{label}</span><input
                  ref={(element) => { fieldRefs.current[field] = element; }}
                  type={field === 'email' ? 'email' : field === 'mobilePhone' ? 'tel' : 'text'}
                  inputMode={field === 'mobilePhone' ? 'tel' : field === 'zip' ? 'numeric' : undefined}
                  autoComplete={
                    field === 'firstName' ? 'given-name'
                      : field === 'lastName' ? 'family-name'
                        : field === 'mobilePhone' ? 'tel'
                          : field === 'email' ? 'email'
                            : field === 'streetAddress' ? 'street-address'
                              : field === 'city' ? 'address-level2'
                                : field === 'state' ? 'address-level1'
                                  : field === 'zip' ? 'postal-code'
                                    : undefined
                  }
                  value={formState[field]}
                  onChange={handleChange(field)}
                />{errors[field] && <small>{errors[field]}</small>}</label>
              ))}
            </div>
          </fieldset>

          <fieldset className="qr-section">
            <legend>Property</legend>
            <label><span>Property type</span><select ref={(element) => { fieldRefs.current.propertyType = element; }} value={formState.propertyType} onChange={handleChange('propertyType')}><option value="">Select property type</option><option value="Home">Home</option><option value="Apartment / Condo">Apartment / Condo</option><option value="Business">Business</option><option value="Other">Other</option></select>{errors.propertyType && <small>{errors.propertyType}</small>}</label>
            <label><span>Where did you hear about us? (optional)</span><select value={formState.whereDidYouSeeUs} onChange={handleChange('whereDidYouSeeUs')}><option value="">Select one</option><option value="QR Placard">QR Placard</option><option value="Yard Sign">Yard Sign</option><option value="Google">Google</option><option value="Referral">Referral</option><option value="Other">Other</option></select></label>
          </fieldset>

          <fieldset className="qr-section">
            <legend>Request</legend>
            <label><span>What do you need help with?</span><select ref={(element) => { fieldRefs.current.requestedHelp = element; }} value={formState.requestedHelp} onChange={handleChange('requestedHelp')}><option value="">Select a service</option><option value="Complete Security System">Complete Security System</option><option value="Cameras Only">Cameras Only</option><option value="System Repair">System Repair</option><option value="System Upgrade">System Upgrade</option><option value="Smart Home Automation">Smart Home Automation</option><option value="Not Sure Yet">Not Sure Yet</option></select>{errors.requestedHelp && <small>{errors.requestedHelp}</small>}</label>
            <label><span>Additional details (optional)</span><textarea value={formState.requestDetails} onChange={handleChange('requestDetails')} placeholder="Tell us anything helpful about entrances, cameras, repairs, or what you want protected." /></label>
          </fieldset>

          <fieldset className="qr-section">
            <legend>Estimate Window</legend>
            <label><span>Preferred estimate date</span><input ref={(element) => { fieldRefs.current.preferredEstimateDate = element; }} type="date" min={todayIso} value={formState.preferredEstimateDate} onChange={handleChange('preferredEstimateDate')} />{errors.preferredEstimateDate && <small>{errors.preferredEstimateDate}</small>}</label>
            <label><span>Preferred 1-hour estimate window</span><select ref={(element) => { fieldRefs.current.preferredEstimateTimeSlot = element; }} value={formState.preferredEstimateTimeSlot} onChange={handleChange('preferredEstimateTimeSlot')} disabled={!formState.preferredEstimateDate || timeSlotOptions.length === 0}><option value="">{formState.preferredEstimateDate ? 'Select a 1-hour window' : 'Select a date first'}</option>{timeSlotOptions.map((slot) => <option key={slot} value={slot}>{slot}</option>)}</select>{errors.preferredEstimateTimeSlot && <small>{errors.preferredEstimateTimeSlot}</small>}</label>
          </fieldset>

          <fieldset className="qr-section">
            <legend>Communication Preferences</legend>
            <div className="qr-radio-row" role="radiogroup" aria-label="Preferred contact method">
              {(['Text', 'Phone call', 'Email'] as PreferredContactMethod[]).map((method) => (
                <label key={method} className="qr-choice">
                  <input ref={method === 'Text' ? (element) => { fieldRefs.current.preferredContactMethod = element; } : undefined} type="radio" name="preferredContactMethod" value={method} checked={formState.preferredContactMethod === method} onChange={handleChange('preferredContactMethod')} />
                  <span>{method}</span>
                </label>
              ))}
            </div>
            {errors.preferredContactMethod && <small>{errors.preferredContactMethod}</small>}
            <div className="qr-checkbox-list">
              <label className="qr-choice"><input ref={(element) => { fieldRefs.current.textConsent = element; }} type="checkbox" checked={formState.textConsent} onChange={handleChange('textConsent')} /><span>Text Messages</span></label>
              <label className="qr-choice"><input ref={(element) => { fieldRefs.current.phoneConsent = element; }} type="checkbox" checked={formState.phoneConsent} onChange={handleChange('phoneConsent')} /><span>Phone Calls</span></label>
              <label className="qr-choice"><input ref={(element) => { fieldRefs.current.emailConsent = element; }} type="checkbox" checked={formState.emailConsent} onChange={handleChange('emailConsent')} /><span>Emails</span></label>
              <label className="qr-choice"><input ref={(element) => { fieldRefs.current.contactTimeAcknowledgement = element; }} type="checkbox" checked={formState.contactTimeAcknowledgement} onChange={handleChange('contactTimeAcknowledgement')} /><span>I understand contact hours are 8am–9pm, 7 days/week.</span></label>
            </div>
            {errors.consentSelection && <small>{errors.consentSelection}</small>}
            {errors.contactTimeAcknowledgement && <small>{errors.contactTimeAcknowledgement}</small>}
          </fieldset>

          <p>Remote access and notifications require internet availability.</p>
          {Object.keys(errors).length > 0 && <p className="qr-error">Please complete the highlighted required fields before submitting.</p>}
          {apiFailure && <p className="qr-error">{apiFailure}{failureRequestId ? ` Reference ID: ${failureRequestId}.` : ''} If needed, call or text 716-547-1378.</p>}
          <button type="submit" className="qr-cta" disabled={isSubmitting}>{isSubmitting ? 'Submitting…' : 'Request My Estimate'}</button>
        </form>
        <p className="qr-sub">Prefer to call later? <a href="tel:17165471378">716-547-1378</a></p>
      </section>
    </main>
  );
};

export const QrLandingAlias = () => <Navigate to="/qrlanding" replace />;

export default QrLanding;
