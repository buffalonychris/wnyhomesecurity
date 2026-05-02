# WNYHS Execution Plan (UPDATED)

This document defines the execution model aligned with Step101 and HubSpot REV03.

---

## 1. FUNNEL FLOW (LOCKED)

### Online Path

Landing → Fit Check → Planner (Optional) → Quote → Agreement → Payment → Schedule

### On-Site Path

Landing → Walkthrough Request → Schedule → Quote → Agreement → Payment → Install

Funnel order MUST NOT be changed.

---

## 2. HUBSPOT INTEGRATION (REV03)

All funnel steps MUST emit events via:

POST /api/lead-signal

### Event Pipeline (Execution Order)

1. fit_check_completed  
2. walkthrough_requested (optional)  
3. walkthrough_scheduled  
4. quote_generated  
5. agreement_accepted  
6. install_scheduled OR payment flow  
7. Stripe webhook → deposit_paid  

No deviation allowed.

---

## 3. PAYMENT FLOW (LOCKED)

- Stripe webhook is the ONLY source of truth
- Frontend MUST NOT confirm payment
- Payment state MUST come from server verification

---

## 4. API CONTRACT (CRITICAL)

- `/api/lead-signal` is the ONLY CRM write endpoint
- No direct HubSpot interaction from frontend
- All payloads must follow REV03 structure

---

## 5. EXECUTION RULES

All development MUST:

- Follow controlling Step (`/docs/system/step-current.md`)
- Be additive unless explicitly destructive Step
- Be scoped to task only (no unrelated changes)
- Preserve funnel order and routing
- Preserve HubSpot and Stripe contracts

---

## 6. VALIDATION

Every change must:

- Pass build (`npm run build`)
- Pass QA checklist
- Not modify HubSpot or Stripe logic
- Not break funnel flow

---

## 7. FINAL RULE

If unsure:

DO NOT MODIFY HUBSPOT  
DO NOT MODIFY STRIPE  
REQUEST STEP REVISION
