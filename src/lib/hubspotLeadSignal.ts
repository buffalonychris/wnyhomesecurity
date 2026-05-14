import { getStoredUtmParams } from './utm';

export const buildAttributionPayload = () => {
  if (typeof window === 'undefined') return {};
  const utm = getStoredUtmParams() as any;
  return {
    originPage: utm?.landing_path,
    latestPage: window.location.pathname,
    referrerUrl: document.referrer || undefined,
    utmSourceFirst: utm?.utm_source,
    utmMediumFirst: utm?.utm_medium,
    utmCampaignFirst: utm?.utm_campaign,
    utmContentFirst: utm?.utm_content,
    utmTermFirst: utm?.utm_term,
    gclid: utm?.gclid,
    gbraid: utm?.gbraid,
    wbraid: utm?.wbraid,
    msclkid: utm?.msclkid,
    fbclid: utm?.fbclid,
    ttclid: utm?.ttclid,
  };
};

export const sendLeadSignal = async (payload: Record<string, unknown>) => {
  const response = await fetch('/api/lead-signal', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...payload,
      attribution: buildAttributionPayload(),
      route: typeof window !== 'undefined' ? window.location.pathname : undefined,
    }),
  });
  const responseBody = await response.json().catch(() => null);
  if (!response.ok) {
    const requestId = responseBody?.requestId ? ` (requestId ${responseBody.requestId})` : '';
    const message = responseBody?.userMessage || `lead signal failed with status ${response.status}${requestId}`;
    if (import.meta.env.DEV) console.warn(message);
    throw new Error(message, { cause: responseBody });
  }
  if (import.meta.env.DEV) console.info('lead signal submitted', { status: response.status, requestId: responseBody?.requestId });
  return responseBody;
};

export const sendFitCheckCompleted = (payload: Record<string, unknown>) => sendLeadSignal({ event: 'fit_check_completed', ...payload });
export const sendWalkthroughRequested = (payload: Record<string, unknown>) => sendLeadSignal({ event: 'walkthrough_requested', ...payload });
export const sendWalkthroughScheduled = (payload: Record<string, unknown>) => sendLeadSignal({ event: 'walkthrough_scheduled', ...payload });
export const sendQuoteGenerated = (payload: Record<string, unknown>) => sendLeadSignal({ event: 'quote_generated', ...payload });
export const sendAgreementAccepted = (payload: Record<string, unknown>) => sendLeadSignal({ event: 'agreement_accepted', ...payload });
export const sendInstallScheduled = (payload: Record<string, unknown>) => sendLeadSignal({ event: 'install_scheduled', ...payload });
