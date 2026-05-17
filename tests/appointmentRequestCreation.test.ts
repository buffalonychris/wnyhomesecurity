import { beforeEach, describe, expect, it } from 'vitest';
import { createPendingOwnerConfirmationAppointmentRequest, getAppointmentRequestByRequestId, resetAppointmentRequestStoreForTests } from '../functions/api/scheduling/appointmentRequestStore';
import { SCHEDULING_STATUSES } from '../functions/api/scheduling/_boundary';

describe('appointment request creation', () => {
  beforeEach(() => {
    resetAppointmentRequestStoreForTests();
  });

  it('creates appointment request tied to requestId in pending owner confirmation', () => {
    const requestId = 'lead_test_123';
    const created = createPendingOwnerConfirmationAppointmentRequest({
      requestId,
      event: 'qr_estimate_requested',
      preferredEstimateDate: '2026-05-21',
      preferredEstimateTimeSlot: 'Morning',
      preferredWindowText: '2026-05-21 — Morning',
    });

    const stored = getAppointmentRequestByRequestId(requestId);
    expect(stored).toBeDefined();
    expect(stored?.requestId).toBe(requestId);
    expect(stored?.schedulingStatus).toBe(SCHEDULING_STATUSES.PENDING_OWNER_CONFIRMATION);
    expect(created.source).toBe('lead_signal');
  });

  it('does not claim confirmed booking states', () => {
    const created = createPendingOwnerConfirmationAppointmentRequest({
      requestId: 'lead_test_456',
      event: 'qr_estimate_requested',
      preferredWindowText: '',
    });

    expect(created.schedulingStatus).not.toBe('CONFIRMED');
    expect(created.schedulingStatus).not.toBe('REQUESTED');
  });
});
