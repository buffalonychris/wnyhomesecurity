# Master Task Register

Status: Active  
Controlling Step: Step103 — Full Funnel Validation — REV01

---

## Active Tasks

### Step103 Active Tasks

1. Enforce Quote Review requires generated quote (no fallback entry)
2. Make /quote the only quote generation point
3. Normalize Fit Check progression to next-page flow
4. Normalize Packages progression CTA hierarchy
5. Rename Quote CTA for clarity
6. Remove duplicate package card image overlay/pill labels
7. Run full funnel validation after fixes

---

## Next Tasks

No Next Tasks are currently promoted.

---

## Backlog

No Backlog tasks are currently recorded.

---

## Blocked Tasks

No Blocked Tasks are currently recorded.

---

## Completed Tasks

### Step103 Completed Tasks

1. Diagnose and fix Quote Review quote generation/display failure

### Step102 Completed Tasks

1. Fix Payment → Schedule quote-scoped deposit validation
2. Replace hardcoded payment vertical metadata with validated vertical context
3. Add Agreement → Payment binding metadata
4. Strengthen Quote → Agreement validation

---

## Promotion Rule

- A task may be promoted to **Active Tasks** only when it is authorized by the current controlling Step listed in `/docs/system/step-current.md`.
- If scope is unclear or outside Step103, stop and request a Step revision before promotion.

---

## Codex Execution Rule

- Codex may execute only tasks listed under **Active Tasks**.
- Codex must not execute tasks from **Next Tasks**, **Backlog**, or **Blocked Tasks**.
- On completion, Codex must move finished work to **Completed Tasks**.
