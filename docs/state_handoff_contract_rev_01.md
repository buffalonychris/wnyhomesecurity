# State Handoff Contract — REV01

---

## 0. Purpose

This document defines the required state handoffs between major funnel steps in WNY Home Security and future replicated verticals.

It exists to remove silent assumptions between pages, prevent fragile funnel behavior, and make each step portable across replicated businesses.

The goal is:

> Every page must clearly know what it receives, what it produces, and what happens when required state is missing.

---

## 1. Controlling Step

This document is governed by:

> Step102 — WNYHS Replication-Readiness Hardening — REV01

No implementation work may exceed the allowed scope of Step102.

---

## 2. Core Rule

> No implicit or assumed state between funnel steps.

Each handoff must define:

- required input
- produced output
- storage / transport method
- fallback behavior
- validation requirement

---

## 3. Required Handoffs Covered

This contract covers only the Step102-critical handoffs:

1. Fit Check → Quote
2. Quote → Agreement
3. Agreement → Payment
4. Payment → Schedule

Other handoffs may be documented later, but they are out of scope for Step102 unless they block the main funnel.

---

## 4. State Transport Methods

Allowed transport methods:

- URL query parameters
- localStorage / sessionStorage
- signed token / resume token
- server-side record reference
- explicit payload object

Each implementation must identify which method is used.

---

## 5. Handoff 1 — Fit Check → Quote

### Purpose

Pass recommendation and customer fit context into the quote flow.

### Required Input

Fit Check must produce:

- vertical ID
- selected or recommended package ID
- fit answers
- recommendation rationale
- assumed coverage / quantities
- path type (online-first / onsite / other)

### Produced Output

Quote flow must receive enough information to:

- identify selected vertical
- identify selected package
- prefill assumed quantities
- generate a quote preview
- preserve recommendation context

### Transport Method

Must be explicitly defined during implementation audit.

Examples:

- query params for vertical/package/path
- localStorage/sessionStorage for full fit answers
- signed resume token for persisted quote context

### Missing State Behavior

If required state is missing:

- do not silently generate quote
- redirect to Fit Check or Package Selection
- show clear recovery message

### Validation Requirement

Confirm Quote can load from Fit Check output without manual re-entry.

---

## 6. Handoff 2 — Quote → Agreement

### Purpose

Bind the accepted quote context into the agreement flow.

### Required Input

Quote must produce:

- quote reference ID
- vertical ID
- customer/property context
- selected package ID
- add-ons selected
- total price
- deposit amount
- remaining balance
- quote version
- quote hash or integrity marker if used
- assumptions and exclusions

### Produced Output

Agreement flow must receive enough information to:

- display scope summary
- display price and payment terms
- bind agreement to quote
- capture acceptance
- produce printable agreement record

### Transport Method

Must be explicitly defined during implementation audit.

Examples:

- quote reference
- signed token
- localStorage payload
- server-side record lookup

### Missing State Behavior

If quote context is missing or invalid:

- do not allow agreement acceptance
- redirect to Quote Review
- show clear recovery message

### Validation Requirement

Confirm Agreement can be generated only from a valid quote payload or reference.

---

## 7. Handoff 3 — Agreement → Payment

### Purpose

Pass accepted agreement context into deposit payment.

### Required Input

Agreement must produce:

- agreement reference ID
- linked quote reference ID
- acceptance status
- accepted name
- accepted date/time
- total price
- deposit amount
- vertical ID
- package ID
- payment metadata required by Stripe

### Produced Output

Payment flow must receive enough information to:

- create correct Stripe checkout session
- charge correct deposit amount
- associate payment with quote/agreement
- preserve vertical/package metadata

### Transport Method

Must be explicitly defined during implementation audit.

Examples:

- agreement reference
- signed token
- server-side record reference
- Stripe metadata payload

### Missing State Behavior

If agreement acceptance is missing or invalid:

- do not create Stripe session
- redirect to Agreement Review
- show clear recovery message

### Validation Requirement

Confirm payment cannot proceed without a valid accepted agreement.

---

## 8. Handoff 4 — Payment → Schedule

### Purpose

Unlock scheduling only after successful deposit confirmation.

### Required Input

Payment must produce or confirm:

- payment status
- Stripe session ID
- payment intent or checkout reference
- agreement reference ID
- quote reference ID
- deposit paid amount
- vertical ID
- package ID
- customer context

### Produced Output

Schedule flow must receive enough information to:

- show paid/confirmed context
- display package summary
- collect install scheduling preferences
- associate scheduling request with quote/agreement/payment

### Transport Method

Must be explicitly defined during implementation audit.

Examples:

- Stripe return URL params
- server-side webhook record
- signed resume token
- local/session storage plus verified payment status

### Missing State Behavior

If payment is not verified:

- do not unlock final scheduling
- display pending/payment required state
- link back to Payment page

### Validation Requirement

Confirm scheduling does not rely only on client-side success state.

---

## 9. Required Page-Level Audit Output

For each page in the critical funnel, the audit must list:

- page / route
- required inputs
- produced outputs
- state source
- missing state behavior
- validation status

Critical pages:

- Fit Check
- Quote
- Quote Review
- Agreement Review
- Payment
- Schedule

---

## 10. Prohibited State Patterns

The following are prohibited:

- assuming prior page completed without verification
- generating quote without package/vertical context
- accepting agreement without quote reference
- creating Stripe session without accepted agreement
- unlocking schedule based only on front-end navigation
- relying on hidden operator knowledge

---

## 11. Minimal Fix Rule

Do not redesign the state model unless required by Step102 stop conditions.

Allowed fixes:

- document existing state source
- add missing validation
- add recovery redirects
- add explicit metadata mapping
- prevent invalid progression

Forbidden fixes:

- redesigning full funnel state architecture
- adding new routes
- removing existing routes
- changing Stripe/payment architecture without Step revision
- changing CRM schema without Step revision

---

## 12. Success Condition

This contract is satisfied when:

> Each critical funnel step can be understood, tested, and replicated without relying on hidden assumptions from prior pages.

---

## 13. Bottom Line

State must be visible, portable, and recoverable.

If the page needs it, the contract must say where it comes from.

---

END OF DOCUMENT

