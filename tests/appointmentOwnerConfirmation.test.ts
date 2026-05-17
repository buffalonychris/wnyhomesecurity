import { beforeEach, describe, expect, it } from 'vitest';
import { SCHEDULING_STATUSES } from '../functions/api/scheduling/_boundary';
import { createPendingOwnerConfirmationAppointmentRequest, getAppointmentRequestByRequestId, resetAppointmentRequestStoreForTests } from '../functions/api/scheduling/appointmentRequestStore';
import { onRequest as confirmAppointmentRequest } from '../functions/api/scheduling/confirm';

const callConfirmEndpoint = async (payload: Record<string, unknown>) =>
  confirmAppointmentRequest({
    request: new Request('http://localhost/api/scheduling/confirm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }),
  } as Parameters<typeof confirmAppointmentRequest>[0]);

describe('owner confirmation state transition', () => {
  beforeEach(() => {
    resetAppointmentRequestStoreForTests();
  });

  it('transitions request from pending owner confirmation to confirmed only after owner action', async () => {
    const requestId = 'lead_confirm_001';
    createPendingOwnerConfirmationAppointmentRequest({
      requestId,
      event: 'qr_estimate_requested',
      preferredWindowText: '2026-05-22 — Afternoon',
    });

    const response = await callConfirmEndpoint({ requestId, confirmedBy: 'owner@example.com' });
    const payload = (await response.json()) as Record<string, unknown>;
    const appointmentRequest = payload.appointmentRequest as Record<string, unknown>;

    expect(response.status).toBe(200);
    expect(payload.schedulingStatus).toBe(SCHEDULING_STATUSES.CONFIRMED);
    expect(appointmentRequest.schedulingStatus).toBe(SCHEDULING_STATUSES.CONFIRMED);
  });

  it('records confirmedBy and confirmedAt audit fields', async () => {
    const requestId = 'lead_confirm_002';
    createPendingOwnerConfirmationAppointmentRequest({
      requestId,
      event: 'qr_estimate_requested',
      preferredWindowText: '2026-05-23 — Morning',
    });

    await callConfirmEndpoint({ requestId, confirmedBy: 'scheduler.owner@wnyhs.local' });
    const stored = getAppointmentRequestByRequestId(requestId);

    expect(stored?.confirmedBy).toBe('scheduler.owner@wnyhs.local');
    expect(stored?.confirmedAt).toBeDefined();
    expect(Number.isNaN(Date.parse(stored?.confirmedAt || ''))).toBe(false);
  });

  it('returns not found for invalid requestId handling', async () => {
    const response = await callConfirmEndpoint({ requestId: 'missing_request', confirmedBy: 'owner@example.com' });
    const payload = (await response.json()) as Record<string, unknown>;

    expect(response.status).toBe(404);
    expect(payload.ok).toBe(false);
    expect(payload.errorCode).toBe('REQUEST_NOT_FOUND');
  });

  it('preserves no auto-confirm behavior before owner action', () => {
    const requestId = 'lead_confirm_003';
    const created = createPendingOwnerConfirmationAppointmentRequest({
      requestId,
      event: 'qr_estimate_requested',
      preferredWindowText: '2026-05-24 — Midday',
    });

    expect(created.schedulingStatus).toBe(SCHEDULING_STATUSES.PENDING_OWNER_CONFIRMATION);
    expect(created.confirmedBy).toBeUndefined();
    expect(created.confirmedAt).toBeUndefined();
  });
});
