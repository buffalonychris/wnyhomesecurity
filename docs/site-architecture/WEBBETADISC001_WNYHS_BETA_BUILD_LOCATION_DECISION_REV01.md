# WEBBETADISC001 WNYHS Beta Build Location Decision REV01

## 1. Document control

- **Status:** RECOMMENDED ARCHITECTURE — REQUIRES SEPARATE IMPLEMENTATION TASK
- **Task ID:** WEBBETADISC001
- **Owner:** Site Architecture
- **Document type:** Architecture decision record
- **Implementation authority:** None
- **Infrastructure authority:** None
- **Decision date:** 2026-07-26
- **Revision:** REV01

## 2. Decision

The recommended canonical beta build location is:

```text
C:\dev\wnyhomesecurity\apps\wnyhs-beta\
```

Repository-relative:

```text
apps/wnyhs-beta/
```

The location should become a self-contained web application inside the existing `buffalonychris/wnyhomesecurity` repository, with:

- its own application source;
- its own package manifest and lockfile unless the later foundation task approves a repository-wide workspace model;
- its own build output;
- no import dependency on production `src/`, `functions/`, or `api/` paths by default;
- a separate Cloudflare Pages project;
- a protected, visibly labeled, non-indexed beta hostname;
- isolated environment-variable scope;
- isolated or disabled analytics;
- inert or test-only forms and integrations until separately authorized; and
- a separately authorized migration path into production.

This decision selects the architectural location. It does not create the directory, application, Cloudflare project, hostname, configuration, environment, or deployment.

## 3. Repository findings

### 3.1 Current application

- The repository root is a single React 18 + TypeScript + Vite application.
- Root `package.json` controls the production build through `tsc -p tsconfig.app.json && vite build`.
- There is one root `package-lock.json`.
- No `pnpm-workspace.yaml`, `turbo.json`, or `lerna.json` is present.
- No tracked `wrangler.toml` is present.
- No `.openai/hosting.json` is present on current `main`.
- Cloudflare Pages is the repo-documented production hosting target.
- The repo-documented Pages project candidate is `wnyhomesecurity`; the live dashboard, production branch, preview policy, custom domains, build settings, deployment protection, and environment scope were not inspected by this task.

### 3.2 Production and protected runtime share one root

The root application includes:

- public marketing and category routes;
- solutions, search, support, contact, and campaign routes;
- planner, quote, agreement, print, resume, verification, payment, success/cancel, and scheduling routes;
- operator routes;
- Cloudflare Pages Functions under `functions/api/`;
- additional server/API files under `api/`;
- HubSpot lead synchronization;
- Stripe checkout, verification, and webhook behavior;
- scheduling availability, request, confirmation, and Google Calendar behavior;
- QR attribution and analytics.

The root `public/_redirects` applies:

```text
/api/*  /api/:splat  200
/*      /index.html 200
```

This confirms that the production application, SPA fallback, and API routing are coupled at the root deployment boundary.

### 3.3 Existing `/newsite` area is not isolated

The repository contains `src/newsite/**` and route declarations under `/newsite/*`.

That area:

- is compiled by the production root Vite build;
- is registered in production `src/App.tsx`;
- shares the root dependency graph;
- shares the production deployment artifact;
- sits beside protected quote, agreement, payment, and scheduling paths;
- is publicly reachable unless separately controlled; and
- has already been identified by SITEARCH governance as requiring visibility and canonical cleanup.

Therefore, continuing a replacement beta under `src/newsite/**` or another production route prefix would repeat the exact coupling this program is intended to avoid.

### 3.4 Existing ChatGPT Sites prototype lane

`T-SITEPROTOTYPE001` is an active, separately governed private-prototype lane with:

- a dedicated prototype branch;
- a managed worktree;
- a fixed source baseline;
- an existing Sites project ID recorded in its work order;
- owner-only access requirements;
- source/version/deployment provenance rules; and
- an explicit prohibition on production reconciliation without another task.

That lane is valuable for visual and interaction exploration. It is not production authority and does not currently establish the canonical beta application, Cloudflare beta environment, or migration architecture.

## 4. Decision criteria

Options were evaluated against:

- production isolation;
- design capability;
- development speed;
- approved asset and governance reuse;
- beta/production comparison;
- preview and review quality;
- deployment safety and rollback;
- analytics and SEO isolation;
- access control;
- maintainability;
- migration path;
- preservation of funnels and runtime;
- Cloudflare compatibility;
- future content administration;
- HubSpot and Google Workspace compatibility;
- future customer and internal modules;
- dark/light/temporary theme testing; and
- prevention of accidental production changes.

## 5. Options considered

### Option A — Dedicated self-contained beta application inside this repository

**Candidate:** `apps/wnyhs-beta/`

**Advantages**

- Strong source and build boundary without losing repository governance.
- One repository retains doctrine, standards, history, assets, issues, and review.
- Separate Cloudflare Pages project can use a project root and build command specific to the beta app.
- Independent application can be compared with production and removed without changing the production root app.
- Provides room for a modern content, theme, accessibility, and component architecture.
- Keeps eventual migration review in one Git history.
- Can later expose contracts to customer/internal modules without placing them inside public navigation.

**Disadvantages**

- Introduces a second application and duplicate dependency management.
- Approved asset sharing must be explicit; direct imports from production would weaken isolation.
- Root-level workspace conversion would require a separate architecture decision if desired.
- Cloudflare project-root, build, preview, and access settings still require live dashboard verification.

**Risk:** Low-to-medium when created through a bounded foundation task.

### Option B — Dedicated subdirectory inside the existing production application

**Candidate:** another `src/*` namespace and route prefix.

**Advantages**

- Fastest initial development.
- Immediate reuse of production dependencies and components.

**Disadvantages**

- Shares the router, build, bundle, functions, environment, deployment, and production failure domain.
- Beta work can accidentally affect production.
- Preview and analytics isolation are weak.
- Repeats the existing `/newsite` coupling.

**Decision:** Rejected.

### Option C — Convert the repository to a formal monorepo and add a beta app/package

**Advantages**

- Strong long-term sharing through explicit packages.
- Clear multi-application architecture.

**Disadvantages**

- The repository is not currently a monorepo.
- Converting root tooling, lockfiles, CI, and Cloudflare build behavior expands risk before the beta proves its needs.
- Could disturb production for infrastructure convenience.

**Decision:** Deferred. A later task may propose workspace conversion only if independent-app experience proves shared packages are necessary.

### Option D — Branch-only preview of the root production application

**Advantages**

- Uses existing Cloudflare preview behavior if enabled.
- Minimal structural work.

**Disadvantages**

- Still uses the production application root and protected functions.
- Branch drift and accidental merge risk remain.
- Preview access, environment separation, and deployment policy are currently unverified.
- Does not provide a durable isolated application boundary.

**Decision:** Rejected as the canonical beta location. Branch previews may validate bounded production changes later.

### Option E — Protected beta subdomain only

**Advantages**

- Clear reviewer URL and public separation.
- Can be protected and non-indexed.

**Disadvantages**

- A hostname is a deployment surface, not a source/build boundary.
- If backed by the production root app, it does not solve coupling.

**Decision:** Required as part of Option A, not sufficient by itself.

### Option F — Separate repository

**Advantages**

- Maximum Git and dependency isolation.
- Separate permissions and deployment pipeline.

**Disadvantages**

- Splits governance, assets, decisions, issues, and migration history.
- Increases drift and makes one-owner-per-fact discipline harder.
- Requires cross-repository promotion and reconciliation.
- No compelling current evidence requires the stronger boundary.

**Decision:** Rejected unless a later security, team-access, deployment, or lifecycle requirement proves same-repository isolation insufficient.

### Option G — ChatGPT Sites as the canonical beta

**Advantages**

- Excellent rapid visual and interactive prototyping.
- Owner-only deployment and review are governed.
- Existing T-SITEPROTOTYPE001 evidence and source lane already exist.

**Disadvantages**

- Every Sites URL is a real hosted deployment and requires its own provenance controls.
- Current work-order history records source-transport limitations.
- Sites prototype output is explicitly not production authority.
- Production reconciliation requires another bounded task.
- It does not by itself establish the final Cloudflare application, runtime, integration, SEO, or migration boundary.

**Decision:** Retain as an optional/private visual-concept and usability lane. Do not make it the canonical beta application.

### Option H — Separate local worktree of the root application

**Advantages**

- Useful Git isolation for parallel work.

**Disadvantages**

- A worktree does not create application, build, runtime, analytics, or deployment isolation.

**Decision:** A future task may use a worktree operationally, but it is not the beta architecture.

## 6. Why Option A is preferred

Option A is the smallest boundary that separates beta source, build, deployment, environment, indexing, analytics, and test integrations while preserving one durable governance repository.

It avoids:

- coupling to `src/App.tsx`;
- another public `/newsite`-style route tree;
- accidental inclusion of production `functions/api/`;
- dependency on unverified root preview behavior;
- a premature monorepo conversion;
- cross-repository governance drift; and
- treating a design prototype as a deployable beta application.

## 7. Required isolation plan

A future `WEBBETAFOUND001` task must explicitly decide and validate:

1. **Source root:** `apps/wnyhs-beta/`.
2. **Build root:** the beta app only.
3. **Build output:** a beta-specific output directory.
4. **Dependencies:** beta-local manifest/lockfile unless a separately approved workspace model controls.
5. **Shared assets:** copy or package only operator-approved reusable assets; no implicit production imports.
6. **Functions:** no production `functions/` or `api/` inclusion by default.
7. **Environment:** beta-only names/scopes and no secret values in repository docs.
8. **Analytics:** separate property/stream or disabled until approved.
9. **Forms:** inert/local/mock/test destination until authorized.
10. **CRM:** no production HubSpot write.
11. **Payments:** no production Stripe keys, sessions, webhooks, or payment truth.
12. **Scheduling:** no production calendar write or customer confirmation.
13. **QR and attribution:** beta-only test identifiers; no production campaign contamination.
14. **Content:** synthetic or approved non-sensitive beta content.
15. **Access:** Cloudflare Access or equivalent protection when appropriate, plus visible beta labeling.
16. **Indexing:** layered noindex controls and no production sitemap inclusion.
17. **Deployment:** separate Pages project and manual approval.
18. **Rollback/removal:** delete or disable the beta project/host without altering production.

## 8. Preview and deployment plan

Recommended future topology:

```text
Git repository
└── apps/wnyhs-beta/
    └── independent beta build
        └── separate Cloudflare Pages project
            └── protected beta host
```

The final Pages project name and hostname require live Cloudflare inspection and operator approval. Candidate naming may include:

- project: `wnyhomesecurity-beta`;
- Pages preview domain supplied by Cloudflare; and
- later protected custom host such as `beta.wnyhomesecurity.com`.

These are candidates, not authorized configuration.

## 9. Indexing policy

Until a separate production-readiness task:

- no beta URL belongs in the production sitemap;
- beta HTML must declare `noindex, nofollow`;
- a beta-specific robots policy should disallow crawling where appropriate;
- access control should provide a stronger barrier when practical;
- canonical tags must not claim production URLs unless a later SEO task defines safe preview behavior;
- beta analytics and Search Console properties must not contaminate production reporting;
- removing noindex or access control requires explicit operator authorization.

## 10. Eventual migration path

Migration should be staged:

1. Approve beta experience, content, design, performance, accessibility, SEO, and conversion behavior.
2. Inventory production-only protected flows and decide which remain separate, are integrated, or are replaced.
3. Define canonical routes and redirect behavior.
4. Reconcile environment and integration contracts.
5. Run production-like validation in a non-production environment.
6. Create a separate production-migration task with exact source/config/data/domain allowlists.
7. Preserve the last known good production deployment.
8. Use manual merge and deployment approval.
9. Monitor and retain a rapid rollback path.
10. Retire the beta host only after operator confirmation.

No code-copy or domain-cutover mechanism is selected by this decision.

## 11. Relationship to internal modules

The beta app should expose future contracts or navigation boundaries, not internal modules.

Future customer, owner, employee, installer, KAOS, quote, inventory, procurement, deployment, dashboard, support, and warranty applications may later be:

- separate applications;
- separately authenticated routes;
- services connected by API/event contracts; or
- external systems of record.

Their architecture must not be decided by convenience inside the public beta.

## 12. Unresolved technical questions

Before `WEBBETAFOUND001` is issued, the operator or a bounded read-only infrastructure task must resolve:

- current Cloudflare Pages production branch, build root, output, custom domains, preview policy, and access controls;
- whether the beta should first use a Cloudflare-supplied host or a protected custom subdomain;
- authentication/access-control choice for reviewers;
- beta-local package manager and lockfile approach;
- whether any approved brand assets are copied, packaged, or regenerated;
- beta environment-variable naming and secret-management scope;
- beta analytics platform and isolation;
- safe form, CRM, scheduling, and payment test destinations;
- whether T-SITEPROTOTYPE001 remains a visual-concept input, is completed first, or is later superseded through a separate governance task;
- migration mechanics after beta acceptance.

These questions do not block this location recommendation. They block implementation details.

## 13. Production-protection conclusion

The current root application and `/newsite` tree are not acceptable canonical beta locations because they share the production failure and deployment boundary.

The same repository remains preferred because it preserves durable governance and traceability. The new beta must therefore be isolated at the application and Cloudflare project levels inside that repository.

## 14. Implementation gate

Do not create `apps/wnyhs-beta/` from this decision.

Creation requires `WEBBETAFOUND001` or another separately approved task with:

- confirmed live hosting evidence;
- exact files and configuration;
- package/dependency decisions;
- environment and secret rules;
- access and indexing controls;
- test-integration behavior;
- validation;
- dedicated branch and commit;
- draft PR;
- no production merge or deployment without separate approval.
