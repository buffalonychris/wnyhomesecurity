# Funnel Completion QA — REV01

---

## 0. Purpose

This document defines the binary QA standard for confirming that the WNY Home Security funnel is complete, functional, and replication-ready.

It exists to prevent partial funnels, placeholder steps, broken customer paths, missing state, and incomplete transaction flows from being copied into future verticals.

The goal is:

> A stranger must be able to complete the funnel without operator assistance.

---

## 1. Controlling Step

This document is governed by:

> Step102 — WNYHS Replication-Readiness Hardening — REV01

No QA work may expand beyond Step102 scope.

---

## 2. Core QA Rule

> No partials. No placeholders. No “we’ll finish later.”

A funnel step is either:

- complete and functional
- blocked and documented
- failed

There is no soft-pass.

---

## 3. Canonical Funnel Path

The primary funnel path must work end-to-end:

```text
Landing → Packages → Fit Check → Quote → Quote Review → Agreement → Payment → Schedule
```

Optional but required-to-not-break:

```text
Precision Planner → Quote Review
Demo Dashboard → Return / Continue Path
Contact / Intake → Lead Capture
```

---

## 4. Page-Level QA Checklist

Each page must pass the checks below.

---

## 4.1 Landing Page

### Required Function

Explain the offer, build trust, and drive the visitor into Packages or Fit Check.

### Pass Criteria

- Page loads without console/runtime errors
- Brand is WNY Home Security / approved vertical branding
- Primary CTA routes to Fit Check or Packages
- Secondary CTA routes correctly if present
- Packages are visible early enough to support comparison
- Local-first / self-monitored limitations are stated clearly
- No forbidden claims are present

### Fail Conditions

- CTA does not route correctly
- Packages are hidden behind excessive education
- Customer-facing copy implies 24/7 monitoring by us
- Page still contains hub/old-brand leakage

---

## 4.2 Packages Page

### Required Function

Show Bronze / Silver / Gold options clearly without exposing internal BOMs.

### Pass Criteria

- Bronze, Silver, and Gold display correctly
- Each package has clear outcome-based positioning
- Each package has a working next-step CTA
- Prices, if shown, match current approved package data
- No internal pricing breakdowns or raw BOM tables are exposed

### Fail Conditions

- Package cards do not route
- Customer sees internal BOMs or procurement details
- Package definitions conflict with quote logic
- Tier names or pricing are inconsistent across pages

---

## 4.3 Package Detail Page

### Required Function

Explain the selected package and route the user forward.

### Pass Criteria

- Correct package loads from route/state
- Page explains what the package does in customer terms
- Package-specific CTA routes to Fit Check, Planner, or Quote path as intended
- User can return to package comparison without losing selection

### Fail Conditions

- Wrong package data displays
- CTA is dead or routes to unrelated page
- User cannot proceed from the detail page
- Package logic is hardcoded in component instead of data/config

---

## 4.4 Fit Check / Discovery

### Required Function

Collect customer context and recommend a best-fit tier.

### Pass Criteria

- Required questions render correctly
- User can complete the flow
- Recommendation is produced
- Recommendation includes plain-English rationale
- Output includes selected/recommended tier and assumed coverage context
- CTA moves user toward quote/recommendation path

### Fail Conditions

- Flow cannot complete
- Recommendation is missing
- State is not produced for quote handoff
- User can proceed with incomplete required answers without recovery handling

---

## 4.5 Precision Planner

### Required Function

Allow optional floorplan/device planning without blocking the main funnel.

### Pass Criteria

- Planner loads without runtime errors
- User can interact with layout/device tools
- Planner can be skipped without breaking quote path
- If “Apply to Quote” exists, it does not crash and preserves intended state
- Planner remains optional

### Fail Conditions

- Planner crashes
- Planner is required to proceed
- Apply-to-quote breaks quote state
- Planner introduces route/state assumptions not covered by State Handoff Contract

---

## 4.6 Quote / Quote Builder

### Required Function

Create a quote payload from package and customer context.

### Pass Criteria

- Quote can be generated from valid Fit Check/package context
- Quote includes package, assumptions, totals, deposit, and remaining balance
- Quote does not generate silently from missing required state
- Quote payload is suitable for Quote Review and Agreement

### Fail Conditions

- Quote generates with missing package/vertical context
- Totals do not match package logic
- Deposit math is inconsistent
- Quote state cannot be passed forward

---

## 4.7 Quote Review

### Required Function

Present a customer-readable quote and route to Agreement.

### Pass Criteria

- Quote reference displays where applicable
- Selected tier displays correctly
- Assumed quantities display clearly
- Total, deposit, and remaining balance display clearly
- Assumptions/exclusions are visible
- CTA routes to Agreement Review
- Print/save view works if provided
- Email/share action works or is clearly disabled/documented

### Fail Conditions

- Missing price/deposit clarity
- Missing next-step CTA
- Print/email controls fail silently
- Quote review can load invalid/missing quote without recovery behavior

---

## 4.8 Agreement Review

### Required Function

Bind the accepted agreement to a valid quote and collect acceptance.

### Pass Criteria

- Agreement displays quote-linked scope
- Pricing/payment terms are visible
- Acceptance mechanism exists
- Acceptance produces agreement state/reference
- CTA routes to Payment only after valid acceptance

### Fail Conditions

- Agreement can be accepted without valid quote
- Payment can be reached without acceptance
- Agreement lacks scope/payment terms
- Agreement state is not passed to Payment

---

## 4.9 Agreement Print

### Required Function

Provide a printable agreement record.

### Pass Criteria

- Printable record loads
- Includes reference ID/date where applicable
- Includes customer/property context when available
- Includes scope, price, terms, assumptions, exclusions
- Resume/verification links work if present

### Fail Conditions

- Missing agreement reference
- Missing linked quote reference
- Printable page errors
- Old-brand leakage appears

---

## 4.10 Payment / Deposit

### Required Function

Collect the deposit through Stripe and preserve the quote/agreement link.

### Pass Criteria

- Payment page requires accepted agreement context
- Deposit amount matches agreement/quote
- Stripe Checkout session creates successfully in test mode
- Stripe metadata includes required quote/agreement/vertical/package context
- Cancel route returns user safely to payment or quote path
- Success route leads to scheduling only after payment confirmation rules are satisfied

### Fail Conditions

- Payment can proceed without accepted agreement
- Deposit amount mismatch
- Stripe session fails without visible recovery
- Schedule unlocks based only on client-side navigation
- Stripe/payment logic is changed without Step revision

---

## 4.11 Payment Success / Canceled

### Required Function

Handle Stripe return paths clearly.

### Pass Criteria

- Success page confirms next action and routes to Schedule
- Canceled page explains recovery and routes back to Payment/Quote Review
- Neither page loses quote/agreement context
- No duplicate payment confusion is introduced

### Fail Conditions

- Success page appears without verified context
- Canceled page dead-ends
- User cannot resume
- State is lost

---

## 4.12 Schedule

### Required Function

Collect installation scheduling preferences after agreement/deposit state.

### Pass Criteria

- Schedule page loads with quote/agreement/payment context
- Package summary displays correctly
- Customer contact/address fields work
- Preferred date/time fields work
- Access notes field works
- Submission creates a scheduling request or clear next-step record
- No additional payment is collected here

### Fail Conditions

- Schedule unlocks without required agreement/payment state
- Submission fails silently
- Package/payment context is missing
- Customer reaches a dead end

---

## 4.13 Contact / Intake

### Required Function

Capture contact-first leads and route them to the operator.

### Pass Criteria

- Form loads
- Required fields are clear
- Submission path works or opens intended email/lead route
- Lead data includes name, phone/email, location, need, notes
- User receives clear next-step feedback

### Fail Conditions

- Form does not submit
- Lead route is unclear
- Old-brand email/contact leakage exists
- Customer gets no confirmation or next step

---

## 4.14 Demo Dashboard

### Required Function

Provide a sales/demo proof page without blocking the funnel.

### Pass Criteria

- Demo loads from linked route
- Demo does not imply live monitoring or emergency response
- User can return or continue to the funnel
- Branding is correct or intentionally documented

### Fail Conditions

- Demo link breaks
- Demo suggests prohibited monitoring claims
- Demo is unreachable from intended CTA

---

## 5. End-to-End Flow Test

Run the full customer path from a clean browser/session:

```text
Landing
→ Packages
→ Package Detail
→ Fit Check
→ Quote / Quote Review
→ Agreement Review
→ Payment
→ Payment Success
→ Schedule
```

### Required Result

- No manual state injection
- No developer intervention
- No broken routes
- No missing required context
- No silent failures

---

## 6. State Validation Requirements

For each critical page, record:

- required inputs
- outputs produced
- state source
- missing state behavior
- validation result

Critical pages:

- Fit Check
- Quote / Quote Review
- Agreement Review
- Payment
- Schedule

This must align with:

> State Handoff Contract — REV01

---

## 7. Replication Readiness QA

After the funnel passes as WNYHS, perform this question on each page:

> If this were cloned into WNY Home Automation, what breaks?

Failure if:

- page contains hardcoded vertical logic
- package assumptions are embedded in components
- quote/payment/schedule flow only works for Home Security
- branding cannot be swapped cleanly

This must align with:

> Core vs Vertical Separation — REV01

---

## 8. Prohibited QA Expansion

During Step102 QA, do NOT test or fix:

- visual polish
- copy improvements
- advanced CRM workflows
- performance tuning
- optional automations
- new feature ideas

Only test and fix blockers required for replication readiness.

---

## 9. Required QA Output

The Step102 QA pass must produce:

- page tested
- pass/fail status
- blocker found if any
- state issue found if any
- core/vertical issue found if any
- fix required now / defer / document exception

Suggested table:

| Page | Status | Blocker | State Issue | Core/Vertical Issue | Action |
|---|---|---|---|---|---|
| Landing | TBD | TBD | TBD | TBD | TBD |
| Packages | TBD | TBD | TBD | TBD | TBD |
| Fit Check | TBD | TBD | TBD | TBD | TBD |
| Quote Review | TBD | TBD | TBD | TBD | TBD |
| Agreement | TBD | TBD | TBD | TBD | TBD |
| Payment | TBD | TBD | TBD | TBD | TBD |
| Schedule | TBD | TBD | TBD | TBD | TBD |

---

## 10. Success Condition

Funnel Completion QA passes when:

> A stranger can complete the full WNYHS funnel without assistance, and the same funnel can be cloned into another vertical without redesign.

---

## 11. Bottom Line

A funnel is not complete because the pages exist.

A funnel is complete when the customer can finish the path and the system can be replicated without hidden repair work.

---

END OF DOCUMENT

