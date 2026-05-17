const AVAILABILITY_UNAVAILABLE_MESSAGE = 'Availability is temporarily unavailable. Estimate requests may still be submitted for manual confirmation.';

export type TimeWindow = { start: string; end: string };

export type AvailabilitySuccessResponse = {
  ok: true;
  source: 'google_calendar';
  calendarIdConfigured: true;
  timezone: string;
  date: string;
  busy: TimeWindow[];
  availableWindows: TimeWindow[];
  requestId?: string;
};

export type AvailabilityFailureResponse = {
  ok: false;
  source: 'google_calendar';
  calendarIdConfigured: boolean;
  availabilityUnavailable: true;
  message: string;
  requestId?: string;
};

export type AvailabilityResponse = AvailabilitySuccessResponse | AvailabilityFailureResponse;

export const buildAvailabilityUnavailable = (calendarIdConfigured: boolean, requestId?: string): AvailabilityFailureResponse => ({
  ok: false,
  source: 'google_calendar',
  calendarIdConfigured,
  availabilityUnavailable: true,
  message: AVAILABILITY_UNAVAILABLE_MESSAGE,
  ...(requestId ? { requestId } : {}),
});

const toIsoAtTimezone = (date: string, timezone: string, endOfDay = false): string => {
  const day = endOfDay ? `${date}T23:59:59.999` : `${date}T00:00:00.000`;
  const localized = new Date(new Date(day).toLocaleString('en-US', { timeZone: timezone }));
  return localized.toISOString();
};

export const buildUtcWindowForDate = (date: string, timezone: string): { start: string; end: string } => ({
  start: toIsoAtTimezone(date, timezone, false),
  end: toIsoAtTimezone(date, timezone, true),
});

const overlaps = (a: TimeWindow, b: TimeWindow) => a.start < b.end && b.start < a.end;

export const buildAvailableWindows = (busy: TimeWindow[], range: TimeWindow, durationMinutes: number): TimeWindow[] => {
  if (durationMinutes <= 0) return [];
  const sorted = [...busy].sort((a, b) => a.start.localeCompare(b.start));
  const windows: TimeWindow[] = [];
  let cursor = range.start;

  for (const blocked of sorted) {
    if (blocked.end <= cursor) continue;
    if (blocked.start > cursor) windows.push({ start: cursor, end: blocked.start });
    if (blocked.end > cursor) cursor = blocked.end;
  }

  if (cursor < range.end) windows.push({ start: cursor, end: range.end });

  return windows.filter((w) => {
    const minutes = (new Date(w.end).getTime() - new Date(w.start).getTime()) / 60000;
    return minutes >= durationMinutes;
  });
};

const getGoogleToken = async (env: Record<string, string>): Promise<string> => {
  const body = new URLSearchParams({
    client_id: env.GOOGLE_CLIENT_ID,
    client_secret: env.GOOGLE_CLIENT_SECRET,
    refresh_token: env.GOOGLE_REFRESH_TOKEN,
    grant_type: 'refresh_token',
  });

  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  if (!tokenResponse.ok) throw new Error(`google_oauth_token_error_${tokenResponse.status}`);
  const tokenJson = (await tokenResponse.json()) as { access_token?: string };
  if (!tokenJson.access_token) throw new Error('google_oauth_missing_access_token');
  return tokenJson.access_token;
};

export const readGoogleCalendarAvailability = async ({
  env,
  date,
  timezone,
  durationMinutes,
  requestId,
}: {
  env: Record<string, string | undefined>;
  date: string;
  timezone: string;
  durationMinutes: number;
  requestId?: string;
}): Promise<AvailabilityResponse> => {
  const required = ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'GOOGLE_REFRESH_TOKEN', 'GOOGLE_CALENDAR_ID'] as const;
  const hasRequired = required.every((key) => Boolean(env[key]));
  const calendarIdConfigured = Boolean(env.GOOGLE_CALENDAR_ID);

  if (!hasRequired) return buildAvailabilityUnavailable(calendarIdConfigured, requestId);

  try {
    const token = await getGoogleToken(env as Record<string, string>);
    const range = buildUtcWindowForDate(date, timezone);
    const freeBusyResponse = await fetch('https://www.googleapis.com/calendar/v3/freeBusy', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timeMin: range.start,
        timeMax: range.end,
        timeZone: timezone,
        items: [{ id: env.GOOGLE_CALENDAR_ID }],
      }),
    });

    if (!freeBusyResponse.ok) throw new Error(`google_freebusy_error_${freeBusyResponse.status}`);
    const freeBusyJson = (await freeBusyResponse.json()) as { calendars?: Record<string, { busy?: TimeWindow[] }> };
    const busyRaw = freeBusyJson.calendars?.[env.GOOGLE_CALENDAR_ID as string]?.busy ?? [];
    const busy = busyRaw.filter((w) => overlaps(w, range)).map((w) => ({ start: w.start, end: w.end }));
    const availableWindows = buildAvailableWindows(busy, range, durationMinutes);

    return {
      ok: true,
      source: 'google_calendar',
      calendarIdConfigured: true,
      timezone,
      date,
      busy,
      availableWindows,
      ...(requestId ? { requestId } : {}),
    };
  } catch (error) {
    console.warn('[scheduling:availability] google calendar availability lookup failed', {
      requestId,
      error: error instanceof Error ? error.message : 'unknown_error',
    });
    return buildAvailabilityUnavailable(calendarIdConfigured, requestId);
  }
};
