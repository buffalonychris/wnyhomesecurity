import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { getAppointmentRequestByRequestId, resetAppointmentRequestStoreForTests } from './scheduling/appointmentRequestStore';
import { onRequest } from './lead-signal';

const configuredEnv = {
  NODE_ENV: 'test',
  HUBSPOT_PRIVATE_APP_TOKEN: 'test-hubspot-token',
  HUBSPOT_ESTIMATE_INITIAL_STAGE_ID: '3680633583',
  RESEND_API_KEY: 'test-resend-token',
  RESEND_FROM_EMAIL: 'sender@example.test',
  LEAD_SIGNAL_TO_EMAIL: 'operator@example.test',
  LEAD_SIGNAL_AUDIT_EMAIL: 'audit@example.test',
};

const actionablePayload = (event: 'qr_estimate_requested' | 'callback_requested') => ({
  event,
  route: '/test-intake',
  submittedAt: '2026-09-25T12:00:00.000Z',
  contact: { fullName: 'Test Customer', phone: '716-555-0100', email: 'customer@example.test' },
  request: {
    requestedHelp: event === 'callback_requested' ? 'callback_request' : 'estimate_request',
    preferredEstimateDate: '2026-09-26',
    preferredEstimateTimeSlot: 'Morning',
  },
});

const invoke = async (body: unknown, env: Record<string, unknown> = configuredEnv) => {
  const request = new Request('https://example.test/api/lead-signal', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const response = await onRequest({ request, env } as any);
  return { response, body: await response.json() as any };
};

const hubspotSuccessResponse = (url: string, init?: RequestInit) => {
  if (url.includes('/contacts/search')) return new Response(JSON.stringify({ results: [{ id: 'contact-1', properties: {} }] }), { status: 200 });
  if (url.includes('/deals/search')) return new Response(JSON.stringify({ results: [{ id: 'deal-1' }] }), { status: 200 });
  if (url.includes('/tasks/search')) return new Response(JSON.stringify({ results: [{ id: 'task-1' }] }), { status: 200 });
  if (url.includes('/crm/v3/objects/')) return new Response(JSON.stringify({ id: init?.method === 'POST' ? 'created-1' : 'updated-1' }), { status: 200 });
  return new Response(JSON.stringify({}), { status: 200 });
};

const installSuccessfulFetch = (resendStatuses: number[] = [200, 200]) => {
  const fetchMock = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    if (url === 'https://api.resend.com/emails') {
      const status = resendStatuses.shift() ?? 200;
      return new Response(status === 200 ? JSON.stringify({ id: 'email-1' }) : 'provider failure', { status });
    }
    return hubspotSuccessResponse(url, init);
  });
  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
};

describe('lead-signal reliability policy', () => {
  beforeEach(() => {
    resetAppointmentRequestStoreForTests();
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('exports the production Cloudflare handler', () => {
    expect(typeof onRequest).toBe('function');
  });

  it.each(['qrlanding_view', 'estimate_form_started', 'fit_check_completed', 'quote_generated'])('%s remains accepted without actionable side effects', async (event) => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

    const result = await invoke({ event, eventName: event, requestId: 'browser-attribution-id' });

    expect(result.response.status).toBe(200);
    expect(result.body).toMatchObject({
      ok: true,
      eventCategory: 'telemetry',
      notification: { attempted: false, status: 'not_eligible' },
      customerAcknowledgement: { attempted: false, status: 'not_eligible' },
      hubspot: { attempted: false, status: 'not_eligible' },
    });
    expect(result.body.requestId).toMatch(/^lead_/);
    expect(result.body.requestId).not.toBe('browser-attribution-id');
    expect(fetchMock).not.toHaveBeenCalled();
    expect(await getAppointmentRequestByRequestId(result.body.requestId)).toBeUndefined();
  });

  it.each(['qr_estimate_requested', 'callback_requested'] as const)('%s retains durable CRM persistence and actionable notifications', async (event) => {
    const fetchMock = installSuccessfulFetch();

    const result = await invoke(actionablePayload(event));

    expect(result.response.status).toBe(200);
    expect(result.body).toMatchObject({
      ok: true,
      eventCategory: 'actionable',
      notification: { attempted: true, status: 'sent' },
      customerAcknowledgement: { attempted: true, status: 'sent' },
    });
    expect(['synced', 'partial']).toContain(result.body.hubspot.status);
    const urls = fetchMock.mock.calls.map(([input]) => String(input));
    const firstResendIndex = urls.indexOf('https://api.resend.com/emails');
    const lastHubspotIndex = urls.reduce((last, url, index) => url.startsWith('https://api.hubapi.com') ? index : last, -1);
    expect(firstResendIndex).toBeGreaterThan(lastHubspotIndex);

    const appointment = await getAppointmentRequestByRequestId(result.body.requestId);
    if (event === 'qr_estimate_requested') {
      expect(appointment?.schedulingStatus).toBe('PENDING_OWNER_CONFIRMATION');
      expect(result.body.schedulingStatus).toBe('PENDING_OWNER_CONFIRMATION');
    } else {
      expect(appointment).toBeUndefined();
      expect(result.body.schedulingStatus).toBeUndefined();
    }
  });

  it('keeps the dedicated callback page on callback semantics', () => {
    const source = readFileSync(resolve(__dirname, '../../src/newsite/pages/NewSiteCallback.tsx'), 'utf8');
    expect(source).toContain("event: 'callback_requested'");
    expect(source).not.toContain("event: 'qr_estimate_requested'");
  });

  it('returns a safe correlated failure before scheduling or email when required HubSpot persistence fails', async () => {
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input);
      if (url.includes('/contacts/search')) return new Response(JSON.stringify({ category: 'AUTHENTICATION_ERROR', message: 'provider detail' }), { status: 401 });
      return new Response(JSON.stringify({}), { status: 200 });
    });
    vi.stubGlobal('fetch', fetchMock);

    const result = await invoke(actionablePayload('qr_estimate_requested'));

    expect(result.response.status).toBe(503);
    expect(result.body).toMatchObject({ ok: false, errorCode: 'LEAD_PERSISTENCE_FAILED' });
    expect(result.body.requestId).toMatch(/^lead_/);
    expect(result.body).not.toHaveProperty('hubspot');
    expect(JSON.stringify(result.body)).not.toContain('provider detail');
    expect(fetchMock.mock.calls.some(([input]) => String(input) === 'https://api.resend.com/emails')).toBe(false);
    expect(await getAppointmentRequestByRequestId(result.body.requestId)).toBeUndefined();
  });

  it('keeps normal success after durable persistence when operator email fails', async () => {
    installSuccessfulFetch([502, 200]);

    const result = await invoke(actionablePayload('qr_estimate_requested'));

    expect(result.response.status).toBe(200);
    expect(result.body).toMatchObject({ ok: true, notification: { status: 'failed' }, customerAcknowledgement: { status: 'sent' } });
  });

  it('keeps normal success after durable persistence when customer acknowledgement fails', async () => {
    installSuccessfulFetch([200, 502]);

    const result = await invoke(actionablePayload('callback_requested'));

    expect(result.response.status).toBe(200);
    expect(result.body).toMatchObject({ ok: true, notification: { status: 'sent' }, customerAcknowledgement: { status: 'failed' } });
  });

  it('rejects unknown events without side effects and preserves requestId correlation', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

    const result = await invoke({ event: 'unknown_event' });

    expect(result.response.status).toBe(400);
    expect(result.body).toMatchObject({ ok: false, errorCode: 'INVALID_QR_LEAD_PAYLOAD' });
    expect(result.body.requestId).toMatch(/^lead_/);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('rejects a malformed event payload before side effects', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

    const result = await invoke({ eventName: 'qrlanding_view' });

    expect(result.response.status).toBe(400);
    expect(result.body).toMatchObject({ ok: false, errorCode: 'INVALID_QR_LEAD_PAYLOAD' });
    expect(result.body.requestId).toMatch(/^lead_/);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
