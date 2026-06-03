import { useEffect, useMemo } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { sendLeadSignal } from '../lib/hubspotLeadSignal';
import WnyhsSiteFooter from '../components/homeSecurity/WnyhsSiteFooter';
import { buildTel } from '../content/wnyhsContact';
import '../styles/qrLanding.css';

const REQUEST_ID_STORAGE_KEY = 'qrlanding_request_id_v1';
const createQrRequestId = () => `qrlanding_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
const getOrCreateQrRequestId = () => {
  if (typeof window === 'undefined') return createQrRequestId();
  const existing = window.sessionStorage.getItem(REQUEST_ID_STORAGE_KEY);
  if (existing) return existing;
  const next = createQrRequestId(); window.sessionStorage.setItem(REQUEST_ID_STORAGE_KEY, next); return next;
};
const allowedSrcValues = new Set(['placard', 'card', 'sticker', 'vehicle', 'yard-sign', 'referral']);

const QrLanding = () => {
  const [searchParams] = useSearchParams();
  const qrRequestId = useMemo(() => getOrCreateQrRequestId(), []);
  const normalizedSource = useMemo(() => {
    const src = (searchParams.get('src') || '').toLowerCase().trim();
    return allowedSrcValues.has(src) ? src : 'QR_SCAN_GENERAL';
  }, [searchParams]);
  const callbackHref = `/contact?vertical=home-security&source=${encodeURIComponent(normalizedSource)}`;

  useEffect(() => {
    const timestamp = new Date().toISOString();
    void sendLeadSignal({ event: 'qrlanding_view', eventName: 'qrlanding_view', requestId: qrRequestId, timestamp, submittedAt: timestamp, entryRoute: '/qrlanding', landingRoute: '/qrlanding' }).catch(() => undefined);
  }, [qrRequestId]);

  return (
    <div className="qr-page-shell">
      <header className="qr-topbar">
        <a href="/qrlanding" className="qr-brand">
          <img src="/brand/crest-system/IconizedLogo.png" alt="WNY Home Security" />
          <span>WNY Home Security</span>
        </a>
        <nav>
          <a href="/packages?vertical=home-security">View Solutions</a>
          <a href="/our-work?vertical=home-security">See Our Work</a>
          <a href={buildTel()}>Call/Text 716-201-0364</a>
          <a href={callbackHref}>Request a Callback</a>
        </nav>
      </header>
      <main className="qr-landing">
        <section className="qr-panel qr-hero">
          <div className="qr-hero-copy">
            <p className="qr-kicker">Protect What Matters</p>
            <h1>Cameras, Video Doorbells, and Package Theft Protection</h1>
            <p>
              Scanned a WNY Home Security sign? You're in the right place. We install practical security and
              smart-property solutions for homes and small businesses throughout Western New York.
            </p>
            <div className="qr-hero-actions">
              <a className="btn btn-primary" href={callbackHref}>
                Request a Callback
              </a>
              <span className="qr-cta-or">OR</span>
              <a className="btn btn-secondary" href={buildTel()}>
                Call/Text 716-201-0364
              </a>
            </div>
          </div>
          <img src="/brand/heros/HomePageHero.png" alt="Home security installation" className="qr-hero-image" />
        </section>

        <section className="qr-panel qr-next-panel" aria-labelledby="qr-next-heading">
          <div className="qr-section-header">
            <h2 id="qr-next-heading">What Happens Next</h2>
          </div>
          <div className="qr-next-card-grid">
            <article className="qr-next-card">
              <h3>Request a Callback</h3>
              <p>Tell us what you're looking to protect and the best way to reach you.</p>
            </article>
            <article className="qr-next-card">
              <h3>Talk Through Your Property</h3>
              <p>We'll ask a few questions and help determine the best next step for your property.</p>
            </article>
            <article className="qr-next-card">
              <h3>Schedule If It Makes Sense</h3>
              <p>If an on-site estimate is needed, we'll confirm the date and time before anything is scheduled.</p>
            </article>
          </div>
        </section>
      </main>
      <WnyhsSiteFooter />
    </div>
  );
};

export const QrLandingAlias = () => <Navigate to="/qrlanding" replace />;
export default QrLanding;
