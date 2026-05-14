# Active Steps

## Primary Execution Context

- Step102 — WNYHS ScanCode / QRLanding Funnel Spec — REV01 (CONTROLLING)

## Supporting / Existing Steps

- Step103 — Full Funnel Validation — REV01 (completed validation reference)
- Step101 — Home Security Funnel + Page Spec (REV01/REV02) (canonical funnel specification reference)
- Step201 — Existing Active Step (unchanged isolated scope)

---

## Step Roles

### Step102 — Controlling
- Governs all current execution work for QR scan-code funnel implementation
- Scope limited to:
  - /qrlanding additive route implementation
  - QR landing + estimate-request intake funnel
  - QR attribution + CRM onboarding capture
  - Scheduling request capture with graceful degradation
- No work may occur outside Step102 scope during this phase

### Step103 — Completed Reference
- Prior full-funnel validation baseline for:
  - End-to-end funnel completion testing
  - Validation-discovered funnel blocker resolution
  - Validation-critical visual clarity fixes
- Must remain preserved in record for validation and regression reference

### Step101 — Canonical Funnel Reference
- Defines canonical funnel structure and page specifications
- Used as baseline for validation and behavior expectations
- Not currently driving implementation work unless specifically invoked under controlling Step authority

### Step201 — Isolated Scope
- Remains active only within its original defined purpose
- Must not conflict with Step103
- Any overlap must defer to Step103 controlling authority for this phase

---

## Enforcement Rules

- Only ONE controlling Step may govern execution at a time
- Step102 is the active controlling Step
- All implementation requests must reference Step102
- Any scope outside Step102 requires a Step revision
- Conflicts between Steps must result in STOP and clarification

---

## Notes

- This phase is focused on QR scan-code acquisition funnel implementation
- Step103 validation remains preserved and authoritative as prior completed baseline
- No new features, redesign initiatives, or unrelated system changes are allowed outside Step102 scope
