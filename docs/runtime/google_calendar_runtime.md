# Google Calendar Runtime Contract — REV01

## Purpose
Read-only availability lookup for estimate scheduling via `GET /api/scheduling/availability`.

## Scope
- Advisory availability only (no booking authority).
- Shared calendar read only using Google FreeBusy API.
- Manual owner confirmation remains required.

## Required Environment Variables
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_REFRESH_TOKEN`
- `GOOGLE_CALENDAR_ID`

## Behavior
- When configured and healthy: returns normalized busy windows and computed available windows.
- On config/API failure: returns safe unavailable response with manual-confirmation fallback message.
- No calendar writes are performed.

## Security
- Credentials are server-side only in Pages Functions env.
- Do not store credentials in repo.
- Logs must not include token/secret values.

## API
`GET /api/scheduling/availability?date=YYYY-MM-DD&timezone=America/New_York&durationMinutes=60`

Success:
- `ok: true`
- `source: google_calendar`
- `busy[]`
- `availableWindows[]`

Failure:
- `ok: false`
- `availabilityUnavailable: true`
- manual-confirmation fallback message

## Out of Scope
- Event creation
- Appointment confirmation
- Owner assignment/acceptance
- SMS/reminders/install scheduling
