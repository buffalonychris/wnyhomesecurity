import { useMemo, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { sendLeadSignal } from '../lib/hubspotLeadSignal';
import '../styles/qrLanding.css';

type PreferredContactMethod = 'Text' | 'Phone call' | 'Email' | 'Any';

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
  preferredContactMethod: PreferredContactMethod | '';
  textConsent: boolean;
  emailConsent: boolean;
  contactTimeAcknowledgement: boolean;
  preferredEstimateDate: string;
  preferredEstimateTimeSlot: string;
  whereDidYouSeeUs: string;
};

type QrLandingErrors = Partial<Record<keyof QrLandingFormState | 'consentSelection', string>>;

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
  preferredContactMethod: '',
  preferredEstimateDate: '',
  preferredEstimateTimeSlot: '',
  textConsent: false,
  emailConsent: false,
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

  const todayIso = useMemo(() => new Date().toISOString().slice(0, 10), []);

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
        if (field === 'textConsent' || field === 'emailConsent' || field === 'contactTimeAcknowledgement') {
          return { ...prev, [field]: checked };
        }
        if (field === 'preferredEstimateDate') {
          return { ...prev, preferredEstimateDate: nextValue, preferredEstimateTimeSlot: '' };
        }
        return { ...prev, [field]: nextValue };
      });
      setErrors((prev) => {
        if (field === 'textConsent' || field === 'emailConsent' || field === 'contactTimeAcknowledgement') {
          return { ...prev, [field]: checked };
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
    if (!formState.textConsent && !formState.emailConsent && formState.preferredContactMethod !== 'Phone call') {
      next.consentSelection = 'Please allow text or email contact, or choose Phone call as your preferred contact method.';
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
        'textConsent', 'emailConsent', 'contactTimeAcknowledgement',
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
          preferredContactMethod: formState.preferredContactMethod.trim(),
          preferredEstimateDate: formState.preferredEstimateDate.trim(),
          preferredEstimateTimeSlot: formState.preferredEstimateTimeSlot.trim(),
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
          <p>Your requested estimate window has been submitted. We’ll confirm availability by text or email.</p>
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
              type={field === 'email' ? 'email' : field === 'mobilePhone' ? 'tel' : field === 'zip' ? 'text' : 'text'}
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
            <label><span>Property type</span><input ref={(element) => { fieldRefs.current.propertyType = element; }} value={formState.propertyType} onChange={handleChange('propertyType')} />{errors.propertyType && <small>{errors.propertyType}</small>}</label>
            <label><span>Preferred contact method</span><select ref={(element) => { fieldRefs.current.preferredContactMethod = element; }} value={formState.preferredContactMethod} onChange={handleChange('preferredContactMethod')}><option value="">Select a contact method</option><option value="Text">Text</option><option value="Phone call">Phone call</option><option value="Email">Email</option><option value="Any">Any</option></select>{errors.preferredContactMethod && <small>{errors.preferredContactMethod}</small>}</label>
          </div>
          <label><span>What do you want help with?</span><textarea ref={(element) => { fieldRefs.current.requestedHelp = element; }} value={formState.requestedHelp} onChange={handleChange('requestedHelp')} />{errors.requestedHelp && <small>{errors.requestedHelp}</small>}</label>
          <label><span>Preferred estimate date</span><input ref={(element) => { fieldRefs.current.preferredEstimateDate = element; }} type="date" min={todayIso} value={formState.preferredEstimateDate} onChange={handleChange('preferredEstimateDate')} />{errors.preferredEstimateDate && <small>{errors.preferredEstimateDate}</small>}</label>
          <label><span>Preferred 1-hour estimate window</span><select ref={(element) => { fieldRefs.current.preferredEstimateTimeSlot = element; }} value={formState.preferredEstimateTimeSlot} onChange={handleChange('preferredEstimateTimeSlot')} disabled={!formState.preferredEstimateDate || timeSlotOptions.length === 0}><option value="">{formState.preferredEstimateDate ? 'Select a 1-hour window' : 'Select a date first'}</option>{timeSlotOptions.map((slot) => <option key={slot} value={slot}>{slot}</option>)}</select>{errors.preferredEstimateTimeSlot && <small>{errors.preferredEstimateTimeSlot}</small>}</label>
          <label><span>Where did you see us? (optional)</span><select value={formState.whereDidYouSeeUs} onChange={handleChange('whereDidYouSeeUs')}><option value="">Select one</option><option>Barber shop</option><option>Restaurant</option><option>Grocery store</option><option>Laundromat</option><option>Auto shop</option><option>Self-storage / U-Haul / moving location</option><option>Medical office / waiting room</option><option>Retail store</option><option>Apartment/community board</option><option>Friend/referral</option><option>Other</option></select></label>
          <fieldset>
            <legend>Communication preferences (required)</legend>
            <label>
              <input
                ref={(element) => { fieldRefs.current.textConsent = element; }}
                type="checkbox"
                checked={formState.textConsent}
                onChange={handleChange('textConsent')}
              />
              Allow text message follow-up
            </label>
            <label>
              <input
                ref={(element) => { fieldRefs.current.emailConsent = element; }}
                type="checkbox"
                checked={formState.emailConsent}
                onChange={handleChange('emailConsent')}
              />
              Allow email follow-up
            </label>
            <label>
              <input
                ref={(element) => { fieldRefs.current.contactTimeAcknowledgement = element; }}
                type="checkbox"
                checked={formState.contactTimeAcknowledgement}
                onChange={handleChange('contactTimeAcknowledgement')}
              />
              I understand contact hours are 8am–9pm, 7 days a week.
            </label>
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
