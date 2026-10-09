# Bailey HA-Native Preview Validation REV01

Status: Static repository validation evidence

Task: `BAILEY-DASHBOARD-HA-NATIVE-PREVIEW-001`

## 1. Evidence identity and authority boundary

| Field | Recorded result |
| --- | --- |
| Later execution source commit | `71fb23d54cd730547c8d3ff6b87329a68be2598d` |
| Bailey Site Capability Model | `BAILEY_SITE_CAPABILITY_MODEL_REV01.md` / REV01 |
| Model repository-evidence starting commit | `b619bb9a0d5a12d7525acdec40a8b873a9dbada3` |
| Registry relationship cutoff | `2026-10-06 16:07:42 UTC` / `20261006T160742Z` |
| Preview YAML | `home-assistant/bklf/dashboards/bklf-customer-dashboard-preview.yaml` |
| Preview posture | `NON-LIVE PREVIEW`; `UNREGISTERED`; unassigned; non-production; additive |
| Fixture classification | Every displayed state, value, activity item, and availability posture is deterministic fixture/simulated presentation. Nothing is authoritative live state. |
| Runtime authority | None. This record is static repository review evidence only. |

The preview and this record do not constitute customer acceptance, runtime validation, implementation approval, handoff, commissioning, registration, assignment, or production authorization.

## 2. Canonical navigation and Home priorities

Static inspection confirms one YAML dashboard with these view titles in exact canonical order:

1. `Home`
2. `Systems`
3. `Activity`
4. `Explore WNYHS`
5. `Support`
6. `Property`
7. `Settings`

`Explore WNYHS` visibly contains `COMING SOON`. Home presents truthful property identity, visible non-live/fixture posture, attention and exception context, supported capability summaries, a static non-action workflow, and customer-safe language without raw platform diagnostics.

## 3. Capability inclusion and exclusion matrix

| Capability | Model lifecycle | Preview disposition | Evidence-conservative presentation |
| --- | --- | --- | --- |
| `BAI-CAP-001` Building posture | `INSTALLED_UNVERIFIED` | Included | Static `Unknown` / `Attention` fixture language; no mode or arm/disarm action. |
| `BAI-CAP-002` South Entrance opening | `INSTALLED_UNVERIFIED` | Included | Semantic opening only; fixture `Unknown`; no live open/closed claim. |
| `BAI-CAP-003` former South HC620 | `RETIRED_NOT_INSTALLED` | Excluded | No tile, state, action, placeholder, or replacement implication. |
| `BAI-CAP-004` South Entrance visitor/media | `INSTALLED_UNVERIFIED` | Limited inclusion | Text-only non-live capability placeholder; no media, availability, or action. |
| `BAI-CAP-005` South Entrance light | `INSTALLED_UNVERIFIED` | Included | Read-only fixture `Unknown`; no control. |
| `BAI-CAP-006` Bailey Double Doors access | `INSTALLED_UNVERIFIED` | Included | Fixture `Result unknown`; no locked/safe claim or action. |
| `BAI-CAP-007` Bailey Double Doors visitor/media | `INSTALLED_UNVERIFIED` | Limited inclusion | Text-only non-live capability placeholder; no media, availability, or action. |
| `BAI-CAP-008` parking-lot awareness | `INSTALLED_UNVERIFIED` | Limited inclusion | Text-only non-live capability placeholder; no stream, analytics, event, floodlight, or action. |
| `BAI-CAP-009` grouped exterior coverage | `DEGRADED` | Included | Grouped `Attention — mapping unresolved` fixture; no whole-property or secure/closed claim. |
| `BAI-CAP-010` C02-C04 candidates | `DEFERRED` | Excluded | No individual customer projection or inferred location. |
| `BAI-CAP-011` C09/C12 disputed candidates | `DEFERRED` | Excluded | Hidden; registry presence does not restore installed capability. |
| `BAI-CAP-012` C13/C14 candidates | `DEFERRED` | Excluded | Hidden; no active-coverage claim. |
| `BAI-CAP-013` interior motion | `INSTALLED_UNVERIFIED` | Included | Grouped semantic fixture `Unknown`; no live occupancy or automation claim. |
| `BAI-CAP-014` smoke-device presence | `INSTALLED_UNVERIFIED` | Limited inclusion | Installation posture only; no alarm, monitoring, notification, dispatch, response, or emergency-services claim. |
| `BAI-CAP-015` Viewing Room environment | `INSTALLED_UNVERIFIED` | Included | Values `71 °F` and `45%` are visibly simulated fixtures, not live readings. |
| `BAI-CAP-016` alarm/strobe output | `INSTALLED_UNVERIFIED`, `INTERNAL_ONLY` | Excluded | No customer output representation or control. |
| `BAI-CAP-017` notification/automation interfaces | `INSTALLED_UNVERIFIED` / discrepancy | Excluded as capability | Activity is labeled static fixture information architecture only; no behavior, delivery, or control claim. |

No capability is promoted to `INSTALLED_VERIFIED`. Deferred, retired/not-installed, internal-only, unresolved-location-specific, and unsupported capabilities remain omitted rather than being presented as live customer functions.

## 4. South access-control exclusions

- The former South Entrance HC620 remains `RETIRED_NOT_INSTALLED` in the controlling model and is absent from the preview.
- The preview contains no future South mag-lock tile, text, icon, route, placeholder, replacement concept, or implied control.
- Independently evidenced South Entrance opening, visitor, and light capabilities retain their own unverified/exception-limited posture; they do not revive the retired lock.

## 5. Exception mapping

| Exception | Preview effect |
| --- | --- |
| `BAI-EXC-001` | Former South HC620 excluded; obsolete South-lock automation/registry residue does not appear. |
| `BAI-EXC-002` | C02-C04 individual/location claims omitted; grouped degraded coverage only. |
| `BAI-EXC-003` | C09/C12 hidden; no complete-coverage claim. |
| `BAI-EXC-004` | C13/C14 hidden and outside customer presentation. |
| `BAI-EXC-005` | Every state/value is visibly deterministic fixture/simulated content; none is authoritative current state. |
| `BAI-EXC-006` | No controls, service calls, permission claim, audience assignment, or action authority. |
| `BAI-EXC-007` | No media image, history, recording, audio, talk, snapshot, stream, or privacy claim. |
| `BAI-EXC-008` | No local/remote media availability or remote-access claim. |
| `BAI-EXC-009` | Smoke appears as installation/unverified posture only; no alarm/monitoring/response claim. |
| `BAI-EXC-010` | Alarm/strobe output omitted from customer representation and controls. |
| `BAI-EXC-011` | No customer-live notification or automation behavior; Activity examples are static fixtures only. |
| `BAI-EXC-012` | No mode-dependent, access-control, lock/unlock, or close-and-arm action. |
| `BAI-EXC-013` | Core/native Lovelace constructs only; zero custom-card or HACS dependency. |
| `BAI-EXC-014` | No invented floor, coordinates, weather, timezone, or unsupported complete spatial context. |
| `BAI-EXC-015` | Preview-evidence posture only; no acceptance, implementation approval, production authority, assignment, handoff, commissioning, or deployment implication. |
| `BAI-EXC-016` | No entity IDs, registry detail, diagnostic/configuration data, or raw technical noise in the preview. |

All applicable open exceptions remain open. The preview resolves none of them.

## 6. Core/native-card and dependency posture

Static inspection confirms the YAML uses only core Lovelace dashboard/view structures and core `markdown` and `grid` cards. It contains:

- zero `custom:` card references;
- zero HACS or frontend-resource requirements;
- zero custom JavaScript or CSS resources;
- zero new integrations, helpers, templates, packages, themes, or dependencies; and
- zero production entity bindings.

Material Design Icon names are used only as inspectable view decoration with plain-language view titles. They do not convey status without text and do not grant capability or action authority.

## 7. Responsive structural review

| Surface | Static structure review |
| --- | --- |
| Phone portrait | Home Assistant masonry reflow and nested core grids provide a single-dashboard structure. Narrow-width grid reflow is platform-controlled; no separate phone YAML or horizontal fixed-width layout exists. |
| Tablet portrait/landscape | Core masonry plus two-column content grids allow platform-native reflow without device-specific duplication. |
| Desktop browser | `max_columns` bounds top-level masonry composition; comparable content is grouped in core grids. No wall-display surface is claimed. |

This is repository-safe structural review, not a rendered Home Assistant, Companion, browser, device, or runtime acceptance test. Compact/Default/Large and theme/font modes are documented as governed concepts only; the preview does not add controls or runtime configuration for them.

## 8. Accessibility and static review

- Every view and card has a plain-language title.
- Status and lifecycle meaning is written in text and is not color-only.
- No image carries information, and no media alternative is required.
- No interactive card, action control, or ambiguous icon-only control is present.
- Markdown headings, lists, and short paragraphs provide a predictable reading hierarchy.
- Core Home Assistant supplies focus/keyboard behavior for native navigation; no custom focus code is introduced.
- Light/Dark/Auto conceptual parity is preserved by avoiding hardcoded colors and theme-specific content.

Runtime contrast, screen-reader output, keyboard traversal, High Contrast behavior, touch targets, reduced motion, and exact device reflow require a later separately authorized rendered HA validation. They are not claimed as tested here.

## 9. DESIGN001 limitations under core Lovelace

The dependency-free core-card constraint supports semantic hierarchy, native reflow, accessible text, identity/status separation, and text-supported lifecycle meaning. Without custom styling, theme work, or qualified reusable components, this revision does not claim exact implementation of:

- WNYHS gold identity and blue interaction tokens;
- Inter / Atkinson Hyperlegible / System selection;
- exact tile radius, padding, shadow, border, typography, status-value field, equal-height, or action geometry;
- exact focus-ring and High Contrast treatment beyond Home Assistant core behavior;
- Compact / Default / Large customer preference controls; or
- a governed 16:9 media footprint, because media is intentionally absent and represented by text only.

These limitations are recorded rather than replaced with ad hoc colors, CSS, custom cards, themes, or dependencies.

## 10. Protected-boundary confirmations

- **No binding:** no production platform entity ID or candidate binding appears in the preview.
- **No action:** no `tap_action`, `hold_action`, `double_tap_action`, action/service call, navigation control, lock/unlock, mode, arm/disarm, close-and-arm, alarm, strobe, light, or media action is defined.
- **No media:** no camera/media card, image, stream, history, recording, audio/talk, snapshot, private URL, remote-access surface, or `LIVE` indicator exists.
- **No live/runtime:** no live Home Assistant access, restart/reload, `.storage`, `configuration.yaml`, registration, route/sidebar, assignment, theme, frontend-resource, package, integration, helper, template, entity, device, or network mutation occurred.
- **No protected-system change:** Cloudflare, website/API, CRM/HubSpot, Stripe/payment, scheduling, email, quote/funnel, database/schema, BPI, automation/notification owners, secrets, customer-private data, and canonical standards were untouched.

## 11. Static validation record

Final repository-safe static validation confirmed:

- exact three-file allowlist and exact MTR-block-only bookkeeping change;
- safe YAML parse;
- seven navigation labels in exact order and visible `COMING SOON`;
- zero `custom:`, platform-ID bindings, service/action calls, and camera/media cards;
- visible `NON-LIVE PREVIEW`, `UNREGISTERED`, and deterministic fixture/simulated classification;
- former South HC620 and future South mag-lock excluded as required;
- no `INSTALLED_VERIFIED` promotion;
- existing Bailey dashboard SHA-256 hashes unchanged:
  - `bklf-main-dashboard.yaml`: `738C03AD3662EF651F6522B1E8FD249C50C64DAAC5EB944CD6BAA22D2F3F201A`
  - `bklf-desktop-dashboard.yaml`: `F7D20459626BD76D53550E8B2F1B1452345E3E14D0DF08B3D7405A1BE0E6DB6F`
- no conflict markers, raw exports, unexpected deletions, protected/config/runtime changes, or adjacent MTR edits; and
- `git diff --check` success.

Application build is a governed skip under `CODEX_EXECUTION_STANDARD_REV01.md` Section 16 and the controlling work order because this task changes repository Home Assistant YAML plus documentation only and does not change application/build configuration. Live Home Assistant validation is forbidden.

## 12. Exact blockers before site-bound implementation

1. Separately authorized current live-state, availability, timestamp/update, unknown/unavailable, and commissioning evidence for every displayed site-bound state (`BAI-EXC-005`).
2. Onsite resolution of C02-C05 mappings, C09/C12 disposition, and C13/C14 placement/inclusion before affected location or complete-coverage claims (`BAI-EXC-002` through `004`).
3. Actual backend grants, assignments, role limits, allowed/denied tests, confirmation/result, change, and revocation evidence before any action or audience assignment (`BAI-EXC-006`).
4. Media privacy, retention, audio, recording, access, consent/notice, local/remote reachability, fallback, and revocation decisions before any media surface (`BAI-EXC-007`, `008`).
5. Controlled smoke-state, clear/failure, notification, and response validation before any alarm-state presentation (`BAI-EXC-009`).
6. Safe physical mapping, activation/result, permission, and commissioning evidence before any alarm/strobe representation (`BAI-EXC-010`).
7. Notification/automation source reconciliation and controlled event/delivery/recovery acceptance before customer-live behavior claims (`BAI-EXC-011`).
8. Authoritative site mode, role/transition, result/failure, and Bailey door-contact pairing evidence before mode or access-control implementation (`BAI-EXC-012`).
9. Dependency/resource qualification only if a later design selects a custom dependency (`BAI-EXC-013`). REV01 selects none.
10. Approved property/floor/location and time/weather sources only for later features that depend on them (`BAI-EXC-014`).
11. Operator/customer review, correction disposition, runtime authorization, implementation validation, acceptance, assignment, handoff, and production authorization (`BAI-EXC-015`).

The retired South HC620 is an exclusion, not a blocker or future implementation candidate. A future South mag lock is outside this model and task.
