import { captureUtmParams, getLandingPath, getPreferredStorage, getStoredUtmParams } from './utm';

type AudienceType = 'senior' | 'family' | 'agency';

type GaEventName = 'rec_view_landing' | 'rec_click_cta';

type GaEventPayload = {
  audience_type: AudienceType;
  region: 'wny';
  landing_path: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    // eslint-disable-next-line no-unused-vars
    gtag?: (..._args: unknown[]) => void;
  }
}

const isGaEnabled = import.meta.env.VITE_ENABLE_GA4 === 'true';
const inMemoryLoggedViews = new Set<string>();

const emitEvent = (eventName: GaEventName, payload: GaEventPayload) => {
  if (import.meta.env.DEV) {
    console.info(`[${eventName}]`, payload);
  }

  if (!isGaEnabled) {
    return;
  }

  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
  }
};

const buildPayload = (
  audienceType: AudienceType,
  landingPathOverride?: string,
): GaEventPayload => {
  const utm =
    getStoredUtmParams() ??
    captureUtmParams({
      pathname: typeof window !== 'undefined' ? window.location.pathname : landingPathOverride ?? '/',
      search: typeof window !== 'undefined' ? window.location.search : '',
    });

  const landing_path = getLandingPath() ?? landingPathOverride ?? (typeof window !== 'undefined' ? window.location.pathname : '/');

  return {
    audience_type: audienceType,
    region: 'wny',
    landing_path,
    ...(utm ?? {}),
  };
};

const hasLoggedView = (audienceType: AudienceType, landingPath: string) => {
  const key = `rec_viewed_${audienceType}_${landingPath}`;

  if (inMemoryLoggedViews.has(key)) {
    return true;
  }

  const storage = getPreferredStorage();

  if (storage?.getItem(key)) {
    return true;
  }

  if (storage) {
    try {
      storage.setItem(key, '1');
    } catch (error) {
      console.warn('Unable to mark landing view', error);
    }
  }

  inMemoryLoggedViews.add(key);
  return false;
};

export const trackLandingView = (audienceType: AudienceType, landingPath?: string) => {
  const landing_path = landingPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
  if (hasLoggedView(audienceType, landing_path)) {
    return;
  }

  const payload = buildPayload(audienceType, landing_path);
  emitEvent('rec_view_landing', payload);
};

export const trackLandingCtaClick = (audienceType: AudienceType, landingPath?: string) => {
  const landing_path = landingPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
  const payload = buildPayload(audienceType, landing_path);
  emitEvent('rec_click_cta', payload);
};

export const track = (eventName: string, props?: Record<string, string | number | boolean>) => {
  const payload = props ?? {};

  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
    return;
  }

  if (import.meta.env.DEV) {
    console.info(`[${eventName}]`, payload);
  }
};
