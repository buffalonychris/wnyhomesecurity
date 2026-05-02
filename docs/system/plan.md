# WNYHS Execution Plan (UPDATED)

## HubSpot Integration Layer (REV03)

All steps must integrate:

- Event pipeline:
  fit_check_completed → quote_generated → agreement_accepted → webhook → deposit_paid

- API:
  POST /api/lead-signal

- Payment:
  Stripe webhook ONLY

No deviations allowed.
