# T-SITEPROTOTYPE001 Work Order - Build and Refine the WNYHS Next-Generation ChatGPT Sites Prototype - REV01

Status: Ready for execution only after this work order is reviewed and merged
Task ID: `T-SITEPROTOTYPE001`
Implementation authority: Bounded private ChatGPT Sites prototype only after merge
Customer-production authority: No

## 1. Repository and controlling context

- Repository: `buffalonychris/wnyhomesecurity`
- Local repository: `C:\dev\wnyhomesecurity`
- Controlling context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`
- Context authority: `docs/system/step-current.md`
- Execution authority chain: `AGENTS.md` and `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`.
- This work order is durable execution context. Do not depend on the dispatch chat for requirements.
- Stop if the exact controlling context changes or a higher-authority document conflicts with this work order.

## 2. Task ID, name, status, and category

- Task ID: `T-SITEPROTOTYPE001`
- Task name: Build and refine the WNYHS next-generation ChatGPT Sites prototype
- Required task-register status at execution: `ACTIVE`
- Category: `SITE`
- Validation tier: `SITE`
- Task posture: create and iteratively refine one new private, source-backed prototype; do not reconcile it into production.
- The task remains `ACTIVE` throughout prototype iteration. Do not mark it `DONE` without a separately authorized final closeout instruction.

## 3. Primary and related workstreams

- Primary workstream: ChatGPT Sites
- Related workstreams: Site Architecture; Categories; Solutions; Brand; Marketing; UX; Conversion
- Routing owner: `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`, ChatGPT Sites section.
- Current-state pointer: `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md`, ChatGPT Sites status section. OPS005 is a status summary, not implementation authority; the current context and Master Task Register control status conflicts.
- Related workstreams constrain design and validation but do not expand scope.

## 4. Read mode and execution client

```text
READ MODE: TARGETED
Search exact IDs/headings first; load only applicable authority and owner sections.
```

- Use exact task-ID, heading, path, status, and owner-section searches before reading.
- Do not broadly reload the Master Task Register, Document Catalog, Markdown Manifest, status board, audits, inventories, catalogs, or historical governance.
- Reference stable rules by repository path instead of pasting them into every iteration prompt.
- Actual prototype execution must use the **ChatGPT Windows App with Codex** because the task requires ChatGPT Sites, integrated browser access, Sites source/version/deployment tooling, and visual review.
- Repository documentation, branch preparation, and later production-reconciliation tasks may use Codex CLI. The Sites build, Site save/version action, private deployment, access verification, and Sites visual review must run in the ChatGPT Windows App with Codex.
- Use the best currently approved full-capability Codex model available with elevated reasoning for provenance, access, and protected-boundary checks; do not hard-code a model name.

## 5. Objective

Create from scratch and iteratively refine one owner-only ChatGPT Site that serves as a non-production design benchmark for a future WNYHS public experience.

The prototype must make the customer journey understandable and compelling without generic smart-home gadget positioning. It must communicate:

- one unified smart-property system and control plane;
- local-first operation where supported;
- privacy-first design;
- customer-owned equipment, automations, and data;
- expandable architecture without replacing the core whenever capabilities are added;
- preservation of obvious physical controls;
- no required WNY Home Security subscription for core local functionality where supported;
- separate fees or requirements for optional third-party services where applicable;
- professional design and installation; and
- Western New York local-market relevance.

The prototype must address overall public information architecture, homepage, interactive property/control-plane visualization, problem-first discovery, progressive disclosure, six-category explorer, governed solution catalog, search, filtering, category pages, solution-detail experiences, internal linking, CTA placement, assessment journey, mobile behavior, accessibility, visual polish, SEO design intent, analytics-event design intent, and funnel-handoff boundaries. It must not invent live production integrations.

## 6. Authorization and required precheck

Before any prototype source, worktree, Sites configuration, Site, version, or deployment action:

1. Confirm the repository is exactly `C:\dev\wnyhomesecurity`.
2. Confirm local `main` is clean and synchronized with `origin/main`.
3. Read the exact controlling context identifier from `docs/system/step-current.md` and confirm it is `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`.
4. Confirm `T-SITEPROTOTYPE001` appears exactly once in `docs/system/master-task-register.md`, is `ACTIVE`, uses `Category: SITE`, and uses `Primary Workstream: ChatGPT Sites`.
5. Confirm `T-CODEXGOVCONSOL001` is `DONE`.
6. Confirm SITE remains authorized in the SITE category section of `docs/codex/CODEX_TASK_REGISTER_RULES.md`.
7. Confirm ChatGPT Sites remains open/authorized and routed in the current context, OPS004, and OPS005.
8. Confirm this work order exists on synchronized `main` and remains current.
9. Confirm no equivalent open PR, remote branch, managed worktree, or active Site exists for this task.
10. Confirm the prior exploratory prototype will not be reused. Create a new ChatGPT Site from scratch only after the remaining prechecks pass.
11. Create a dedicated prototype branch from synchronized `origin/main` and a managed worktree isolated from `main`. Record both exact paths/names. Never implement directly on `main`.
12. In Iteration 0, produce an exact proposed source-file ledger within the boundary in section 9 and obtain operator approval before source edits.
13. Inspect `.openai/hosting.json` in the managed worktree before any Sites creation call. If it does not exist, treat it as having no `project_id`; do not create it until the new Site is created successfully.
14. Confirm owner-only access is available and can be verified before any deployment.
15. Confirm protected systems, forbidden paths, current production source, and Cloudflare production are untouched.

Stop on a failed or ambiguous precheck. Capability access is not authorization.

## 7. Required authority and owner documents

Read only the applicable sections, in authority order:

### Core execution and routing

- `AGENTS.md`
- `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- `docs/system/step-current.md`
- exact `T-SITEPROTOTYPE001` and `T-CODEXGOVCONSOL001` records in `docs/system/master-task-register.md`
- SITE category section in `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- ChatGPT Sites section in `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
- ChatGPT Sites section in `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md`

### Categories, architecture, and solution content

- `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV02.md`
- applicable category-page structure in `docs/governance/CATEGORY002_WNYHS_CATEGORY_LANDING_PAGE_STRUCTURE_REV01.md`
- `docs/site-architecture/SITEARCH005_WNYHS_SIX_CATEGORY_RECONCILIATION_DECISION_REV01.md`
- applicable sections of `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`
- applicable transition protections in `docs/site-architecture/SITEARCH004_WNYHS_LEGACY_CATEGORY_ROUTE_TRANSITION_PLAN_REV01.md`
- applicable solution-page structure in `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV02.md`
- `docs/catalogs/WNYHS_CUSTOMER_SOLUTION_CATALOG_REV01.md`
- public-eligibility/status fields only from `docs/catalogs/WNYHS_INTERNAL_SOLUTION_ARSENAL_REV01.md`
- `docs/marketing/WNYHS_NEW_SOLUTIONS_PUBLIC_CONTENT_SPEC_REV01.md`
- `docs/marketing/WNYHS_NEW_SOLUTIONS_COMMERCIAL_TRACEABILITY_MATRIX_REV01.md`

### Brand, visual, copy, and conversion boundaries

- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- applicable public-copy rules in `docs/system/guardrails.md`
- `docs/solution-system/CLAIMS001_WNYHS_UNIFIED_CLAIMS_GUARDRAIL_ADDENDUM_REV01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/main_funnel_contract_rev01.md`
- current CTA, Fit Check, Precision Planner, estimate/contact, attribution, analytics, and protected-runtime contracts only where required to define a demonstrative boundary.

If a desired prototype treatment conflicts with a locked owner standard, stop for a governance/work-order revision. Operator iteration approval does not silently supersede repository authority.

## 8. Required work and iteration model

Build a coherent baseline, then work in section-level batches. Isolated one-line edits are not the normal workflow. After the baseline exists, uncontrolled full-site rewrites are forbidden.

Every material iteration must:

1. name the exact authorized section set and exact approved source-file ledger;
2. change only that section set and file ledger;
3. validate locally at SITE tier;
4. commit the exact source state;
5. push the configured source branch;
6. verify the branch HEAD and record its full commit SHA;
7. save exactly one Site version from that source state;
8. deploy that saved version privately only after owner-only access is verified;
9. return the complete evidence in section 15; and
10. stop for explicit operator review and approval before the next material iteration.

Required sequence:

- **Iteration 0 - Setup and baseline:** prepare the isolated branch/worktree; approve the exact source-file ledger; inspect `.openai/hosting.json`; create the new Site only under the one-time rule; persist the exact project ID; validate the untouched baseline; define the traceability record. Do not deploy an uncommitted or unpushed source state.
- **Iteration 1 - Global shell:** visual system, semantic tokens, typography, spacing, navigation, header, and footer. Preserve current locked standards unless governance is revised.
- **Iteration 2 - Unified story:** homepage hero and unified smart-property control-plane story, including an understandable interactive property/control-plane visualization.
- **Iteration 3 - Discovery:** problem-first discovery and progressive-disclosure journey.
- **Iteration 4 - Categories:** the exact six-category explorer.
- **Iteration 5 - Solutions:** governed solution-library experience, search, filtering, category/solution detail experiences, and internal linking.
- **Iteration 6 - Conversion:** CTA hierarchy, assessment journey, and explicit Fit Check, Precision Planner, estimate, quote, agreement, deposit, success/cancel, scheduling, contact, and support handoff boundaries.
- **Iteration 7 - Benchmark:** mobile, accessibility, performance, SEO/analytics design intent, restrained motion, visual polish, and final private benchmark.

### Customer-experience and content requirements

- Lead with customer problems, property outcomes, and a unified system—not devices, protocols, dashboards for their own sake, or gadget grids.
- Use progressive disclosure so technical detail never dominates the first view.
- Preserve this exact complete-list order:
  1. Home Security
  2. Aging in Place
  3. Home Safety
  4. Home Automation
  5. Home Lighting
  6. Property Management
- `Home Safety` is public-canonical. `Environmental Safety` may appear only as an internal, historical, SEO-supporting, or documented alias that resolves to Home Safety.
- Reuse governed Solution objects and public-eligibility status. Do not expose internal-only, hold, research, BOM, part-number, pricing, or operational content.
- Keep `/` as homepage design intent, `/categories/<category-slug>` as category intent, and `/solutions/<solution-slug>` as solution intent. Do not treat prototype routes as production route authority or add production redirects.
- Preserve the problem-first discovery relationship `Homepage -> Category -> Solution -> Estimate / Contact`, with direct-entry usability.
- Search/filter design may match customer-language concerns but must not index internal data or imply a live production search service.
- SEO work is design intent only: hierarchy, discoverability, metadata concepts, canonical intent, internal links, and structured-data recommendations. Do not change production SEO, sitemap, robots, redirects, or indexing.
- Analytics-event work is design intent only. Because no single promoted analytics owner exists, do not add a tracker, SDK, event emission, identity, payload, CRM property, or live instrumentation.

### Design standard

- Premium, modern, editorial, immersive, calm, and highly legible.
- Black, gold, and white/warm-neutral brand posture consistent with current owners.
- Semantic tokens only; no hardcoded visual primitives outside the governed token system.
- Inter for body/UI and Manrope for headings unless a current owner revision changes that rule.
- Restrained animation and interaction; meaningful hierarchy; mobile-first behavior; no information overload or unnecessary technical controls.
- Task-oriented customer experience with clear next actions.
- No fantasy, militarized, tactical, cyberpunk, alarmist, or operator-themed drift.
- No inaccessible low-contrast text, color-only meaning, auto-playing motion, or animation that blocks usability.
- Preserve obvious physical controls and practical fallback language.

### Copy and claims

- Use conditional, site-reviewed language for local-first behavior, equipment support, remote access, subscriptions, and third-party services.
- Do not claim or imply central-station monitoring, WNYHS monitoring/monitored service, WNYHS dispatch, “we respond,” police/authorities/emergency-services response, guaranteed prevention, guaranteed safety, medical monitoring, caregiver replacement, WNYHS ownership of customer equipment, or required monthly WNYHS fees where none are required.
- Do not publish “first in Western New York” or similar market-leadership language unless separately evidenced and approved.
- Do not imply universal compatibility, zero-cloud operation in every case, no fees in every configuration, or that sensors eliminate property risk.

### Conversion and CTA posture

- Prototype CTAs may demonstrate navigation and state only; they must not create unauthorized live submissions, writes, requests, payments, bookings, messages, or stored customer data.
- Preserve production boundaries around Fit Check, Precision Planner, estimate requests, quote review, agreement review, Stripe deposit, success/cancel, scheduling, contact, and support.
- Any non-submitting interaction must say clearly that it is a prototype and does not submit or store information.
- Use “Request Estimate” or “Request On-Site Estimate” rather than scheduling language unless a separately authorized live route actually performs customer-confirmed scheduling.
- Do not invent a new form, payload, API event, CRM field, request ID, tracker, booking path, payment behavior, or support workflow.

## 9. Allowed scope and target files

### Prototype isolation

- Use one dedicated prototype branch and one managed worktree isolated from `main`.
- The managed worktree is the only writable repository workspace during prototype execution.
- Do not reuse `src/newsite/**` or any previous exploratory prototype unless the operator first revises this work order explicitly.
- Create one new ChatGPT Site from scratch for this task.
- Do not modify, deploy, or replace the current Cloudflare production application. Changes committed only to the dedicated unmerged prototype branch are prototype source, not production authority.

### Source boundary

Iteration 0 must inventory and present an exact file-by-file allowlist for operator approval. The allowlist may select presentation-only files from these namespaces in the managed worktree:

- `src/App.tsx` only when needed for isolated prototype route composition;
- `src/components/**`;
- `src/content/**`;
- `src/pages/**`;
- `src/layouts/**`;
- `src/styles/**`;
- `src/assets/**`;
- `public/**` for already approved public assets only; and
- `.openai/hosting.json` solely for exact Sites `project_id` persistence.

No source file is authorized merely because it is inside a candidate namespace. Each material iteration may edit only the exact operator-approved file ledger for its authorized section set. New presentation-only files must also be named in that ledger. Any required file outside this boundary is a stop condition and requires a work-order revision.

Explicit exclusions override the candidate namespaces: `src/newsite/**`; protected funnel, quote, agreement, payment, scheduling, planner, email, CRM, attribution, analytics, and runtime files; `api/**`; `functions/**`; configuration/build files; dependency manifests; lockfiles; environment files; generated credentials; and customer data.

### Sites project ID rule

- Inspect `.openai/hosting.json` first.
- Call `create_site` only when `.openai/hosting.json` has no `project_id`.
- Never call `create_site` more than once for the same local prototype source.
- Persist the exact `project_id` returned by `create_site`, unchanged, in `.openai/hosting.json`.
- Never derive, replace, normalize, or guess a `project_id` from a title, slug, hostname, or URL.
- Never expose or persist short-lived source repository credentials.
- If creation succeeds but project-ID persistence or verification fails, do not call `create_site` again; stop and preserve the returned non-secret identifier for operator recovery.

### Source/version/deployment traceability

Maintain one exact chain among:

- prototype branch;
- managed worktree path;
- configured source branch;
- full source commit SHA;
- `.openai/hosting.json` `project_id`;
- saved Site version ID;
- user-facing Site version number;
- deployment ID;
- deployment URL; and
- access posture.

Call `save_site_version` only after source validation passes, all authorized source is committed and pushed, `commit_sha` equals the current full `HEAD` of the configured pushed source branch, and any source archive comes from that exact committed state. Never save from dirty, uncommitted, unpushed, mismatched, or unverifiable source.

### Private access

- Require owner-only access throughout prototype development.
- Use `deploy_private_site_version` only after owner-only status is verified.
- Do not make a public/shared deployment or change access groups without explicit operator approval in a revised bounded instruction.
- Treat every returned Sites URL as a real hosted deployment, even when private.

## 10. Reference-only inputs

All documents in section 7, current application source, current production routes, `.openai/hosting.json` during initial inspection, brand assets, solution catalogs, and current runtime contracts are reference-only unless an exact later iteration ledger authorizes a presentation file under section 9.

Reference-only evidence must not be copied into a parallel owner system. Do not modify governance documents, catalogs, standards, task records, status boards, production evidence, or historical lineage during prototype execution. Do not infer public eligibility from internal catalog presence alone.

## 11. Forbidden scope and protected systems

The following are forbidden:

- current Cloudflare production website, `wnyhomesecurity.com` DNS/hosting, Cloudflare configuration, production deployment, production routes, redirects, sitemap, robots, or canonical behavior;
- production APIs and runtime, including HubSpot/CRM and `/api/lead-signal`;
- Stripe, deposit/payment/session/webhook authority, success/cancel authority, and payment verification;
- scheduling/calendar ownership or customer-authoritative booking;
- Resend/email, support/contact delivery, or external messages;
- Home Assistant runtime, customer instances, automations, dashboards, or device configuration;
- production analytics, trackers, events, identities, or third-party scripts;
- QR attribution, source attribution, Lead Signal, and `requestId` contracts;
- quote, agreement, payment, success/cancel, schedule, Precision Planner, Fit Check, contact, support, or current production funnel behavior;
- environment variables, secrets, credentials, private URLs, customer data, or access tokens;
- dependencies, `package.json`, `package-lock.json`, or other lockfiles unless a separate revised work order explicitly authorizes them;
- access-group changes, public/shared Sites deployment, domain cutover, production reconciliation, or replacement of current production source;
- adjacent task activation/status changes, merge, auto-merge, or ready-for-review transition.

Prototype interactions must never exercise or write to external production systems. Visual representations of protected flows must be inert, clearly labeled, and use no real customer data.

## 12. Additive/destructive posture and version rule

- Use additive, surgical, section-scoped prototype changes.
- Preserve current working systems, routes, contracts, source history, and approved assets.
- No destructive production change, broad cleanup, dependency change, or historical deletion is authorized.
- A private Sites prototype is not customer-production authority.
- No domain cutover, Cloudflare reconciliation, production deployment, merge into `main`, or production-source replacement is allowed in this task.
- Every material prototype iteration requires exactly one saved Site version after its exact validated commit is pushed.
- A separate bounded reconciliation or production implementation task is required after operator approval. That later task must decide whether approved prototype elements are used as a visual specification, selectively ported, structurally reconciled, or implemented through a production PR.

## 13. Validation tier and exact checks

Tier: `SITE`

Run per material iteration and record exact results:

```powershell
git status --short
git diff --name-only
git diff --stat
git diff --check
git ls-files --deleted
npm run build
```

Also run typecheck/lint where applicable to the approved source ledger and the repository scripts available on that branch. Do not add tools or dependencies to satisfy validation.

Required per-iteration evidence:

- changed-file audit against the exact approved ledger;
- unexpected-delete check;
- source build and applicable typecheck/lint;
- `npm run check:tokens` or the current governed semantic-token scan;
- targeted claims scan for forbidden monitoring, dispatch, emergency-response, guarantee, medical, universal-fee, and market-leadership language;
- exact six-category order check;
- protected-file audit covering `api/**`, `functions/**`, protected source files, dependencies/lockfiles, environment files, `.openai/hosting.json` scope, and production configuration;
- mobile and desktop visual review at representative narrow and wide viewports;
- keyboard navigation, logical tab order, visible focus state, semantic headings, labels, contrast, zoom/reflow, and reduced-motion review;
- broken-link and interaction review, including inert-prototype labels and no live submissions;
- reasonable performance review without adding production telemetry;
- full source SHA / project ID / saved version / deployment traceability proof;
- owner-only access confirmation for the deployed version;
- production-separation confirmation; and
- confirmation that external production systems were neither changed nor exercised.

Validation must not require production systems to be changed or exercised. A protected boundary that cannot be validated without live mutation is confirmed by changed-file/source audit and inert-flow review, not by invoking production.

## 14. Git, branch, commit, and delivery requirements

- Start from clean, synchronized `main` and create a fresh dedicated prototype branch plus managed worktree.
- Suggested execution branch: `site/t-siteprototype001-private-prototype-rev01`.
- Keep one task on the branch. Never commit directly to `main`.
- Stage only the exact approved iteration ledger plus `.openai/hosting.json` when its project-ID rule authorizes that file.
- Use iteration-specific commit messages such as `T-SITEPROTOTYPE001 iteration 3 refine problem-first discovery`.
- Push each validated iteration commit before saving a Site version.
- Do not open a production-reconciliation PR, merge, enable auto-merge, or mark any draft ready for review during prototype execution.
- If an archival draft PR is later required for the prototype branch, it needs explicit operator instruction and must remain draft against `main`; its existence does not authorize merge or production deployment.

## 15. Required closeout and Token Utilization / RSI Report

After every material iteration, return and then stop for operator review:

1. Codex client used (`ChatGPT Windows App with Codex` for Sites execution)
2. Task ID
3. Iteration number and exact authorized section set
4. Prototype branch
5. Managed worktree path
6. Full commit SHA and configured source branch
7. Exact files changed
8. Build, typecheck/lint, and all validation results
9. Sites `project_id` persistence confirmation without credentials or secret-bearing output
10. Saved Site version ID and user-facing Site version number
11. Deployment ID
12. Private deployment URL
13. Verified owner-only access posture
14. Source/version/deployment traceability result
15. Limitations, assumptions, and unresolved risks
16. Protected-systems confirmation
17. No-production-change confirmation
18. No-merge/auto-merge/ready-for-review confirmation
19. Explicit operator-review gate and the exact approval needed for the next iteration
20. Token Utilization / RSI Report

The RSI report must state `Exact token metrics not visible in Codex.` when exact metrics are unavailable, then report observable proxies: files read and essential files; full/broad reads and justification; files modified; tool/terminal and validation commands; retries/failures; redundant reads; elapsed time where visible; context pressure; prompt-compression lesson; chat-derived context promoted into repository docs; and a recommended shorter next-iteration prompt pattern.

## 16. Stop conditions and exit criteria

### Stop conditions

Stop without guessing or repeating broad operations if:

- repository, synchronized clean base, controlling context, ACTIVE task status, SITE category, ChatGPT Sites routing, work-order authority, source boundary, or exact file ledger is missing or ambiguous;
- the previous exploratory prototype would need to be reused;
- an equivalent branch, worktree, Site, version, deployment, or PR would create duplicate authority;
- source integrity, current branch HEAD, push state, source archive provenance, exact project ID, saved-version provenance, deployment provenance, or owner-only access cannot be verified;
- `.openai/hosting.json` already contains a project ID whose provenance is unclear;
- a requested experience conflicts with locked brand/layout/navigation, category, route, claims, funnel, runtime, or protected-system authority;
- a required file is outside the section 9 boundary or iteration ledger;
- validation fails after the permitted retry/fallback sequence;
- completing the work would require production, Cloudflare, protected-system, dependency, secret, customer-data, access-group, public/shared deployment, or adjacent-task changes.

For command-runner, sandbox, Sites, patch, or helper failures: capture the non-secret failure; retry the same operation at most once when safe; then use one smaller targeted fallback. Do not repeat broad read batches, blindly repeat deployments, or rotate Sites credentials unless the existing credential is unusable. Never call `create_site` again after a successful creation response.

### Exit criteria

This work order is successfully executed only when Iterations 0 through 7 have each passed validation, been committed and pushed, produced one traceable saved Site version and verified owner-only private deployment where authorized, returned complete evidence, and received explicit operator approval before the next material iteration. The final result remains private, non-production, unmerged, and separate from Cloudflare and all protected systems.

Exit does not authorize production use. After final operator approval, create a separate bounded reconciliation or production implementation task; do not activate or execute it by inference.
