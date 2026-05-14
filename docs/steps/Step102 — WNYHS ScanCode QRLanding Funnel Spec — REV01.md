# Step102 — WNYHS ScanCode / QRLanding Funnel Spec — REV01

Status: ACTIVE
Authority Level: Controlling Implementation Step
Scope Type: Additive

---

# 1. Objective

Authorize and define the implementation of a dedicated QR scan-code acquisition funnel for WNY Home Security.

This Step exists to:

* support local canvassing campaigns
* support QR-based lead generation
* support CRM onboarding from physical marketing
* support estimate-request intake
* support Google Business calendar estimate requests
* support a dedicated scan-code customer journey

This Step does NOT replace the existing WNY Home Security homepage or primary funnel.

---

# 2. Scope Authorization

This Step explicitly authorizes:

* additive route creation
* additive QR landing page implementation
* additive lead-intake form implementation
* additive CRM onboarding integration
* additive Google Business calendar estimate-request integration
* additive attribution tracking for QR campaigns
* additive mobile-first landing experience

This Step does NOT authorize:

* replacement of homepage
* destructive edits to Step101 flows
* modification of payment/deposit/agreement systems
* Stripe architecture changes
* removal of existing routes
* modification of core package funnels

---

# 3. Authorized Route

Primary route:

```txt
/qrlanding
```

Optional alias route:

```txt
/qrlanding.htm
```

Purpose:
Dedicated scan-code intake journey for physical marketing campaigns.

---

# 4. Funnel Purpose

The QRLanding funnel must allow a cold local visitor to:

1. Understand WNY Home Security quickly
2. Learn the core offering
3. Request a custom quote
4. Enter contact information
5. Request an onsite estimate window
6. Enter CRM onboarding
7. Proceed without needing to make a phone call

Primary conversion goal:

```txt
Estimate request / onsite walkthrough request
```

---

# 5. Funnel Positioning

This funnel is:

* local-first
* mobile-first
* scan-first
* low-friction
* estimate-focused

This funnel is NOT:

* a replacement homepage
* a package configurator
* a Stripe checkout flow
* a payment funnel
* an agreement-signing funnel

---

# 6. Authorized Brand Direction

Approved visual direction:

* matte black
* metallic gold
* white typography
* premium tactical-tech aesthetic
* clean high-contrast layouts

Approved logo source:

* high-end WNY Home Security crest/logo asset

Approved supporting reference:

* WNY Home Security logo system and color reference sheet

---

# 7. Copy Rules

Approved positioning themes:

* local-first home security
* professionally installed
* cameras and smart security
* you own your system
* no subscriptions sold by us
* Western New York service area
* estimate requests

Forbidden:

* fear-based marketing
* police/emergency response claims
* guaranteed protection claims
* fake urgency
* deceptive monitoring claims

Required disclosure where relevant:

```txt
Remote access and notifications require internet availability.
```

---

# 8. CRM Requirements

The funnel must preserve:

* source attribution
* QR campaign source
* timestamp
* lead/contact information
* optional self-reported placement category

Required source family:

```txt
QR_SCAN
```

Approved optional source params:

```txt
?src=placard
?src=card
?src=sticker
?src=vehicle
?src=yard-sign
?src=referral
```

Default source:

```txt
QR_SCAN_GENERAL
```

---

# 9. Scheduling Requirements

The funnel may support:

* estimate request windows
* Google Business calendar request integration
* scheduling request capture

The funnel may NOT:

* falsely confirm appointments
* expose Google credentials client-side
* hardcode secrets

If direct calendar confirmation is unavailable, the funnel must degrade gracefully to request-capture mode.

---

# 10. Form Requirements

Required fields:

* first name
* last name
* mobile phone
* email
* street address
* city
* state
* ZIP
* property type
* requested help/services
* preferred contact method
* preferred estimate time window

Optional field:

```txt
Where did you see us?
```

Approved values:

* Barber shop
* Restaurant
* Grocery store
* Laundromat
* Auto shop
* Self-storage / U-Haul / moving location
* Medical office / waiting room
* Retail store
* Apartment/community board
* Friend/referral
* Other

---

# 11. Mobile-First Requirements

The funnel must:

* load quickly on mobile
* remain readable on small screens
* expose CTA quickly
* support thumb-friendly forms
* avoid layout overflow

QR scan traffic is considered mobile-primary.

---

# 12. Operational Intent

This Step supports:

* canvassing campaigns
* local placard distribution
* business-card QR distribution
* referral distribution
* bulletin-board placement
* vehicle branding campaigns
* yard-sign QR campaigns

---

# 13. Governance Rules

Implementation must:

* remain additive
* preserve Step101 funnel integrity
* preserve Stripe/payment architecture
* preserve existing routes
* preserve existing quote/deposit/agreement flows
* follow semantic token rules
* follow copy guardrails
* follow server-side verification rules

---

# 14. Completion Criteria

Step102 is considered complete when:

* /qrlanding route exists
* mobile funnel works
* estimate form works
* CRM capture works
* attribution persists
* scheduling request capture works
* branding matches approved black/gold/white direction
* build succeeds
* existing WNYHS flows remain operational

---

# 15. Authorized Follow-On Work

Once Step102 is complete, authorized future work may include:

* QR campaign optimization
* referral-partner landing variants
* placement-specific variants
* analytics dashboards
* A/B testing
* advanced attribution
* localized scan campaigns

These require future Step revisions or new Steps if scope expands materially.
