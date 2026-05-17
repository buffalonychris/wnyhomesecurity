import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { SCHEDULING_STATUSES } from '../functions/api/scheduling/_boundary';
import { createPendingOwnerConfirmationAppointmentRequest, getAppointmentRequestByRequestId, resetAppointmentRequestStoreForTests } from '../functions/api/scheduling/appointmentRequestStore';
import { onRequest as confirmAppointmentRequest } from '../functions/api/scheduling/confirm';

const callConfirmEndpoint = async (payload: Record<string, unknown>, env: Record<string, string | undefined> = {}) =>
  confirmAppointmentRequest({
    request: new Request('http://localhost/api/scheduling/confirm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }),
    env,
  } as Parameters<typeof confirmAppointmentRequest>[0]);

describe('owner confirmation state transition', () => {
  beforeEach(() => {
    resetAppointmentRequestStoreForTests();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('transitions request from pending owner confirmation to confirmed only after owner action', async () => {
    const requestId = 'lead_confirm_001';
    await createPendingOwnerConfirmationAppointmentRequest({
      requestId,
      event: 'qr_estimate_requested',
      preferredWindowText: '2026-05-22 — Afternoon',
    });

    const fetchMock = vi.spyOn(globalThis, 'fetch');
    const response = await callConfirmEndpoint({ requestId, confirmedBy: 'owner@example.com' });
    const payload = (await response.json()) as Record<string, unknown>;
    const appointmentRequest = payload.appointmentRequest as Record<string, unknown>;

    expect(response.status).toBe(200);
    expect(payload.schedulingStatus).toBe(SCHEDULING_STATUSES.CONFIRMED);
    expect(appointmentRequest.schedulingStatus).toBe(SCHEDULING_STATUSES.CONFIRMED);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('records confirmedBy and confirmedAt audit fields', async () => {
    const requestId = 'lead_confirm_002';
    await createPendingOwnerConfirmationAppointmentRequest({
      requestId,
      event: 'qr_estimate_requested',
      preferredWindowText: '2026-05-23 — Morning',
    });

    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response('{}', { status: 500 }));
    await callConfirmEndpoint({ requestId, confirmedBy: 'scheduler.owner@wnyhs.local' });
    const stored = await getAppointmentRequestByRequestId(requestId);

    expect(stored?.confirmedBy).toBe('scheduler.owner@wnyhs.local');
    expect(stored?.confirmedAt).toBeDefined();
    expect(Number.isNaN(Date.parse(stored?.confirmedAt || ''))).toBe(false);
  });

  it('persists calendar event metadata when calendar creation succeeds and includes calendar link in confirmation email', async () => {
    const requestId = 'lead_confirm_200';
    await createPendingOwnerConfirmationAppointmentRequest({ requestId, event: 'qr_estimate_requested', preferredWindowText: '2026-05-23 — Morning', preferredEstimateDate: '2026-05-23' });

    const fetchMock = vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response(JSON.stringify({ access_token: 'test_token' }), { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ id: 'evt_123', htmlLink: 'https://calendar.google.com/event?eid=123', created: '2026-05-20T10:00:00.000Z' }), { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ id: 'email_123' }), { status: 200 }));

    await callConfirmEndpoint({ requestId, confirmedBy: 'owner@example.com', customerName: 'Taylor', customerEmail: 'taylor@example.com' }, {
      GOOGLE_CLIENT_ID: 'id', GOOGLE_CLIENT_SECRET: 'secret', GOOGLE_REFRESH_TOKEN: 'refresh', GOOGLE_CALENDAR_ID: 'calendar-id',
      RESEND_API_KEY: 'rk',
      RESEND_FROM_EMAIL: 'scheduler@wnyhomesecurity.com',
    });
    const stored = await getAppointmentRequestByRequestId(requestId);
    expect(stored?.calendarEventId).toBe('evt_123');
    expect(stored?.calendarEventHtmlLink).toContain('calendar.google.com');
    expect(stored?.calendarEventCreatedAt).toBe('2026-05-20T10:00:00.000Z');
    const resendPayload = JSON.parse(fetchMock.mock.calls[2][1]?.body as string);
    expect(resendPayload.text).toContain('Request ID: lead_confirm_200');
    expect(resendPayload.text).toContain('Calendar event link: https://calendar.google.com/event?eid=123');
  });

  it('returns not found for invalid requestId handling and does not write calendar event or send email', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch');
    const response = await callConfirmEndpoint({ requestId: 'missing_request', confirmedBy: 'owner@example.com' });
    const payload = (await response.json()) as Record<string, unknown>;

    expect(response.status).toBe(404);
    expect(payload.ok).toBe(false);
    expect(payload.errorCode).toBe('REQUEST_NOT_FOUND');
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('preserves confirmed status if calendar event write fails after confirmation and email send fails', async () => {
    const requestId = 'lead_confirm_003';
    await createPendingOwnerConfirmationAppointmentRequest({ requestId, event: 'qr_estimate_requested', preferredWindowText: '2026-05-24 — Midday' });

    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response('{}', { status: 500 }));
    await callConfirmEndpoint(
      { requestId, confirmedBy: 'owner@example.com', customerEmail: 'customer@example.com', customerName: 'Alex' },
      { RESEND_API_KEY: 'rk', RESEND_FROM_EMAIL: 'scheduler@wnyhomesecurity.com' },
    );
    const stored = await getAppointmentRequestByRequestId(requestId);

    expect(stored?.schedulingStatus).toBe(SCHEDULING_STATUSES.CONFIRMED);
    expect(stored?.confirmedBy).toBe('owner@example.com');
    expect(stored?.calendarEventId).toBeUndefined();
  });

  it('fails calendar write safely on missing google env after confirmation and excludes unavailable calendar invite claim', async () => {
    const requestId = 'lead_confirm_004';
    await createPendingOwnerConfirmationAppointmentRequest({ requestId, event: 'qr_estimate_requested', preferredWindowText: '2026-05-25 — Midday' });

    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({ id: 'email_123' }), { status: 200 }));
    const response = await callConfirmEndpoint(
      { requestId, confirmedBy: 'owner@example.com', customerEmail: 'customer@example.com', customerName: 'Jordan' },
      { RESEND_API_KEY: 'rk', RESEND_FROM_EMAIL: 'scheduler@wnyhomesecurity.com' },
    );
    const payload = (await response.json()) as Record<string, any>;

    expect(response.status).toBe(200);
    expect(payload.schedulingStatus).toBe(SCHEDULING_STATUSES.CONFIRMED);
    expect(payload.calendarWrite.ok).toBe(false);
    expect(payload.calendarWrite.errorCode).toBe('GOOGLE_CALENDAR_CONFIG_MISSING');
    const resendPayload = JSON.parse(fetchMock.mock.calls[0][1]?.body as string);
    expect(resendPayload.text).toContain('Calendar event link: not available for this confirmation.');
  });
});
