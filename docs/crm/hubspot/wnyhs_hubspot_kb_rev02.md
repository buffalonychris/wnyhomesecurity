# WNY Home Security --- HubSpot Architecture & Usage (REV02 LOCKED)

## PURPOSE

This document defines the COMPLETE, LOCKED HubSpot architecture for WNY
Home Security.

This is the **authoritative reference** for: - Developers (Codex) -
Backend integrations - Funnel behavior - CRM lifecycle tracking

Any deviation must be explicitly approved.

------------------------------------------------------------------------

# SYSTEM ROLES

  System      Responsibility
  ----------- -----------------------------------------------
  HubSpot     System of record (contacts, deals, lifecycle)
  Stripe      Payments (server-verified only)
  Frontend    UX + event trigger only
  API Layer   Authority for all writes to HubSpot

------------------------------------------------------------------------

# DATA FLOW

Frontend → `/api/lead-signal` → HubSpot

Rules: - NEVER send directly to HubSpot from frontend - NEVER trust
frontend for payment state - ALL writes go through server

------------------------------------------------------------------------

# OBJECT MODEL

## CONTACT

Stores: - Identity (name, email, phone) - Attribution (UTM + click
IDs) - Preferences (SMS, contact method)

## DEAL

Stores: - Funnel progression - Package selection - Quote lifecycle -
Walkthrough lifecycle - Payment lifecycle

## TICKET

Stores: - Support issues - Post-install service

------------------------------------------------------------------------

# PROPERTY MODEL

## CONTACT PROPERTIES

  Property                   Purpose
  -------------------------- -------------------
  wny_utm_source             Lead source
  wny_utm_campaign           Campaign
  wny_utm_medium             Medium
  wny_gclid / fbclid etc     Click attribution
  wny_walkthrough_interest   On-site interest
  wny_consent_sms            SMS permission
  wny_contact_preference     email/text/phone

------------------------------------------------------------------------

## DEAL PROPERTIES

### Core

-   wny_path_choice (online / onsite)
-   wny_package_tier (bronze/silver/gold/custom_fit)

### Walkthrough

-   wny_walkthrough_requested (bool)
-   wny_walkthrough_status
-   wny_walkthrough_requested_at
-   wny_walkthrough_scheduled_at
-   wny_walkthrough_completed_at
-   wny_walkthrough_notes

### Quote

-   wny_quote_status

### Agreement

-   wny_agreement_status

### Payment

-   wny_deposit_status
-   wny_payment_verified_server_side (CRITICAL FLAG)

### Install

-   wny_install_status

------------------------------------------------------------------------

# DEAL PIPELINE (LOCKED)

1.  New Lead
2.  Fit Check Completed
3.  Walkthrough Requested
4.  Walkthrough Scheduled
5.  Walkthrough Completed
6.  Quote Generated
7.  Agreement Accepted
8.  Deposit Paid
9.  Scheduled
10. Installed
11. Closed Lost

------------------------------------------------------------------------

# EVENT → PROPERTY MAPPING

  Event                   Action
  ----------------------- ----------------------------------
  fit_check_completed     create/update deal, set tier
  walkthrough_requested   set walkthrough_requested = true
  walkthrough_scheduled   set scheduled fields
  quote_generated         set quote status
  agreement_accepted      set agreement status
  install_scheduled       set install stage

------------------------------------------------------------------------

# EVENT PAYLOAD STRUCTURE

Example:

``` json
{
  "event": "walkthrough_requested",
  "contact": {
    "email": "user@example.com",
    "phone": "716xxx"
  },
  "deal": {
    "packageTier": "custom_fit",
    "pathChoice": "onsite_confirmation_first"
  },
  "walkthrough": {
    "preferredDate1": "2026-05-02",
    "preferredTimeWindow1": "Morning",
    "notes": "Customer prefers weekends"
  }
}
```

------------------------------------------------------------------------

# DEAL CREATION LOGIC

1.  Lookup contact by email
2.  If not exists → create contact
3.  Lookup deal by quoteRef or session marker
4.  If not exists → create deal
5.  Associate contact ↔ deal
6.  Update properties based on event

------------------------------------------------------------------------

# DEDUPLICATION RULES

-   Use quote ID + session marker
-   Prevent duplicate deal creation
-   Only one active deal per session

------------------------------------------------------------------------

# PAYMENT RULES (CRITICAL)

ONLY Stripe webhook updates:

-   wny_deposit_status
-   wny_payment_verified_server_side = true

Frontend MUST NEVER: - Mark payment complete - Update deposit status

------------------------------------------------------------------------

# SCHEDULING MODEL

## On-Site Flow

-   walkthrough_requested
-   walkthrough_scheduled
-   walkthrough_completed

## Direct Install Flow

-   install_scheduled

------------------------------------------------------------------------

# SMS CONSENT MODEL

Checkbox required:

"I agree to receive text messages..."

Stored as: - wny_consent_sms = true

Used for: - reminders - scheduling - service communication

------------------------------------------------------------------------

# ERROR HANDLING

-   If HubSpot fails → do not block UI
-   Retry or log silently
-   Never crash funnel

------------------------------------------------------------------------

# GUARDRAILS (STRICT)

DO NOT: - Modify schema without approval - Allow frontend to control
payment - Create duplicate deals - Bypass API layer

------------------------------------------------------------------------

# FUTURE INTEGRATIONS

-   Resend (email delivery)
-   Twilio (SMS)
-   Calendar API (scheduling sync)

------------------------------------------------------------------------

# SUMMARY

HubSpot = truth\
Stripe = money\
Frontend = UX\
API = authority

------------------------------------------------------------------------

**END OF REV02 --- LOCKED**
