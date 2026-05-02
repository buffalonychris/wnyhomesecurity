# WNY Home Security --- HubSpot Architecture & Usage (LOCKED KB)

## Overview

This document defines the complete HubSpot architecture for WNY Home
Security. HubSpot is the **single source of truth** for all customer
lifecycle data.

This document is LOCKED and must be followed for all future development.

------------------------------------------------------------------------

## Core Principles

### 1. HubSpot Role

HubSpot is responsible for: - Lead capture - Lifecycle tracking - Deal
progression - Attribution (UTM + click IDs) - Communication tracking

HubSpot is NOT responsible for: - Payment processing (Stripe) - Frontend
state - Real-time UI logic

------------------------------------------------------------------------

### 2. Data Flow Philosophy

Frontend → API → HubSpot

Never: - Send data directly from frontend to HubSpot - Trust client-side
events for financial state

------------------------------------------------------------------------

## Objects Used

### Contacts

Stores: - Name - Email - Phone - Preferences - Attribution

### Deals

Stores: - Funnel progression - Package selection - Quote state -
Walkthrough state - Payment state

### Tickets

Stores: - Support interactions - Post-sale service

------------------------------------------------------------------------

## Key Custom Properties

### Contact Properties

-   wny_utm_source
-   wny_utm_campaign
-   wny_utm_medium
-   wny_click_id
-   wny_walkthrough_interest
-   wny_consent_sms
-   wny_contact_preference

------------------------------------------------------------------------

### Deal Properties

#### Funnel

-   wny_path_choice
-   wny_package_tier

#### Walkthrough

-   wny_walkthrough_requested
-   wny_walkthrough_status
-   wny_walkthrough_requested_at
-   wny_walkthrough_scheduled_at
-   wny_walkthrough_completed

#### Quote

-   wny_quote_status

#### Agreement

-   wny_agreement_status

#### Payment

-   wny_deposit_status
-   wny_payment_verified_server_side

#### Install

-   wny_install_status

------------------------------------------------------------------------

## Deal Pipeline (WNY Home Security)

Stages:

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

## Event Model

Events are sent via `/api/lead-signal`.

### Events:

-   fit_check_completed
-   walkthrough_requested
-   walkthrough_scheduled
-   quote_generated
-   agreement_accepted
-   install_scheduled

------------------------------------------------------------------------

## Payment Rules (CRITICAL)

Stripe webhook ONLY updates:

-   wny_deposit_status
-   wny_payment_verified_server_side

Frontend MUST NEVER: - Mark payments as complete - Modify payment status

------------------------------------------------------------------------

## Scheduling Model

Two paths:

### On-Site

-   walkthrough_requested
-   walkthrough_scheduled
-   walkthrough_completed

### Direct Install

-   install_scheduled

------------------------------------------------------------------------

## Attribution

Captured: - utm_source - utm_campaign - utm_medium - gclid, fbclid, etc.

Stored on contact level.

------------------------------------------------------------------------

## Guardrails (DO NOT VIOLATE)

-   Do not modify HubSpot schema without approval
-   Do not bypass server API
-   Do not duplicate deals
-   Do not allow frontend to control payment state

------------------------------------------------------------------------

## Future Integrations

Planned: - Resend (email) - SMS provider (Twilio or similar) - Calendar
integration

------------------------------------------------------------------------

## Summary

HubSpot = system of record

Stripe = payments

Frontend = UX only

Server = authority

------------------------------------------------------------------------

**END OF DOCUMENT**
