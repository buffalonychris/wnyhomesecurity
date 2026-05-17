# QR-FIX001 Implementation — REV01

## 1. Task Status Lifecycle
- Verified `QR-FIX001` existed as `READY` in `master-task-register`.
- Promoted execution state during this run and finalized `QR-FIX001` as `DONE` after validation passed.

## 2. QR/Newsite Pages Audited
- `src/pages/QrLanding.tsx`
- `src/newsite/pages/NewSiteSchedule.tsx`
- `src/newsite/pages/HomeSecurityPaymentSuccess.tsx`
- `src/newsite/pages/HomeSecurityPayDeposit.tsx`
- `src/newsite/pages/NewSiteHome.tsx`

## 3. Risky Language Found
- Install-ready / direct scheduling implication in NewSite scheduling page headings and body copy.
- Implied immediate scheduling finalization in callback/on-site CTA support copy.
- Payment success messaging that could be interpreted as schedule-ready certainty instead of owner-confirmed next-step request.
- Deposit page language using reserve/secure phrasing that could overstate installation certainty.
- NewSite FAQ language implying specific install lead-time promise and 24/7 team oversight.
- QR success-state wording implying direct availability confirmation by text/email rather than review + owner-confirmed follow-up.

## 4. Exact Corrections Made
- Replaced schedule/install-ready phrasing on NewSite schedule route with request/owner-confirmed language.
- Updated scheduling-path section labels and support copy to request-centric wording.
- Updated “calendar scheduling coming next” wording to a pending guided-request posture.
- Updated payment-success verified-state and fallback-state messaging to emphasize verification + request collection without auto-confirmation.
- Updated deposit page hero/support text to remove over-commit “reserve/secure installation” tone.
- Updated NewSite FAQ answers to avoid unsupported timing promise and prohibited monitoring/oversight implication.
- Updated QR landing submitted-state success copy to clarify request review and approved-contact follow-up.

## 5. CTA/Status Changes Made
- CTA routes were intentionally preserved.
- CTA label/adjacent status copy now frames next step as “request” and owner-confirmed follow-up.
- Payment-success handoff remains `/newsite/schedule` but copy now avoids implying customer self-confirmed scheduling.

## 6. Routes Intentionally Preserved
- `/qrlanding`
- `/newsite/home-security/pay-deposit`
- `/newsite/home-security/payment-success`
- `/newsite/schedule`
- `/newsite/callback`
- `/newsite/on-site-quote`

## 7. Remaining QR Readiness Risks
- Broader legacy/shared copy outside QR/newsite scope still contains scheduling/install references and should be addressed in subsequent bounded tasks where authorized.
- Customer-stage language consistency across all non-QR legacy surfaces may require follow-on COPY-FIX/PAYMENT-FIX tasks.

## 8. Validation Performed
- `npm run build`
- `rg -n "schedule|scheduled|booking|booked|confirmed|install|install-ready|deposit|payment|monitoring|dispatch|emergency|SMS|text reminder|reminder" src/newsite src/content src/components`
- `rg -n "href=|to=|navigate\(|window.location|<Link|<NavLink" src/newsite src/components src/content`
- `git diff -- src docs`
- `git status --short`

## 9. Guardrail Self-Check
- No Stripe runtime behavior changed.
- No HubSpot schema or write-path behavior changed.
- No scheduling architecture/runtime changes introduced.
- No SMS/reminder/install scheduling/dispatch/customer self-confirmation added.
- Owner-confirmed scheduling posture preserved.
- QR/public plaque traffic messaging safety improved.
