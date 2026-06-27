# SITEQA001 Playwright Site QA Harness Specification REV01

Status: Active QA tooling specification
Task ID: SITEQA001
Customer-facing: No
Implementation authority: No

## 1. Purpose

SITEQA001 defines the future Playwright Site QA Harness for WNY Home Security.

SITE001 defines the live-site QA policy. SITEQA001 defines the tooling specification that future implementation tasks should follow when they create a governed Playwright browser QA harness.

This task does not install Playwright, create tests, configure Playwright, edit source code, edit runtime behavior, change dependencies, or change the live website. Future implementation requires separate bounded tasks.

## 2. Harness Role

The future Playwright harness should provide repeatable browser-rendered evidence for:

- route validation in a real browser
- deployed-site verification
- local-site verification
- responsive checks
- metadata checks
- soft-404 checks
- claims and copy observation
- console error capture
- network error capture
- screenshot evidence
- QA artifact generation

The harness observes and reports. It does not fix site behavior, approve releases, rewrite copy, or override repository governance.

## 3. Environment Model

Each run must declare exactly one target environment:

| Environment | Required input | Use |
| --- | --- | --- |
| Production URL | Public deployment URL | Post-release and public-site verification. |
| Preview deployment URL | Branch, PR, or deployment URL | Pre-merge or pre-release evidence when available. |
| Local development URL | Local dev server URL | Implementation smoke checks before PR. |
| Local static build preview | Local preview URL for built output | Static build verification before deployment. |

The harness must not infer the environment from ambient state. The operator or future task must pass the URL explicitly per run.

## 4. Repository Layout Specification

Future implementation tasks may create this layout when separately authorized:

```text
playwright.config.ts
tests/site-qa/
tests/site-qa/routes/
tests/site-qa/metadata/
tests/site-qa/claims/
tests/site-qa/visual/
test-results/
playwright-report/
docs/qa/evidence/
```

These paths are future implementation targets only. This specification does not create them.

## 5. Browser Matrix

Future browser targets:

| Browser target | Requirement |
| --- | --- |
| Chromium | Required baseline browser. |
| Firefox | Recommended for cross-browser confidence. |
| WebKit | Optional unless a bounded task or release concern requires it. |
| Mobile emulation | Required for responsive QA. |

Chromium should be the minimum supported browser for smoke and deployment verification runs.

## 6. Viewport Matrix

Minimum future viewport coverage:

| Viewport class | Intended coverage |
| --- | --- |
| Mobile narrow | Small phone layout and constrained navigation. |
| Mobile large | Common phone layout and touch target review. |
| Tablet | Mid-width layout and navigation transition review. |
| Laptop | Common desktop working viewport. |
| Desktop | Full desktop route verification. |
| Ultrawide | Optional, used when visual drift or layout stretch is a concern. |

Future implementation should name exact pixel dimensions in the Playwright config or test fixtures.

## 7. Route Coverage

Route inventory must start from approved route policy, sitemap policy, and SITE001 route classes. The harness should support these route classes:

- indexable public routes
- noindex public routes
- transaction routes
- demo or tool routes
- legacy or review routes
- protected or internal routes
- nonexistent and 404 routes

Route tests must distinguish intended pages from SPA fallback behavior. Nonexistent paths should be checked for explicit not-found behavior rather than assumed valid because the app shell loaded.

## 8. Deployment Verification Checks

Future deployment verification should check:

- homepage loads
- canonical category pages load
- solution pages load when in scope
- header and footer render
- primary CTAs exist
- version badge or commit evidence when available
- no broken route navigation in the inspected route set
- not-found behavior for nonexistent paths
- expected deployment URL matches the requested environment

Deployment verification failure can block task closure when the active task or release criteria require deployed-site proof.

## 9. SEO / Metadata Checks

Future SEO and metadata checks should observe:

- title
- meta description
- canonical
- robots
- Open Graph metadata
- Twitter metadata
- sitemap policy alignment
- initial HTML versus rendered metadata
- duplicate title detection

This harness does not fix SEO. SEO findings should route to appropriate owner docs, task candidates, or operator review.

## 10. Claims / Copy Checks

Future claims and copy checks should flag candidate issues involving:

- monitoring language
- dispatch language
- emergency-response implication
- guarantee or guaranteed language
- fear-based alarm-company framing
- subscription-lock-in conflicts
- privacy or local-first conflicts

The harness flags candidates only. It does not rewrite copy, approve public claims, or decide whether a finding is acceptable.

## 11. Visual / Responsive Checks

Future visual and responsive checks should collect and observe:

- screenshots by route and viewport
- header and footer presence
- major layout overflow
- image loading
- image cropping observations
- category page parity
- card layout
- dark, gold, and bronze consistency
- legacy or demo visual drift

SITEQA001 defines the harness surface. Pixel baseline approval belongs to SITEQA002.

## 12. Console / Network Checks

Future runs should capture:

- console errors
- uncaught exceptions
- failed network requests
- missing assets
- blocked resources
- client-side routing errors

The harness should separate blocking failures from warnings so docs-only, preview, and production checks can use appropriate severity.

## 13. Evidence Artifacts

Expected future artifacts:

- HTML report
- JSON summary
- screenshots
- route/status table
- metadata table
- console error log
- network error log
- soft-404 findings
- claims findings
- final pass/fail summary

Evidence artifacts should identify the environment, target URL, route set, viewport set, browser set, run mode, timestamp, and commit or version evidence when known.

## 14. Run Modes

Future run modes:

| Run mode | Purpose |
| --- | --- |
| Local smoke | Fast local route/render check. |
| Production smoke | Small public deployment confidence check. |
| Preview PR QA | Pre-merge route, metadata, and screenshot evidence. |
| Full public route QA | Broad public route validation. |
| Visual evidence capture | Screenshot collection across route and viewport matrix. |
| Metadata-only QA | SEO and metadata observation without visual review. |
| Claims-only QA | Restricted-copy candidate scan and evidence capture. |

Run modes must be explicit and must not silently expand into implementation fixes.

## 15. Pass / Warning / Fail Policy

Future harness output should use these statuses:

| Status | Meaning |
| --- | --- |
| Pass | Expected checks passed for the selected environment, route set, and run mode. |
| Warning | Finding needs review but does not automatically block closure. |
| Fail | Required check failed for the selected run mode or active task criteria. |
| Blocker | Finding blocks closure because release criteria, protected-system rules, public-claims risk, or operator review requirements make it blocking. |

Not every finding blocks work. Protected-system or public-claims issues may require operator review. Deployment verification failure can block task closure when release criteria require it.

## 16. Relationship To EVENT001 / HOOK001 / HOOKCAT001

SITEQA001 maps to existing event and hook architecture without implementing hooks:

| Related item | SITEQA001 relationship |
| --- | --- |
| `DEPLOYMENT_COMPLETED` | Future harness may run after a deployment reaches platform completion. |
| `DEPLOYMENT_VERIFIED` | Future harness evidence may support deployment verification. |
| `RSI_CANDIDATE_IDENTIFIED` | Repeated QA gaps may route to RSI review. |
| `HOOK-SITEQA001` | Future deployment QA hook may route harness evidence. |
| CODEX001 QA/validation template | Future implementation and validation work orders should use the QA task pattern. |

No hooks are implemented here. No hook configuration, script, automation, or deployment approval is created by this specification.

## 17. Future Implementation Plan

Future bounded tasks may include:

- PLAY001 - Install Playwright dependency
- PLAY002 - Add Playwright config
- PLAY003 - Add route smoke tests
- PLAY004 - Add metadata checks
- PLAY005 - Add console/network capture
- SITEQA002 - Visual Regression Baseline
- HOOK-SITEQA001 - QA evidence routing hook

These are future task candidates only unless separately activated. This specification does not create or mark them DONE.

## 18. Prohibited Behavior

This specification must not:

- install Playwright
- create tests
- create Playwright config
- change package.json
- change package-lock
- edit source, runtime, or site files
- change SEO metadata
- change sitemap or robots
- configure Sites
- create hooks
- approve deployments automatically
- create tasks automatically
- mark future backlog tasks DONE

## 19. Future Use

SITEQA001 supports future bounded work for:

- repeatable live-site QA
- deployment verification
- Codex Sites workflow
- Playwright implementation tasks
- hook-based QA evidence routing
- weekly engineering summary
- operating system health score
- knowledge graph visualization

Each future use still requires its own bounded task, owner-document review, protected-system review where relevant, validation, and operator review before implementation.
