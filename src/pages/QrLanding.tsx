import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { sendLeadSignal } from '../lib/hubspotLeadSignal';
import '../styles/qrLanding.css';

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
  preferredContactMethod: string;
  preferredEstimateWindow: string;
  whereDidYouSeeUs: string;
};

type QrLandingErrors = Partial<Record<keyof QrLandingFormState, string>>;

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
  preferredEstimateWindow: '',
  whereDidYouSeeUs: '',
};

const allowedSrcValues = new Set(['placard', 'card', 'sticker', 'vehicle', 'yard-sign', 'referral']);

const QrLanding = () => {
  const [formState, setFormState] = useState<QrLandingFormState>(initialState);
  const [errors, setErrors] = useState<QrLandingErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [apiFailure, setApiFailure] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();

  const normalizedSource = useMemo(() => {
    const src = (searchParams.get('src') || '').toLowerCase().trim();
    return allowedSrcValues.has(src) ? src : 'QR_SCAN_GENERAL';
  }, [searchParams]);

  const handleChange =
    (field: keyof QrLandingFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormState((prev) => ({ ...prev, [field]: event.target.value }));
      setApiFailure(false);
    };

  const validate = (): QrLandingErrors => {
    const next: QrLandingErrors = {};
    const requiredFields: (keyof QrLandingFormState)[] = [
      'firstName', 'lastName', 'mobilePhone', 'email', 'streetAddress', 'city', 'state', 'zip',
      'propertyType', 'requestedHelp', 'preferredContactMethod', 'preferredEstimateWindow',
    ];
    requiredFields.forEach((field) => {
      if (!formState[field].trim()) next[field] = 'Required field.';
    });
    if (formState.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      next.email = 'Enter a valid email.';
    }
    return next;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setIsSubmitting(true);
    setApiFailure(false);
    try {
      await sendLeadSignal({
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
          preferredEstimateWindow: formState.preferredEstimateWindow.trim(),
        },
      });
      setSubmitted(true);
    } catch {
      setApiFailure(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="qr-landing">
        <section className="qr-panel">
          <h1>Estimate request received.</h1>
          <p>Thanks — we received your estimate request. We’ll review your details and follow up shortly.</p>
          <p>Your estimate request has been received. Scheduling confirmation will follow after review.</p>
          <div className="qr-summary">
            <p><strong>Name:</strong> {formState.firstName} {formState.lastName}</p>
            <p><strong>Phone:</strong> {formState.mobilePhone}</p>
            <p><strong>Email:</strong> {formState.email}</p>
            <p><strong>Requested estimate window:</strong> {formState.preferredEstimateWindow}</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="qr-landing">
      <section className="qr-panel qr-hero">
        <img src="/ForLouFinalHighEndLogo.png" alt="WNY Home Security" className="qr-logo" />
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
            ] as [keyof QrLandingFormState, string][]).map(([field, label]) => (
              <label key={field}><span>{label}</span><input value={formState[field]} onChange={handleChange(field)} />{errors[field] && <small>{errors[field]}</small>}</label>
            ))}
            <label><span>Property type</span><input value={formState.propertyType} onChange={handleChange('propertyType')} />{errors.propertyType && <small>{errors.propertyType}</small>}</label>
            <label><span>Preferred contact method</span><input value={formState.preferredContactMethod} onChange={handleChange('preferredContactMethod')} />{errors.preferredContactMethod && <small>{errors.preferredContactMethod}</small>}</label>
          </div>
          <label><span>What do you want help with?</span><textarea value={formState.requestedHelp} onChange={handleChange('requestedHelp')} />{errors.requestedHelp && <small>{errors.requestedHelp}</small>}</label>
          <label><span>Preferred estimate date/time window</span><input value={formState.preferredEstimateWindow} onChange={handleChange('preferredEstimateWindow')} />{errors.preferredEstimateWindow && <small>{errors.preferredEstimateWindow}</small>}</label>
          <label><span>Where did you see us? (optional)</span><select value={formState.whereDidYouSeeUs} onChange={handleChange('whereDidYouSeeUs')}><option value="">Select one</option><option>Barber shop</option><option>Restaurant</option><option>Grocery store</option><option>Laundromat</option><option>Auto shop</option><option>Self-storage / U-Haul / moving location</option><option>Medical office / waiting room</option><option>Retail store</option><option>Apartment/community board</option><option>Friend/referral</option><option>Other</option></select></label>

          <p>Remote access and notifications require internet availability.</p>
          {Object.keys(errors).length > 0 && <p className="qr-error">We couldn’t submit your request. Please check the required fields and try again.</p>}
          {apiFailure && <p className="qr-error">We couldn’t send this request right now. Please try again, or use the contact option below.</p>}
          <button type="submit" className="qr-cta" disabled={isSubmitting}>{isSubmitting ? 'Submitting…' : 'Request My Estimate'}</button>
        </form>
        <p className="qr-sub">Prefer to call later? <a href="tel:17165471378">716-547-1378</a></p>
      </section>
    </main>
  );
};

export const QrLandingAlias = () => <Navigate to="/qrlanding" replace />;

export default QrLanding;
