import { useEffect, useMemo, useRef } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { sendLeadSignal } from '../lib/hubspotLeadSignal';
import WnyhsSiteFooter from '../components/homeSecurity/WnyhsSiteFooter';
import CanonicalEstimateRequestForm from '../components/CanonicalEstimateRequestForm';
import '../styles/qrLanding.css';

const REQUEST_ID_STORAGE_KEY = 'qrlanding_request_id_v1';
const createQrRuntimeRequestId = () => `qrlanding_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
const getOrCreateQrRuntimeRequestId = () => {
  if (typeof window === 'undefined') return createQrRuntimeRequestId();
  const existing = window.sessionStorage.getItem(REQUEST_ID_STORAGE_KEY);
  if (existing) return existing;
  const next = createQrRuntimeRequestId(); window.sessionStorage.setItem(REQUEST_ID_STORAGE_KEY, next); return next;
};
const allowedSrcValues = new Set(['placard', 'card', 'sticker', 'vehicle', 'yard-sign', 'referral']);

const QrLanding = () => {
  const [searchParams] = useSearchParams();
  const qrRuntimeRequestId = useMemo(() => getOrCreateQrRuntimeRequestId(), []);
  const hasTrackedStartRef = useRef(false);
  const normalizedSource = useMemo(() => {
    const src = (searchParams.get('src') || '').toLowerCase().trim();
    return allowedSrcValues.has(src) ? src : 'QR_SCAN_GENERAL';
  }, [searchParams]);

  useEffect(() => {
    const timestamp = new Date().toISOString();
    void sendLeadSignal({ event: 'qrlanding_view', eventName: 'qrlanding_view', requestId: qrRuntimeRequestId, timestamp, submittedAt: timestamp, entryRoute: '/qrlanding', landingRoute: '/qrlanding' }).catch(() => undefined);
  }, [qrRuntimeRequestId]);

  const trackEstimateFormStarted = () => {
    if (hasTrackedStartRef.current) return;
    hasTrackedStartRef.current = true;
    const timestamp = new Date().toISOString();
    void sendLeadSignal({ event: 'estimate_form_started', eventName: 'estimate_form_started', requestId: qrRuntimeRequestId, timestamp, submittedAt: timestamp, entryRoute: '/qrlanding', landingRoute: '/qrlanding' }).catch(() => undefined);
  };

  return (<div className="qr-page-shell"><header className="qr-topbar"><a href="/qrlanding" className="qr-brand"><img src="/brand/crest-system/IconizedLogo.png" alt="WNY Home Security" /><span>WNY Home Security</span></a><nav><a href="/packages?vertical=home-security">View Packages</a><a href="/our-work?vertical=home-security">See Our Work</a><a href="tel:+17162010364">Call/Text</a><a href="#qr-estimate-form">Schedule Estimate</a></nav></header><main className="qr-landing">
    <section className="qr-panel qr-hero"><div className="qr-hero-copy"><p className="qr-kicker">Local home security planning</p><h1>Practical Home Security for Western New York</h1><p>Start with a quick call or request an on-site estimate. We'll review your request and help you choose a practical next step.</p><a className="qr-cta qr-hero-cta" href="#qr-estimate-form">Choose how to start</a></div><img src="/brand/heros/HomePageHero.png" alt="Home security installation" className="qr-hero-image"/></section>
    <section className="qr-panel qr-intake-panel" id="qr-estimate-form"><h2>Choose how you'd like to get started</h2><p className="qr-sub">Fast callback or on-site estimate request. This form starts a request; scheduling is reviewed before anything is set.</p><CanonicalEstimateRequestForm entryRoute="/qrlanding" sourceFamily="QR_SCAN" source={normalizedSource} landingRoute="/qrlanding" requestId={qrRuntimeRequestId} submitEventName="estimate_form_submitted" onFirstInteraction={trackEstimateFormStarted} enableIntakeSplit requirePathSelection compactEstimate context={{ campaignFamily: 'physical_canvassing', assetSource: searchParams.get('src') || undefined }} /></section>
  </main><WnyhsSiteFooter /></div>);
};

export const QrLandingAlias = () => <Navigate to="/qrlanding" replace />;
export default QrLanding;
