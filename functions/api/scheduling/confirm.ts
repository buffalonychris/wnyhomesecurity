import { SCHEDULING_STATUSES, buildSchedulingBoundaryDiagnostics } from './_boundary';
import { attachCalendarEventMetadataByRequestId, confirmAppointmentRequestByRequestId } from './appointmentRequestStore';
import { createGoogleCalendarEventAfterConfirmation } from './googleCalendarEvents';

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const onRequest: PagesFunction = async ({ request, env }) => {
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

  const appointmentRequest = await confirmAppointmentRequestByRequestId({ requestId, confirmedBy, env });
  if (!appointmentRequest) {
    return json({ ok: false, errorCode: 'REQUEST_NOT_FOUND', userMessage: 'No appointment request exists for the provided requestId.' }, 404);
  }

  const timezone = 'America/New_York';
  const start = appointmentRequest.preferredEstimateDate
    ? new Date(`${appointmentRequest.preferredEstimateDate}T14:00:00-04:00`).toISOString()
    : new Date().toISOString();
  const end = new Date(new Date(start).getTime() + 60 * 60 * 1000).toISOString();

  const calendarWrite = await createGoogleCalendarEventAfterConfirmation({
    env,
    requestId,
    summary: `WNYHS Estimate Request ${requestId}`,
    description: [
      `requestId: ${requestId}`,
      `preferredWindow: ${appointmentRequest.preferredWindowText}`,
      `ownerConfirmedBy: ${confirmedBy}`,
    ].join(' | '),
    start,
    end,
    timezone,
  });

  let updatedAppointmentRequest = appointmentRequest;
  if (calendarWrite.ok) {
    const storedWithCalendar = await attachCalendarEventMetadataByRequestId({
      requestId,
      calendarEventId: calendarWrite.calendarEventId,
      calendarEventHtmlLink: calendarWrite.calendarEventHtmlLink,
      calendarEventCreatedAt: calendarWrite.calendarEventCreatedAt,
      env,
    });
    if (storedWithCalendar) updatedAppointmentRequest = storedWithCalendar;
  } else {
    console.warn('[scheduling:confirm] calendar event creation failed after owner confirmation', {
      requestId,
      errorCode: calendarWrite.errorCode,
      httpStatus: calendarWrite.httpStatus,
    });
  }

  return json({
    ok: true,
    requestId,
    schedulingStatus: SCHEDULING_STATUSES.CONFIRMED,
    appointmentRequest: updatedAppointmentRequest,
    calendarWrite: calendarWrite.ok
      ? { ok: true, calendarEventId: calendarWrite.calendarEventId }
      : { ok: false, errorCode: calendarWrite.errorCode, message: calendarWrite.safeMessage, httpStatus: calendarWrite.httpStatus },
    message: 'Estimate appointment request confirmed by owner action.',
    boundaries: buildSchedulingBoundaryDiagnostics(),
  });
};
