# FUNNEL-CTA001 — Contact CTA and Intake Experience Finalization

**Status:** OPERATOR-AUTHORIZED FOR EXECUTION  
**Category:** FUNNEL  
**Primary Workstream:** Public Content System  
**Related Workstreams:** Site Architecture; Visual System; Fit Check System; Estimate / Quote System; CRM / HubSpot System; Accessibility; Project Governance  
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01  
**Repository:** buffalonychris/wnyhomesecurity  
**Expected Branch:** codex/funnel-cta001-contact-intake-finalization

READ MODE: TARGETED

## 1. Objective

Finalize the two customer intake paths on the contact/estimate experience:

1. keep the callback path intentionally minimal and low-friction;
2. make the onsite-estimate path collect separate required first and last names plus the already-required phone, email, and service address;
3. apply the operator-approved friendly copy exactly;
4. preserve all existing lead-signal, HubSpot, scheduling, requestId, notification, consent-storage, route, payment, and runtime behavior except for the specifically authorized form-field mapping necessary to send already-supported first/last-name values.

## 2. Locked customer-facing copy

Codex must use these strings exactly unless punctuation/typography must be normalized by existing source conventions. Do not paraphrase, legalize, shorten, or "improve" them.

### Contact hero
`Tell us what you’d like help with, or call/text us now. We’ll help you figure out what makes sense for your home or business.`

### CTA choice intro
`Choose what works best for you. We’ll take it from there — nothing gets scheduled until we confirm it with you.`

### Callback CTA description
`Just give us your name and number. We’ll call you back and take it from there.`

### On-site CTA description
`Tell us where the property is and anything you’d like us to know. We’ll review everything with you before anything is scheduled.`

### Callback trust statement
Place immediately below the `Request a Call` heading and above callback form fields:

`Your number is not for sale. Ever. No spam, no robocall campaigns, no marketing. If you ask us to contact you about your request, that’s exactly what we use it for.`

The first sentence may remain visually emphasized as existing component semantics permit, but the wording is locked.

### Callback referral label
`Referred by (optional — good people deserve credit for good referrals.)`

### Callback submit button
`Call Me Back`

### Estimate section headings
- `First, tell us about you`
- `About the property`
- `When works best?`

### Communication heading
`How should we reach you?`

### Communication helper
`Choose any that work for you. We’ll only use them for your request, scheduling, reminders, arrival updates, and service follow-up.`

### Communication-permission heading
`Okay for us to contact you?`

### Communication authorization checkbox
`Yes — WNY Home Security may contact me using the methods I selected about this request, scheduling, reminders, arrival updates, and service follow-up.`

### Remove
Remove the current sentence:
`We do not sell your information or use this permission for unrelated marketing.`

### Preserve
Preserve:
`You may revoke permission at any time by contacting us and telling us which method you want removed.`

## 3. Form rules

### Callback
- `Name` — required; one field; first name alone is valid.
- `Phone` — required.
- `Email` — optional.
- `Referred by` — optional, with the locked label above.
- `Notes / what you want help with` — optional.
- Do not add required identity fields beyond Name and Phone.
- Existing communication-method selection and explicit authorization remain required.

### On-site estimate
Replace the current single `Name` field with:
- `First Name` — required.
- `Last Name` — required.

Also require:
- `Phone`
- `Email`
- `Street address` / service address

An onsite estimate must not submit if any of these five values is blank.

Preserve the LEAD-FIX002 precise validation UX:
- exact missing-field summary;
- per-field visible error state;
- `aria-invalid`;
- accessible error association;
- first-invalid-field focus;
- field error clears when corrected;
- submit path is not invoked while required-field validation fails.

Use explicit first-name and last-name values for the existing lead payload. Do not infer/split the onsite name after this change.

## 4. Owner Routing Matrix

| Approved concept | Canonical owner | Target | Action | Alternate-owner exclusion | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- | --- |
| Contact hero copy | Contact page | `src/pages/Contact.tsx` | MODIFY | Do not change routes/navigation | NO | HIGH |
| Callback/estimate form copy, fields, validation, payload mapping | Canonical intake form | `src/components/CanonicalEstimateRequestForm.tsx` | MODIFY | Runtime/API remains protected | NO | HIGH |
| Regression coverage | Canonical intake form tests | `src/components/CanonicalEstimateRequestForm.test.tsx` | MODIFY | No unrelated tests | NO | HIGH |
| Existing semantic styling only if needed for trust-copy placement | Canonical estimate form stylesheet | `src/styles/canonicalEstimateForm.css` | MODIFY IF REQUIRED | No token-definition changes | NO | HIGH |
| Visible deploy version | Site version owner | `src/lib/siteVersion.ts` | MODIFY | Patch bump only | NO | HIGH |
| Task evidence | MTR + bounded audit | `docs/system/master-task-register.md`; `docs/audits/funnel_cta001_implementation_rev01.md` | MODIFY / CREATE | No unrelated governance rewrite | NO | HIGH |

## 5. Allowed scope

Expected files only:
- `src/pages/Contact.tsx`
- `src/components/CanonicalEstimateRequestForm.tsx`
- `src/components/CanonicalEstimateRequestForm.test.tsx`
- `src/styles/canonicalEstimateForm.css` only if required
- `src/lib/siteVersion.ts`
- `docs/system/master-task-register.md`
- `docs/audits/funnel_cta001_implementation_rev01.md`

## 6. Forbidden / protected scope

Do not change:
- `functions/api/lead-signal.ts`
- lead event classification
- HubSpot schema, pipeline, stages, or persistence semantics
- requestId generation/authority
- scheduling behavior
- callback/estimate event types
- Resend/email runtime
- Stripe/payment
- QR attribution
- routes/navigation
- environment variables/secrets
- dependencies/package lock
- semantic token definitions
- unrelated public copy or pages
- unrelated tests/refactors

If explicit first/last payload mapping cannot be completed using existing supported form/client payload fields without a protected runtime/API change, STOP and report the exact blocker.

## 7. Validation

Targeted tests must prove:
1. callback Name required;
2. callback Phone required;
3. callback Email optional;
4. callback first-name-only Name remains valid;
5. callback approved trust/referral/button copy renders exactly;
6. onsite First Name required;
7. onsite Last Name required;
8. onsite Phone required;
9. onsite Email required;
10. onsite service address required;
11. each single missing onsite field produces only the correct field message and blocks submission;
12. multiple missing fields name only actual omissions in form order;
13. first invalid field receives focus;
14. corrected fields clear invalid state;
15. valid onsite submission sends explicit first/last values through the existing submit path;
16. communication authorization remains required;
17. valid callback and onsite submissions still reach their existing event paths.

Run:
```
npm test -- --run src/components/CanonicalEstimateRequestForm.test.tsx
npm test -- --run
npm run typecheck:test
npm run build
git diff --check
```

Verify changed files remain inside the authorized allowlist and protected files are untouched.

## 8. Delivery

- One implementation branch: `codex/funnel-cta001-contact-intake-finalization`
- One draft PR.
- Preferred PR title: `FUNNEL-CTA001 - Finalize contact CTA and intake experience`
- Do not merge.
- Do not deploy manually.
- CI-generated branch preview is not production deployment.
- Return the required execution summary and stop.

## 9. MTR lifecycle

The MTR record is already operator-authorized as ACTIVE when this work order reaches merged `main`.

On successful implementation/validation/draft-PR delivery:
- set only FUNNEL-CTA001 to DONE;
- record draft PR evidence and validation evidence;
- do not mark merge/deployment/main-sync evidence until actually verified later.

## 10. Stop conditions

STOP if:
- current authority conflicts with this work order;
- an exact target requires protected runtime/API changes;
- a new HubSpot property/schema change is required;
- scope expands outside the approved form/contact surface;
- locked copy would need substantive rewriting to implement.
