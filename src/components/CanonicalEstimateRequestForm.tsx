import { useId, useMemo, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { sendLeadSignal } from '../lib/hubspotLeadSignal';
import '../styles/canonicalEstimateForm.css';

type PreferredContactMethod = 'Text' | 'Phone call' | 'Email' | 'Any';
type IntakeMode = 'call' | 'estimate';
type CompactEstimateRequiredField = 'firstName' | 'lastName' | 'mobilePhone' | 'email' | 'streetAddress';

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
  requirePathSelection?: boolean;
  compactEstimate?: boolean;
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
  state: 'NY',
  zip: '',
  propertyType: '',
  requestedHelp: '',
  requestDetails: '',
  referredByName: '',
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

const compactEstimateRequiredFields: CompactEstimateRequiredField[] = [
  'firstName',
  'lastName',
  'mobilePhone',
  'email',
  'streetAddress',
];

const compactEstimateFieldLabels: Record<CompactEstimateRequiredField, string> = {
  firstName: 'first name',
  lastName: 'last name',
  mobilePhone: 'phone number',
  email: 'email address',
  streetAddress: 'service address',
};

const formatMissingFieldMessage = (fields: CompactEstimateRequiredField[]) => {
  const labels = fields.map((field) => compactEstimateFieldLabels[field]);
  if (labels.length === 1) return `Please enter your ${labels[0]}.`;
  if (labels.length === 2) return `Please enter your ${labels[0]} and ${labels[1]}.`;
  return `Please enter your ${labels.slice(0, -1).join(', ')}, and ${labels.at(-1)}.`;
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
  requirePathSelection = false,
  compactEstimate = false,
}: Props) => {
  const initialMode = enableIntakeSplit ? (requirePathSelection ? null : 'call') : 'estimate';
  const [formState, setFormState] = useState<FormState>(initialState);
  const [intakeMode, setIntakeMode] = useState<IntakeMode | null>(initialMode);
  const [submitted, setSubmitted] = useState(false);
  const [submittedMode, setSubmittedMode] = useState<IntakeMode>('estimate');
  const [apiFailure, setApiFailure] = useState<string | null>(null);
  const [failureRequestId, setFailureRequestId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [started, setStarted] = useState(false);
  const [invalidEstimateFields, setInvalidEstimateFields] = useState<CompactEstimateRequiredField[]>([]);
  const fieldRefs = useRef<Partial<Record<keyof FormState, HTMLElement | null>>>({});
  const fieldErrorIdPrefix = useId();
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
    setInvalidEstimateFields([]);
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
    if (
      compactEstimate
      && compactEstimateRequiredFields.includes(field as CompactEstimateRequiredField)
      && nextValue.trim()
    ) {
      setInvalidEstimateFields((prev) => prev.filter((invalidField) => invalidField !== field));
    }
  };

  const selectedContactMethods = () => [
    formState.textConsent ? 'Text message' : null,
    formState.phoneConsent ? 'Phone call' : null,
    formState.emailConsent ? 'Email' : null,
  ].filter(Boolean) as string[];

  const preferredContactMethod = (): PreferredContactMethod => {
    const selected = selectedContactMethods();
    if (selected.length !== 1) return 'Any';
    return selected[0] === 'Text message' ? 'Text' : selected[0] as PreferredContactMethod;
  };

  const validateCommunicationPermission = () => {
    if (selectedContactMethods().length === 0) {
      setApiFailure('Please choose at least one contact method we can use for this request.');
      return false;
    }
    if (!formState.contactTimeAcknowledgement) {
      setApiFailure('Please authorize us to contact you about this request.');
      return false;
    }
    return true;
  };

  const buildReferralContext = () => {
    const referredByName = formState.referredByName.trim();
    return referredByName ? { referredByName } : {};
  };

  const validateCompactEstimateRequiredFields = () => {
    const missingFields = compactEstimateRequiredFields.filter((field) => !formState[field].trim());
    setInvalidEstimateFields(missingFields);
    if (missingFields.length === 0) return true;
    setApiFailure(formatMissingFieldMessage(missingFields));
    fieldRefs.current[missingFields[0]]?.focus();
    return false;
  };

  const compactFieldErrorId = (field: CompactEstimateRequiredField) => `${fieldErrorIdPrefix}-${field}-error`;

  const compactFieldAccessibility = (field: CompactEstimateRequiredField) => {
    const invalid = invalidEstimateFields.includes(field);
    return {
      invalid,
      inputProps: {
        'aria-invalid': invalid || undefined,
        'aria-describedby': invalid ? compactFieldErrorId(field) : undefined,
      },
    };
  };

  const submitCallbackRequest = async (submitTimestamp: string) => {
    const fullName = formState.fullName.trim();
    if (!fullName || !formState.mobilePhone.trim()) {
      setApiFailure('Please enter your name and phone number so we can call you back.');
      return null;
    }
    if (!validateCommunicationPermission()) return null;
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
      textConsent: formState.textConsent,
      emailConsent: formState.emailConsent,
      phoneConsent: formState.phoneConsent,
      contactTimeAcknowledgement: formState.contactTimeAcknowledgement,
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
        preferredContactMethod: preferredContactMethod(),
        followUpAllowedMethods: selectedContactMethods(),
        leadEntryPath: 'REQUEST_A_CALL',
        ...buildReferralContext(),
      },
      pathChoice: 'contact_first',
      ...context,
    });
  };

  const submitEstimateRequest = async (submitTimestamp: string) => {
    const firstName = formState.firstName.trim();
    const lastName = formState.lastName.trim();
    if (compactEstimate && !validateCompactEstimateRequiredFields()) return null;
    if (!validateCommunicationPermission()) return null;
    return sendLeadSignal({
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
      phoneConsent: formState.phoneConsent,
      contactTimeAcknowledgement: formState.contactTimeAcknowledgement,
      consentTimestamp: new Date().toISOString(),
      contactHours: '8am_9pm_7_days',
      contact: {
        firstName,
        lastName,
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
        requestedHelp: formState.requestedHelp.trim() || undefined,
        requestDetails: formState.requestDetails.trim() || undefined,
        preferredContactMethod: preferredContactMethod(),
        preferredEstimateDate: formState.preferredEstimateDate.trim() || undefined,
        preferredEstimateTimeSlot: formState.preferredEstimateTimeSlot.trim() || undefined,
        followUpAllowedMethods: selectedContactMethods(),
        leadEntryPath: 'REQUEST_ON_SITE_ESTIMATE',
        ...buildReferralContext(),
      },
      ...context,
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!intakeMode) {
      setApiFailure('Please choose how you would like to get started.');
      return;
    }
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
      setApiFailure(
        typeof cause?.userMessage === 'string'
          ? cause.userMessage
          : 'We could not submit your request through the form. Please call or text 716-201-0364, or email hello@wnyhomesecurity.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderPathSelection = () => (
    <fieldset className="qr-section estimate-form-stage intake-path-stage">
      <legend>Choose how you'd like to get started</legend>
      <p className="estimate-stage-note">Choose what works best for you. We’ll take it from there — nothing gets scheduled until we confirm it with you.</p>
      <div className="intake-path-grid">
        <button type="button" className={`intake-path-option${intakeMode === 'call' ? ' is-active' : ''}`} onClick={() => handleModeChange('call')} aria-pressed={intakeMode === 'call'}>
          <span>Request a Call</span>
          <small>Just give us your name and number. We’ll call you back and take it from there.</small>
        </button>
        <button type="button" className={`intake-path-option${intakeMode === 'estimate' ? ' is-active' : ''}`} onClick={() => handleModeChange('estimate')} aria-pressed={intakeMode === 'estimate'}>
          <span>Request On-Site Estimate</span>
          <small>Tell us where the property is and anything you’d like us to know. We’ll review everything with you before anything is scheduled.</small>
        </button>
      </div>
    </fieldset>
  );

  const renderCommunicationSections = () => (
    <>
      <fieldset className="qr-section estimate-form-stage communication-preference-stage">
        <legend>How should we reach you?</legend>
        <p className="estimate-stage-note">Choose any that work for you. We’ll only use them for your request, scheduling, reminders, arrival updates, and service follow-up.</p>
        <div className="qr-checkbox-list communication-method-list">
          <label className="qr-choice estimate-choice"><input type="checkbox" checked={formState.textConsent} onChange={handleChange('textConsent')} /><span>Text message</span></label>
          <label className="qr-choice estimate-choice"><input type="checkbox" checked={formState.phoneConsent} onChange={handleChange('phoneConsent')} /><span>Phone call</span></label>
          <label className="qr-choice estimate-choice"><input type="checkbox" checked={formState.emailConsent} onChange={handleChange('emailConsent')} /><span>Email</span></label>
        </div>
      </fieldset>
      <fieldset className="qr-section estimate-form-stage communication-permission-stage">
        <legend>Okay for us to contact you?</legend>
        <label className="qr-choice estimate-choice permission-choice">
          <input type="checkbox" checked={formState.contactTimeAcknowledgement} onChange={handleChange('contactTimeAcknowledgement')} required />
          <span>Yes — WNY Home Security may contact me using the methods I selected about this request, scheduling, reminders, arrival updates, and service follow-up.</span>
        </label>
        <p className="estimate-stage-note">You may revoke permission at any time by contacting us and telling us which method you want removed.</p>
      </fieldset>
    </>
  );

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
    <form onSubmit={onSubmit} noValidate className={`estimate-form-shell${requirePathSelection ? ' estimate-form-shell--deferred' : ''}`}>
      {enableIntakeSplit ? renderPathSelection() : null}

      {intakeMode === null ? (
        <>
          {apiFailure && <p className="qr-error">{apiFailure}{failureRequestId ? ` Reference ID: ${failureRequestId}.` : ''}</p>}
        </>
      ) : null}

      {intakeMode === 'call' ? (
        <>
          <fieldset className="qr-section estimate-form-stage">
            <legend>Request a Call</legend>
            <p className="estimate-stage-note">Your number is not for sale. Ever. No spam, no robocall campaigns, no marketing. If you ask us to contact you about your request, that’s exactly what we use it for.</p>
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
                <span>Referred by (optional — good people deserve credit for good referrals.)</span>
                <input type="text" value={formState.referredByName} onChange={handleChange('referredByName')} />
              </label>
            </div>
            <label className="estimate-field">
              <span>Notes / what you want help with (optional)</span>
              <textarea value={formState.requestDetails} onChange={handleChange('requestDetails')} />
            </label>
          </fieldset>
          {renderCommunicationSections()}
        </>
      ) : null}

      {intakeMode === 'estimate' ? (
        <>
          <fieldset className="qr-section estimate-form-stage">
            <legend>{compactEstimate ? 'First, tell us about you' : 'Stage 1 - Start Here'}</legend>
            <div className="qr-form-grid">
              {compactEstimate ? (
                <>
                  <label className={`estimate-field${compactFieldAccessibility('firstName').invalid ? ' estimate-field--invalid' : ''}`}>
                    <span>First Name</span>
                    <input ref={(e) => { fieldRefs.current.firstName = e; }} aria-label="First Name" type="text" value={formState.firstName} onChange={handleChange('firstName')} required {...compactFieldAccessibility('firstName').inputProps} />
                    {compactFieldAccessibility('firstName').invalid ? <span id={compactFieldErrorId('firstName')} className="estimate-field-error">Please enter your first name.</span> : null}
                  </label>
                  <label className={`estimate-field${compactFieldAccessibility('lastName').invalid ? ' estimate-field--invalid' : ''}`}>
                    <span>Last Name</span>
                    <input ref={(e) => { fieldRefs.current.lastName = e; }} aria-label="Last Name" type="text" value={formState.lastName} onChange={handleChange('lastName')} required {...compactFieldAccessibility('lastName').inputProps} />
                    {compactFieldAccessibility('lastName').invalid ? <span id={compactFieldErrorId('lastName')} className="estimate-field-error">Please enter your last name.</span> : null}
                  </label>
                  <label className={`estimate-field${compactFieldAccessibility('mobilePhone').invalid ? ' estimate-field--invalid' : ''}`}>
                    <span>Phone</span>
                    <input ref={(e) => { fieldRefs.current.mobilePhone = e; }} aria-label="Phone" type="tel" value={formState.mobilePhone} onChange={handleChange('mobilePhone')} required {...compactFieldAccessibility('mobilePhone').inputProps} />
                    {compactFieldAccessibility('mobilePhone').invalid ? <span id={compactFieldErrorId('mobilePhone')} className="estimate-field-error">Please enter your phone number.</span> : null}
                  </label>
                  <label className={`estimate-field${compactFieldAccessibility('email').invalid ? ' estimate-field--invalid' : ''}`}>
                    <span>Email address</span>
                    <input ref={(e) => { fieldRefs.current.email = e; }} aria-label="Email address" type="email" value={formState.email} onChange={handleChange('email')} required {...compactFieldAccessibility('email').inputProps} />
                    {compactFieldAccessibility('email').invalid ? <span id={compactFieldErrorId('email')} className="estimate-field-error">Please enter your email address.</span> : null}
                  </label>
                </>
              ) : (
                ([['firstName', 'First name'], ['lastName', 'Last name'], ['mobilePhone', 'Mobile phone'], ['email', 'Email']] as const).map(([f, l]) => (
                  <label key={f} className="estimate-field">
                    <span>{l}</span>
                    <input ref={(e) => { fieldRefs.current[f] = e; }} type={f === 'email' ? 'email' : f === 'mobilePhone' ? 'tel' : 'text'} value={formState[f]} onChange={handleChange(f)} required />
                  </label>
                ))
              )}
            </div>
            <label className="estimate-field">
              <span>What do you need help with? (optional)</span>
              <select value={formState.requestedHelp} onChange={handleChange('requestedHelp')}>
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
              <span>Additional details / what you want protected (optional)</span>
              <textarea value={formState.requestDetails} onChange={handleChange('requestDetails')} />
            </label>
            <label className="estimate-field">
              <span>Referred by (optional)</span>
              <input type="text" value={formState.referredByName} onChange={handleChange('referredByName')} />
            </label>
          </fieldset>
          <fieldset className="qr-section estimate-form-stage">
            <legend>{compactEstimate ? 'About the property' : 'Stage 2 - Property Details'}</legend>
            <div className="qr-form-grid">
              <label className={`estimate-field${compactEstimate && compactFieldAccessibility('streetAddress').invalid ? ' estimate-field--invalid' : ''}`}>
                <span>Street address</span>
                <input ref={(e) => { fieldRefs.current.streetAddress = e; }} aria-label={compactEstimate ? 'Street address' : undefined} value={formState.streetAddress} onChange={handleChange('streetAddress')} required {...(compactEstimate ? compactFieldAccessibility('streetAddress').inputProps : {})} />
                {compactEstimate && compactFieldAccessibility('streetAddress').invalid ? <span id={compactFieldErrorId('streetAddress')} className="estimate-field-error">Please enter your service address.</span> : null}
              </label>
              <label className="estimate-field">
                <span>City (optional)</span>
                <input ref={(e) => { fieldRefs.current.city = e; }} value={formState.city} onChange={handleChange('city')} />
              </label>
              <label className="estimate-field">
                <span>State (optional)</span>
                <input ref={(e) => { fieldRefs.current.state = e; }} value={formState.state} onChange={handleChange('state')} />
              </label>
              <label className="estimate-field">
                <span>ZIP (optional)</span>
                <input ref={(e) => { fieldRefs.current.zip = e; }} value={formState.zip} onChange={handleChange('zip')} />
              </label>
            </div>
            <label className="estimate-field">
              <span>Property type (optional)</span>
              <select value={formState.propertyType} onChange={handleChange('propertyType')}>
                <option value="">Select property type</option>
                <option value="Home">Home</option>
                <option value="Apartment / Condo">Apartment / Condo</option>
                <option value="Business">Business</option>
                <option value="Other">Other</option>
              </select>
            </label>
            {!compactEstimate ? (
              <label className="estimate-field">
                <span>Where did you hear about us (optional)</span>
                <select value={formState.whereDidYouSeeUs} onChange={handleChange('whereDidYouSeeUs')}>
                  <option value="">Select one</option>
                  <option value="QR Placard">QR Placard</option>
                  <option value="Yard Sign">Yard Sign</option>
                  <option value="Google">Google</option>
                  <option value="Referral">Referral</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            ) : null}
          </fieldset>
          <fieldset className="qr-section estimate-form-stage">
            <legend>{compactEstimate ? 'When works best?' : 'Stage 3 - Estimate Window'}</legend>
            <p className="estimate-stage-note">This is a request only. We'll review availability before anything is scheduled.</p>
            <div className="estimate-form-grid-2">
              <label className="estimate-field">
                <span>Preferred estimate date (optional)</span>
                <input type="date" min={todayIsoDate} value={formState.preferredEstimateDate} onChange={handleChange('preferredEstimateDate')} />
              </label>
              <label className="estimate-field">
                <span>Preferred 1-hour estimate window (optional)</span>
                <select value={formState.preferredEstimateTimeSlot} onChange={handleChange('preferredEstimateTimeSlot')}>
                  <option value="">Select a 1-hour window</option>
                  {timeSlotOptions.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
                </select>
              </label>
            </div>
          </fieldset>
          {renderCommunicationSections()}
        </>
      ) : null}

      {apiFailure && intakeMode !== null ? <p className="qr-error">{apiFailure}{failureRequestId ? ` Reference ID: ${failureRequestId}.` : ''}</p> : null}
      {intakeMode !== null ? <button type="submit" className="qr-cta estimate-submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : intakeMode === 'call' ? 'Call Me Back' : 'Request My On-Site Estimate'}</button> : null}
    </form>
  );
};

export default CanonicalEstimateRequestForm;
