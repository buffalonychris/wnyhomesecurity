# SITE001 Sites / Live Site QA Integration Standard REV01

Status: Active QA / deployment governance standard
Task ID: SITE001
Customer-facing: No
Implementation authority: No

## 1. Purpose

SITE001 defines how deployed-site inspection fits into WNYHS governance.

Sites and live-site inspection are QA and evidence surfaces. They are not source of truth, do not authorize implementation, and do not override repository documents, the current operational context, the Master Task Register, route owner docs, SEO owner docs, claims guardrails, runtime contracts, or protected-system rules.

Findings from deployed-site inspection are observations. They may become candidates for KAOS intake, Recursive Self Improvement, decision review, relationship updates, business process review, future task-register entries, SEO tasks, claims governance clarification, visual/brand governance updates, SITEQA001 Playwright work, or incident/exception review. They do not become authority until promoted through bounded repository work.

## 2. Environment Model

| Surface | Definition | Use |
| --- | --- | --- |
| Production site | The public WNYHS deployment served to visitors. | Release verification, public route inspection, claims/copy observation, SEO observation, visual spot checks, and post-merge evidence. |
| Preview deployment | A deployment URL tied to a branch, pull request, or candidate release. | Pre-merge or pre-release QA when available, with explicit commit/version evidence. |
| Local development | The local dev server or local build output. | Implementation validation before PR, focused route checks, and debugging. |
| Repository source | The files, docs, contracts, and task records in the repo. | Durable authority and implementation source of truth. |
| Codex Sites surface | A Codex-hosted or inspected site surface when available. | Deployed URL discovery, inventory review, navigation review, screenshots, observations, and evidence capture. |
| Browser-rendered QA surface | A real browser view of a local, preview, or production URL. | Visitor-visible content, navigation, metadata, client route behavior, responsive layout, console errors, and visual checks. |
| Playwright future harness | A future governed browser automation harness. | Repeatable route, metadata, visual, soft-404, console, and evidence checks after SITEQA001 authorizes implementation. |

## 3. Sites Role

Sites may be used for:

- deployed URL discovery when available
- page inventory review
- navigation review
- route smoke checks
- visual review
- copy and claims review
- SEO observation
- deployment evidence collection

Sites must not:

- define strategy
- override repository docs
- approve deployment by itself
- replace browser-rendered QA
- replace Playwright once SITEQA001 exists
- create tasks automatically

## 4. Live-Site QA Layers

Live-site QA should distinguish these layers:

- HTTP route/status checks
- browser-rendered DOM checks
- metadata and SEO checks
- navigation and link checks
- claims and copy checks
- visual and responsive checks
- asset and performance observations
- soft-404 checks
- deployment and version verification
- evidence capture

No single layer is sufficient by itself. Platform deployment success, HTTP 200 responses, and Sites availability are not equivalent to WNYHS release verification.

## 5. Browser Rendering Requirement

WNYHS serves a single-page application shell. Raw HTTP checks may not show visitor-visible navigation, page copy, client-rendered metadata, route state, or runtime errors.

Browser-rendered QA is required for:

- navigation
- visible content
- client-rendered metadata
- route behavior
- soft-404 detection
- visual checks
- responsive checks
- console and runtime errors

HTTP checks remain useful for status, redirects, asset availability, robots, sitemap, and initial HTML evidence, but they must not be treated as complete visitor experience validation.

## 6. Deployment Verification Standard

Deployment verification is more than a platform state such as Cloudflare "deployed."

Deployment verification should include:

- correct deployed URL
- expected commit or version evidence
- homepage loads
- canonical category pages load
- solution pages load when in scope
- header and footer render
- no obvious broken public links
- no obvious route fallback or soft-404 problem
- metadata present as required by route policy
- claims guardrail observations
- screenshot or browser evidence where tooling supports it

Deployment evidence should name the environment, URL, commit/version when known, route set inspected, tools used, date, and unresolved observations.

## 7. Route QA Standard

Route QA must classify routes before interpreting results:

- indexable public routes
- noindex public routes
- transaction routes
- demo or tool routes
- legacy or review routes
- protected or internal routes
- nonexistent routes and 404 routes

Route QA must distinguish real 200 pages from SPA fallback soft-404 behavior. A nonexistent path that returns the SPA shell is not automatically a valid route. Browser-rendered checks should confirm whether the route resolves to intended content, an explicit not-found state, or unintended fallback content.

## 8. SEO QA Standard

SEO QA should observe:

- title
- meta description
- canonical
- robots policy
- Open Graph metadata
- Twitter metadata
- sitemap inclusion
- robots.txt treatment
- duplicate raw title issue
- initial HTML versus browser-rendered metadata

SITE001 does not fix SEO. SEO findings route to SEO owner docs, SEO task candidates, or incident/exception review when the deployed site conflicts with approved SEO policy.

## 9. Claims / Copy QA Standard

Live-site QA should flag possible claims or copy issues involving:

- professional alarm-monitoring language
- dispatch language
- emergency-response implication
- guarantee or guaranteed language
- fear-based alarm-company framing
- privacy or local-first conflicts
- subscription-lock-in conflicts

This section defines internal review signals only. It does not approve public use of restricted language. Protective disclaimers and references to prohibited claim categories may require separate governance clarification and operator review before any public-copy change.

## 10. Visual / Responsive QA Standard

Visual and responsive QA should observe:

- shared layout consistency
- header and footer consistency
- category page parity
- image cropping
- card layout
- mobile, tablet, and desktop viewports
- large image and performance observations
- dark, gold, and bronze visual consistency
- legacy or demo route visual drift

Pixel-level visual regression belongs to SITEQA001 or SITEQA002. SITE001 defines the governance standard only.

## 11. Evidence Standard

Acceptable evidence includes:

- route/status table
- rendered DOM observations
- screenshots
- console errors
- network errors
- metadata table
- broken-link list
- soft-404 findings
- claims findings
- version or commit evidence
- operator notes

Evidence must identify what was checked and what was not checked. Unknown values should be marked `Unknown`, not inferred.

## 12. Findings Routing

Live-site QA findings should route conservatively:

| Finding type | Candidate route |
| --- | --- |
| Repeated QA friction or missing repeatable check | RSI candidate |
| Governance ambiguity or policy choice | Decision candidate |
| Cross-doc dependency gap | Relationship update |
| Repeatable operational process gap | Business process candidate |
| Bounded fix or follow-up needed | Master Task Register task candidate |
| Metadata, canonical, sitemap, robots, or route-indexing concern | SEO task candidate |
| Restricted or unclear public-copy language | Claims governance clarification |
| Layout, token, image, or brand drift | Visual/brand governance update |
| Repeatable browser QA harness need | SITEQA001 Playwright task |
| Regression, broken release, or protected-system concern | Incident/exception review |

Findings are not automatically blockers. They become blockers only when higher-authority governance, active task scope, protected systems, release criteria, operator decision requirements, or incident severity make them blockers.

## 13. SITEQA001 Relationship

SITE001 defines policy. SITEQA001 will later implement the governed Playwright QA harness if separately authorized.

SITEQA001 should use this standard to decide which routes, environments, rendered checks, metadata checks, soft-404 checks, console checks, screenshots, and evidence outputs belong in the harness. SITE001 does not install Playwright, configure a test runner, create browser tests, or approve any automation.

## 14. Prohibited Behavior

This standard must not:

- install Playwright
- configure Sites
- create tests
- create hooks
- change source, runtime, or site files
- change SEO metadata
- change sitemap or robots
- approve deployments automatically
- create tasks automatically
- mark findings as authority
- treat every finding as a blocker
- mark future backlog tasks DONE

## 15. Future Use

SITE001 supports future bounded work for:

- SITEQA001 Playwright QA Harness
- SITEQA002 Visual Regression Baseline
- HOOK-SITEQA001
- CODEX001 QA/validation task template
- weekly engineering summary
- operating system health score
- knowledge graph visualization

Each future use still requires its own bounded task, owner-document review, protected-system review where relevant, validation, and operator review before implementation.
