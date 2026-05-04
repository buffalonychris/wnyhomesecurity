# Active Steps

## Primary Execution Context

- Step102 — WNYHS Replication-Readiness Hardening — REV01 (CONTROLLING)

## Supporting / Existing Steps

- Step101 — Home Security Funnel + Page Spec (REV01/REV02)
- Step201 — Existing Active Step (unchanged scope)

---

## Step Roles

### Step102 — Controlling
- Governs all current execution work
- Scope limited to:
  - Core vs Vertical Separation
  - State Handoff Enforcement
  - Funnel Completion QA
- No work may occur outside Step102 scope during this phase

### Step101 — Reference
- Defines canonical funnel structure and page specifications
- Used as baseline for validation during QA
- Not currently driving implementation work

### Step201 — Isolated Scope
- Remains active only within its original defined purpose
- Must not conflict with Step102
- Any overlap must defer to Step102

---

## Enforcement Rules

- Only ONE controlling Step may govern execution at a time
- Step102 is the active controlling Step
- All implementation requests must reference Step102
- Any scope outside Step102 requires a Step revision
- Conflicts between Steps must result in STOP and clarification

---

## Notes

- This phase is focused on replication readiness, not feature expansion
- WNYHS is being hardened as the canonical vertical template
- No new features, redesigns, or system changes are allowed outside Step102 scope
