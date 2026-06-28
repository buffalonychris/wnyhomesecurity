# KAOS-HOOK-ARTIFACT-AUTHORITY-001 Advisory Hook Specification REV01

Status: Approved Hook Spec
Task ID: KAOS-HOOK004
Customer-facing: No
Implementation authority: No

## 1. Hook Identity

- **Hook ID:** `KAOS-HOOK-ARTIFACT-AUTHORITY-001`
- **Hook name:** Candidate artifact authority-boundary check
- **Hook category:** docs / governance
- **Lifecycle state:** Approved Hook Spec
- **Enforcement level:** advisory only
- **Blocking status:** not blocking
- **Implementation status:** Not implemented
- **Trust-review requirement:** Codex `/hooks`

## 2. Purpose

This advisory hook specification defines a future repo-local check for candidate artifacts that may be mistaken for active repository authority.

The future hook should focus on whether candidate artifacts and related index/register references are clearly labeled as:

- Candidate Only
- not repository authority
- not implementation authority
- not active KAOS rules
- requiring operator review before promotion

## 3. Problem It Prevents

Candidate artifact packages may contain useful discovery notes, process ideas, QA ideas, hook ideas, or draft operating language. Without clear authority labels, a future operator or Codex run could misread those artifacts as approved repository governance, implementation authority, active operating procedure, or an Active KAOS Rule.

The advisory check is intended to surface authority-boundary ambiguity before a candidate artifact is cited, promoted, summarized, or used as a task input.

## 4. Files and Surfaces Evaluated

Candidate future implementation may evaluate only documentation surfaces explicitly authorized by the implementation task, such as:

- `docs/kaos/business-processes/candidate-artifacts/`
- `docs/kaos/business-processes/README.md`
- `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md`
- `docs/kaos/hooks/HOOK_CANDIDATE_REGISTRY.md`
- KAOS README, manifest, or register docs that cite candidate artifacts
- changed-file lists or documentation diffs passed to the hook by Codex

This spec does not authorize evaluating source, runtime, route, UI, API, dependency, package-lock, Cloudflare, HubSpot, Stripe/payment, scheduling, environment, or secret files.

## 5. Candidate Inputs

Future implementation may use these candidate inputs:

- Candidate artifact file paths.
- Candidate artifact README, MANIFEST, or index files.
- Candidate intake register rows.
- Hook candidate registry rows.
- Current task scope and allowed files.
- Changed documentation file list.
- Documentation diffs for candidate-artifact surfaces.
- Existing KAOS business-process and hook governance documents.

Unknown or unavailable inputs must be treated as incomplete evidence, not as approval.

## 6. Expected Advisory Outputs

The future hook may produce advisory-only outputs such as:

- Authority-boundary warning.
- Missing or unclear candidate-label warning.
- Candidate cleanup task suggestion.
- Operator review request.
- Traceable file/path reference for the ambiguous candidate artifact.
- Brief explanation that the artifact remains candidate-only until promoted through a bounded task.

Advisory output should be concise, path-specific, and suitable for operator review.

## 7. Prohibited Outputs

The future hook must not output or perform:

- Artifact promotion.
- Candidate approval.
- Active KAOS Rule creation.
- Repository authority approval.
- Implementation authority approval.
- Automatic rewrites.
- Automatic task activation.
- Hook enforcement.
- Blocking decisions.
- Source/runtime/UI/route/API changes.
- HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, dependency, package-lock, environment, or secret changes.
- Secret values, private URLs, tokens, credentials, or environment variable values.

## 8. Windows Runtime Considerations

Any future implementation must follow `HOOK_RUNTIME_STANDARD_WINDOWS_REV01.md`.

The future repo-local implementation path is:

```text
C:\dev\wnyhomesecurity\.codex\
```

Future hook commands must be Windows-aware, use the Codex-supported Windows command field expected by the active platform version, and prefer stable git-root-relative path resolution. This specification does not create `.codex/`, hook scripts, `hooks.json`, `config.toml`, QA checks, or runtime configuration.

## 9. Trust Review

Before trusted use, any future hook implementation and configuration must be reviewed through Codex `/hooks`.

The trust review must include:

- hook file paths
- configuration paths
- command strings
- trigger events
- expected inputs
- expected advisory outputs
- prohibited outputs
- failure behavior
- rollback or disable path

Changed hook scripts or configuration require renewed trust review.

## 10. False-Positive Handling

False positives should route to operator review rather than automatic correction.

Acceptable false-positive outcomes include:

- operator confirms the artifact is already clear enough
- operator requests a documentation cleanup task
- operator records an exception in the candidate register or future implementation notes
- operator rejects the warning as not applicable

The future hook must not rewrite labels, infer approval, or silently suppress future warnings without a documented exception path.

## 11. Operator Review Path

When the future hook raises an advisory warning, the operator review path is:

1. Inspect the referenced candidate artifact or register row.
2. Confirm whether the artifact is clearly marked Candidate Only.
3. Confirm whether the artifact states it is not repository authority, not implementation authority, and not an active KAOS rule.
4. Decide whether a bounded cleanup, promotion, rejection, or no-action task is needed.
5. Record any promotion only through the appropriate repository governance document and task record.

## 12. Safe Failure Behavior

If the future hook cannot read an input, cannot determine repository root, encounters an unsupported path, or sees incomplete evidence, it should fail safe by producing an advisory warning or incomplete-evidence note.

Safe failure must remain non-blocking. The hook must not approve artifacts by absence of evidence and must not mutate repository files during failure handling.

## 13. Future Implementation Notes

Future implementation should stay narrow:

- Evaluate candidate-artifact authority labels only.
- Prefer simple structured checks for required phrases and nearby status metadata.
- Treat candidate source-package contents differently from active governance docs.
- Avoid broad repository scans unless explicitly authorized.
- Keep output advisory, path-specific, and reviewable.
- Preserve protected-system boundaries.

Any future implementation requires a separate bounded task. Any future blocking behavior requires explicit operator approval in a later bounded task and is not authorized by this specification.

## 14. Explicit Non-Authority Statement

This hook specification approves only the advisory hook specification.

A warning from this hook does not approve, reject, activate, rewrite, or enforce anything by itself.

This specification does not implement the hook, create hook scripts, create hook configuration, trust a hook, enforce a hook, make a hook blocking, create QA checks, activate a KAOS rule, or modify protected systems.
