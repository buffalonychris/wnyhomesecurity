import { useMemo, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { sendLeadSignal } from '../lib/hubspotLeadSignal';
import WnyhsSiteFooter from '../components/homeSecurity/WnyhsSiteFooter';
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
const initialState: QrLandingFormState = { firstName: '', lastName: '', mobilePhone: '', email: '', streetAddress: '', city: '', state: '', zip: '', propertyType: '', requestedHelp: '', requestDetails: '', preferredContactMethod: '', preferredEstimateDate: todayIsoDate, preferredEstimateTimeSlot: '', textConsent: false, emailConsent: false, phoneConsent: false, contactTimeAcknowledgement: false, whereDidYouSeeUs: '' };
const allowedSrcValues = new Set(['placard', 'card', 'sticker', 'vehicle', 'yard-sign', 'referral']);
const formatTo12Hour = (hour: number) => hour === 0 ? '12:00 AM' : hour < 12 ? `${hour}:00 AM` : hour === 12 ? '12:00 PM' : `${hour - 12}:00 PM`;
const buildTimeSlotsForDate = (dateValue: string) => {
  if (!dateValue) return [];
  const selectedDate = new Date(`${dateValue}T12:00:00`);
  if (Number.isNaN(selectedDate.getTime())) return [];
  const day = selectedDate.getDay();
  const closeHour = day >= 1 && day <= 5 ? 19 : 16;
  const slots: string[] = [];
  for (let start = 10; start < closeHour; start += 1) slots.push(`${formatTo12Hour(start)}–${formatTo12Hour(start + 1)}`);
  return slots;
};

const QrLanding = () => {
  const [formState, setFormState] = useState<QrLandingFormState>(initialState);
  const [errors, setErrors] = useState<QrLandingErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [apiFailure, setApiFailure] = useState<string | null>(null);
  const [failureRequestId, setFailureRequestId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const fieldRefs = useRef<Partial<Record<keyof QrLandingFormState, HTMLElement | null>>>({});
  const todayIso = useMemo(() => todayIsoDate, []);
  const normalizedSource = useMemo(() => {
    const src = (searchParams.get('src') || '').toLowerCase().trim();
    return allowedSrcValues.has(src) ? src : 'QR_SCAN_GENERAL';
  }, [searchParams]);

  const handleChange = (field: keyof QrLandingFormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const nextValue = event.target.value;
    const checked = 'checked' in event.target ? event.target.checked : false;
    setFormState((prev) => {
      if (field === 'textConsent' || field === 'emailConsent' || field === 'contactTimeAcknowledgement' || field === 'phoneConsent') return { ...prev, [field]: checked };
      if (field === 'preferredEstimateDate') return { ...prev, preferredEstimateDate: nextValue, preferredEstimateTimeSlot: '' };
      return { ...prev, [field]: nextValue };
    });
    setErrors((prev) => {
      const rest = { ...prev };
      delete rest[field];
      if (field === 'preferredEstimateDate') delete rest.preferredEstimateTimeSlot;
      return rest;
    });
    setApiFailure(null);
    setFailureRequestId(null);
  };

  const timeSlotOptions = useMemo(() => buildTimeSlotsForDate(formState.preferredEstimateDate), [formState.preferredEstimateDate]);
  const validate = (): QrLandingErrors => {
    const next: QrLandingErrors = {};
    (['firstName', 'lastName', 'mobilePhone', 'email', 'streetAddress', 'city', 'state', 'zip', 'propertyType', 'requestedHelp', 'preferredContactMethod', 'preferredEstimateDate', 'preferredEstimateTimeSlot'] as const).forEach((field) => { if (!formState[field].trim()) next[field] = 'This field is required.'; });
    if (formState.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) next.email = 'Please enter a valid email address.';
    if (formState.mobilePhone && formState.mobilePhone.replace(/\D/g, '').length < 10) next.mobilePhone = 'Please enter a valid phone number.';
    if (formState.zip && !/^\d{5}(-\d{4})?$/.test(formState.zip.trim())) next.zip = 'Please enter a valid ZIP code.';
    if (formState.preferredEstimateDate && formState.preferredEstimateDate < todayIso) next.preferredEstimateDate = 'Please choose today or a future date.';
    if (!formState.contactTimeAcknowledgement) next.contactTimeAcknowledgement = 'Please acknowledge our contact-hours notice.';
    if (!formState.textConsent && !formState.emailConsent && !formState.phoneConsent) next.consentSelection = 'Please allow at least one follow-up method.';
    return next;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate(); setErrors(next);
    if (Object.keys(next).length > 0) return;
    setIsSubmitting(true); setApiFailure(null); setFailureRequestId(null);
    try {
      const response = await sendLeadSignal({ event: 'qr_estimate_requested', sourceFamily: 'QR_SCAN', source: normalizedSource, landingRoute: '/qrlanding', campaignFamily: 'physical_canvassing', assetSource: searchParams.get('src') || undefined, whereDidYouSeeUs: formState.whereDidYouSeeUs || undefined, scheduleStatus: 'requested_pending_confirmation', calendarProvider: 'google_business_pending_confirmation', submittedAt: new Date().toISOString(), textConsent: formState.textConsent, emailConsent: formState.emailConsent, contactTimeAcknowledgement: formState.contactTimeAcknowledgement, consentTimestamp: new Date().toISOString(), communicationUseScope: 'quote_estimate_scheduling_service_only', contactHours: '8am_9pm_7_days', contact: { firstName: formState.firstName.trim(), lastName: formState.lastName.trim(), phone: formState.mobilePhone.trim(), email: formState.email.trim(), address: { street: formState.streetAddress.trim(), city: formState.city.trim(), state: formState.state.trim(), zip: formState.zip.trim(), propertyType: formState.propertyType.trim() } }, request: { requestedHelp: formState.requestedHelp.trim(), requestDetails: formState.requestDetails.trim() || undefined, preferredContactMethod: formState.preferredContactMethod.trim(), preferredEstimateDate: formState.preferredEstimateDate.trim(), preferredEstimateTimeSlot: formState.preferredEstimateTimeSlot.trim(), followUpAllowedMethods: [formState.textConsent ? 'Text Messages' : null, formState.phoneConsent ? 'Phone Calls' : null, formState.emailConsent ? 'Emails' : null].filter(Boolean) } });
      setSubmitted(true); setFailureRequestId(response?.requestId || null);
    } catch (error) {
      const cause = error instanceof Error ? error.cause as Record<string, unknown> | undefined : undefined;
      setFailureRequestId(typeof cause?.requestId === 'string' ? cause.requestId : null);
      setApiFailure(typeof cause?.userMessage === 'string' ? cause.userMessage : 'We couldn’t submit your request. Please try again.');
    } finally { setIsSubmitting(false); }
  };

  return (<div className="qr-page-shell"><header className="qr-topbar"><a href="/qrlanding" className="qr-brand"><img src="/brand/crest-system/IconizedLogo.png" alt="WNY Home Security" /><span>WNY Home Security</span></a><nav><a href="/packages?vertical=home-security">View Packages</a><a href="/our-work?vertical=home-security">See Our Work</a><a href="tel:17165471378">Call/Text</a><a href="#qr-estimate-form">Schedule Estimate</a></nav></header><main className="qr-landing">
    <section className="qr-panel qr-hero"><img src="/brand/heros/HomePageHero.png" alt="Home security installation" className="qr-hero-image"/><h1>Practical Home Security for Western New York</h1><p>Tell us what you want protected. We’ll review your request and help you choose a practical next step.</p><ul className="qr-trust-list"><li>Local installation</li><li>Equipment options you can own</li><li>Cameras, sensors, alarms, and automations</li><li>No national call center</li></ul><div className="qr-hero-actions"><a className="qr-cta" href="#qr-estimate-form">Start My Estimate</a><a className="qr-link" href="tel:17165471378">Call/Text 716-547-1378</a></div></section>
    <section className="qr-panel"><h2>What Happens Next</h2><ol><li>Tell us what you want protected</li><li>We review your property needs</li><li>We confirm estimate timing</li><li>You get practical recommendations</li></ol></section>
    <section className="qr-strip"><span>Local installers</span><span>Smart cameras</span><span>Local recording options</span><span>Optional remote access</span><span>Practical system planning</span></section>
    {submitted ? <section className="qr-panel"><h2>Estimate request received.</h2><p>We’ll review your request and confirm next steps by your approved contact methods.</p>{failureRequestId ? <p><strong>Reference:</strong> {failureRequestId}</p> : null}</section> : <section className="qr-panel" id="qr-estimate-form"><h2>Start My Estimate</h2><form onSubmit={onSubmit} noValidate>
      <fieldset className="qr-section"><legend>Stage 1 — Start Here</legend><div className="qr-form-grid">{([['firstName','First name'],['lastName','Last name'],['mobilePhone','Mobile phone'],['email','Email']] as const).map(([f,l]) => <label key={f}><span>{l}</span><input ref={(e)=>{fieldRefs.current[f]=e;}} type={f==='email'?'email':f==='mobilePhone'?'tel':'text'} value={formState[f]} onChange={handleChange(f)} />{errors[f]&&<small>{errors[f]}</small>}</label>)}</div><label><span>What do you need help with?</span><select ref={(e)=>{fieldRefs.current.requestedHelp=e;}} value={formState.requestedHelp} onChange={handleChange('requestedHelp')}><option value="">Select a service</option><option value="Complete Security System">Complete Security System</option><option value="Cameras Only">Cameras Only</option><option value="System Repair">System Repair</option><option value="System Upgrade">System Upgrade</option><option value="Smart Home Automation">Smart Home Automation</option><option value="Not Sure Yet">Not Sure Yet</option></select>{errors.requestedHelp && <small>{errors.requestedHelp}</small>}</label><label><span>Additional details / what you want protected</span><textarea value={formState.requestDetails} onChange={handleChange('requestDetails')} /></label></fieldset>
      <fieldset className="qr-section"><legend>Stage 2 — Property Details</legend><div className="qr-form-grid">{([['streetAddress','Street address'],['city','City'],['state','State'],['zip','ZIP']] as const).map(([f,l]) => <label key={f}><span>{l}</span><input ref={(e)=>{fieldRefs.current[f]=e;}} value={formState[f]} onChange={handleChange(f)} />{errors[f]&&<small>{errors[f]}</small>}</label>)}</div><label><span>Property type</span><select ref={(e)=>{fieldRefs.current.propertyType=e;}} value={formState.propertyType} onChange={handleChange('propertyType')}><option value="">Select property type</option><option value="Home">Home</option><option value="Apartment / Condo">Apartment / Condo</option><option value="Business">Business</option><option value="Other">Other</option></select>{errors.propertyType && <small>{errors.propertyType}</small>}</label><label><span>Where did you hear about us</span><select value={formState.whereDidYouSeeUs} onChange={handleChange('whereDidYouSeeUs')}><option value="">Select one</option><option value="QR Placard">QR Placard</option><option value="Yard Sign">Yard Sign</option><option value="Google">Google</option><option value="Referral">Referral</option><option value="Other">Other</option></select></label></fieldset>
      <fieldset className="qr-section"><legend>Stage 3 — Estimate Window</legend><label><span>Preferred estimate date</span><input ref={(e)=>{fieldRefs.current.preferredEstimateDate=e;}} type="date" min={todayIso} value={formState.preferredEstimateDate} onChange={handleChange('preferredEstimateDate')} />{errors.preferredEstimateDate && <small>{errors.preferredEstimateDate}</small>}</label><label><span>Preferred 1-hour estimate window</span><select ref={(e)=>{fieldRefs.current.preferredEstimateTimeSlot=e;}} value={formState.preferredEstimateTimeSlot} onChange={handleChange('preferredEstimateTimeSlot')}><option value="">Select a 1-hour window</option>{timeSlotOptions.map((slot)=><option key={slot} value={slot}>{slot}</option>)}</select>{errors.preferredEstimateTimeSlot && <small>{errors.preferredEstimateTimeSlot}</small>}</label></fieldset>
      <fieldset className="qr-section"><legend>Stage 4 — Contact Permissions</legend><p className="qr-field-title">Preferred contact method</p><div className="qr-radio-row">{(['Text','Phone call','Email'] as PreferredContactMethod[]).map((m) => <label key={m} className="qr-choice"><input ref={m==='Text' ? (e)=>{fieldRefs.current.preferredContactMethod=e;} : undefined} type="radio" name="preferredContactMethod" value={m} checked={formState.preferredContactMethod===m} onChange={handleChange('preferredContactMethod')} /><span>{m}</span></label>)}</div>{errors.preferredContactMethod && <small>{errors.preferredContactMethod}</small>}<p className="qr-field-title">Permission to contact you</p><div className="qr-checkbox-list"><label className="qr-choice"><input type="checkbox" checked={formState.textConsent} onChange={handleChange('textConsent')} /><span>Text Messages</span></label><label className="qr-choice"><input type="checkbox" checked={formState.phoneConsent} onChange={handleChange('phoneConsent')} /><span>Phone Calls</span></label><label className="qr-choice"><input type="checkbox" checked={formState.emailConsent} onChange={handleChange('emailConsent')} /><span>Emails</span></label><label className="qr-choice"><input type="checkbox" checked={formState.contactTimeAcknowledgement} onChange={handleChange('contactTimeAcknowledgement')} /><span>I understand contact hours are 8am–9pm, 7 days/week.</span></label></div>{errors.consentSelection && <small>{errors.consentSelection}</small>}{errors.contactTimeAcknowledgement && <small>{errors.contactTimeAcknowledgement}</small>}</fieldset>
      {apiFailure && <p className="qr-error">{apiFailure}{failureRequestId ? ` Reference ID: ${failureRequestId}.` : ''} If needed, call or text 716-547-1378.</p>}<button type="submit" className="qr-cta" disabled={isSubmitting}>{isSubmitting ? 'Submitting…' : 'Request My Estimate'}</button><p className="qr-sub">Prefer to call or text? <a href="tel:17165471378">716-547-1378</a><br/>Call or text and we’ll help you get started.</p></form></section>}
  </main><WnyhsSiteFooter /></div>);
};

export const QrLandingAlias = () => <Navigate to="/qrlanding" replace />;
export default QrLanding;
