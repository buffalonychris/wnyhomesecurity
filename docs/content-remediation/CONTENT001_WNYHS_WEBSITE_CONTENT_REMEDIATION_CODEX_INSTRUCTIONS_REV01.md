# CONTENT001 — WNYHS Website Content Remediation Codex Instructions REV01

## Purpose

This document converts the WNYHomeSecurity.com live content audit into a bounded Codex execution plan.

The goal is not to redesign the website.

The goal is to remediate the highest-value conversion and positioning gaps identified by the live audit, while preserving WNYHS governance discipline.

---

# Source Context

The live audit scored the current public-facing WNYHS pages as follows:

| Page | URL | Score | Decision |
|---|---|---:|---|
| Homepage | https://www.wnyhomesecurity.com/ | 41/100 | REWRITE |
| Solutions / Packages | https://wnyhomesecurity.com/packages?vertical=home-security | 41/100 | IMPROVE |
| Support | https://wnyhomesecurity.com/support?vertical=home-security | 26/100 | REWRITE |
| Our Work | https://wnyhomesecurity.com/our-work?vertical=home-security | 46/100 | IMPROVE |
| QR Landing | https://www.wnyhomesecurity.com/qrlanding?src=placard | 27/100 | REWRITE |

Primary recurring deficiencies:

1. Missing social proof and review visibility.
2. Missing hero-level CTA clarity.
3. Missing no-required-monthly-fees / customer-owned-equipment positioning.
4. Hardware-first messaging instead of homeowner-problem-first messaging.
5. Weak WNY local trust signals.
6. Weak QR landing context alignment.
7. Support page lacks local support authority and self-serve help.
8. Our Work page shows capability but does not tell customer outcome stories.

---

# Required Governance Handling

This task affects public-facing website content and conversion behavior.

Therefore, implementation requires one of the following before code changes:

1. Promotion into `/docs/system/master-task-register.md`, or
2. Approval under the current operational context, or
3. A new Step revision explicitly authorizing CONTENT001.

Until authorized, Codex may only perform audit/planning/documentation work.

---

# Recommended Task Breakdown

Do not implement this as one giant task.

Use separate bounded Codex tasks:

## CONTENT001-A — Create Remediation Backlog / Governance Entry

Type: docs-only  
Purpose: Add the audit-driven remediation task structure to the Master Task Register or appropriate governance doc.  
No runtime/UI implementation.

## CONTENT001-B — Sprint 1 Conversion Leak Fixes

Type: implementation  
Pages:
- Homepage
- QR Landing

Focus:
- Hero CTA
- social proof placement
- no-required-monthly-fee positioning
- customer-owned-equipment positioning
- problem-first messaging
- QR landing speed/context review

## CONTENT001-C — Sprint 2 Solutions Page Remediation

Type: implementation  
Page:
- Solutions / Packages

Focus:
- outcome-based package framing
- transparent pricing visibility if already supported by project rules
- “best for” homeowner problem mapping
- preserve existing pricing/business rules unless task revision authorizes pricing changes

## CONTENT001-D — Sprint 3 Trust Pages

Type: implementation  
Pages:
- Our Work
- Support

Focus:
- Our Work mini case-study structure
- Support FAQ / local support positioning
- self-serve support content
- no unrelated redesign

## CONTENT001-E — New Opportunity Pages

Type: implementation  
Pages to create only after Sprint 1-3 are complete or explicitly authorized:
- `/solutions/senior-safety`
- `/solutions/water-protection`
- `/solutions/vacation-homes`
- `/solutions/family-awareness`

---

# COPY / CLAIMS RULES

Allowed positioning:

- Local Smart Property Solutions
- No required monthly fees
- Customer-owned equipment
- Local WNY support
- Professionally installed
- Designed around homeowner outcomes
- Expandable over time

Avoid / forbidden unless explicitly backed by approved source docs:

- Guaranteed protection
- Crime prevention guarantees
- Medical emergency guarantees
- Fall detection guarantees
- Insurance savings guarantees
- “We just secured your neighbor’s home” unless actual placement-specific evidence exists
- Any claim that implies monitoring, emergency response, or medical reliability beyond documented capability

Preferred safe QR copy options:

- “Local Smart Property Solutions for Western New York Homeowners”
- “Cameras, Property Protection, and Smart Home Solutions Without Required Monthly Fees”
- “Scan to Request a Local Smart Property Estimate”
- “See What WNY Home Security Can Build for Your Home”

---

# SEMANTIC TOKEN RULE

Do not hardcode colors.

Any visual changes must use existing semantic tokens / established site design system.

If a needed token does not exist, stop and document the gap instead of inventing a hardcoded color.

---

# PROTECTED SYSTEMS

Do not modify:

- Stripe logic
- Stripe checkout
- Stripe webhook behavior
- HubSpot schemas or integration logic
- Resend/email runtime
- Calendar/scheduling runtime
- Environment variables
- Secrets
- Cloudflare deployment settings

Unless a later task explicitly authorizes that runtime scope.

---

# VERSION BUMP RULE

For any implementation task that changes public website behavior or copy, include:

## TASK 0 — VERSION BUMP

Increment the visible site version badge by one patch version.

This is required so the operator can verify Cloudflare has published the merged change.

Docs-only tasks do not require a visible version bump unless repository rules say otherwise.

---

# MASTER CODEX PROMPT — CONTENT001-A

Copy/paste this prompt first.

```text
SYSTEM CONTEXT — REQUIRED

You are working inside the WNY Home Security repository.

Load and follow:

/docs/system/project.md
/docs/system/agent.md
/docs/system/plan.md
/docs/system/guardrails.md
/docs/system/step-current.md
/docs/system/master-task-register.md
/docs/DOCUMENT_CATALOG.md

If these docs conflict, stop and explain the conflict.

TASK NAME

CONTENT001-A — Website Content Remediation Backlog / Governance Entry

TASK TYPE

Docs-only / governance preparation.

IMPORTANT CONTEXT

A live content audit of WNYHomeSecurity.com scored five core public-facing pages:

- Homepage: 41/100 — REWRITE
- Solutions / Packages: 41/100 — IMPROVE
- Support: 26/100 — REWRITE
- Our Work: 46/100 — IMPROVE
- QR Landing: 27/100 — REWRITE

Main deficiencies:

- missing social proof
- weak hero CTA clarity
- weak no-required-monthly-fees visibility
- weak customer-owned-equipment positioning
- hardware-first copy instead of homeowner-problem-first copy
- weak WNY local trust signals
- weak QR landing context alignment
- Support page lacks self-serve help and local support positioning
- Our Work page needs customer outcome stories

OBJECTIVE

Create or update the appropriate governance/task documentation so CONTENT001 website content remediation can be executed in bounded implementation sprints.

REQUIRED PRECHECK

1. Confirm the current controlling operational context.
2. Confirm whether a CONTENT/content-remediation task already exists.
3. Confirm where task entries should be added.
4. If governance does not allow adding this task, stop and explain what authorization is needed.

REQUIRED WORK

If allowed by governance:

1. Add CONTENT001 as a parent remediation initiative or equivalent task.
2. Add bounded child tasks or queue entries:

   - CONTENT001-B — Sprint 1 Conversion Leak Fixes: Homepage + QR Landing
   - CONTENT001-C — Sprint 2 Solutions Page Remediation
   - CONTENT001-D — Sprint 3 Trust Pages: Our Work + Support
   - CONTENT001-E — New Opportunity Pages

3. Each task must include:

   - Task ID
   - Task name
   - Status
   - Category
   - Controlling context
   - Purpose
   - Allowed scope
   - Forbidden scope
   - Target files
   - Runtime systems affected
   - Documentation updates required
   - Validation required
   - Exit criteria
   - Dependencies
   - Operator decision required

TARGET FILES

Primary:
- /docs/system/master-task-register.md

Secondary only if required:
- /docs/DOCUMENT_CATALOG.md
- relevant docs/codex task files if repo convention requires it

REFERENCE ONLY

Do not modify implementation files in this task.

FORBIDDEN MODIFICATIONS

- No source code edits
- No public website copy edits
- No UI changes
- No route changes
- No Stripe logic changes
- No HubSpot logic changes
- No environment variable changes
- No secrets
- No destructive cleanup
- No merge

EXPECTED OUTPUT

1. Governance/task entries created or updated.
2. Summary of files changed.
3. Confirmation that no implementation was performed.
4. Follow-up implementation task order.
5. Any authorization gaps or blocked items.

VALIDATION COMMANDS

Run:

- git diff -- docs/system docs/DOCUMENT_CATALOG.md docs/codex
- rg -n "CONTENT001|Website Content Remediation|QR Landing|Homepage|Support|Our Work|Solutions" docs/system docs/DOCUMENT_CATALOG.md docs/codex

SELF-CHECK

Confirm:

- Docs-only scope was preserved.
- No implementation was performed.
- No protected runtime systems were modified.
- No public site copy was changed.
- CONTENT001 implementation tasks are bounded.
- Follow-up work is sequenced by dependency and priority.
```

---

# MASTER CODEX PROMPT — CONTENT001-B

Use only after CONTENT001 is authorized/promoted.

```text
SYSTEM CONTEXT — REQUIRED

You are working inside the WNY Home Security repository.

Load and follow:

/docs/system/project.md
/docs/system/agent.md
/docs/system/plan.md
/docs/system/guardrails.md
/docs/system/step-current.md
/docs/system/master-task-register.md
/docs/DOCUMENT_CATALOG.md

If these docs conflict, stop and explain the conflict.

TASK 0 — VERSION BUMP

Increment the visible site version badge by one patch version.

TASK NAME

CONTENT001-B — Sprint 1 Conversion Leak Fixes: Homepage + QR Landing

TASK TYPE

Bounded public website content/UI implementation.

IMPORTANT CONTEXT

This task remediates the highest-priority conversion leaks identified by the live content audit.

Pages in scope:

- Homepage: https://www.wnyhomesecurity.com/
- QR Landing: https://www.wnyhomesecurity.com/qrlanding?src=placard

Audit scores:

- Homepage: 41/100 — REWRITE
- QR Landing: 27/100 — REWRITE

Primary deficiencies:

- missing hero CTA
- missing social proof
- weak no-required-monthly-fees positioning
- weak customer-owned-equipment positioning
- weak WNY local trust signals
- hardware-first messaging
- QR page does not adequately match physical placard scan context
- QR page may have load-speed or perceived delay issue

OBJECTIVE

Improve conversion readiness and strategic positioning on the Homepage and QR Landing page without broad redesign, route changes, runtime changes, or protected-system edits.

REQUIRED PRECHECK

1. Confirm CONTENT001-B is ACTIVE or explicitly authorized.
2. Identify actual source files for Homepage and QR Landing.
3. Identify site version file.
4. Identify existing components for CTA, trust blocks, testimonials/reviews, pricing badges, and route-specific content.
5. If review/testimonial data does not exist in repo, use safe placeholder structure only if existing project rules allow it; otherwise add TODO comments or document missing content requirement.

REQUIRED WORK

Homepage:

1. Add or strengthen a primary hero CTA above the fold.
2. Surface no-required-monthly-fees positioning near the hero.
3. Surface customer-owned-equipment positioning near the hero if claim-safe and already supported by project docs.
4. Shift hero/body emphasis toward Smart Property Solutions and homeowner outcomes.
5. Add a problem-first section with three categories:

   - Security & Awareness
   - Property Protection
   - Family Awareness

6. Add or prepare a trust/social-proof block using available verified content.
7. Preserve existing navigation and route behavior.

QR Landing:

1. Keep the page focused and mobile-first.
2. Improve headline/subheadline to match placard-scan intent.
3. Avoid unsupported “we secured your neighbor’s home” claims.
4. Add no-required-monthly-fees positioning.
5. Add customer-owned-equipment positioning if claim-safe.
6. Add local WNY trust language.
7. Add a clear primary CTA.
8. Investigate load-speed/perceived delay cause and fix only if within page/component scope.
9. Do not introduce new runtime dependencies.

COPY GUARDRAILS

Allowed phrasing examples:

- Local Smart Property Solutions for Western New York Homeowners
- Cameras, Property Protection, and Smart Home Solutions Without Required Monthly Fees
- Customer-owned smart property systems
- Professionally installed and locally supported
- Built for cameras, awareness, automation, water alerts, and family peace of mind

Forbidden unless explicitly supported:

- Guaranteed protection
- Guaranteed crime prevention
- Guaranteed emergency detection
- Medical safety guarantees
- Fall detection guarantees
- Insurance savings guarantees
- “We just secured your neighbor’s home” without evidence
- Any claim that implies emergency response capability not documented in runtime/contracts

TARGET FILES

Discover exact files by repo search.

Expected areas may include:

- site version file
- homepage route/component
- qrlanding route/component
- shared CTA/trust/content components
- content configuration files

REFERENCE ONLY

Use docs and audit findings as reference. Do not modify docs unless required by governance or task register lifecycle.

FORBIDDEN MODIFICATIONS

- No Stripe changes
- No HubSpot changes
- No Resend/email changes
- No Calendar/scheduling changes
- No environment variable changes
- No secrets
- No route changes
- No new pages
- No broad redesign
- No hardcoded colors outside semantic token system
- No destructive deletion
- No unrelated navigation changes
- No unsupported claims

VALIDATION REQUIRED

Run the repo’s standard validation commands.

At minimum:

- npm run build

Also run any lint/typecheck command defined by package scripts if available.

Manual validation checklist:

- Homepage renders on desktop.
- Homepage renders on mobile.
- QR Landing renders on desktop.
- QR Landing renders on mobile.
- Hero CTA is visible above fold on Homepage.
- QR Landing primary CTA is visible and mobile-friendly.
- No unsupported claims were introduced.
- No protected systems changed.
- Version badge incremented.

EXPECTED OUTPUT

1. New visible version number.
2. Files changed.
3. Summary of homepage changes.
4. Summary of QR Landing changes.
5. Validation commands run and results.
6. Any missing content/assets that require operator follow-up.
7. Confirmation protected systems were untouched.

SELF-CHECK

Confirm:

- CONTENT001-B stayed limited to Homepage + QR Landing.
- Version badge was bumped.
- No Stripe, HubSpot, email, scheduling, or env behavior changed.
- No hardcoded colors were introduced.
- No unsupported claims were introduced.
- No new routes/pages were added.
- Build passed or failures are clearly explained.
```

---

# Notes For Operator

Use CONTENT001-A first if the task is not already in the Master Task Register.

Use CONTENT001-B only after CONTENT001-B is ACTIVE or explicitly authorized.

Do not ask Codex to fix all five pages in one task unless you intentionally approve a larger bounded batch.

Recommended execution order:

1. CONTENT001-A — docs/governance entry
2. CONTENT001-B — Homepage + QR Landing
3. Review Codex summary
4. Merge only if clean
5. CONTENT001-C — Solutions page
6. CONTENT001-D — Support + Our Work
7. CONTENT001-E — New opportunity pages
8. Re-audit

---

# Operator Reminder

The audit failure is useful.

The objective is to remediate, establish the standard, execute, measure, audit again, and repeat.
