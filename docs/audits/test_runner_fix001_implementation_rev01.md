# TEST-RUNNER-FIX001 Implementation Evidence REV01

**Task:** TEST-RUNNER-FIX001 — Vitest Collection and Operator Navbar Baseline Correction  
**Status:** VALIDATION COMPLETE; draft-PR evidence pending  
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01  
**Branch:** `codex/test-runner-fix001-vitest-baseline`  
**Base:** synchronized `origin/main` at `0d18830bcd04b27cbe14322a76ef9d0f2ae23efe`  
**Work Order:** `docs/codex/work-orders/TEST-RUNNER-FIX001_WORK_ORDER_REV02.md`

## Initiating blocker and clean-main baseline

LEAD-FIX002 PR #584 exposed two validation blockers outside its changed runtime surface. REV02 authorized this separate QA correction. Before this task's implementation, `main` was clean and synchronized with `origin/main`, and merge commit `4959b282da7f12f137934309111c743f15069064` was an ancestor of current `main`.

The before-change command `npm test -- --run` exited 1 with:

- 12 failed and 31 passed test files;
- 2 failed and 153 passed tests;
- 11 `tests/site-qa/**` Playwright suites collected by Vitest, each failing because Playwright `test.describe()` was executed outside the Playwright runner;
- 2 failures in `src/pages/__tests__/operatorNavbar.test.tsx`:
  - `/operator` expected the generic `WNY Home Security home` brand label before the lazy operator route resolved instead of asserting operator workspace navigation;
  - `/home-security` expected the removed heading `Local smart property solutions for Western New York homeowners`.

## Correction

### Vitest collection boundary

`vite.config.ts` now imports Vitest's supported `configDefaults` and sets:

```ts
exclude: [...configDefaults.exclude, 'tests/site-qa/**']
```

This preserves Vitest's normal default exclusions while excluding only the Playwright-owned site-QA tree. `package.json`, dependencies, the package lock, Playwright configuration, and Playwright test files were not changed.

### Operator-navbar baseline

`src/pages/__tests__/operatorNavbar.test.tsx` now:

- waits for the semantic `Operator workspace navigation` on `/operator` and verifies its two current route links;
- waits for the semantic public `WNY Home Security` navigation on `/home-security` and verifies the operator navigation is absent;
- keeps the current HALO route heading check and verifies the operator navigation is absent on `/halo`;
- removes the indirect `Business portals for connected care` copy checks and the obsolete home-security marketing heading assertion.

No production route, navbar, component, copy, styling, or runtime source was modified.

## Validation evidence

| Check | Result |
| --- | --- |
| `npm test -- --run src/pages/__tests__/operatorNavbar.test.tsx` | PASS — 1 file, 3 tests |
| `npm test -- --run` | PASS — 32 files, 155 tests; no `tests/site-qa/**` collection |
| `npm run typecheck:test` | PASS |
| `npm run build` | PASS — 1,471 modules transformed; existing dynamic/static import advisory only |
| `npm run qa:site -- --list` | PASS — Playwright discovered 399 tests in 11 files across its configured projects |
| `git diff --check` | PASS |
| Conflict-marker scan | PASS — anchored scan found no markers; the work-order's unanchored literal scan matched only an existing MTR validation-command string at line 499, not a conflict marker |
| Changed-file/scope audit | PASS — exactly four authorized files; no deletions |

## Exact files changed

- `docs/system/master-task-register.md`
- `vite.config.ts`
- `src/pages/__tests__/operatorNavbar.test.tsx`
- `docs/audits/test_runner_fix001_implementation_rev01.md`

## Scope and protected-system confirmation

- Production/runtime source changed: **NO**.
- LEAD-FIX002 runtime implementation changed: **NO**.
- Playwright suite behavior or ownership changed: **NO**; discovery remains under `playwright.config.ts` and succeeds.
- `package.json`, dependency manifests, and package lock changed: **NO**.
- HubSpot/CRM, `/api/lead-signal`, Lead Signal/requestId, Stripe/payment/webhooks, scheduling/calendar, Resend/email, QR attribution, pricing/packages, public copy, visual tokens, Cloudflare/runtime/environment/DNS, secrets, customer data, quote/agreement/payment/schedule chain, and Precision Planner changed: **NO**.
- Merge performed: **NO**.
- Deployment performed: **NO**.
- Remaining unrelated baseline blocker: **NONE**.

## OPS004 routing

Primary Workstream `Project Governance` is registered in OPS004. Related workstreams were limited to `Site Architecture` for reference-only current route/navbar semantics and `Infrastructure / Deployment System` for build validation. Related workstreams did not expand implementation scope.
