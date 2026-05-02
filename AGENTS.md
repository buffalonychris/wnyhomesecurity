# WNYHS Codex Execution Rules

This repository is governed by:

- /docs/system/project.md
- /docs/system/agent.md
- /docs/system/plan.md
- /docs/system/guardrails.md

HubSpot Architecture (Versioned):

- /docs/crm/hubspot/hubspot_kb_rev01.md
- /docs/crm/hubspot/hubspot_kb_rev02.md
- /docs/crm/hubspot/hubspot_kb_rev03.md

Controlling Step:

- /docs/system/step-current.md

---

## REQUIRED (NON-NEGOTIABLE)

All Codex executions MUST:

- Follow the authority chain defined in project.md
- Reference the controlling Step document BEFORE making changes
- Follow additive vs destructive discipline EXACTLY
- Create a new branch and open a PR (DO NOT MERGE)
- Run build before completion

---

## HUBSPOT ENFORCEMENT (CRITICAL)

- HubSpot REV03 is LOCKED and AUTHORITATIVE
- REV01 and REV02 are historical reference only
- ALL CRM writes MUST go through: `/api/lead-signal`
- API layer is the ONLY allowed write path

Codex MUST NOT:

- Modify HubSpot schema, properties, or pipeline
- Bypass the API layer
- Write directly to HubSpot from frontend or client logic
- Update payment state outside Stripe webhook

If a task touches CRM behavior:

→ STOP  
→ Verify against REV03  
→ Request Step revision if unclear  

---

## STRIPE ENFORCEMENT

- Stripe verification MUST be server-side
- Payment success MUST be webhook-verified
- Frontend success states are NOT authoritative

Codex MUST NOT:

- Trust redirect URLs for payment confirmation
- Implement client-side payment confirmation logic
- Expose Stripe secrets
- Modify Stripe logic without explicit instruction

---

## COPY & CLAIMS ENFORCEMENT

Forbidden claims MUST NOT appear:

- monitoring / monitored
- dispatch / dispatcher
- “we respond”
- police / authorities / emergency services
- guarantee / guaranteed
- central station

---

## SYSTEM RULES

Codex MUST NOT:

- Introduce new features outside Step scope
- Change funnel order or routing
- Modify architecture without Step revision
- Hardcode colors outside semantic token system

---

## OUTPUT REQUIREMENTS (MANDATORY)

Every Codex execution MUST return:

- New version number
- Summary of changes
- Files modified
- Confirmation HubSpot untouched
- Confirmation Stripe untouched
- Build result

---

## STOP CONDITIONS (MANDATORY)

If a request:

- Conflicts with Step documents
- Touches HubSpot logic
- Touches Stripe logic
- Violates guardrails

Codex MUST:

1. STOP execution  
2. State the conflict clearly  
3. Request Step revision  

No silent deviation allowed.
