# KAOS001 Recursive Self Improvement Register REV01

Status: Active KAOS foundation register
Task ID: KAOS001-RSI001
Customer-facing: No
Implementation authority: No

## 1. Purpose

The KAOS001 Recursive Self Improvement Register captures repeatable improvement opportunities discovered during normal work.

RSI is not a random idea list. It is not implementation authority. RSI candidates require promotion before implementation through the Master Task Register, an owner document, or an explicitly bounded work order permitted by higher-authority governance.

RSI should reduce future friction, manual reconciliation, repeated prompt bloat, context waste, missed validations, and operator overhead. RSI maturity is diagnostic, not a hard-stop gate, unless protected systems, active task scope, customer-facing claims, or higher-authority governance require stricter review.

## 2. RSI Definition

Recursive Self Improvement is a governed improvement loop where execution evidence, repeated friction, missed checks, workflow inefficiency, or operator review findings are captured as candidate improvements, evaluated for repeatability, routed to owner documents/tasks, and later implemented only through bounded work.

RSI records describe possible improvements to the operating system. They do not authorize source changes, runtime behavior, automation, hooks, task creation, workflow changes, or public-site changes by themselves.

## 3. RSI Candidate Types

Initial RSI candidate types are:

- Context Efficiency Improvement
- Codex Prompt Improvement
- Task Register Improvement
- Governance Drift Improvement
- Workflow Automation Candidate
- Validation Improvement
- QA Harness Improvement
- Documentation Ownership Improvement
- Business Process Improvement
- Site / Deployment QA Improvement
- Toolchain Improvement
- Project KB Alignment Improvement
- Knowledge Capture Improvement
- Protected System Safety Improvement

Later candidate types require a bounded KAOS schema or RSI register revision.

## 4. RSI Record Schema

RSI records must use these fields:

| Field | Meaning |
| --- | --- |
| `rsi_id` | Stable RSI identifier. |
| `rsi_name` | Human-readable RSI name. |
| `kaos_object_type` | Must be `RSI Opportunity` unless a later schema revision says otherwise. |
| `rsi_type` | One RSI candidate type from this register. |
| `status` | Lifecycle status. Seed entries in this register use `Candidate`. |
| `domain` | Primary workstream, system, or knowledge domain. |
| `problem_observed` | Concrete friction, missed check, repeated issue, or inefficiency. |
| `evidence` | Source task, PR review, QA result, operator note, audit finding, or runtime evidence. |
| `repeated_or_one_time` | Whether the issue is repeated, one-time, or unknown. |
| `root_cause` | Likely cause, or `Unknown` when not established. |
| `proposed_improvement` | Candidate improvement, not implementation authority. |
| `expected_benefit` | Expected reduction in friction, risk, overhead, or context waste. |
| `risk_if_ignored` | Risk of leaving the issue unresolved. |
| `owner_document` | Current or candidate owner document. |
| `owner_document_status` | Current owner status, candidate, missing, or needs decision. |
| `related_decisions` | Related decision records or candidate decisions. |
| `related_processes` | Related business process records or candidate processes. |
| `related_tasks` | Related Master Task Register task IDs or future task candidates. |
| `related_runtime_contracts` | Related runtime contracts, if any. |
| `affected_systems` | Workstreams or protected systems affected by the improvement. |
| `affected_artifacts` | Documents, source surfaces, validation artifacts, generated files, or operational outputs affected. |
| `upstream_inputs` | Evidence, tasks, docs, data, or decisions that feed this issue. |
| `downstream_outputs` | Docs, tasks, artifacts, systems, or processes that may depend on this improvement. |
| `shared_data` | Records, fields, artifacts, or runtime states touched across systems. |
| `ripple_risks` | Hidden consequences or secondary review concerns. |
| `automation_candidate` | Yes/No/Maybe, with owner-doc preconditions when relevant. |
| `operator_decision_required` | Yes, No, or the specific decision needed. |
| `promotion_recommendation` | Promotion recommendation from the KAOS schema. |
| `validation_required` | Required review, check, evidence, or approval before promotion or implementation. |
| `success_metric` | Observable signal that the improvement worked. |
| `maturity_level` | RSI maturity level from this register. |
| `date_recorded` | ISO date when recorded. |
| `last_reviewed_date` | ISO date of last review. |
| `notes` | Scope notes, assumptions, and unresolved risks. |

Unknown fields must be marked `Unknown`. Do not invent relationships, owner documents, validation artifacts, or operator decisions.

## 5. RSI Lifecycle

RSI lifecycle stages are:

- Candidate
- Needs Existing Object Check
- Needs Owner Document
- Needs Operator Decision
- Backlog Candidate
- Promoted To Task
- Implemented
- Validated
- Rejected
- Duplicate
- Superseded

RSI candidate status does not authorize implementation. RSI should not create side-work nightmares. Low-risk observations can be captured lightly when the evidence and owner path are clear. Protected systems require stricter review before promotion, especially when the improvement could affect CRM, payment, scheduling, runtime, deployment, source behavior, public claims, secrets, or customer artifacts.

## 6. RSI Intake Rules

Every RSI candidate should ask:

- Is this a repeated friction point or one-time issue?
- Does an existing standard/process already cover it?
- Is the problem caused by missing governance, stale governance, missing automation, bad prompt design, missing validation, or unclear ownership?
- Would fixing this reduce future manual work?
- Would fixing this create more bureaucracy than value?
- Does this affect protected systems?
- Does this need a task, owner-doc update, hook, QA script, or no action?

The intake result should route the candidate conservatively: no action, add evidence, update an owner doc through bounded work, create a task candidate, or defer for operator decision.

## 7. RSI Impact Analysis

RSI impact analysis uses four questions:

- Upstream inputs: what feeds this issue?
- Downstream outputs: what depends on this improvement?
- Shared data: what records, fields, artifacts, or runtime states are touched?
- Ripple risks: what hidden consequences should be checked?

RSI impact review should be proportional and useful, not bureaucratic. A narrow context-efficiency observation may need only a short note. A protected-system, source, deployment, SEO, QA harness, hook, automation, or public-claim candidate needs deeper review, owner documents, validation evidence, and operator decision points before promotion.

Impact analysis is review evidence. It does not authorize implementation or changes to related systems.

## 8. RSI Maturity Levels

| Level | Name | Meaning |
| --- | --- | --- |
| RSI-L0 | Observation only | A friction point was noticed, but no durable record or owner path exists. |
| RSI-L1 | Candidate captured | A candidate record exists with source evidence and initial domain. |
| RSI-L2 | Root cause identified | The likely cause is documented or explicitly marked `Unknown`. |
| RSI-L3 | Owner document identified | A current or candidate owner document is identified. |
| RSI-L4 | Task candidate defined | A bounded future task candidate can be described without implementation authority. |
| RSI-L5 | Implemented through bounded task | The improvement was implemented only through an approved bounded task. |
| RSI-L6 | Validated improvement | Evidence shows the improvement reduced friction, risk, missed checks, or overhead. |
| RSI-L7 | Automation-ready / self-governing | The improvement is structured enough for future governed automation after separate authorization. |

Maturity is diagnostic, not blocking. The purpose is to reduce repeated friction without turning every observation into process overhead.

## 9. Seed RSI Candidate Map

These entries are seed candidate RSI records only. They are not active authority, not validated, and not promoted tasks.

| rsi_id | rsi_name | status | domain | problem_observed | proposed_improvement | Likely owner document | Related future task candidate | First promotion recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RSI-SITEQA001 | Browser-rendered live-site QA is required | Candidate | Infrastructure / Deployment QA | Sites availability alone may not prove WNYHS pages render, route, and behave correctly in a browser. | Define the evidence needed for browser-rendered live-site QA after deployment. | Candidate Sites / Live Site QA Integration Standard | SITEQA001 | Create owner doc before any QA tooling or automation. |
| RSI-SITEQA002 | Add governed Playwright Site QA Harness | Candidate | QA / Toolchain | Manual live-site QA can miss route, rendering, metadata, and fallback regressions. | Define a bounded Playwright QA harness only after standards and scope are approved. | Future QA harness owner doc | SITEQA002 | Promote to task only after QA standard and protected boundaries are defined. |
| RSI-SITE001 | Define Sites / Live Site QA Integration Standard | Candidate | Infrastructure / Deployment | Deployment review needs a clear relationship between Sites status and WNYHS-specific live-site QA evidence. | Create an integration standard that separates deploy status from browser-rendered validation. | Future Sites / Live Site QA Integration Standard | SITE001 | Create owner document through a docs-only task before implementation. |
| RSI-SEO001 | Soft-404 detection is needed | Candidate | SEO / Site Architecture | SPA fallback can return HTTP 200 for nonexistent paths, hiding missing-route or soft-404 issues. | Add governed soft-404 detection criteria to future SEO/site QA validation. | SEO / Site Architecture owner docs | SEO soft-404 QA task candidate | Route through SEO/site architecture before QA implementation. |
| RSI-SEO002 | Initial HTML metadata needs rendering review | Candidate | SEO / Deployment QA | Client-rendered metadata may not satisfy every crawler or preview surface without rendered-output review. | Define an SEO rendering review that compares initial HTML and browser-rendered metadata where useful. | SEO owner docs | SEO rendering QA task candidate | Promote through SEO owner docs before tooling. |
| RSI-GOV001 | Header/footer standard may need route-architecture refresh | Candidate | Project Governance / Site Architecture | Header/footer standards may drift from current public route architecture as routes evolve. | Reconcile header/footer standards with current route ownership through a bounded governance task. | Header/footer and site architecture standards | GOV/SITEARCH reconciliation task candidate | Existing-object check before any standard update. |
| RSI-CLAIMS001 | Clarify forbidden-term handling in disclaimers | Candidate | Claims / Public Content | Protective disclaimers can need different handling than positive public claims, but boundaries must stay clear. | Define how forbidden-term references may be handled in internal docs, disclaimers, and public copy review. | Claims guardrails / public funnel standards | Claims clarification task candidate | Operator decision required before public-copy changes. |
| RSI-CODEX001 | Closeouts should keep Context Efficiency Reports while prompts get shorter | Candidate | Codex / Context Efficiency | Context Efficiency Reports are useful, but repeated long prompts increase context waste. | Keep closeout reporting and move repeated prompt rules into durable repo docs. | OPS003 / Codex run contract | CODEX prompt pattern refinement task candidate | Add evidence to OPS003 only through bounded governance work. |
| RSI-KAOS001 | KAOS hooks should reduce post-task capture overhead | Candidate | KAOS / Automation | Manual post-task capture can create overhead and missed follow-up opportunities. | Define hook preconditions and event boundaries before any automation implementation. | Future Workflow Event Architecture / KAOS Hook docs | HOOK001 | Create workflow event architecture before hook implementation. |
| RSI-MTR001 | Master Task Register should stay useful without excessive admin | Candidate | Project Governance / Task Register | The register can become hard to scan if every observation becomes task-register admin. | Keep task records bounded and route detailed improvement candidates into owner docs or RSI first. | Master Task Register / OPS003 / KAOS RSI Register | MTR efficiency refinement task candidate | Use RSI as candidate layer; do not mark future backlog tasks done. |

## 10. RSI Record Template

Use this compact Markdown/YAML-style template for future RSI records:

```yaml
rsi_id:
rsi_name:
kaos_object_type: RSI Opportunity
rsi_type:
status: Candidate
domain:
problem_observed:
evidence:
repeated_or_one_time:
root_cause:
proposed_improvement:
expected_benefit:
risk_if_ignored:
owner_document:
owner_document_status:
related_decisions:
related_processes:
related_tasks:
related_runtime_contracts:
affected_systems:
affected_artifacts:
impact_analysis:
  upstream_inputs:
  downstream_outputs:
  shared_data:
  ripple_risks:
automation_candidate:
operator_decision_required:
promotion_recommendation:
validation_required:
success_metric:
maturity_level:
existing_object_check:
  equivalent_object:
  owner_document_already_contains:
  check_result:
  checked_references:
date_recorded:
last_reviewed_date:
notes:
```

## 11. Prohibited Behavior

This register must not:

- automatically create tasks
- implement automation
- install Playwright
- configure Sites
- change source/runtime files
- change site behavior
- override owner documents
- treat every observation as a task
- create excessive process overhead
- treat RSI maturity gaps as blockers unless protected systems are touched
- mark seed candidates as validated
- mark future backlog tasks DONE

It also must not authorize route, SEO metadata, sitemap, robots, quote, planner, scheduling, HubSpot/CRM, Stripe/payment, Resend/email, Cloudflare, dependency, package-lock, environment, secret, catalog, dashboard, or public-copy behavior changes.

## 12. Future Use

This register prepares future bounded work for:

- Workflow Event Architecture
- KAOS Hook
- Codex Work Order Specification
- Sites / Live Site QA Integration Standard
- Playwright Site QA Harness
- Weekly Engineering Summary
- Operating System Health Score
- Project KB Alignment
- Knowledge Graph Visualization

Each future use requires its own bounded task, owner document, validation, and protected-system review before it can become authoritative or executable.
