import { SCHEDULING_STATUSES, buildSchedulingBoundaryDiagnostics, extractSchedulingRequestSummary } from './_boundary';
import { createPendingOwnerConfirmationAppointmentRequest } from './appointmentRequestStore';

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const onRequest: PagesFunction = async ({ request }) => {
  if (request.method !== 'POST') {
    return json({ ok: false, errorCode: 'METHOD_NOT_ALLOWED', userMessage: 'Unsupported request method.' }, 405);
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, errorCode: 'INVALID_JSON', userMessage: 'Invalid scheduling request payload.' }, 400);
  }

  const requestId = typeof body.requestId === 'string' && body.requestId.trim().length > 0 ? body.requestId.trim() : undefined;
  if (!requestId) {
    return json({ ok: false, errorCode: 'MISSING_REQUEST_ID', userMessage: 'requestId is required.' }, 400);
  }

  const schedulingSummary = extractSchedulingRequestSummary((body.request as Record<string, unknown>) ?? undefined);
  const appointmentRequest = createPendingOwnerConfirmationAppointmentRequest({
    requestId,
    event: typeof body.event === 'string' ? body.event : 'scheduling_request_created',
    preferredEstimateDate: schedulingSummary.preferredEstimateDate,
    preferredEstimateTimeSlot: schedulingSummary.preferredEstimateTimeSlot,
    preferredWindowText: schedulingSummary.preferredWindowText,
  });

  return json({
    ok: true,
    requestId,
    schedulingStatus: SCHEDULING_STATUSES.PENDING_OWNER_CONFIRMATION,
    appointmentRequest,
    message: 'Estimate appointment request captured and pending owner confirmation.',
    boundaries: buildSchedulingBoundaryDiagnostics(),
  });
};
