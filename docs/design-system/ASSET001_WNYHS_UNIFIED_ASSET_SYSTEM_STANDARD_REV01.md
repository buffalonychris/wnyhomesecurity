# ASSET001 — WNYHS Unified Asset System Standard — REV01

**Status:** PROPOSED CANONICAL STANDARD — OPERATOR APPROVAL REQUIRED BEFORE IMPLEMENTATION  
**Primary Owner:** WNYHS Visual / Brand Asset System  
**Applies To:** Dashboard, website, contracts/documents, proposals, social media, merchandise, print, signage, presentations, and future WNYHS visual channels  
**Controlling Principle:** One brand system, multiple governed output profiles

## 1. Purpose

This standard establishes one reusable WNY Home Security asset system so visual identity is recognizable and consistent regardless of where an asset is published.

The system is intentionally broader than dashboard icons.

It governs a shared core plus channel-specific production profiles:

1. Core Brand System
2. Digital UI / Dashboard System
3. Website / Marketing Digital System
4. Document / Contract System
5. Social Media System
6. Merchandise / Physical Print System
7. Future Channels

Future work extends these profiles. It does not redesign the core system.

## 2. Relationship to Existing Authority

This standard consumes, and does not silently replace, existing canonical owners.

- `DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` remains the owner of dashboard colors, typography, component geometry, semantic status roles, Light/Dark behavior, and dashboard presentation.
- `brand_asset_standards_rev01.md` remains the owner of existing locked public brand assets and their approved usage.
- Existing approved WNYHS logo/crest/hero assets must not be redrawn, renamed, moved, recolored, traced, or replaced without separate authorization.

ASSET001 owns reusable asset production grammar, cross-channel consistency, file structure, naming, export, metadata, validation, and future extension rules.

## 3. Core System vs Output Profiles

The WNYHS asset system has two levels.

### 3.1 Core system

The core is shared everywhere:

- approved WNYHS identity assets;
- approved core colors and semantic roles;
- typography families and hierarchy;
- naming conventions;
- asset IDs;
- transparency rules;
- background rules;
- source-of-truth rules;
- versioning;
- metadata;
- file structure;
- asset reuse rules;
- prohibited redesign behavior;
- validation requirements.

### 3.2 Output profiles

Each publication channel may impose different technical constraints without changing the brand.

Examples:

- A dashboard icon may use a 24×24 SVG grid.
- A website hero may use a responsive raster/vector composition.
- A contract may require PDF-safe vector branding and print-safe margins.
- A social post may use 1:1, 4:5, 9:16, or 16:9 compositions.
- Merchandise may require vector art, transparent backgrounds, minimum line weight, spot-color or approved print-color mappings, bleed, and production-safe separations.

A channel profile adapts the core. It does not invent a new brand.

## 4. Canonical Digital Color Roles

Current approved dashboard/digital roles remain:

### Identity and interaction

| Role | Token | Value |
| --- | --- | --- |
| WNYHS Gold | `--wnyhs-gold` | `#D4AF37` |
| Action Blue | `--action-blue` | `#0A84FF` |
| Action Hover | `--action-blue-hover` | `#0876E4` |
| Action Selected | `--action-blue-selected` | `#075EBA` |
| Action Disabled | `--action-blue-disabled` | `#64748B` |

### Semantic status roles

| Meaning | Token | Value |
| --- | --- | --- |
| Normal / Good | `--status-normal` | `#22C55E` |
| Active | `--status-active` | `#0A84FF` |
| Attention | `--status-attention` | `#F5A524` |
| Alert | `--status-alert` | `#EF4444` |
| Unavailable / Unknown | `--status-unavailable` | `#94A3B8` |

### Light / dark surfaces

| Role | Light | Dark |
| --- | --- | --- |
| Page background | `#F4F7FB` | `#08111F` |
| Shell / header / footer | `#FFFFFF` | `#0D1726` |
| Tile / content surface | `#FFFFFF` | `#111D2E` |
| Recessed field | `#E8EEF6` | `#091321` |
| Primary text | `#172033` | `#F8FAFC` |
| Muted text | `#5F6B7A` | `#A8B3C2` |
| Border / divider | `#CDD6E3` | `#314056` |
| Focus | `#0A84FF` | `#5CB3FF` |

These roles are not automatically equivalent to print-process colors.

## 5. Print Color Mapping Rule

Do not guess CMYK, Pantone, embroidery-thread, vinyl, paint, or screen-print ink equivalents from an RGB/HEX value and call them canonical.

Print and fabrication profiles must maintain approved mappings after proofing for the relevant production method.

The system must support a future mapping record such as:

`assets/wnyhs/core/color-production-map.json`

Each mapping identifies:

- digital source color;
- intended visual role;
- output process;
- approved production color specification;
- proof date;
- vendor/process if process-specific;
- approval evidence.

Until approved, the digital value remains authoritative for digital use and the physical-process mapping remains `UNRESOLVED — PROOF REQUIRED`.

## 6. Typography

Approved customer/interface typefaces remain:

- Inter — default
- Atkinson Hyperlegible — easy-read/accessibility option
- System — platform fallback

Canonical stacks:

- `Inter, Arial, sans-serif`
- `"Atkinson Hyperlegible", Arial, sans-serif`
- `system-ui, -apple-system, "Segoe UI", Arial, sans-serif`

Typography in contracts, social graphics, merchandise, and marketing must use an explicitly approved WNYHS typography profile. Do not introduce a new font simply because a template, print vendor, or generator suggests one.

Do not embed/distribute font files unless licensing and repository policy explicitly permit it.

## 7. Canonical Repository Structure

Use:

```text
assets/
└── wnyhs/
    ├── manifest.json
    ├── core/
    │   ├── brand/
    │   ├── colors/
    │   └── shared/
    ├── digital/
    │   ├── icons/
    │   ├── placeholders/
    │   └── illustrations/
    ├── website/
    │   ├── icons/
    │   ├── graphics/
    │   └── media/
    ├── documents/
    │   ├── headers/
    │   ├── footers/
    │   ├── marks/
    │   └── templates/
    ├── social/
    │   ├── templates/
    │   ├── overlays/
    │   └── exports/
    ├── merch/
    │   ├── masters/
    │   ├── production/
    │   └── mockups/
    └── validation/
```

Do not create `misc`, `final`, `new`, `v2`, `other`, or customer-specific duplicate asset libraries.

## 8. Source-of-Truth Rule

Every asset class has one editable canonical master.

Preferred master formats:

- simple icons/marks/line illustrations: SVG;
- scalable vector artwork: SVG or another explicitly approved vector source;
- photography: highest-quality approved original;
- complex raster artwork: lossless master at governed dimensions/resolution;
- document templates: governed editable template plus validated PDF export;
- social templates: governed master template plus platform exports;
- merchandise: vector master whenever production method permits.

PNG/JPEG/WebP/PDF outputs are derivatives unless explicitly designated otherwise.

Never edit a derivative and treat it as the new master.

## 9. Transparency and Background Rules

Reusable marks, icons, overlays, merchandise masters, and compositing graphics default to a transparent background unless the asset class explicitly requires a background.

Transparent assets:

- contain no baked white/black canvas;
- contain no accidental matte/halo;
- contain no checkerboard pattern in the exported asset;
- contain no decorative background unless the background is part of the actual approved design.

Background-dependent compositions must explicitly declare:

- background role;
- exact token/color/image source;
- Light/Dark behavior where applicable;
- whether the background is structural or removable.

Preview checkerboards are validation UI only and are never exported inside the canonical asset.

## 10. Digital UI Icon Grammar

Normal reusable interface icons use:

- SVG
- `viewBox="0 0 24 24"`
- source width/height 24
- 2-unit safe area on each edge
- target artwork envelope 20×20
- maximum optical adjustment ±0.5 unit
- `fill="none"`
- `stroke="currentColor"`
- `stroke-width="1.8"`
- `stroke-linecap="round"`
- `stroke-linejoin="round"`
- transparent canvas
- no embedded background
- no hardcoded color
- no embedded text
- no filters/gradients/glows/scripts/external resources

Render size is controlled by the consumer, not by duplicate asset files.

For current dashboard tile icons:

- Compact: 20px
- Default: 22px
- Large: 24px

Container sizes remain governed by DESIGN001:

- Compact: 40px
- Default: 44px
- Large: 48px

## 11. Placeholder / Empty-State Grammar

Large digital placeholder illustrations use:

- SVG
- `viewBox="0 0 64 64"`
- source width/height 64
- 8-unit safe area
- target artwork envelope 48×48
- stroke width 2.5
- round caps/joins
- default internal geometric radius 4 units
- `currentColor`
- transparent background
- no text
- no fake content
- no fake LIVE indicators

## 12. Website Profile

Website assets use the same WNYHS core identity and reuse digital icons wherever semantics match.

Website-specific rules:

- do not redraw existing icons merely for the website;
- responsive assets require explicit aspect-ratio and crop-safe-area definitions;
- hero/media assets must define desktop/mobile crop behavior;
- transparency must be intentional;
- raster exports use modern web formats where supported, with fallback only when required;
- do not introduce external icon libraries to bypass the canonical library;
- SEO/accessibility metadata belongs to implementation, not baked image text;
- critical copy should remain HTML when practical rather than rasterized into an image.

## 13. Document / Contract Profile

Contracts, proposals, invoices, handoff documents, and customer PDFs use the same approved WNYHS identity.

Required:

- approved logo/mark only;
- governed typography;
- governed header/footer layout;
- printable margins;
- vector logo use where possible;
- no low-resolution logo screenshots;
- no decorative watermark that harms legibility;
- text remains real document text where practical;
- monochrome/grayscale fallbacks must be intentionally approved rather than browser/printer accidents;
- generated PDFs must preserve readable contrast and brand placement.

Any legal/contract wording remains owned by the applicable copy/legal authority, not ASSET001.

## 14. Social Media Profile

Social media uses the same brand system, not a separate social brand.

Templates may define platform canvases such as:

- 1:1
- 4:5
- 9:16
- 16:9

Each template must define:

- canvas dimensions;
- safe area;
- logo/identity clear space;
- text-safe area;
- image crop-safe region;
- minimum readable type;
- background role;
- export format;
- maximum/minimum asset scaling where relevant.

Do not redesign the logo, palette, icon family, or typography for each platform.

## 15. Merchandise / Physical Production Profile

Merchandise uses the same identity but has production-specific constraints.

Canonical merchandise masters should:

- prefer vector artwork;
- use transparent backgrounds unless background is intentionally part of the design;
- preserve approved brand proportions;
- define production dimensions;
- define minimum line/stroke width appropriate to the fabrication method;
- define spot/process color mappings only after approval/proof;
- separate printable art from mockups;
- never use a mockup as production art;
- maintain bleed/safe-area requirements where applicable;
- include production notes for screen print, DTG/DTF, embroidery, sublimation, vinyl, engraving, routing, or other approved process.

Production-process constraints may alter technical execution but may not silently alter brand identity.

## 16. Naming Convention

Canonical filenames use lowercase kebab-case.

Examples:

- `home.svg`
- `main-entrance.svg`
- `wnyhs-social-4x5-template.svg`
- `contract-header-primary.svg`

Do not encode temporary production chatter into canonical filenames.

Prohibited examples:

- `final.svg`
- `final-final.svg`
- `new-logo.png`
- `home-v2.svg`
- `home-gold.svg`
- `home-dark.svg`

Revision belongs in the manifest/history, not arbitrary filenames.

## 17. Manifest

Create one cross-channel manifest:

`assets/wnyhs/manifest.json`

Every canonical asset entry records:

- asset ID;
- file path;
- asset class;
- channel/profile;
- semantic purpose;
- source/master format;
- dimensions/viewBox;
- transparency/background behavior;
- color behavior;
- theme behavior;
- revision;
- derivative/export relationships;
- approval state;
- notes/limitations.

The manifest is the first place future agents check before creating a new asset.

## 18. Reuse Before Creation

Before creating any new WNYHS asset:

1. search the manifest by semantic purpose;
2. inspect existing asset class/profile;
3. reuse an existing canonical asset if it already satisfies the need;
4. create a new asset only when the semantic requirement is genuinely new.

Do not create channel-specific duplicates solely to change styling.

## 19. Future Asset Extension Contract

A normal future asset addition may:

- add a new asset using an existing class;
- add a manifest record;
- add required channel derivative/export;
- update the deterministic preview/contact sheet;
- run validation.

A normal future addition may NOT change:

- core palette;
- core typography;
- naming convention;
- source-of-truth model;
- transparency model;
- folder taxonomy;
- icon viewBox;
- icon safe area;
- icon stroke width;
- icon line-cap/join grammar;
- theme model;
- print-mapping policy;
- channel-profile architecture.

Changing one of those is an **ASSET SYSTEM REDESIGN** and requires explicit operator approval.

Difficulty creating a new asset is not authorization to redesign the system.

## 20. Asset Classes May Differ Without Brand Drift

Consistency does not mean forcing every visual into one geometry.

The 24×24 icon grid applies to UI icons.

It does NOT apply to:

- hero images;
- social compositions;
- document headers;
- large illustrations;
- merchandise graphics;
- photography;
- signage layouts.

Those classes use their governed channel profile while sharing the same core identity, palette roles, typography policy, naming, manifest, approval, and source-of-truth system.

## 21. Validation Principles

Every future asset task validates, as applicable:

- manifest coverage;
- naming;
- source/master relationship;
- duplicate semantic purpose;
- dimensions/viewBox;
- safe area;
- transparency;
- background behavior;
- hardcoded colors;
- Light/Dark behavior;
- typography/font usage;
- external dependencies;
- raster resolution;
- print/physical production mapping;
- accessibility/contrast where applicable;
- export dimensions;
- no accidental customer/vendor-specific duplicate;
- no protected existing brand asset modification.

## 22. Brand Recognition Goal

The system is successful when a customer can encounter WNY Home Security across:

- dashboard;
- website;
- proposal;
- contract;
- social media;
- merchandise;
- signage;
- printed handoff;
- future digital products

and recognize one coherent WNYHS visual identity rather than a collection of unrelated designs.

Cross-channel consistency is a brand requirement, not a decorative preference.
