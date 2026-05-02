# QA CHECKLIST (ENFORCED)

## BUILD

- Build passes (`npm run build`)
- No console errors in key pages

---

## VERSION

- Version incremented in `src/lib/siteVersion.ts`
- New version visible in footer/homepage

---

## NAV & LAYOUT

- Sticky top nav appears on all pages
- Active nav state highlights correctly
- No duplicate headers or breadcrumbs
- Footer is present and consistent across pages

---

## FUNNEL INTEGRITY

Verify core flow loads without errors:

- `/` (landing)
- `/packages`
- `/discovery` (Fit Check)
- `/quoteReview`
- `/agreementReview`
- `/payment`
- `/schedule`

- Funnel order is NOT broken
- Back navigation behaves correctly

---

## PAGE-SPECIFIC VALIDATION (IF APPLICABLE)

- No stray top-of-page elements (breadcrumbs, duplicate nav rows)
- No layout drift between pages (spacing, width, alignment)
- Planner loads without errors (if touched)

---

## CRM / HUBSPOT (CRITICAL)

- HubSpot files NOT modified
- No direct CRM writes added
- Uses `/api/lead-signal` only
- No schema or pipeline changes

---

## STRIPE (CRITICAL)

- Stripe logic NOT modified
- No client-side payment confirmation added
- Payment flow unchanged

---

## COPY & CLAIMS

No forbidden claims:

- monitoring / monitored
- dispatch / dispatcher
- “we respond”
- police / authorities
- guarantee / guaranteed
- central station

---

## FINAL CHECK

- Changes are minimal and scoped to task
- No unrelated files modified

---

## RESULT

If ANY item fails:

❌ DO NOT MERGE  
Fix issues → re-run QA
