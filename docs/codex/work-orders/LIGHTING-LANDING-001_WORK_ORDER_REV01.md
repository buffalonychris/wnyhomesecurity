# LIGHTING-LANDING-001 Work Order REV01

Status: DONE
Task ID: LIGHTING-LANDING-001
Task Name: Permanent Outdoor Lighting Campaign Landing Page
Category: FUNNEL
Primary Workstream: Public Content System
Related Workstreams: Project Governance; Site Architecture; Visual System; SEO; Search System; Image System; Category System; Solution System
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
Repository: `buffalonychris/wnyhomesecurity`
Base: clean synchronized `main` at `55970e0503f08add2041f8d98c574157e4a372e4`

## 1. Read, reasoning, and execution posture

- `READ MODE: TARGETED`
- `REASONING POSTURE: ELEVATED` for cross-owner route, claims, asset, contact, SEO, and protected-system reconciliation while preserving targeted reads.
- `EXECUTION POSTURE: MIXED`: repository implementation, validation, Git delivery, and draft-PR creation are direct; final asset supply/approval, live inbox monitoring confirmation, operator PR review, merge, deployment, and production acceptance are operator-controlled handoffs.

## 2. Controlling authorization

This is the repository-owned work order for the operator-authorized prompt-created task `LIGHTING-LANDING-001`. The current context explicitly permits bounded final-hour FUNNEL, COPY, QA, LOCAL-MARKETING, and BUSINESS-DEVELOPMENT work. `LIGHTING-CAMPAIGN-GOV001`, merged through PR #622 at `55970e0503f08add2041f8d98c574157e4a372e4`, established the campaign exception and requires a separate bounded implementation task.

The work order must be created before any implementation file changes. After this work order exists, add exactly one current-schema `ACTIVE` task record to `docs/system/master-task-register.md` before implementation. Stop if registration conflicts with higher authority.

## 3. Objective

Implement one standalone permanent outdoor lighting campaign page at `/lighting-installation` as a reviewable, unpublished candidate. Preserve the canonical Home Lighting category and `HL-008` Permanent Exterior Lighting solution. The route is acquisition-only, direct-link, email-contact only, `noindex`, excluded from sitemap, public search, header navigation, footer navigation, and homepage. After inquiry, existing WNYHS business processes continue to govern.

Because the approved source folder contains no accessible image assets and live monitoring of the intended campaign inbox is not verified, the implementation must not include fabricated proof imagery and must remain draft/unpublished. These are public-release blockers, not authorization to expand scope.

## 4. Governing inputs

### Authority and execution

- `AGENTS.md`
- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- targeted `docs/system/master-task-register.md` task/schema sections
- `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
- `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV02.md`
- applicable `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md` sections
- `docs/codex/work-orders/LIGHTING-CAMPAIGN-GOV001_WORK_ORDER_REV01.md`

### Campaign and domain owners

- `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV02.md`, Section 15
- `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`, Sections 14 and 27
- `docs/solution-system/OFFERING001_WNYHS_OFFER_ARCHITECTURE_VISIBILITY_TIERS_AND_VAULT_GOVERNANCE_REV01.md`, campaign addendum
- `docs/catalogs/WNYHS_INTERNAL_SOLUTION_ARSENAL_REV01.md`, Section 10
- `docs/solution-system/HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01.md`, Section 16
- `docs/marketing/WNYHS_NEW_SOLUTIONS_PUBLIC_CONTENT_SPEC_REV01.md`, Section 17
- `docs/specs/public_funnel_standards_rev01.md`, Section 5
- `docs/solution-system/CLAIMS001_WNYHS_UNIFIED_CLAIMS_GUARDRAIL_ADDENDUM_REV01.md`, Sections 3-9 and 14

### Brand, visual, asset, route, SEO, and search owners

- `docs/brand/brand_asset_authority_rev01.md`
- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- `docs/design-system/ASSET001_WNYHS_UNIFIED_ASSET_SYSTEM_STANDARD_REV01.md`
- `docs/seo/SEO001_WNYHS_SEO_FOUNDATION_STANDARD_REV01.md`
- `docs/seo/SEO004_WNYHS_SEO_STATUS_AND_CONTINUATION_HANDOFF_REV01.md`
- `docs/site-architecture/SEARCH001_WNYHS_PUBLIC_SITE_SEARCH_ARCHITECTURE_AND_INDEX_PLAN_REV01.md`

## 5. Approved business sources

- [Lighting Installation Landing Page Copy REV01](https://docs.google.com/document/d/13eXl98Ole_QvL0hJYMobDuXy8_KJ-s8Nev3yDjtUVzE/edit)
- [Launch Claims and QA Checklist REV01](https://docs.google.com/document/d/1V_pbNxDrO4X64w0t1qNQk0c-7O3vP7CJI6uaJlhRTBo/edit)
- [LIGHTING-LANDING-001 Implementation Brief REV01](https://docs.google.com/document/d/1ZlepwuGasX0-D-8JWBGcVgyNkh0-oiYFXmQNACkrC-E/edit)
- [Lighting Solutions Decision Register REV01](https://docs.google.com/document/d/1_FiD-n4xkshe8sI0y-p7hHi8SyYp0V4tHMIBEvPhxVM/edit)
- [Approved Campaign Exception and Back-Office Reuse REV01](https://docs.google.com/document/d/1XzHOqtOyOkM5CC4gHmQkaRdfNX2Rm249eOsYlH5GcXE/edit)
- [WNY Home Security Lighting Solutions source folder](https://drive.google.com/drive/folders/1yUBoZ6N8DM9eK1AJLQhRCqXa5HXRhD7w)

These sources supply approved business direction but do not override repository authority. The copy document is explicitly pending repository claims review.

## 6. Source findings and publication blockers

### Asset provenance

The approved source folder was read through the connected Google Drive account on October 27, 2026. It contains seven Google Docs and no image files. The copy and launch checklist refer to earlier approved lighting mockups, but no source asset, filename, license, creator, approval record, or repository-ready derivative is available in the supplied folder or current repository search.

Therefore:

- do not generate substitutes;
- do not reuse unrelated repository lighting images as campaign proof;
- do not add manufacturer imagery or logos;
- do not imply an image is a completed WNYHS installation;
- implement the draft page without final campaign imagery; and
- block public release until the operator supplies and approves provenance-qualified source assets and their exact intended use.

### Contact verification

`service@wnyhomesecurity.com` is marked `VERIFY ADDRESS BEFORE PUBLICATION` in the approved copy and remains unverified. The repository-owned public contact configuration, `src/content/wnyhsContact.ts`, exposes `hello@wnyhomesecurity.com` as the existing public general-contact address, and the locked header/footer standard also names that address. The draft page may reuse `wnyhsContact.emails.hello` for a syntactically valid `mailto:` without changing email routing. Repository evidence does not prove live monitoring, so public release remains blocked until the operator confirms the selected inbox is actively monitored for this campaign.

## 7. Owner Routing Matrix

| Approved concept | Canonical owner | Exact target | Section / behavior | Action | Reason | Why not another owner | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bounded authority and task lifecycle | Project Governance | This work order; `docs/system/master-task-register.md` | One work order and one exact task record | CREATE / MODIFY | Codex work orders and MTR lifecycle are Project Governance-owned. | Source files cannot create their own authority. | NO | HIGH |
| Standalone customer-facing campaign page | Public Content System | `src/pages/LightingInstallation.tsx` | Page content, semantic structure, email-only CTA, disclosures | CREATE | Public Content owns static marketing pages and claims-safe presentation. | Category and Solution owners remain canonical and are referenced, not replaced. | NO | HIGH |
| Route registration | Site Architecture implementation | `src/App.tsx` | Exact `/lighting-installation` route only | MODIFY | App routing is the current route integration surface. | Navigation and redirects are not required. | NO | HIGH |
| Existing marketing shell classification | Site Architecture / Public Content implementation | `src/components/Layout.tsx` | Treat the route as an existing WNYHS marketing-shell route to prevent duplicate global footer | MODIFY | Layout owns global shell selection. | Page-local CSS must not duplicate global shell behavior. | NO | HIGH |
| Page-specific responsive styling | Visual System | `src/styles/lightingInstallation.css` | Token-compatible page selectors only | CREATE | The page needs narrow layout styles while governed tokens/primitives remain authoritative. | No token or shared visual-system changes are required. | NO | HIGH |
| Noindex metadata and canonical | SEO | `src/lib/seoPolicy.ts` | Route metadata, self-canonical, `noindex, follow` campaign posture | MODIFY | This file is the current route-level metadata/crawl policy owner. | `robots.txt` and sitemap do not need changes. | NO | HIGH |
| Visible deployed-site version | Project Governance / release evidence | `src/lib/siteVersion.ts` | One version increment | MODIFY | Site-impacting tasks require a visible version bump. | Package version and runtime contracts are unrelated. | NO | HIGH |
| Focused route/content/accessibility validation | QA | `src/pages/__tests__/LightingInstallation.test.tsx` | Direct render, headings, disclosure, mailto, absence of form/pricing/proof imagery | CREATE | A dedicated test keeps campaign assertions bounded. | Existing broad landing-page tests need no unrelated edits. | NO | HIGH |
| SEO/sitemap/search/nav exclusion validation | QA / SEO | `src/lib/__tests__/seoPolicy.test.ts` | Noindex, canonical, sitemap exclusion, search/navigation source exclusion | MODIFY | Existing SEO policy tests own these invariants. | Production sitemap/search/navigation sources remain unchanged. | NO | HIGH |
| Existing public contact address | Public contact configuration | `src/content/wnyhsContact.ts` | Read `wnyhsContact.emails.hello`; no edit | REFERENCE ONLY | It is the current repository-owned public contact source. | Draft Google copy cannot verify inbox operation. | NO, with release blocker | HIGH |
| Campaign imagery | Image/Asset System | Drive source folder; repository asset owners | Provenance and intended-use qualification | STOP for public release / REFERENCE ONLY for draft | No qualified image files are available. | Fabricating or repurposing imagery would create false proof. | YES for release, NO for draft without images | HIGH |
| Main nav, homepage, public search, sitemap, robots | Site Architecture / Search / SEO | Existing sources | Preserve unchanged | REFERENCE ONLY | Initial posture explicitly excludes these surfaces. | Route registration and route-level metadata are sufficient. | NO | HIGH |
| Home Lighting and `HL-008` ownership | Category / Solution System | Current merged owner sections | Preserve canonical ownership | REFERENCE ONLY | The campaign must route back to existing owners. | The campaign page must not create a parallel category or solution. | NO | HIGH |

## 8. Required implementation

1. Create this complete work order as the first working-tree mutation.
2. Add one exact current-schema `ACTIVE` `LIGHTING-LANDING-001` task record before source implementation.
3. Add a lazy-loaded `/lighting-installation` route using the existing WNYHS marketing header/footer shell without adding any navigation link.
4. Implement a semantic page containing:
   - professional permanent outdoor lighting and Western New York positioning;
   - the property-photo-based AI preview proposition;
   - the prominent required concept-image/AI-preview disclosure;
   - architectural, seasonal, sports-inspired, and special-event examples only as model-dependent representative configurations;
   - property-specific planning for measured rooflines, controller/power positions, mounting surfaces, transitions, and cable routing;
   - optional compatible permanent track/channel and color-keyed finishes without vendor exclusivity or accreditation claims;
   - email-only contact through the repository-owned general address;
   - no form, quote route, automated lead route, phone CTA, pricing, product commerce, or scheduling CTA; and
   - no campaign imagery until qualified assets are supplied.
5. Add route metadata with a self-canonical URL and explicit `noindex, follow` campaign posture.
6. Keep the route absent from sitemap, public search index, header/footer navigation, and homepage.
7. Bump the visible site version once.
8. Add focused tests and validate the direct route, content, accessibility structure, mailto, SEO posture, and protected exclusions.

## 9. Exact allowed file scope

Only these files may change:

1. `docs/codex/work-orders/LIGHTING-LANDING-001_WORK_ORDER_REV01.md`
2. `docs/system/master-task-register.md`
3. `src/App.tsx`
4. `src/components/Layout.tsx`
5. `src/pages/LightingInstallation.tsx`
6. `src/styles/lightingInstallation.css`
7. `src/lib/seoPolicy.ts`
8. `src/lib/siteVersion.ts`
9. `src/pages/__tests__/LightingInstallation.test.tsx`
10. `src/lib/__tests__/seoPolicy.test.ts`

No other file may be modified. If implementation requires another file, stop for work-order revision.

## 10. Reference-only files and surfaces

- All governing documents and Drive sources listed above.
- `src/content/wnyhsContact.ts` for the existing public general-contact address and mailto helper.
- `src/components/homeSecurity/WnyhsMarketingLayout.tsx`, `WnyhsTopNav.tsx`, and `WnyhsSiteFooter.tsx` for reuse without modification.
- `src/styles/wnyhsVisualGovernance.css` and `src/styles/homeSecurityPremium.css` for existing tokens/primitives without modification.
- `src/content/publicSearchIndex.ts`, `src/content/wnyhsNavigation.ts`, `public/sitemap.xml`, and `public/robots.txt` to prove exclusion; do not modify them.
- Existing Home Lighting category and `HL-008` code/docs; do not modify them.

## 11. Forbidden scope and protected systems

Do not modify or add:

- Home Lighting category pages/configuration or the canonical `HL-008` solution;
- homepage, menus, header/footer navigation content, public search index, sitemap, robots, redirects, or normal funnel order;
- forms, `/api/lead-signal`, requestId, HubSpot/CRM, Resend/email routing, Stripe/payment/webhooks, scheduling/calendar, quote/agreement/payment/schedule chain, planner, catalog, inventory, procurement, fulfillment, customer data, secrets, Cloudflare/runtime/environment/DNS, dependencies, or package-lock;
- public per-foot pricing, material/customer pricing, vendor cost, profit, margin, historical package rates, internal BOMs, or price calculations;
- unsupported monitoring, dispatch, response, police/authority/emergency-services, safety, deterrence, warranty, guarantee, universal compatibility, partnership, accreditation, certification, stock, or exact-result claims;
- generated or unverified campaign images, manufacturer logos, unrelated repository imagery as proof, or any depiction labeled as a completed installation without evidence;
- new design tokens, raw color values, shared component refactors, architecture, dependencies, or unrelated cleanup.

No merge, ready-for-review transition, auto-merge, direct push to `main`, deployment, Cloudflare validation, email-routing change, or production publication is authorized.

## 12. Claims and copy controls

- Treat Govee outdoor-lighting families as custom/site-reviewed offerings; capabilities, configuration, availability, and suitability vary by model and property.
- Do not say every model supports the same scenes, cut/extend behavior, integrations, controller placement, or stock status.
- Example palettes are representative or customer-created unless a named manufacturer preset is verified.
- Track/channel and color-keyed finishes are optional and compatibility/site dependent.
- Do not name PermTrack in customer copy unless needed for a disclaimer; never imply exclusivity, partnership, authorization, accreditation, or certification.
- AI previews are illustrative concepts based on actual property photos, available measurements, selected lighting concepts, and best verified published manufacturer specifications.
- State prominently that previews are not photometric, engineering, electrical, compatibility, or installation plans and do not guarantee exact brightness, color, distribution, module count/spacing/position, scene availability, routing, or finished appearance.
- Final scope requires onsite measurement, access/substrate/electrical review, exact model verification, and field qualification.

## 13. Change posture and version

- Additive and surgical.
- No destructive changes.
- Reuse existing semantic tokens, typography, components, header/footer, focus states, and responsive primitives.
- Page-specific CSS may use only existing variables and token-compatible layout values; no raw colors or new shared visual primitives.
- Increment `SITE_VERSION` from `v1.0.200` to `v1.0.201` before delivery.

## 14. Validation

Tier: source/UI public marketing page.

Run:

- `npm run check:tokens`
- `npm run lint`
- `npm run typecheck:test`
- focused Vitest for `LightingInstallation.test.tsx` and `seoPolicy.test.ts`
- `npm run build`
- direct-route browser rendering at desktop and mobile widths
- keyboard/focus, heading structure, contrast, responsive overflow, and mailto inspection
- `git diff --check`
- exact changed-file allowlist check
- `git diff --diff-filter=D --name-only`
- forbidden pricing/claims/protected-path scans
- route collision and direct-access checks
- assertions that `/lighting-installation` is `noindex, follow`, self-canonical, absent from sitemap/search/navigation/homepage, and not blocked by a blanket robots change
- version-bump check
- branch, draft PR, and no-merge/no-deploy state checks

Visual QA must not claim final campaign-image layout approval because final assets are unavailable. Record that limitation explicitly.

## 15. Git and delivery

- Branch: `task/lighting-landing-001`
- One bounded implementation commit, or a minimal work-order/task-authority commit followed by one implementation commit when needed to prove the task gate.
- Push only the task branch.
- Open one draft PR to `main`.
- Keep the PR draft and explicitly label it unpublished/blocked for production release pending approved final assets and monitored-inbox confirmation.
- Do not merge, enable auto-merge, mark ready, or deploy.

## 16. Closeout

Report:

1. controlling MTR task/work order and authority;
2. exact changed files;
3. page content and source assets used, including the absence of final image assets;
4. email and indexing verification;
5. build, focused tests, token/lint/type checks, direct-route and visual QA;
6. protected systems untouched;
7. branch, commit, and draft PR URL;
8. blockers to public release;
9. canonical Token Utilization / Recursive Self Improvement and Context Efficiency reports; and
10. exactly one next action.

## 17. Stop conditions

Stop if:

- repository identity, base SHA, clean/synchronized state, current context, task registration, MTR integrity, primary workstream, route ownership, owner routing, exact allowlist, source access, or protected boundaries conflict;
- a required file falls outside the allowlist;
- final copy would require an unsupported claim;
- a final image is necessary to make the candidate truthful;
- implementation would require changing navigation, sitemap, search, robots, contact routing, a protected system, dependency, or runtime behavior; or
- required validation cannot be completed without scope expansion.

## 18. Exit criteria

Exit only when:

- this work order exists and the exact MTR task is registered;
- `/lighting-installation` renders directly as a responsive, accessible, claims-safe, email-only draft candidate;
- Home Lighting and `HL-008` remain unchanged;
- the route is self-canonical, `noindex, follow`, and excluded from sitemap/search/navigation/homepage;
- no fabricated or unqualified image is used;
- the existing public general-contact address is reused without email-routing mutation and the monitoring caveat is recorded;
- the visible site version is `v1.0.201`;
- validation passes;
- exact scope and protected-system audits pass;
- one draft PR is open and explicitly blocked from public release pending approved assets and inbox monitoring confirmation; and
- no merge or deployment occurred.
