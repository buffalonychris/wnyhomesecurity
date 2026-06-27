# SITEQA002 Visual Regression Baseline Standard REV01

Status: Active QA governance standard
Task ID: SITEQA002
Customer-facing: No
Implementation authority: No

## 1. Purpose

SITEQA002 defines the governed policy for future visual regression baselines for WNY Home Security.

This standard separates screenshot evidence from approved baseline assets, defines how baselines may be approved later, and sets boundaries for future visual comparison work. It does not create baseline images, visual comparison tests, screenshot thresholds, source changes, runtime changes, route changes, or customer-facing changes.

## 2. Scope

This standard applies to future QA work that compares rendered browser screenshots against an approved visual reference.

It covers:

- baseline approval rules
- baseline storage policy
- eligible routes and viewports
- screenshot naming
- refresh and review workflow
- expected-difference handling
- future threshold policy
- evidence retention
- failure classification
- prohibited behavior
- future implementation tasks

This standard is policy only. A later bounded implementation task must create any visual comparison tests, baseline files, threshold values, storage folders, or CI behavior.

## 3. Relationship To SITE001, SITEQA001, And PLAY009

SITE001 defines live-site QA policy and evidence expectations. It establishes that browser-rendered QA and screenshots are evidence surfaces, not source-of-truth authority.

SITEQA001 defines the Playwright Site QA Harness specification. It defines the harness role, route coverage, viewport classes, evidence artifacts, and pass/warning/fail posture.

PLAY009 created screenshot evidence capture only. PLAY009 screenshots are generated under ignored Playwright output and are not approved visual baselines.

SITEQA002 defines when screenshot evidence may later become an approved baseline and how future visual regression comparison tasks must treat that baseline.

## 4. Screenshot Evidence Versus Approved Baseline

Screenshot evidence is a captured rendering from a QA run. It records what a route looked like for a route, viewport, browser, environment, and run timestamp.

An approved baseline is a reviewed reference image accepted as the visual comparison source for a specific route, viewport, browser family, and baseline revision.

Screenshot evidence:

- may be temporary
- may come from local, preview, or approved production inspection
- may contain known issues
- may support review discussion
- must not automatically become a baseline
- must remain outside committed baseline storage unless separately approved

Approved baseline:

- must be reviewed intentionally
- must map to an eligible route and viewport
- must include source environment and commit or version evidence
- must have a documented approval record
- may be committed only through a later bounded implementation task that explicitly permits baseline files
- becomes the future comparison reference until refreshed through the governed refresh process

## 5. Baseline Approval Rules

Baseline approval must be explicit.

A screenshot may become an approved baseline only when all of the following are true:

- the route is eligible under this standard and any later route inventory standard
- the viewport is eligible under this standard
- the source environment is identified
- the source commit, PR, deployment, or version evidence is identified when available
- the screenshot was captured by a governed QA run or equivalent documented browser inspection
- visible layout, copy, header, footer, primary media, and route state are reviewed
- known acceptable differences are documented
- protected-system, claim-safety, and route-ownership concerns are not unresolved blockers
- an operator or authorized reviewer records approval in the future task or PR

No automated process may approve a baseline by itself.

## 6. Baseline Storage Policy

No baseline storage path is approved by this task.

Future implementation may propose a storage path only in a bounded task. That task must define:

- committed baseline folder path
- evidence-only output folder path
- ignored output behavior
- file naming convention
- update workflow
- retention policy
- review responsibility

Evidence screenshots should continue to be written only under ignored Playwright output until a later task explicitly approves committed baseline storage.

Approved baselines must not be stored in `test-results/`, `playwright-report/`, `blob-report/`, temporary folders, downloads folders, or other ignored run-output locations if they are intended to be durable source-controlled references.

## 7. Route And Viewport Eligibility

Future baseline eligibility starts with current governed route ownership, not with whatever routes happen to render.

Eligible route candidates:

- canonical homepage route
- canonical category routes
- approved public information routes
- approved search route
- approved solution routes when they are included in a future route inventory
- other routes only when separately authorized by a bounded task

Ineligible by default:

- transaction routes
- protected or internal operator routes
- nonexistent routes and SPA fallback paths
- temporary campaign routes without route-owner approval
- demo or dashboard routes unless a future task explicitly includes them
- legacy/review routes until route ownership and expected rendering are documented

Route eligibility must be documented before baselines are approved.

## 8. Mobile, Tablet, And Desktop Baseline Handling

Mobile, tablet, and desktop baselines must be treated as separate approved references.

A desktop approval does not approve mobile or tablet. A mobile approval does not approve desktop. Each baseline must name:

- viewport class
- exact viewport dimensions
- browser project or browser family
- route path
- baseline revision

Minimum future baseline classes should be:

- mobile
- tablet
- desktop

Additional laptop, wide desktop, or specialized viewport baselines require separate justification in the future implementation task.

## 9. Screenshot Naming Rules

Future screenshot and baseline names must be deterministic, readable, and route-safe.

Names should include:

- route slug
- viewport class
- width and height
- browser project
- artifact type
- optional baseline revision or run timestamp as appropriate

Recommended pattern:

```text
<route-slug>__<viewport-class>-<width>x<height>__<browser>__<artifact-type>.png
```

Examples:

```text
home__mobile-390x844__chromium__evidence.png
categories-home-security__desktop-1440x1000__chromium__baseline-rev01.png
search__tablet-768x1024__chromium__evidence.png
```

Route slugs must avoid path separators, spaces, query strings, unsafe shell characters, and environment names.

## 10. Screenshot Refresh Rules

Evidence screenshots may be refreshed whenever a governed QA run executes.

Approved baselines may be refreshed only through an explicit baseline update workflow in a later bounded task.

A baseline refresh must record:

- prior baseline identity
- new baseline identity
- route and viewport
- reason for refresh
- source commit or deployment evidence
- expected differences
- reviewer approval
- whether the change is design-authorized, content-authorized, route-authorized, or corrective

Baseline refreshes must not be bundled with unrelated source changes unless a future task explicitly permits that combined scope.

## 11. Expected-Difference Policy

Expected differences are visual changes that are known, reviewed, and authorized for a route and viewport.

Expected differences may include:

- intentional layout change
- approved copy change
- approved image or media change
- approved route ownership change
- approved header or footer change
- browser rendering difference documented by the harness
- test environment variance that does not affect the approved visual contract

Expected differences must be documented before a failing comparison is reclassified or a baseline is refreshed.

Unexpected differences must remain findings until reviewed.

## 12. Visual Regression Threshold Policy

This task does not set screenshot thresholds.

Future implementation tasks must define threshold policy before enabling visual comparisons. Threshold policy must include:

- comparison engine or method
- threshold fields and units
- per-pixel or image-level tolerance meaning
- default threshold
- route-specific exceptions, if any
- viewport-specific exceptions, if any
- animation, dynamic content, font, and media-loading handling
- review requirements for threshold increases

Thresholds must be conservative. Raising a threshold to hide a real regression is prohibited.

## 13. Review Workflow

Future baseline review should follow this sequence:

1. Capture screenshot evidence under ignored Playwright output.
2. Confirm route and viewport eligibility.
3. Inspect rendered screenshot for layout, copy, media, header, footer, and obvious route-state issues.
4. Check for protected-system, public-claim, route-owner, SEO, or source-of-truth conflicts when relevant.
5. Record expected differences or unresolved findings.
6. Approve or reject the candidate baseline.
7. Commit baseline files only if a future bounded task explicitly authorizes committed baselines.
8. Record validation and approval evidence in the PR or task record.

Rejected baseline candidates remain evidence only and must not become durable comparison references.

## 14. Evidence Retention Policy

Routine screenshot evidence generated by QA runs should remain in ignored Playwright output and may be discarded with normal test artifacts.

Evidence that supports a baseline approval, rejection, or failure investigation should be referenced in the relevant task, PR, or future QA evidence document. If durable retention is needed, a future bounded task must define the approved retention path and retention period.

Approved baselines, if later authorized, are durable QA references and must be retained until superseded by an approved refresh or removed by an explicit cleanup task.

## 15. Failure Classification

Failure classification must be documented separately from raw comparison output.

Future visual regression results must use these classifications:

| Classification | Meaning | Closure effect |
| --- | --- | --- |
| blocker | A visual difference prevents task closure because it affects release criteria, protected-system safety, public-claim safety, route ownership, or operator-required approval. | Must be resolved, approved as expected, or escalated before closure. |
| fail | A required visual comparison failed for the selected route, viewport, browser, or run mode. | Must be fixed, approved as expected, or documented as out of scope before closure. |
| warning | A visual difference or evidence gap needs review but does not automatically block the current task. | May close only when the warning is documented and routed. |
| observation | A non-blocking visual note, evidence detail, or possible future improvement. | Does not block closure. |

Classification must be based on the active task, route policy, protected-system rules, and review outcome. Automated comparison output alone must not decide final classification.

## 16. Prohibited Behavior

SITEQA002 prohibits:

- creating committed baseline images in this task
- creating visual comparison tests in this task
- adding screenshot assertions in this task
- changing Playwright config in this task
- changing route lists in tests in this task
- setting visual comparison thresholds in this task
- committing screenshots from ignored Playwright output in this task
- changing source, runtime, routes, CSS, tokens, SEO, sitemap, robots, dependencies, package files, hooks, Sites configuration, or customer-facing behavior in this task
- approving baselines automatically
- treating evidence screenshots as approved baselines
- marking future implementation tasks DONE without separate execution
- using threshold changes to hide real regressions
- running production QA unless a future bounded task explicitly requires it

## 17. Future Implementation Tasks

Future bounded implementation tasks should include:

- PLAY010 - Add Visual Regression Tests
- PLAY011 - Add Accessibility Checks
- PLAY012 - Add Performance Checks
- PLAY013 - Add Structured Data Checks
- PLAY014 - Add Sitemap / Robots Checks
- PLAY015 - Add Claims / Copy Governance Checks
- PLAY016 - Add Route Inventory Validation

These are future tasks only. SITEQA002 lists them as the recommended sequence, but does not activate them, implement them, create test files for them, or mark them DONE.
