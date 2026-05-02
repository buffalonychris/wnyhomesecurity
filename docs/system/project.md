# WNY Home Security — Project Operating System (UPDATED)

Repository: wnyhomesecurity  
Runtime: Cloudflare (Pages + Functions)  
AI Execution: Codex  
Payments: Stripe  
CRM: HubSpot  

---

## 1. AUTHORITY CHAIN (LOCKED)

All work is governed in the following order:

1. Step documents (REV-controlled)
2. /docs/system/*
3. HubSpot REV03 (LOCKED CONTRACT)
4. Codex execution prompts
5. PR validation + QA checklist

If any conflict occurs:

→ The higher authority wins  
→ No silent deviation allowed  

---

## 2. HUBSPOT GOVERNANCE (REV03)

HubSpot REV03 is:

- LOCKED
- AUTHORITATIVE
- NON-OPTIONAL

Location:

/docs/crm/hubspot/hubspot_kb_rev03.md

### Required Rules

- ALL CRM writes MUST go through `/api/lead-signal`
- API layer is the ONLY write path
- NO frontend HubSpot writes allowed
- NO direct property updates outside API
- DEDUPLICATION rules MUST be enforced
- Deal lifecycle MUST follow REV03 event model

### Payment Rules

- Stripe webhook is the ONLY source of truth for payment
- NEVER update payment status from frontend
- NEVER trust redirect success state

Violation = system breach

---

## 3. STEP DISCIPLINE (CRITICAL)

All implementation work MUST:

- Reference a controlling Step document
- Stay within Step scope
- Follow additive vs destructive rules

### Additive Steps (Default)

- No deletions
- No architecture rewrites
- No unrelated changes
- Only scoped improvements

### Destructive Steps (Explicit Only)

- Separate PR required
- Full deletion inventory required
- Zero orphan references
- Full validation required

---

## 4. CODEX EXECUTION RULES

All Codex executions MUST:

- Read and follow `/AGENTS.md`
- Reference `/docs/system/step-current.md`
- Make minimal, surgical changes only
- Create a new branch and open a PR
- NEVER merge automatically
- Run `npm run build` before completion

---

## 5. STRIPE CONTRACT (LOCKED)

- Stripe verification MUST be server-side
- Payment success MUST be webhook-verified
- Frontend success states are NOT authoritative

Codex MUST NOT:

- Implement client-side payment confirmation
- Modify Stripe logic without explicit instruction
- Expose Stripe secrets

---

## 6. COPY & CLAIMS GOVERNANCE

Forbidden claims MUST NOT appear:

- monitoring / monitored
- dispatch / dispatcher
- “we respond”
- police / authorities / emergency services
- guarantee / guaranteed
- central station

---

## 7. SYSTEM RULES

Codex MUST NOT:

- Introduce features outside Step scope
- Change funnel order or routing
- Modify architecture without Step revision
- Hardcode colors outside semantic token system

---

## 8. STOP CONDITIONS (MANDATORY)

If a request:

- Conflicts with Step documents
- Touches HubSpot logic
- Touches Stripe logic
- Violates guardrails

Codex MUST:

1. STOP execution  
2. State the conflict  
3. Request Step revision  

No silent deviation allowed.

---

## 9. VALIDATION REQUIREMENTS

Before merge:

- Build must pass
- QA checklist must pass
- No forbidden claims introduced
- No HubSpot or Stripe violations
