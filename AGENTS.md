# WNYHS Codex Execution Rules

This repository is governed by:

/docs/system/project.md  
/docs/system/agent.md  
/docs/system/plan.md  
/docs/system/guardrails.md  

HubSpot Architecture (Versioned):
/docs/crm/hubspot/hubspot_kb_rev01.md  
/docs/crm/hubspot/hubspot_kb_rev02.md  
/docs/crm/hubspot/hubspot_kb_rev03.md  

Controlling Step:
/docs/system/step-current.md

---

## REQUIRED (NON-NEGOTIABLE)

All Codex executions MUST:

- Follow the authority chain defined in project.md
- Reference the controlling Step document before making changes
- Follow additive vs destructive discipline exactly
- Create a new branch and open a PR (never merge)
- Run build before completion

---

## HUBSPOT ENFORCEMENT (CRITICAL)

- HubSpot REV03 is LOCKED and AUTHORITATIVE
- REV01 and REV02 are historical reference only
- ALL CRM writes MUST go through `/api/lead-signal`
- NEVER modify HubSpot schema, properties, or pipeline
- NEVER bypass the API layer
- NEVER update payment status outside Stripe webhook

If a task touches CRM behavior:
→ STOP and verify against REV03 first

---

## STRIPE ENFORCEMENT

- Stripe verification MUST be server-side
- NEVER trust frontend success states
- NEVER expose secrets
- NEVER modify payment logic without explicit instruction

---

## COPY & CLAIMS ENFORCEMENT

Forbidden claims MUST NOT appear:
- monitoring / monitored
- dispatch / dispatcher
- “we respond”
- police / authorities
- guarantee / guaranteed
- central station

---

## SYSTEM RULES

- Use semantic token system only (no hardcoded colors)
- Do not introduce new features outside Step scope
- Do not change funnel order or routing
- Do not modify architecture without Step revision

---

## STOP CONDITIONS (MANDATORY)

If a request:

- conflicts with Step documents
- touches HubSpot logic
- touches Stripe logic
- violates guardrails

You MUST:

1. STOP execution  
2. State the conflict  
3. Request Step revision  

No silent deviation allowed.
