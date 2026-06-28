# KAOS Hook Framework Workspace

Status: Candidate hook governance workspace
Task ID: KAOS-HOOK001
Customer-facing: No
Implementation authority: No

## Purpose

This directory defines the KAOS hook framework and candidate hook registry for future governed hook work.

It creates governance and tracking only. It does not implement hooks, create scripts, configure Codex hooks, create QA checks, activate automation, or make any hook blocking.

## Authority Boundary

This workspace sits below the current repository authority chain and below the existing KAOS hook foundation docs:

- `/docs/system/project.md`
- `/docs/system/guardrails.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`
- `/docs/codex/CODEX_RUN_CONTRACT.md`
- `/docs/kaos/HOOK001_KAOS_HOOK_SUBSCRIPTION_ARCHITECTURE_REV01.md`
- `/docs/kaos/HOOKCAT001_KAOS_HOOK_CATALOG_REV01.md`

If this workspace conflicts with higher-authority governance, protected-system contracts, active task scope, or operator decisions, the higher-authority source controls.

## Current Files

- `HOOK_LIFECYCLE_STANDARD_REV01.md` defines hook terminology, lifecycle states, candidate fields, categories, risk levels, enforcement levels, and approval rules.
- `HOOK_CANDIDATE_REGISTRY.md` records candidate hook ideas seeded from BP001 source artifacts and current KAOS context.
- `HOOK_RUNTIME_STANDARD_WINDOWS_REV01.md` defines the Windows-aware Codex hook runtime standard, including repo-local/shared hook locations, configuration boundaries, Windows command requirements, trust review, advisory-first behavior, safe path rules, and future implementation constraints.
- `HOOK_SPEC_ARTIFACT_AUTHORITY_ADVISORY_REV01.md` defines the first Approved Hook Spec for `KAOS-HOOK-ARTIFACT-AUTHORITY-001` as advisory-only and not blocking.

## Current Sequence

- `KAOS-HOOK001` completed the hook framework and candidate registry.
- `KAOS-HOOK002` completed the Windows-aware hook runtime standard.
- `KAOS-HOOK003` refreshed next-step alignment only.
- `KAOS-HOOK004` creates the first advisory hook specification without implementation.
- `KAOS-HOOK005` may implement the first advisory hook only if separately approved.

The first implementation path must remain Windows-aware, repo-local unless otherwise approved, advisory-only, trust-reviewed through Codex `/hooks`, and non-blocking unless a later bounded task explicitly approves blocking behavior.

## Candidate-Only Rule

All entries in this workspace are candidate-only unless a later bounded task explicitly promotes them.

This workspace must not be used to:

- approve a hook spec
- implement a hook
- enforce a hook
- make a hook blocking
- create hook scripts or configuration
- create QA checks
- activate a KAOS rule
- bypass HubSpot, Stripe/payment, scheduling, runtime, Cloudflare, source, route, dependency, package-lock, or secret protections
