Status: CONFLICTING / NEEDS RECONCILIATION
Authority Role: Historical funnel/reference specification with legacy controlling-language conflict
Supersedes: Step101 REV01
Superseded By: None
Current Use: Use only as supporting reference when the current operational context or active bounded task/work order explicitly references Step101.
Do Not Use For: Do not treat as simultaneous controlling authority or implementation permission by itself.
Reconciliation Note: The preserved body includes legacy "Active / Controlling" wording. Current repo governance treats this document as non-controlling lineage/reference unless explicitly promoted by `docs/system/step-current.md` or a bounded work order.

---

# Step101 — Home Security Funnel + Page Spec (REV02)

Vertical: Residential — Home Security
Legacy Status (historical): Active / Controlling for UI, funnel, page structure, navigation, and visual cleanup

---

## 1. Objective

Create a clear, calm, premium home security funnel that:

- Shows packages immediately
- Educates without overwhelming
- Routes serious buyers into structured fit check or on-site estimate
- Preserves online-first purchase path for ready customers
- Sets correct expectations on ownership, privacy, payment, and scheduling

Tone:

- professional
- intentional
- trustworthy
- not alarmist
- not SaaS-generic

---

## 2. Funnel Spine (Non-Negotiable Order)

Homepage section order:

1. Entry / Hero
2. What This System Does / Does Not Do
3. Packages — Bronze / Silver / Gold
4. How It Works
5. Fit Check / Discovery
6. Next Step CTA

No other major homepage sections may interrupt this order.

---

## 3. Entry / Hero

Approved conceptual headline:

```txt
Know what’s happening. Stay in control. No contracts required.
```

Approved conceptual subtext:

```txt
Local-first home security with cameras, sensors, and automations you own.
```

CTA posture:

- Schedule On-Site Estimate
- Check Fit First
- View Packages

Both online-first and on-site-first paths are valid.

Do not imply online purchase is blocked.
Do not imply on-site estimate is mandatory.

---

## 4. Orientation — What This Is / Is Not

This system is:

- A locally-run home security platform
- A system combining sensors, cameras, and automations
- Designed so core local functions continue on the home network when internet is unavailable

This system is not:

- A mandatory monitoring contract
- A closed ecosystem
- Surveillance-first by default

Required trust callouts:

- Customer owns the equipment/data
- No subscriptions sold by us
- Expandable later

---

## 5. Package Section

Packages must be visible early.

### Bronze — Starter Security & Awareness

For apartments/smaller homes and customers wanting simple dependable awareness.

### Silver — Whole-Home Coverage

For most homeowners wanting stronger perimeter coverage and better day-to-day confidence.

### Gold — Local Recording + Highest Coverage

For larger homes or customers who want maximum reliability and broader local coverage.

Do not expose full BOMs or internal pricing breakdowns publicly.

---

## 6. How It Works

Approved three-step posture:

1. Choose a starting point
2. Confirm the right system
3. Approve, deposit, and schedule

Must preserve:

Quote → Agreement → Payment → Schedule

---

## 7. Fit Check / Discovery

Fit Check is helpful but not mandatory.

Purpose:

- Route customers to recommended tier
- Prepare quote context
- Keep user in control

Input examples:

- home size
- entry points
- outdoor coverage
- camera comfort

Output:

- recommended package
- rationale
- disclaimer that final design may adjust after confirmation

---

## 8. Quote, Payment & Scheduling

Two valid paths:

### Path A — Online First

Customer completes Fit Check, reviews package, approves agreement, pays deposit, schedules installation online.

### Path B — On-Site Confirmation First

Customer requests walkthrough, property is reviewed, agreement/deposit/scheduling proceed with professional confirmation.

Neither path is mandatory.

---

## 9. Navigation and State

Customers must never feel trapped.

Required behavior:

- back does not mean cancel
- edit does not mean restart
- changing package does not wipe progress when avoidable
- routes remain reversible where applicable

---

## 10. Authorized Work Under Step101

Authorized:

- UI cleanup
- homepage/page structure
- navigation cleanup
- visual suppression of duplicate step rails
- route audit and classification
- WNYHS branding cleanup
- version badge bump

Not authorized unless another active Step covers it:

- backend email infrastructure
- CRM writes
- Stripe/payment verification changes
- package/BOM restructuring

---

## 11. Secondary Step Rail Policy

The secondary pill/step rail may be preserved as reusable data/component, but it may be visually suppressed where it creates duplicate or confusing navigation.

Known pages where suppression is acceptable:

- `/home-security/planner`
- `/discovery`
- `/schedule`
- `/quoteReview`
- `/agreementReview`
- `/payment`
- `/payment/success`
- `/payment/canceled`

Do not delete route/link/step definitions unless explicitly authorized.

