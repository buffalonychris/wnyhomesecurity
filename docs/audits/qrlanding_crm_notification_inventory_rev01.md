# QRLanding CRM/Notification Inventory — REV01

## Scope
Repository inventory for CRM, HubSpot, lead-signal, email, notification, and calendar readiness.

## Inventory

| File | Purpose | Layer | Env var names referenced | Email addresses referenced | Webhook names | CRM/contact/deal fields | Behavior |
|---|---|---|---|---|---|---|---|
| `src/lib/hubspotLeadSignal.ts` | Frontend API caller to `/api/lead-signal` with attribution | Frontend | none | none | none | `event`, `attribution.*`, `route` | sends |
| `src/pages/QrLanding.tsx` | QR intake form submission payload | Frontend | none | none | none | `sourceFamily`, `source`, `landingRoute`, `campaignFamily`, `whereDidYouSeeUs`, `scheduleStatus`, `calendarProvider`, `contact.*`, `request.*` + consent fields | sends |
| `api/lead-signal.ts` | Server validation, notification trigger, HubSpot sync orchestration | Server/API | `NODE_ENV` | none | none | validates `event`; syncs contact/deal fields via `_hubspot` | actually syncs + sends |
| `api/_email.ts` | Notification email delivery providers | Server/API | `EMAIL_PROVIDER`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `LEAD_SIGNAL_TO_EMAIL`, `LEAD_SIGNAL_AUDIT_EMAIL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM_EMAIL`, `SMTP_TO_EMAIL`, `SMTP_AUDIT_EMAIL` | `support@wnyhomesecurity.com`, `audit@wnyhomesecurity.com` defaults | none | lead-signal email payload fields (`event`, `timestampISO`, `customerEmail`, `referenceId`) | sends/logs/stubs depending on provider |
| `api/_hubspot.ts` | HubSpot API helper for contact/deal upsert | Server/API | `HUBSPOT_ACCESS_TOKEN` | none | none | contact: `email`, `firstname`, `lastname`, `phone`, `address`, `city`, `state`, `zip`, `wny_*`; deal: `dealstage`, `wny_*`, `amount`, `dealname` | actually syncs |
| `api/stripe-webhook.ts` | Stripe webhook verification endpoint | Server/API | `STRIPE_WEBHOOK_SECRET` | none | `stripe-webhook` | payment-related metadata; not QR-specific | actually syncs (Stripe flow) |
| `functions/api/stripe-webhook.ts` | Cloudflare-function variant for Stripe webhook | Server/API | `STRIPE_WEBHOOK_SECRET` (via env helper) | none | `stripe-webhook` | payment metadata | actually syncs (Stripe flow) |

## Recipient routing notes
- Internal lead notification recipient is env-configurable (`LEAD_SIGNAL_TO_EMAIL`) and audit copy is env-configurable (`LEAD_SIGNAL_AUDIT_EMAIL`).
- SMTP fallback has parallel recipient vars (`SMTP_TO_EMAIL`, `SMTP_AUDIT_EMAIL`).
- Multiple recipients are possible if provider/API accepts comma-delimited target in existing env pattern; code currently passes string through as-is.

## Calendar readiness notes
- QR payload carries request-only scheduling metadata (`scheduleStatus: requested_pending_confirmation`, `calendarProvider: google_business_pending_confirmation`).
- No server-side Google Calendar credentials or booking endpoint discovered in audited files.
- Current state is request-capture with graceful degradation (no false confirmation).
