# TEST-RUNNER-FIX001 — Vitest Collection and Operator Navbar Baseline Correction

**Revision:** REV01  
**Status:** OPERATOR-AUTHORIZED FOR EXECUTION  
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01  
**Repository:** buffalonychris/wnyhomesecurity  
**Expected Branch:** codex/test-runner-fix001-vitest-baseline  
**Task Type:** Test infrastructure / baseline correction only

## 1. Purpose

Restore the repository-wide Vitest validation command to the intended Vitest test surface and correct stale operator-navbar test expectations that already fail on clean `main`.

This task exists only to remove pre-existing validation blockers discovered during LEAD-FIX002.

It does not authorize any WNYHS production/runtime behavior change.

## 2. Clean-main verification basis

Current `main` at task creation:
`7995049b784525695d86d98c742d374feca08b4b`

The LEAD-FIX002 implementation audit recorded these repository-wide baseline failures:

1. `npm test -- --run` incorrectly collects Playwright suites under `tests/site-qa/**`, which reject Playwright `test.describe()` when executed by Vitest.
2. Two assertions in `src/pages/__tests__/operatorNavbar.test.tsx` fail independently.
3. LEAD-FIX002 focused tests pass and its changed surface does not include the failing Playwright suites or operator-navbar test.

Current clean-main repository evidence independently confirms:

- `package.json` defines:
  - `test`: `vitest`
  - `qa:site`: `playwright test`
- `vite.config.ts` configures Vitest but does not exclude `tests/site-qa/**`.
- `tests/site-qa/**` exists as the separate Playwright QA tree.
- The exact heading/copy expectations used by `src/pages/__tests__/operatorNavbar.test.tsx` are present in that test but are not present in current application source, demonstrating stale test expectations rather than LEAD-FIX002 production regressions.

## 3. Objective

Make the intended validation boundary explicit:

- Vitest runs unit/component/regression tests.
- Playwright site-QA tests remain owned by the Playwright runner.
- `npm test -- --run` must not collect `tests/site-qa/**`.
- Existing operator-navbar tests must validate current routing/navbar behavior using stable current semantics, without changing production code merely to satisfy stale copy assertions.

## 4. Execution gates

Before edits:

1. Confirm working tree is clean.
2. Confirm current branch is `main`.
3. Confirm `HEAD == origin/main`.
4. Confirm `7995049b784525695d86d98c742d374feca08b4b` is an ancestor of current `main` or current `main` is exactly that commit.
5. Create and switch to:
   `codex/test-runner-fix001-vitest-baseline`
6. Read only the minimum required files:
   - `AGENTS.md`
   - `docs/system/master-task-register.md`
   - `docs/codex/CODEX_TASK_REGISTER_RULES.md`
   - `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
   - this work order
   - `package.json`
   - `vite.config.ts`
   - `playwright.config.*` if present
   - `src/pages/__tests__/operatorNavbar.test.tsx`
   - only the current route/navbar source needed to establish correct current test expectations
7. If `TEST-RUNNER-FIX001` is absent from the MTR, add it as `ACTIVE` using the current full MTR schema before implementation.
8. If it exists as `READY`, promote only this task to `ACTIVE`.
9. If higher-authority governance conflicts with this work order, STOP.

## 5. Required work

### A. Vitest / Playwright collection boundary

Correct Vitest configuration so `npm test -- --run` does not collect `tests/site-qa/**`.

Requirements:
- preserve Vitest's normal/default exclusion behavior;
- exclude the Playwright site-QA tree explicitly;
- do not disable legitimate Vitest tests;
- do not move or delete Playwright tests;
- do not convert Playwright tests to Vitest;
- do not alter Playwright QA behavior solely to satisfy Vitest.

If setting a custom Vitest `exclude` array would replace framework defaults, preserve those defaults using the supported Vitest configuration mechanism rather than weakening the test boundary.

### B. Operator-navbar baseline tests

Correct only stale assertions in:
`src/pages/__tests__/operatorNavbar.test.tsx`

Requirements:
- validate the actual intended routing/navbar behavior;
- prefer stable semantic selectors/route-specific behavior over brittle marketing-copy assertions;
- do not alter application production code merely to make these tests pass;
- do not weaken the core assertion that operator navigation appears where intended and does not leak onto customer/public routes;
- inspect current source before choosing replacement assertions.

### C. Package scripts

Do not rename or repurpose:
- `npm test`
- `npm run qa:site`

Change `package.json` only if strictly required for a correct runner boundary. Prefer runner configuration over script churn.

## 6. Allowed files

Expected allowed implementation files:

- `docs/system/master-task-register.md`
- `vite.config.ts`
- `src/pages/__tests__/operatorNavbar.test.tsx`
- `package.json` only if strictly required
- a test-only config file only if current architecture clearly requires one
- `docs/audits/test_runner_fix001_implementation_rev01.md`

Reference-only unless a narrowly necessary test-config change requires otherwise:
- `playwright.config.*`
- route/navbar production source

## 7. Forbidden scope

Do not modify:

- production route behavior;
- production navbar/components merely to satisfy tests;
- lead-signal code;
- LEAD-FIX002 implementation files;
- Stripe/payment code;
- HubSpot code/schema/pipelines;
- scheduling runtime;
- pricing/packages;
- visual styling/tokens;
- public customer copy;
- Cloudflare/runtime configuration;
- environment variables/secrets;
- dependencies/package lock unless strictly unavoidable and separately justified;
- Playwright site-QA test behavior beyond runner-boundary evidence;
- unrelated failing tests;
- unrelated refactors.

Do not merge.
Do not deploy.

## 8. Required validation

Before changes, reproduce/document the clean-main failure signature on the task branch before edits if practical:

```
npm test -- --run
```

After changes run:

```
npm test -- --run
npm run typecheck:test
npm run build
git diff --check
```

Also prove Playwright ownership remains intact using the lightest non-destructive discovery command available, preferably:

```
npm run qa:site -- --list
```

or the equivalent supported Playwright list command.

Required result:
- Vitest does not collect `tests/site-qa/**`;
- operator-navbar tests pass;
- repository-wide `npm test -- --run` passes unless a different unrelated baseline defect is discovered;
- Playwright still discovers the site-QA suites;
- typecheck:test passes;
- build passes.

If a different unrelated failure appears after these bounded corrections:
- do not expand scope;
- report it and leave this task truthfully BLOCKED or PARTIAL according to current MTR lifecycle rules.

## 9. Audit evidence

Create:
`docs/audits/test_runner_fix001_implementation_rev01.md`

Record:
- initiating LEAD-FIX002 validation blocker;
- clean-main evidence;
- exact Vitest collection defect;
- exact stale operator-navbar assertions;
- before/after validation;
- exact files changed;
- confirmation no production/runtime source was changed;
- confirmation Playwright site-QA ownership remains intact;
- confirmation LEAD-FIX002 runtime implementation was untouched;
- any remaining unrelated baseline failure.

## 10. MTR minimum definition

**Task ID:** TEST-RUNNER-FIX001  
**Task Name:** Vitest Collection and Operator Navbar Baseline Correction  
**Status:** ACTIVE during implementation  
**Category:** TEST / VALIDATION  
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

**Purpose:** Restore correct Vitest-vs-Playwright test ownership and repair stale operator-navbar test expectations so repository-wide validation can truthfully gate protected implementation tasks.

**Allowed Scope:** test runner configuration, stale operator-navbar test assertions, tests-only validation evidence, MTR/audit.

**Forbidden Scope:** production behavior, lead runtime, payments, HubSpot, scheduling, routes, UI/copy implementation, dependencies unless unavoidable.

**Dependency:** baseline failures discovered while validating LEAD-FIX002 PR #584.

## 11. Exit criteria

Complete only when:

1. `npm test -- --run` no longer collects `tests/site-qa/**`.
2. Playwright still owns/discovers `tests/site-qa/**`.
3. operator-navbar tests pass using current stable semantics.
4. no production runtime source was changed to satisfy tests.
5. `npm run typecheck:test` passes.
6. `npm run build` passes.
7. `git diff --check` passes.
8. audit and MTR evidence are truthful.
9. one task branch is committed/pushed.
10. one DRAFT PR to `main` is created if GitHub auth permits.
11. no merge/deployment occurs.

## 12. Delivery

Branch:
`codex/test-runner-fix001-vitest-baseline`

Preferred PR title:
`TEST-RUNNER-FIX001 - Restore Vitest validation baseline`

Final Codex summary must include:
1. task status;
2. branch;
3. commit SHA;
4. draft PR number/URL;
5. exact files changed;
6. clean-main failure signature;
7. Vitest collection correction;
8. operator-navbar test correction;
9. full `npm test -- --run` result;
10. Playwright discovery result;
11. typecheck:test/build/diff-check results;
12. confirmation production/runtime source untouched;
13. confirmation LEAD-FIX002 runtime files untouched;
14. any remaining unrelated blocker.

STOP after TEST-RUNNER-FIX001.
