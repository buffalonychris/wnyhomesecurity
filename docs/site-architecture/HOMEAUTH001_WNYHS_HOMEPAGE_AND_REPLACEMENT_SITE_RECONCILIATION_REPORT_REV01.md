# HOMEAUTH001 WNYHS Homepage and Replacement-Site Reconciliation Report REV01

## Document control

- **Task ID:** HOMEAUTH001
- **Revision:** REV01
- **Status:** Complete pending manual PR review
- **Type:** Governance reconciliation report
- **Implementation authority:** None

## 1. Executive conclusion

The operator reconciliation authorization resolves the prior HOMEAUTH001 stop conditions. The replacement homepage may be governed as a ten-section, solution-first experience while preserving the exact SITEARCH005 category order, current production navigation, current hero asset, sitewide warm-light system, claims qualifications, protected funnels, and runtime compatibility.

No production website or external system is changed.

## 2. Owner map

| Subject | Current controlling owner | HOMEAUTH001 disposition |
| --- | --- | --- |
| Repository authority | Project, guardrails, agent, plan, current context, MTR | Preserved |
| Replacement homepage | `docs/site-architecture/HOMEAUTH001_WNYHS_HOMEPAGE_VISUAL_AUTHORITY_REV01.md` | New page-specific owner |
| Prior homepage/QR structure | `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md` | Homepage provisions superseded; QR retained |
| Homepage layout sequence | `docs/brand/page_layout_standards_rev01.md` | Homepage-only order amended |
| Production navigation/footer | `docs/brand/header_footer_standards_rev01.md` | Preserved; replacement deferred |
| Production hero asset | `docs/brand/brand_asset_standards_rev01.md` | Preserved |
| Categories/order | CATEGORY001 REV02 and SITEARCH005 | Preserved exactly |
| Sitewide visual system | DESIGN002 REV02, DESIGN003, VISUALFREEZE002 | Preserved; bounded dark hero allowed |
| Semantic tokens | DESIGN002 REV02, PAGE_TOKEN_COMPLIANCE_GATE, token source | Preserved |
| Customer language | `docs/content/wnyhs_customer_language_standard.md` | Already solution-first; preserved |
| Claims | CLAIMS001 | Preserved; qualifications required |
| Routes/funnels | Public Funnel, Main Funnel, Site Architecture | Preserved pending migration |
| Package structure | PACKAGE001 and PACKAGEBOM001 | Public authority superseded; legacy/operational structure retained |
| Pricing | PACKAGEBOM001 and quote/payment owners | No public price approved by HOMEAUTH001 |
| Replacement-site program | WEBBETADISC001 | Preserved; HOMEAUTH001 supplies homepage authority |
| BOKS | BOKSFOUND001/BOKSOPS001 | Knowledge context only; repository remains implementation authority |

## 3. Operator decisions applied

1. The ten-section hierarchy supersedes only the homepage order in the Page Layout Standard.
2. SITEARCH005 controls the exact order: Home Security; Aging in Place; Home Safety; Home Automation; Home Lighting; Property Management.
3. Production navigation remains unchanged; replacement navigation is a future task.
4. A cinematic dark hero is a bounded emphasis section within the warm-light system, not a dark-default site.
5. `public/brand/heros/HomePageHero.png` remains the production asset.
6. Monthly-fee, local-operation, unified-control, ownership, privacy, and monitoring language remains claims-qualified.

## 4. Solution-first doctrine

The replacement site presents WNY Home Security as a designer and installer of complete intelligent-property solutions.

> We do not sell hardware. We sell solutions.

This means the public offering is the professionally designed, installed, configured, tested, and functioning outcome. Equipment remains a necessary solution component and may be identified where operationally, contractually, educationally, or legally required.

Public package terminology is superseded for the replacement website. Existing package routes, identifiers, contracts, pricing inputs, historical records, and schemas remain intact until separately migrated.

## 5. Package-terminology audit method

The audit used targeted repository searches for package, packages, tier, Bronze, Silver, Gold, bundle, kit, pricing, route, Stripe, CRM, planner, quote, agreement, analytics, and funnel contexts. Occurrences were classified by authority and function; no global replacement was performed.

## 6. Package-terminology disposition

| File/owner | Current term/context | Classification | Required action | HOMEAUTH001 action | Future dependency | Change-now risk | Leave risk |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md` | Public Package definition/pages | Active public authority | Supersede public positioning; preserve lineage | Narrow status notice | Full migration | Erases coupled meaning | Parallel public authority |
| `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md` | Homepage Packages/category model | Active public authority | Point replacement homepage to HOMEAUTH001; retain QR | Narrow successor notice | Navigation/migration | Damages QR if broad | Homepage conflict |
| `docs/brand/page_layout_standards_rev01.md` | Packages preview in locked order | Active public authority | Replace homepage-only order | Exact authorized amendment | None | Interior drift if broad | Direct hierarchy conflict |
| `docs/content/wnyhs_customer_language_standard.md` | “solutions, not generic hardware packages” | Active public authority | Retain; already aligned | None | Copy approval | Unnecessary churn | Low |
| `docs/brand/header_footer_standards_rev01.md` | Packages nav item | Active operational/public | Preserve current production | None | Navigation + migration | Navigation breakage | Visible legacy label |
| `docs/specs/public_funnel_standards_rev01.md` | `/packages` role | Active operational/public | Preserve | None | Funnel migration | Funnel contract risk | Temporary legacy label |
| `docs/specs/main_funnel_contract_rev01.md` | `/packages`, tier params, Bronze/Silver/Gold | Runtime/active operational | Preserve exactly | None | Coordinated runtime migration | High lead/attribution risk | Legacy flow remains |
| OFFERING001 | Solutions and packages | Active operational | Reconcile relationships later | None | Offer migration | Catalog meaning risk | Internal terminology conflict |
| PACKAGEBOM001 | Package IDs/candidates/BOM inputs | Active operational | Preserve records/schema | None | BOM/quote/CRM migration | High data/quote risk | Legacy internal naming |
| CLAIMS001 | Solution or approved package concept | Active claims governance | Preserve safety rules | None | Claims-owner terminology pass | Claims weakening | Minor terminology inconsistency |
| `docs/catalog/IMPLEMENTATION001_Canonical_Runtime_Catalog_REV01.md` | Package page consumer/price labels | Runtime/historical implementation | Preserve | None | Runtime migration | Current-state misstatement | Accurate legacy record |
| `docs/crm/hubspot/hubspot_kb_rev03.md` | `packageTier` Bronze/Silver/Gold/custom | Active operational | Preserve | None | CRM + funnel migration | High mapping risk | Legacy schema remains |
| `docs/core_vs_vertical_separation_rev_01.md` | Gold package/Stripe assumptions | Active operational/historical overlap | Owner review later | None | Stripe/quote migration | High payment risk | Authority ambiguity |
| Quote-system owner set | Package structures/selectors | Active operational | Preserve | None | Quote/proposal migration | Quote-model risk | Legacy operator language |
| SEO001/SEO004 | Package routes/visibility | Active operational | Preserve route truth; migrate later | None | SEO/redirect migration | Index/search loss | Legacy terms remain |
| SITEARCH002/SITEARCH005 | Package visibility/Category → Package → Solution | Active architecture | Preserve current routes; reconcile later | None | IA/migration | Duplicate/broken routes | Legacy architecture language |
| `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md` | Featured Packages | Historical/planning | Superseded for replacement homepage | Report only | None | Rewrites history | Confusion if treated current |
| `docs/audits/*`, `docs/steps/*` | Tier/package flow | Historical | Retain | None | None | Destroys lineage | None when classified |
| Production source/package routes/query fields | Routes, labels, identifiers | Runtime identifier | Preserve exactly | None | Full compatibility migration | High production risk | Current terms remain |
| Software package/vendor packaging | Technical/procurement meaning | Unrelated technical use | Retain | None | None | Tooling/procurement damage | None |

## 7. Audit answers

### Public package authority

PACKAGE001, UX001, Header/Footer, Public Funnel, Main Funnel, Site Architecture, and SEO currently contain public or public-adjacent package authority. HOMEAUTH001 controls only replacement-homepage public terminology. General customer language remains owned by `docs/content/wnyhs_customer_language_standard.md`.

### Bronze, Silver, and Gold

They are not approved replacement-site offering labels. They remain active runtime/CRM/funnel identifiers and historical evidence. HOMEAUTH001 does not rename them.

### Legacy pricing

No reviewed current package/BOM authority approves final public package prices. PACKAGEBOM001 explicitly sets no final public prices, and capability/catalog governance prohibits deriving public prices. Any existing displayed price requires owner verification before reuse.

### Coupling

Package/tier concepts are coupled to `/packages`, contact query parameters, recommendation/planner behavior, HubSpot fields, Stripe/payment assumptions in existing records, quote/proposal structures, SEO/canonical governance, analytics/attribution continuity, and historical evidence.

### Public labels and legacy routes

A future task may display “Solutions” while temporarily preserving `/packages`, but only after copy truth, canonical metadata, redirects, analytics, accessibility, customer expectations, and compatibility are approved. HOMEAUTH001 changes neither label nor route in production.

### Proposal doctrine

Future proposals should lead with total solution outcome and scope. Equipment may be itemized for delivery, ownership, tax, warranty, service, or contract clarity. Exact rules remain with quote/agreement owners.

## 8. Public-language decisions

- Use solution-first language and outcome-led hardware framing.
- Do not use package/tier CTAs on the replacement homepage.
- Do not name Home Assistant on the homepage.
- Qualify monthly-fee, local-operation, and unified-control statements.
- Restrict monitoring to clearly customer-controlled awareness.
- Avoid unsupported superiority, price, prevention, privacy, compatibility, or uptime absolutes.

## 9. Visual reconciliation

VISUALFREEZE002 and current visual/token owners control the warm-light sitewide direction. A controlled dark hero is allowed only as a page-specific emphasis section. `HomePageHero.png` remains production authority.

Named competitor references and future operator images remain vision evidence until registered and approved. Package-first, five-category, dark-default, and old six-section homepage models are superseded for the replacement homepage.

## 10. Navigation recommendation

Keep current navigation. A future task must decide NAV-001 and FOOTER-001, Solutions labeling, six-pillar access, support, global/contextual wayfinding, mobile, direct entry, funnel boundaries, legacy package routes, redirects, SEO, analytics, bookmarks, and shared links.

## 11. Design authority and BOKS boundary

HOME-001 through HOME-010, NAV-001, FOOTER-001, and MOBILE-001 are adopted. Authority levels are Vision Reference, Approved Mockup, and Implemented Website.

BOKS may store knowledge and relationships but cannot replace repository-controlled design or implementation authority.

## 12. Protected systems

No source, route, redirect, navigation component, asset, CSS, HTML, API, lead intake, HubSpot, CRM, Stripe, payment, agreement, scheduling, planner, quote, form, analytics, email, Cloudflare, environment, secret, deployment, customer-data, or Drive change is made.

## 13. Future bounded tasks

Recommended, not activated:

1. **PACKAGESOLMIG001 — Reconcile Package-to-Solution Terminology and Funnel Compatibility**
2. **NAVIA001 — Define Replacement-Site Navigation and Information Architecture**
3. **VISREF001 — Govern Visual Reference Intake and Replacement-Site Design Authority**
4. **HOMEHERO001 — Approve the Replacement Homepage Hero Asset**
5. **HOMEIMPL001 — Implement the Governed Replacement Homepage**

## 14. Remaining operator decisions

Separate approval is still required for final navigation/routes, package-route/identifier migration, final copy/CTA destinations, visual references/mockups, hero asset, theme/motion behavior, implementation allowlist, and deployment plan.

## 15. Final status

HOMEAUTH001 establishes documentation authority only and is ready for manual PR review. Nothing is merged or deployed.
