# DESIGN001 - WNYHS Dashboard Visual & Component Standard - REV02

Status: Active canonical dashboard standard

Customer-facing: No

Implementation authority: Visual and component governance only; implementation requires a separate bounded task

Task ID: DESIGN001-WNYHS-CUSTOMER-INTERFACE-STANDARD-001

Primary workstream: Dashboard / Interactive Experience System

Predecessor: `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV01.md` (SUPERSEDED)

Absorbed lineage: Visual/component, theme-readiness, readability, focus, and accessibility presentation rules from the withdrawn branch-only customer-dashboard-design REV02 draft, customer-dashboard-design REV01, customer-dashboard philosophy, and INSTALL007 REV01.

Work order: `docs/codex/work-orders/DASH-GOV-REFRESH-001_WORK_ORDER_REV02.md`

## 1. Purpose and owner boundary

This is the canonical owner for dashboard visual appearance: surface roles, colors, typography, tile and media geometry, Status Value Fields, action components, visual states, theme parity, accessibility presentation, focus, motion, and deterministic rendering tokens.

`INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` owns functional behavior, permission and command meaning, customer status semantics, navigation, Activity/Alert behavior, and capability visibility. `DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` owns responsive modes, customer-specific assembly, evidence binding, prototypes, and validation.

This standard does not authorize functional permissions, command authority, notification routing, Home Assistant binding, dashboard implementation, live systems, or deployment.

## 2. Canonical visual tokens

Implementations may translate token names into their platform syntax, but must preserve these roles and values for deterministic approval output.

### 2.1 Identity and interaction

| Token | Value | Use |
| --- | --- | --- |
| `--wnyhs-gold` | `#D4AF37` | Brand wordmark, governed tile icon, tile title, restrained identity accent. |
| `--action-blue` | `#0A84FF` | Executable customer interaction surfaces. |
| `--action-blue-hover` | `#0876E4` | Hover/focus-supporting action fill. |
| `--action-blue-selected` | `#075EBA` | Confirmed Selected/On visual state. |
| `--action-blue-disabled` | `#64748B` | Disabled action surface with adequate text contrast. |

Gold is identity, not action authority. Blue is action, not status, except where the `Active` status-value token below is used on actual status text.

### 2.2 Semantic status-value text

| Customer value | Token | Value |
| --- | --- | --- |
| Normal / Good | `--status-normal` | `#22C55E` |
| Active | `--status-active` | `#0A84FF` |
| Attention | `--status-attention` | `#F5A524` |
| Alert | `--status-alert` | `#EF4444` |
| Unavailable / unknown | `--status-unavailable` | `#94A3B8` |

Actual status values are the only dashboard text allowed to use these semantic status colors. Titles, descriptions, labels, helper text, navigation, timestamps, button labels, and prose use neutral, identity, or action roles. Color never carries meaning alone.

Red `• LIVE` is reserved for confirmed live media/broadcast state. It is not an Alert label and is absent for simulated, unavailable, stale, or unknown media.

### 2.3 Light and dark surfaces

| Role | Light | Dark |
| --- | --- | --- |
| Page background | `#F4F7FB` | `#08111F` |
| Shell/header/footer | `#FFFFFF` | `#0D1726` |
| Tile surface | `#FFFFFF` | `#111D2E` |
| Recessed field | `#E8EEF6` | `#091321` |
| Primary text | `#172033` | `#F8FAFC` |
| Muted text | `#5F6B7A` | `#A8B3C2` |
| Border/divider | `#CDD6E3` | `#314056` |
| Focus ring | `#0A84FF` | `#5CB3FF` |

Auto selects the appropriate Light/Dark role set from the device/platform preference. Theme changes alter presentation only; structure, permissions, navigation, state meaning, and action availability remain fixed.

## 3. Typography

Approved customer typefaces are:

- `Inter`, default;
- `Atkinson Hyperlegible`, easy-read option; and
- `System`, device/system stack.

Canonical stacks:

- Inter: `Inter, Arial, sans-serif`
- Atkinson Hyperlegible: `"Atkinson Hyperlegible", Arial, sans-serif`
- System: `system-ui, -apple-system, "Segoe UI", Arial, sans-serif`

| Token | Font size / line height | Weight |
| --- | --- | --- |
| `--type-page-title` | `32px / 38px` | 700 |
| `--type-section-title` | `22px / 28px` | 700 |
| `--type-tile-title` | `18px / 24px` | 700 |
| `--type-body` | `16px / 24px` | 400 |
| `--type-helper` | `14px / 20px` | 400 |
| `--type-status-value` | `16px / 20px` | 700 |
| `--type-button` | `16px / 20px` | 650 |

Compact may reduce page title to `28px / 34px` and tile title to `17px / 22px`. Large may increase page title to `36px / 42px`, tile title to `20px / 26px`, body to `17px / 25px`, and status/button text to `18px / 22px`. Text must remain readable without arbitrary scaling or browser zoom.

## 4. Spacing and geometry tokens

Base spacing tokens are `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, and `32px`.

| Component token | Compact | Default | Large |
| --- | --- | --- | --- |
| Tile padding | 16px | 20px | 24px |
| Grid gap | 12px | 16px | 20px |
| Tile radius | 14px | 16px | 18px |
| Header gap | 10px | 12px | 14px |
| Icon circle | 40px | 44px | 48px |
| Icon size | 20px | 22px | 24px |
| Status field minimum width | 112px | 128px | 144px |
| Action height | 48px | 48px | 56px |
| Action radius | 10px | 10px | 12px |

Tile borders are 1px using the active border role. Depth uses restrained shadows only: light `0 8px 24px rgb(15 23 42 / 12%)`; dark `0 10px 28px rgb(0 0 0 / 28%)`. No decorative glow may compete with status or focus.

## 5. Standard tile anatomy

Tiles use:

`header identity -> divider -> content/media -> status -> actions`

The header contains a dark filled circular icon container, precisely centered governed icon in WNYHS gold, gold tile title, neutral subtitle, and consistent type/spacing. The icon container uses `#111827` in Light and `#050A12` in Dark.

A 1px governed divider appears immediately after the complete header region, inset to the tile content edges, with 60% border-role opacity and 12px Default vertical separation (10px Compact, 16px Large).

Comparable tiles do not invent their own header, divider, status, media, or action geometry.

## 6. WNYHS Status Value Field

Every displayed customer status value uses a neutral left label and right-justified value field. Multiple rows align to one right-side value column.

The field uses the active recessed surface, 1px border, 8px radius, minimum width from Section 4, horizontal padding `12px`, vertical padding `8px`, and a restrained inset shadow: Light `inset 0 1px 3px rgb(15 23 42 / 18%)`; Dark `inset 0 1px 4px rgb(0 0 0 / 45%)`.

Field geometry never changes by severity. Only actual value text receives semantic status color. Plain-language value text remains mandatory.

## 7. One customer action-button family

All customer actions use one visual family. Primary-versus-secondary appearance families are retired. Width may vary; height and anatomy do not.

- Compact: 48px
- Default: 48px
- Large: 56px

Insufficient width causes reflow, never reduced height. Arbitrary-height, double-height, square icon-over-label, module-specific, Quick Actions-specific, Climate-specific, and Support-specific geometry is prohibited.

Visual states:

- **Available / Off:** action blue, clear label, standard elevation.
- **Hover / Focus:** hover blue plus a visible 2px focus ring with 2px offset for keyboard focus.
- **Momentary Pressed:** 1px visual depression with reduced outer shadow.
- **Command Pending:** stable dimensions, progress cue, and pending label; no confirmed-selected styling.
- **Selected / On:** selected blue, inset/chiseled shadow, fixed external dimensions, only after authoritative confirmation.
- **Failure / Result Unknown:** stable button geometry with adjacent plain-language result; status colors apply only to the actual result value.
- **Disabled:** disabled fill, readable label, no hover/pressed implication.

Security-sensitive controls retain INSTALL006 confirmation and command-lifecycle behavior. Visual styling never grants authority.

## 8. Governed media region

Customer media uses a 16:9 region unless a verified device requires another governed ratio. The media footprint remains stable when unavailable, stale, loading, or unsupported.

Unavailable media shows a neutral surface, clear icon/text state, last-known-time only when authoritative, and no fake image or LIVE indicator. Media does not resize the tile when its state changes.

## 9. Header, footer, and brand treatment

`WNY HOME SECURITY` uses a single-line wordmark where width permits. The default treatment must not oversize `WNY` above materially smaller second-line `HOME SECURITY`. Property identity is readable but visually subordinate to current status.

Header and footer use the shell surface, 1px boundary, restrained depth, and the same type/focus system. Footer actions use the single action family rather than loose icon/text fragments. Weather and date/time use neutral text roles unless an actual governed status value is present.

## 10. Theme parity and accessibility

Light, Dark, and Auto preserve layout, labels, component geometry, navigation, permissions, status meaning, actions, and customer/technician boundaries.

- Maintain WCAG-oriented readable contrast for text and controls.
- Status includes text and, where useful, icon support; never color alone.
- Focus remains visible in every theme and High Contrast context.
- Disabled and unavailable remain visually and textually distinct.
- Background images never sit behind critical text.
- Customer theme preference never exposes installer/service content.
- Seasonal or customer accents may alter decoration only; they cannot change semantic roles.
- Do not create duplicate dashboards merely for themes.

Honor reduced-motion preferences. Functional state changes do not require animation. When motion is used, keep it restrained, nonessential, and removable without information loss.

## 11. Deterministic implementation and acceptance

Deterministic HTML/browser approval output must implement these tokens directly or through an inspectable equivalent mapping. Hardcoded one-off colors, sizes, fonts, radii, status rules, or shadows outside the governed token system are prohibited.

The visual system is on-standard when Light/Dark/Auto parity, exact type and geometry tokens, gold identity, blue interaction, five exclusive status-value colors, tile anatomy, Status Value Field, one action family, 16:9 media footprint, brand treatment, focus, contrast, reduced-motion, and restrained depth all validate without duplicating functional or binding authority.
