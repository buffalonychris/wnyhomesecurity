import { SCHEDULING_STATUSES, buildSchedulingBoundaryDiagnostics } from './_boundary';
import { confirmAppointmentRequestByRequestId } from './appointmentRequestStore';

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const onRequest: PagesFunction = async ({ request }) => {
  if (request.method !== 'POST') {
    return json({ ok: false, errorCode: 'METHOD_NOT_ALLOWED', userMessage: 'Unsupported request method.' }, 405);
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, errorCode: 'INVALID_JSON', userMessage: 'Invalid owner confirmation payload.' }, 400);
  }

  const requestId = typeof body.requestId === 'string' && body.requestId.trim().length > 0 ? body.requestId.trim() : undefined;
  if (!requestId) {
    return json({ ok: false, errorCode: 'MISSING_REQUEST_ID', userMessage: 'requestId is required.' }, 400);
  }

  const confirmedBy = typeof body.confirmedBy === 'string' && body.confirmedBy.trim().length > 0 ? body.confirmedBy.trim() : undefined;
  if (!confirmedBy) {
    return json({ ok: false, errorCode: 'MISSING_CONFIRMED_BY', userMessage: 'confirmedBy is required for owner confirmation.' }, 400);
  }

  const appointmentRequest = confirmAppointmentRequestByRequestId({ requestId, confirmedBy });
  if (!appointmentRequest) {
    return json({ ok: false, errorCode: 'REQUEST_NOT_FOUND', userMessage: 'No appointment request exists for the provided requestId.' }, 404);
  }

  return json({
    ok: true,
    requestId,
    schedulingStatus: SCHEDULING_STATUSES.CONFIRMED,
    appointmentRequest,
    message: 'Estimate appointment request confirmed by owner action.',
    boundaries: buildSchedulingBoundaryDiagnostics(),
  });
};
