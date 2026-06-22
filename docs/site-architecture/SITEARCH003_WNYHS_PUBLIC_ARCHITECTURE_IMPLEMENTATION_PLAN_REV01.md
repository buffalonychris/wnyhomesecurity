# SITEARCH003 WNYHS Public Architecture Implementation Plan REV01

## 1. Purpose

This document converts `SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md` findings and `SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md` decisions into a safe phased implementation sequence for future public site architecture cleanup.

This is a docs-only implementation plan. It does not change routes, navigation, footer links, breadcrumbs, search behavior, page content, category pages, solution pages, image assets, runtime systems, or deployment configuration.

## 2. Authority

Controlling task: `T-SITEARCH001-003 - Public Architecture Implementation Plan`.

Current operational context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`.

Primary authority and source documents:

- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/codex/CODEX_RUN_CONTRACT.md`
- `docs/site-architecture/SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md`
- `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`
- `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`
- `docs/governance/CATEGORY002_WNYHS_CATEGORY_LANDING_PAGE_STRUCTURE_REV01.md`
- `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`
- `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV02.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`

If this plan conflicts with higher-authority repository governance, the higher-authority source controls.

## 3. Relationship to SITEARCH001 and SITEARCH002

`SITEARCH001` is the audit record. It documents the current state: route inventory, owner components, navigation, embedded links, search status, demo/dashboard surfaces, SEO/canonical gaps, package visibility, WNYHS Core visibility, and route conflicts.

`SITEARCH002` is the decision standard. It documents the intended public information architecture: `/` as canonical homepage, `/categories/<category-slug>` as the canonical category pattern, `/solutions/<solution-slug>` as the canonical solution pattern, packages as contextual sales/catalog constructs, Search as a future functional discovery system, and Demo/Experience ownership for demo/dashboard surfaces.

`SITEARCH003` is the implementation plan. It defines a phased roadmap of bounded future tasks that can be executed safely one PR at a time.

## 4. Implementation principles

- Execute one bounded task per PR.
- Keep every future task additive unless destructive authorization is explicit.
- Preserve current working routes until redirect or alias handling is approved.
- Preserve the Quote Review -> Agreement Review -> Payment -> Schedule protected chain.
- Preserve QR campaign routing and attribution behavior unless a future QR-specific task explicitly authorizes changes.
- Preserve CATEGORY001, CATEGORY002, CATEGORY003, and SOLUTION001 page standards during any future route or link cleanup.
- Do not use route cleanup as authority for page redesign, copy rewrites, new content, new images, or runtime behavior changes.
- Do not use SEO cleanup as authority for route deletion, content rewrites, or search implementation.

## 5. Protected-system boundaries

All phases in this plan must keep these systems untouched unless a later bounded task explicitly authorizes them:

- HubSpot schema, properties, pipeline, and sync behavior.
- `/api/lead-signal` and requestId lifecycle behavior.
- Stripe checkout, payment verification, webhook behavior, and deposit logic.
- Scheduling and calendar behavior.
- Resend/email runtime behavior.
- Quote, agreement, payment, schedule, planner, and operator runtime flows.
- API/backend runtime behavior.
- Cloudflare configuration.
- Environment variables, secrets, private URLs, tokens, and credentials.
- Dependencies and package-lock.

## 6. Phase 0 prechecks

Before any implementation phase begins, the executing task must:

- Confirm `main` is synced with `origin/main`.
- Confirm homepage route `/` is intact.
- Confirm restored `/home-security` behavior is intact before editing.
- Confirm `SITEARCH001` and `SITEARCH002` are merged.
- Confirm current route inventory before editing.
- Confirm the future task is active or explicitly prompt-created under repository governance.
- Confirm protected systems and forbidden scope for the specific phase.

Phase 0 should produce evidence only. It should not modify routes, links, navigation, footer, search, SEO files, or page content unless those edits are explicitly part of a later phase task.

## 7. Phase 1 category route creation

Purpose: create canonical category route availability without removing the current flat routes.

Canonical category routes:

- `/categories/home-security`
- `/categories/home-automation`
- `/categories/home-safety`
- `/categories/home-lighting`
- `/categories/aging-in-place`

Rules:

- Do not remove existing flat routes in the same task unless explicitly authorized.
- Preserve category page components and visual standards.
- Preserve CATEGORY001 category identity rules.
- Preserve CATEGORY002 category section order.
- Preserve CATEGORY003 image and visual parity rules.
- Do not modify page content except for the minimum route-wrapper or route-registration work explicitly authorized by the phase task.
- Do not turn route creation into a navigation, footer, sitemap, or SEO task.

## 8. Phase 2 legacy flat-route redirect/alias handling

Purpose: decide and implement redirect or alias handling for existing flat category routes after canonical category routes exist.

Legacy flat routes requiring explicit handling:

- `/home-security`
- `/home-automation`
- `/home-safety`
- `/home-lighting`
- `/aging-in-place`

Rules:

- Protect the `/home-security` homepage/history issue from repeating.
- Do not break existing indexed links, shared links, QR references, local campaign references, or internal links without explicit redirect planning.
- Decide redirect versus alias behavior before implementation.
- Do not delete a route before redirects or aliases are approved.
- Do not use this phase to change category copy, page design, or global navigation.

## 9. Phase 3 navigation correction

Purpose: align primary navigation with the SITEARCH002 decision that packages are not the default primary "Solutions" destination.

Rules:

- Header "Solutions" must not point to `/packages` if SITEARCH002 says packages are not primary navigation.
- Primary navigation should route users toward category or solution discovery.
- Contact/Estimate CTA must remain clear.
- Fit Check, Support, Our Work, and other existing customer paths must remain intentional.
- Reconcile the older locked header/footer standard with SITEARCH002 in the bounded navigation task before editing.
- Do not change footer links, breadcrumbs, search implementation, sitemap, page content, or route aliases in this phase unless explicitly included.

## 10. Phase 4 footer/link correction

Purpose: correct footer and embedded public links after canonical category and navigation decisions are implemented.

Rules:

- Audit and correct footer links.
- Correct embedded homepage/category/solution links.
- Preserve QR campaign routing.
- Preserve campaign query strings where they are part of approved campaign behavior.
- Reduce duplicate solution destinations only where canonical solution routes are approved.
- Do not alter page copy beyond link target changes unless separately authorized.
- Do not modify protected conversion routes or runtime flows.

## 11. Phase 5 search implementation

Purpose: make Search a functional public discovery system after route and content ownership are defined.

Searchable content should include:

- Categories.
- Solutions.
- Major marketing, trust, and support pages.
- Approved public education content.

Search should not index:

- Internal BOMs.
- Package IDs.
- Part numbers.
- Protected runtime pages.
- Private operational data.
- Internal docs.
- Admin/operator pages.
- API endpoints.
- Deployment details.
- Secrets.

Rules:

- Do not implement search before searchable content ownership is defined.
- Do not use search work to expose private catalog, quote, runtime, or operator data.
- Decide whether search results pages should be indexable before shipping.
- Do not change route canonicalization, navigation, footer, sitemap, or page content unless explicitly included.

## 12. Phase 6 demo/dashboard cleanup

Purpose: classify and consolidate demo/dashboard route ownership.

Scope to decide before implementation:

- Canonical demo route.
- Public, hidden, prototype-only, or internal status for each demo/dashboard surface.
- `/newsite/*` visibility.
- Whether the static dashboard HTML remains public, is linked as a demo, or is retired through a separately approved plan.

Rules:

- Preserve useful interactive demo behavior until a bounded task authorizes replacement or retirement.
- Do not remove demo routes without explicit route handling.
- Do not change protected operator or quote-system routes under demo cleanup.
- Do not use demo cleanup to redesign category, solution, homepage, or package content.

## 13. Phase 7 sitemap/robots/canonical cleanup

Purpose: align crawl and canonical references after route changes are stable.

Rules:

- Update sitemap and canonical references only after route changes are implemented and validated.
- Ensure category and solution canonical URLs match SITEARCH002.
- QR landing indexing decision must follow campaign governance.
- Demo indexing decision must follow demo ownership governance.
- Legal pages should remain accessible.
- Protected runtime, transaction, operator, prototype, and internal/system routes must not become public discovery content.
- Do not implement SEO copy changes in this phase.

## 14. Phase 8 SEO optimization preparation

Purpose: prepare page-level SEO work after the canonical route structure is stable.

Rules:

- Prepare for page-level titles, descriptions, structured data, and internal-link improvements only after route and canonical decisions are stable.
- Include future image SEO standard as a later task.
- Do not implement SEO copy changes in this task.
- Do not fabricate proof, statistics, reviews, locations, outcomes, or customer stories.
- Preserve claim-safe language and existing public copy guardrails.

## 15. Phase 9 image asset workflow reintegration

Purpose: resume governed category image workflow only after route/navigation architecture is stable.

Rules:

- Resume category image generation only after route and page ownership are stable.
- Manual ChatGPT image generation is the current fallback because OpenAI API billing/workspace is blocked.
- Generated assets must still follow IMG-CATEGORY001/002/003/004 governance.
- Generated assets must still follow CATEGORY003 asset class, thumbnail, dashboard/mobile proof, WNYHS Core, and visual parity standards.
- Do not generate image assets as part of this plan.
- Do not wire image assets into source code without a separate bounded implementation task.

## 16. Validation strategy

Every future implementation phase must run validation appropriate to its scope.

Minimum documentation/change-control validation:

- `git diff --stat`
- `git diff --name-only`
- `git diff --check`
- `git diff --cached --stat`
- `git diff --cached --name-only`
- `git diff --cached --check`

Future route/navigation/runtime-adjacent tasks should also run:

- `npm run build`
- route inventory checks for touched routes
- changed-file protected-system scan
- deleted-file scan
- forbidden public-claim scan for touched public copy
- sitemap/robots/canonical checks when SEO files are touched

Docs-only architecture planning tasks should run `npm run build` when the active work order or repository policy requires it.

## 17. Rollback strategy

Rollback should be phase-specific:

- Prefer reverting the single bounded PR that introduced the issue.
- Preserve legacy flat routes until redirect or alias handling has been validated.
- Do not delete aliases during rollback unless the rollback task explicitly authorizes it.
- Keep route creation, redirect handling, navigation, footer, search, demo cleanup, sitemap, SEO, and images in separate PRs so rollback is narrow.
- If a route migration causes uncertainty, restore the prior reachable route behavior first, then re-plan.
- If a protected system appears affected, stop and inspect changed files before any further implementation.

## 18. Required future task list

The following bounded future tasks should be created or activated before implementation:

- `T-SITEARCH002-001 - Canonical Category Route Creation`
- `T-SITEARCH002-002 - Legacy Flat Route Redirect/Alias Plan`
- `T-SITEARCH002-003 - Header Navigation Correction`
- `T-SITEARCH002-004 - Footer and Embedded Link Correction`
- `T-SEARCH001-001 - Search Architecture and Index Plan`
- `T-SEARCH001-002 - Functional Search Implementation`
- `T-DEMO001-001 - Demo/Dashboard Route Ownership Cleanup`
- `T-SEO001-001 - Sitemap/Canonical/Robots Alignment`
- `T-SEO-IMAGE001-001 - Image SEO Metadata and Structured Data Standard`
- `T-IMG-MANUAL001-001 - Manual Category Image Generation Workflow`

Recommended first implementation task: `T-SITEARCH002-001 - Canonical Category Route Creation`, after Phase 0 prechecks confirm the current route inventory and `/home-security` behavior.

## 19. Task sequencing rules

- Implementation must proceed one bounded task per PR.
- No route deletion before redirects or aliases are decided.
- No search implementation before searchable content ownership is defined.
- No demo cleanup before canonical demo ownership is decided.
- No image rollout before route and page ownership are stable.
- No SEO pass before canonical route structure is stable.
- No footer or embedded-link correction before canonical category route behavior is known.
- No navigation correction may quietly include footer, sitemap, route deletion, search, or page content work.
- No phase may touch protected systems unless a future task explicitly authorizes that protected-system scope.

## 20. Codex restrictions

Codex must not use this plan as authority to:

- Rename routes.
- Move routes.
- Add redirects.
- Implement search.
- Modify navigation.
- Modify footer links.
- Modify breadcrumbs.
- Modify page content.
- Modify category pages.
- Modify solution pages.
- Modify image-generation pipeline.
- Generate image assets.
- Touch HubSpot.
- Touch Stripe/payment.
- Touch scheduling.
- Touch planner.
- Touch quote flow.
- Touch backend/API runtime.
- Touch Resend/email.
- Touch Cloudflare config.
- Touch environment variables or secrets.
- Change dependencies or package-lock.

Every future implementation task must have its own active task-register entry or explicitly bounded prompt-created work order permitted by higher-authority governance.

## 21. Success criteria

This plan is successful when:

- `SITEARCH003_WNYHS_PUBLIC_ARCHITECTURE_IMPLEMENTATION_PLAN_REV01.md` exists.
- The implementation sequence covers Phase 0 through Phase 9.
- Each phase has clear boundaries and forbidden adjacent work.
- The required future task list is documented.
- Task sequencing rules are documented.
- Protected-system boundaries are documented.
- Recommended first implementation task is documented.
- `docs/system/master-task-register.md` is updated.
- `docs/DOCUMENT_CATALOG.md` is updated.
- `docs/MARKDOWN_MANIFEST.md` is updated.
- No source, route, navigation, footer, breadcrumb, search, page-content, category, solution, image, runtime, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, dependency, package-lock, environment, or secret files are changed.
