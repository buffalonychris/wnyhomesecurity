# VISPARITY005 Image Parity and Asset Usage Register REV01

Task ID: VISPARITY005
Task Name: Image Parity and Asset Usage Register
Status: Image parity/register only
Customer-facing: No
Implementation authority: No
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## Boundary

This document is image parity/register only.

It records current image source inventory, current image references, role mapping, asset usage status, image parity concerns, and future task recommendations.

It makes no asset changes.
It makes no source/page/component/CSS/token changes.
It does not generate, rename, move, resize, replace, wire, approve, or delete image files.
It does not edit pages, routes, source components, CSS, tokens, sitemap, robots, runtime/API files, dependencies, package-lock, or protected-system files.
It does not activate hooks.
It does not activate QA checks.
It does not approve final image assets.
It does not create an Active KAOS Rule.

Protected systems remain out of scope:

- HubSpot / CRM
- Stripe/payment
- Scheduling/calendar
- Lead Signal and requestId
- QRLanding attribution/runtime behavior
- Resend/email runtime
- Cloudflare configuration
- Secrets and environment values

## Source Inputs

Primary VISPARITY inputs:

- `docs/design-system/visual-parity/VISPARITY001_PUBLIC_ROUTE_ELEMENT_DISCOVERY_REV01.md`
- `docs/design-system/visual-parity/VISPARITY002_PUBLIC_MARKETING_VISUAL_PARITY_TARGET_MATRIX_REV01.md`
- `docs/design-system/visual-parity/VISPARITY003_VISUAL_COMPONENT_NAMING_STANDARD_REV01.md`
- `docs/design-system/visual-parity/VISPARITY004_CSS_TOKEN_MAPPING_AND_GAP_REGISTER_REV01.md`

Image, brand, category, solution, QR, and public-funnel governance reviewed:

- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/brand_asset_authority_rev01.md`
- `docs/brand/print_assets/qr_placard_system_rev01.md`
- `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`
- `docs/design-system/IMG-CATEGORY001_WNYHS_CATEGORY_ASSET_PRODUCTION_STANDARD_REV01.md`
- `docs/design-system/IMG-CATEGORY002_WNYHS_CATEGORY_ASSET_MANIFEST_STANDARD_REV01.md`
- `docs/design-system/IMG-CATEGORY003_WNYHS_CATEGORY_ASSET_SOURCE_MANIFEST_REV01.md`
- `docs/design-system/IMG-CATEGORY004_HOME_SECURITY_ASSET_GENERATION_PLAN_REV01.md`
- `docs/governance/SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`

Read-only source evidence inspected:

- `public/images`
- `public/brand`
- `src/components`
- `src/pages`
- `src/content`
- `src/data`

## Image Source Inventory

### Asset folders found

| Folder | Current contents | Register status | Notes |
| --- | --- | --- | --- |
| `public/brand/crest-system/` | `CrestLogo.png`, `IconizedLogo.png` | Used / governed | Brand standard lists both as approved public-use assets. |
| `public/brand/heros/` | `HomePageHero.png` | Governed / usage uncertain | Approved by brand standard; current primary homepage source evidence uses `public/images/home-security/homepage/*` instead. |
| `public/brand/forprint/` | canonical print crest, QR files, campaign visuals | Used for print/campaign governance | Brand authority and QR placard system govern print and campaign QR usage. |
| `public/brand/print-assets/` | QR placard, flyer, and pole-mall-flyer source packages | Used for print system / not web-page parity target | This task does not change print assets. |
| `public/images/home-security/` | legacy Home Security image pack, responsive variants, `README.md`, `manifest.json` | Used / partial manifest | Manifest paths point to `/mnt/data/...`, so repo-local public URLs are not fully represented by the manifest. |
| `public/images/home-security/homepage/` | homepage category, package, solution, Core, logo, and icon images | Heavily used | Main current public marketing asset pool for homepage, categories, packages, SEO, and solution cards. |
| `public/images/home-security/solutions/` | four solution hero/sample pairs | Used | Referenced by route-backed solution pages, categories, package/solution listing, and SEO. |
| `public/images/category-pages/home-automation/` | Home Automation category-specific hero, reveal, dashboard, phone, routine, and solution thumbnail assets | Used / reference package | Only complete category-specific asset package found. |
| `public/images/solutions/` | general solution images for connected garage/workshop, front-door package protection, smart-home-security | Used | Referenced as solution/category card images. |
| `public/images/our-work/` | Our Work gallery images and `marker.txt` | Used | Gallery source data includes alt-text and proof/example copy. |
| `docs/ha-demo/assets/` | dashboard/demo day/night images | Unknown / review-only | Outside public marketing image parity unless a dashboard/demo task classifies them. |

### Image governance docs found

| Document | Governs | Current register use |
| --- | --- | --- |
| `brand_asset_standards_rev01.md` | approved brand and hero asset locations | Controls WNYHS Logo Mark and WNYHS Hero Image references. |
| `brand_asset_authority_rev01.md` | canonical brand, print, and QR asset authority | Controls print QR and crest authority; does not approve web asset changes here. |
| `qr_placard_system_rev01.md` | physical QR placard production | Controls QR campaign QR asset use; no QR changes in this task. |
| `CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md` | category image hierarchy and Home Automation reference | Primary standard for category image parity gaps. |
| `IMG-CATEGORY001` | category asset production rules | Defines production-quality requirements; not implementation authority. |
| `IMG-CATEGORY002` | category asset manifest standard | Defines required category asset classes and manifest fields. |
| `IMG-CATEGORY003` | planned category asset source manifest | Shows all non-Home-Automation category baseline assets are planned, not produced. |
| `IMG-CATEGORY004` | Home Security category asset generation plan | Plans future Home Security category images; does not create assets. |
| `SOLUTION_MEDIA001` | solution image roles and interaction expectations | Shows current route-backed solution pages have fewer images than the four-image production-ready ideal. |

### Image manifest docs found

| Manifest | Status | Parity note |
| --- | --- | --- |
| `public/images/home-security/manifest.json` | Existing but partial / stale candidate | It maps only the legacy Home Security image pack and uses `/mnt/data/...` source paths rather than current public URLs. |
| `public/images/home-security/README.md` | Existing image-pack README | Lists package card and Home Security section image bases only. It does not cover homepage, solution, category, Our Work, QR, or brand assets. |
| `IMG-CATEGORY002` | Manifest standard | Defines future field requirements, not current asset usage. |
| `IMG-CATEGORY003` | Planned category source manifest | Records 50 planned baseline category assets, all `PLANNED` and `NOT_STARTED`. |
| Current full public marketing image manifest | Missing | VISPARITY005-GAP-001 records the missing repo-wide image manifest. |

### Current source files that reference images

| Source file | Image evidence type | Page family/component |
| --- | --- | --- |
| `src/components/homeSecurity/HomeSecurityLanding.tsx` | homepage category, package, solution, Core, logo, and icon image references with alt text | Homepage / WNYHS Hero Image / Category Image / Solution Image / Core Panel Image / Logo Mark |
| `src/components/homeSecurity/WnyhsTopNav.tsx` | `IconizedLogo.png` decorative brand icon | WNYHS Top Navigation / WNYHS Icon Mark |
| `src/pages/CategoryLandingPage.tsx` | shared category image config for Home Security, Aging In Place, Home Safety, and Home Lighting | Canonical category pages / Category Image / Dashboard Preview Image / Core Panel Image |
| `src/pages/HomeAutomation.tsx` | full Home Automation asset package references with alt text | Category page reference implementation |
| `src/pages/SolutionOpportunity.tsx` | route-backed solution hero/sample image pairs with alt text | Solution pages / Solution Image / Solution Scenario Block |
| `src/content/wnyhsOfferCatalog.ts` | solution listing card image paths and `imageAlt` values | Packages / solution listing / category cross-links / Vault context |
| `src/pages/Packages.tsx` | public solution cards and WNYHS Core dashboard/phone/logo images | Packages review route / Core Panel / Vault and solution cards |
| `src/pages/QrLanding.tsx` | QR brand icon and QR hero image with alt text | QR Landing / QR Image / Icon Mark |
| `src/data/ourWorkGallery.ts` | gallery image paths and alt text | Our Work Gallery / Proof Image |
| `src/lib/seoPolicy.ts` | Open Graph/Twitter image metadata paths | SEO image references for public page families |
| `src/components/ResponsivePublicImage.tsx` | responsive `.webp` plus `.png` public image helper | Home Security legacy image pack consumers |
| `src/components/homeSecurity/PackageTierCards.tsx` | package tier card image object rendering | Package/tier block image rendering |
| `src/components/homeSecurity/LegacyHomeSecurityContent.tsx` and `PremiumHomeSecurityLanding.tsx` | legacy/review image references | Review-only WNYHS route family |

## Image Role Categories

| Image role category | Canonical VISPARITY003 component name | Minimum target expectation |
| --- | --- | --- |
| WNYHS Hero Image | WNYHS Hero Image | Primary page or campaign visual with route-family role, safe crop, and alt-text evidence. |
| WNYHS Category Image | WNYHS Category Image / WNYHS Category Image Block | Category hero, reveal, dashboard, mobile, routine, Core, or solution-thumbnail role. |
| WNYHS Solution Image | WNYHS Solution Image / WNYHS Solution Scenario Block | Route-backed or listing image mapped to solution hero, sample, scenario, card, outcome, hardware, or dashboard role. |
| WNYHS Proof Image | WNYHS Proof Image / WNYHS Our Work Gallery Block | Gallery/example image with safe proof posture, captions, and alt-text evidence. |
| WNYHS QR Image | WNYHS QR Image / WNYHS QR Campaign Block | QR campaign image, QR code, scan support visual, or campaign brand image with QR-specific restrictions. |
| WNYHS Logo Mark | WNYHS Logo Mark | Approved crest/logo asset used for identity moments. |
| WNYHS Icon Mark | WNYHS Icon Mark | Approved compact mark or icon-like brand asset used in nav/footer/cards/campaign surfaces. |
| WNYHS Dashboard Preview Image | WNYHS Dashboard Preview Block | Dashboard, phone, tablet, or app preview that must remain readable at rendered size. |
| WNYHS Core Panel Image | WNYHS Core Panel / WNYHS Dashboard Preview Block | Core dashboard/phone/logo image set supporting platform/foundation explanation. |
| WNYHS Vault Tile Image | WNYHS Vault Tile | Custom/project tile image role if present; current Vault evidence is mostly text and solution image reuse. |
| WNYHS Our Work Gallery Image | WNYHS Our Work Gallery Block / WNYHS Proof Image | Our Work image with gallery/category/story example context. |
| WNYHS Form/Support Illustration | WNYHS Form Shell / WNYHS Proof Image | Optional support/contact illustration role; no dedicated form/support illustration asset found. |

## Image Usage Register

Status values:

- `used`: referenced by current source or governance for an active public, review, campaign, or metadata surface.
- `unused candidate`: present in asset folders, not found in current inspected source references.
- `unknown`: present or governed, but current usage was not fully discoverable from targeted inspection.
- `duplicate candidate`: same visual or role appears in multiple folders/formats or repeated page roles.

### Brand and QR assets

| Asset path | Referenced by | Route/page family | Canonical component name | Image role | Current status | Style notes | Alt-text evidence | Parity concern | Follow-up task |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/brand/crest-system/IconizedLogo.png` | `WnyhsTopNav.tsx`, `QrLanding.tsx`; brand standards | Public nav, QR | WNYHS Icon Mark | WNYHS Icon Mark | used | Compact mark for nav/campaign. | Top nav uses empty decorative alt; QR uses `WNY Home Security`. | Alt role differs by context; likely acceptable but should be documented in full manifest. | VISPARITY006 |
| `/brand/crest-system/CrestLogo.png` | brand standards | Brand moments | WNYHS Logo Mark | WNYHS Logo Mark | unknown | Approved for larger brand moments. | Not found in targeted source references. | Approved but current web usage uncertain. | VISPARITY006 |
| `/brand/heros/HomePageHero.png` | brand standards | Homepage hero reference | WNYHS Hero Image | WNYHS Hero Image | unknown | Approved hero reference. | Not found in targeted current public page source references. | Brand-approved hero asset may be superseded or unused in current homepage implementation. | VISPARITY006 |
| `/brand/forprint/QR QRLANDING Home Page QR.png` | brand authority, QR placard system | Print/campaign | WNYHS QR Image | WNYHS QR Image | used in print governance | Canonical campaign QR; not a web-page image target. | Print asset, not source alt text. | QR web and print asset roles are split; must not be changed in visual parity work. | VISPARITY006 |
| `/brand/forprint/QR WNY Home Security Home Page QR.png` | brand authority | Print/business identity | WNYHS QR Image | WNYHS QR Image | used in print governance | Canonical main website QR. | Print asset, not source alt text. | Needs full asset manifest role separation from campaign QR. | VISPARITY006 |
| `/brand/forprint/wallpaper screensaver.png` | brand authority, QR placard system | Print identity | WNYHS Logo Mark | WNYHS Logo Mark | used in print governance | Canonical print/web identity per brand authority. | Not applicable from source alt. | File name has spaces; no rename authorized. | VISPARITY006 |

### Homepage, category, package, solution listing, and Core assets

| Asset path | Referenced by | Route/page family | Canonical component name | Image role | Current status | Style notes | Alt-text evidence | Parity concern | Follow-up task |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/images/home-security/homepage/category-home-security.png` | `HomeSecurityLanding.tsx`, `CategoryLandingPage.tsx`, `wnyhsOfferCatalog.ts`, `seoPolicy.ts` | Homepage, Home Security category, package/solution listing, SEO | WNYHS Category Image | WNYHS Category Image | used | Reused as category hero, reveal, listing card, SEO image, and Core phone substitute. | Multiple descriptive alt strings exist. | Heavy multi-role reuse; lacks category-specific baseline package from IMG-CATEGORY003. | VISPARITY006 |
| `/images/home-security/homepage/category-home-automation.png` | `HomeSecurityLanding.tsx`, `wnyhsOfferCatalog.ts`, `seoPolicy.ts` | Homepage/category card, listings, SEO | WNYHS Category Image | WNYHS Category Image | used | Used as card/listing/SEO image while Home Automation route uses separate category package. | Alt text references smart home dashboard/automation controls. | Split between homepage image and full category package may cause Home Automation parity ambiguity. | VISPARITY006 |
| `/images/home-security/homepage/category-environmental-safety.png` | `HomeSecurityLanding.tsx`, `CategoryLandingPage.tsx`, `wnyhsOfferCatalog.ts`, `seoPolicy.ts` | Home Safety category and listings | WNYHS Category Image | WNYHS Category Image | used | Reused as hero, reveal, Core phone, card, and SEO. | Alt text references utility/environmental safety awareness. | Missing Home Safety category-specific hero/dashboard/mobile/routine package. | VISPARITY006 |
| `/images/home-security/homepage/category-home-lighting.png` | `HomeSecurityLanding.tsx`, `CategoryLandingPage.tsx`, `wnyhsOfferCatalog.ts`, `seoPolicy.ts` | Home Lighting category and listings | WNYHS Category Image | WNYHS Category Image | used | Reused as hero, reveal, Core phone, card, and SEO. | Alt text references exterior lighting/arrival/outdoor visibility. | Missing Home Lighting category-specific package; routine slots reuse Home Automation thumbnails. | VISPARITY006 |
| `/images/home-security/homepage/category-aging-in-place.png` | `HomeSecurityLanding.tsx`, `CategoryLandingPage.tsx`, `wnyhsOfferCatalog.ts`, `seoPolicy.ts` | Aging In Place category and listings | WNYHS Category Image | WNYHS Category Image | used | Reused as hero, reveal, Core phone, card, and SEO. | Alt text references comfortable home/aging-in-place/family awareness. | Missing Aging In Place accessible dashboard/mobile/Core package required by IMG-CATEGORY002/003. | VISPARITY006 |
| `/images/home-security/homepage/WNYHSCoreDashboard.png` | `HomeSecurityLanding.tsx`, `CategoryLandingPage.tsx`, `Packages.tsx`, `seoPolicy.ts` | Homepage, categories, packages, SEO | WNYHS Dashboard Preview Image | WNYHS Core Panel Image | used | Shared dashboard proof asset across multiple page families. | Alt text references supported home systems / clean dashboard. | Generic Core dashboard reused for categories where category-specific Core images are planned but not produced. | VISPARITY006 |
| `/images/home-security/homepage/WNYHSCorePhone.png` | `HomeSecurityLanding.tsx`, `CategoryLandingPage.tsx`, `Packages.tsx`, `wnyhsOfferCatalog.ts`, `seoPolicy.ts` | Homepage, categories, packages, contact/support/QR SEO | WNYHS Dashboard Preview Image | WNYHS Core Panel Image | used | Shared phone proof asset. | Alt text references phone view / awareness notifications. | Used as SEO image for QR/contact/support and as listing image, so role is broad. | VISPARITY006 |
| `/images/home-security/homepage/core-logo-mark-on-black.png` | `HomeSecurityLanding.tsx`, `CategoryLandingPage.tsx`, `HomeAutomation.tsx`, `Packages.tsx` | Core panels | WNYHS Logo Mark | WNYHS Core Panel Image | used | Core logo support visual. | Alt text: `WNYHS Core logo mark`. | Role is clear, but logo mark authority should be connected to full manifest. | VISPARITY006 |
| `/images/home-security/homepage/core-logo-mark-on-white.png` | asset folder | Unknown | WNYHS Logo Mark | WNYHS Core Panel Image | unused candidate | White-background Core mark. | Not found in targeted source references. | Possible duplicate/variant candidate. | VISPARITY006 |
| `/images/home-security/homepage/package-property-awareness-showcase.png` | `HomeSecurityLanding.tsx` | Homepage package preview | WNYHS Package Tier Block | WNYHS Category Image / Package image | used | Package preview card image. | Alt text in homepage source. | Package image roles are mixed with category/solution roles. | VISPARITY006 |
| `/images/home-security/homepage/package-property-awareness.png` | asset folder | Homepage/package asset candidate | WNYHS Package Tier Block | WNYHS Category Image / Package image | unknown | Related to package showcase. | Not found in targeted current source references. | Possible unused/alternate candidate. | VISPARITY006 |
| `/images/home-security/homepage/package-basement-utility-protection.png` | `HomeSecurityLanding.tsx`, `CategoryLandingPage.tsx`, `wnyhsOfferCatalog.ts` | Homepage, Home Safety category, packages/listings | WNYHS Package Tier Block | WNYHS Category Image / Solution Image | used | Used for package and Home Safety solution slots. | Alt text references basement/utility awareness. | Multi-role reuse across package, category, and solution listing. | VISPARITY006 |
| `/images/home-security/homepage/package-family-confidence.png` | `HomeSecurityLanding.tsx`, `wnyhsOfferCatalog.ts` | Homepage package/listing | WNYHS Package Tier Block | WNYHS Category Image / Solution Image | used | Aging/family support package image. | Alt text references family confidence/home awareness. | Package role overlaps with aging-in-place solution needs. | VISPARITY006 |
| `/images/home-security/homepage/solution-package-protection.png` | `HomeSecurityLanding.tsx`, `CategoryLandingPage.tsx`, `wnyhsOfferCatalog.ts` | Homepage, Home Security category, packages/listings | WNYHS Solution Image | WNYHS Solution Image | used | Front-door/package visual. | Alt text references package awareness/front porch. | Reused as category routine/solution card; no dedicated Home Security routine package yet. | VISPARITY006 |
| `/images/home-security/homepage/solution-driveway-watch.png` | `HomeSecurityLanding.tsx`, `CategoryLandingPage.tsx`, `wnyhsOfferCatalog.ts` | Homepage, Home Security category | WNYHS Solution Image | WNYHS Solution Image | used | Driveway/garage scene. | Alt text references driveway awareness. | Current role is clear but not tied to planned category manifest. | VISPARITY006 |
| `/images/home-security/homepage/solution-water-damage-prevention.png` | `HomeSecurityLanding.tsx`, `CategoryLandingPage.tsx` | Homepage and Home Safety category | WNYHS Solution Image | WNYHS Solution Image | used | Water/safety image. | Alt text in category/homepage source. | Home Safety solution and proof images are reused from homepage assets. | VISPARITY006 |
| `/images/home-security/homepage/solution-sump-pump-awarenes.png` | `HomeSecurityLanding.tsx`, `CategoryLandingPage.tsx`, `wnyhsOfferCatalog.ts` | Homepage, Home Safety, packages/listings | WNYHS Solution Image | WNYHS Solution Image | used | Sump-pump awareness image. | Alt text references sump pump awareness. | Filename typo `awarenes`; no rename authorized. | VISPARITY006 |
| `/images/home-security/homepage/solution-family-awareness.png` | `HomeSecurityLanding.tsx`, `CategoryLandingPage.tsx` | Homepage and Aging In Place category | WNYHS Solution Image | WNYHS Solution Image | used | Family awareness scene. | Alt text in category/homepage source. | Multi-role reuse across family/aging category needs. | VISPARITY006 |
| `/images/home-security/homepage/solution-security-lighting.png` | `HomeSecurityLanding.tsx`, `CategoryLandingPage.tsx`, `wnyhsOfferCatalog.ts` | Homepage, Aging In Place, Home Lighting | WNYHS Solution Image | WNYHS Solution Image | used | Lighting/pathway visual. | Alt text references lighting/pathway. | Reused across lighting and aging support; category-specific lighting assets missing. | VISPARITY006 |
| `/images/home-security/homepage/icon-category-*.png` and `WNYHS_CATEGORY_ICON_SYSTEM_REFERENCE.png` | `HomeSecurityLanding.tsx`, asset folder | Homepage category explorer | WNYHS Icon Mark | WNYHS Icon Mark | used / reference | Category icon marks and icon reference. | `iconAlt` values exist in homepage source. | Icon system has no complete public image manifest. | VISPARITY006 |

### Home Automation category reference assets

| Asset path | Referenced by | Route/page family | Canonical component name | Image role | Current status | Style notes | Alt-text evidence | Parity concern | Follow-up task |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/images/category-pages/home-automation/homeautomationhero.png` | `HomeAutomation.tsx` | Home Automation category | WNYHS Hero Image / WNYHS Category Image | Category hero | used | Full reference hero. | Alt describes whole-home automation scene. | Naming differs from IMG-CATEGORY002 pattern `hero-home-automation.jpg`. | VISPARITY006 |
| `/images/category-pages/home-automation/neonimage.png` | `HomeAutomation.tsx` | Home Automation reveal | WNYHS Category Image | Reveal active image | used | Explainer/reveal image. | Alt describes highlighted opportunities. | Current name differs from future manifest naming. | VISPARITY006 |
| `/images/category-pages/home-automation/neonimagenoneon.png` | `HomeAutomation.tsx` | Home Automation reveal | WNYHS Category Image | Reveal base/decorative image | used | Base image hidden from assistive tech. | Empty alt and `aria-hidden=true`. | Good decorative-alt evidence; should be captured in full manifest. | VISPARITY006 |
| `/images/category-pages/home-automation/fullsizehomeautomationdashboard.png` | `HomeAutomation.tsx` | Home Automation proof/Core | WNYHS Dashboard Preview Image | Dashboard/Core image | used | Primary dashboard proof. | Alt describes dashboard showing rooms/routines. | Dashboard legibility should be checked at rendered sizes in later QA. | VISPARITY006 |
| `/images/category-pages/home-automation/cellphonedashhomeautomation.png` | `HomeAutomation.tsx` | Home Automation proof | WNYHS Dashboard Preview Image | Mobile dashboard image | used | Secondary phone proof. | Alt describes phone dashboard. | Good role evidence; should become manifest row. | VISPARITY006 |
| `/images/category-pages/home-automation/*-thumb.jpg` | `HomeAutomation.tsx`, `CategoryLandingPage.tsx` | Home Automation and reused Home Lighting routines | WNYHS Category Image | Routine thumbnail | used | Bright routine thumbnail set. | Alt text exists for each scene. | Reused by Home Lighting, causing cross-category parity gap. | VISPARITY006 |
| `/images/category-pages/home-automation/solution-*-thumb.jpg` | `HomeAutomation.tsx`, `CategoryLandingPage.tsx` | Home Automation featured solutions; Home Lighting evening scene | WNYHS Solution Image | Solution thumbnail | used | Solution thumbnail set. | Alt text exists. | Home Automation is complete; other categories lack equivalent solution thumbnail sets. | VISPARITY006 |
| `/images/category-pages/home-automation/goodmorningautomation.png`, `homearrivalscene.png`, `movienightscene.png`, `goodnightautomation.png`, `vacationmodehomeautomation.png`, `wholehomeautomation.png` | asset folder and partial source references | Home Automation scenario/reference | WNYHS Category Image | Scenario / source candidate | used / unknown | Larger scenario assets. | Some alt text exists where referenced. | Full use map should be in future manifest; not all are current page references. | VISPARITY006 |

### Route-backed solution assets

| Asset path | Referenced by | Route/page family | Canonical component name | Image role | Current status | Style notes | Alt-text evidence | Parity concern | Follow-up task |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/images/home-security/solutions/solutions-aging-hero.png` | `SolutionOpportunity.tsx`, `CategoryLandingPage.tsx`, `wnyhsOfferCatalog.ts`, `seoPolicy.ts` | Senior Safety solution, Aging category, SEO | WNYHS Solution Image | Solution hero / card image | used | Route-backed hero image. | Alt text exists in solution/category/listing contexts. | Current solution object has hero/sample pair, not four-image set from SOLUTION_MEDIA001. | VISPARITY006 |
| `/images/home-security/solutions/solutions-aging-sample.png` | `SolutionOpportunity.tsx` | Senior Safety solution | WNYHS Solution Scenario Block | Solution sample image | used | Example scenario/support image. | Alt text exists. | Role is sample, but no outcome/hardware/dashboard separation yet. | VISPARITY006 |
| `/images/home-security/solutions/solutions-water-hero.png` | `SolutionOpportunity.tsx`, `CategoryLandingPage.tsx`, `wnyhsOfferCatalog.ts`, `seoPolicy.ts` | Water Protection solution, Home Safety, SEO | WNYHS Solution Image | Solution hero/card image | used | Route-backed hero. | Alt text exists. | Reused as category featured image and SEO image. | VISPARITY006 |
| `/images/home-security/solutions/solutions-water-sample.png` | `SolutionOpportunity.tsx` | Water Protection solution | WNYHS Solution Scenario Block | Solution sample image | used | Example scenario/support image. | Alt text exists. | Missing solution outcome/hardware/dashboard role split. | VISPARITY006 |
| `/images/home-security/solutions/solutions-awareness-hero.png` | `SolutionOpportunity.tsx`, `wnyhsOfferCatalog.ts`, `seoPolicy.ts` | Family Awareness solution, listings, SEO | WNYHS Solution Image | Solution hero/card image | used | Route-backed hero. | Alt text exists. | Role reused across solution/listing/metadata. | VISPARITY006 |
| `/images/home-security/solutions/solutions-awareness-sample.png` | `SolutionOpportunity.tsx`, `CategoryLandingPage.tsx`, `wnyhsOfferCatalog.ts` | Family Awareness solution, Aging category dashboard/check-in card | WNYHS Solution Scenario Block / Dashboard Preview | Solution sample / dashboard-like candidate | used | Sample image reused as caregiver/check-in dashboard candidate. | Alt text exists. | Possible role ambiguity: sample image vs dashboard preview. | VISPARITY006 |
| `/images/home-security/solutions/solutions-vacation-hero.png` | `SolutionOpportunity.tsx`, `CategoryLandingPage.tsx`, `wnyhsOfferCatalog.ts`, `seoPolicy.ts` | Vacation Homes solution, categories, SEO | WNYHS Solution Image | Solution hero/card/routine image | used | Route-backed hero. | Alt text exists. | Multi-role use across Home Security and Home Automation category cards. | VISPARITY006 |
| `/images/home-security/solutions/solutions-vacation-sample.png` | `SolutionOpportunity.tsx` | Vacation Homes solution | WNYHS Solution Scenario Block | Solution sample image | used | Example scenario/support image. | Alt text exists. | Missing solution outcome/hardware/dashboard role split. | VISPARITY006 |
| `/images/solutions/front-door-package-protection.png` | `CategoryLandingPage.tsx`, `wnyhsOfferCatalog.ts` | Home Security category and packages/listings | WNYHS Solution Image | Solution card image | used | General solution image outside `home-security/solutions`. | Alt text exists. | Folder split between `/images/solutions` and `/images/home-security/solutions`. | VISPARITY006 |
| `/images/solutions/connected-garage-workshop.png` | `CategoryLandingPage.tsx`, `wnyhsOfferCatalog.ts` | Home Security category and listings | WNYHS Solution Image | Solution card image | used | General solution image. | Alt text exists. | Folder split and role naming should be reconciled in manifest. | VISPARITY006 |
| `/images/solutions/smart-home-security.png` | `CategoryLandingPage.tsx`, `wnyhsOfferCatalog.ts` | Home Security category/listing | WNYHS Solution Image | Solution card image | used | General solution image. | Alt text exists. | Could be route-backed later, but currently listing/card only. | VISPARITY006 |

### Our Work gallery assets

| Asset path group | Referenced by | Route/page family | Canonical component name | Image role | Current status | Style notes | Alt-text evidence | Parity concern | Follow-up task |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/images/our-work/*.png` | `src/data/ourWorkGallery.ts` | Our Work | WNYHS Our Work Gallery Block | WNYHS Proof Image | used | 17 gallery/example images with spaces in filenames. | Alt text exists for every gallery item in source data. | Gallery copy uses example/project concept posture; proof/story verification remains a governance gap. | VISPARITY006 |
| `/images/our-work/marker.txt` | asset folder only | Our Work folder marker | None | None | unused candidate | Non-image marker file. | Not applicable. | Should remain ignored by image parity except manifest inventory. | VISPARITY006 |

### Legacy Home Security image pack and responsive variants

| Asset path group | Referenced by | Route/page family | Canonical component name | Image role | Current status | Style notes | Alt-text evidence | Parity concern | Follow-up task |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/images/home-security/hs_hero_home-security.(png/webp/jpg)` | `ResponsivePublicImage` consumers and image pack README | Legacy/review Home Security surfaces | WNYHS Hero Image | Hero image | used / unknown by current route | Responsive variants. | Consumer-specific alt text. | Legacy pack manifest is not aligned to current homepage/category role map. | VISPARITY006 |
| `/images/home-security/hs_card_core-platform.*`, `hs_card_video-door-chime.*`, `hs_card_indoor-outdoor-coverage.*`, `hs_card_sensors-alerts.*` | README, package/legacy consumers | Package/card image roles | WNYHS Feature Card / Package Tier Block | Card image | used / unknown by current route | Multiple formats per base name. | Consumer-specific alt text if rendered through helper. | Possible duplicate candidates across `.png`, `.jpg`, `.webp`; format choice is implicit. | VISPARITY006 |
| `/images/home-security/hs_diagram_local-first-architecture.*`, `hs_graphic_typical-coverage-by-package.*`, `hs_badges_trust-grid.*` | README, quote/review pages, package/legacy candidates | Review/package/quote surfaces | WNYHS Proof Image / Package Tier Block | Diagram/graphic/badge image | used / review-only | Some are graphics/diagrams rather than photographs. | Consumer-specific alt text. | Review-only and quote surfaces should not be mixed with public marketing parity without a future scoped task. | VISPARITY006 |
| `/images/home-security/tier-*.png` and `/images/home-security/tier-*.webp` | asset folder, package tier rendering candidates | Package tier/review | WNYHS Package Tier Block | Package image | unknown | Multiple tier/format variants. | Package tier image object alt if referenced. | Potential duplicate/unused candidate group. | VISPARITY006 |
| `/images/home-security/hero-1024w.webp` | `QrLanding.tsx` | QR Landing | WNYHS QR Image / WNYHS Hero Image | QR hero image | used | QR-specific hero crop. | Alt: `Western New York home security and smart property installation`. | QR route uses legacy hero file rather than campaign-specific image package. | VISPARITY006 |
| `/images/home-security/hero-768w.*`, `hero-1024w.png`, `hero-1536w.*` | asset folder | QR/home-security responsive variants | WNYHS Hero Image | Hero responsive variants | unknown / duplicate candidate | Same hero family in multiple sizes/formats. | Only `hero-1024w.webp` found in QR source. | Variant usage lacks manifest mapping. | VISPARITY006 |

### Form/support illustrations and Vault tile images

| Asset path | Referenced by | Route/page family | Canonical component name | Image role | Current status | Style notes | Alt-text evidence | Parity concern | Follow-up task |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dedicated form/support illustration asset | Not found | Contact/support/search/forms | WNYHS Form Shell / WNYHS Form/Support Illustration | Form/Support Illustration | unknown / absent | Contact and Support appear form-first, not illustration-led. | Not applicable. | No dedicated form/support illustration standard; avoid adding images without future task. | VISPARITY006 |
| Dedicated Vault tile image asset | Not found | Packages / Vault | WNYHS Vault Tile | WNYHS Vault Tile Image | unknown / absent | Vault appears mostly text/card based in current evidence. | Not applicable. | If Vault becomes image-led, it needs a separate asset role and claim-safe image standard. | VISPARITY006 |

## Image Parity Standards Draft

These target expectations are drafts for future planning. They do not approve final implementation.

| Role | Visual style | Crop/aspect expectation | Subject matter expectation | Allowed variants | Forbidden variants | Alt-text expectation | Mobile readability | Text-overlay caution | Token/frame dependency |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WNYHS Hero Image | Calm, premium, realistic, local, bright enough | Wide crop or contained crop by page family; subject must stay safe | Residential or campaign context tied to page role | Homepage, category, solution, QR campaign | Fear-based, tactical, text-heavy, dark unreadable, generic tech art | Describes visible scene and purpose, not marketing keywords | Must preserve subject on mobile | Do not rely on image text | Needs image/frame, radius, border, shadow, and responsive aspect categories |
| WNYHS Category Image | Category-specific, consistent with CATEGORY003 | Role-specific: hero/reveal/dashboard/mobile/routine/card | Category hardware, dashboard, routine, or outcome context | Hero, reveal, dashboard, mobile, routine, solution thumbnail, Core | Cross-category filler, unreadable dashboard, unrelated lifestyle, unsupported claim implication | Alt names category context and visible role | Thumbnails recognizable at 150-220px; dashboards readable if shown | Avoid labels unless governed and readable | Needs category image frame/aspect/caption mapping |
| WNYHS Solution Image | Outcome-first, practical, illustrative | Hero/sample/card ratios by route and listing | Homeowner problem, scenario, hardware, or dashboard role | Hero, sample, scenario, outcome, hardware, dashboard, card | Manufacturer promise, exact configuration promise, emergency-service implication | Alt distinguishes illustrative/representative context | Supporting images must remain understandable at card/sample sizes | Avoid UI text as only meaning | Needs solution media role and frame mapping |
| WNYHS Proof Image | Honest, curated, example/proof-safe | Gallery ratios consistent by block | Work example, concept, or visual planning example | Gallery, proof, example, review-only | Fabricated proof, fake review, fake metric, misleading completed-work claim | Alt describes what is shown; captions carry source/proof status | Crops must not hide main subject | Captions should not sit over busy images unless verified readable | Needs proof/gallery frame and caption tokens |
| WNYHS QR Image | Scan-first, high-contrast, campaign-safe | Mobile-first crop; QR quiet zone preserved for QR codes | QR code, campaign brand image, or local scan context | Campaign QR, QR hero, print support visual | Busy background behind QR, compressed QR, multiple competing QRs | Web images need alt; print QR records need manifest notes | Must be scannable and readable at expected size | Avoid tiny text over campaign imagery | Needs campaign/QR frame, contrast, and quiet-zone rules |
| WNYHS Logo Mark | Approved brand asset only | Intrinsic/proportional; never stretched | WNYHS identity | Crest, compact icon, print primary crest | Recolored, distorted, alternate AI logo, unauthorized crop | Decorative when redundant; descriptive when sole brand signal | Must stay recognizable | No text overlay required | Needs logo size/spacing role tokens |
| WNYHS Icon Mark | Approved compact mark or category icon system | Small fixed role; no layout shift | Brand/category signal | Nav icon, footer icon, category icon | Random icons, unapproved badges, role-unclear marks | Empty alt only when decorative; descriptive when functional | Must remain legible at small sizes | Avoid icon text | Needs icon size/alignment role tokens |
| WNYHS Dashboard Preview Image | Realistic customer-facing UI, not dense | Contain if UI text matters | Dashboard/phone/app view for supported category/solution | Dashboard, phone, app preview, Core proof | Dense operator console, fake analytics wall, unreadable UI | Alt describes dashboard purpose; do not duplicate all UI text | UI must be readable or non-essential | Avoid making UI text the only source of meaning | Needs contain/cover decision and dashboard frame tokens |
| WNYHS Core Panel Image | Platform/foundation visual tied to category | Dashboard plus phone/logo hierarchy | Core as category-supporting platform | Homepage Core, category Core, package/review Core | Generic dashboard unrelated to category; official-affiliation implication | Alt describes Core image role | Dashboard/phone must remain readable | Avoid tiny text as critical content | Needs Core panel image hierarchy and frame tokens |
| WNYHS Vault Tile Image | Quote-reviewed custom idea visual only if used | Compact card-safe crop | Custom project or special-case context | Custom/Vault card, review-only idea | Unapproved hardware, price/BOM exposure, unsupported custom promise | Alt must clarify illustrative/custom scope | Must not crowd caveat text | Avoid image text and price labels | Needs Vault role if future image-led Vault cards are approved |
| WNYHS Our Work Gallery Image | Example/proof-safe, realistic, not overclaiming | Gallery grid ratio; subject preserved | Example work or planning concept | Featured, standard, concept, review-only | Fake customer proof, fabricated ratings, absolute outcome implication | Alt describes image content; captions describe example status | Subject must remain identifiable in cards | Avoid overlaid proof claims | Needs gallery ratio and caption token mapping |
| WNYHS Form/Support Illustration | Optional and quiet if ever used | Secondary, not form-dominant | Support/contact context only | Small support image, empty-state image | Decorative clutter, form-blocking image, unsupported support promise | Alt only if informative | Must not reduce form readability | Avoid text-over-image near forms | Needs form/shell frame dependency if introduced |

## Image Parity Gap Register

| Gap ID | Affected page family/component | Asset/reference evidence | Risk | Recommendation | Future task |
| --- | --- | --- | --- | --- | --- |
| VISPARITY005-GAP-001 | All public marketing image roles | No full current image manifest found; `public/images/home-security/manifest.json` is partial and source-path based | Future image tasks may miss used assets, alt-text evidence, duplicate candidates, or approval status. | Create a repo-local public marketing image manifest from VISPARITY005 evidence before asset replacement. | VISPARITY006 |
| VISPARITY005-GAP-002 | Asset folders / image source inventory | Multiple unused/unknown candidates in brand, Home Security image pack, hero variants, Core logo variants, and package/tier variants | Asset changes could accidentally remove a still-needed file or keep stale duplicates. | Treat unused candidates as review-only until a source-reference and build-output audit is performed. | VISPARITY006 |
| VISPARITY005-GAP-003 | Category pages / WNYHS Category Image | Home Automation has a full category package; Home Security, Home Safety, Home Lighting, and Aging In Place reuse homepage assets | Category parity may appear uneven across canonical category routes. | Use IMG-CATEGORY003/004 to plan future category packages without wiring assets in this task. | VISPARITY006 |
| VISPARITY005-GAP-004 | Category image crop/aspect ratios | Homepage/category assets, Home Automation assets, solution hero/sample images, Our Work images, QR hero variants use mixed dimensions and formats | Responsive crop, thumbnail recognition, and dashboard legibility may drift by page family. | Define role-specific aspect/crop/frame expectations before CSS or asset edits. | VISPARITY006 |
| VISPARITY005-GAP-005 | Image role mapping | Same images serve hero, reveal, listing, Core phone, SEO, package, and solution-card roles | An asset can be changed for one role and degrade another role. | Full manifest must record every role per asset and every source reference per role. | VISPARITY006 |
| VISPARITY005-GAP-006 | QR image divergence | `QrLanding.tsx` uses `/images/home-security/hero-1024w.webp`; print QR assets live under `/public/brand/forprint/` | QR visual work could mix web hero, print QR code, and campaign role boundaries. | Keep QR campaign assets separate from public category/solution image work; preserve QR source behavior. | VISPARITY006 |
| VISPARITY005-GAP-007 | Solution image parity | `SolutionOpportunity.tsx` has hero/sample pairs; SOLUTION_MEDIA001 expects hero, outcome, hardware example, and dashboard/app example for production-ready objects | Route-backed solution pages may not meet future solution-media readiness standard. | Record current two-image system as current state; plan media expansion only through future solution task. | VISPARITY006 |
| VISPARITY005-GAP-008 | Proof/gallery image parity | `ourWorkGallery.ts` has 17 images and alt text, but proof/story verification remains outside this task | Gallery can imply proof beyond verified source status if future copy/image work drifts. | Keep Our Work image captions source-safe and require proof/story governance before stronger claims. | VISPARITY006 |
| VISPARITY005-GAP-009 | Logo/icon usage consistency | `IconizedLogo.png`, `CrestLogo.png`, print crest, Core logo marks, category icons, and `HomePageHero.png` exist in different folders | Brand, icon, Core, and category marks may be mixed without role authority. | Add logo/icon role rows to a future image manifest; preserve brand authority. | VISPARITY006 |
| VISPARITY005-GAP-010 | Image alt-text gaps and inconsistencies | Source evidence has many alt strings; decorative handling differs between top nav, QR, reveal base, and Core logo | Inconsistent decorative/informative treatment may affect accessibility. | Future compliance plan should include image alt-text decision rules by role. | VISPARITY006 |
| VISPARITY005-GAP-011 | Text-over-image readability risk | Hero, reveal, dashboard, QR, and gallery assets include UI/detail or may sit near captions/overlays | Important information could become unreadable at mobile sizes. | Prefer no text overlay; contain dashboard/UI images where text matters; QA rendered sizes later. | VISPARITY006 |
| VISPARITY005-GAP-012 | Core/Vault/dashboard image consistency | Core dashboard/phone/logo assets are reused across homepage, categories, packages, SEO; Vault has no dedicated image role found | Core proof may feel generic by category; Vault image requirements are not defined. | Separate Core image manifest roles from category-specific Core assets and document Vault as image-absent for now. | VISPARITY006 |
| VISPARITY005-GAP-013 | SEO image role mapping | `seoPolicy.ts` references category, solution, Core dashboard, and phone assets as Open Graph/Twitter images | SEO images may not match the visual role of the rendered page. | Future compliance plan should map SEO image selection to page-family image role. | VISPARITY006 |
| VISPARITY005-GAP-014 | File naming and path consistency | Home Automation names, typo `solution-sump-pump-awarenes.png`, Our Work filenames with spaces, split `/images/solutions` and `/images/home-security/solutions` folders | Manual errors and inconsistent future references become more likely. | Do not rename now; record naming issues and require future migration plan if renaming is approved. | VISPARITY006 |

## Future Task Recommendation

Recommended next task:

`VISPARITY006 - Public Marketing Page Compliance Plan`

VISPARITY006 should convert VISPARITY001 through VISPARITY005 into a page-family compliance plan that maps canonical route families, visual components, tokens, image roles, alt-text posture, image parity gaps, and validation expectations without changing source, CSS, tokens, routes, assets, hooks, or QA implementation unless a future bounded task explicitly authorizes implementation.

## Scope Compliance

VISPARITY005 creates the image parity and asset usage register only.

It includes:

- Boundary
- Image source inventory
- Image usage register
- Image role categories
- Image parity standards draft
- Image parity gap register
- Future task recommendation for `VISPARITY006 - Public Marketing Page Compliance Plan`

It does not:

- edit source code
- edit route files
- edit CSS
- edit tokens
- edit UI components
- edit images or assets
- rename images
- move images
- edit sitemap or robots
- edit runtime/API files
- edit HubSpot behavior
- edit Stripe/payment behavior
- edit scheduling
- edit Cloudflare config
- edit dependencies or package-lock
- create Playwright tests
- create hooks
- create QA checks
- approve final image assets
- activate any KAOS rule
- merge
