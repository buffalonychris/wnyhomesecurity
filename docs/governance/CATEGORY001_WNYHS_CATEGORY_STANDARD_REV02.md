# CATEGORY001 WNYHS Category Standard REV02

Status: Active category owner standard

Owner: WNY Home Security

Document type: Category governance standard

Controlling task: `T-CATEGORYRECON001`

Controlling context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`

## 1. Authority and supersession

This document supersedes `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md` for current category identity, naming, ordering, boundaries, and relationship rules. REV01 remains historical lineage.

This standard is subordinate to repository governance, the current operational context, the Master Task Register, and active bounded work orders. It does not authorize source, route, navigation, SEO, search, sitemap, redirect, funnel, runtime, or protected-system changes by itself.

`docs/governance/CATEGORY002_WNYHS_CATEGORY_LANDING_PAGE_STRUCTURE_REV01.md` continues to own category-page presentation structure. This standard owns category identity and relationships.

## 2. Category definition

A Category is a broad, customer-facing discovery path organized around a recognizable property or household concern. A Category may reference Packages and Solutions, but it is not a product line, hardware family, technical system, or exclusive ownership container.

The public discovery relationship remains:

```text
Homepage
-> Category
-> Solution
-> Estimate / Contact
```

Packages may provide contextual buying paths without replacing Categories or Solutions as public discovery objects.

## 3. Canonical public categories and order

The exact canonical public category order is:

1. Home Security
2. Aging in Place
3. Home Safety
4. Home Automation
5. Home Lighting
6. Property Management

Customer-facing category lists, when changed through a separately authorized implementation task, must use these labels and this order. A subset may be shown only when the surface has a documented reason not to present the complete category set.

## 4. Category purposes and boundaries

### 4.1 Home Security

Purpose: organize entry, access, package, driveway, garage, camera, and away-property awareness around customer concerns.

Boundary: security-related Solutions may overlap Home Automation, Home Lighting, Aging in Place, or Property Management. The category does not imply a third-party response service or a universal outcome.

### 4.2 Aging in Place

Purpose: organize non-medical household support, accessible control, pathway visibility, consent-aware activity awareness, trusted access, and family check-in concepts that support independence.

Boundary: this category is not medical care, clinical assessment, or an emergency service. Privacy, consent, supportability, and household expectations constrain every related Solution.

### 4.3 Home Safety

Purpose: organize water, temperature, freeze, sump, utility-area, air-quality, equipment-condition, and related household awareness concerns.

Boundary: `Home Safety` is the only canonical public category label. Related Solutions provide awareness and practical information subject to equipment and site conditions.

### 4.4 Home Automation

Purpose: organize supported routines, scenes, dashboards, modes, and coordinated controls that simplify everyday property use.

Boundary: automation is not a catch-all owner for every connected device. A Solution remains primarily owned by the customer outcome it serves, with Home Automation used as a primary or secondary category when coordinated behavior is material.

### 4.5 Home Lighting

Purpose: organize pathway, arrival, exterior, scene, vacation, accessibility, and everyday lighting outcomes.

Boundary: lighting work remains subject to site review, electrical scope, compatible controls, and supportability. Lighting Solutions may also support Home Security, Aging in Place, Home Automation, or Property Management.

### 4.6 Property Management

Purpose: organize practical awareness and coordinated control for second homes, seasonal properties, outbuildings, shared or managed properties, property infrastructure, and recurring property-care concerns.

Boundary: this is a WNYHS discovery category, not a property-management service, tenancy platform, access-policy system, or substitute for human property oversight. Customer roles, permission models, privacy, recordkeeping, and operational responsibility require separate owner decisions before any implementation that depends on them.

Property Management may include appropriately approved Solutions involving:

- remote property status and seasonal-property awareness;
- detached garage, shop, shed, gate, or outbuilding awareness;
- water, temperature, power, network, or equipment-condition visibility;
- reviewed access coordination and property-arrival routines;
- irrigation, exterior, lighting, or infrastructure concepts when their approval status supports public visibility.

## 5. Solution ownership and overlap

Solutions remain the authoritative reusable content objects. Every approved Solution should define:

- one Primary Category;
- zero or more Secondary Categories;
- public visibility status under the current offering and claims owners;
- a canonical Solution record or destination when one exists.

Primary Category identifies the clearest customer problem and controls default organization. Secondary Categories support discovery where the Solution materially serves another concern. Cross-category reuse is allowed; duplicate Solution objects are not.

Examples of legitimate overlap include:

- water awareness: Primary Home Safety; Secondary Property Management when used for a remote or seasonal property;
- pathway lighting: Primary Home Lighting or Aging in Place according to the approved Solution record; the other may be secondary;
- detached-building awareness: Primary Property Management; Secondary Home Security when entry or camera awareness is material;
- arrival routines: Primary Home Automation; Secondary Home Lighting or Home Security as appropriate.

These examples are classification guidance, not automatic approval of a Solution or public offer.

## 6. Duplicate-prevention rules

Do not create separate category, catalog, route, marketing, or Solution systems for Property Management or any other category.

Apply these rules:

1. Reuse the canonical Solution object across category references.
2. Keep one canonical public route per Category and per route-backed Solution.
3. Treat alternate phrases as aliases or search terms, not new Categories.
4. Do not duplicate a Solution to change its category placement.
5. Do not create category-specific copies of catalog, pricing, hardware, or business-rule records.
6. Route future marketing to the governed Category or Solution destination rather than a parallel sales path.

## 7. Customer-facing naming

Use these exact public labels:

- `Home Security`
- `Aging in Place`
- `Home Safety`
- `Home Automation`
- `Home Lighting`
- `Property Management`

Do not use `Aging-In-Place`, `Aging In Place`, `Environmental Safety`, or combined labels such as `Home Safety / Environmental Safety` as the canonical public category name on newly changed surfaces.

Legacy public copy may remain until a bounded implementation task updates the exact surface. Historical documents remain unchanged unless a task explicitly authorizes an additive successor note.

## 8. Internal aliases and classifications

`Environmental Safety` is not a seventh public category. It may be retained only as:

- an internal classification under Home Safety;
- a historical label in lineage documents;
- an SEO-supporting phrase or search synonym that resolves to Home Safety;
- documented alias language that points to the canonical Home Safety route.

Internal identifiers such as `environmental-safety` may remain temporarily where changing them would affect current source relationships. A future bounded implementation must map them to public label `Home Safety` and must not expose them as a separate public category.

## 9. Public marketing rules

Public marketing must:

- use the six-category model without creating an alternate taxonomy;
- lead with customer concerns and outcomes rather than hardware;
- route category messaging to the canonical category destination when that destination is implemented and approved;
- reuse approved Solution records and their visibility status;
- preserve claims, funnel, attribution, lead-intake, and protected-system boundaries;
- distinguish a Category from a service contract, fixed package, or operational commitment.

Property Management marketing must not imply that WNYHS assumes landlord, tenant, caretaker, access-administration, or property-operations responsibility.

## 10. SEO-supporting terminology

SEO and search may use validated customer-language synonyms without changing the canonical public taxonomy.

Permitted supporting relationships include:

- `environmental safety`, `water awareness`, `freeze awareness`, and `utility-area awareness` -> Home Safety;
- `senior safety`, `older-adult support`, and `family awareness` -> Aging in Place when consistent with the approved Solution;
- `seasonal property`, `second home`, `remote property`, `outbuilding`, and `property care` -> Property Management when content and route approval exist.

Supporting terms must resolve to a canonical Category or approved Solution. They must not create duplicate indexable category pages.

## 11. Category metadata requirements

Every implemented Category should define:

- canonical label and slug;
- short and long descriptions;
- purpose and boundary statement;
- who-it-helps summary and common situations;
- Primary and Secondary Solution relationships;
- featured and related Solutions;
- adjacent Categories;
- primary CTA;
- search terms and synonyms;
- homepage, navigation, footer, QR, SEO, sitemap, and search eligibility;
- image and accessibility requirements under the current visual owners.

Metadata fields do not authorize public visibility or implementation by themselves.

## 12. Homepage, category-page, and Solution relationships

The homepage should present Categories before Packages and Solutions. Category pages should follow CATEGORY002 and link to approved related Solutions. Solution pages remain first-class, reusable destinations and may show Primary and Secondary Category relationships without duplicating content.

Property Management occupies position six whenever the complete category list is implemented. Its addition must use the existing homepage explorer, category-page system, navigation/footer system, SEO/search system, and Solution ownership model.

## 13. Future category-change governance

Any future change to category labels, order, count, identity, or canonical route requires:

1. an operator-approved decision;
2. an ACTIVE bounded task and work order;
3. review of Category, Site Architecture, Solution, SEO, Search, Public Content, and affected marketing owners;
4. explicit alias, redirect, sitemap, canonical, and search decisions;
5. protected funnel/runtime review;
6. validation and a draft PR without automatic merge.

No category change may silently emerge from a page, campaign, catalog, or source-code task.

## 14. Implementation boundary and traceability

This REV02 standard records the reconciliation authorized by `T-CATEGORYRECON001`. The route and source implementation inventory is in `docs/site-architecture/SITEARCH005_WNYHS_SIX_CATEGORY_RECONCILIATION_DECISION_REV01.md`.

This task does not implement the sixth route or page, change existing category labels in source, alter Solution records, or modify any protected system. Those changes remain deferred to separately authorized implementation work after this reconciliation is merged and synchronized.
