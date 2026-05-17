# COPY-FIX001 Implementation — REV01

## Scope Audited
- Main funnel customer-facing copy in agreement/deposit/payment and related status text.
- QR/newsite customer-facing agreement/home copy where phrasing implied stronger scheduling/coverage guarantees.
- Shared/legacy customer-facing payment copy references.
- Documentation register lifecycle and catalog references.

## Risky Language Found
- "reserve your install date" and "reserve your installation" language implying scheduling certainty before owner confirmation.
- "schedule your install" copy implying scheduling completion at agreement acceptance stage.
- Newsite FAQ phrasing referencing "24/7" support-style coverage wording.

## Exact Corrections Made
- Rewrote deposit/payment messaging from install reservation claims to owner-confirmed next-step posture.
- Rewrote agreement progression text to "owner-confirmed scheduling" language.
- Rewrote newsite agreement text from reservation implication to scheduling review implication.
- Rewrote payment-cancel fallback text to remove installation reservation claim.
- Rewrote newsite FAQ question/answer away from "24/7" and monitoring-adjacent implication into self-managed alert posture.

## Files Changed
- `src/pages/AgreementReview.tsx`
- `src/pages/PaymentProcessing.tsx`
- `src/pages/QuoteReview.tsx`
- `src/pages/HomeSecurityPaymentCancel.tsx`
- `src/newsite/pages/NewSiteAgreementReview.tsx`
- `src/newsite/pages/NewSiteHome.tsx`
- `src/lib/siteVersion.ts`
- `docs/system/master-task-register.md`
- `docs/DOCUMENT_CATALOG.md`

## Intentionally Preserved Language
- "deposit" and "payment" terminology was preserved where it accurately reflects existing Stripe checkout/deposit flow boundaries.
- "installation" references were preserved in contextual/legal scope language where not making timing/automation guarantees.
- Existing owner/manual confirmation posture was preserved and reinforced.

## Remaining Copy Risks
- Non-home-security or demo/legacy verticals still contain broad historical wording (outside this bounded COPY-FIX001 pass) and should be addressed in future scoped tasks where authorized.

## Validation Performed
- `npm run build`
- `rg -n "book|booked|booking|schedule|scheduled|confirmed|confirmation|install|installation|install-ready|reserve|secure|deposit|payment|monitoring|monitored|dispatch|emergency|police|fire|SMS|text|reminder|automatic|guaranteed|guarantee|live|24/7" src public docs`
- `rg -n "href=|to=|navigate\(|window.location|<Link|<NavLink" src`
- `git diff -- src public docs`
- `git status --short`
