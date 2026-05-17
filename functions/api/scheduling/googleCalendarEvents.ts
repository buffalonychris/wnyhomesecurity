const requiredGoogleEnv = ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'GOOGLE_REFRESH_TOKEN', 'GOOGLE_CALENDAR_ID'] as const;

export type CalendarEventWriteResult =
  | {
      ok: true;
      calendarEventId: string;
      calendarEventHtmlLink?: string;
      calendarEventCreatedAt: string;
    }
  | {
      ok: false;
      errorCode: 'GOOGLE_CALENDAR_CONFIG_MISSING' | 'GOOGLE_CALENDAR_OAUTH_FAILED' | 'GOOGLE_CALENDAR_EVENT_CREATE_FAILED';
      safeMessage: string;
      httpStatus?: number;
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

export const createGoogleCalendarEventAfterConfirmation = async ({
  env,
  requestId,
  summary,
  description,
  start,
  end,
  timezone,
}: {
  env: Record<string, string | undefined>;
  requestId: string;
  summary: string;
  description: string;
  start: string;
  end: string;
  timezone: string;
}): Promise<CalendarEventWriteResult> => {
  const hasRequired = requiredGoogleEnv.every((key) => Boolean(env[key]));
  if (!hasRequired) {
    return {
      ok: false,
      errorCode: 'GOOGLE_CALENDAR_CONFIG_MISSING',
      safeMessage: 'Google Calendar write skipped due to missing runtime configuration.',
    };
  }

  try {
    const token = await getGoogleToken(env as Record<string, string>);
    const createResponse = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(env.GOOGLE_CALENDAR_ID as string)}/events`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        summary,
        description,
        start: { dateTime: start, timeZone: timezone },
        end: { dateTime: end, timeZone: timezone },
      }),
    });

    if (!createResponse.ok) {
      return {
        ok: false,
        errorCode: 'GOOGLE_CALENDAR_EVENT_CREATE_FAILED',
        safeMessage: 'Google Calendar event creation request failed after owner confirmation.',
        httpStatus: createResponse.status,
      };
    }

    const eventJson = (await createResponse.json()) as { id?: string; htmlLink?: string; created?: string };
    if (!eventJson.id) {
      return {
        ok: false,
        errorCode: 'GOOGLE_CALENDAR_EVENT_CREATE_FAILED',
        safeMessage: 'Google Calendar event creation returned without an event id.',
      };
    }

    return {
      ok: true,
      calendarEventId: eventJson.id,
      calendarEventHtmlLink: eventJson.htmlLink,
      calendarEventCreatedAt: eventJson.created ?? new Date().toISOString(),
    };
  } catch (error) {
    return {
      ok: false,
      errorCode: 'GOOGLE_CALENDAR_OAUTH_FAILED',
      safeMessage: 'Google Calendar authentication failed after owner confirmation.',
      ...(error instanceof Error && error.message.includes('google_oauth_token_error_')
        ? { httpStatus: Number(error.message.split('_').pop()) }
        : {}),
    };
  }
};
