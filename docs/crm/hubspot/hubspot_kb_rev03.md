# WNY Home Security --- HubSpot Architecture & Usage (REV03 EXECUTABLE SPEC)

## PURPOSE

This is the **EXECUTABLE SPEC** for HubSpot integration. It is designed
so ANY developer (or Codex) can implement or modify the system WITHOUT
breaking it.

This document is LOCKED.

------------------------------------------------------------------------

# SYSTEM ROLES

  System     Responsibility
  ---------- ----------------------------------------------
  HubSpot    Source of truth (contacts, deals, lifecycle)
  Stripe     Payments (webhook-verified ONLY)
  Frontend   UX + event triggers only
  API        Sole authority for all HubSpot writes

------------------------------------------------------------------------

# END-TO-END FLOW

## ONLINE PATH

Landing → Fit Check → Quote → Agreement → Payment → Schedule

## ON-SITE PATH

Landing → Walkthrough Request → Schedule → Quote → Agreement → Payment →
Install

------------------------------------------------------------------------

# EVENT PIPELINE (EXECUTION ORDER)

1.  fit_check_completed
2.  walkthrough_requested (optional path)
3.  walkthrough_scheduled
4.  quote_generated
5.  agreement_accepted
6.  install_scheduled OR payment flow
7.  Stripe webhook → deposit_paid

------------------------------------------------------------------------

# API CONTRACT

Endpoint:

    POST /api/lead-signal

### Required Payload Structure

``` json
{
  "event": "event_name",
  "contact": {
    "email": "required",
    "phone": "optional",
    "name": "optional"
  },
  "deal": {
    "packageTier": "bronze|silver|gold|custom_fit",
    "pathChoice": "online|onsite_confirmation_first",
    "quoteRef": "unique-id"
  },
  "meta": {
    "sessionMarker": "uuid",
    "timestamp": "iso8601"
  }
}
```

------------------------------------------------------------------------

# EVENT IMPLEMENTATION DETAILS

## fit_check_completed

-   Create contact if not exists
-   Create deal if not exists
-   Set:
    -   wny_package_tier
    -   wny_path_choice
-   Move stage → Fit Check Completed

------------------------------------------------------------------------

## walkthrough_requested

-   Set:
    -   wny_walkthrough_requested = true
    -   wny_walkthrough_requested_at
-   Store preferred dates + notes

------------------------------------------------------------------------

## walkthrough_scheduled

-   Set:
    -   wny_walkthrough_scheduled_at
-   Move stage → Walkthrough Scheduled

------------------------------------------------------------------------

## quote_generated

-   DEDUPE REQUIRED: key = quoteId + sessionMarker

-   Set:

    -   wny_quote_status = generated

-   Move stage → Quote Generated

------------------------------------------------------------------------

## agreement_accepted

-   Only trigger when checkbox = true
-   Set:
    -   wny_agreement_status = accepted

------------------------------------------------------------------------

## install_scheduled

-   Set:
    -   wny_install_status = scheduled
-   Move stage → Scheduled

------------------------------------------------------------------------

# STRIPE WEBHOOK FLOW (CRITICAL)

Endpoint:

    POST /api/stripe-webhook

### ONLY SOURCE OF TRUTH FOR PAYMENT

On verified event:

``` text
checkout.session.completed
```

Set in HubSpot: - wny_deposit_status = paid -
wny_payment_verified_server_side = true - Move stage → Deposit Paid

### NEVER:

-   update payment from frontend
-   trust redirect URLs

------------------------------------------------------------------------

# DEDUPLICATION ENGINE

## RULES

1.  Identify contact by email
2.  Identify deal by:
    -   quoteRef OR
    -   sessionMarker
3.  If deal exists → update
4.  If not → create new deal

## STRICT RULE

Only ONE active deal per session.

------------------------------------------------------------------------

# PROPERTY STATE MACHINE

## Deal State Transitions

  Stage                   Trigger
  ----------------------- -----------------------
  New Lead                initial visit
  Fit Check Completed     fit_check_completed
  Walkthrough Requested   walkthrough_requested
  Walkthrough Scheduled   walkthrough_scheduled
  Walkthrough Completed   manual / future
  Quote Generated         quote_generated
  Agreement Accepted      agreement_accepted
  Deposit Paid            Stripe webhook
  Scheduled               install_scheduled
  Installed               manual
  Closed Lost             manual

------------------------------------------------------------------------

# SMS CONSENT SPEC

Checkbox REQUIRED:

"I agree to receive text messages..."

## Stored As:

-   wny_consent_sms = true
-   wny_contact_preference = text

## Usage:

-   appointment reminders
-   scheduling updates
-   service communication

------------------------------------------------------------------------

# ERROR HANDLING

## RULES

-   HubSpot failure MUST NOT block UX
-   Log errors server-side
-   Retry silently if possible
-   Never crash funnel

------------------------------------------------------------------------

# SECURITY MODEL

-   No HubSpot tokens in frontend
-   No Stripe secrets in frontend
-   All API calls authenticated internally
-   Validate all payloads server-side

------------------------------------------------------------------------

# TESTING CHECKLIST

## Fit Check

-   creates contact
-   creates deal
-   sets tier

## Walkthrough

-   request → property set
-   schedule → stage updated

## Quote

-   generates once
-   no duplicates

## Agreement

-   only triggers on accept

## Payment

-   webhook updates HubSpot
-   frontend does NOT

## Schedule

-   correct stage transition

------------------------------------------------------------------------

# FUTURE EXTENSIONS

-   Resend email automation
-   Twilio SMS automation
-   Calendar sync (Google)

------------------------------------------------------------------------

# FINAL RULE

If unsure: DO NOT MODIFY HUBSPOT.

------------------------------------------------------------------------

**END OF REV03 --- EXECUTABLE SPEC**
