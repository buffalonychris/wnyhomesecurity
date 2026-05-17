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
- Calendar writes are permitted only after owner confirmation via `POST /api/scheduling/confirm` and never during availability or request capture.

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

## Confirmed Write Boundary
- `POST /api/scheduling/confirm` may attempt Google Calendar event creation only after appointment state transitions to `CONFIRMED`.
- Calendar write failure never rolls back `CONFIRMED` + audit fields and returns safe diagnostics only.

## Out of Scope
- Event creation before owner confirmation
- Appointment confirmation
- Owner assignment/acceptance
- SMS/reminders/install scheduling


## SCHED-HARDEN001

Calendar runtime integration now records per-request write metadata:
- `calendarWriteStatus`
- `calendarWriteErrorCode`
- `calendarEventId`
- `calendarEventHtmlLink`
- `calendarEventCreatedAt`
