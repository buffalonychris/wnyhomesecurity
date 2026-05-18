import { FormEvent, useMemo, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useLayoutConfig } from '../components/LayoutConfig';
import { brandHomeSecurity, brandSite } from '../lib/brand';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';
import { resolveVertical } from '../lib/verticals';
import { buildSms, buildTalkToUsMailto, buildTel, wnyhsContact } from '../content/wnyhsContact';
import { sendLeadSignal } from '../lib/hubspotLeadSignal';
import { loadRetailFlow } from '../lib/retailFlow';

type DiscoveryContext = {
  fitCheckCompleted: boolean;
  recommendedTier: 'bronze' | 'silver' | 'gold' | 'unknown';
  propertySize: 'small' | 'typical' | 'large' | 'unknown';
  coverageExpectation: 'basic' | 'moderate' | 'comprehensive' | 'unknown';
  recordingPreference: 'local' | 'cloud' | 'hybrid' | 'none' | 'unknown';
  monitoringPreference: 'self_monitoring' | 'no_monthly' | 'professional_discussion' | 'unknown';
  priorityConcerns: 'entry_monitoring' | 'driveway' | 'package_delivery' | 'kids_pets' | 'garage_shed' | 'unknown';
  entryPointCount: string;
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const vertical = resolveVertical(searchParams.get('vertical'));
  const isHomeSecurityHost = typeof window !== 'undefined' && window.location.hostname.includes('wnyhomesecurity.com');
  const isHomeSecurity = vertical === 'home-security' || isHomeSecurityHost;
  const tierParam = searchParams.get('tier')?.toLowerCase() ?? '';
  const packageTier = tierParam === 'bronze' || tierParam === 'silver' || tierParam === 'gold' ? tierParam : undefined;
  const packageTierLabel = packageTier ? `${packageTier.charAt(0).toUpperCase()}${packageTier.slice(1)}` : null;
  const requestIntentParam = searchParams.get('estimateIntent')?.toLowerCase() ?? '';
  const requestIntent =
    requestIntentParam === 'onsite-walkthrough' || requestIntentParam === 'recommended-system' || requestIntentParam === 'selected-package'
      ? requestIntentParam
      : 'general-estimate';
  const sourceParam = searchParams.get('source')?.toLowerCase() ?? '';
  const utmSourceParam = searchParams.get('utm_source')?.toLowerCase() ?? '';
  const hasQrContext = sourceParam.includes('qr') || sourceParam.includes('flyer') || utmSourceParam.includes('qr') || utmSourceParam.includes('flyer');
  const discoveryContext = useMemo<DiscoveryContext | null>(() => {
    const fitCheckCompleted = searchParams.get('fit') === 'complete';
    const recommended = searchParams.get('recommended')?.toLowerCase();
    const recommendedTier = recommended === 'bronze' || recommended === 'silver' || recommended === 'gold' ? recommended : 'unknown';
    const fromQuery = {
      propertySize: searchParams.get('propertySize') as DiscoveryContext['propertySize'] | null,
      coverageExpectation: searchParams.get('coverageExpectation') as DiscoveryContext['coverageExpectation'] | null,
      recordingPreference: searchParams.get('recordingPreference') as DiscoveryContext['recordingPreference'] | null,
      monitoringPreference: searchParams.get('monitoringPreference') as DiscoveryContext['monitoringPreference'] | null,
      priorityConcerns: searchParams.get('priorityConcerns') as DiscoveryContext['priorityConcerns'] | null,
      entryPointCount: searchParams.get('entryPointCount') || 'unknown',
    };
    if (!fitCheckCompleted && recommendedTier === 'unknown') return null;
    const flow = loadRetailFlow().homeSecurity?.fitCheckAnswers;
    return {
      fitCheckCompleted,
      recommendedTier,
      propertySize: fromQuery.propertySize || flow?.homeSize || 'unknown',
      coverageExpectation: fromQuery.coverageExpectation || 'unknown',
      recordingPreference: fromQuery.recordingPreference || 'unknown',
      monitoringPreference: fromQuery.monitoringPreference || 'unknown',
      priorityConcerns: fromQuery.priorityConcerns || 'unknown',
      entryPointCount: fromQuery.entryPointCount,
    };
  }, [searchParams]);
  const reviewEstimateHref = useMemo(() => {
    const params = new URLSearchParams();
    params.set('vertical', 'home-security');
    if (packageTier) params.set('tier', packageTier);
    if (discoveryContext?.recommendedTier && discoveryContext.recommendedTier !== 'unknown') {
      params.set('recommended', discoveryContext.recommendedTier);
    }
    if (discoveryContext?.fitCheckCompleted) params.set('fit', 'complete');
    return `/quoteReview?${params.toString()}`;
  }, [discoveryContext?.fitCheckCompleted, discoveryContext?.recommendedTier, packageTier]);
  const canReviewEstimate = Boolean(packageTier || (discoveryContext && discoveryContext.recommendedTier !== 'unknown'));

  useLayoutConfig({
    layoutVariant: isHomeSecurity ? 'funnel' : 'sitewide',
    showBreadcrumbs: false,
    breadcrumb: [],
  });

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [bestTime, setBestTime] = useState('');
  const [needs, setNeeds] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [failureRequestId, setFailureRequestId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const summary = useMemo(
    () =>
      [
        `Name: ${name || '—'}`,
        `Phone: ${phone || '—'}`,
        `Email: ${email || '—'}`,
        `Address / ZIP: ${address || '—'}`,
        `Best time to contact: ${bestTime || '—'}`,
        `Needs: ${needs || '—'}`,
        `Notes: ${notes || '—'}`,
      ].join('\n'),
    [address, bestTime, email, name, needs, notes, phone],
  );

  const mailtoLink = useMemo(
    () =>
      buildTalkToUsMailto({
        pageRoute: `${location.pathname}${location.search}`,
        preferredCallbackTime: bestTime,
        phone,
        question: needs ? `Requesting help with: ${needs}.` : undefined,
        summary,
      }),
    [bestTime, location.pathname, location.search, needs, phone, summary],
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);
    setFailureRequestId(null);
    try {
      const response = await sendLeadSignal({
        event: 'qr_estimate_requested',
        sourceFamily: 'MAIN_SITE',
        source: 'contact_page',
        landingRoute: `${location.pathname}${location.search}`,
        vertical,
        submittedAt: new Date().toISOString(),
        contact: { fullName: name.trim(), phone: phone.trim(), email: email.trim(), address: { street: address.trim() } },
        request: { requestedHelp: needs.trim(), requestDetails: notes.trim() || undefined, preferredContactMethod: 'Phone call', preferredEstimateDate: new Date().toISOString().slice(0, 10), preferredEstimateTimeSlot: bestTime.trim() },
        deal: packageTier ? { packageTier } : undefined,
        discoveryContext: discoveryContext || undefined,
      });
      setSubmitted(true);
      setFailureRequestId(response?.requestId || null);
    } catch (submitError) {
      const cause = submitError instanceof Error ? (submitError.cause as Record<string, unknown> | undefined) : undefined;
      const requestId = typeof cause?.requestId === 'string' ? cause.requestId : null;
      setFailureRequestId(requestId);
      setError('We could not send your estimate request right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const content = (
    <>
      <h2 style={{ marginTop: 0 }}>Talk with {isHomeSecurity ? brandHomeSecurity : brandSite}</h2>
      <p style={{ maxWidth: 640 }}>
        Request your estimate here. Share a few details so we can recommend the right next step.
      </p>
      {!packageTierLabel && !discoveryContext && requestIntent === 'general-estimate' && !hasQrContext && (
        <div style={{ border: '1px solid var(--kaec-border)', borderRadius: 12, padding: '1rem', marginBottom: '1rem' }}>
          <p style={{ margin: '0 0 0.5rem', fontWeight: 600 }}>Choose how you want to start your estimate request</p>
          <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
            <li><Link to="/discovery?vertical=home-security">Find the right system first</Link></li>
            <li><Link to="/packages?vertical=home-security">Choose a package</Link></li>
            <li><Link to="/contact?vertical=home-security&estimateIntent=onsite-walkthrough">Request an on-site walkthrough estimate</Link></li>
          </ul>
        </div>
      )}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <a className="btn btn-secondary" href={mailtoLink}>Email us</a>
        <a className="btn btn-link" href={buildTel()}>
          Call {wnyhsContact.phone.display}
        </a>
        <a className="btn btn-link" href={buildSms('Hi! I’d like to talk about Home Security. Please call me back.')}>
          Text {wnyhsContact.phone.display}
        </a>
      </div>
      <form className="form" aria-label="Estimate request form" onSubmit={handleSubmit}>
        {packageTierLabel && (
          <div>
            <p style={{ margin: '0 0 0.5rem', fontWeight: 600 }}>Selected package estimate request: {packageTierLabel}</p>
          </div>
        )}
        {discoveryContext && (
          <div>
            <p style={{ margin: '0 0 0.5rem', fontWeight: 600 }}>Recommended system: {discoveryContext.recommendedTier === 'unknown' ? 'Unknown' : `${discoveryContext.recommendedTier.charAt(0).toUpperCase()}${discoveryContext.recommendedTier.slice(1)}`}</p>
            <p style={{ margin: '0 0 0.5rem' }}>Fit check: {discoveryContext.fitCheckCompleted ? 'Complete' : 'Not complete'}</p>
            <p style={{ margin: '0 0 0.5rem' }}>Property size: {discoveryContext.propertySize}</p>
            <p style={{ margin: '0 0 0.5rem' }}>Coverage need: {discoveryContext.coverageExpectation}</p>
            <p style={{ margin: '0 0 0.5rem' }}>Recording preference: {discoveryContext.recordingPreference}</p>
            <p style={{ margin: '0 0 0.5rem' }}>Priority concern: {discoveryContext.priorityConcerns}</p>
          </div>
        )}
        {requestIntent === 'onsite-walkthrough' && (
          <p style={{ margin: '0 0 0.5rem', fontWeight: 600 }}>On-site walkthrough estimate request</p>
        )}
        {hasQrContext && (
          <p style={{ margin: '0 0 0.5rem', fontWeight: 600 }}>QR / local flyer estimate request context detected</p>
        )}
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" value={name} onChange={(event) => setName(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="(555) 555-1212" value={phone} onChange={(event) => setPhone(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="address">Address / ZIP</label>
          <input id="address" name="address" type="text" placeholder="Street address, city, ZIP" value={address} onChange={(event) => setAddress(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="bestTime">Best time to contact</label>
          <input id="bestTime" name="bestTime" type="text" placeholder="Weekdays after 4pm" value={bestTime} onChange={(event) => setBestTime(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="needs">Needs</label>
          <select id="needs" name="needs" value={needs} onChange={(event) => setNeeds(event.target.value)} required>
            <option value="">Select need</option>
            <option value="new-install">New install</option>
            <option value="upgrade">Upgrade existing system</option>
            <option value="monitoring-optional">Optional monitoring evaluation</option>
            <option value="automation-add-ons">Automation add-ons</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Notes</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about entry points, rooms, or special needs."
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <button className="btn btn-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting…' : 'Request My Estimate'}</button>
          {canReviewEstimate && (
            <Link className="btn btn-secondary" to={reviewEstimateHref}>
              Review Estimate Summary
            </Link>
          )}
          {submitted && (
            <small style={{ color: 'var(--kaec-text-muted)' }}>
              Request received. Our team will follow up.
            </small>
          )}
          {error && <small style={{ color: 'var(--kaec-accent-danger)' }}>{error}{failureRequestId ? ` (${failureRequestId})` : ''}</small>}
        </div>
      </form>
    </>
  );

  if (isHomeSecurity) {
    return (
      <WnyhsMarketingLayout ctaLink="/discovery?vertical=home-security">
        <div className="wnyhs-marketing-stack">{content}</div>
      </WnyhsMarketingLayout>
    );
  }

  return <div className="container section">{content}</div>;
};

export default Contact;
