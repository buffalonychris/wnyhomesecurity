import { SCHEDULING_STATUSES, buildSchedulingBoundaryDiagnostics } from './_boundary';
import { attachCalendarEventMetadataByRequestId, confirmAppointmentRequestByRequestId, getAppointmentRequestByRequestId, setCalendarWriteAuditByRequestId, setConfirmationEmailAuditByRequestId } from './appointmentRequestStore';
import { createGoogleCalendarEventAfterConfirmation } from './googleCalendarEvents';

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const parseEmails = (value?: string) =>
  (value || '')
    .split(',')
    .map((part) => part.trim())
    .filter((part) => part.length > 0);

const sendCustomerConfirmationEmail = async ({
  env,
  requestId,
  customerName,
  customerEmail,
  confirmedBy,
  preferredWindowText,
  timezone,
  calendarEventHtmlLink,
}: {
  env: Record<string, string | undefined>;
  requestId: string;
  customerName?: string;
  customerEmail?: string;
  confirmedBy: string;
  preferredWindowText: string;
  timezone: string;
  calendarEventHtmlLink?: string;
}) => {
  const to = customerEmail ? [customerEmail] : [];
  const from = env.RESEND_FROM_EMAIL || env.MAIL_FROM || env.EMAIL_FROM;
  const apiKey = env.RESEND_API_KEY;
  const audit = parseEmails(env.LEAD_SIGNAL_AUDIT_EMAIL || env.MAIL_AUDIT_TO);

  if (to.length === 0 || !from || !apiKey) {
    return { ok: false as const, skipped: true as const, errorCode: 'EMAIL_NOT_CONFIGURED', safeMessage: 'Customer confirmation email skipped due to missing email runtime configuration.' };
  }

  const safeName = customerName?.trim() || 'Customer';
  const subject = 'Your estimate appointment has been confirmed';
  const calendarLine = calendarEventHtmlLink
    ? `Calendar event link: ${calendarEventHtmlLink}`
    : 'Calendar event link: not available for this confirmation.';
  const text = [
    `Hi ${safeName},`,
    '',
    'Your estimate appointment has been confirmed.',
    'A WNY Home Security representative confirmed your requested estimate appointment.',
    `Confirmed time: ${preferredWindowText}`,
    `Timezone: ${timezone}`,
    `Request ID: ${requestId}`,
    calendarLine,
    '',
    'If you need to reschedule, contact us at support@wnyhomesecurity.com or (716) 555-0199.',
    '',
    `Confirmed by: ${confirmedBy}`,
  ].join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      from,
      to,
      bcc: audit.length > 0 ? audit : undefined,
      subject,
      text,
      html: `<pre>${text}</pre>`,
    }),
  });

  if (!response.ok) {
    return {
      ok: false as const,
      skipped: false as const,
      errorCode: 'EMAIL_SEND_FAILED',
      safeMessage: 'Customer confirmation email failed after owner confirmation.',
      httpStatus: response.status,
    };
  }

  return { ok: true as const };
};

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
  const customerName = typeof body.customerName === 'string' && body.customerName.trim().length > 0 ? body.customerName.trim() : undefined;
  const customerEmail = typeof body.customerEmail === 'string' && body.customerEmail.trim().length > 0 ? body.customerEmail.trim() : undefined;
  if (!requestId) {
    return json({ ok: false, errorCode: 'MISSING_REQUEST_ID', userMessage: 'requestId is required.' }, 400);
  }

  const confirmedBy = typeof body.confirmedBy === 'string' && body.confirmedBy.trim().length > 0 ? body.confirmedBy.trim() : undefined;
  if (!confirmedBy) {
    return json({ ok: false, errorCode: 'MISSING_CONFIRMED_BY', userMessage: 'confirmedBy is required for owner confirmation.' }, 400);
  }

  const existing = await getAppointmentRequestByRequestId(requestId, env);
  if (!existing) {
    return json({ ok: false, errorCode: 'REQUEST_NOT_FOUND', userMessage: 'No appointment request exists for the provided requestId.' }, 404);
  }

  const appointmentRequest = await confirmAppointmentRequestByRequestId({ requestId, confirmedBy, env });
  if (!appointmentRequest) {
    return json({ ok: false, errorCode: 'REQUEST_NOT_FOUND', userMessage: 'No appointment request exists for the provided requestId.' }, 404);
  }

  const isCalendarAlreadyWritten = appointmentRequest.schedulingStatus === SCHEDULING_STATUSES.CONFIRMED && Boolean(existing.calendarEventId);
  const isEmailAlreadySent = appointmentRequest.schedulingStatus === SCHEDULING_STATUSES.CONFIRMED && existing.confirmationEmailStatus === 'SENT';

  const timezone = 'America/New_York';
  const start = appointmentRequest.preferredEstimateDate
    ? new Date(`${appointmentRequest.preferredEstimateDate}T14:00:00-04:00`).toISOString()
    : new Date().toISOString();
  const end = new Date(new Date(start).getTime() + 60 * 60 * 1000).toISOString();

  const calendarWrite = isCalendarAlreadyWritten
    ? { ok: true as const, idempotent: true as const, calendarEventId: existing.calendarEventId!, calendarEventHtmlLink: existing.calendarEventHtmlLink, calendarEventCreatedAt: existing.calendarEventCreatedAt || new Date().toISOString() }
    : await createGoogleCalendarEventAfterConfirmation({
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
  if (calendarWrite.ok && !isCalendarAlreadyWritten) {
    const storedWithCalendar = await attachCalendarEventMetadataByRequestId({
      requestId,
      calendarEventId: calendarWrite.calendarEventId,
      calendarEventHtmlLink: calendarWrite.calendarEventHtmlLink,
      calendarEventCreatedAt: calendarWrite.calendarEventCreatedAt,
      env,
    });
    await setCalendarWriteAuditByRequestId({ requestId, calendarWriteStatus: 'SUCCEEDED', env });
    if (storedWithCalendar) updatedAppointmentRequest = storedWithCalendar;
  } else if (!calendarWrite.ok) {
    await setCalendarWriteAuditByRequestId({ requestId, calendarWriteStatus: 'FAILED', calendarWriteErrorCode: calendarWrite.errorCode, env });
    console.warn('[scheduling:confirm] calendar event creation failed after owner confirmation', {
      requestId,
      errorCode: calendarWrite.errorCode,
      httpStatus: calendarWrite.httpStatus,
    });
  }

  const durableCustomerName = appointmentRequest.customerName || customerName;
  const durableCustomerEmail = appointmentRequest.customerEmail || customerEmail;

  const emailWrite = isEmailAlreadySent
    ? { ok: true as const, idempotent: true as const }
    : await sendCustomerConfirmationEmail({
    env,
    requestId,
    customerName: durableCustomerName,
    customerEmail: durableCustomerEmail,
    confirmedBy,
    preferredWindowText: updatedAppointmentRequest.preferredWindowText,
    timezone,
    calendarEventHtmlLink: updatedAppointmentRequest.calendarEventHtmlLink,
    });

  if (!isEmailAlreadySent) {
    await setConfirmationEmailAuditByRequestId({
      requestId,
      confirmationEmailRecipient: durableCustomerEmail,
      confirmationEmailStatus: emailWrite.ok ? 'SENT' : emailWrite.skipped ? 'SKIPPED' : 'FAILED',
      confirmationEmailErrorCode: emailWrite.ok ? undefined : emailWrite.errorCode,
      confirmationEmailSentAt: emailWrite.ok ? new Date().toISOString() : undefined,
      env,
    });
  }

  if (!emailWrite.ok && !emailWrite.skipped) {
    console.warn('[scheduling:confirm] customer confirmation email failed after owner confirmation', {
      requestId,
      errorCode: emailWrite.errorCode,
      httpStatus: emailWrite.httpStatus,
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
    emailWrite,
    idempotency: {
      calendarWriteReused: isCalendarAlreadyWritten,
      emailWriteReused: isEmailAlreadySent,
    },
    message: 'Estimate appointment request confirmed by owner action.',
    boundaries: buildSchedulingBoundaryDiagnostics(),
  });
};
