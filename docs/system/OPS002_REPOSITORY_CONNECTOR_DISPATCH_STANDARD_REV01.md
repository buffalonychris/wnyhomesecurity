# OPS002 — Repository Connector Dispatch Standard REV01

## Status

Draft for repo promotion.

## Intended Repo Path

```text
docs/system/OPS002_REPOSITORY_CONNECTOR_DISPATCH_STANDARD_REV01.md
```

## Purpose

Define how ChatGPT should use live repository access through the GitHub connector before dispatching Codex work for WNY Home Security.

This standard reduces prompt bloat, rediscovery, incorrect file assumptions, and Codex token waste.

## Role Fit

The WNY Home Security operating model is:

```text
ChatGPT = execution dispatcher
Codex = bounded implementation technician
Master Task Register = dispatch board
Repository docs = durable source of truth
Project KB = ChatGPT behavior control layer
```

This document makes live repository inspection part of the dispatcher workflow when connector access is available.

## Required Behavior

Before ChatGPT generates a Codex implementation work order, ChatGPT must inspect current repository state through the GitHub connector when available.

This inspection should identify:

```text
current controlling docs
current task register status
current source-file names and paths
current imports and CSS ownership
current version file
current route/component ownership
current protected-system boundaries
```

## Default Inspection Targets

For all implementation-adjacent tasks:

```text
docs/system/project.md
docs/system/guardrails.md
docs/system/agent.md
docs/system/plan.md
docs/system/step-current.md
docs/system/master-task-register.md
docs/DOCUMENT_CATALOG.md
docs/MARKDOWN_MANIFEST.md
```

For visual/frontend tasks:

```text
index.html
src/main.tsx
src/index.css
src/styles/
src/components/
src/pages/
src/lib/siteVersion.ts
relevant content files
relevant design-system or governance docs
```

For runtime/API/payment/CRM/scheduling tasks:

```text
relevant runtime contracts
relevant API files
relevant environment-variable docs
relevant protected-system docs
relevant tests/validation docs
```

## Dispatch Rule

Codex work orders must be grounded in current repository facts.

A valid work order should include:

```text
controlling docs
task ID
allowed scope
forbidden scope
target files
protected systems
validation commands
exit criteria
required output summary
```

Codex should not be asked to discover broad strategy, infer business priorities, or resolve repo governance ambiguity unless the bounded task is specifically a governance reconciliation task.

## Write Boundary

ChatGPT may read and inspect the repository through the GitHub connector.

ChatGPT must not directly change repository files through GitHub unless explicitly authorized by the operator.

Default change path remains:

```text
local Codex execution
GitHub PR review
manual merge
Cloudflare deployment review
```

## Connector Unavailable Rule

If the GitHub connector is unavailable, ChatGPT must disclose that limitation and either request current files/snapshots or proceed only with explicit uncertainty.

Do not claim repo inspection occurred unless it did.

## Protected-System Rule

Live repo access does not authorize protected-system changes.

Protected systems remain forbidden unless explicitly scoped:

```text
HubSpot
Stripe
Resend
Gmail/Workspace
Cloudflare config
scheduling
APIs
runtime contracts
secrets
payment/deposit behavior
```

## Anti-Rediscovery Standard

The following should not be rediscovered by Codex when ChatGPT can inspect them first:

```text
file paths
component names
CSS class names
font imports
current version number
task register structure
document catalog entries
route ownership
active runtime contracts
```

ChatGPT should include these in the work order when relevant.

## Expected Benefits

```text
reduced Codex token use
fewer wrong-file edits
less repeated context loading
more consistent governance enforcement
clearer PR review
better continuity across chats
```

## Closeout Requirement

When reviewing Codex output, ChatGPT should compare the summary against the repo-grounded work order and confirm:

```text
target files changed only
forbidden systems untouched
validation passed
version bump completed when required
remaining debt reported
task status updated or ready for update
```
