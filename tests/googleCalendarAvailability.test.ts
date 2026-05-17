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

  it('returns normalized availability when freebusy succeeds', async () => {
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ access_token: 'token' }), { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ calendars: { cal: { busy: [{ start: '2026-05-20T14:00:00.000Z', end: '2026-05-20T15:00:00.000Z' }] } } }), { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);

    const res = await readGoogleCalendarAvailability({
      env: { GOOGLE_CLIENT_ID: 'id', GOOGLE_CLIENT_SECRET: 'secret', GOOGLE_REFRESH_TOKEN: 'refresh', GOOGLE_CALENDAR_ID: 'cal' },
      date: '2026-05-20',
      timezone: 'America/New_York',
      durationMinutes: 30,
      requestId: 'req-1',
    });

    expect(res.ok).toBe(true);
    if (res.ok) {
      expect(res.source).toBe('google_calendar');
      expect(res.requestId).toBe('req-1');
      expect(res.busy.length).toBe(1);
      expect(res.availableWindows.length).toBeGreaterThan(0);
    }
  });

  it('returns safe unavailable response when google api fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('nope', { status: 500 })));
    const res = await readGoogleCalendarAvailability({
      env: { GOOGLE_CLIENT_ID: 'id', GOOGLE_CLIENT_SECRET: 'secret', GOOGLE_REFRESH_TOKEN: 'refresh', GOOGLE_CALENDAR_ID: 'cal' },
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
