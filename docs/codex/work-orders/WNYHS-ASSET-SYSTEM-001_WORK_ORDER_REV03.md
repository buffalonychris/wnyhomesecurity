# WNYHS-ASSET-SYSTEM-001 — Final Peckham Approval-Artifact Print Revision

**Revision:** REV03
**Status:** ACTIVE — OPERATOR-AUTHORIZED CORRECTION
**Supersedes:** `WNYHS-ASSET-SYSTEM-001_WORK_ORDER_REV02.md` only for remaining correction and closeout work
**Primary Workstream:** Visual System
**Related Workstreams:** Dashboard / Interactive Experience System; Project Governance
**Branch:** `task/wnyhs-unified-asset-system-001`
**Existing Draft PR:** `#582`
**Read Mode:** TARGETED

## 1. Objective

Complete one final bounded revision of the existing Peckham standalone approval artifact while preserving all accepted asset-system work and current uncommitted corrections.

This revision authorizes only:

1. print output that preserves the currently selected screen composition;
2. pagination improvements only where the representation remains unchanged; and
3. one Home-only, review-only `Print Review Set` action that prepares one printable document containing all canonical views using the current selected Device, Theme, Size, Font, and Scenario.

## 2. Execution gates

- Continue only `WNYHS-ASSET-SYSTEM-001` on `task/wnyhs-unified-asset-system-001` and existing draft PR `#582`.
- Preserve all current uncommitted correction work.
- Temporarily return only the exact MTR task record to `ACTIVE` while this revision is under review.
- Do not reset, stash, discard, switch branches, create another task/branch/PR, commit, push, merge, or deploy during this approval pass.
- Preserve all prior REV02 implementation and validation history.

## 3. Exact allowed paths

- `docs/codex/work-orders/WNYHS-ASSET-SYSTEM-001_WORK_ORDER_REV03.md`
- `docs/system/master-task-register.md`, exact `WNYHS-ASSET-SYSTEM-001` block only
- `prototypes/dashboard/peckham/Peckham_Dashboard_Review.html`

No asset, manifest, validator, package, dependency, runtime, Home Assistant, Cloudflare, CRM, payment, scheduling, email, environment, secret, production, deployment, or unrelated governance file may change.

## 4. Print fidelity authority

Print must faithfully preserve the current selected Device, Theme, Size, Font, Scenario, active view, responsive composition, card organization, column structure, information hierarchy, relative widths, selected navigation, header utility state, footer composition, visual assets, and status presentation.

Print CSS must not substitute a generic layout or change the selected device composition merely to fit paper. Chrome may scale the preserved representation afterward; this artifact must not attempt to control Chrome's Scale setting.

## 5. Pagination boundary

After fidelity is preserved, print may use content-driven height, remove unnecessary viewport/min-height behavior, avoid artificial footer isolation, prevent orphaned headings, and keep cards together when practical.

Pagination must not hide or reorder content, change column count, collapse the selected device layout, shrink individual components independently, relocate footer content, or force one-page output.

## 6. Print Review Set

Home may expose one visually restrained review-only `Print Review Set` action outside customer security-action tiles.

The action prepares one printable review document with these views exactly once and in this order:

1. Home
2. Systems
3. Activity
4. Explore WNYHS
5. Support
6. Property
7. Settings

Every view must retain the selected responsive dashboard shell and current Device, Theme, Size, Font, and Scenario. The review set must contain a concise cover/metadata section with WNYHS and Peckham identity, local generation date/time, selected state, included views, and `NOT CONNECTED TO LIVE SYSTEMS`.

The review set title is:

`YYYYMMDD_PK-Peckham_AllViews_<Device>_<Theme>_<Size>_<Font>_<Scenario>`

The action may call the browser print dialog after preparing the static review DOM. It must not save automatically, use a service, request a network resource, or permanently mutate the normal view or title. After print closes or is cancelled, the normal current view and current-view title must be restored.

## 7. Validation

Validate locally and programmatically:

- unchanged PC, Tablet, and Cell screen-responsive behavior;
- current-view print retains the selected screen layout and state without generic print substitution;
- content/footer preservation and subordinate pagination improvements;
- Home review-set button placement;
- exactly seven review-set views in canonical order;
- selected Device, Theme, Size, Font, and Scenario preservation;
- `AllViews` title during review-set preparation and normal title/view restoration afterward;
- no duplicate IDs in the prepared review-set DOM;
- no console, page, resource, or network errors;
- no external requests or horizontal overflow inside the selected device representation;
- corrected customer-language and semantic-status audits remain passing;
- `node scripts/checks/check-wnyhs-assets.mjs`;
- inline JavaScript syntax validation;
- `git diff --check`;
- conflict-marker, deletion, package-lock, and bounded-scope audits.

## 8. Closeout gate

Stop after validation and return the bounded evidence for operator review. Do not commit or push until separately authorized. Retain MTR `ACTIVE` until this revision passes operator review and final closeout is authorized. No merge or deployment is authorized.
