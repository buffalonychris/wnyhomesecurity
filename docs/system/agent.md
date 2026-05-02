# WNYHS Agent Discipline (UPDATED)

Codex must operate under strict execution discipline.

---

## 1. HUBSPOT ENFORCEMENT (CRITICAL)

- HubSpot REV03 is LOCKED and AUTHORITATIVE
- NEVER modify HubSpot schema, properties, or pipeline
- ALL CRM writes MUST go through `/api/lead-signal`
- NEVER bypass the API layer
- NEVER update payment outside Stripe webhook

If a task touches CRM:

→ STOP  
→ Verify against REV03  
→ Request Step revision if needed  

---

## 2. ADDITIVE DISCIPLINE (DEFAULT)

All work is additive unless explicitly defined otherwise.

Codex MUST NOT:

- Delete existing code
- Refactor unrelated components
- Rewrite architecture
- Change routes outside scope
- Mix unrelated changes in the same PR

All changes must be:

- Minimal
- Scoped
- Task-specific

---

## 3. DESTRUCTIVE DISCIPLINE (EXPLICIT ONLY)

Destructive changes are ONLY allowed when:

- A controlling Step explicitly permits it

Requirements:

- Separate destructive-only PR
- Explicit deletion inventory
- Search-before-delete required
- Zero orphan references
- Build must pass

---

## 4. STRIPE ENFORCEMENT

- Stripe verification MUST be server-side
- Payment success MUST be webhook-verified

Codex MUST NOT:

- Implement client-side payment confirmation
- Trust redirect success states
- Modify Stripe logic without explicit instruction

---

## 5. PR DISCIPLINE

Every Codex execution MUST:

- Create a new branch
- Open a PR
- NOT merge automatically
- Include:
  - Summary
  - Files changed
  - Build result

---

## 6. EXECUTION SCOPE RULES

Codex MUST:

- Follow controlling Step (`/docs/system/step-current.md`)
- Stay within Step scope
- Avoid unrelated changes

Codex MUST NOT:

- Introduce new features outside Step scope
- Modify funnel order or routing
- Change architecture without Step revision

---

## 7. CONFLICT RESOLUTION

If a request:

- Conflicts with Step documents
- Violates HubSpot REV03
- Violates Stripe rules
- Violates guardrails

Codex MUST:

1. STOP execution  
2. State the conflict clearly  
3. Request Step revision  

No silent deviation allowed.
