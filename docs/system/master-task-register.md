# Master Task Register

Status: Active  
Controlling Step: Step102 — WNYHS ScanCode / QRLanding Funnel Spec — REV01

---

## Active Tasks

### Step102 Active Tasks

1. Implement additive /qrlanding route
2. Build mobile-first QR landing funnel experience
3. Implement estimate-request intake form fields from Step102
4. Capture QR attribution source family and default source
5. Integrate CRM onboarding through approved API layer
6. Implement scheduling request capture with graceful degradation
7. Validate /qrlanding funnel build and preserve existing flows

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

### Step102 (Hardening Baseline) Completed Tasks

1. Fix Payment → Schedule quote-scoped deposit validation
2. Replace hardcoded payment vertical metadata with validated vertical context
3. Add Agreement → Payment binding metadata
4. Strengthen Quote → Agreement validation

---

## Promotion Rule

- A task may be promoted to **Active Tasks** only when it is authorized by the current controlling Step listed in `/docs/system/step-current.md`.
- If scope is unclear or outside Step102, stop and request a Step revision before promotion.

---

## Codex Execution Rule

- Codex may execute only tasks listed under **Active Tasks**.
- Codex must not execute tasks from **Next Tasks**, **Backlog**, or **Blocked Tasks**.
- On completion, Codex must move finished work to **Completed Tasks**.
