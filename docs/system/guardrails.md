# WNYHS Guardrails (UPDATED)

This document enforces system constraints across all Codex executions.

---

## 1. HUBSPOT ENFORCEMENT (CRITICAL)

HubSpot REV03 governs:

- data flow
- lifecycle stages
- payment state
- deduplication

Location:
/docs/crm/hubspot/hubspot_kb_rev03.md

### STRICT RULES

- API (`/api/lead-signal`) is the ONLY write layer
- Stripe webhook is the ONLY payment authority
- No frontend CRM logic allowed

### FORBIDDEN

- Direct HubSpot writes
- Client-side payment confirmation
- Bypassing API layer
- Updating payment outside webhook

---

## 2. STRIPE ENFORCEMENT (CRITICAL)

- Stripe verification MUST be server-side
- Payment success MUST be webhook-verified
- Frontend success states are NOT authoritative

### FORBIDDEN

- Trusting redirect success states
- Client-side payment confirmation logic
- Exposing Stripe secrets
- Modifying Stripe logic without explicit instruction

---

## 3. COPY & CLAIMS GUARDRAILS

Forbidden claims MUST NOT appear:

- monitoring / monitored
- dispatch / dispatcher
- “we respond”
- police / authorities / emergency services
- guarantee / guaranteed
- central station

---

## 4. THEME & UI RULES

- All styling MUST use semantic tokens
- No hardcoded colors in components
- No inline styling overrides that bypass token system

---

## 5. STEP DISCIPLINE ENFORCEMENT

- Additive-only during Step001 / Step003 / Step004 / Step005
- Destructive changes ONLY allowed in Step002
- No mixed additive + destructive PRs
- No scope expansion beyond controlling Step

---

## 6. EXECUTION SAFETY RULES

Codex MUST NOT:

- Modify architecture without Step revision
- Introduce unrelated changes in same PR
- Change funnel routing or order
- Modify HubSpot or Stripe logic without explicit instruction

---

## 7. VALIDATION REQUIREMENTS

Every change MUST:

- Pass `npm run build`
- Pass QA checklist
- Avoid forbidden claims
- Avoid CRM or payment violations

---

## 8. STOP CONDITIONS

If a task:

- violates HubSpot REV03
- violates Stripe contract
- violates Step discipline
- introduces forbidden claims

Codex MUST:

1. STOP execution  
2. State the violation  
3. Request Step revision  

No silent deviation allowed.
