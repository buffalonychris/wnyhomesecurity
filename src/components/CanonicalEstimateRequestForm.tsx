import { useMemo, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { sendLeadSignal } from '../lib/hubspotLeadSignal';

type PreferredContactMethod = 'Text' | 'Phone call' | 'Email';

type FormState = {
  firstName: string; lastName: string; mobilePhone: string; email: string; streetAddress: string; city: string; state: string; zip: string; propertyType: string; requestedHelp: string; requestDetails: string; preferredContactMethod: PreferredContactMethod | ''; textConsent: boolean; emailConsent: boolean; phoneConsent: boolean; contactTimeAcknowledgement: boolean; preferredEstimateDate: string; preferredEstimateTimeSlot: string; whereDidYouSeeUs: string;
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
};
const todayIsoDate = new Date().toISOString().slice(0, 10);
const initialState: FormState = { firstName: '', lastName: '', mobilePhone: '', email: '', streetAddress: '', city: '', state: '', zip: '', propertyType: '', requestedHelp: '', requestDetails: '', preferredContactMethod: '', preferredEstimateDate: todayIsoDate, preferredEstimateTimeSlot: '', textConsent: false, emailConsent: false, phoneConsent: false, contactTimeAcknowledgement: false, whereDidYouSeeUs: '' };

const CanonicalEstimateRequestForm = ({ entryRoute, sourceFamily, source, landingRoute, requestId, onFirstInteraction, submitEventName, context }: Props) => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [apiFailure, setApiFailure] = useState<string | null>(null);
  const [failureRequestId, setFailureRequestId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [started, setStarted] = useState(false);
  const fieldRefs = useRef<Partial<Record<keyof FormState, HTMLElement | null>>>({});
  const timeSlotOptions = useMemo(() => { const d = new Date(`${formState.preferredEstimateDate}T12:00:00`); if (Number.isNaN(d.getTime())) return []; const day = d.getDay(); const closeHour = day >= 1 && day <= 5 ? 19 : 16; return Array.from({ length: closeHour - 10 }, (_, i) => { const s = i + 10; const f = (h: number) => h === 0 ? '12:00 AM' : h < 12 ? `${h}:00 AM` : h === 12 ? '12:00 PM' : `${h - 12}:00 PM`; return `${f(s)}–${f(s + 1)}`; }); }, [formState.preferredEstimateDate]);

  const handleChange = (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!started) { setStarted(true); onFirstInteraction?.(); }
    const nextValue = event.target.value;
    const checked = 'checked' in event.target ? event.target.checked : false;
    setFormState((prev) => (field === 'textConsent' || field === 'emailConsent' || field === 'contactTimeAcknowledgement' || field === 'phoneConsent') ? { ...prev, [field]: checked } : (field === 'preferredEstimateDate' ? { ...prev, preferredEstimateDate: nextValue, preferredEstimateTimeSlot: '' } : { ...prev, [field]: nextValue }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true); setApiFailure(null); setFailureRequestId(null);
    try {
      const submitTimestamp = new Date().toISOString();
      const response = await sendLeadSignal({ event: 'qr_estimate_requested', eventName: submitEventName, requestId, timestamp: submitTimestamp, entryRoute, sourceFamily, source, landingRoute, submittedAt: submitTimestamp, textConsent: formState.textConsent, emailConsent: formState.emailConsent, contactTimeAcknowledgement: formState.contactTimeAcknowledgement, consentTimestamp: new Date().toISOString(), contactHours: '8am_9pm_7_days', contact: { firstName: formState.firstName.trim(), lastName: formState.lastName.trim(), phone: formState.mobilePhone.trim(), email: formState.email.trim(), address: { street: formState.streetAddress.trim(), city: formState.city.trim(), state: formState.state.trim(), zip: formState.zip.trim(), propertyType: formState.propertyType.trim() } }, request: { requestedHelp: formState.requestedHelp.trim(), requestDetails: formState.requestDetails.trim() || undefined, preferredContactMethod: formState.preferredContactMethod.trim(), preferredEstimateDate: formState.preferredEstimateDate.trim(), preferredEstimateTimeSlot: formState.preferredEstimateTimeSlot.trim(), followUpAllowedMethods: [formState.textConsent ? 'Text Messages' : null, formState.phoneConsent ? 'Phone Calls' : null, formState.emailConsent ? 'Emails' : null].filter(Boolean) }, ...context });
      setSubmitted(true); setFailureRequestId(response?.requestId || null);
    } catch (error) { const cause = error instanceof Error ? error.cause as Record<string, unknown> | undefined : undefined; setFailureRequestId(typeof cause?.requestId === 'string' ? cause.requestId : null); setApiFailure(typeof cause?.userMessage === 'string' ? cause.userMessage : 'We couldn’t submit your request. Please try again.'); } finally { setIsSubmitting(false); }
  };

  return submitted ? <section className="qr-panel qr-success-card"><h2>Estimate request received.</h2><p>We’ll review your request and confirm next steps by your approved contact methods.</p>{failureRequestId ? <p><strong>Reference:</strong> {failureRequestId}</p> : null}</section> : <form onSubmit={onSubmit} noValidate>
      <fieldset className="qr-section"><legend>Stage 1 — Start Here</legend><div className="qr-form-grid">{([['firstName','First name'],['lastName','Last name'],['mobilePhone','Mobile phone'],['email','Email']] as const).map(([f,l]) => <label key={f}><span>{l}</span><input ref={(e)=>{fieldRefs.current[f]=e;}} type={f==='email'?'email':f==='mobilePhone'?'tel':'text'} value={formState[f]} onChange={handleChange(f)} required /></label>)}</div></fieldset>
      <label><span>What do you need help with?</span><select value={formState.requestedHelp} onChange={handleChange('requestedHelp')} required><option value="">Select a service</option><option value="Complete Security System">Complete Security System</option><option value="Cameras Only">Cameras Only</option><option value="System Repair">System Repair</option><option value="System Upgrade">System Upgrade</option><option value="Smart Home Automation">Smart Home Automation</option><option value="Not Sure Yet">Not Sure Yet</option></select></label>
      <label><span>Additional details / what you want protected</span><textarea value={formState.requestDetails} onChange={handleChange('requestDetails')} /></label>
      <fieldset className="qr-section"><legend>Stage 2 — Property Details</legend><div className="qr-form-grid">{([['streetAddress','Street address'],['city','City'],['state','State'],['zip','ZIP']] as const).map(([f,l]) => <label key={f}><span>{l}</span><input ref={(e)=>{fieldRefs.current[f]=e;}} value={formState[f]} onChange={handleChange(f)} required /></label>)}</div><label><span>Property type</span><select value={formState.propertyType} onChange={handleChange('propertyType')} required><option value="">Select property type</option><option value="Home">Home</option><option value="Apartment / Condo">Apartment / Condo</option><option value="Business">Business</option><option value="Other">Other</option></select></label></fieldset>
      <label><span>Where did you hear about us</span><select value={formState.whereDidYouSeeUs} onChange={handleChange('whereDidYouSeeUs')}><option value="">Select one</option><option value="QR Placard">QR Placard</option><option value="Yard Sign">Yard Sign</option><option value="Google">Google</option><option value="Referral">Referral</option><option value="Other">Other</option></select></label>
      <fieldset className="qr-section"><legend>Stage 3 — Estimate Window</legend><label><span>Preferred estimate date</span><input type="date" min={todayIsoDate} value={formState.preferredEstimateDate} onChange={handleChange('preferredEstimateDate')} required /></label><label><span>Preferred 1-hour estimate window</span><select value={formState.preferredEstimateTimeSlot} onChange={handleChange('preferredEstimateTimeSlot')} required><option value="">Select a 1-hour window</option>{timeSlotOptions.map((slot)=><option key={slot} value={slot}>{slot}</option>)}</select></label></fieldset>
      <fieldset className="qr-section"><legend>Stage 4 — Contact Permissions</legend><div className="qr-radio-row">{(['Text','Phone call','Email'] as PreferredContactMethod[]).map((m) => <label key={m} className="qr-choice"><input type="radio" name="preferredContactMethod" value={m} checked={formState.preferredContactMethod===m} onChange={handleChange('preferredContactMethod')} required /><span>{m}</span></label>)}</div><div className="qr-checkbox-list"><label className="qr-choice"><input type="checkbox" checked={formState.textConsent} onChange={handleChange('textConsent')} /><span>Text Messages</span></label><label className="qr-choice"><input type="checkbox" checked={formState.phoneConsent} onChange={handleChange('phoneConsent')} /><span>Phone Calls</span></label><label className="qr-choice"><input type="checkbox" checked={formState.emailConsent} onChange={handleChange('emailConsent')} /><span>Emails</span></label><label className="qr-choice"><input type="checkbox" checked={formState.contactTimeAcknowledgement} onChange={handleChange('contactTimeAcknowledgement')} required /><span>I understand contact hours are 8am–9pm, 7 days/week.</span></label></div></fieldset>
      {apiFailure && <p className="qr-error">{apiFailure}{failureRequestId ? ` Reference ID: ${failureRequestId}.` : ''}</p>}<button type="submit" className="qr-cta" disabled={isSubmitting}>{isSubmitting ? 'Submitting…' : 'Request My Estimate'}</button>
    </form>;
};

export default CanonicalEstimateRequestForm;
