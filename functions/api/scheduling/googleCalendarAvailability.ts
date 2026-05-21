const AVAILABILITY_UNAVAILABLE_MESSAGE = 'Availability is temporarily unavailable. Estimate requests may still be submitted for manual confirmation.';

export type TimeWindow = { start: string; end: string };

export type AvailabilitySuccessResponse = {
  ok: true;
  source: 'google_calendar_ical';
  calendarFeedConfigured: true;
  timezone: string;
  date: string;
  busy: TimeWindow[];
  availableWindows: TimeWindow[];
  requestId?: string;
};

export type AvailabilityFailureResponse = {
  ok: false;
  source: 'google_calendar_ical';
  calendarFeedConfigured: boolean;
  availabilityUnavailable: true;
  message: string;
  requestId?: string;
};

export type AvailabilityResponse = AvailabilitySuccessResponse | AvailabilityFailureResponse;

export const buildAvailabilityUnavailable = (calendarFeedConfigured: boolean, requestId?: string): AvailabilityFailureResponse => ({
  ok: false,
  source: 'google_calendar_ical',
  calendarFeedConfigured,
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

const unfoldIcalLines = (raw: string): string[] => {
  const lines = raw.replace(/\r\n/g, '\n').split('\n');
  const unfolded: string[] = [];
  for (const line of lines) {
    if ((line.startsWith(' ') || line.startsWith('\t')) && unfolded.length > 0) {
      unfolded[unfolded.length - 1] += line.slice(1);
    } else {
      unfolded.push(line);
    }
  }
  return unfolded;
};

const parseIcalDateValue = (value: string): string | undefined => {
  const trimmed = value.trim();
  if (/^\d{8}$/.test(trimmed)) {
    return `${trimmed.slice(0, 4)}-${trimmed.slice(4, 6)}-${trimmed.slice(6, 8)}T00:00:00.000Z`;
  }
  if (/^\d{8}T\d{6}Z$/.test(trimmed)) {
    return `${trimmed.slice(0, 4)}-${trimmed.slice(4, 6)}-${trimmed.slice(6, 8)}T${trimmed.slice(9, 11)}:${trimmed.slice(11, 13)}:${trimmed.slice(13, 15)}.000Z`;
  }

  const parsed = new Date(trimmed);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString();
};

const parseBusyWindowsFromIcal = (ical: string, range: TimeWindow): TimeWindow[] => {
  const lines = unfoldIcalLines(ical);
  const busy: TimeWindow[] = [];
  let currentStart: string | undefined;
  let currentEnd: string | undefined;
  let inEvent = false;

  for (const line of lines) {
    if (line === 'BEGIN:VEVENT') {
      inEvent = true;
      currentStart = undefined;
      currentEnd = undefined;
      continue;
    }
    if (line === 'END:VEVENT') {
      if (inEvent && currentStart && currentEnd) {
        const window = { start: currentStart, end: currentEnd };
        if (overlaps(window, range)) busy.push(window);
      }
      inEvent = false;
      continue;
    }
    if (!inEvent) continue;

    if (line.startsWith('DTSTART')) {
      const startValue = line.split(':').slice(1).join(':');
      currentStart = parseIcalDateValue(startValue);
    } else if (line.startsWith('DTEND')) {
      const endValue = line.split(':').slice(1).join(':');
      currentEnd = parseIcalDateValue(endValue);
    }
  }

  return busy;
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
  const feedUrl = env.GOOGLE_CALENDAR_ICAL_SECRET;
  const calendarFeedConfigured = Boolean(feedUrl);
  if (!feedUrl) return buildAvailabilityUnavailable(false, requestId);

  try {
    const range = buildUtcWindowForDate(date, timezone);
    const response = await fetch(feedUrl, { method: 'GET' });
    if (!response.ok) throw new Error(`google_ical_fetch_error_${response.status}`);

    const ical = await response.text();
    const busy = parseBusyWindowsFromIcal(ical, range)
      .sort((a, b) => a.start.localeCompare(b.start));
    const availableWindows = buildAvailableWindows(busy, range, durationMinutes);

    return {
      ok: true,
      source: 'google_calendar_ical',
      calendarFeedConfigured,
      timezone,
      date,
      busy,
      availableWindows,
      ...(requestId ? { requestId } : {}),
    };
  } catch (error) {
    console.warn('[scheduling:availability] google calendar iCal availability lookup failed', {
      requestId,
      error: error instanceof Error ? error.message : 'unknown_error',
    });
    return buildAvailabilityUnavailable(calendarFeedConfigured, requestId);
  }
};
