# OPS003  Codex Context Efficiency Standard REV01

## Purpose

Define how ChatGPT should write Codex work orders so Codex uses repository docs as authority while minimizing prompt bloat, broad file loading, unnecessary searches, and repeated governance restatement.

The goal is token efficiency with accuracy, not token reduction at the expense of governance.

## Core Rule

Codex prompts should use durable repo docs as authority instead of restating the same governance over and over.

Future Codex prompts should follow this rule:

```text
Use repo docs as authority.
Do not restate full governance unless needed.
Load only the smallest set of controlling docs.
Target only the files required by the task.
Avoid broad searches unless needed.
```

## Authority Preservation

Context efficiency does not weaken authority enforcement.

Codex must still follow:

* repository system governance
* current operational context
* Master Task Register task scope
* active bounded work order
* locked standards/specs/runtime contracts
* protected-system boundaries
* claims guardrails
* additive/destructive discipline

If token efficiency conflicts with authority enforcement, authority enforcement wins.

## Prompt Design Rules

### 1. Reference, do not restate

Prompts should reference controlling docs by path instead of restating large governance blocks when those docs already exist in the repo.

### 2. Use the smallest controlling doc set

A prompt should load only the docs required for the task type.

Do not load broad historical docs, archives, runtime docs, or unrelated governance files unless the task needs them.

### 3. Target exact files

A work order should name expected target files when known.

If target files are uncertain, Codex may inspect narrowly to identify them, then stop before expanding scope.

### 4. Prefer precise inspection over broad exploration

Use precise file reads and targeted `rg` searches.

Avoid broad repo scans unless needed for safety or unless the task is explicitly an audit/reconciliation task.

### 5. Avoid repeating stable rules

Rules already captured in durable repo docs should not be copied into every prompt unless they are safety-critical or task-specific.

### 6. Keep protected-system tasks strict

Runtime, payment, CRM, scheduling, Cloudflare, secrets, and other protected-system work may require broader controlling docs.

Do not use token efficiency as a reason to skip runtime authority or validation.

### 7. Stop and promote reusable rules

If a prompt starts becoming long because the same rules are being repeated, stop and promote those rules into an appropriate repo doc before implementation.

### 8. Record token usage when supplied

When the operator provides Codex token usage after a run, ChatGPT should record it in chat context and use it to improve future prompt design.

The repository does not need to log every token run unless the operator explicitly requests a durable audit doc.

## Work Order Tiers

### Tier 1  Docs-only bookkeeping

Use for catalog, manifest, task-register, and governance bookkeeping.

Expected prompt behavior:

* Small prompt
* Exact target docs
* No app/source/CSS files
* No version bump unless specifically required
* No `npm run build` unless source files change
* Validation should be `git status`, `git diff --stat`, `git diff --check`, and targeted `rg`

### Tier 2  Targeted public frontend implementation

Use for bounded page/component/CSS work.

Expected prompt behavior:

* Load current task
* Load page-specific standard
* Load token/visual governance standard
* Load claims guardrails only as needed or via controlling docs
* Target known source/CSS files
* Avoid broad repo scanning
* Run build and focused lint/typecheck when applicable

### Tier 3  Runtime or protected-system work

Use for payment, HubSpot, scheduling, APIs, Cloudflare, secrets, email, lead-signal, requestId, or other protected systems.

Expected prompt behavior:

* Load full controlling runtime docs
* Do not optimize away required runtime context
* Require strict validation
* Require explicit protected-system authorization

### Tier 4  Governance reconciliation / audit

Use for authority conflicts, repo governance cleanup, audits, and architecture reconciliation.

Expected prompt behavior:

* May require broader doc inspection
* Still must remain bounded
* Must distinguish authoritative docs from historical/lineage docs
* Must not implement runtime/source changes unless separately authorized

## Required Codex Prompt Efficiency Block

Future Codex work orders should include or reference this block:

```text
CONTEXT EFFICIENCY REQUIREMENT

Use repo docs as authority.
Do not restate full governance unless needed for task safety.
Load only the smallest set of controlling docs needed for this task.
Target only the files required by the task.
Avoid broad searches unless needed and explain any broad search you perform.
If additional scope appears necessary, stop and report the proposed follow-up instead of expanding the task.
```

Future Codex work orders should also include this shorter task instruction when a full efficiency block would be redundant:

```text
CONTEXT EFFICIENCY INSTRUCTION

Use targeted reads after confirming governing authority.
Prefer rg/search for task-specific sections.
Do not read full large docs unless needed.
Report any redundant context loads.
Report a shorter future prompt pattern when useful.
```

## Required Codex Summary Efficiency Block

Codex final summaries should include:

```text
Context efficiency notes:
- Controlling docs loaded:
- Broad searches performed, if any:
- Files inspected beyond target files, if any:
- Token usage, if available:
- Any governance that should be promoted to reduce future prompt size:
```

After each run, ChatGPT must evaluate the Codex summary and Context Efficiency Report for:

1. Scope compliance
2. Validation evidence
3. Protected-system compliance
4. Context Efficiency Report quality
5. Prompt improvement lesson
6. Whether governance should be updated

This creates the recursive improvement loop:

```text
Codex summary
-> Context Efficiency Report
-> ChatGPT extracts lesson
-> next prompt gets shorter/tighter
-> repo governance updates when patterns repeat
```

## Relationship to OPS002

OPS002 governs repository-aware dispatcher behavior and correct use of repository connector authority.

OPS003 governs Codex prompt/context efficiency.

OPS003 does not replace OPS002.

## Relationship to Page Token Compliance Gate

Public page work should also follow:

docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md

OPS003 reduces repeated prompt payload.

The Page Token Compliance Gate preserves public page visual-governance enforcement.

## Forbidden Interpretation

OPS003 must not be used to:

* skip required authority docs
* skip protected-system validation
* bypass the Master Task Register
* bypass claims guardrails
* bypass Stripe/payment verification rules
* bypass HubSpot/runtime contracts
* omit required validation
* let Codex infer strategy from chat history
* broaden scope without operator approval

## Acceptance Standard

A Codex prompt is OPS003-compliant when:

1. It identifies the task type.
2. It identifies the minimum controlling docs.
3. It identifies target files.
4. It avoids restating stable governance already stored in repo docs.
5. It preserves all protected-system and claims boundaries.
6. It defines validation.
7. It requires Codex to report token usage if available.
8. It stops rather than expanding scope.
9. It includes model/reasoning guidance or references the required work-order model block.
10. It gives ChatGPT enough summary structure to evaluate scope, validation, protected systems, context efficiency, prompt lessons, and governance-update need after the run.
