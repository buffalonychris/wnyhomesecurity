# NAVIMPL001 Work Order REV01

## Document control

- **Task ID:** NAVIMPL001
- **Title:** Replacement-Site Navigation and Shared Shell Implementation
- **Status:** EXECUTED — PENDING MANUAL PR AND VISUAL REVIEW
- **Operator authorization date:** 2026-07-27
- **Branch:** `codex/navimpl001`
- **Base branch:** `main`
- **Base commit:** `a4243ee4b9e5b13417769df911cc20a8c2e4e659`
- **Task type:** Bounded source and user-interface implementation
- **Primary repository system:** Public Website
- **Runtime authority:** Isolated `/beta` review environment only
- **Merge authority:** None
- **Deployment authority:** None

## 1. Objective

Replace the temporary beta-only navigation with the approved replacement-site desktop navigation, structured Pillar-First Solutions menu, dominant mobile navigation sheet, shared beta shell, theme behavior, active-page treatment, and footer architecture. Keep production navigation, production footer behavior, protected routes, funnels, runtime systems, and deployment behavior unchanged.

## 2. Authority

Follow the repository authority chain, the operator-provided NAVIMPL001 authorization, NAVIA001, HOMEAUTH001, UXAUTH001, VISREF001, COPYAUTH001, HOMEHERO001, HOMEIMPL001, PACKAGESOLMIG001, DESIGN002, semantic-token, accessibility, claims, brand-asset, header/footer, routing, analytics, attribution, funnel, and protected-runtime owners.

The existing production header/footer standard remains controlling for production. NAVIMPL001 is the explicit bounded authorization for an isolated replacement-site beta shell and does not amend production navigation.

## 3. Exact tracked-file allowlist

Only these sixteen tracked files may change:

1. `src/App.tsx`
2. `src/components/Layout.tsx`
3. `src/lib/siteVersion.ts`
4. `src/beta/navigation.ts`
5. `src/beta/BetaShell.tsx`
6. `src/beta/BetaNavigation.tsx`
7. `src/beta/BetaFooter.tsx`
8. `src/beta/BetaShell.css`
9. `src/beta/BetaHome.tsx`
10. `src/beta/BetaHome.css`
11. `src/beta/__tests__/BetaHome.test.tsx`
12. `src/beta/__tests__/BetaShell.test.tsx`
13. `docs/codex/work-orders/NAVIMPL001_WORK_ORDER_REV01.md`
14. `docs/system/master-task-register.md`
15. `docs/DOCUMENT_CATALOG.md`
16. `docs/MARKDOWN_MANIFEST.md`

Review screenshots may be created only under ignored `.local-review/NAVIMPL001/` and are not tracked.

## 4. Required outputs

- reusable nested `/beta` shell with skip link, main landmark, header, footer, and theme persistence;
- centralized typed destination configuration distinguishing homepage anchors, protected legacy routes, and future approved routes;
- desktop navigation with structured Solutions disclosure and keyboard behavior;
- exact six-pillar order and approved descriptions;
- full-height mobile navigation dialog with nested Solutions disclosure, focus containment, Escape close, focus return, background inertness, and scroll lock;
- exact assessment CTA destination `/discovery?vertical=home-security`;
- safe non-link Property Management state;
- active-page, hover, focus, light/dark, responsive, reduced-motion, and semantic-token treatment;
- focused navigation tests and local browser-review evidence;
- current-schema task, catalog, and manifest records;
- one bounded commit and one draft pull request.

## 5. Destination contract

- `/beta#solutions`, `/beta#why-wny`, `/beta#how-it-works`, and `/beta#education` are implemented homepage anchors.
- `/categories/home-security`, `/categories/aging-in-place`, `/categories/home-safety`, `/categories/home-automation`, and `/categories/home-lighting` are existing protected legacy routes linked without modification.
- `/support`, `/contact`, `/about`, `/faq`, `/privacy`, and `/terms` are existing protected legacy routes linked without modification.
- Property Management is a future approved route intent represented as a disabled, clearly labeled review state. No route is invented.

## 6. Prohibited scope

Do not replace or substantially modify production header/footer/navigation; create complete solution, pillar, education, or support pages; change production `/`; alter redirects, sitemap, canonical behavior, pricing, package/tier IDs, planner, Fit Check, discovery behavior, quote, agreement, Stripe, payment, scheduling, HubSpot, CRM, analytics, attribution, QR, Cloudflare, secrets, environment, customer records, or deployments; introduce unsupported claims or destinations; merge; or deploy.

## 7. Validation

Validate the exact sixteen-file allowlist and no deletions; focused tests; application type check; build; changed-source lint; formatting; semantic-token/raw-color audit; protected-system diff audit; merge-marker scan; `git diff --check`; route and anchor destinations; desktop disclosure keyboard/Escape/focus behavior; mobile focus containment/Escape/focus return/background lock; exact pillar order; CTA destination; Property Management state; light/dark behavior; console and resource errors; broken links; responsive widths 320, 375, 430, 768, 1024, 1366, 1440, and 1920; local screenshots; one commit; draft PR only; and clean final worktree.

Pre-existing repository-wide failures outside this allowlist do not authorize remediation.

## 8. Completion state

Completion means the sixteen-file implementation package validates, is committed and pushed on `codex/navimpl001`, and is open as a draft PR for operator browser and code review. It does not authorize production replacement, destination migration, merge, or deployment.
