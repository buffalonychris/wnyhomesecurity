import { buildSchedulingBoundaryDiagnostics } from './_boundary';
import { readGoogleCalendarAvailability } from './googleCalendarAvailability';

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const isValidDate = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value);

export const onRequest: PagesFunction<{ GOOGLE_CLIENT_ID?: string; GOOGLE_CLIENT_SECRET?: string; GOOGLE_REFRESH_TOKEN?: string; GOOGLE_CALENDAR_ID?: string }> = async ({ request, env }) => {
  if (request.method !== 'GET') {
    return json({ ok: false, errorCode: 'METHOD_NOT_ALLOWED', userMessage: 'Unsupported request method.' }, 405);
  }

  const url = new URL(request.url);
  const date = (url.searchParams.get('date') ?? '').trim();
  const timezone = (url.searchParams.get('timezone') ?? 'America/New_York').trim();
  const durationMinutes = Number(url.searchParams.get('durationMinutes') ?? '60');
  const requestId = request.headers.get('x-request-id') ?? undefined;

  if (!date || !isValidDate(date) || !Number.isFinite(durationMinutes) || durationMinutes <= 0) {
    return json({
      ok: false,
      errorCode: 'VALIDATION_ERROR',
      userMessage: 'Provide valid date (YYYY-MM-DD) and durationMinutes (>0).',
      boundaries: buildSchedulingBoundaryDiagnostics(),
      requestId,
    }, 400);
  }

  const availability = await readGoogleCalendarAvailability({
    env,
    date,
    timezone,
    durationMinutes,
    requestId,
  });

  return json(availability, availability.ok ? 200 : 503);
};
