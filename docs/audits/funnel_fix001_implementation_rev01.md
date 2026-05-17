# FUNNEL-FIX001 Implementation — REV01

## Corrected CTA Flows
- Main Home Security marketing nav `Schedule` primary item normalized to `Estimate` and now routes to `/contact?vertical=home-security` to avoid wrong-stage direct scheduling entry.
- Legacy Home Security nav removed direct Agreement/Payment/Scheduling jump links from primary nav to reduce wrong-order transitions.
- NewSite payment-success CTA label and supporting copy updated from install-ready language to request-based scheduling language.
- NewSite header Get Started menu removed direct `Pay deposit` shortcut to avoid bypassing quote/agreement sequencing.

## Routes Normalized
- `/contact?vertical=home-security` used as stage-safe early funnel path from marketing nav.
- `/newsite/schedule` remains the post-deposit request path; wording now reflects request/pending-confirmation posture.

## Routes Intentionally Preserved
- Protected transaction chain routes preserved: `/quoteReview` -> `/agreementReview` -> `/payment` -> `/home-security/payment/success` -> `/schedule`.
- QR landing intake route `/qrlanding` and newsite scheduling/payment runtime routes preserved.

## Known Remaining Risks
- Broader legacy route sprawl in `src/App.tsx` still exists and should be addressed in future bounded tasks.
- Additional stage phrasing consistency checks may still be needed across non-core legacy pages.

## Validation Performed
- `npm run build`
- `rg -n "href=|to=|navigate\(|window.location|<Link|<NavLink" src`
- `rg -n "/schedule|/payment|/quote|/review|/planner|/fit-check|/agreement|/deposit" src`
- `git diff -- src docs`
- `git status --short`
