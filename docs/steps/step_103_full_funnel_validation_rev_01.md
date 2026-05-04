# Step103 — Full Funnel Validation — REV01

---

## 1. Purpose

Step103 validates the complete WNY Home Security customer funnel after Step102 hardening.

This Step exists to prove:

> A real customer can move through the funnel end-to-end without operator assistance, manual state injection, developer intervention, or hidden knowledge.

---

## 2. Scope (STRICT)

### Allowed Work

- Full funnel validation from Landing → Packages → Fit Check → Quote Review → Agreement → Payment → Schedule
- Diagnose and fix funnel blockers discovered during validation
- Fix customer-facing visual defects only when they directly interfere with funnel clarity or completion
- Preserve Step102 state/payment/agreement hardening
- Document validation findings and task status

### Explicitly Forbidden

- No route cleanup
- No sitemap/robots cleanup
- No legacy vertical removal
- No CRM schema expansion
- No Stripe architecture change
- No new features
- No broad UI redesign
- No copy rewrite unrelated to validation defects
- No destructive deletion of existing docs/history

---

## 3. Known Initial Findings

### 3.1 Package card image overlay defect

**Observed issue:**
On the packages page, each package card displays an extra text pill/overlay over the image:

- Bronze: “Essential indoor visibility”
- Silver: similar duplicate image-overlay label
- Gold: similar duplicate image-overlay label

**Problem:**
The text is already embedded in the package images, so the additional overlay/pill duplicates the text and visually clutters the cards.

**Required fix:**
Remove the duplicate overlay/pill text from the package images/cards while preserving the package cards, package images, CTAs, pricing, and layout.

**Priority:**
Secondary. This is a visual clarity defect, not a funnel blocker.

### 3.2 Quote Review not generating/displaying quotes

**Observed issue:**
Quote Review is not showing quote output regardless of attempted path.

**Problem:**
The funnel cannot complete if Quote Review does not receive or render a valid quote.

**Required fix:**
Diagnose and fix Quote Review state/input generation/display failure while preserving Step102 handoff rules.

**Priority:**
Critical. This is a funnel blocker.

---

## 4. Acceptance Criteria (BINARY)

Step103 is complete only when:

- Landing loads
- Packages page loads
- Package cards display without duplicate overlay/pill labels
- Fit Check completes
- Quote Review displays a valid quote from the selected/recommended package path
- Agreement Review can proceed only from valid quote context
- Payment can proceed only from valid agreement context
- Schedule can proceed only from quote-scoped confirmed deposit state
- No manual state injection is required
- No developer intervention is required
- `npm run build` passes

---

## 5. Relationship to Prior/Parallel Steps

- Step103 is the current controlling Step for full-funnel validation and direct blocker resolution.
- Step102 remains a completed hardening reference and must be preserved.
- Step101 remains the canonical funnel specification reference.
- Step201 remains active only within its original isolated scope and must not conflict with Step103.

---

## 6. Execution Rules

- Apply additive, surgical fixes only.
- Preserve the Quote → Agreement → Payment → Schedule protection chain.
- Preserve all existing governance and historical records.
- Do not expand into non-validation initiatives.

---

## 7. Stop Conditions

If requested work under this Step would require any of the following, STOP and request Step revision before implementation:

- CRM schema changes
- Stripe architecture changes
- Funnel route removals/additions outside current design
- Broad redesign beyond validation defect correction
- Scope expansion beyond full-funnel validation and direct blockers

---

## 8. Bottom Line

Step103 governs the focused completion of end-to-end customer funnel validation after hardening.

> The funnel must be provably completable by a real customer without hidden intervention.

---

END OF DOCUMENT
