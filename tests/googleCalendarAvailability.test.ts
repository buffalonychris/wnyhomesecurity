import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { buildAvailabilityUnavailable, buildAvailableWindows, readGoogleCalendarAvailability } from '../functions/api/scheduling/googleCalendarAvailability';

describe('googleCalendarAvailability', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('fails safely when env vars are missing', async () => {
    const res = await readGoogleCalendarAvailability({ env: {}, date: '2026-05-20', timezone: 'America/New_York', durationMinutes: 60 });
    expect(res).toEqual(buildAvailabilityUnavailable(false));
  });

  it('returns normalized availability when iCal fetch succeeds', async () => {
    const ical = [
      'BEGIN:VCALENDAR',
      'BEGIN:VEVENT',
      'DTSTART:20260520T140000Z',
      'DTEND:20260520T150000Z',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(ical, { status: 200 })));

    const res = await readGoogleCalendarAvailability({
      env: { GOOGLE_CALENDAR_ICAL_SECRET: 'https://example.com/private.ics' },
      date: '2026-05-20',
      timezone: 'America/New_York',
      durationMinutes: 30,
      requestId: 'req-1',
    });

    expect(res.ok).toBe(true);
    if (res.ok) {
      expect(res.source).toBe('google_calendar_ical');
      expect(res.requestId).toBe('req-1');
      expect(res.busy.length).toBe(1);
      expect(res.availableWindows.length).toBeGreaterThan(0);
    }
  });

  it('returns safe unavailable response when iCal fetch fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('nope', { status: 500 })));
    const res = await readGoogleCalendarAvailability({
      env: { GOOGLE_CALENDAR_ICAL_SECRET: 'https://example.com/private.ics' },
      date: '2026-05-20',
      timezone: 'America/New_York',
      durationMinutes: 60,
    });

    expect(res.ok).toBe(false);
    if (!res.ok) expect(res.availabilityUnavailable).toBe(true);
  });

  it('filters windows by minimum duration', () => {
    const windows = buildAvailableWindows(
      [{ start: '2026-05-20T10:00:00.000Z', end: '2026-05-20T11:45:00.000Z' }],
      { start: '2026-05-20T10:00:00.000Z', end: '2026-05-20T12:00:00.000Z' },
      20,
    );
    expect(windows).toEqual([]);
  });
});
