# PAGE_TOKEN_COMPLIANCE_TASK_PACK_REV01

## Metadata

- **Title:** WNYHS Public Page Token Compliance Task Pack
- **Revision:** REV01
- **Status:** Planning / Dispatch Aid
- **Owner Area:** System Governance / Public Website Execution
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Companion Governance Standard:** `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- **Last Updated:** 2026-06-12
- **Implementation Authority:** This task pack does not authorize source, CSS, route, runtime, protected-system, pricing, content, asset-generation, or deployment changes by itself. Each implementation requires a separate bounded task in the Master Task Register or an explicitly bounded work order.

---

## 1. Purpose

This task pack records the next public page-level work items that should consume the standing token compliance gate.

The goal is to reduce future Codex prompt bloat by routing later tasks to a reusable governance source instead of restating the full visual strategy each time.

Every task in this pack must consume:

```text
docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md
```

---

## 2. Standing Preflight for All Tasks in This Pack

Every public page task in this pack starts with this question:

```text
Is this page compliant with the current Token CSS Governance being used by the Home Landing Page?
```

Every task must preserve this rule:

```text
Page structure is page-specific.
Visual language is shared and token-governed.
```

---

## 3. Current Accepted Visual Baseline

The current accepted visual baseline is the Home Landing Page after the v1.0.126 sequence.

The current Solutions Landing Page is accepted as structurally correct and directionally visually aligned after `SOLUTION-LISTING-VISUAL-PARITY-001`, with only future polish items remaining.

---

## 4. Next Task Queue

### 4.1 SOLUTION-DETAIL-VISUAL-PARITY-001

- **Task ID:** SOLUTION-DETAIL-VISUAL-PARITY-001
- **Status:** READY
- **Category:** FUNNEL / QA
- **Purpose:** Bring existing solution detail pages into full DESIGN token parity with the Home Landing Page and Solutions Landing Page.
- **Primary Question:** Is the existing solution detail page visually compliant with the current token CSS governance being used by the homepage?
- **Focus:** typography, spacing, shell/panel styling, button styling, section borders/radii, CTA/footer parity, removal of old dark-heavy visual drift.
- **Expected Targets:** Existing solution detail page implementation and related CSS.
- **Forbidden Scope:** No new solution strategy, no public pricing, no route/nav changes, no protected systems, no media-section expansion unless explicitly combined by operator approval.
- **Notes:** This should usually run before the media-section task so the base detail-page shell is clean.

### 4.2 SOLUTION-DETAIL-MEDIA-SECTION-001

- **Task ID:** SOLUTION-DETAIL-MEDIA-SECTION-001
- **Status:** READY
- **Category:** FUNNEL / QA
- **Purpose:** Add the two-image standard to the solution detail page sample / "what this might look like" section.
- **Required Output Per Solution Detail Page:**
  1. installed hardware image
  2. dashboard / tablet / phone image
- **Governance Result:** The two-image sample section becomes part of the durable Solution Detail Page standard.
- **Forbidden Scope:** No image generation unless explicitly authorized; no hardware purchasing claims; no pricing; no protected systems; no unsupported claims.
- **Notes:** May require an image manifest or image debt list if exact approved images do not yet exist.

### 4.3 VAULT-IMAGE-SYSTEM-001

- **Task ID:** VAULT-IMAGE-SYSTEM-001
- **Status:** READY
- **Category:** FUNNEL / QA
- **Purpose:** Add representative visual support to Vault/custom offerings using the operator-provided Vault collage as planning/reference material.
- **Focus:** define the image approach for each Vault item, maintain premium custom-project tone, keep quote-only / reviewed-individually posture.
- **Vault Items:** Outdoor Living Controls, Pool / Hot Tub Awareness and Controls, Specialty Lighting, Detached Space Controls, Gates / Access / Exterior Equipment, Workshops and Utility Spaces, Custom Dashboards, Advanced Automation Design.
- **Forbidden Scope:** No promise that Vault items are standard installed packages; no fixed pricing; no universal compatibility; no code/safety certification claims; no image generation unless explicitly authorized.
- **Notes:** The collage is visual direction, not automatically a production asset.

### 4.4 SOLUTION-CARD-CONTENT-DENSITY-POLISH-001

- **Task ID:** SOLUTION-CARD-CONTENT-DENSITY-POLISH-001
- **Status:** READY
- **Category:** QA / COPY
- **Purpose:** Refine card label density and copy rhythm on the Solutions Landing Page.
- **Focus:** eyebrow/label compactness, title wrapping, description length consistency, CTA rhythm, card-height balance.
- **Forbidden Scope:** No page restructure; no category matrix; no package matrix; no new offers; no pricing; no protected systems.
- **Notes:** This is polish only. The Solutions Landing Page structure is accepted.

### 4.5 DESIGN-GOVERNANCE-UPDATE-SOLUTION-PAGES-001

- **Task ID:** DESIGN-GOVERNANCE-UPDATE-SOLUTION-PAGES-001
- **Status:** READY
- **Category:** GOV
- **Purpose:** After the implementation tasks are complete, update or add visual/page governance so the accepted solution page system is durable.
- **Expected Governance Coverage:** Solutions Landing structure, Solution Detail structure, required media section, Vault visual/image rules, token-parity expectation.
- **Forbidden Scope:** No source/CSS implementation unless separately authorized; no runtime/protected systems; no pricing; no route/nav changes.
- **Notes:** This is the closeout governance task after visual and media implementation work stabilizes.

---

## 5. Dispatch Discipline

Do not run all tasks in this pack as one PR.

Preferred order:

1. `SOLUTION-DETAIL-VISUAL-PARITY-001`
2. `SOLUTION-DETAIL-MEDIA-SECTION-001`
3. `VAULT-IMAGE-SYSTEM-001`
4. `SOLUTION-CARD-CONTENT-DENSITY-POLISH-001`
5. `DESIGN-GOVERNANCE-UPDATE-SOLUTION-PAGES-001`

The operator may explicitly combine small tasks only when scope is low-risk and protected systems remain untouched.

---

## 6. Shared Forbidden Scope for the Task Pack

Unless explicitly authorized by a specific bounded work order, task-pack tasks must not change:

- HubSpot
- Stripe/payment
- Resend
- Gmail/Workspace
- scheduling
- API/runtime behavior
- Cloudflare configuration
- secrets
- dependencies
- package-lock
- route/navigation behavior
- lead-signal behavior
- request/estimate runtime behavior
- public pricing
- supplier costs
- BOM values
- hardware purchasing authorization
- customer installation authorization
- unsupported public claims

---

## 7. Shared Required Output for Future Codex Summaries

Every implementation summary for tasks in this pack must state:

1. Which page or surface was touched.
2. Whether the page was token-governed before the task.
3. Which structure standard controlled the page.
4. Which token/governed primitives were used or preserved.
5. Whether raw colors or one-off styles were introduced.
6. Whether public pricing or unsupported claims were added.
7. Whether protected systems were untouched.
8. Validation results.
9. Remaining visual debt.
10. Whether a follow-up governance update is needed.
