# WNYHS-ASSET-SYSTEM-001 — Unified Asset System + Peckham Customer Dashboard Visual Completion

**Revision:** REV02
**Status:** ACTIVE — OPERATOR-AUTHORIZED REVISION
**Supersedes:** `WNYHS-ASSET-SYSTEM-001_WORK_ORDER_REV01.md` for all remaining execution and closeout
**Primary Workstream:** Visual System
**Related Workstreams:** Image System; Dashboard / Interactive Experience System; Project Governance
**Branch:** `task/wnyhs-unified-asset-system-001`
**Read Mode:** TARGETED
**Context Target:** LOW

## 1. Objective

Complete the existing unified WNYHS asset-system task and bring the Peckham standalone customer dashboard approval artifact to the operator-approved visual and usability standard.

This revision exists to prevent repeated chat-context loading. It is the controlling bounded execution document for the remaining task.

The finished dashboard must look and read like a polished customer product, not an engineering test harness.

Primary outcomes:

1. preserve and complete the canonical WNYHS reusable asset system;
2. complete the Peckham dashboard as the first governed consumer;
3. make Desktop / Tablet / Phone review available inside the standalone demo;
4. eliminate known dark-theme and responsive defects;
5. replace technical/internal copy with plain customer language;
6. increase WNYHS brand presence and visual quality;
7. preserve truthful device/state representation;
8. use operator-owned visual review instead of blocked Codex `file://` browser attempts;
9. stop for operator visual approval before final Git delivery.

---

## 2. Execution gates

Before editing:

1. Confirm branch is exactly:
   `task/wnyhs-unified-asset-system-001`
2. Do not create a new branch.
3. Do not create a second MTR task.
4. Confirm the existing `WNYHS-ASSET-SYSTEM-001` MTR record remains ACTIVE.
5. Preserve existing uncommitted work.
6. Do not reset, discard, or rewrite working implementation that already satisfies this revision.
7. Use this REV02 work order as the controlling work order for remaining execution.
8. If the MTR currently references REV01, update only the exact active task record to reference REV02 and summarize this revision.

If the task is already DONE or a PR was already opened unexpectedly, STOP and report the actual repository state.

---

## 3. Required targeted reads

Read only what is necessary:

1. this work order;
2. exact `WNYHS-ASSET-SYSTEM-001` MTR task block;
3. `docs/design-system/ASSET001_WNYHS_UNIFIED_ASSET_SYSTEM_STANDARD_REV01.md`;
4. `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md`
   - §§2–4 and 9–11 only;
5. `docs/brand/brand_asset_standards_rev01.md`
   - approved asset locations and prohibited asset behavior only;
6. `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md`
   - canonical customer navigation;
   - header/footer functional composition;
7. `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md`
   - customer-visible size modes;
   - responsive/equal-tile delivery;
   - approval prototypes;
   - validation contract;
8. currently changed files in the worktree.

Do not read:

- historical dashboard drafts;
- PR #578 history;
- the full MTR;
- old Step docs unless a real authority conflict appears;
- broad repository history;
- unrelated standards;
- prior chat transcripts.

---

## 4. Owner Routing Matrix

| Concern | Owner | Action | Conflict | Confidence |
| --- | --- | --- | --- | --- |
| Cross-channel reusable WNYHS asset grammar, taxonomy, manifest, validator, canonical reusable assets | ASSET001 | IMPLEMENT / COMPLETE | NO | HIGH |
| Dashboard colors, typography, tokens, component geometry, Light/Dark semantics | DESIGN001 | REFERENCE / PRESERVE | NO | HIGH |
| Existing approved crest/logo/public brand assets | Brand Asset Standards REV01 | REUSE / PRESERVE LOCKED ASSETS | NO | HIGH |
| Customer nav and shell behavior | INSTALL006 REV02 | CONFORM | NO | HIGH |
| Desktop/tablet/phone responsive delivery and approval behavior | DASHBOARD001 REV02 | CONFORM | NO | HIGH |
| Image/media-specific rules | Image System | REFERENCE / PRESERVE | NO | HIGH |
| MTR lifecycle and execution evidence | Project Governance | UPDATE EXACT TASK ONLY | NO | HIGH |

If any row becomes `CONFLICT: YES` or `CONFIDENCE: LOW`, STOP before continuing.

---

## 5. Exact allowed paths

Allowed:

- `docs/design-system/ASSET001_WNYHS_UNIFIED_ASSET_SYSTEM_STANDARD_REV01.md`
- `docs/codex/work-orders/WNYHS-ASSET-SYSTEM-001_WORK_ORDER_REV02.md`
- `docs/system/master-task-register.md`
- `assets/wnyhs/**`
- `scripts/checks/check-wnyhs-assets.mjs`
- `prototypes/dashboard/peckham/Peckham_Dashboard_Review.html`

`package.json` may change only if one additive validator command is genuinely needed and already permitted.

`package-lock.json` must not change.

No other file may be changed without a work-order revision.

---

## 6. Forbidden scope

Do not:

- modify production website/runtime;
- modify live Home Assistant;
- modify Cloudflare;
- modify Stripe/payment;
- modify HubSpot/CRM;
- modify scheduling/calendar authority;
- modify auth/API/email/notification runtime;
- expose secrets;
- install dependencies;
- modify `package-lock.json`;
- modify DESIGN001;
- redraw/trace/replace locked WNYHS logo/crest assets;
- invent new fonts;
- invent a new palette;
- invent physical print color conversions;
- invent device capabilities;
- invent live telemetry;
- invent live weather;
- invent floorplans;
- invent sensor locations;
- invent a photo and present it as the actual Peckham property;
- merge;
- deploy;
- open more than one PR.

---

## 7. Customer-language standard — mandatory

The dashboard is for customers, not developers.

Every customer-visible string must use plain, ordinary language.

### 7.1 Readability target

Customer-facing copy should:

- be understandable without Home Assistant, networking, software, or engineering knowledge;
- prefer short labels and short sentences;
- avoid internal implementation vocabulary;
- explain what the customer needs to know, not how the software works;
- use familiar words before technical words;
- avoid unnecessary qualifiers and process language.

Target ordinary consumer readability roughly equivalent to a middle-school reading level unless a device/product name itself is technical.

### 7.2 Forbidden customer-visible implementation language

Do not show these terms to the customer unless a separately governed technical/admin screen explicitly requires them:

- deterministic
- telemetry
- browser-local
- fixture
- implementation
- binding
- capability verification
- consumer integration
- semantic
- canonical
- source-of-truth
- runtime
- payload
- state machine
- mock
- harness
- artifact
- unresolved binding
- representative status
- local demo sequence

Avoid `simulated` when simpler wording such as `example`, `preview`, or `not live` communicates the same truth.

### 7.3 Preferred customer language

Use patterns such as:

- `Example activity`
- `Preview only — not connected to the live system`
- `Setup pending`
- `Setup will be completed on site`
- `Not available yet`
- `Exact window labels will be added during setup`
- `Time shown from this device`
- `Not live system data`
- `Weather unavailable in this preview`
- `Contact options are disabled in this preview`

### 7.4 Required Activity-page rewrite

Replace engineering/demo language with a customer-first presentation.

Recommended structure:

**Activity**

Helper:
`Example activity is shown here for review. This is not live Peckham history.`

Sections:

1. **Needs Attention**
   - only when an example attention/alert item exists;
   - plain explanation;
   - status label may use governed status terminology.

2. **Recent**
   - example recent changes;
   - e.g. `Main Entrance Door status changed in this preview.`

3. **Resolved**
   - e.g. `An example alert was resolved.`

Do not show:

- `Deterministic examples`
- `Current Review fixture`
- `representative status`
- `local demo`
- `component review`
- `Demo sequence`

Status values such as Normal / Active / Attention / Alert / Unavailable remain governed status terms and may remain visible.

### 7.5 Required footer/time rewrite

Replace:
`Browser-local display, not Peckham telemetry`

with plain language such as:
`Time shown from this device. Not live system data.`

### 7.6 Required Systems/Property terminology cleanup

Prefer:

- `Setup pending` instead of `Live bindings unresolved`
- `Setup will be completed on site` instead of `pending onsite binding and capability verification`
- `Preview only` instead of `Approval data simulated`
- `Exact window labels will be added during setup` instead of `individual physical locations remain unresolved` when customer-facing
- `Not connected` instead of implementation-oriented connection wording

Do not reduce truthfulness while simplifying language.

---

## 8. Approved customer navigation

Canonical navigation remains:

- Home
- Systems
- Activity
- Explore WNYHS
- Support
- Property
- Settings

Do not add Alerts as a navigation item.

`Explore WNYHS` may remain marked `Coming Soon` if that remains current approved behavior.

---

## 9. Header utilities and review controls

For the standalone approval artifact only, review controls may include:

`DEVICE | THEME | SIZE | USER`

USER remains the far-right utility on desktop/tablet.

DEVICE is review-only and is not a production customer control.

Required DEVICE modes:

- Desktop — 1440px
- Tablet — 1024px
- Phone — 390px

The DEVICE control must:

- be readable in Light and Dark;
- have a clear selected state;
- be keyboard accessible;
- not depend on browser-native `<select>` option styling if that creates unreadable Dark-theme options;
- remain offline and self-contained;
- drive real responsive reflow, not desktop scaling.

Preferred implementation: governed button + accessible styled popover/menu or equivalent deterministic control.

Review-only Font / Scenario / Component State controls remain in Settings.

---

## 10. Known DEVICE selector defect

Current defect:

In Dark theme, the native DEVICE selector menu renders option text with insufficient contrast until mouse hover.

This must be fixed.

Do not solve by relying on browser-specific native option-color behavior.

Acceptance:

- Desktop / Tablet / Phone option labels are immediately readable when menu opens;
- Light and Dark both pass;
- hover is not required for legibility;
- keyboard navigation remains clear;
- selected mode is obvious.

---

## 11. Skip-link correction

Current defect:

`Skip to dashboard content` remains visibly overlaid in tablet/print evidence.

Correct behavior:

- visually hidden by default;
- visible only when keyboard-focused;
- hidden again after focus leaves;
- must not obscure cards;
- hidden in print/capture output;
- accessibility behavior preserved.

---

## 12. Desktop / Tablet / Phone composition

### Desktop

- premium masthead;
- horizontal nav;
- efficient use of width;
- clear visual hierarchy;
- high-end WNYHS identity;
- no desktop left sidebar.

### Tablet — 1024px

- intentional responsive composition;
- no desktop scaling;
- two-column content where appropriate;
- nav alignment remains clean;
- `Explore WNYHS` wrapping is intentional and equal-height with peers;
- support buttons keep equal height;
- `Email Support` should not wrap unnecessarily;
- status fields remain readable;
- no horizontal overflow.

For First Floor Windows on tablet:

- preserve all 15 contacts;
- prefer a compact 3-column presentation when spacing/touch requirements allow;
- do not hide sensors;
- do not imply physical window positions.

### Phone — 390px

Do not squeeze the desktop/tablet utility row into one narrow line.

Create an intentional phone composition.

Requirements:

- one primary content column;
- no horizontal scrolling;
- no clipped labels;
- no tiny text;
- usable touch targets;
- DEVICE / THEME / SIZE / USER reflow intentionally;
- USER remains clearly identifiable;
- nav remains usable;
- status fields remain legible;
- hero and illustrations simplify responsively instead of becoming visual clutter;
- action buttons remain usable.

---

## 13. High-end WNYHS visual standard

The dashboard must look like a polished installed WNYHS product, not a generic admin panel or technical prototype.

Required qualities:

- recognizable WNYHS identity;
- premium but restrained;
- confident visual hierarchy;
- clean spacing;
- strong card composition;
- purposeful use of approved gold identity accents;
- governed shadows/borders/depth only;
- cohesive icons and reusable illustrations;
- enough visual interest to feel finished.

Do not create:

- cyberpunk UI;
- tactical/military styling;
- gaming styling;
- neon styling;
- excessive glassmorphism;
- decorative clutter;
- random gradients;
- generic SaaS-admin appearance.

---

## 14. Approved WNYHS brand assets

Use approved existing brand assets according to the brand standard.

Locked assets remain unchanged.

Do not:

- redraw;
- trace;
- recolor outside approved behavior;
- rename;
- move;
- replace.

The dashboard should visibly use approved WNYHS identity rather than substitute a generic invented mark when an approved compact brand asset is appropriate.

---

## 15. Property hero

The Home page requires a stronger premium hero.

It should communicate:

- WNYHS identity;
- PK | PECKHAM;
- represented coverage;
- installed contact count;
- connection/preview state;
- setup items still pending.

The visual hierarchy should be immediately understandable.

Avoid internal labels such as `represented coverage posture` if simpler customer wording is available.

Preferred customer wording:

- `16 sensors installed`
- `Preview only`
- `Entry setup pending`
- `Window labels pending`

---

## 16. Peckham property image / visual centerpiece

A polished operator-approved Peckham funeral-home facade image may be used as a local dashboard visual if supplied into the repository.

Requirements for the approved derivative:

- based on the operator-provided Peckham property reference;
- no cars;
- no adjacent buildings;
- clean, freshly maintained appearance;
- polished landscaping;
- visually realistic;
- no fabricated security equipment shown as installed;
- no fabricated signage text beyond what is supported by the approved image;
- do not present generic substitute architecture as an evidentiary photograph;
- if materially beautified, treat it as a branded presentation image, not forensic/photo evidence.

Do not download external imagery during Codex execution.

If the operator-approved polished image is not present in the repository, do not block implementation; preserve a governed local-media slot and report the missing operator-supplied binary asset at visual-review handoff.

---

## 17. Main Entrance visual

Present Door Contact, Lever Lock, Deadbolt, and Doorbell as one understandable entry system.

Customer-facing copy should use:

- Main Entrance Door
- Lever Lock
- Deadbolt
- Doorbell

Avoid:

- assembly jargon;
- binding jargon;
- capability-verification jargon.

Preserve actual known state:

- contact installed / preview state;
- lever lock setup pending/unavailable;
- deadbolt setup pending/unavailable;
- doorbell setup pending/unavailable.

Do not imply common live state or live control.

---

## 18. Window coverage visual

Show 15 installed first-floor window contacts in a polished non-spatial representation.

Customer copy:

- `15 window sensors installed`
- `Exact window labels will be added during setup`

Do not use wording that sounds like an engineering uncertainty report.

Do not imply actual physical placement until locations are verified.

---

## 19. Unavailable media and weather

Doorbell:

- use polished unavailable-media treatment;
- plain language:
  `Doorbell video will appear here after setup.`
  or
  `Video is not available in this preview.`

Weather:

- `Weather unavailable in this preview`

Do not show fake weather.

Do not use implementation-oriented explanations.

---

## 20. Support

Customer-facing Support should be simple.

Use:

- Support
- Call WNYHS
- Email Support

If actions are disabled in the approval artifact:
`Contact options are disabled in this preview.`

Do not show internal phrases such as:
`governed customer action family`
or
`local preview interactions`.

Tablet/phone buttons must remain equal-height and readable.

---

## 21. Asset system completion

Preserve the existing canonical asset library and validator.

Required canonical categories may include:

- navigation;
- utility;
- capability;
- status;
- placeholders;
- reusable dashboard illustrations.

All new reusable SVG assets must:

- be registered in `assets/wnyhs/manifest.json`;
- follow ASSET001;
- use governed currentColor behavior where applicable;
- remain transparent unless background is explicitly part of the approved composition;
- avoid embedded text unless the asset class explicitly requires it;
- avoid external resources.

Do not duplicate semantic assets merely for different channels/themes.

---

## 22. Canonical asset preview

`assets/wnyhs/validation/asset-preview.html`

Must show every canonical asset in:

- Light;
- Dark;
- Gold;
- Muted;
- Alpha/checkerboard.

Every treatment must visibly render the asset.

Do not alter canonical SVG source colors merely to make preview treatments work.

The preview may use preview-only styling/filtering.

---

## 23. Validation ownership — permanent rule for this task

### Codex-owned mechanical validation

Codex must run only validation it can legitimately execute:

- canonical asset validator;
- manifest consistency;
- SVG grammar;
- JavaScript syntax;
- HTML/CSS structural checks;
- required DEVICE wiring;
- responsive/container-query wiring;
- no network-capable references;
- no external dependencies;
- prohibited-content checks;
- no unexpected deletions;
- no conflict markers;
- `git diff --check`;
- `package-lock.json` unchanged;
- protected systems untouched.

### Operator-owned visual validation

The operator owns rendered visual approval in normal desktop Chrome for:

- asset preview appearance;
- Desktop;
- Tablet;
- Phone;
- Light;
- Dark;
- Compact;
- Default;
- Large;
- responsive layout;
- clipping/overflow;
- visual quality;
- WNYHS brand presence;
- customer-language readability;
- keyboard focus appearance;
- print/capture presentation.

### Prohibited validation behavior

Codex must NOT:

- attempt controlled-browser navigation to local `file://` URLs;
- retry known-blocked `file://` browser actions;
- launch another browser as a workaround;
- start a local HTTP server merely to bypass the browser restriction;
- deploy a preview merely to satisfy browser validation;
- repeatedly report the same known browser-policy limitation.

The blocked Codex browser environment is not an implementation defect.

When mechanical checks pass, STOP for operator review.

---

## 24. Print/capture behavior

PDF/screenshot evidence must not be contaminated by accidental interaction UI.

Print/capture must not show:

- persistent skip links;
- open DEVICE menus;
- hover-only UI;
- unintended focus overlays;
- clipped controls.

Selected DEVICE mode should remain identifiable where useful for review evidence.

---

## 25. Truthfulness requirements

Never imply:

- live state when not live;
- live connection when not connected;
- exact sensor locations when unresolved;
- a real camera frame when unavailable;
- real weather when unavailable;
- actions were actually sent;
- an alert was actually delivered;
- the approval artifact is production-connected.

Plain language must remain truthful.

---

## 26. Required final self-check

Before requesting operator approval, explicitly inspect customer-visible strings for technical/internal language.

Search at minimum for:

- deterministic
- telemetry
- browser-local
- fixture
- binding
- capability
- simulated
- representative
- demo sequence
- local demo
- component review
- runtime
- canonical
- semantic
- artifact

Any customer-visible occurrence must either:

1. be rewritten into plain customer language; or
2. be documented as a justified exception outside the customer-facing surface.

Do not merely pass a string search; inspect meaning and context.

---

## 27. Required validation

Run:

1. `node scripts/checks/check-wnyhs-assets.mjs`
2. JavaScript syntax validation for standalone HTML
3. manifest consistency
4. no-network/external-resource scan
5. responsive/device wiring static checks
6. customer-language forbidden-term scan
7. skip-link static behavior check
8. DEVICE menu accessibility/state check
9. unexpected deletion check
10. conflict-marker scan
11. `git diff --check`
12. confirm `package-lock.json` unchanged
13. confirm protected systems untouched

Do not run blocked controlled-browser `file://` validation.

---

## 28. Operator visual-review gate

After mechanical validation passes:

STOP.

Do not:

- mark DONE;
- commit;
- push;
- open PR.

Return only:

- files changed;
- validation summary;
- any operator-supplied visual asset still missing;
- concise operator visual-review checklist.

Await explicit operator approval.

---

## 29. Final Git delivery after operator approval

Only after explicit operator visual approval:

1. update exact MTR task to DONE;
2. run final mechanical validation;
3. commit existing bounded changes;
4. push existing branch;
5. open exactly one DRAFT PR to `main`;
6. do not merge;
7. do not deploy;
8. return final closeout + RSI + PR URL.

Suggested PR title:

`WNYHS-ASSET-SYSTEM-001 — complete unified asset system and Peckham dashboard standard`

---

## 30. Exit criteria

Task is complete only when:

- asset system remains governed and validated;
- manifest covers all canonical assets;
- asset preview visibly supports required treatments;
- Peckham uses canonical reusable assets;
- Desktop / Tablet / Phone review modes exist;
- Dark DEVICE selector defect is fixed;
- skip-link defect is fixed;
- responsive tablet/phone compositions are intentional;
- customer-facing copy is plain language;
- Activity page contains no developer/demo jargon;
- footer/time copy contains no telemetry/browser jargon;
- high-end WNYHS brand presentation is visible;
- truthfulness is preserved;
- operator visual approval is explicit;
- one draft PR is open;
- no merge/deploy occurred;
- protected production systems remain untouched.
