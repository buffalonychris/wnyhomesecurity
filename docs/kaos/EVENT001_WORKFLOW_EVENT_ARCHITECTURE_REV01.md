# EVENT001 Workflow Event Architecture REV01

Status: Active KAOS foundation architecture
Task ID: EVENT001
Customer-facing: No
Implementation authority: No

## 1. Purpose

Workflow events are immutable facts that occur during WNYHS execution.

They provide stable, named points where future hooks, reviews, QA checks, RSI intake, KAOS intake, evidence collection, and operator review may subscribe after separate bounded authorization.

Workflow events are not hooks. They do not perform actions, authorize implementation, change runtime behavior, create tasks automatically, or replace owner documents. Event maturity is diagnostic, not a hard-stop gate, unless higher-authority governance, protected-system rules, active task scope, or operator decision requirements make review mandatory.

This architecture defines event language only. It does not implement hooks, automation, runtime behavior, Playwright setup, Sites setup, source changes, customer-facing site behavior, or external integrations.

## 2. Event Definition

A workflow event is:

> A named, timestampable occurrence in the WNYHS operating workflow that can be observed, recorded, reviewed, or used as a future trigger for governed hooks or automation.

Workflow events describe what happened. They do not decide what should happen next by themselves.

## 3. Event vs Hook Distinction

| Concept | Meaning | Example |
| --- | --- | --- |
| Event | Something happened. | `PR_MERGED` means a pull request was merged. |
| Hook | A future subscriber that may respond to an event. | KAOS Intake Hook may later subscribe to `TASK_COMPLETED_BY_CODEX`. |
| Automation | A future implementation of a hook or workflow response. | Playwright QA may later run after deployment events if separately authorized. |
| Review | Human/operator evaluation after an event. | Operator merge approval is a review before `PR_MERGED`. |
| Evidence | Artifact proving or describing an event. | Codex summary, validation output, or GitHub PR is evidence. |

Examples:

- PR Merged is an event.
- KAOS Intake Hook is a subscriber.
- Playwright QA is future automation/tooling.
- Operator merge approval is review.
- Codex summary or GitHub PR is evidence.

## 4. Event Categories

| Category | Scope |
| --- | --- |
| Idea / Intake Events | New ideas, operator decisions, and intake candidates. |
| Knowledge Promotion Events | Candidate knowledge, owner-document promotion, and KAOS object promotion. |
| Task Lifecycle Events | Master Task Register task creation, activation, start, completion, closure, and task follow-up. |
| Codex Execution Events | Bounded Codex run start, completion, summary receipt, and summary review. |
| Pull Request Events | PR creation, readiness, review, approval, merge, and PR evidence. |
| Deployment Events | Deployment start, completion, verification, and release evidence. |
| Local Main Sync Events | Local branch/main sync and post-merge local state updates. |
| QA / Validation Events | Build, docs checks, browser QA, validation findings, and verification evidence. |
| KAOS Review Events | KAOS intake, relationship, decision, process, and owner-doc review events. |
| RSI Review Events | Improvement candidate identification, review, promotion, or rejection. |
| Project KB Review Events | Project KB alignment and repository-authority reconciliation events. |
| Recurring Review Events | Weekly, monthly, or periodic operating-system review events. |
| Incident / Exception Events | Unexpected failures, conflicts, protected-system concerns, and exception reviews. |

## 5. Canonical Event Types

The following event types are canonical for REV01. Future event types require a bounded revision or owner-document update.

| Event | Category | Definition | Typical source | Expected evidence | Possible future subscribers | Blocks work by itself | Protected-system escalation notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `IDEA_CAPTURED` | Idea / Intake Events | A new idea, observation, or proposal is captured for review. | Operator note, task closeout, audit, chat summary. | Source note, issue, summary, or candidate record. | KAOS intake, RSI review, task candidate review. | No | Escalate if the idea touches CRM, payment, scheduling, runtime, secrets, public claims, or deployment config. |
| `DECISION_APPROVED_IN_CHAT` | Idea / Intake Events | The operator approves a decision in chat, but it is not yet repository authority. | Operator message. | Chat reference or copied decision note. | Decision Register review, owner-doc promotion review. | No | Escalate if the decision could change protected systems or active authority. |
| `KNOWLEDGE_OBJECT_CANDIDATE_IDENTIFIED` | Knowledge Promotion Events | Candidate knowledge is identified for KAOS evaluation. | Codex closeout, audit, PR review, operator note. | Candidate object note with source reference. | KAOS intake, existing-object check, impact review. | No | Escalate when affected systems include protected runtime or customer-facing claims. |
| `KNOWLEDGE_OBJECT_PROMOTED` | Knowledge Promotion Events | Candidate knowledge is promoted into an owner document through bounded work. | Bounded docs task or PR. | Owner-doc diff, task record, validation output, PR. | Relationship review, decision review, registry update review. | No | Protected-system owner docs may require stricter review before promotion. |
| `TASK_CANDIDATE_CREATED` | Task Lifecycle Events | A possible future task is described but not executable. | KAOS intake, RSI review, audit finding, operator request. | Candidate task note or register BACKLOG/READY entry. | Task register review, operator prioritization. | No | Protected-system candidates need explicit scope and owner-doc review before activation. |
| `TASK_ACTIVATED` | Task Lifecycle Events | A bounded task is made executable through the Active Tasks section or an explicitly bounded prompt-created work order. | Master Task Register or bounded prompt. | Task record with `Status: ACTIVE` or bounded work order. | Codex execution, validation planning, operator tracking. | No | Activation cannot override protected-system locks. |
| `TASK_STARTED` | Task Lifecycle Events | Execution starts for a bounded task after authority, scope, and protected boundaries are checked. | Codex run, operator workflow. | Branch/status notes, loaded-doc list, task scope confirmation. | Codex lifecycle review, context-efficiency review. | No | Stop if protected-system authority is unclear. |
| `TASK_COMPLETED_BY_CODEX` | Task Lifecycle Events | Codex completes the bounded work and validation within the task scope. | Codex final summary. | Changed-file list, validation output, protected-system confirmation. | Summary review, KAOS intake, RSI review, PR review. | No | Protected-system confirmations must be explicit when relevant. |
| `CODEX_SUMMARY_RECEIVED` | Codex Execution Events | The operator or review layer receives the Codex closeout summary. | Codex final response. | Summary text, validation results, PR link when present. | Summary review, task closure review, RSI review. | No | Escalate missing protected-system confirmation when the task risk requires it. |
| `CODEX_SUMMARY_REVIEWED` | Codex Execution Events | A human/operator or review layer evaluates the Codex summary for scope, validation, and risks. | Operator review, ChatGPT review, PR review. | Review notes, requested changes, approval note. | Task closure, RSI candidate review, KAOS intake. | No | Protected-system gaps can require follow-up before merge or closure. |
| `PR_CREATED` | Pull Request Events | A pull request is opened for the bounded task. | GitHub PR. | PR URL, branch, title, description. | PR review, QA review, operator review. | No | PR must not be merged by Codex unless explicitly authorized. |
| `PR_READY_FOR_REVIEW` | Pull Request Events | A draft or working PR is intentionally marked ready for review. | GitHub PR state. | PR state change, review request. | Operator review, CI/QA review. | No | Readiness does not override protected-system review needs. |
| `PR_REVIEWED` | Pull Request Events | A PR receives human or automated review. | GitHub review, operator notes, CI results. | Review comments, approval, requested changes, check output. | Merge approval review, RSI review, KAOS intake. | No | Protected-system comments must be resolved or routed before merge approval. |
| `PR_APPROVED_FOR_MERGE` | Pull Request Events | Operator approves the PR for merge. | Operator review decision. | Approval comment, review state, merge instruction. | Merge workflow, deployment review. | No | Approval must not bypass protected deployment or runtime constraints. |
| `PR_MERGED` | Pull Request Events | The PR is merged into the target branch. | GitHub merge event. | Merge commit, PR state, merge timestamp. | Deployment workflow, main sync review, task closure review. | No | If merged code touches protected systems, downstream verification may require stricter review. |
| `DEPLOYMENT_STARTED` | Deployment Events | A deployment begins for a merged or selected version. | Cloudflare, Sites, or operator deployment workflow. | Deployment record, commit SHA, environment target. | Deployment completion review, QA review. | No | Deployment config, secrets, and environment changes remain protected. |
| `DEPLOYMENT_COMPLETED` | Deployment Events | A deployment reaches a completed platform state. | Deployment platform or operator record. | Deployment URL, status, commit SHA, timestamp. | Deployment verification, browser QA, release review. | No | Platform completion is not the same as browser-rendered WNYHS verification. |
| `DEPLOYMENT_VERIFIED` | Deployment Events | The deployed version is verified against required task or release checks. | Operator QA, browser check, validation note. | Screenshots, route checks, version badge, QA notes. | Task closure, RSI review, incident review. | No | Protected routes and customer flows require task-specific validation before trust. |
| `MAIN_SYNC_STARTED` | Local Main Sync Events | Local repository sync with main starts after merge or release. | Operator or Git workflow. | Branch/status note, command output. | Main sync completion review. | No | Must not overwrite unrelated local work. |
| `MAIN_SYNC_COMPLETED` | Local Main Sync Events | Local main/worktree reflects the merged target state. | Git workflow. | Branch, commit, status output. | Task closure, next-task readiness review. | No | If sync conflicts with local changes, route as exception review. |
| `TASK_CLOSED` | Task Lifecycle Events | The task is closed after required review, merge/deploy state, and record updates are complete. | Master Task Register, operator closeout. | DONE status, completion notes, validation evidence, PR link. | KAOS intake, RSI review, weekly summary. | No | Closure cannot hide unresolved protected-system risk. |
| `KAOS_INTAKE_REQUIRED` | KAOS Review Events | A completed task or observation needs KAOS intake review. | Codex summary, audit, PR review, operator note. | Intake note, source reference, affected owner docs. | KAOS intake workflow, relationship review, decision review. | No | Protected-system intake requires owner-doc and runtime-contract review before promotion. |
| `RSI_CANDIDATE_IDENTIFIED` | RSI Review Events | A repeatable improvement opportunity is identified. | Codex summary, QA finding, repeated friction, operator note. | RSI candidate note with evidence and owner path. | RSI Register review, task candidate review. | No | Protected-system RSI candidates must not become implementation without bounded authorization. |
| `RELATIONSHIP_UPDATE_REQUIRED` | KAOS Review Events | A relationship, dependency, or impact map may need an additive update. | KAOS review, owner-doc change, task closeout. | Affected objects/docs, relationship note, source evidence. | Relationship model review, graph readiness review. | No | Relationship gaps are diagnostic unless higher-authority rules require a stop. |
| `DECISION_RECONSIDERATION_REQUIRED` | KAOS Review Events | New evidence may challenge an existing decision or owner document. | QA finding, operator review, audit, runtime evidence. | Existing decision reference, new evidence, impact note. | Decision Register review, operator review. | Sometimes | May block if active authority, protected systems, claims, or customer-impacting behavior are implicated. |
| `WEEKLY_ENGINEERING_SUMMARY_GENERATED` | Recurring Review Events | A weekly engineering summary is generated for recent work. | Operator workflow or future summary process. | Summary document, source PR/task list. | KAOS intake, RSI review, task register review. | No | Must not expose secrets or private customer data. |
| `MONTHLY_KAOS_REVIEW_COMPLETED` | Recurring Review Events | A monthly KAOS review is completed. | Operator governance review. | Review notes, updated candidate list, decisions or follow-ups. | Operating-system health review, RSI review. | No | Protected-system findings route to owner docs before action. |
| `INCIDENT_IDENTIFIED` | Incident / Exception Events | A failure, conflict, regression, or operational exception is identified. | QA, operator review, runtime evidence, customer report. | Incident note, reproduction, affected systems, severity. | Exception review, task candidate review, protected-system review. | Sometimes | Protected systems require immediate owner-doc and operator review before changes. |
| `EXCEPTION_REVIEW_REQUIRED` | Incident / Exception Events | An event or finding requires manual exception review before normal flow continues. | Incident, validation failure, governance conflict, merge/sync issue. | Exception note, affected task, blocked action, review owner. | Operator review, decision review, incident review. | Sometimes | Blocks when higher-authority governance, protected systems, claims, secrets, or active task scope require it. |

## 6. Event Record Schema

Event records should use these fields when a durable record is needed:

| Field | Meaning |
| --- | --- |
| `event_id` | Stable event identifier. |
| `event_type` | Canonical event type. |
| `event_name` | Human-readable event name. |
| `category` | Event category. |
| `occurred_at` | Timestamp or date when the event occurred. |
| `observed_by` | Person, role, system, or process that observed the event. |
| `source_system` | Source system or repository surface. |
| `source_reference` | Link, path, PR, task ID, summary, or evidence reference. |
| `related_task_id` | Related Master Task Register task ID, if any. |
| `related_pr` | Related pull request, if any. |
| `related_deployment` | Related deployment record or URL, if any. |
| `related_kaos_object` | Related KAOS object, if any. |
| `related_decision` | Related decision record, if any. |
| `related_process` | Related business process, if any. |
| `related_rsi_candidate` | Related RSI candidate, if any. |
| `evidence_artifacts` | Evidence proving or describing the event. |
| `protected_systems_touched` | Protected systems touched, or `None`. |
| `operator_review_required` | Yes/No, with reason when Yes. |
| `followup_required` | Yes/No. |
| `followup_type` | Intake, task candidate, decision review, RSI review, incident review, validation, or none. |
| `status` | Event lifecycle status. |
| `notes` | Scope notes, assumptions, unresolved risks, or correction references. |

Unknown fields must be marked `Unknown`, not invented.

## 7. Event Lifecycle

Event lifecycle stages:

- Observed
- Recorded
- Reviewed
- Followup Routed
- Closed
- Superseded / Corrected

Events are facts and should not be deleted because later interpretation changes. Corrections should be additive. A corrected event should reference the original event and explain the correction.

Event records do not replace task records, pull requests, deployment records, owner documents, validation artifacts, KAOS objects, decision records, business process records, or RSI records. They connect those artifacts so future review does not require manual reconstruction.

## 8. Event Priority / Review Levels

| Level | Meaning | Typical handling |
| --- | --- | --- |
| Informational | The event is useful for traceability but does not need immediate review. | Record only when evidence value is high. |
| Review Recommended | Review may improve owner docs, task records, or future prompts. | Route to KAOS, RSI, task, or decision review when useful. |
| Operator Review Required | Human/operator decision is required before follow-up. | Stop related follow-up until reviewed. |
| Protected-System Review Required | A protected system may be affected. | Review controlling owner docs and runtime contracts before action. |
| Incident / Exception Review Required | Failure, conflict, regression, or exception handling is needed. | Route to incident/exception workflow before normal closure. |

Most events should not block work. Protected systems may require stricter review. The event model must reduce manual reconstruction, not create excessive admin.

## 9. Event-to-KAOS Routing Model

Events may later route into these KAOS and governance surfaces:

| Route | Event use | Implementation status |
| --- | --- | --- |
| Knowledge Object Intake | Identify candidate knowledge and source evidence. | Future routing only. |
| Decision Register | Identify approved decisions, reconsideration needs, and owner decisions. | Future routing only. |
| Business Process Registry | Identify process starts, outputs, exceptions, and maturity gaps. | Future routing only. |
| Relationship & Dependency Model | Identify affected objects and cause/effect relationships. | Future routing only. |
| RSI Register | Identify repeated friction, validation gaps, and improvement candidates. | Future routing only. |
| Master Task Register | Identify task candidates, activations, completions, and closures. | Future routing only. |
| Project KB Alignment | Identify chat-derived or project-instruction knowledge that needs repo promotion. | Future routing only. |
| Audit / Evidence Docs | Preserve validation, review, release, and exception evidence. | Future routing only. |

This document does not implement routing.

## 10. Example Event Flows

### Example A - Docs-only KAOS task

```text
TASK_ACTIVATED
-> TASK_STARTED
-> TASK_COMPLETED_BY_CODEX
-> CODEX_SUMMARY_RECEIVED
-> PR_CREATED
-> PR_REVIEWED
-> PR_APPROVED_FOR_MERGE
-> PR_MERGED
-> DEPLOYMENT_COMPLETED if applicable
-> MAIN_SYNC_COMPLETED
-> TASK_CLOSED
-> RSI_CANDIDATE_IDENTIFIED if improvement observed
```

### Example B - Customer-facing site implementation

```text
TASK_ACTIVATED
-> TASK_STARTED
-> TASK_COMPLETED_BY_CODEX
-> PR_CREATED
-> PR_REVIEWED
-> PR_APPROVED_FOR_MERGE
-> PR_MERGED
-> DEPLOYMENT_STARTED
-> DEPLOYMENT_COMPLETED
-> DEPLOYMENT_VERIFIED
-> QA / VALIDATION EVENT
-> MAIN_SYNC_COMPLETED
-> TASK_CLOSED
```

### Example C - Live-site QA finding

```text
DEPLOYMENT_VERIFIED
-> QA FINDING OBSERVED
-> RSI_CANDIDATE_IDENTIFIED
-> DECISION_RECONSIDERATION_REQUIRED if governance conflict exists
-> TASK_CANDIDATE_CREATED only after operator approval
```

## 11. Prohibited Behavior

This architecture must not:

- implement hooks
- implement automation
- install Playwright
- configure Sites
- change source/runtime files
- change site behavior
- automatically create tasks
- treat every event as a blocker
- treat every event as an RSI candidate
- override owner documents
- replace the Master Task Register
- create excessive event-admin overhead
- mark future backlog tasks DONE
- alter HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, quote, planner, catalog, dashboard, SEO, route, CSS, dependency, package-lock, environment, or secret behavior

## 12. Future Use

This event architecture supports future bounded work for:

- HOOK001 KAOS Hook Architecture
- CODEX001 Codex Work Order Specification
- SITE001 Sites / Live Site QA Integration Standard
- SITEQA001 Playwright Site QA Harness
- Weekly Engineering Summary
- Knowledge Graph Visualization
- Operating System Health Score

Each future use requires its own bounded task, owner document, validation, and protected-system review before it can become authoritative or executable.
