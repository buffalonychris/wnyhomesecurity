# WNYHS Current Step (ACTIVE)

## Controlling Step

Step101 — Home Security Funnel + Page Spec (REV02)

This is the ACTIVE controlling Step for all Codex execution.

---

## SCOPE

All work MUST remain within:

- Funnel UX/UI refinement
- Navigation consistency
- Layout normalization
- Page structure alignment
- Conversion flow integrity

---

## FUNNEL ORDER (LOCKED)

Online Path:

Landing → Fit Check → Planner (Optional) → Quote → Agreement → Payment → Schedule

On-Site Path:

Landing → Walkthrough Request → Schedule → Quote → Agreement → Payment → Install

Funnel order MUST NOT be changed.

---

## PROTECTED SYSTEMS

The following systems are LOCKED and MUST NOT be modified:

### HubSpot (REV03)
- `/docs/crm/hubspot/hubspot_kb_rev03.md`
- CRM writes ONLY via `/api/lead-signal`

### Stripe
- Payment verification MUST be server-side
- Stripe webhook is the ONLY payment authority

---

## EXECUTION RULES

All Codex work MUST:

- Be additive (no deletions)
- Be minimal and scoped
- Not introduce new features outside Step scope
- Not modify architecture
- Not break funnel routing

---

## STOP CONDITIONS

If a requested task:

- Exceeds Step101 scope
- Modifies HubSpot behavior
- Modifies Stripe/payment logic
- Changes funnel order

Codex MUST:

1. STOP execution  
2. State the conflict  
3. Request Step revision  

No silent deviation allowed.
