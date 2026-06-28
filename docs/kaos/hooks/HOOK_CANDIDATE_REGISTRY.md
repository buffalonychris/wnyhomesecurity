# KAOS Hook Candidate Registry

Status: Candidate hook registry
Task ID: KAOS-HOOK001
Customer-facing: No
Implementation authority: No

## 1. Purpose

This registry records candidate KAOS hooks seeded from BP001 source artifacts and existing KAOS context.

It is tracking only. It does not approve hook specs, implement hooks, enforce hooks, create QA checks, activate KAOS rules, or change protected systems.

## 2. Source Basis

Seed records are derived from:

- `docs/kaos/HOOK001_KAOS_HOOK_SUBSCRIPTION_ARCHITECTURE_REV01.md`
- `docs/kaos/HOOKCAT001_KAOS_HOOK_CATALOG_REV01.md`
- `docs/kaos/business-processes/README.md`
- `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md`
- `docs/kaos/business-processes/candidate-artifacts/bp001-source-package/MANIFEST.md`
- `docs/kaos/business-processes/candidate-artifacts/bp001-source-package/WNYHS-BP001G_Governance_Codex_QA_Hooks_RSI_Deep_Sweep.md`
- `docs/kaos/business-processes/candidate-artifacts/bp001-source-package/WNYHS-BP001J_Business_Capability_Mapping.md`
- `docs/kaos/business-processes/candidate-artifacts/bp001-source-package/WNYHS-BP001K_BPR001_Candidate_Register_Generation.md`

BP001 source artifacts remain candidate-only and not repository authority. This registry preserves that same candidate-only posture.

## 3. Registry Defaults

Unless a row explicitly says otherwise:

- `status`: Candidate
- `lifecycle_state`: Candidate
- `enforcement_level`: advisory
- `operator_blocking_approval`: Not requested / not approved
- `implementation_status`: Not implemented
- `trust_review_required`: Yes before implementation
- `source_confidence`: Candidate source supported
- `approved_hook_spec`: No, except `KAOS-HOOK-ARTIFACT-AUTHORITY-001` has an Approved Hook Spec in `HOOK_SPEC_ARTIFACT_AUTHORITY_ADVISORY_REV01.md`
- `implemented_hook`: No, except `KAOS-HOOK-ARTIFACT-AUTHORITY-001` has an implemented advisory hook in `.codex/hooks/artifact_authority_advisory.py`
- `enforced_hook`: No
- `blocking_hook`: No

## 4. Candidate Hook Table

| hook_id | hook_name | category | risk_level | enforcement_level | purpose | trigger_or_event | candidate_inputs | candidate_outputs | prohibited_outputs | owner_document | protected_systems | related_bp_candidates | validation_required_before_promotion | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `KAOS-HOOK-COPY-CLAIMS-001` | Forbidden claims scanner | copy / claims | High | advisory | Flag candidate public-copy or doc changes that may need claims review against guardrails. | Post-change review, closeout review, or future copy-validation event. | Changed-file list, diffs, guardrails, public funnel standards, task scope. | Warning, operator review request, candidate claims clarification. | Automatic rewrite, approval of copy, task activation, blocking without later approval. | `/docs/system/guardrails.md`; future hook spec. | Public claim surfaces; protected runtime only if forms/routes are implicated. | WNYHS-BP001G-012, WNYHS-BP001G-013, BP-I-058. | Define scan terms, internal-doc exceptions, false-positive handling, and owner-review path. | Seeded from BP001G hook architecture and BP001J claims hook candidate. |
| `KAOS-HOOK-VISUAL-TOKEN-001` | Hardcoded color / token scanner | visual / token | Medium | advisory | Flag source or style diffs that appear to bypass semantic token governance. | Post-change review or future visual-validation event. | Changed style/source files, diffs, visual standards, task scope. | Token warning, visual owner review request, candidate remediation task. | Automatic CSS rewrite, approval, or blocking without later approval. | Visual standards and future hook spec. | None by default; public UI surfaces if implemented later. | BP-I-059. | Define allowed token patterns, file scope, generated-file exclusions, and validation evidence. | No source scanning is implemented by this registry. |
| `KAOS-HOOK-ROUTE-SEO-001` | Sitemap route mismatch scanner | route / sitemap / SEO | High | advisory | Flag mismatch candidates between approved public routes, sitemap entries, robots/noindex policy, and route ownership docs. | Post-change review, SEO closeout, or future route-validation event. | Route inventory, sitemap, robots policy, SEO owner docs, changed files. | SEO warning, candidate route/sitemap review task, operator review request. | Sitemap edit, route edit, metadata edit, automatic approval, or blocking without later approval. | SEO and site architecture docs; future hook spec. | Routes, sitemap, robots, SEO policy; no runtime behavior. | WNYHS-BP001F, WNYHS-BP001G-012, BP-I-060, BP-I-061. | Define source of route truth, public/private classifications, sitemap source, and exception handling. | Candidate only; does not create sitemap QA. |
| `KAOS-HOOK-ROUTE-POLICY-001` | Public/private route policy scanner | route / sitemap / SEO | High | advisory | Flag route candidates whose public/private/index/noindex posture may conflict with current route policy. | Route change review, SEO review, closeout review. | Route list, SEO policy, route owner docs, task scope, changed files. | Route policy warning, operator review request, candidate task. | Route changes, SEO changes, automatic public exposure, blocking without later approval. | Site architecture and SEO docs; future hook spec. | Protected transaction/payment/schedule/operator route groups if evaluated. | WNYHS-BP001F, BP-I-013, BP-I-060. | Define route groups, source docs, protected route rules, and false-positive handling. | Intended to stay advisory until route owner docs approve stricter enforcement. |
| `KAOS-HOOK-STRIPE-001` | Stripe browser-success trust warning | payment / Stripe | Protected | advisory | Flag candidate changes or summaries that appear to treat browser success redirects as payment authority. | Payment-related task review, protected-system review, closeout review. | Task scope, changed files, Stripe runtime docs, payment route references, closeout summary. | Stripe warning, protected-system review request, candidate remediation task. | Payment logic change, payment approval, implementation, blocking without later approval. | Stripe runtime docs, guardrails, future hook spec. | Stripe/payment. | WNYHS-BP001C, WNYHS-BP001G-011, BP-I-028, BP-I-029. | Define exact payment authority patterns, reviewed files, owner docs, and operator override path. | Candidate only; no payment behavior changed. |
| `KAOS-HOOK-HUBSPOT-001` | HubSpot property drift check | CRM / HubSpot | Protected | advisory | Flag candidate drift between HubSpot property/pipeline docs and proposed CRM/runtime changes. | CRM-related task review, protected-system review, closeout review. | HubSpot REV03, runtime contracts, changed files, task scope, closeout summary. | HubSpot warning, protected-system review request, candidate remediation task. | Schema change, CRM write, property approval, implementation, blocking without later approval. | HubSpot REV03 and runtime HubSpot contracts; future hook spec. | HubSpot/CRM. | WNYHS-BP001C, WNYHS-BP001G-011, BP-I-032, BP-I-033, BP-I-034. | Define canonical property/stage source, drift comparison method, and no-secret evidence handling. | Candidate only; no HubSpot connection or schema check is implemented. |
| `KAOS-HOOK-METADATA-001` | Metadata completeness check | route / sitemap / SEO | Medium | advisory | Flag approved public route candidates that appear to lack required metadata review fields. | SEO closeout, route publication review, future metadata-validation event. | Route owner docs, SEO docs, metadata policy, changed files. | Metadata warning, candidate SEO review task. | Metadata implementation, route publication approval, blocking without later approval. | SEO docs and future hook spec. | None by default; public route metadata only. | WNYHS-BP001F, BP-I-061. | Define required metadata fields, route eligibility, and sitemap relationship. | Candidate only; does not add metadata checks. |
| `KAOS-HOOK-COPY-LOCK-001` | Copy lock scanner | copy / claims | Medium | advisory | Flag candidate edits to locked or owner-controlled copy surfaces for review. | Public-copy edit review or future content-validation event. | Changed files, owner docs, task scope, copy lock records when present. | Copy-lock warning, operator review request, candidate task. | Automatic copy revert, copy approval, blocking without later approval. | Public content owner docs and future hook spec. | Public claim surfaces if implemented later. | WNYHS-BP001F, WNYHS-BP001G-012, BP-I-058. | Define what counts as locked copy and how owner exceptions are recorded. | Candidate only; no copy lock registry is created by this task. |
| `KAOS-HOOK-RUNTIME-SECRETS-001` | Runtime env/secrets exposure check | runtime / environment | Protected | advisory | Flag candidate changes or command outputs that risk exposing secrets, environment values, or private runtime URLs. | Pre-tool review, post-tool review, permission request, closeout review. | Proposed commands, changed files, outputs, task scope, protected-system list. | Secret-risk warning, operator decision request, validation warning. | Secret disclosure, automatic redaction rewrite, protected-system change, blocking without later approval. | Codex run contract, guardrails, runtime docs, future hook spec. | Runtime/API, environment, secrets, Cloudflare, dependencies when implicated. | WNYHS-BP001G-011, WNYHS-BP001G-013. | Define safe pattern classes without storing secret values; define redaction and evidence rules. | Candidate only; no command hook or scan script is created. |
| `KAOS-HOOK-DOCS-OWNER-001` | Missing owner-doc / task-reference check | docs / governance | Medium | advisory | Flag task or document candidates that lack owner-doc references, task IDs, or authority boundaries. | Session start, task closeout, governance doc review. | Task scope, changed docs, MTR record, owner-doc references, closeout summary. | Governance warning, candidate register update, operator review request. | Automatic task activation, owner-doc rewrite, DONE status, blocking without later approval. | Master Task Register, Codex run contract, future hook spec. | None by default. | WNYHS-BP001G-004, WNYHS-BP001G-005, BP-I-001 through BP-I-006. | Define required fields by document type and exception handling for candidate source artifacts. | Candidate only; MTR remains tracking board for this task. |
| `KAOS-HOOK-ARTIFACT-AUTHORITY-001` | Candidate artifact authority-boundary check | docs / governance | Medium | advisory | Flag candidate artifacts that might be mistaken for active authority without clear status labels. | `PostToolUse` / `Bash` in `.codex/hooks.json`; candidate artifact import/review and closeout review contexts when visible in hook input. | Candidate artifact files, README/index docs, intake register, task scope, changed-file context visible in Codex hook input. | Authority-boundary warning, candidate cleanup task, operator review request. | Artifact promotion, automatic approval, active rule creation, blocking without later approval. | `HOOK_SPEC_ARTIFACT_AUTHORITY_ADVISORY_REV01.md`; KAOS intake/business-process docs; `.codex/README.md`. | None by default; protected systems only if artifact content proposes them. | WNYHS-BP001G-004, WNYHS-BP001K, BP-I-002, BP-I-011. | Implementation follows the approved advisory spec and Windows runtime standard; trust review through Codex `/hooks` is still required before trusted use; remains non-blocking. | Approved Hook Spec exists; implemented advisory hook present; trust review required; enforced hook: no; blocking hook: no. |

KAOS-HOOK-ARTIFACT-AUTHORITY-001 status: implemented advisory hook yes; trust review required yes; enforced hook no; blocking hook no.
| `KAOS-HOOK-CODEX-SCOPE-001` | Codex forbidden-scope check | Codex workflow | High | advisory | Flag candidate Codex runs where changed files, commands, or closeout claims may exceed active task scope. | Pre-tool review, post-tool review, closeout review, permission request. | Active task, allowed files, forbidden scope, changed files, commands, validation results. | Scope warning, operator decision request, candidate remediation task. | Automatic revert, task expansion, task activation, blocking without later approval. | Codex run contract, root AGENTS.md, task register, future hook spec. | All protected systems when scope touches them. | WNYHS-BP001G-005, WNYHS-BP001G-006, WNYHS-BP001G-007, BP-I-005, BP-I-006. | Define scope comparison inputs, severity levels, false-positive handling, and operator override path. | Candidate only; no Codex hook implementation is created. |

## 5. Approval and Enforcement Status

`KAOS-HOOK-ARTIFACT-AUTHORITY-001` now has an Approved Hook Spec in `HOOK_SPEC_ARTIFACT_AUTHORITY_ADVISORY_REV01.md`.

`KAOS-HOOK-ARTIFACT-AUTHORITY-001` now has an implemented repo-local advisory hook in `.codex/hooks/artifact_authority_advisory.py` and hook configuration in `.codex/hooks.json`.

No other hook in this registry is an approved hook spec.

No other hook in this registry is implemented.

No hook in this registry is enforced.

No hook in this registry is blocking.

The implemented advisory hook still requires operator trust review through Codex `/hooks` before trusted use. Any future movement to enforcement, another implementation, or blocking behavior requires a separate bounded task, owner-document review, validation, trust review where applicable, and explicit operator approval before blocking behavior.

## 6. Recommended Next Path

Current completed sequence:

- `KAOS-HOOK001` completed the hook framework and candidate registry.
- `KAOS-HOOK002` completed the Windows-aware hook runtime standard in `HOOK_RUNTIME_STANDARD_WINDOWS_REV01.md`.
- `KAOS-HOOK003` refreshed this registry alignment only and did not create a hook spec or implementation.
- `KAOS-HOOK004` created the first approved advisory hook specification for `KAOS-HOOK-ARTIFACT-AUTHORITY-001` without implementation.
- `KAOS-HOOK005` implemented the first repo-local advisory hook for `KAOS-HOOK-ARTIFACT-AUTHORITY-001` without enforcement or blocking behavior.

Recommended next path:

1. Operator runs Codex `/hooks` after merge to review and trust the repo-local advisory hook if accepted.
2. Future hook expansion, enforcement, or blocking behavior requires a separate bounded task.

Recommended first candidates:

- `KAOS-HOOK-DOCS-OWNER-001`
- `KAOS-HOOK-ARTIFACT-AUTHORITY-001`
- `KAOS-HOOK-CODEX-SCOPE-001`

Any future implementation candidate must follow `HOOK_RUNTIME_STANDARD_WINDOWS_REV01.md` and remain:

- Windows-aware.
- Repo-local unless a future bounded task explicitly approves shared utility use.
- Advisory-only.
- Trust-reviewed through Codex `/hooks` before trusted use.
- Non-blocking unless a separate bounded task explicitly approves blocking behavior.

Do not implement additional scripts, hook configuration, enforcement, QA checks, or blocking behavior from this registry without a separate bounded task.
