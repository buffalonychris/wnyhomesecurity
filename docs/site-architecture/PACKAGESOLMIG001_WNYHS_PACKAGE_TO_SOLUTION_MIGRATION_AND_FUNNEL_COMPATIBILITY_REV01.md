# W. N. Y. Home Security Package-to-Solution Migration and Funnel Compatibility Authority REV01

## 1. Document control

- **Task ID:** PACKAGESOLMIG001
- **Status:** ACTIVE ON MERGE
- **Revision:** REV01
- **Date:** 2026-07-27
- **Owner:** Package System / Site Architecture / Funnel Compatibility
- **Selected migration model:** Compatibility-layer migration
- **Implementation authority:** None
- **Runtime authority:** None
- **Merge authority:** None
- **Deployment authority:** None

## 2. Purpose

This document is the controlling planning authority for moving the replacement website from package-first public language to solution-first public language without breaking the existing sales funnel or its protected identifiers.

It determines:

- what future public surfaces may describe as solutions;
- which legacy package identifiers must remain stable;
- where a compatibility mapping is required;
- the correct current destination for `Request a Property Assessment`;
- the route, pricing, SEO, transaction, CRM, analytics, attribution, QR, and scheduling protections required by later tasks; and
- the bounded handoff that HOMEIMPL001 may follow.

This document does not change production.

## 3. Authority and relationship to existing owners

This authority is subordinate to:

- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/business/WNYHS_BUSINESS_BIBLE_REV01.md`
- `docs/solution-system/CLAIMS001_WNYHS_UNIFIED_CLAIMS_GUARDRAIL_ADDENDUM_REV01.md`

It preserves:

- HOMEAUTH001;
- UXAUTH001;
- VISREF001;
- NAVIA001;
- COPYAUTH001;
- HOMEHERO001;
- the Package, Solution, Offering, and Package BOM owners;
- the public-funnel and funnel-context contracts;
- the protected runtime, request-ID, Stripe, payment, CRM, scheduling, analytics, attribution, and QR owners.

Where a dedicated owner controls a detailed fact or runtime behavior, that owner continues to control. PACKAGESOLMIG001 supplies terminology and compatibility policy only.

## 4. Scope and non-effects

PACKAGESOLMIG001:

- audits current repository evidence;
- classifies material package-related dependencies;
- selects a migration model;
- defines future public terminology boundaries;
- defines compatibility requirements;
- recommends a staged migration;
- supplies a concise HOMEIMPL001 handoff.

PACKAGESOLMIG001 does not:

- rewrite public copy;
- rename or remove a route;
- change an internal ID, form field, API payload, record, event, or attribution value;
- change a price, deposit, quote, agreement, payment, scheduling, CRM, analytics, QR, SEO, or runtime behavior;
- retroactively rewrite a historical transaction or customer record;
- implement a compatibility adapter;
- merge or deploy.

## 5. Repository evidence reviewed

### 5.1 Governance and planning evidence

- authority-chain documents and current operational context;
- HOMEAUTH001, UXAUTH001, VISREF001, NAVIA001, COPYAUTH001, and HOMEHERO001;
- PACKAGE001, OFFERING001, PACKAGEBOM001, and CLAIMS001;
- public funnel, main funnel, funnel context, protected runtime, request-ID, lead-signal, HubSpot, Stripe, Google Calendar, scheduling, analytics, attribution, QR, and reporting authority;
- Document Catalog and Markdown Manifest.

### 5.2 Production evidence inspected read-only

Material evidence was inspected in:

- `src/App.tsx`
- `src/content/packages.ts`
- `src/content/homeSecurityPackageData.ts`
- `src/content/homeSecurityDepositPricing.ts`
- `src/content/wnyhsOfferCatalog.ts`
- `src/data/pricing.ts`
- `src/newsite/data/homeSecurity.packages.ts`
- `src/lib/homeSecurityFunnel.ts`
- `src/lib/homeSecurityPlannerEngine.ts`
- `src/pages/Packages.tsx`
- `src/pages/PackageDetail.tsx`
- `src/pages/Quote.tsx`
- `src/pages/QuoteReview.tsx`
- `src/pages/AgreementReview.tsx`
- `src/pages/Payment.tsx`
- `src/pages/QrLanding.tsx`
- `src/lib/analytics.ts`
- `api/create-checkout-session.ts`
- `api/stripe/create-checkout-session.ts`
- `functions/api/create-checkout-session.ts`
- `functions/api/lead-signal.ts`
- route, redirect, sitemap, metadata, test, and supporting configuration evidence found by targeted repository search.

No production file was modified.

## 6. Material occurrence inventory

| Classification | Material occurrence | Current role | Disposition |
| --- | --- | --- | --- |
| Public sales language | Package headings, cards, tier badges, Bronze/Silver/Gold names, “choose/change package,” package descriptions | Current production discovery and transaction UI | May be replaced only on separately authorized replacement-site surfaces; preserve current production until migration validation |
| Public route | `/packages`, `/packages/:id`, `/home-security/packages`, vertical aliases, `/newsite/home-security/packages`, `/newsite/home-security/packages/:tier` | Current landing, detail, compatibility, and beta route families | Preserve unchanged; remove from future primary navigation only during authorized implementation |
| Protected runtime identifier | `A1`, `A2`, `A3`; lowercase `a1`, `a2`, `a3`; `bronze`, `silver`, `gold`; `PackageTierId`; `HomeSecurityTier`; `packageId`; `selectedPackageId`; `recommendedPackageId`; `tier`; `packageTier`; `recommendedTier` | State, lookup, routing, persistence, and validation keys | Freeze until a separate runtime migration is justified and authorized |
| Stripe/payment dependency | Tier validation, server-side total lookup, dynamic `price_data`, product description, metadata `vertical`, `tier`, `quoteRef`, deposit state | Checkout creation and payment continuity | Preserve values, amounts, server verification, success/cancel behavior, and historical interpretability |
| Planner dependency | Fit Check result, recommended tier, recommended package ID, selected package ID, retail-flow state | Recommendation and funnel continuation | Preserve; later adapter may translate a public solution context into legacy selection data |
| Quote dependency | Query `tier`/`package`, `packageId`, package pricing lookup, quote reference and totals | Quote creation, restoration, display, and hashing | Preserve exact identifiers and meanings |
| Agreement dependency | Quote package ID, selected package name/tier, hardware lookup, quote reference | Agreement context and customer review | Preserve historical and new record interpretability |
| Scheduling dependency | Quote/request references and continuation after verified payment and owner confirmation | Appointment continuity | Preserve; no automatic scheduling or changed state transition |
| CRM dependency | `packageTier`, `selected package`, `recommendedTier`, `wny_quote_ref`, `wny_request_id`, vertical and request details | Contact/deal/task context and deduplication | Preserve property names and values until a separately authorized CRM migration |
| Analytics dependency | Package/tier labels, funnel route and step context, request/quote references | Funnel continuity and comparison | Preserve event names and identifier values; add public solution context only through a later governed schema change |
| Attribution dependency | route, source, campaign, UTM/QR context, request ID | Source continuity into lead records | Preserve unchanged through CTA handoff |
| QR/campaign dependency | `/qrlanding`, campaign landing flows, QR estimate events and lead-signal submission | Focused acquisition and attribution | Preserve routes, event names, payloads, and continuation |
| SEO dependency | Package routes, internal links, page titles/metadata, sitemap/canonical questions, bookmarks and external links | Discoverability and link equity | Do not delete or redirect yet; later SEO task must validate evidence |
| Internal administration | Existing records, operator views, support references, invoices and payment descriptions | Record interpretation and support continuity | Package terminology may remain permanently where it identifies the transacted legacy offer |
| Documentation authority | Package, funnel, runtime, claims, offering, architecture, and migration documents | Durable authority and lineage | Retain; mark legacy/transitional status rather than globally replacing text |
| Historical reference | Old quotes, agreements, invoices, CRM entries, logs, PRs, audits, and documents | Audit and customer history | Never rewrite merely to align public terminology |
| Technical use unrelated to sales packages | Dependency packages, CSS tiers, test plans, service plans, access tiers, and other generic `package`, `tier`, `bundle`, or `plan` uses | Software or non-offer terminology | Excluded from sales terminology migration |
| Unknown / operator review | Static Stripe dashboard product/price objects, external campaign links, external bookmarks, uninspected CRM reports, and live indexing state | External or unverified state | Must be verified in a later bounded task before removal or internal-ID migration |

The inventory establishes a broad dependency graph, not permission for global replacement.

## 7. Protected identifier register

The following identifiers remain protected:

| Identifier family | Observed values / names | Protection |
| --- | --- | --- |
| Package IDs | `A1`, `A2`, `A3`, `a1`, `a2`, `a3` | Do not rename or reinterpret |
| Tier values | `bronze`, `silver`, `gold`, `Bronze`, `Silver`, `Gold` | Preserve in runtime and historical records |
| Funnel keys | `vertical`, `tier`, `package`, `packageTier`, `recommendedTier`, `selectedPackageId`, `recommendedPackageId`, `fitCheckCompleted`, `discoveryContext`, `requestId` | Preserve spelling, casing rules, and semantics |
| Quote/payment keys | `packageId`, `quoteRef`, `quoteReference`, `payment_type`, `deposit_percent`, `total_cents`, `deposit_cents` | Preserve transaction meaning |
| CRM keys | `wny_request_id`, `wny_quote_ref`, current package/tier and vertical properties | Preserve fields and values |
| Route and return state | Current package, discovery, contact, quote, agreement, payment, schedule, success, cancel, QR, and campaign routes and query state | Preserve until separate route/runtime migration |
| Analytics/attribution | Current event names, route/source/campaign/UTM/QR fields, request ID, and quote reference | Preserve continuity |

No public-label change may silently mutate any protected identifier.

## 8. Public terminology authority

### 8.1 Future solution-first surfaces

Subject to COPYAUTH001 and later implementation authority, use solution-first language on:

- the replacement homepage;
- future `/solutions`;
- the six pillar pages;
- solution-detail pages;
- replacement desktop and mobile navigation;
- hero and section transitions;
- primary and contextual CTAs;
- assessment entry framing;
- educational content;
- general contact framing;
- metadata and page titles for replacement solution-first pages;
- prospect-oriented support transitions where appropriate.

Use `solution` as the primary public offer term. Use `Property Assessment` for the future primary conversion concept and `Property Dashboard` for the supported unified-interface concept.

### 8.2 Where package terminology may remain

Package terminology may remain:

- on unchanged legacy package pages during transition;
- inside protected planner, quote, agreement, payment, scheduling, CRM, analytics, attribution, and support flows;
- in historical quotes, agreements, invoices, deposits, payment descriptions, customer records, logs, and audit evidence;
- in administrator and support views where it identifies the transacted record;
- in documentation that governs, audits, or explains legacy behavior.

It must not be removed retroactively from legal, transactional, historical, or customer-support evidence.

### 8.3 Beta-homepage prohibition

The replacement beta homepage must not present:

- Bronze/Silver/Gold as its primary discovery model;
- a package selector;
- package-comparison cards;
- a “choose your package” CTA;
- fixed package contents as though they were the complete public solution catalog.

The homepage may hand off to the protected funnel through the compatibility boundary without exposing its legacy terminology before that boundary.

## 9. Migration models evaluated

| Model | Customer clarity | Runtime/funnel risk | CRM/analytics/SEO risk | Rollback/testing | Beta compatibility | Decision |
| --- | --- | --- | --- | --- | --- | --- |
| 1. Public-language-only replacement | High at first touch | Medium: public labels can obscure the legacy record selected downstream | Medium: no explicit translation contract | Simple rollback but ambiguous integration tests | Adequate only for surfaces that never enter the funnel | Rejected as incomplete |
| 2. Compatibility-layer migration | High; solution-first discovery with explicit protected handoff | Low-to-medium when adapter is additive and identifiers remain stable | Low-to-medium; continuity is testable | Bounded rollback and clear dual-layer tests | Best fit for beta plus current production | **Selected** |
| 3. Full staged public, route, and internal migration | Potentially high after completion | High: touches every protected funnel stage | High: records, links, payments, CRM, analytics, and SEO all migrate | Highest burden and hardest rollback | Unnecessary for beta launch | Deferred unless future evidence justifies it |

## 10. Selected compatibility-layer model

The selected rule is:

> Public terminology may change without silently changing protected identifiers.

The replacement experience may speak in terms of problems, pillars, outcomes, solutions, design, and assessment. When it crosses into the protected funnel, an explicit compatibility boundary must preserve the existing package/tier identity needed by production.

Model 2 is selected because:

- repository evidence shows deep coupling to `A1`/`A2`/`A3` and Bronze/Silver/Gold;
- protected transaction and continuation behavior already works;
- the beta can achieve customer clarity without an internal migration;
- explicit mapping is safer and more testable than implicit public relabeling;
- historical records remain interpretable;
- rollback can remove or bypass the adapter without rewriting records.

## 11. Compatibility mapping contract for later implementation

A later authorized task may create an additive adapter or compatibility metadata object with these logical fields:

| Public context | Protected value / behavior |
| --- | --- |
| Public solution ID or slug | Governed solution identity; never used as an implicit package ID |
| Public solution label | COPYAUTH001-approved display label |
| Owning pillar | Governed pillar identity |
| Assessment source route | Original public route |
| Campaign/QR/UTM attribution | Passed through unchanged |
| Legacy package ID | `A1`, `A2`, or `A3` only when the existing funnel has validly produced or received that selection |
| Legacy tier | `bronze`, `silver`, or `gold` using existing casing rules |
| Legacy package route | Existing route retained unchanged |
| Planner state | Existing Fit Check and retail-flow keys |
| Quote record | Existing `packageId`, pricing, hash, and quote reference |
| Agreement record | Existing quote/package context |
| Stripe/deposit | Existing server-side lookup, metadata, amounts, success/cancel URLs |
| CRM | Existing property names, request ID, quote reference, tier/package meaning |
| Analytics | Existing event names and identifiers plus any separately approved public-context field |
| Scheduling | Existing continuation, payment verification, and owner-confirmation gates |

The adapter must not:

- invent a one-to-one solution-to-package mapping;
- convert a solution click directly into a price or contractual selection;
- let browser-provided price or label data become authoritative;
- overwrite historical records;
- introduce identifier aliases without updating the canonical funnel-context contract.

## 12. Property Assessment destination

### 12.1 Routes evaluated

| Candidate | Finding |
| --- | --- |
| `/discovery?vertical=home-security` | Current protected assessment/Fit Check entry; preserves discovery, tier recommendation, request state, and the established funnel |
| Planner or quote routes | Too deep; assumes qualification or selection and exposes legacy package mechanics |
| On-site quote | No single current canonical route with confirmed compatible behavior was established |
| `/contact?vertical=home-security` | Valid secondary/manual intake, but skips the canonical guided discovery step |
| Estimate and QR estimate flows | Campaign- or context-specific; not the universal replacement-site primary CTA |

### 12.2 Decision

The implementation-ready destination for `Request a Property Assessment` is:

`/discovery?vertical=home-security`

This is a label-to-existing-destination decision, not a route or behavior change. It preserves the current protected entry identified by NAVIA001.

Requirements:

- preserve source route and all campaign, UTM, QR, and attribution context;
- preserve current validation, request-ID generation, discovery state, CRM submission, and continuation behavior;
- do not imply a free assessment, immediate appointment, automatic acceptance, fixed response time, or automatic scheduling;
- keep `/contact?vertical=home-security` available as a secondary/manual path where governed;
- do not route universal assessment traffic through QR-specific forms.

If the current discovery flow cannot retain a new source context without code changes, HOMEIMPL001 must preserve the destination and omit unsupported new metadata until a separate funnel task authorizes it.

## 13. Pricing and package presentation

### 13.1 Approved planning posture

- Remove package cards from the replacement site's primary discovery experience.
- Do not show Bronze/Silver/Gold selectors on the beta homepage.
- Present solution breadth and property-specific design before protected selection.
- Retain existing package pages and prices during transition.
- Allow package selection and exact price presentation to remain inside existing protected funnel stages.
- Treat packages as a downstream scoping/transaction mechanism, not the replacement site's primary public taxonomy.

### 13.2 Starting-price guidance

No new starting-price statement is authorized by PACKAGESOLMIG001. A later pricing/copy task may consider starting-price guidance only after it confirms:

- the controlling value;
- what is included;
- applicable property assumptions;
- add-on treatment;
- deposit relationship;
- update owner and review cadence;
- claims and legal presentation.

### 13.3 Operator decisions still required

Separate operator approval is required before:

- removing legacy package pages from any navigation beyond the replacement site's future primary navigation;
- exposing new starting-price guidance;
- moving package selection to a different funnel stage;
- changing or retiring fixed package pricing;
- renaming transactional descriptions or CRM fields.

## 14. Route and SEO disposition

| Route / concern | Disposition |
| --- | --- |
| `/packages` and `/packages/:id` | Preserve unchanged; retain as legacy landing/detail routes |
| `/home-security/packages` and other current aliases | Preserve for compatibility |
| `/newsite/home-security/packages` and tier details | Preserve until the beta implementation and migration task explicitly disposes them |
| `/discovery?vertical=home-security` | Preserve as assessment entry |
| Quote/agreement/payment/schedule/success/cancel/continuation routes | Preserve unchanged as protected funnel |
| `/qrlanding` and `/lp/*` | Preserve campaign/QR behavior |
| Future `/solutions`, pillar, and solution routes | Use the NAVIA001 taxonomy when separately implemented |
| Package links in future primary navigation | Omit from replacement primary navigation; do not delete route |
| Redirects | None authorized; consider only after traffic, bookmark, external-link, campaign, and runtime evidence |
| Canonicals | Future SEO task must prevent duplicate intent while preserving reachable legacy routes |
| Sitemap | Do not change now; later task decides legacy inclusion/index posture |
| Metadata/page titles | Future solution pages use solution-first terms; legacy pages retain accurate legacy identity during transition |
| External links/bookmarks | Preserve; inventory before redirect or deprecation |
| Analytics continuity | Maintain route history and identifier continuity across any later transition |

No route is approved for deletion, rename, redirect, or deprecation by this document.

## 15. Transaction and record safety

Every later implementation must preserve:

1. Stripe amounts are calculated and verified server-side.
2. Browser-supplied price, label, package, or solution data is never payment authority.
3. Existing package/tier identity and any external price/product identity remain protected.
4. Existing quotes and agreements remain interpretable.
5. Historical customer, CRM, invoice, agreement, deposit, payment, and analytics records are not rewritten.
6. Deposit calculations do not change without separate authorization.
7. Success and cancel return behavior remains valid.
8. Request IDs and quote references remain stable.
9. Scheduling continuation retains payment and owner-confirmation gates.
10. CRM mappings and deduplication behavior remain intact.
11. Attribution survives the public-language transition.
12. QR/campaign-specific behavior remains isolated and intact.
13. No secret, credential, token, private URL, or customer data enters public source or governance documentation.

## 16. Staged migration plan

### Phase 1 — Solution-first beta presentation

- **Allowed:** Apply COPYAUTH001 solution-first language to separately authorized beta/homepage surfaces; link assessment to the current discovery entry.
- **Prohibited:** Runtime, route, ID, price, form, event, CRM, payment, or scheduling change.
- **Prerequisites:** Merged PACKAGESOLMIG001; approved visual/copy assets; HOMEIMPL001.
- **Testing:** Content/claims review, links, keyboard/mobile behavior, source-query preservation, smoke test into discovery.
- **Rollback:** Revert beta presentation only; production funnel remains unchanged.
- **Gate:** Manual PR review and separate deployment authorization.

### Phase 2 — Explicit compatibility boundary

- **Allowed:** Add an additive typed mapping/adapter between public solution context and the protected funnel.
- **Prohibited:** ID rename, price authority change, historical rewrite, implicit solution-to-price assignment.
- **Prerequisites:** Dedicated implementation task; exact mapping owner; analytics/CRM/funnel review.
- **Testing:** Mapping unit tests; query/state persistence; invalid/unknown handling; legacy direct-link regression.
- **Rollback:** Disable/remove adapter while keeping legacy entry intact.
- **Gate:** Operator-approved mapping and draft PR.

### Phase 3 — End-to-end protected-flow validation

- **Allowed:** Validate discovery, planner, quote, agreement, deposit/payment, CRM, analytics, attribution, QR, scheduling, success/cancel, and recovery flows.
- **Prohibited:** Production record mutation outside test controls; silent schema correction.
- **Prerequisites:** Phase 2 review environment and dedicated test evidence.
- **Testing:** Happy path, abandon/resume, direct legacy route, campaign/QR, invalid state, payment verification, CRM dedupe, scheduling gate, mobile.
- **Rollback:** Restore prior public entry and adapter state.
- **Gate:** Manual cross-owner sign-off.

### Phase 4 — Optional route/internal migration

- **Allowed:** Planning only until separately authorized; migrate only what evidence shows is worth migrating.
- **Prohibited:** Bundled mass rename or global replacement.
- **Prerequisites:** Traffic/index/link inventory, external-system inventory, retention policy, schema migration, rollback and historical-interpretability plan.
- **Testing:** Full regression plus SEO, external links, records, reports, payments, and rollback.
- **Rollback:** Preapproved aliases, mappings, and data rollback.
- **Gate:** New task IDs, owner approvals, manual PR review, and separate deployment authority.

## 17. HOMEIMPL001 handoff

HOMEIMPL001 may rely on the following without reinterpreting this report:

1. Use solution-first public terms from COPYAUTH001: `solution`, six pillars, `Property Assessment`, and `Property Dashboard`.
2. Do not show Bronze/Silver/Gold, package cards, package comparison, or package selection on the beta homepage.
3. Link `Request a Property Assessment` to `/discovery?vertical=home-security`.
4. Preserve any incoming source, campaign, UTM, QR, route, and attribution query values already supported by the destination.
5. Do not rename or reinterpret `A1`/`A2`/`A3`, `a1`/`a2`/`a3`, `bronze`/`silver`/`gold`, `packageId`, `tier`, `packageTier`, `recommendedTier`, `requestId`, or `quoteRef`.
6. Do not change `/packages`, package details, aliases, discovery, contact, planner, quote, agreement, payment, scheduling, success/cancel, QR, campaign, or continuation routes.
7. It may link existing public solution, pillar, support, contact, and approved assessment routes only as authorized by NAVIA001 and the HOMEIMPL001 allowlist.
8. Temporary compatibility means public solution-first presentation ends at the protected discovery boundary; it does not mean relabeling the protected funnel.
9. Do not invent a solution-to-package mapping.
10. Route/SEO migration, compatibility adapter implementation, pricing changes, and downstream funnel relabeling remain documentation-only recommendations until separate tasks authorize them.

## 18. Future bounded tasks

Recommended future tasks, none activated here:

1. **HOMEIMPL001** — implement the governed beta homepage and current assessment handoff without protected-system changes.
2. **PACKAGESOLCOMPAT001** — implement the explicit compatibility adapter only if beta-to-funnel context beyond current supported query state is required.
3. **PACKAGESOLFLOWVAL001** — validate the full protected funnel and external mappings after any adapter exists.
4. **PACKAGESOLSEO001** — inventory traffic, indexing, links, canonicals, sitemap, and redirect evidence before legacy route disposition.
5. **PACKAGESOLPRICE001** — decide replacement-site starting-price and post-assessment package presentation.
6. **PACKAGESOLINTMIG001** — consider internal identifier migration only if later evidence justifies the risk.

## 19. Validation and acceptance

This authority is acceptable when:

- material package occurrences are classified;
- three migration models are compared and one is selected;
- public language and protected identifiers are separated;
- the Property Assessment destination is explicit;
- pricing, route, SEO, transaction, CRM, analytics, attribution, QR, and scheduling protections are documented;
- four staged phases and a concise HOMEIMPL001 handoff exist;
- no production file, route, ID, price, form, runtime, external system, merge, or deployment changes;
- catalog and manifest remain synchronized;
- the exact five-file boundary and `git diff --check` pass.

## 20. Final authority statement

The replacement website shall use solution-first public language and enter the current protected funnel through an explicit compatibility boundary.

The selected migration model is **Compatibility-layer migration**. Stable package/tier identifiers and all protected transaction, record, attribution, CRM, analytics, QR, and scheduling behavior remain unchanged unless a later bounded task explicitly authorizes and validates a migration.

`Request a Property Assessment` shall currently link to `/discovery?vertical=home-security`. This destination decision does not change production behavior and does not imply that an assessment is free, scheduled automatically, or immediately accepted.

No production implementation, route change, redirect, ID migration, price change, merge, or deployment is authorized here.
