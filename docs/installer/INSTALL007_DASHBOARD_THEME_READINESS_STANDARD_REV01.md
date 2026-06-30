# INSTALL007 - Dashboard Theme Readiness Standard - REV01

Status: Active standard
Customer-facing: No
Implementation authority: No
Task ID: INSTALL007
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

---

## 1. Purpose

Dashboard theme readiness ensures WNYHS Home Assistant dashboards can support light, dark, high-contrast, seasonal, and future customer-selected themes without rebuilding dashboard structure.

This standard defines how future Customer, Installer, and Service dashboards should separate dashboard purpose, layout, labels, status meaning, and permissions from future theme values.

This standard does not create Home Assistant theme files, dashboard YAML, Lovelace cards, CSS, frontend assets, automations, scripts, customer-specific dashboards, or implementation files.

## 2. Scope

This standard covers theme-readiness architecture only.

Included:

- theme readiness principles
- dashboard structure requirements
- color/token separation
- customer, installer, and service dashboard considerations
- accessibility requirements
- theme-safe card grouping
- naming and labeling implications
- future theme implementation boundary

Out of scope:

- Home Assistant theme YAML
- Home Assistant dashboard YAML
- Lovelace card implementation
- frontend assets
- CSS or style files
- automations, scripts, scenes, helpers, or blueprints
- customer-specific dashboards
- funeral-home-specific themes or dashboards
- source, route, UI, runtime, public asset, dependency, package-lock, or Cloudflare changes

## 3. Theme Readiness Principles

Future dashboard planning should follow these principles:

- Dashboards should not depend on hardcoded colors.
- Cards and views should consume theme variables when themes are implemented later.
- Status meaning must not be color-only.
- Layout must remain stable across themes.
- The Customer Dashboard must stay readable in light and dark modes.
- Installer and Service diagnostics must remain readable in high-density views.
- Seasonal themes must not change operational meaning.
- Customer-selected themes must not expose setup-only or service-only surfaces.
- Theme changes should affect presentation, not dashboard structure, permissions, navigation, or status definitions.
- Dashboard labels should remain plain-language and readable independent of theme choice.

## 4. Supported Future Theme Classes

The following candidate theme classes are planning only. They do not authorize theme implementation.

| Future theme class | Planning intent | Implementation status |
| --- | --- | --- |
| Default Light | Standard bright daily-use presentation for customer and internal dashboards. | Planning only. |
| Default Dark | Standard low-light daily-use presentation for customer and internal dashboards. | Planning only. |
| High Contrast | Accessibility-oriented treatment for stronger text, border, focus, and status separation. | Planning only. |
| Seasonal / Holiday | Optional presentation layer that may change decorative values without changing status meaning. | Planning only. |
| Brand / Premium | Optional branded or premium presentation layer that preserves dashboard structure and status semantics. | Planning only. |
| Customer-selected | Future customer preference class for approved customer-visible dashboards only. | Planning only. |
| Installer / Service diagnostic theme | Dense diagnostic treatment for installer and service review surfaces. | Planning only. |

## 5. Dashboard Class Requirements

### 5.1 Customer Dashboard

Theme readiness expectations:

- Keep the daily-use surface readable and calm.
- Remain safe in Default Light and Default Dark.
- Use a simple status hierarchy customers can understand without diagnostic context.
- Preserve large, touch-friendly controls on phones and tablets.
- Avoid diagnostic clutter, tiny badges, and setup-only vocabulary.
- Use text and icons to support warning, error, success, and info states.
- Avoid relying on a dark background for legibility.

### 5.2 Installer Dashboard

Theme readiness expectations:

- Remain dense but readable during bench work and onsite commissioning.
- Keep warning and error states clear in Default Light, Default Dark, and High Contrast.
- Keep diagnostic groups scannable without theme-specific layout changes.
- Ensure setup status cannot rely on color alone.
- Preserve installer-only visibility boundaries when customer-selected themes are introduced later.
- Keep provisional, blocked, deferred, and ready states textually clear.

### 5.3 Service Dashboard

Theme readiness expectations:

- Remain safe for support triage and service review.
- Keep offline, low battery, failure, blocked, and deferred states clear across themes.
- Preserve diagnostic status hierarchy in dense views.
- Use text and icon support for priority states.
- Avoid decorative treatments that reduce service-review clarity.
- Keep service-only views outside customer-selected theme exposure.

## 6. Semantic Role Categories

Future Home Assistant dashboard theme work should define its own Home Assistant-specific semantic role categories. The categories below are conceptual only and do not implement tokens.

| Semantic role category | Conceptual use |
| --- | --- |
| Canvas / page background | Full dashboard page background. |
| Surface / card background | Standard card and panel background. |
| Elevated surface | Modal, popover, selected card, or higher-priority surface. |
| Primary text | Main readable text. |
| Secondary text | Supporting labels and descriptions. |
| Muted text | Low-priority helper text that remains readable. |
| Border / divider | Separators, card outlines, and grouping boundaries. |
| Accent | Non-status emphasis and brand-related highlights. |
| Primary action | Main customer or installer action control. |
| Warning | Needs attention, deferred, or caution state. |
| Error / critical | Blocked, failed, or service-critical state. |
| Success / healthy | Confirmed ready, normal, or healthy state. |
| Info | Neutral information or context. |
| Disabled / unavailable | Disabled, unavailable, offline, or not applicable state. |
| Focus / selected | Keyboard focus, selected tab, active view, or chosen control. |
| Service diagnostic | Internal diagnostic indicators and service-review grouping. |

These categories should guide future THEME work, but this task does not create CSS variables, Home Assistant theme keys, YAML, card templates, or visual assets.

## 7. Status and Accessibility Rules

Theme-ready dashboards must follow these rules:

- Warning, error, success, and info states must include text or icon support, not color-only meaning.
- Contrast must remain readable in light and dark modes.
- Touch targets must remain usable on tablets.
- Dashboard cards must not hide critical state in decorative themes.
- Disabled and unavailable states must be visually distinct and textually understandable.
- Avoid dark-only assumptions.
- Avoid tiny icon-only status on customer dashboards.
- Focus and selected states must remain visible in High Contrast.
- Seasonal and Brand / Premium themes must preserve the same status hierarchy as Default Light and Default Dark.
- Service diagnostic density must not reduce readability of blocked, failed, offline, or low battery states.

## 8. Card and View Design Rules

Theme-ready card and view planning should follow these rules:

- Group by outcome and area, not vendor.
- Separate customer controls from installer and service diagnostics.
- Keep the first screen simple.
- Avoid theme-specific card logic.
- Avoid image or background dependence for readability.
- Preserve consistent order across themes.
- Use readable labels from future `INSTALL004` and `INSTALL005` governed naming and entity standards.
- Theme changes should not change navigation or permissions.
- Do not create duplicate dashboards only to support a different theme.
- Do not expose setup, installer, or service views through customer-selected theme preferences.

## 9. Theme Readiness Review Sheet

Each dashboard planning or bench review pass should include a Theme Readiness Review Sheet before theme implementation or customer handoff.

Required fields:

| Field | Required use |
| --- | --- |
| Dashboard Class | Customer Dashboard, Installer Dashboard, or Service Dashboard. |
| View Name | Planned view or view group. |
| Card / Group Name | Planned card, section, or group name. |
| Semantic Role Needed | Conceptual role such as Surface, Warning, Error / critical, Focus, or Service diagnostic. |
| Customer-visible yes/no | Whether the item may appear on customer-facing dashboards or handoff material. |
| Theme class impact | Which future theme classes need review for this item. |
| Status meaning color-only yes/no | Whether status meaning currently depends on color-only treatment. |
| Light mode readable yes/no/review | Readability posture for Default Light. |
| Dark mode readable yes/no/review | Readability posture for Default Dark. |
| High-contrast ready yes/no/review | Readiness posture for High Contrast. |
| Touch target concern yes/no | Whether the item may be hard to use on phone or tablet. |
| Notes / exception | Blockers, assumptions, deferred checks, or owner decisions. |

The review sheet must not store secrets, credential values, private URLs, or customer-specific dashboard data in repository docs.

## 10. Examples Table

These examples are theme-readiness examples only. They do not create dashboard YAML, cards, entities, customer-specific content, Home Assistant configuration, or theme values.

| Dashboard Class | View / Card Example | Category | Theme-readiness concern | Required readiness posture |
| --- | --- | --- | --- | --- |
| Customer Dashboard | Home / Overview status summary | Overview | Status badges could become color-only. | Include text labels and stable order across themes. |
| Customer Dashboard | Security opening summary | Security | Door/window states need light/dark readability. | Use clear open/closed text plus icon support. |
| Customer Dashboard | Front Entry camera card | Cameras | Video preview may sit on dark or light surfaces. | Keep labels and status outside image-dependent areas. |
| Customer Dashboard | Driveway camera card | Cameras | Decorative seasonal frames could obscure status. | Keep camera state and labels on readable surfaces. |
| Customer Dashboard | Doors / Locks quick controls | Locks | Locked/unlocked meaning may rely on green/red. | Pair status color with text and icon state. |
| Customer Dashboard | Garage door status | Doors / Locks | Large control needs touch-safe contrast. | Preserve large tap target and readable state text. |
| Customer Dashboard | Living Room lighting controls | Lighting | Dimmer percentage can be low contrast. | Keep numeric state readable in light and dark modes. |
| Customer Dashboard | Vacation lighting mode | Lighting | Seasonal themes may change decorative meaning. | Preserve mode label and avoid theme-specific logic. |
| Customer Dashboard | Basement leak status | Leak / Water | Warning state must stand out across themes. | Use warning text, icon, and semantic warning role. |
| Customer Dashboard | Water shutoff status | Leak / Water | Disabled/unavailable state may look decorative. | State unavailable or disabled in text. |
| Customer Dashboard | Utility temperature card | Utility | Freeze-risk state could be color-only. | Use text and icon support for review-needed states. |
| Customer Dashboard | Support / Help contact display | Support notes | Background images could reduce readability. | Keep help text on plain readable surfaces. |
| Installer Dashboard | Setup Overview blockers | Setup | Dense blocker list can become hard to scan. | Preserve priority order and text labels in all themes. |
| Installer Dashboard | Device Adoption review | Diagnostics | Provisional and confirmed states may blur. | Use explicit state words and grouping. |
| Installer Dashboard | Zigbee Health view | Utility | Signal indicators may rely on color bars. | Add text or icon status for each health class. |
| Installer Dashboard | Z-Wave Health view | Utility | Route/health indicators can be too small. | Keep readable labels and High Contrast review. |
| Installer Dashboard | Areas / Entities readiness | Diagnostics | Ready/block/defer states may rely on color-only chips. | Use state words and stable table/card grouping. |
| Installer Dashboard | Automation Testing results | Failed automations | Failed tests must not be hidden by theme. | Use Error / critical role plus text result. |
| Installer Dashboard | Backup / Restore readiness | Utility | Old backup state may look like low-priority note. | Preserve warning role for stale or missing evidence. |
| Service Dashboard | Service Overview exceptions | Support notes | Priority hierarchy can flatten in dark mode. | Keep blocked, warning, healthy, and info hierarchy distinct. |
| Service Dashboard | Offline Devices list | Offline devices | Disabled color may hide unavailable devices. | Use offline text, icon, and service diagnostic role. |
| Service Dashboard | Low Batteries list | Low batteries | Yellow warning may be weak in light themes. | Pair warning color with battery text and icon. |
| Service Dashboard | Failed Automations list | Failed automations | Failure state must remain obvious in dense views. | Use error text, icon, and priority sorting. |
| Service Dashboard | Integration Health view | Utility | Healthy/unhealthy states may be color-only. | Provide readable health labels and info context. |
| Service Dashboard | Backup / Update Status view | Utility | Deferred update state may be mistaken for success. | Use explicit deferred/review-needed label. |
| Service Dashboard | Support Notes view | Support notes | Muted text may become unreadable. | Keep notes readable and separate from low-priority decoration. |
| Service Dashboard | Onsite Follow-up list | Service | Follow-up status must not be hidden by theme preference. | Keep service-only visibility and clear action labels. |

## 11. Anti-Patterns

Avoid or forbid these patterns:

| Avoid / forbidden example | Problem |
| --- | --- |
| Hardcoded red/green meaning with no text or icon | Status meaning becomes color-only and inaccessible. |
| Dashboard only readable on a dark background | Default Light and High Contrast readiness are blocked. |
| Customer dashboard filled with tiny diagnostic badges | Daily-use readability and touch usability are degraded. |
| Seasonal theme changing warning meaning | Decorative changes must not alter operational meaning. |
| Using background images behind critical text | Important state can become unreadable. |
| Hiding unavailable devices because the theme makes them low contrast | Service and customer review can miss unavailable state. |
| Theme-specific duplicate dashboards | Structure becomes harder to support and validate. |
| Permissions changing when theme changes | Theme preference must not affect access boundaries. |
| Customer-selected theme exposing service-only views | Customer preference must not expose setup or service surfaces. |
| Installer dashboard relying on tiny color-only chips | Setup and commissioning status becomes hard to verify. |
| Service Dashboard treating low battery as decorative muted text | Service review can miss action-needed state. |

## 12. Relationship to Other INSTALL Docs

- `INSTALL003_GOLDEN_HOME_ASSISTANT_BUILD_STANDARD_REV01.md` keeps Golden Build dashboard placeholders theme-ready.
- `INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md` defines dashboard architecture.
- `INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md` defines theme-readiness constraints.
- `INSTALL008 - Bench Testing and Commissioning Checklist` should validate dashboard and theme readiness during bench testing and commissioning.
- `INSTALL009 - Customer Handoff Package` should carry customer-safe theme and dashboard notes into handoff.
- `INSTALL010 - Service Dashboard and Remote Support Standard` should preserve Service Dashboard readability for support review.

## 13. Relationship to Public Website Token Work

WNYHS public website VISPARITY work established semantic-token thinking: meaning should be expressed through durable roles instead of one-off visual values.

Home Assistant dashboard theme work should use that concept as planning context only. Do not import website CSS tokens, website token names, public-site color values, or public-site styling implementation into Home Assistant in this task.

Home Assistant theme implementation will need its own later THEME/HA task.

## 14. Funeral Home Pilot Relevance

The funeral home pilot may use this standard when reviewing light and dark dashboard readability.

This standard does not create funeral-home-specific themes, dashboard files, dashboard YAML, Lovelace cards, customer labels, room names, device bindings, automations, support notes, Home Assistant configuration, handoff material, or onsite documentation.

## 15. Future Follow-Up Planning Notes

The following future tasks are planning notes only. They are not activated by this document:

- INSTALL008 - Bench Testing and Commissioning Checklist
- INSTALL009 - Customer Handoff Package
- INSTALL010 - Service Dashboard and Remote Support Standard
- THEME001 - Home Assistant Theme Architecture Standard
- THEME002 - Home Assistant Default Light/Dark Theme Implementation
- THEME003 - Customer Theme Selector / Theme Management

Recommended next task: INSTALL008 - Bench Testing and Commissioning Checklist.

## 16. Protected-System Boundaries

INSTALL007 is documentation and installer-platform standard work only.

It does not authorize:

- Source, route, UI, CSS, public asset, or runtime changes.
- Home Assistant configuration implementation.
- Home Assistant theme files or theme YAML.
- Dashboard YAML or Lovelace card implementation.
- Frontend assets or dashboard styling implementation.
- Automations, scripts, scenes, helpers, or blueprints.
- Customer-specific dashboards or customer-specific install documents.
- Funeral-home-specific configuration, dashboards, or themes.
- Actual customer dashboard data.
- Hardware purchasing, inventory automation, or ordering automation.
- HubSpot schema, properties, pipeline, workflow, or write-path changes.
- Stripe/payment verification or checkout changes.
- Scheduling/calendar authority changes.
- Resend/email runtime changes.
- Cloudflare configuration changes.
- Dependency or package-lock changes.
- Secret or environment-value exposure.

Future theme implementation, dashboard implementation, customer handoff, service posture, or Home Assistant configuration tasks must identify their own target files, validation, protected-system review, and rollback posture before work begins.
