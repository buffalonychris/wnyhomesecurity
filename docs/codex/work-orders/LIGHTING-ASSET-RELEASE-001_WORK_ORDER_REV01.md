# LIGHTING-ASSET-RELEASE-001 Work Order REV01

Status: DONE

Repository: `buffalonychris/wnyhomesecurity`

Controlling Context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`

Predecessor: `LIGHTING-LANDING-001`, draft PR #623

Governance Predecessor: `LIGHTING-CAMPAIGN-GOV001`, merged PR #622

## 1. Execution posture

- `READ MODE: TARGETED`
- `REASONING POSTURE: ADAPTIVE`
- `EXECUTION POSTURE: DIRECT`
- Category: `GOV`
- Primary Workstream: `Project Governance`
- Related Workstreams: Image System; Public Content System; Visual System; QA

## 2. Objective and authorization

Record the operator-approved contact and the narrow provenance, technical qualification, claims posture, and publication readiness of the supplied lighting campaign assets without restarting the landing-page implementation, changing draft PR #623, or publishing assets.

The operator approved bounded dispatch on October 27, 2026 and corrected the supplied provenance during execution: the three files under the handoff `assets/` directory are finished WNYHS-created AI marketing images approved for this campaign. Google Maps was historical creative-process context, not a statement that the supplied files are raw Google Maps screenshots or automatically unlicensed. Operator approval is evidence of WNYHS campaign approval; it is not represented as independent proof of rights to unidentified third-party source content.

## 3. Required authority and owner documents

- `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/codex/work-orders/LIGHTING-LANDING-001_WORK_ORDER_REV01.md` from draft PR #623
- `docs/design-system/ASSET001_WNYHS_UNIFIED_ASSET_SYSTEM_STANDARD_REV01.md`
- `docs/solution-system/CLAIMS001_WNYHS_UNIFIED_CLAIMS_GUARDRAIL_ADDENDUM_REV01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- external handoff `LIGHTING-ASSET-RELEASE-001_WORK_ORDER_REV01.md`, `README.md`, `assets/`, and `reference/`

## 4. Owner Routing Matrix

| Approved concept | Canonical owner | Exact target | Section / behavior | Action | Reason | Why not another owner | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bounded task authority and lifecycle | Project Governance | This work order; `docs/system/master-task-register.md` | One work order and one task record | CREATE / MODIFY | Codex work orders and the MTR own bounded execution authority. | Asset files cannot create their own task authority. | NO | HIGH |
| Asset provenance and publication readiness | ASSET001 Image/Asset System | `docs/design-system/LIGHTING-ASSET-RELEASE-001_ASSET_PROVENANCE_AND_PUBLICATION_READINESS_REV01.md` | Three supplied campaign assets and two internal-only references | CREATE | A bounded evidence record under the existing asset owner is the smallest durable qualification surface. | The canonical manifest is for committed canonical assets; these files are not being copied into the repository in this task. | NO | HIGH |
| Campaign page integration | Public Content / Image System | Draft PR #623 page and future repository asset paths | Preserve unchanged | REFERENCE ONLY / HOLD | The page exists only on the unmerged predecessor branch. | Adding a second task to PR #623 or branching from that unmerged task conflicts with one-task-per-branch/PR and origin-main rules. | YES for integration in this task | HIGH |
| Public contact approval | Public contact configuration | Evidence record; `src/content/wnyhsContact.ts` unchanged | Record `hello@wnyhomesecurity.com` approval and existing catch-all monitoring confirmation | REFERENCE ONLY | The operator confirmed the existing public address and monitoring; no routing change is required. | Email runtime and routing are protected and out of scope. | NO | HIGH |
| Historical slick and install diagram | Image/Asset System | Evidence record only | Internal reference classification | REFERENCE ONLY | Both contain unqualified or preliminary material and are explicitly not public. | They are not campaign publication assets. | NO | HIGH |

## 5. Exact allowed file scope

Only these files may change:

1. `docs/codex/work-orders/LIGHTING-ASSET-RELEASE-001_WORK_ORDER_REV01.md`
2. `docs/system/master-task-register.md`
3. `docs/design-system/LIGHTING-ASSET-RELEASE-001_ASSET_PROVENANCE_AND_PUBLICATION_READINESS_REV01.md`

No binary asset, source, CSS, test, manifest, contact configuration, runtime, dependency, or protected-system file may change.

## 6. Required work

1. Create this repository-owned work order and register only this task.
2. Inspect the three supplied publication candidates for format, dimensions, digest, visible identifiers, claims, and campaign suitability.
3. Record the corrected operator-supplied provenance without asserting a broad legal clearance.
4. Record `hello@wnyhomesecurity.com` as approved and monitored through the existing catch-all based on operator confirmation; retain live delivery as release QA, not completed evidence.
5. Keep the historical sales slick and preliminary installation diagram internal-only.
6. Record the smallest exact hold preventing integration: PR #623 is unmerged, and this separate task cannot add files to that PR or branch from its non-main head under the current execution standard.

## 7. Forbidden scope and protected systems

No page/source integration, binary commit, contact-routing or delivery test, external licensing investigation, new legal conclusion, public pricing, unsupported claim, false completed-installation proof, new funnel, CRM, `/api/lead-signal`, requestId, payment, scheduling, Resend, Cloudflare, runtime, environment, DNS, dependency, secret, customer-data, merge, ready transition, or deployment change is authorized.

Do not describe the supplied images as photographs of completed WNYHS installations. Do not claim that operator approval alone proves rights to any identifiable third-party source content. Do not apply a blanket Google Maps-derived licensing hold without asset-specific evidence.

## 8. Validation

Tier: docs-only governance/evidence.

- exact three-file allowlist;
- no unexpected deletion;
- one exact task/work-order/evidence record;
- asset filename, PNG dimensions, byte size, and SHA-256 verification;
- narrow visual review for visible map UI, watermark, address, logo, manufacturer mark, or other specific third-party identifier;
- contact status and live-test distinction;
- internal-only reference classification;
- claims/protected-system scan;
- focused Markdown path checks;
- `git diff --check`;
- governed docs-only build skip;
- draft PR to `main`; no merge or deployment.

## 9. Git and delivery

- Start from clean synchronized `main` at `55970e0503f08add2041f8d98c574157e4a372e4`.
- Branch: `task/lighting-asset-release-001`.
- One bounded commit and one draft PR to `main`.
- Preserve draft PR #623 unchanged and draft.
- Do not merge, enable auto-merge, mark ready, or deploy.

## 10. Exit criteria and closeout

Exit when the three-file documentation/evidence record is complete and validated, the contact and per-asset status are explicit, the predecessor integration hold is exact, one draft PR is open, PR #623 remains draft, and no binary/source/protected-system/merge/deployment change occurred.

Closeout reports the authority, files, asset rights/provenance status, contact status, validation, draft PR, blocker, no-merge/no-deploy confirmation, concise context-efficiency evidence, and exactly one next action.
