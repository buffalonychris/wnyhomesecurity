# PILLARAGING001 Work Order REV01

## Repository and task

- **Repository:** `buffalonychris/wnyhomesecurity`
- **Controlling context:** `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`
- **Task ID:** `PILLARAGING001`
- **Task:** Aging in Place Pillar Page Implementation
- **Status:** EXECUTED — PENDING MANUAL PR AND VISUAL REVIEW
- **Branch:** `codex/pillaraging001`
- **Base:** `main` at `dddf22f9196325326eabecb7efd471d32e2fbdac`

## Objective

Create the isolated Aging in Place pillar page at `/beta/solutions/aging-in-place`. Reuse the shared beta shell and approved solution-first, non-medical copy while preserving production Aging in Place routes and every protected funnel/runtime boundary.

## Exact tracked-file allowlist

1. `src/App.tsx`
2. `src/lib/siteVersion.ts`
3. `src/beta/navigation.ts`
4. `src/beta/BetaAging.tsx`
5. `src/beta/BetaAging.css`
6. `src/beta/__tests__/BetaAging.test.tsx`
7. `src/beta/__tests__/BetaSecurity.test.tsx`
8. `src/beta/__tests__/BetaSolutions.test.tsx`
9. `docs/codex/work-orders/PILLARAGING001_WORK_ORDER_REV01.md`
10. `docs/system/master-task-register.md`
11. `docs/DOCUMENT_CATALOG.md`
12. `docs/MARKDOWN_MANIFEST.md`

No other tracked file may change.

## Allowed scope

- Register one nested, lazy-loaded beta route.
- Add one beta Aging in Place component and directly required semantic-token styles.
- Point the centralized beta Aging in Place destination to the implemented beta route.
- Preserve and validate Solutions active state for the nested route.
- Update only directly affected focused tests.
- Bump the visible beta site version.
- Create ignored local browser-review evidence.
- Update this work order, MTR, catalog, and manifest.
- Create one commit and one draft PR.

## Forbidden scope

No production route, redirect, sitemap, canonical, production navigation/footer, package/tier/price/ID, hardware catalog, planner, Fit Check, discovery behavior, form, quote, agreement, Stripe/payment, scheduling, HubSpot/CRM, analytics/attribution, QR, Cloudflare, dependency, package-lock, environment, secret, customer record, merge, or deployment change. No medical monitoring, fall-detection, caregiver-replacement, emergency-response, guaranteed-safety, universal-compatibility, or unsupported offline claim.

## Page boundary

Cover approved independence and dignity outcomes, common household priorities, supported capability groups, qualified everyday scenarios, a secondary illustrative Property Dashboard, explicit privacy/consent/non-medical boundaries, qualified ownership/local-control posture, safe cross-pillar relationships, expandability, education topics, and the exact `/discovery?vertical=home-security` assessment destination. The page must remain solution-first and must not become a clinical service, surveillance product, package comparison, hardware catalog, or fear-based page.

## Validation

- Exact 12-file allowlist and no deletion.
- Direct beta route; production routes unchanged.
- Shared shell and active Solutions navigation.
- Approved copy, dignity/consent framing, claim qualifications, exact CTA, safe non-links.
- Light/dark and 320–1920 px review with no overflow.
- Keyboard, focus, semantic structure, touch sizing, reduced motion.
- Semantic-token and forbidden-claims audit.
- Focused tests, changed-source lint, typecheck, build.
- Browser console/resource and broken-link review.
- Catalog/manifest consistency and `git diff --check`.
- One draft PR; no merge or deployment.

## Completion state

After validation, set this work order to `EXECUTED — PENDING MANUAL PR AND VISUAL REVIEW` and the MTR record to `DONE — PENDING MANUAL PR AND VISUAL REVIEW`.
