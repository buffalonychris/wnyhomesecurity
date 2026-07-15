# Document Catalog

This catalog inventories all Markdown (`.md`) files currently present in the repository, grouped by folder and annotated for operational use in future Codex sessions.

## Root

### `/AGENTS.md`
- **File path:** `AGENTS.md`
- **Purpose / likely role:** Root execution policy and non-negotiable guardrails for Codex runs, including authority chain and stop conditions.
- **Authority level:** **Root execution instruction**
- **Notes:** Authoritative and actively enforced; references controlling system and CRM documents.

### `/README.md`
- **File path:** `README.md`
- **Purpose / likely role:** Repository overview and onboarding reference.
- **Authority level:** **Reference / historical**
- **Notes:** Not listed in authority chain; useful context unless contradicted by system governance docs.

## `docs/`

### `/docs/MARKDOWN_MANIFEST.md`
- **File path:** `docs/MARKDOWN_MANIFEST.md`
- **Purpose / likely role:** Repo-wide markdown manifest inventorying every `.md` file and mapping high-risk review sets for lead intake, HubSpot, request/estimate, QR/source attribution, runtime contracts, catalogs, Stripe, scheduling, and governance work.
- **Authority level:** **Internal governance / repo inventory / documentation manifest**
- **Customer-facing:** No.
- **Notes:** Supports future Codex planning and is a required review aid before high-risk workflow changes; it does not replace higher-authority governance, runtime contracts, HubSpot REV03, or task-specific instructions.

## `docs/site-architecture/`

### `/docs/site-architecture/SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md`
- **File path:** `docs/site-architecture/SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md`
- **Purpose / likely role:** Docs-only public information architecture audit for current WNYHS route ownership, page/component ownership, navigation, embedded links, search status, demo/dashboard routes, SEO/canonical observations, package visibility, WNYHS Core visibility, route conflicts, and recommended future architecture decisions.
- **Authority level:** **Architecture audit / governance evidence / documentation-only**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by `T-SITEARCH001-001`. Does not authorize source, route, navigation, footer, search, page-content, category, solution, image, runtime, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, dependency, package-lock, environment, secret, or deployment-config changes by itself.

### `/docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`
- **File path:** `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`
- **Purpose / likely role:** Docs-only public information architecture decision standard converting SITEARCH001 findings into formal decisions for homepage ownership, category and solution route patterns, package visibility, WNYHS Core visibility, search ownership, demo/dashboard ownership, campaign ownership, support/about/our-work/contact ownership, legal/system route ownership, navigation, footer, breadcrumbs, internal linking, canonical/redirect posture, SEO indexing, route conflicts, and future implementation sequencing.
- **Authority level:** **Architecture decision standard / governance / documentation-only**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by `T-SITEARCH001-002`. Does not authorize source, route, navigation, footer, breadcrumb, search, page-content, category, solution, image, runtime, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, dependency, package-lock, environment, secret, or deployment-config changes by itself.

### `/docs/site-architecture/SITEARCH003_WNYHS_PUBLIC_ARCHITECTURE_IMPLEMENTATION_PLAN_REV01.md`
- **File path:** `docs/site-architecture/SITEARCH003_WNYHS_PUBLIC_ARCHITECTURE_IMPLEMENTATION_PLAN_REV01.md`
- **Purpose / likely role:** Docs-only public architecture implementation plan translating SITEARCH001 audit findings and SITEARCH002 decisions into a phased sequence for canonical category routes, legacy route handling, navigation correction, footer and embedded link correction, search planning and implementation, demo/dashboard cleanup, sitemap/robots/canonical alignment, SEO preparation, and image workflow reintegration.
- **Authority level:** **Architecture implementation plan / governance / documentation-only**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by `T-SITEARCH001-003`. Does not authorize source, route, navigation, footer, breadcrumb, search, page-content, category, solution, image, runtime, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, dependency, package-lock, environment, secret, or deployment-config changes by itself.

### `/docs/site-architecture/SITEARCH004_WNYHS_LEGACY_CATEGORY_ROUTE_TRANSITION_PLAN_REV01.md`
- **File path:** `docs/site-architecture/SITEARCH004_WNYHS_LEGACY_CATEGORY_ROUTE_TRANSITION_PLAN_REV01.md`
- **Purpose / likely role:** Docs-only legacy category route transition plan defining ownership, redirect strategy, alias strategy, migration sequence, SEO/backlink/campaign/homepage-history considerations, validation requirements, rollback requirements, and future implementation task boundaries for the five legacy flat category routes.
- **Authority level:** **Architecture transition plan / governance / documentation-only**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by `T-SITEARCH002-002`. Does not authorize redirects, route changes, navigation changes, footer changes, breadcrumb changes, search changes, sitemap changes, robots changes, canonical tag changes, page-content changes, category changes, solution changes, image work, runtime, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, dependency, package-lock, environment, secret, or deployment-config changes by itself.

### `/docs/site-architecture/SEARCH001_WNYHS_PUBLIC_SITE_SEARCH_ARCHITECTURE_AND_INDEX_PLAN_REV01.md`
- **File path:** `docs/site-architecture/SEARCH001_WNYHS_PUBLIC_SITE_SEARCH_ARCHITECTURE_AND_INDEX_PLAN_REV01.md`
- **Purpose / likely role:** Docs-only public-site search architecture and index plan defining search ownership, searchable and non-searchable content models, result object fields, ranking, UI behavior, route recommendation, index-source options, category/solution/page/package/demo/campaign/legal indexing rules, protected-system restrictions, and future implementation tasks.
- **Authority level:** **Search architecture and index plan / governance / documentation-only**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by `T-SEARCH001-001`. Does not authorize search implementation, `/search` route creation, header/homepage search UI changes, navigation changes, route changes, page-content changes, category changes, solution changes, package changes, sitemap changes, robots changes, canonical tag changes, runtime, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API, Resend/email, Cloudflare, dependency, package-lock, environment, secret, or image changes by itself.

## `docs/seo/`

### `/docs/seo/SEO-BASELINE001_WNYHS_PUBLIC_ROUTE_INVENTORY_AND_SEO_BASELINE_REV01.md`
- **File path:** `docs/seo/SEO-BASELINE001_WNYHS_PUBLIC_ROUTE_INVENTORY_AND_SEO_BASELINE_REV01.md`
- **Purpose / likely role:** Docs-only baseline audit inventorying current public-facing route candidates, sitemap URLs, robots.txt rules, index/sitemap classification, metadata coverage, crawlability, internal linking, image/media SEO signals, schema absence, sitemap gaps, and next bounded SEO remediation tasks.
- **Authority level:** **SEO audit / baseline assessment / documentation-only evidence**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by `T-SEO-BASELINE001-001`. Does not authorize source code, route, sitemap, robots, metadata, schema, image, page-content, UI, HubSpot, Stripe/payment, scheduling, Resend/email, API/backend, dependency, package-lock, environment, secret, or deployment-config changes by itself.

### `/docs/seo/SEO001_WNYHS_SEO_FOUNDATION_STANDARD_REV01.md`
- **File path:** `docs/seo/SEO001_WNYHS_SEO_FOUNDATION_STANDARD_REV01.md`
- **Purpose / likely role:** SEO foundation governance standard defining WNYHS route classification, index/noindex, sitemap, robots review, metadata, canonical, structured data, image SEO, internal linking, search inclusion, package visibility, QR/campaign, demo, local SEO, service-area, measurement, forbidden shortcut, new-route checklist, and future remediation task rules.
- **Authority level:** **SEO governance standard / documentation-only foundation**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by `T-SEO001-001`. Does not authorize metadata, title tag, canonical, sitemap, robots, schema, route, navigation, search, page-content, image, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, environment, secret, dependency, or package-lock changes by itself.

### `/docs/seo/SEO002_WNYHS_METADATA_AND_CANONICAL_AUDIT_REV01.md`
- **File path:** `docs/seo/SEO002_WNYHS_METADATA_AND_CANONICAL_AUDIT_REV01.md`
- **Purpose / likely role:** Audit-only metadata and canonical review documenting current WNYHS app-shell/client-side SEO system, route metadata inventory, homepage/category/solution/search/marketing/campaign/package/legal/demo findings, canonical conflicts, Open Graph/social gaps, index/noindex posture, SPA crawlability risk, risk ranking, and future implementation task sequence.
- **Authority level:** **SEO audit / documentation-only implementation planning input**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by `T-SEO001-002`. Does not authorize metadata changes, title tag changes, meta description changes, canonical changes, sitemap changes, robots changes, schema implementation, route changes, navigation changes, search implementation, page-content changes, image changes, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, environment, secret, dependency, or package-lock changes by itself.

### `/docs/seo/SEO003_WNYHS_METADATA_IMPLEMENTATION_PLAN_REV01.md`
- **File path:** `docs/seo/SEO003_WNYHS_METADATA_IMPLEMENTATION_PLAN_REV01.md`
- **Purpose / likely role:** Docs-only implementation plan converting SEO001 and SEO002 into future phased route-level metadata, canonical-domain, index/noindex, Open Graph/Twitter, client-side SEO component, SPA crawlability, validation, rollback, and task-sequencing guidance.
- **Authority level:** **SEO implementation plan / documentation-only planning input**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by `T-SEO001-003`. Does not authorize metadata changes, title tag changes, meta description changes, canonical changes, robots/index behavior changes, sitemap changes, robots changes, schema implementation, route changes, navigation changes, search implementation, page-content changes, image changes, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, environment, secret, dependency, or package-lock changes by itself.

### `/docs/seo/SEO004_WNYHS_SEO_STATUS_AND_CONTINUATION_HANDOFF_REV01.md`
- **File path:** `docs/seo/SEO004_WNYHS_SEO_STATUS_AND_CONTINUATION_HANDOFF_REV01.md`
- **Purpose / likely role:** Docs-only SEO status and continuation handoff summarizing the current SEO state after SEO001-SEO003 and T-SEO001-004 through T-SEO001-008, including canonical domain, sitemap URLs, noindex/review/protected route groups, metadata coverage, policy state, remaining gaps, and future bootstrap guidance.
- **Authority level:** **SEO continuation checkpoint / documentation-only handoff**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by `T-SEO001-009`. Does not authorize metadata changes, sitemap changes, robots changes, canonical/noindex policy changes, schema implementation, route changes, navigation changes, search changes, page content/layout changes, image changes, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, environment, secret, dependency, or package-lock changes by itself.



## `docs/automation-system/`

### `/docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md`
- **File path:** `docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md`
- **Purpose / likely role:** WNYHS Home Assistant automation standard defining the default Home Assistant-native automation posture, C.A.F.E. evaluation/adoption path for complex native flows, Node-RED and Homey exception rules, customer override expectations, supportability requirements, SafePath reference use case, future applicable solution families, evaluation checklist, forbidden patterns, and promotion/implementation rule.
- **Authority level:** **Automation-system governance / Home Assistant automation architecture standard / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by T-AUTOMATION001-001 as a docs-only governance artifact. It does not authorize app/source changes, runtime automations, C.A.F.E. installation, HACS installation, Node-RED installation, Homey installation, customer dashboards, final SafePath BOM/pricing/hardware standards, HubSpot changes, Stripe/payment changes, scheduling changes, quote/estimate runtime changes, package/catalog behavior, dependency changes, environment changes, secrets, or deployment changes by itself.

## `docs/installer/`

### `/docs/installer/INSTALL001_INSTALLER_PLATFORM_ARCHITECTURE_REV01.md`
- **File path:** `docs/installer/INSTALL001_INSTALLER_PLATFORM_ARCHITECTURE_REV01.md`
- **Purpose / likely role:** Initial WNYHS Installer Platform architecture defining the repeatable Home Assistant controller appliance model, platform layers, Customer/Installer/Service Dashboard audience classes, theme-readiness posture, bench workflow phases, funeral home pilot relevance, future INSTALL002-INSTALL010 planning notes, and protected-system boundaries.
- **Authority level:** **Installer-platform governance / architecture standard / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by INSTALL001 as a docs-only governance architecture artifact. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard implementation, automation implementation, customer-specific install documentation, hardware purchasing, inventory automation, ordering automation, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, secret, or future INSTALL task activation changes by itself.

### `/docs/installer/INSTALL002_BENCH_BUILD_CHECKLIST_REV01.md`
- **File path:** `docs/installer/INSTALL002_BENCH_BUILD_CHECKLIST_REV01.md`
- **Purpose / likely role:** Initial WNYHS Bench Build Checklist for preparing Home Assistant-based customer controllers before onsite installation, including required checklist fields, 15 bench build phases, dashboard placeholder readiness, funeral home pilot relevance, expected bench output artifacts, future INSTALL003/004/005/006/008 planning notes, and protected-system boundaries.
- **Authority level:** **Installer-platform governance / bench checklist standard / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by INSTALL002 as a docs-only checklist artifact. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard implementation, automation/script implementation, customer-specific install documentation, hardware purchasing, inventory automation, ordering automation, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, secret, or future INSTALL task activation changes by itself.

### `/docs/installer/INSTALL003_GOLDEN_HOME_ASSISTANT_BUILD_STANDARD_REV01.md`
- **File path:** `docs/installer/INSTALL003_GOLDEN_HOME_ASSISTANT_BUILD_STANDARD_REV01.md`
- **Purpose / likely role:** Initial WNYHS Golden Home Assistant Build Standard defining the reusable baseline controller state before customer-specific customization, required baseline categories, Golden versus customer-specific boundary, bench checklist relationship, backup/restore expectations, theme-readiness posture, funeral home pilot relevance, future INSTALL004-INSTALL008 planning notes, and protected-system boundaries.
- **Authority level:** **Installer-platform governance / Golden Build standard / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by INSTALL003 as a docs-only standard artifact. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard implementation, automation/script implementation, backup automation, customer-specific install documentation, funeral-home-specific configuration, hardware purchasing, inventory automation, ordering automation, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, or secret changes by itself.

### `/docs/installer/INSTALL004_DEVICE_NAMING_STANDARD_REV01.md`
- **File path:** `docs/installer/INSTALL004_DEVICE_NAMING_STANDARD_REV01.md`
- **Purpose / likely role:** Initial WNYHS Device Naming Standard defining clear, stable, supportable physical device names for Home Assistant-based installs during bench adoption and field placement, including naming principles, recommended pattern, internal versus customer-visible naming, bench workflow, physical labeling, device naming sheet fields, examples, anti-patterns, funeral home pilot relevance, future INSTALL005/006/008 planning notes, and protected-system boundaries.
- **Authority level:** **Installer-platform governance / device naming standard / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by INSTALL004 as a docs-only physical device naming standard. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard implementation, automation/script implementation, entity naming, area naming, customer-specific install documentation, funeral-home-specific configuration, device inventory data, hardware purchasing, inventory automation, ordering automation, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, or secret changes by itself.

### `/docs/installer/INSTALL005_ENTITY_AND_AREA_STANDARDS_REV01.md`
- **File path:** `docs/installer/INSTALL005_ENTITY_AND_AREA_STANDARDS_REV01.md`
- **Purpose / likely role:** Initial WNYHS Entity and Area Standards defining Home Assistant area categories, plain-language area naming, device-to-area assignment, entity naming, entity cleanup workflow, visibility classes, review-sheet fields, examples, anti-patterns, funeral home pilot relevance, future INSTALL006/007/008/010 planning notes, and protected-system boundaries.
- **Authority level:** **Installer-platform governance / entity and area standard / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by INSTALL005 as a docs-only entity and area standard. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard implementation, automation/script implementation, customer-specific install documentation, funeral-home-specific configuration, customer-specific device/entity/area data, hardware purchasing, inventory automation, ordering automation, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, or secret changes by itself.

### `/docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md`
- **File path:** `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md`
- **Purpose / likely role:** Initial WNYHS Dashboard Architecture Standard defining Customer, Installer, and Service Dashboard classes; recommended views; status hierarchy; customer personalization placeholders; card grouping, navigation, access/visibility, mobile/tablet, and theme-readiness principles; Dashboard Readiness Sheet fields; examples; anti-patterns; funeral home pilot relevance; future INSTALL007/008/009/010 planning notes; and protected-system boundaries.
- **Authority level:** **Installer-platform governance / dashboard architecture standard / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by INSTALL006 as a docs-only dashboard architecture standard. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard YAML, Lovelace card implementation, frontend assets, theme implementation, automation/script implementation, customer-specific dashboards, customer-specific install files, actual customer dashboard data, funeral-home-specific configuration, hardware purchasing, inventory automation, ordering automation, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, or secret changes by itself.

### `/docs/installer/INSTALL006A_SHARED_JOB_DATA_MODEL_AND_HUBSPOT_FIELD_ARCHITECTURE_REV01.md`
- **File path:** `docs/installer/INSTALL006A_SHARED_JOB_DATA_MODEL_AND_HUBSPOT_FIELD_ARCHITECTURE_REV01.md`
- **Purpose / likely role:** Initial WNYHS Shared Job Data Model and HubSpot Field Architecture defining candidate shared record chain, upstream/downstream workflow model, candidate HubSpot object/record architecture, candidate property groups, candidate field inventory, private installer/admin portal screen architecture, business process stages, open questions, future task roadmap, and protected-system boundaries.
- **Authority level:** **Installer-platform governance / shared job data architecture / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by INSTALL006A as docs-only data architecture. It does not authorize HubSpot field creation, HubSpot object creation, HubSpot schema/property/pipeline/workflow changes, direct HubSpot writes, portal implementation, runtime sync, scripts, APIs, source code, database changes, Home Assistant configuration, customer-specific install files, actual customer data, inventory automation, ordering automation, Stripe/payment sync, scheduling sync, Resend/email changes, Cloudflare config, dependency, package-lock, environment, or secret changes by itself.

### `/docs/installer/INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md`
- **File path:** `docs/installer/INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md`
- **Purpose / likely role:** Initial WNYHS Dashboard Theme Readiness Standard defining how Customer, Installer, and Service dashboards remain ready for Default Light, Default Dark, High Contrast, Seasonal / Holiday, Brand / Premium, Customer-selected, and Installer / Service diagnostic themes without dashboard rewrites.
- **Authority level:** **Installer-platform governance / dashboard theme-readiness standard / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by INSTALL007 as docs-only theme-readiness architecture. It does not authorize Home Assistant theme files, theme YAML, dashboard YAML, Lovelace card implementation, frontend assets, CSS, automations, scripts, customer-specific dashboards, funeral-home-specific themes, source, routes, UI, runtime, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, or secret changes by itself.

### `/docs/installer/INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md`
- **File path:** `docs/installer/INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md`
- **Purpose / likely role:** Initial WNYHS Bench Testing and Commissioning Checklist defining bench validation, onsite commissioning, evidence/proof standards, commissioning status categories, critical blockers, exception handling fields, shared data model relationship, funeral home pilot relevance, and future INSTALL009/INSTALL010 planning notes for Home Assistant-based installs.
- **Authority level:** **Installer-platform governance / bench testing and commissioning checklist / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by INSTALL008 as docs-only checklist governance. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard YAML, Lovelace card implementation, frontend assets, theme implementation, automation/script implementation, customer-specific install docs, actual customer records, customer data, funeral-home-specific records, HubSpot schema/properties/objects/workflows, direct HubSpot writes, APIs, portal screens, durable storage, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, or secret changes by itself.

### `/docs/installer/INSTALL009_CUSTOMER_HANDOFF_PACKAGE_REV01.md`
- **File path:** `docs/installer/INSTALL009_CUSTOMER_HANDOFF_PACKAGE_REV01.md`
- **Purpose / likely role:** Initial WNYHS Customer Handoff Package standard defining customer-safe handoff contents, required sections, language rules, dashboard orientation, installed asset summary fields, warranty/support basics, customer training confirmation, signoff fields, shared data model relationship, funeral home pilot relevance, and future INSTALL010/WARRANTY001/ASSET001/HUBSPOT-INSTALL001/PORTAL001/CUSTOMERDOC001 planning notes for Home Assistant-based installs.
- **Authority level:** **Installer-platform governance / customer handoff package standard / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by INSTALL009 as docs-only customer handoff package standard. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard YAML, Lovelace card implementation, frontend assets, theme implementation, automation/script implementation, customer-specific handoff docs, actual customer records, customer data, PDFs, emails, portal files, funeral-home-specific records, HubSpot schema/properties/objects/workflows, direct HubSpot writes, APIs, durable storage, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, or secret changes by itself.

### `/docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md`
- **File path:** `docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md`
- **Purpose / likely role:** Initial WNYHS Service Dashboard and Remote Support Standard defining post-handoff service dashboard purpose, remote support posture, support-safe diagnostics, support status categories, Service Dashboard Readiness Sheet fields, remote support authorization fields, warranty/support handoff relationships, privacy/claim guardrails, funeral home pilot relevance, and future HUBSPOT-INSTALL001/PORTAL001/ASSET001/WARRANTY001/SUPPORT001/THEME001 planning notes for Home Assistant-based installs.
- **Authority level:** **Installer-platform governance / service dashboard and remote support standard / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by INSTALL010 as docs-only service dashboard and remote support standard. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard YAML, Lovelace card implementation, frontend assets, theme implementation, automation/script implementation, customer-specific service dashboards, actual customer records, customer data, remote access credentials, private URLs, portal files, funeral-home-specific records, HubSpot schema/properties/objects/workflows, direct HubSpot writes, APIs, durable storage, support tickets, warranty records, asset records, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, or secret changes by itself.

## `docs/catalog/`

### `/docs/catalog/README.md`
- **File path:** `docs/catalog/README.md`
- **Purpose / likely role:** Catalog governance home defining reusable catalog truth boundaries and the split between catalog data, quote/property records, and CRM authority.
- **Authority level:** **Catalog governance / boundary standard**
- **Customer-facing:** No.
- **Implementation authority:** Yes, only for bounded catalog tasks that cite this standard.
- **Notes:** Added by CATALOG001. Does not authorize CRM writes, payment behavior, customer/job storage in catalog, inventory automation, ordering automation, installer pick-list generation, or durable storage.

### `/docs/catalog/CATALOG001_Canonical_Catalog_Source_Standard_REV01.md`
- **File path:** `docs/catalog/CATALOG001_Canonical_Catalog_Source_Standard_REV01.md`
- **Purpose / likely role:** Canonical source standard for the initial WNYHS runtime catalog and future catalog consumers.
- **Authority level:** **Catalog governance / source-of-truth standard**
- **Customer-facing:** No.
- **Implementation authority:** Yes, for CATALOG001 and future bounded catalog migration tasks.
- **Notes:** Establishes parts-to-solutions-to-packages-to-categories ownership and initial `src/data/catalog/` runtime source.


### `/docs/catalog/CATALOG002_Master_Parts_Data_Model_REV01.md`
- **File path:** `docs/catalog/CATALOG002_Master_Parts_Data_Model_REV01.md`
- **Purpose / likely role:** Catalog governance document defining the exact master part-number data model, migration-safe solution/package/hardware-label mapping scaffold, GPT import path, asset snapshot rule, deferred backfill rationale, and protected boundaries for CATALOG002.
- **Authority level:** **Catalog governance / master parts data-model standard**
- **Customer-facing:** No.
- **Implementation authority:** Yes, only for the bounded CATALOG002 schema/data-model scaffold.
- **Notes:** Does not authorize full hardware backfill, new hardware evaluation, pricing changes, Stripe/payment changes, HubSpot changes, scheduling changes, quote runtime changes, public copy changes, inventory automation, or hardware purchasing.


### `/docs/catalog/CATALOG003_GPT_Master_Parts_Import_File_Alignment_REV01.md`
- **File path:** `docs/catalog/CATALOG003_GPT_Master_Parts_Import_File_Alignment_REV01.md`
- **Purpose / likely role:** Catalog governance document defining the GPT-to-repo import contract for exact master part records, including JSONL/CSV expectations, field normalization, alias mapping, evidence handling, gap/source reports, and protected boundaries before hardware backfill.
- **Authority level:** **Catalog governance / GPT import-alignment standard**
- **Customer-facing:** No.
- **Implementation authority:** Yes, only for bounded import-file alignment and future bounded import review tasks.
- **Notes:** Does not authorize hardware backfill, new hardware evaluation, pricing changes, Stripe/payment changes, HubSpot changes, scheduling changes, quote runtime changes, public copy changes, inventory automation, installer automation, or product approval.


### `/docs/catalog/imports/catalog004/README.md`
- **File path:** `docs/catalog/imports/catalog004/README.md`
- **Purpose / likely role:** CATALOG004 REV02 handoff evidence index for the first reviewed five-doorbell master parts backfill import.
- **Authority level:** **Catalog import evidence**
- **Customer-facing:** No.
- **Implementation authority:** Yes, only as source evidence for the bounded CATALOG004 import.
- **Notes:** Preserves the reviewed record set, status posture, validation snapshot, and import scope. Does not authorize public solution/package promotion, quote logic, pricing, Stripe/payment, HubSpot, scheduling, runtime, or funnel changes.

### `/docs/catalog/imports/catalog004/wnyhs_master_parts_gap_report.md`
- **File path:** `docs/catalog/imports/catalog004/wnyhs_master_parts_gap_report.md`
- **Purpose / likely role:** CATALOG004 internal gap report for unresolved validation, support, and evidence questions in the first master parts backfill.
- **Authority level:** **Catalog import evidence / internal gap report**
- **Customer-facing:** No.
- **Implementation authority:** No, records import gaps only.
- **Notes:** Supports future bounded validation/status-review tasks; it does not upgrade any part or authorize public/package/quote promotion.

### `/docs/catalog/imports/catalog004/wnyhs_master_parts_sources.md`
- **File path:** `docs/catalog/imports/catalog004/wnyhs_master_parts_sources.md`
- **Purpose / likely role:** CATALOG004 source report preserving source references for the reviewed first five master part records.
- **Authority level:** **Catalog import evidence / source report**
- **Customer-facing:** No.
- **Implementation authority:** No, preserves evidence sources only.
- **Notes:** Supports auditability of the internal import and does not authorize new claims or public marketing copy.


### `/docs/catalog/imports/catalog005/README.md`
- **File path:** `docs/catalog/imports/catalog005/README.md`
- **Purpose / likely role:** CATALOG005 REV02 handoff evidence index for the reviewed 17-record Reolink core infrastructure and direct local Wi-Fi conditional master parts import.
- **Authority level:** **Catalog import evidence**
- **Customer-facing:** No.
- **Implementation authority:** Yes, only as source evidence for the bounded CATALOG005 import.
- **Notes:** Preserves the reviewed record set, validation snapshot, and import scope. Does not authorize public solution/package promotion, quote logic, pricing, Stripe/payment, HubSpot, scheduling, runtime, funnel changes, or hardware status upgrades.

### `/docs/catalog/imports/catalog005/wnyhs_catalog005_reolink_gap_report.md`
- **File path:** `docs/catalog/imports/catalog005/wnyhs_catalog005_reolink_gap_report.md`
- **Purpose / likely role:** CATALOG005 internal gap report for unresolved validation, support, and evidence questions in the Reolink conditional master parts tranche.
- **Authority level:** **Catalog import evidence / internal gap report**
- **Customer-facing:** No.
- **Implementation authority:** No, records import gaps only.
- **Notes:** Supports future bounded validation/status-review tasks; it does not upgrade any part or authorize public/package/quote promotion.

### `/docs/catalog/imports/catalog005/wnyhs_catalog005_reolink_sources.md`
- **File path:** `docs/catalog/imports/catalog005/wnyhs_catalog005_reolink_sources.md`
- **Purpose / likely role:** CATALOG005 source report preserving source references for the reviewed 17 Reolink conditional master part records.
- **Authority level:** **Catalog import evidence / source report**
- **Customer-facing:** No.
- **Implementation authority:** No, preserves evidence sources only.
- **Notes:** Supports auditability of the internal import and does not authorize new claims or public marketing copy.


### `/docs/quotesystem/QUOTE_CUSTOMER_ESTIMATE_PACKET_STANDARD_REV01.md`
- **File path:** `docs/quotesystem/QUOTE_CUSTOMER_ESTIMATE_PACKET_STANDARD_REV01.md`
- **Purpose / likely role:** Quote-system governance standard for the customer-facing estimate/proposal/acceptance packet, based on the approved Brian K. Lewis Funeral Home Customer Proposal REV04 model.
- **Authority level:** **Quote-system governance / customer estimate packet standard**
- **Customer-facing:** Yes, after operator review.
- **Implementation authority:** No.
- **Notes:** Added by QUOTE-SYSTEM-STANDARD-001. It does not authorize runtime UI, quote/PDF generation, HubSpot, Stripe/payment, scheduling, email, catalog schema, package pricing/data, auth, dependency, package-lock, or public website changes.

### `/docs/quotesystem/QUOTE_INTERNAL_SOW_PACKET_STANDARD_REV01.md`
- **File path:** `docs/quotesystem/QUOTE_INTERNAL_SOW_PACKET_STANDARD_REV01.md`
- **Purpose / likely role:** Quote-system governance standard for the internal SOW/install-planning packet, preserving technical planning, BOM/order readiness, compatibility research, installer notes, dashboard planning, and QA detail.
- **Authority level:** **Quote-system governance / internal fulfillment packet standard**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QUOTE-SYSTEM-STANDARD-001. It does not authorize runtime UI, quote/PDF generation, HubSpot, Stripe/payment, scheduling, email, catalog schema, package pricing/data, auth, dependency, package-lock, or public website changes.

### `/docs/catalog/IMPLEMENTATION001_Canonical_Runtime_Catalog_REV01.md`
- **File path:** `docs/catalog/IMPLEMENTATION001_Canonical_Runtime_Catalog_REV01.md`
- **Purpose / likely role:** Implementation note for the first file-backed runtime catalog, including source inventory, promoted data, temporary data, deferred migrations, and next candidates.
- **Authority level:** **Catalog implementation record**
- **Customer-facing:** No.
- **Implementation authority:** No, records CATALOG001 implementation only.
- **Notes:** Documents that public pages, durable storage, inventory automation, ordering automation, installer pick-list generation, dashboard generation, and job/customer records were not migrated.

## `docs/content-remediation/`

### `/docs/content-remediation/CONTENT001_WNYHS_WEBSITE_CONTENT_REMEDIATION_CODEX_INSTRUCTIONS_REV01.md`
- **File path:** `docs/content-remediation/CONTENT001_WNYHS_WEBSITE_CONTENT_REMEDIATION_CODEX_INSTRUCTIONS_REV01.md`
- **Purpose / likely role:** CONTENT001 website content remediation Codex instructions converting live website audit findings into a bounded remediation plan and task breakdown.
- **Authority level:** **Governance / content remediation planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Required source material before CONTENT001-B/C/D/E activation; does not authorize runtime, UI, route, HubSpot, Stripe, Scheduling, Email, environment, or public copy changes by itself.

### `/docs/content-remediation/CONTENT001_FINDING_TO_REMEDIATION_MATRIX_REV01.md`
- **File path:** `docs/content-remediation/CONTENT001_FINDING_TO_REMEDIATION_MATRIX_REV01.md`
- **Purpose / likely role:** CONTENT001 audit-finding traceability matrix mapping live website findings to future bounded remediation tracks for Homepage, QR Landing, Packages, Support, Our Work, and opportunity pages.
- **Authority level:** **Governance / content remediation traceability**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Required traceability source before CONTENT001-B/C/D/E activation; preserves gaps for missing social proof, hero CTA, no-required-monthly-fees positioning, customer-owned-equipment positioning, hardware-first messaging, local trust signals, QR context alignment, FAQ/self-service support, case-study storytelling, and future opportunity pages.



### `/docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_MARKETING_VISUAL_PARITY_004_REV01.md`
- **File path:** `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_MARKETING_VISUAL_PARITY_004_REV01.md`
- **Purpose / likely role:** Implementation note for WNYHS-PUBLIC-MARKETING-VISUAL-PARITY-004 Fit Check visual parity migration.
- **Authority level:** **Governance implementation record**
- **Customer-facing:** No.
- **Implementation authority:** No, records the completed bounded Fit Check visual parity implementation only.
- **Notes:** Documents Fit Check visual primitive migration, behavior preservation, navigation/footer review, protected-system exclusions, validation, and remaining visual-review gap.


### `/docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_FOOTER_NAV_001_REV01.md`
- **File path:** `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_FOOTER_NAV_001_REV01.md`
- **Purpose / likely role:** Implementation note for WNYHS-PUBLIC-FOOTER-NAV-001 public footer navigation cleanup.
- **Authority level:** **Governance implementation record**
- **Customer-facing:** No.
- **Implementation authority:** No, records the completed bounded footer navigation cleanup only.
- **Notes:** Documents removal of extra footer links, preservation of About/Contact/Privacy/Terms/Support destinations, visible version `v1.0.149`, and protected-system exclusions.

### `/docs/governance/IMPLEMENTATION_CATEGORY_LANDING_001_A_HOME_AUTOMATION_REV01.md`
- **File path:** `docs/governance/IMPLEMENTATION_CATEGORY_LANDING_001_A_HOME_AUTOMATION_REV01.md`
- **Purpose / likely role:** Implementation note for CATEGORY-LANDING-001-A Home Automation category landing page.
- **Authority level:** **Governance implementation record**
- **Customer-facing:** No.
- **Implementation authority:** No, records the completed bounded Home Automation category landing page implementation only.
- **Notes:** Documents `/home-automation` category page structure, homepage card link update, governed token/CSS compliance, CATEGORY-LANDING-001-A-POLISH contrast/reveal/bridge/featured-card refinements, image/route debt, protected-system exclusions, and version `v1.0.160`.

### `/docs/governance/IMPLEMENTATION_CATEGORY_LANDING_001_REMAINING_CATEGORIES_REV01.md`
- **File path:** `docs/governance/IMPLEMENTATION_CATEGORY_LANDING_001_REMAINING_CATEGORIES_REV01.md`
- **Purpose / likely role:** Implementation note for CATEGORY-LANDING-001-B through CATEGORY-LANDING-001-E, covering Home Security, Aging In Place, Home Safety, and Home Lighting category landing pages.
- **Authority level:** **Governance implementation record**
- **Customer-facing:** No.
- **Implementation authority:** No, records the completed bounded remaining category landing page implementation only.
- **Notes:** Documents the four category landing routes, shared CATEGORY002/CATEGORY003 page structure, homepage category-card link updates, reused approved image assets, dedicated image asset debt, protected-system exclusions, and version `v1.0.167`.

## `docs/solution-system/`

### `/docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV01.md`
- **File path:** `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV01.md`
- **Purpose / likely role:** First formal WNYHS solution-page standard defining required structure, visual hierarchy, typography, card rules, CTA hierarchy, copy guardrails, image posture, and internal linking standards for solution pages.
- **Authority level:** **Historical solution-page governance standard / implementation standard for SOLUTION001-A**
- **Customer-facing:** No.
- **Implementation authority:** Yes, only for bounded SOLUTION001-A updates to the four existing opportunity solution pages named in the standard and task register.
- **Notes:** Superseded by REV02 for future solution image governance. Does not authorize Homepage, Packages, Support, Our Work, QR Landing, protected runtime, HubSpot, Stripe, Scheduling, Email, environment, pricing, global navigation, or semantic-token changes.

### `/docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV02.md`
- **File path:** `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV02.md`
- **Purpose / likely role:** Current WNYHS solution-page standard defining structure, visual hierarchy, typography, card rules, CTA hierarchy, copy guardrails, internal linking standards, and the approved two-image solution system for `solution-hero-image` and `solution-sample-image`.
- **Authority level:** **Current solution-page governance standard / image-system standard for SOLUTION001-B**
- **Customer-facing:** No.
- **Implementation authority:** No, not by itself. It governs future bounded solution-page image and page updates only when a separate active implementation task authorizes source, CSS, route, or image-file work.
- **Notes:** Added by SOLUTION001-B as docs-only governance. Defines hero images as emotional/lifestyle outcome imagery and sample images as scenario + relevant hardware + focused awareness-panel support. Does not authorize image generation, image wiring, Homepage, Packages, Support, Our Work, QR Landing, protected runtime, HubSpot, Stripe, Scheduling, Email, environment, pricing, business-rule, global navigation, semantic-token, or implementation changes.


### `/docs/solution-system/SOLUTION_CATALOG_RECONCILIATION_REV01.md`
- **File path:** `docs/solution-system/SOLUTION_CATALOG_RECONCILIATION_REV01.md`
- **Purpose / likely role:** Docs-only solution catalog reconciliation governance document consolidating the Home Safety, Home Security, Home Lighting, Home Automation, and Aging-in-Place research outputs into one governed working catalog with solution statuses, category ownership, package compatibility guidance, hardware-status summary, BOM/pricing gaps, field-test backlog summary, SOP/disclosure queue, and claims guardrail summary.
- **Authority level:** **Solution-system governance / catalog reconciliation draft**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Created by T-CATALOG001 as docs-only governance. It does not authorize public pages, package implementation, solution-page implementation, pricing, BOM commitments, hardware purchasing, Stripe/payment behavior, HubSpot workflows, scheduling changes, runtime behavior, source changes, route changes, style changes, or deployment. Follow-up governance is required for hardware registry, claims guardrails, field-test backlog, SOP/disclosure docs, BOM/pricing schema, and solution object index.

### `/docs/solution-system/HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01.md`
- **File path:** `docs/solution-system/HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01.md`
- **Purpose / likely role:** WNYHS hardware governance registry classifying approved standard, conditional, pilot, premium/custom, research-only, and excluded hardware candidates for future catalog, package, BOM, claims, and field-test work.
- **Authority level:** **Solution-system governance / hardware registry / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Pricing-approved:** No.
- **Purchasing-approved:** No.
- **Notes:** Added by T-HARDWARE001 as a docs-only governance artifact. It does not authorize hardware purchasing, installation, public solution pages, pricing, quote behavior, runtime changes, HubSpot, Stripe, scheduling, or public copy deployment by itself.

### `/docs/solution-system/CLAIMS001_WNYHS_UNIFIED_CLAIMS_GUARDRAIL_ADDENDUM_REV01.md`
- **File path:** `docs/solution-system/CLAIMS001_WNYHS_UNIFIED_CLAIMS_GUARDRAIL_ADDENDUM_REV01.md`
- **Purpose / likely role:** Unified WNYHS claims guardrail addendum governing future public copy, solution pages, package pages, ads, sales language, proposals, and customer-facing explanations.
- **Authority level:** **Solution-system governance / claims governance / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Public-copy deployment authority:** No.
- **Notes:** Added by T-CLAIMS001 as a docs-only governance artifact. It does not authorize app/source changes, page edits, public copy deployment, ad launch, pricing, hardware purchasing, HubSpot, Stripe, scheduling, runtime behavior, or customer installation by itself.

### `/docs/solution-system/OFFERING001_WNYHS_OFFER_ARCHITECTURE_VISIBILITY_TIERS_AND_VAULT_GOVERNANCE_REV01.md`
- **File path:** `docs/solution-system/OFFERING001_WNYHS_OFFER_ARCHITECTURE_VISIBILITY_TIERS_AND_VAULT_GOVERNANCE_REV01.md`
- **Purpose / likely role:** WNYHS offer architecture governance defining public standard catalog, The Vault/custom-project visibility, internal operator catalog, research/excluded tiering, and WNYHS Core first-time vs existing-customer offer rules.
- **Authority level:** **Solution-system governance / offer architecture / custom catalog governance / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Public-copy deployment authority:** No.
- **Notes:** Added by T-OFFERING001 as a docs-only governance artifact. It does not authorize app/source changes, page edits, The Vault deployment, public copy deployment, pricing, hardware purchasing, HubSpot, Stripe, scheduling, runtime behavior, or customer installation by itself.

### `/docs/solution-system/PACKAGEBOM001_WNYHS_PACKAGE_MAP_AND_BOM_PRICING_INPUT_SCHEMA_REV01.md`
- **File path:** `docs/solution-system/PACKAGEBOM001_WNYHS_PACKAGE_MAP_AND_BOM_PRICING_INPUT_SCHEMA_REV01.md`
- **Purpose / likely role:** WNYHS package map and BOM/pricing-input governance defining package candidates, Core inclusion logic, existing-customer add-on treatment, BOM fields, pricing-input fields, install/labor planning inputs, and Vault/custom quote inputs.
- **Authority level:** **Solution-system governance / package + BOM governance / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Pricing-approved:** No.
- **Public-copy deployment authority:** No.
- **Notes:** Added by T-PACKAGEBOM001 as a docs-only governance artifact. It does not authorize app/source changes, routes, pages, styles, runtime behavior, public pricing, Stripe/payment changes, HubSpot changes, scheduling changes, Cloudflare/environment changes, hardware purchasing, customer installation, public copy deployment, or site version bump by itself.

## `docs/quotesystem/`


### `/docs/quotesystem/QUOTESYSTEM017_Quote_Workspace_Workflow_Alignment_REV01.md`
- **File path:** `docs/quotesystem/QUOTESYSTEM017_Quote_Workspace_Workflow_Alignment_REV01.md`
- **Purpose / likely role:** Docs-only QUOTESYSTEM-017 alignment record mapping the current internal Quote Workspace / Property Model UI to the active operator playbook phases and identifying future bounded workflow gaps.
- **Authority level:** **Quote-system workflow alignment / documentation record**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added as a docs-only alignment artifact. It does not authorize app/source changes, route changes, CSS changes, runtime behavior, HubSpot, Stripe/payment, scheduling, storage, uploads, exports, PDFs, email behavior, package changes, environment changes, or Cloudflare config changes.

### `/docs/quotesystem/IMPLEMENTATION016_Live_Test_Bug_Fix_PASS_REV01.md`
- **File path:** `docs/quotesystem/IMPLEMENTATION016_Live_Test_Bug_Fix_PASS_REV01.md`
- **Purpose / likely role:** Implementation note for QUOTESYSTEM-016 live-test stabilization of the local Quote Workspace using the Funeral Home Test Case.
- **Authority level:** **Quote-system implementation record**
- **Customer-facing:** No.
- **Implementation authority:** No, records QUOTESYSTEM-016 implementation only.
- **Notes:** Documents route, local import/export, quote preview, and installer packet validation plus the customer-facing quote-preview installer-note exposure fix; no HubSpot, Stripe/payment runtime, durable storage, PDF, email, inventory, ordering, scheduling, auth, or image-processing behavior was added.

### `/docs/quotesystem/README.md`
- **File path:** `docs/quotesystem/README.md`
- **Purpose / likely role:** Quote-system governance folder overview defining the quote-system goal and document-set boundary.
- **Authority level:** **Quote-system governance / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QUOTESYSTEM-001. It does not authorize app code, routes, UI changes, pricing-engine implementation, customer proposal generation, Home Assistant dashboard generation, HubSpot changes, Stripe changes, scheduling changes, or runtime behavior changes.

### `/docs/quotesystem/QUOTE_SYSTEM_GOALS_REV01.md`
- **File path:** `docs/quotesystem/QUOTE_SYSTEM_GOALS_REV01.md`
- **Purpose / likely role:** Initial quote-system goals standard defining inputs, outputs, three-part package structure, Home Assistant compatibility, customer capability mapping, dashboard prep, and compliance review boundaries.
- **Authority level:** **Quote-system governance / active standard**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QUOTESYSTEM-001 as docs-only governance. Future implementation requires a separate bounded task.

### `/docs/quotesystem/FLOORPLAN000_Field_Capture_Standard_REV01.md`
- **File path:** `docs/quotesystem/FLOORPLAN000_Field_Capture_Standard_REV01.md`
- **Purpose / likely role:** Field capture standard for floorplan source sketches, sketch primacy, exact orientation preservation, compass/orientation, exterior/interior photos, sketch symbol language, and door/threshold interpretation.
- **Authority level:** **Quote-system governance / active floorplan capture standard**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QUOTESYSTEM-001 and refined by QUOTESYSTEM-002 as docs-only governance. It does not authorize floorplan rendering implementation, image generation, quote generation, camera/sensor placement, runtime changes, HubSpot, Stripe/payment, or scheduling changes.

### `/docs/quotesystem/FLOORPLAN001_Professional_Redraw_Reconstruction_Standard_REV01.md`
- **File path:** `docs/quotesystem/FLOORPLAN001_Professional_Redraw_Reconstruction_Standard_REV01.md`
- **Purpose / likely role:** Professional redraw reconstruction standard defining Trace Mode, professional replica expectations, no redesign/inference/rotation/normalization, overlay validation, rejection rules, and base-redraw approval before overlays.
- **Authority level:** **Quote-system governance / active floorplan redraw standard**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QUOTESYSTEM-001 and refined by QUOTESYSTEM-002 as docs-only governance. It does not authorize floorplan rendering implementation, image generation, quote generation, camera/sensor placement, runtime changes, HubSpot, Stripe/payment, or scheduling changes.

### `/docs/quotesystem/FLOORPLAN002_Property_Photo_Validation_Standard_REV01.md`
- **File path:** `docs/quotesystem/FLOORPLAN002_Property_Photo_Validation_Standard_REV01.md`
- **Purpose / likely role:** Property photo validation standard for Trace Mode reference use, compass-aware side mapping, conflict notes, and photo limits before automatic correction.
- **Authority level:** **Quote-system governance / active photo validation standard**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QUOTESYSTEM-001 and promoted/refined by QUOTESYSTEM-002 as docs-only governance. It does not authorize photo analysis automation, floorplan rendering implementation, camera/environment planning implementation, runtime changes, HubSpot, Stripe/payment, or scheduling changes.

### `/docs/quotesystem/FLOORPLAN003_Redraw_Fidelity_Calibration_REV01.md`
- **File path:** `docs/quotesystem/FLOORPLAN003_Redraw_Fidelity_Calibration_REV01.md`
- **Purpose / likely role:** Redraw fidelity calibration standard defining source-sketch fidelity, overlay testing, acceptance/rejection criteria, funeral-home pilot lessons, and downstream gate before placement/BOM/quote work.
- **Authority level:** **Quote-system governance / active redraw fidelity calibration standard**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QUOTESYSTEM-002 as docs-only governance. It does not authorize image-generation implementation, floorplan rendering tool implementation, camera placement, sensor placement, BOM/pricing implementation, customer quote generation, runtime changes, HubSpot, Stripe/payment, or scheduling changes.

### `/docs/quotesystem/PROPERTY001_Property_Model_Architecture_REV01.md`
- **File path:** `docs/quotesystem/PROPERTY001_Property_Model_Architecture_REV01.md`
- **Purpose / likely role:** Property Model architecture standard defining the central operational record connecting field evidence, customer goals, WNYHS solution translation, hardware placement, BOM, inventory, quote, installer packet, and Home Assistant dashboard prep.
- **Authority level:** **Quote-system governance / active property model architecture standard**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QUOTESYSTEM-003 as docs-only governance. It does not authorize database schema, API payloads, quote generation, inventory implementation, payment implementation, scheduling implementation, installer tooling, dashboard generation, HubSpot changes, Stripe/payment changes, or runtime behavior.

### `/docs/quotesystem/GATES001_Quote_To_Install_Operational_Gates_REV01.md`
- **File path:** `docs/quotesystem/GATES001_Quote_To_Install_Operational_Gates_REV01.md`
- **Purpose / likely role:** Quote-to-install operational gates standard defining deposit, scheduling, inventory purchase, final payment, payment methods, and legal/compliance review boundaries.
- **Authority level:** **Quote-system governance / active operational gates standard**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QUOTESYSTEM-003 as docs-only governance. It does not authorize payment implementation, Stripe changes, scheduling implementation, customer quote automation, checkout changes, runtime changes, or final production legal/compliance language.

### `/docs/quotesystem/INVENTORY001_Quote_System_Inventory_Readiness_REV01.md`
- **File path:** `docs/quotesystem/INVENTORY001_Quote_System_Inventory_Readiness_REV01.md`
- **Purpose / likely role:** Inventory readiness standard defining solution/package-first inventory philosophy, standing inventory target, startup exception, Vault exclusion, Control Plane Kit tracking, deposit-triggered inventory workflow, and inventory buffer purpose.
- **Authority level:** **Quote-system governance / active inventory readiness standard**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QUOTESYSTEM-003 as docs-only governance. It does not authorize inventory software, purchasing automation, BOM/pricing implementation, quote generation, payment implementation, scheduling implementation, runtime changes, or vendor commitments.

### `/docs/quotesystem/INSTALLER001_Installer_Packet_Standard_REV01.md`
- **File path:** `docs/quotesystem/INSTALLER001_Installer_Packet_Standard_REV01.md`
- **Purpose / likely role:** Installer packet standard defining onsite time expectations, task ownership buckets, default installer roles, required packet contents, warehouse departure gate, and exception logging.
- **Authority level:** **Quote-system governance / active installer packet standard**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QUOTESYSTEM-003 as docs-only governance. It does not authorize installer software, scheduling implementation, route/UI changes, inventory implementation, quote generation, payment changes, or runtime behavior.

### `/docs/quotesystem/IMPLEMENTATION004_Property_Model_Storage_Admin_Intake_REV01.md`
- **File path:** `docs/quotesystem/IMPLEMENTATION004_Property_Model_Storage_Admin_Intake_REV01.md`
- **Purpose / likely role:** Implementation note for the bounded QUOTESYSTEM-004 Property Model type, local browser-storage adapter, and operator intake/edit route.
- **Authority level:** **Quote-system implementation note / partial runtime implementation**
- **Customer-facing:** No.
- **Implementation authority:** Yes, only for the completed QUOTESYSTEM-004 scope.
- **Notes:** Records a local/dev-compatible storage limitation. It does not authorize production persistence, quote generation, pricing automation, payment processing, HubSpot writes, scheduling writes, inventory automation, installer packet generation, or Home Assistant dashboard generation.

### `/docs/quotesystem/IMPLEMENTATION005_Draft_Quote_Workspace_REV01.md`
- **File path:** `docs/quotesystem/IMPLEMENTATION005_Draft_Quote_Workspace_REV01.md`
- **Purpose / likely role:** Implementation note for the bounded QUOTESYSTEM-005 draft quote workspace extension to the internal Property Model prototype.
- **Authority level:** **Quote-system implementation note / partial runtime implementation**
- **Customer-facing:** No.
- **Implementation authority:** Yes, only for the completed QUOTESYSTEM-005 scope.
- **Notes:** Records local-storage-only workspace support for customer goals, WNYHS solutions, hardware/BOM line items, and draft quote structure. It does not authorize public quote generation, quote PDFs, pricing automation, payment processing, HubSpot writes, scheduling automation, inventory automation, email sending, authentication, production persistence, installer packet generation, or Home Assistant dashboard generation.

### `/docs/quotesystem/IMPLEMENTATION006_Quote_Workspace_Structure_Styling_REV01.md`
- **File path:** `docs/quotesystem/IMPLEMENTATION006_Quote_Workspace_Structure_Styling_REV01.md`
- **Purpose / likely role:** Implementation note for the bounded QUOTESYSTEM-006 refactor of the internal quote workspace structure, HubSpot authority framing, WNYHS terminology, source-backed solution/package selectors, Draft Hardware / BOM status, and token-based styling.
- **Authority level:** **Quote-system implementation note / partial runtime implementation**
- **Customer-facing:** No.
- **Implementation authority:** Yes, only for the completed QUOTESYSTEM-006 scope.
- **Notes:** Records that `/operator/property-model` remains local-storage only and does not authorize HubSpot writes, Stripe/payment behavior, production persistence, pricing automation, inventory automation, scheduling automation, quote PDF generation, email sending, or protected runtime changes.

### `/docs/quotesystem/IMPLEMENTATION007_Floorplan_Evidence_Attachments_REV01.md`
- **File path:** `docs/quotesystem/IMPLEMENTATION007_Floorplan_Evidence_Attachments_REV01.md`
- **Purpose / likely role:** Implementation note for the bounded QUOTESYSTEM-007 extension of the internal quote workspace with repeatable floorplan/property evidence items, controlled evidence type/orientation/status options, WNYHS workflow guidance, and Draft Quote Preview Section 1 evidence summary.
- **Authority level:** **Quote-system implementation note / partial runtime implementation**
- **Customer-facing:** No.
- **Implementation authority:** Yes, only for the completed QUOTESYSTEM-007 scope.
- **Notes:** Records that `/operator/property-model` remains local-storage only and does not authorize file uploads, durable storage, cloud storage, Google Drive integration, image processing, floorplan rendering, AI redraw generation, HubSpot writes, Stripe/payment behavior, production persistence, inventory automation, scheduling automation, quote PDF generation, email sending, or protected runtime changes.

### `/docs/quotesystem/SOLUTION_PLACEMENT001_Hardware_Placement_Standard_REV01.md`
- **File path:** `docs/quotesystem/SOLUTION_PLACEMENT001_Hardware_Placement_Standard_REV01.md`
- **Purpose / likely role:** Placeholder standard for future hardware placement onto approved floorplans after base redraw approval.
- **Authority level:** **Quote-system governance / placeholder**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QUOTESYSTEM-001 for future controlled expansion.

### `/docs/quotesystem/HARDWARE001_HA_COMPATIBILITY_AND_BOM_STANDARD_REV01.md`
- **File path:** `docs/quotesystem/HARDWARE001_HA_COMPATIBILITY_AND_BOM_STANDARD_REV01.md`
- **Purpose / likely role:** Placeholder standard for Home Assistant compatibility, WNYHS control-plane fit, BOM fields, Property Model / inventory linkage, and unsupported hardware disclosure/approval.
- **Authority level:** **Quote-system governance / placeholder**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QUOTESYSTEM-001 for future controlled expansion.

### `/docs/quotesystem/FEATURES001_CUSTOMER_CAPABILITY_MAPPING_STANDARD_REV01.md`
- **File path:** `docs/quotesystem/FEATURES001_CUSTOMER_CAPABILITY_MAPPING_STANDARD_REV01.md`
- **Purpose / likely role:** Placeholder standard for translating BOM hardware into customer-accessible capabilities and future dashboard requirements.
- **Authority level:** **Quote-system governance / placeholder**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QUOTESYSTEM-001 for future controlled expansion.

### `/docs/quotesystem/QUOTE001_CUSTOMER_PROPOSAL_STRUCTURE_REV01.md`
- **File path:** `docs/quotesystem/QUOTE001_CUSTOMER_PROPOSAL_STRUCTURE_REV01.md`
- **Purpose / likely role:** Placeholder standard for customer proposal sections, deposit/install-payment terms, assumptions, exclusions, change orders, and New York legal/compliance review placeholder.
- **Authority level:** **Quote-system governance / placeholder**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QUOTESYSTEM-001 for future controlled expansion. It does not authorize customer quote issuance, pricing automation, payment changes, or scheduling changes.

### `/docs/quotesystem/DASHBOARD_PREP001_HA_DASHBOARD_REQUIREMENTS_STANDARD_REV01.md`
- **File path:** `docs/quotesystem/DASHBOARD_PREP001_HA_DASHBOARD_REQUIREMENTS_STANDARD_REV01.md`
- **Purpose / likely role:** Placeholder standard for translating finalized hardware/BOM decisions into future Home Assistant dashboard requirements.
- **Authority level:** **Quote-system governance / placeholder**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QUOTESYSTEM-001 for future controlled expansion. It does not authorize dashboard generation.

### `/docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`
- **File path:** `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`
- **Purpose / likely role:** Initial quote-system document map listing every created quote-system document, its purpose, and maturity.
- **Authority level:** **Quote-system governance / document map**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QUOTESYSTEM-001 as docs-only governance.

## `docs/design-system/`

### `/docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- **File path:** `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- **Purpose / likely role:** Homepage-derived WNYHS visual design system standard extracted from the active `/home-security` implementation, active semantic tokens, and current homepage CSS.
- **Authority level:** **Design-system governance standard / docs-only extraction artifact**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by DESIGN001-A for operator review. It defines a future reuse target but does not authorize implementation, page changes, CSS changes, semantic token changes, global navigation changes, protected-system changes, or a visible site version bump.

### `/docs/design-system/IMG-CATEGORY001_WNYHS_CATEGORY_ASSET_PRODUCTION_STANDARD_REV01.md`
- **File path:** `docs/design-system/IMG-CATEGORY001_WNYHS_CATEGORY_ASSET_PRODUCTION_STANDARD_REV01.md`
- **Purpose / likely role:** Category-level visual asset production standard defining official production, approval, organization, usage, file naming, folder structure, export, manifest, rejected-asset, future catalog-integration, and Codex restriction rules for WNYHS category assets.
- **Authority level:** **Design-system governance / category asset production standard / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by T-IMG-CATEGORY001-001 as a governance-only artifact. It does not authorize image generation, image file additions or replacements, category page implementation, CSS/token/component/route/layout changes, HubSpot changes, Stripe/payment changes, scheduling/planner/quote/runtime changes, protected-system changes, dependencies, package-lock, environment changes, secrets, Cloudflare config changes, or deployment.

### `/docs/design-system/IMG-CATEGORY002_WNYHS_CATEGORY_ASSET_MANIFEST_STANDARD_REV01.md`
- **File path:** `docs/design-system/IMG-CATEGORY002_WNYHS_CATEGORY_ASSET_MANIFEST_STANDARD_REV01.md`
- **Purpose / likely role:** Category-level asset manifest standard defining the authoritative baseline image inventory, naming patterns, category grouping, category-specific requirements, priority matrix, asset count forecast, manifest fields, and future production-task rules before WNYHS category assets are produced.
- **Authority level:** **Design-system governance / category asset manifest standard / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by T-IMG-CATEGORY002-001 as a governance-only artifact. It does not authorize image generation, image file additions or replacements, category page implementation, CSS/token/component/route/layout changes, HubSpot changes, Stripe/payment changes, scheduling/planner/quote/runtime changes, protected-system changes, dependencies, package-lock, environment changes, secrets, Cloudflare config changes, or deployment.

### `/docs/design-system/IMG-CATEGORY003_WNYHS_CATEGORY_ASSET_SOURCE_MANIFEST_REV01.md`
- **File path:** `docs/design-system/IMG-CATEGORY003_WNYHS_CATEGORY_ASSET_SOURCE_MANIFEST_REV01.md`
- **Purpose / likely role:** Concrete category asset source manifest defining planned baseline asset records by category, including asset IDs, filenames, folder paths, asset class, priority, visual requirements, hardware cluster requirements, dashboard/Core requirements, approval status, generation status, naming review, readiness checklist, and future task routing.
- **Authority level:** **Design-system governance / category asset source manifest / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by T-IMG-CATEGORY003-001 as a governance-only artifact. It does not authorize image generation, image file additions or replacements, category page implementation, CSS/token/component/route/layout changes, HubSpot changes, Stripe/payment changes, scheduling/planner/quote/runtime changes, protected-system changes, dependencies, package-lock, environment changes, secrets, Cloudflare config changes, or deployment.

### `/docs/design-system/IMG-CATEGORY004_HOME_SECURITY_ASSET_GENERATION_PLAN_REV01.md`
- **File path:** `docs/design-system/IMG-CATEGORY004_HOME_SECURITY_ASSET_GENERATION_PLAN_REV01.md`
- **Purpose / likely role:** Home Security category asset generation plan converting the ten planned Home Security rows from IMG-CATEGORY003 into reusable prompt packages, output filenames, folder path, visual requirements, review criteria, sequencing, rejection/revision workflow, and future generation-task routing.
- **Authority level:** **Design-system governance / Home Security asset generation planning / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by T-IMG-CATEGORY004-001 as a governance-only prompt-and-production plan. It does not authorize image generation, image file additions or replacements, category page implementation, CSS/token/component/route/layout changes, HubSpot changes, Stripe/payment changes, scheduling/planner/quote/runtime changes, protected-system changes, dependencies, package-lock, environment changes, secrets, Cloudflare config changes, or deployment.

### `/docs/design-system/IMG-PIPELINE001_OPENAI_IMAGE_GENERATION_PIPELINE_SETUP_PLAN_REV01.md`
- **File path:** `docs/design-system/IMG-PIPELINE001_OPENAI_IMAGE_GENERATION_PIPELINE_SETUP_PLAN_REV01.md`
- **Purpose / likely role:** Setup plan for a future repo-side OpenAI Image API generation pipeline that consumes IMG-CATEGORY003 source manifest records and IMG-CATEGORY004-style category generation plans while preserving dry-run prompt preview, draft/review/approved output separation, overwrite protection, cost controls, claim-safe language, and visual standards.
- **Authority level:** **Design-system governance / image generation pipeline setup planning / docs-only planning**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by T-IMG-PIPELINE001-001 as a governance-only setup plan. It does not authorize OpenAI API implementation, image generation, image file additions or replacements, scripts, package scripts, category page implementation, CSS/token/component/route/layout changes, HubSpot changes, Stripe/payment changes, scheduling/planner/quote/runtime changes, protected-system changes, dependencies, package-lock, environment changes, secrets, Cloudflare config changes, or deployment.

### `/scripts/image-generation/README.md`
- **File path:** `scripts/image-generation/README.md`
- **Purpose / likely role:** Local image generation pipeline README documenting dry-run-first command usage, Home Security-only structured config source model, environment variables, and draft/review output safety rules.
- **Authority level:** **Script documentation / local developer workflow reference**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by T-IMG-PIPELINE001-002 alongside the local script scaffold. It does not authorize executing write mode, calling the OpenAI API, generating image assets, committing candidate images, replacing approved production assets, weakening claim guardrails, modifying `.env` files, adding secrets, or changing protected systems.

### `/docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- **File path:** `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- **Purpose / likely role:** REV02 governed sitewide WNYHS visual token system standard for public marketing pages, including Manrope headings, Inter body/UI, shared CSS primitives, pricing boundary, catalog boundary, claims-safe copy posture, and protected-system exclusions.
- **Authority level:** **Visual-system governance / implementation record for DESIGN-TOKEN-SYSTEM-001**
- **Customer-facing:** No.
- **Implementation authority:** No, except as the governance record created by the bounded DESIGN-TOKEN-SYSTEM-001 implementation task.
- **Notes:** Records the visual token implementation standard and does not authorize public pricing values, invented packages, invented solutions, hardware standardization, HubSpot, Stripe, Resend, Gmail/Workspace, Cloudflare config, scheduling, API/runtime behavior, secrets, route changes, or navigation behavior.

### `/docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- **File path:** `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- **Purpose / likely role:** Standing public page token compliance gate requiring future public page work to check homepage-derived token CSS governance before editing.
- **Authority level:** **Visual governance / public page compliance standard**
- **Customer-facing:** No.
- **Implementation authority:** No, not by itself. Consumed by future bounded public page tasks.
- **Notes:** Added by PAGE-TOKEN-COMPLIANCE-GATE-001 as docs-only governance bookkeeping. It does not authorize source, CSS, route, page, runtime, HubSpot, Stripe/payment, Resend, Gmail/Workspace, scheduling, Cloudflare, secret, asset, dependency, package-lock, visual implementation, pricing, claims, or protected-system changes by itself.


### `/docs/audits/payment_fix001_implementation_rev01.md`
- **Purpose / likely role:** PAYMENT-FIX001 implementation note covering Stripe payment/deposit handoff verification, server-side confirmation posture checks, and claim-safe post-payment messaging hardening.
- **Likely consumed by:** Codex operators, QA reviewers, and payment-flow governance follow-up tasks.

### `/docs/audits/email_fix001_implementation_rev01.md`
- **File path:** `docs/audits/email_fix001_implementation_rev01.md`
- **Purpose / likely role:** EMAIL-FIX001 implementation note covering customer/operator email trigger inventory, recipient routing verification, requestId context visibility, and bounded Resend-path hardening.
- **Authority level:** **Audit implementation artifact**
- **Notes:** Bounded to existing email runtime/trigger/template hardening; preserves HubSpot/Stripe/scheduling architecture boundaries.

### `/docs/audits/funnel_fix001_implementation_rev01.md`
- **File path:** `docs/audits/funnel_fix001_implementation_rev01.md`
- **Purpose / likely role:** FUNNEL-FIX001 implementation note covering CTA routing corrections and stage continuity normalization.
- **Authority level:** **Audit implementation artifact**
- **Notes:** Bounded to CTA/link/route continuity fixes; no Stripe/HubSpot/scheduling architecture changes.




### `/docs/audits/crm_fix001_implementation_rev01.md`
- **File path:** `docs/audits/crm_fix001_implementation_rev01.md`
- **Purpose / likely role:** CRM-FIX001 implementation note documenting canonical lead-intake path normalization to `/api/lead-signal` across main and newsite forms.
- **Authority level:** **Audit implementation artifact**
- **Notes:** Bounded CRM intake normalization only; preserves HubSpot REV03 API-layer-only write constraints and Stripe/scheduling protections.

### `/docs/audits/copy_fix001_implementation_rev01.md`
- **File path:** `docs/audits/copy_fix001_implementation_rev01.md`
- **Purpose / likely role:** COPY-FIX001 implementation note covering claim-safe copy sweep corrections across main/newsite/shared funnel messaging.
- **Authority level:** **Audit implementation artifact**
- **Notes:** Bounded copy/CTA/status wording hardening only; preserves Stripe/HubSpot/scheduling architecture boundaries.

### `/docs/audits/qr_fix001_implementation_rev01.md`
- **File path:** `docs/audits/qr_fix001_implementation_rev01.md`
- **Purpose / likely role:** QR-FIX001 implementation note covering QR/newsite request-stage claim hardening and CTA/status safety updates.
- **Authority level:** **Audit implementation artifact**
- **Notes:** Bounded to QR/newsite copy/status/CTA hardening; preserves owner-confirmed scheduling and protected Stripe/HubSpot boundaries.

### `/docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- **File path:** `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- **Purpose / likely role:** FUNNEL-OPS001 queue-normalization document defining bounded next-task sequencing and priority classes.
- **Authority level:** **Audit planning artifact**
- **Notes:** Planning/governance only; preserves open scheduling posture and avoids runtime behavior changes.

### `/docs/implementation-plan.md`
- **File path:** `docs/implementation-plan.md`
- **Purpose / likely role:** Project implementation planning reference.
- **Authority level:** **Reference / historical**
- **Notes:** Potentially superseded by `/docs/system/plan.md`; review for overlap before relying on it operationally.

### `/docs/stripe-cloudflare.md`
- **File path:** `docs/stripe-cloudflare.md`
- **Purpose / likely role:** Integration notes for Stripe + Cloudflare behavior/deployment context.
- **Authority level:** **Reference / historical**
- **Notes:** Should be treated as reference unless explicitly aligned with active system governance and Step control.


## `docs/catalogs/`

### `/docs/catalogs/wnyhs_capability_catalog_rev02.md`
- **File path:** `docs/catalogs/wnyhs_capability_catalog_rev02.md`
- **Purpose / likely role:** WNYHS Capability Catalog REV02 baseline defining the internal control-plane capability universe for future Home Assistant validation, local-only viability research, BOM development, solution-package planning, WNYHS Core page planning, installation standards, and approved hardware standards.
- **Authority level:** **Planning / catalog / source-of-truth candidate**
- **Customer-facing:** No.
- **Pricing-approved:** No.
- **Notes:** Used for future BOM and solution package work only; it is not a final hardware commitment document and does not authorize runtime, HubSpot, Stripe, scheduling, route, or UI changes.

### `/docs/catalogs/wnyhs_capability_catalog_rev03.md`
- **File path:** `docs/catalogs/wnyhs_capability_catalog_rev03.md`
- **Purpose / likely role:** WNYHS Capability Catalog REV03 applying Deep Research validation findings to the REV02 feature universe with governed validation fields for HA integration, local-only viability, launch suitability, BOM priority, and unresolved research notes.
- **Authority level:** **Internal planning / catalog / validation artifact; source-of-truth candidate for capability validation**
- **Customer-facing:** No.
- **Pricing-approved:** No.
- **BOM-approved:** No.
- **Notes:** Used to guide `BOM001` and `PACKAGE001`; does not authorize public pricing, final hardware commitments, runtime, HubSpot, Stripe, scheduling, route, or UI changes.

## `docs/system/`

### `/docs/system/document_status_reconciliation_rev01.md`
- **File path:** `docs/system/document_status_reconciliation_rev01.md`
- **Purpose / likely role:** Internal governance document reconciliation and status map identifying authoritative docs, historical/supporting docs, superseded candidates, unknown review targets, focused LEADFLOW001 review set, implementation review sets, and documentation gaps.
- **Authority level:** **Internal governance / document reconciliation / status map**
- **Customer-facing:** No.
- **Notes:** Required review aid before LEADFLOW001 and other high-risk implementation work; does not authorize runtime, HubSpot, Stripe, scheduling, route, UI, referral, request-estimate, BOM, package, or pricing changes.

### `/docs/system/OPS002_REPOSITORY_CONNECTOR_DISPATCH_STANDARD_REV01.md`
- **File path:** `docs/system/OPS002_REPOSITORY_CONNECTOR_DISPATCH_STANDARD_REV01.md`
- **Purpose / likely role:** Repository connector dispatch standard defining how ChatGPT should use live GitHub connector access to inspect current repository facts before generating Codex work orders.
- **Authority level:** **System operations governance / dispatcher standard**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by GOV-REPOACCESS-001-B as documentation bookkeeping for OPS002. It improves repo-aware dispatcher preparation and does not authorize source, CSS, route, runtime, API, HubSpot, Stripe, Resend, Gmail/Workspace, Cloudflare, scheduling, secrets, assets, dependencies, package-lock, package/catalog implementation, pricing implementation, or protected-system changes by itself.

### `/docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md`
- **File path:** `docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md`
- **Purpose / likely role:** Defines how ChatGPT should write Codex work orders so Codex uses repo docs as authority while minimizing prompt bloat, unnecessary document loading, broad searches, and repeated governance restatement.
- **Authority level:** **System governance / Codex work-order efficiency standard**
- **Customer-facing:** No.
- **Implementation authority:** No, not by itself. Consumed by future bounded Codex work orders.
- **Notes:** Added by OPS003-CODEX-CONTEXT-EFFICIENCY-001 as docs-only governance and updated by T-OPS001-002 to require targeted-read efficiency instructions and ChatGPT post-run summary review. It improves context efficiency without weakening authority-chain enforcement, bounded task execution, protected-system boundaries, claims guardrails, or validation discipline.

### `/docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
- **File path:** `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
- **Purpose / likely role:** Project-wide workstream routing standard requiring ChatGPT/Codex to classify each task by primary and related workstreams, load current-state/status docs, load owner docs, and check protected systems before task discussion or execution continues.
- **Authority level:** **System governance / workstream routing standard**
- **Customer-facing:** No.
- **Implementation authority:** No, not by itself. It routes context for future bounded tasks.
- **Notes:** Added by T-OPS001-003 as docs-only governance. It does not replace owner standards and does not authorize source, CSS, route, page, runtime, API, HubSpot, Stripe/payment, Resend/email, scheduling, Cloudflare, secrets, assets, dependencies, package-lock, implementation, pricing, claims, or protected-system changes by itself.

### `/docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md`
- **File path:** `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md`
- **Purpose / likely role:** Project-wide workstream status board recording current state, completed work, outstanding work, required docs, related workstreams, protected-system concerns, and next recommended tasks for the 23 OPS004 workstreams, including ChatGPT Sites.
- **Authority level:** **System governance / workstream current-state board**
- **Customer-facing:** No.
- **Implementation authority:** No, not by itself. It summarizes status for future bounded tasks after OPS004 routing.
- **Notes:** Added by T-OPS001-004 as docs-only governance. It does not authorize source, CSS, route, page, runtime, API, HubSpot, Stripe/payment, Resend/email, scheduling, Cloudflare, secrets, assets, dependencies, package-lock, implementation, pricing, claims, or protected-system changes by itself.

### `/docs/system/OPS009_CODEX_WORKFLOW_AND_RSI_GOVERNANCE_REV01.md`
- **File path:** `docs/system/OPS009_CODEX_WORKFLOW_AND_RSI_GOVERNANCE_REV01.md`
- **Purpose / likely role:** Preserved OPS009 lineage for the former Codex workflow and RSI governance owner.
- **Authority level:** **SUPERSEDED historical governance lineage**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Superseded by `/docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`; retained only for OPS009 lineage.

### `/docs/system/PAGE_TOKEN_COMPLIANCE_TASK_PACK_REV01.md`
- **File path:** `docs/system/PAGE_TOKEN_COMPLIANCE_TASK_PACK_REV01.md`
- **Purpose / likely role:** Planning/dispatch task pack listing next public page token-compliance tasks, including solution detail parity, media section, Vault image system, Solutions card density polish, and final governance update.
- **Authority level:** **System planning / dispatch aid**
- **Customer-facing:** No.
- **Implementation authority:** No, not by itself. Each task requires separate bounded work order.
- **Notes:** Added by PAGE-TOKEN-COMPLIANCE-GATE-001 as docs-only governance bookkeeping. It does not authorize source, CSS, route, page, runtime, HubSpot, Stripe/payment, Resend, Gmail/Workspace, scheduling, Cloudflare, secret, asset, dependency, package-lock, visual implementation, pricing, claims, or protected-system changes by itself.


### `/docs/quotesystem/IMPLEMENTATION011_Local_Import_Export_REV01.md`
- **File path:** `docs/quotesystem/IMPLEMENTATION011_Local_Import_Export_REV01.md`
- **Status:** PARTIAL
- **Owner / domain:** Quote System / Property Model Implementation
- **Purpose:** Records the QUOTESYSTEM-011 local JSON import/export implementation for browser-only Property Model backups.
- **Customer-facing:** No

### `/docs/system/project.md`
- **File path:** `docs/system/project.md`
- **Purpose / likely role:** Top-level repository authority and practical precedence hierarchy for Codex execution.
- **Authority level:** **System governance**
- **Notes:** Defines Project KB as ChatGPT control layer only, repository docs as durable truth, current operational context, Master Task Register dispatch, bounded work-order authority, locked standards/specs, runtime contracts, implementation code, and historical Step lineage.

### `/docs/system/agent.md`
- **File path:** `docs/system/agent.md`
- **Purpose / likely role:** Codex agent operating standards and execution expectations.
- **Authority level:** **System governance**
- **Notes:** Explicitly authoritative per root instructions. Updated by T-OPS001-002 to point future work orders to model/reasoning guidance and ChatGPT context-efficiency review duties. Updated by T-OPS001-003 to require OPS004 workstream classification before implementation or documentation edits.

### `/docs/system/plan.md`
- **File path:** `docs/system/plan.md`
- **Purpose / likely role:** Canonical planning/governance process for scoped work.
- **Authority level:** **System governance**
- **Notes:** Explicitly authoritative per root instructions.

### `/docs/system/guardrails.md`
- **File path:** `docs/system/guardrails.md`
- **Purpose / likely role:** Hard constraints, prohibited changes, and safety boundaries.
- **Authority level:** **System governance**
- **Notes:** Explicitly authoritative per root instructions.

### `/docs/system/step-current.md`
- **File path:** `docs/system/step-current.md`
- **Purpose / likely role:** Current operational context document naming the single current-context authority and preserved Step lineage.
- **Authority level:** **System governance**
- **Notes:** Single current operational context authority; historical Steps are lineage/reference only unless promoted here; always check before execution.

### `/docs/system/master-task-register.md`
- **File path:** `docs/system/master-task-register.md`
- **Purpose / likely role:** Operational task driver and executable task queue; only `ACTIVE` tasks are executable unless a bounded prompt task is explicitly created.
- **Authority level:** **System governance (execution driver)**
- **Notes:** Works with `step-current.md`; ACTIVE authorizes bounded execution but does not authorize task bundling.



### `/docs/specs/visual-brand-system-rev01.md`
- **File path:** `docs/specs/visual-brand-system-rev01.md`
- **Purpose / likely role:** Canonical tactical visual identity contract for WNY Home Security customer-facing surfaces.
- **Authority level:** **Specification contract**
- **Notes:** Added for VISUAL001 + VISUAL002; governs semantic-token-safe branding implementation.

## `docs/codex/`

### `/docs/codex/work-orders/T-SITEPROTOTYPE001_WORK_ORDER_REV01.md`
- **File path:** `docs/codex/work-orders/T-SITEPROTOTYPE001_WORK_ORDER_REV01.md`
- **Purpose / likely role:** Canonical repo-native execution work order for the bounded, private, source-backed WNYHS ChatGPT Sites prototype, including client, isolation, project-ID, provenance, iteration, access, validation, production-separation, and protected-system rules.
- **Authority level:** **ACTIVE task-specific work order after merge**
- **Customer-facing:** No.
- **Implementation authority:** Yes, only for the private prototype scope after merge and while `T-SITEPROTOTYPE001` remains ACTIVE.
- **Notes:** Requires ChatGPT Windows App with Codex for actual Sites execution; does not authorize production reconciliation, Cloudflare changes, public/shared access, or merge.

### `/docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- **File path:** `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- **Purpose / likely role:** Sole active detailed owner for Codex execution, work-order construction, targeted-read behavior, validation tiers, retry/failure handling, Git/PR delivery, RSI reporting, and ChatGPT Sites boundaries.
- **Authority level:** **ACTIVE AND CANONICAL Codex execution standard**
- **Customer-facing:** No.
- **Implementation authority:** No; it governs separately authorized work.
- **Notes:** Created by T-CODEXGOVCONSOL001. Root `/AGENTS.md` is the concise always-on entrypoint and points only here for detailed Codex mechanics.

### `/docs/codex/CODEX_RUN_CONTRACT.md`
- **File path:** `docs/codex/CODEX_RUN_CONTRACT.md`
- **Purpose / likely role:** Preserved CODEX-CONTRACT001 lineage for the former Codex run contract.
- **Authority level:** **SUPERSEDED historical governance lineage**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Superseded by `/docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`; retained only for lineage.

### `/docs/codex/CODEX001_CODEX_WORK_ORDER_SPECIFICATION_REV01.md`
- **File path:** `docs/codex/CODEX001_CODEX_WORK_ORDER_SPECIFICATION_REV01.md`
- **Purpose / likely role:** Preserved CODEX001 / KAOS lineage for the former detailed work-order specification.
- **Authority level:** **SUPERSEDED historical governance lineage**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Superseded by `/docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`; retained only for lineage.

### `/docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`
- **File path:** `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`
- **Purpose / likely role:** Preserved predecessor lineage for the former Codex work-order standard.
- **Authority level:** **SUPERSEDED historical governance lineage**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Superseded by `/docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`; retained only for lineage.

### `/docs/codex/templates/CODEX_REPOSITORY_STARTER_STANDARD_REV01.md`
- **File path:** `docs/codex/templates/CODEX_REPOSITORY_STARTER_STANDARD_REV01.md`
- **Purpose / likely role:** Portable starter for repositories adopting a concise AGENTS entrypoint, targeted reads, bounded work orders, validation tiers, Git/PR rules, protected-system placeholders, and RSI closeout.
- **Authority level:** **Non-authoritative portable template until adopted and customized**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** WNYHS governance does not automatically control adopting repositories.

### `/docs/codex/CODEX_TASK_REGISTER_RULES.md`
- **File path:** `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- **Purpose / likely role:** Codex task-register execution rules defining the Master Task Register as dispatch board, task schema, status lifecycle, active-task gating, prompt-created work-order allowance, and stop discipline.
- **Authority level:** **Codex workflow / task dispatch governance**
- **Notes:** Works under `/docs/system/project.md`, `/docs/system/step-current.md`, and `/docs/system/master-task-register.md`; does not authorize runtime, UI, route, HubSpot, Stripe, scheduling, or implementation changes by itself.

### `/docs/codex/CODEX_TASK_TEMPLATE.md`
- **File path:** `docs/codex/CODEX_TASK_TEMPLATE.md`
- **Purpose / likely role:** Codex task-entry template aligned to current operational context, protected-system guardrails, validation, and output format.
- **Authority level:** **Codex workflow**
- **Notes:** Operationally required by current task invocation.

### `/docs/codex/QA_CHECKLIST.md`
- **File path:** `docs/codex/QA_CHECKLIST.md`
- **Purpose / likely role:** QA validation checklist for Codex-delivered changes.
- **Authority level:** **QA / validation**
- **Notes:** Complements template and build/test expectations.

## `docs/governance/`

### `/docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`
- **File path:** `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`
- **Purpose / likely role:** Approved governance context for next-generation WNYHS site hierarchy, content architecture, content inheritance, navigation, homepage, QR Landing, WNYHS Core, and standards sequencing.
- **Authority level:** **Approved governance context / site-content architecture**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Promoted by GOV009. Does not authorize application code, routes, runtime, protected systems, UI rebuilds, asset replacement, or source changes by itself.

### `/docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- **File path:** `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- **Purpose / likely role:** Working visual-system standard for WNYHS light-theme-first presentation, semantic-token usage, visual hierarchy, photography, cards, buttons, search, navigation, homepage, and QR Landing visual structure.
- **Authority level:** **Working visual governance standard**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Promoted by GOV009. Requires a separate bounded task before any CSS, component, token, route, asset, or public-page implementation.

### `/docs/governance/MASTER_SOLUTION_CATALOG_V1.md`
- **File path:** `docs/governance/MASTER_SOLUTION_CATALOG_V1.md`
- **Purpose / likely role:** Approved V1 catalog of WNYHS Solution Objects across Home Security, Aging-In-Place, Environmental Safety, Home Automation, and Home Lighting categories.
- **Authority level:** **Approved catalog / solution inventory**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Promoted by GOV009. Catalog references may guide future planning, but no page, route, card, package, Fit Check, runtime, or protected-system changes are authorized by this document alone.

### `/docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`
- **File path:** `docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`
- **Purpose / likely role:** Working Solution Object standard defining solution metadata, relationships to packages/categories/search, WNYHS Core requirements, media expectations, page structure, CTAs, and production-readiness criteria.
- **Authority level:** **Working solution-object governance standard**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Promoted by GOV009. Supersedes narrower solution-page framing for future planning, but still requires separate bounded implementation authorization.

### `/docs/governance/SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01.md`
- **File path:** `docs/governance/SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01.md`
- **Purpose / likely role:** Working solution media standard for image roles, optional image types, modal/lightbox behavior, captions, alt text, generation guidance, naming, and readiness rules.
- **Authority level:** **Working solution-media governance standard**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Promoted by GOV009. Does not authorize image generation, asset replacement, media wiring, source changes, routes, CSS, or protected-system work.

### `/docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`
- **File path:** `docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`
- **Purpose / likely role:** Working package standard defining package relationships, naming, quantity/growth rules, WNYHS Core role, composition, metadata, page structure, and pricing boundaries.
- **Authority level:** **Working package governance standard**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Promoted by GOV009. Does not authorize package page changes, pricing, routes, runtime systems, protected systems, or application code changes.

### `/docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`
- **File path:** `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`
- **Purpose / likely role:** Working category standard defining category structure, approved top-level categories, relationships to packages/solutions, category page structure, metadata, search, homepage, and QR Landing relationships.
- **Authority level:** **Working category governance standard**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Promoted by GOV009. Does not authorize category pages, navigation changes, search implementation, routing, source changes, or protected-system work.

### `/docs/governance/CATEGORY002_WNYHS_CATEGORY_LANDING_PAGE_STRUCTURE_REV01.md`
- **File path:** `docs/governance/CATEGORY002_WNYHS_CATEGORY_LANDING_PAGE_STRUCTURE_REV01.md`
- **Purpose / likely role:** Working category landing page structure standard defining the Homepage -> Category -> Featured Solutions -> Full Solution Catalog -> Specific Solution Page -> Estimate / Consultation journey, required category landing page section order, reveal section, featured solutions rule, WNYHS Core requirement, custom solutions CTA, global CTA, visual/token requirements, claims guardrails, and relationship to CATEGORY001.
- **Authority level:** **Working category landing-page governance standard**
- **Customer-facing:** No.
- **Implementation authority:** No. Future category landing page implementation requires an ACTIVE Master Task Register task and bounded Codex work order.
- **Notes:** Added by CATEGORY002-GOV-001 as docs-only governance. It does not authorize source, CSS, route, component, image, homepage link, runtime, HubSpot, Stripe/payment, scheduling, Resend/email, API/backend, Cloudflare config, dependency, package-lock, semantic token definition, deployment, or protected-system changes by itself.

### `/docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`
- **File path:** `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`
- **Purpose / likely role:** Active category landing page image and visual parity standard capturing the approved Home Automation category page as the reference implementation for future category pages, including asset classes, thumbnail rules, dashboard/mobile/routine proof hierarchy, WNYHS Core image/copy behavior, visual parity rules, and repeatable asset packages.
- **Authority level:** **Active category image and visual parity governance standard**
- **Customer-facing:** No.
- **Implementation authority:** No. Future category page implementation, CSS changes, image generation, asset replacement, route changes, or runtime changes require a separate bounded task and work order.
- **Notes:** Added by CATEGORY003-GOV-001 as docs-only governance. It does not authorize source, CSS, route, component, image, homepage, `/home-automation`, runtime, HubSpot, Stripe/payment, scheduling, Resend/email, API/backend, Cloudflare config, dependency, package-lock, semantic token definition, deployment, or protected-system changes by itself.

### `/docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`
- **File path:** `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`
- **Purpose / likely role:** Working UX/page-structure standard for homepage and QR Landing purpose, hierarchy, search, content order, navigation expectations, visual alignment, and mockup-reference handling.
- **Authority level:** **Working UX governance standard**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Promoted by GOV009. Planning input only until a separate bounded task authorizes homepage, QR Landing, search, route, CSS, component, or runtime changes.

## `docs/planning/`

### `/docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`
- **File path:** `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`
- **Purpose / likely role:** Planning-only Homepage redesign plan translating GOV009-promoted site architecture, visual-system, category, package, solution, media, and homepage/QR Landing governance into an implementation-ready section plan.
- **Authority level:** **Planning document / implementation-readiness artifact**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by HOMEPAGE-REDESIGN-PLANNING-001. Defines Homepage purpose, section order, Search, Category Explorer, Featured Packages, Featured Solutions, WNYHS Core, CTA, footer, visual-system requirements, content source mapping, forbidden scope, and a future implementation task recommendation. Does not authorize source, CSS, component, route, runtime, HubSpot, Stripe, Resend, Google Workspace, Cloudflare, scheduling, asset, image-generation, Search, Homepage, QR Landing, or implementation changes by itself.

### `/docs/planning/QRLANDING_REDESIGN_PLAN_REV01.md`
- **File path:** `docs/planning/QRLANDING_REDESIGN_PLAN_REV01.md`
- **Purpose / likely role:** Planning-only QR Landing redesign plan translating GOV009-promoted governance, the Homepage redesign plan, and QR runtime contracts into an implementation-ready conversion-page plan.
- **Authority level:** **Planning document / implementation-readiness artifact**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by QRLANDING-REDESIGN-PLANNING-001. Defines QR Landing purpose, section order, Search, scan acknowledgment, Popular Solutions, WNYHS Core, Light Theme alignment, Request Estimate, Call / Text, content source mapping, QR attribution preservation, requestId preservation, lead-signal preservation, forbidden scope, and a future implementation task recommendation. Does not authorize source, CSS, component, route, runtime, HubSpot, Stripe, Resend, Google Workspace, Cloudflare, scheduling, analytics, attribution, asset, image-generation, Search, Homepage, QR Landing, qrlanding, requestId, lead-signal, or implementation changes by itself.

### `/docs/planning/SEARCH_UX_PLAN_REV01.md`
- **File path:** `docs/planning/SEARCH_UX_PLAN_REV01.md`
- **Purpose / likely role:** Planning-only public Search UX plan translating promoted governance plus Homepage and QR Landing planning docs into an implementation-ready Search scope, result, metadata, placement, ranking, accessibility, and forbidden-result plan.
- **Authority level:** **Planning document / implementation-readiness artifact**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by SEARCH-UX-PLANNING-001. Defines Search purpose, scope, search result types, placement, behavior, ranking recommendations, metadata, Category / Package / Solution / Public Information mapping, Homepage and QR Landing requirements, mobile/accessibility requirements, forbidden result types, forbidden implementation scope, and a future implementation task recommendation. Does not authorize source, CSS, component, route, runtime, HubSpot, Stripe, Resend, Google Workspace, Cloudflare, scheduling, analytics, attribution, asset, image-generation, Search implementation, Homepage implementation, QR Landing implementation, QR attribution changes, API changes, or protected-system changes by itself.

### `/docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md`
- **File path:** `docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md`
- **Purpose / likely role:** Planning-only site content ownership and routing plan defining the canonical source hierarchy for Solution, Package, Category, Homepage, QR Landing, Search, Public Information, image/media, Fit Check, and Catalog generation content.
- **Authority level:** **Planning document / implementation-readiness artifact**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by SITE-CONTENT-OWNER-ROUTING-001. Defines ownership philosophy, source of truth hierarchy, inheritance rules, duplicate prevention, recommended repository content structure, Search indexing sources, Fit Check guidance, Catalog guidance, implementation boundary, and a follow-up implementation task recommendation. Does not authorize source, CSS, component, route, runtime, HubSpot, Stripe, Resend, Google Workspace, Cloudflare, scheduling, analytics, attribution, asset, image-generation, Search implementation, Homepage implementation, QR Landing implementation, Category implementation, Package implementation, Solution implementation, Fit Check implementation, Catalog generation, API changes, or protected-system changes by itself.

### `/docs/governance/GOVERNANCE_RECONCILIATION_TASK_PLAN_REV01.md`
- **File path:** `docs/governance/GOVERNANCE_RECONCILIATION_TASK_PLAN_REV01.md`
- **Purpose / likely role:** Governance-only reconciliation task plan sequencing authority-chain, task-dispatch, operator-workflow, document-classification, conflicting-Step, runtime-ownership, Project KB, and implementation-resume tasks.
- **Authority level:** **Governance planning / reconciliation sequence**
- **Implementation authority:** No.
- **Notes:** Includes GOV005, GOV006, and GOV007 plans for Step101, QR Step102, and Step201 documents classified as `CONFLICTING / NEEDS RECONCILIATION`; does not authorize Step doc rewrites, runtime changes, code changes, task-register updates, or protected-system work by itself.


## `docs/runtime/`

### `/docs/runtime/README.md`
- **File path:** `docs/runtime/README.md`
- **Purpose / likely role:** Canonical runtime documentation area definition and scope boundaries.
- **Authority level:** **Operational documentation foundation**
- **Notes:** Introduced by RUNTIME001 as runtime-doc root and guardrail boundary.

### `/docs/runtime/cloudflare_env.md`
- **File path:** `docs/runtime/cloudflare_env.md`
- **Purpose / likely role:** Canonical Cloudflare Pages runtime/environment contract covering deployment model, env ownership, diagnostics, and validation.
- **Authority level:** **Operational runtime contract**
- **Notes:** Authored in RUNTIME002 REV01; marks confirmed assumptions and unknowns needing operator verification.

### `/docs/runtime/cloudflare_current_config_inventory_rev01.md`
- **File path:** `docs/runtime/cloudflare_current_config_inventory_rev01.md`
- **Purpose / likely role:** Read-only Cloudflare current config inventory for zone, DNS, Pages, Functions, environment variable names, Email Routing, deployment, and security posture.
- **Authority level:** **Current Config Inventory / runtime evidence**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by RUNTIME-AUDIT-001 as documentation-only inventory. Records repo-documented facts and marks dashboard/API-only areas as `Not inspected`; does not authorize or perform Cloudflare, DNS, deployment, route, runtime, code, Stripe, HubSpot, Resend, Google Workspace, or secret changes.

### `/docs/runtime/hubspot_current_config_inventory_rev01.md`
- **File path:** `docs/runtime/hubspot_current_config_inventory_rev01.md`
- **Purpose / likely role:** Read-only HubSpot Current Config Inventory for CRM ownership, object model, contact/deal property names, pipeline/stage IDs, forms, lists, workflows, integration variable names, and API-layer posture.
- **Authority level:** **Current Config Inventory / runtime evidence**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by RUNTIME-AUDIT-002 as documentation-only inventory aligned to HubSpot REV03. Preserves `/api/lead-signal` as the canonical boundary, records repo-documented facts, marks HubSpot dashboard/API-only areas as `Not inspected`, and records No configuration changes and No secret values; does not authorize or perform HubSpot schema, property, pipeline, stage, workflow, runtime, code, Stripe, Cloudflare, Resend, Google Workspace, or secret changes.

### `/docs/runtime/resend_current_config_inventory_rev01.md`
- **File path:** `docs/runtime/resend_current_config_inventory_rev01.md`
- **Purpose / likely role:** Read-only Resend Current Config Inventory for outbound email domains, sender identities, API key variable names, webhook posture, suppression/bounce posture, and operator/customer email boundaries.
- **Authority level:** **Current Config Inventory / runtime evidence**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by RUNTIME-AUDIT-003 as documentation-only inventory. Records repo-documented facts, marks Resend dashboard/API-only areas as `Not inspected`, and records No configuration changes and No secret values; does not authorize or perform Resend, domain, sender, DNS, webhook, API key, email runtime, code, Cloudflare, HubSpot, Stripe, Google Workspace, or secret changes.

### `/docs/runtime/stripe_current_config_inventory_rev01.md`
- **File path:** `docs/runtime/stripe_current_config_inventory_rev01.md`
- **Purpose / likely role:** Read-only Stripe Current Config Inventory for payment ownership, products/prices, checkout posture, webhook endpoints, deposit/payment verification, server-side authority boundaries, and environment variable names without values.
- **Authority level:** **Current Config Inventory / runtime evidence**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by RUNTIME-AUDIT-004 as documentation-only inventory. Records repo-documented facts, marks Stripe dashboard/API-only areas as `Not inspected`, reaffirms webhook and server-side payment verification boundaries, and records No configuration changes and No secret values; does not authorize or perform Stripe configuration, product, price, checkout, payment link, webhook, tax, payout, account, code, runtime, HubSpot, Cloudflare, Resend, Google Workspace, or secret changes.

### `/docs/runtime/google_workspace_current_config_inventory_rev01.md`
- **File path:** `docs/runtime/google_workspace_current_config_inventory_rev01.md`
- **Purpose / likely role:** Read-only Google Workspace Current Config Inventory for domain identity, email aliases/groups, Calendar ownership, account roles, security posture, integration boundaries, and unknown areas.
- **Authority level:** **Current Config Inventory / runtime evidence**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by RUNTIME-AUDIT-005 as documentation-only inventory. Records repo-documented Google Workspace and Calendar references, marks Google Admin/Workspace-only areas as `Not inspected`, confirms no scheduling or email routing behavior changed, and records No configuration changes and No secret values; does not authorize or perform Google Workspace configuration, user, group, alias, calendar, routing, security, scheduling, email routing, code, runtime, Cloudflare, HubSpot, Stripe, Resend, or secret changes.

### `/docs/runtime/stripe_runtime.md`
- **File path:** `docs/runtime/stripe_runtime.md`
- **Purpose / likely role:** Canonical Stripe runtime/payment contract for server-side verification, webhook authority, env ownership, diagnostics, and change governance.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by RUNTIME003 REV01 with confirmed repo evidence and explicit UNKNOWN / NEEDS VERIFICATION markers.

### `/docs/runtime/resend_runtime.md`
- **File path:** `docs/runtime/resend_runtime.md`
- **Purpose / likely role:** Canonical outbound Resend runtime contract for ownership boundaries, env vars, flow, diagnostics, and change governance.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by RUNTIME004 REV01 with explicit UNKNOWN / NEEDS VERIFICATION markers for unverified live settings.

### `/docs/runtime/cloudflare_email_routing.md`
- **File path:** `docs/runtime/cloudflare_email_routing.md`
- **Purpose / likely role:** Canonical inbound Cloudflare Email Routing runtime contract for alias/forwarding ownership and validation procedures.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by RUNTIME004 REV01; separates inbound routing ownership from outbound Resend responsibilities.

### `/docs/runtime/runtime_contract_template.md`
- **File path:** `docs/runtime/runtime_contract_template.md`
- **Purpose / likely role:** Standardized required schema for all runtime contracts.
- **Authority level:** **Operational template standard**
- **Notes:** Required structure for future runtime owner documents.



### `/docs/runtime/scheduling_future_model.md`
- **File path:** `docs/runtime/scheduling_future_model.md`
- **Purpose / likely role:** Canonical future-state scheduling model (state machine, communication consent, ownership split, and bounded future task queue) while preserving current manual-confirmation production posture.
- **Authority level:** **Operational runtime planning contract**
- **Notes:** Added by SCHED001; implementation-neutral guidance only (no runtime behavior changes).

### `/docs/runtime/scheduling_ownership.md`
- **File path:** `docs/runtime/scheduling_ownership.md`
- **Purpose / likely role:** Canonical scheduling ownership contract defining request-vs-confirmed appointment semantics, operator responsibility, communication boundaries, and Google Calendar/HubSpot/Stripe/email runtime boundaries.
- **Authority level:** Runtime contract (operational hardening canon).
- **Primary consumers:** Operators, runtime maintainers, QA/release validation owners.
- **Notes:** Added by RUNTIME007 REV01 with confirmed repo evidence and explicit UNKNOWN / NEEDS VERIFICATION markers.

### `/docs/runtime/runtime_ownership_map.md`
- **File path:** `docs/runtime/runtime_ownership_map.md`
- **Purpose / likely role:** Runtime systems owner-doc index with status tracking and follow-up task mapping.
- **Authority level:** **Operational runtime index**
- **Notes:** Canonical map for runtime contract rollout sequencing.

### `/docs/runtime/lead_signal_contract.md`
- **File path:** `docs/runtime/lead_signal_contract.md`
- **Purpose / likely role:** Canonical lead-signal runtime contract for `/api/lead-signal` ownership boundaries, payload expectations, failure handling, and diagnostics.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by RUNTIME005 REV01 with confirmed source-backed behavior plus explicit UNKNOWN / NEEDS VERIFICATION markers.

### `/docs/runtime/leadflow_referral_attribution_runtime.md`
- **File path:** `docs/runtime/leadflow_referral_attribution_runtime.md`
- **Purpose / likely role:** Internal runtime contract defining future-safe lead intake modernization, manual referral capture, named QR source attribution, HubSpot referral mapping requirements, quote-visible referral awareness boundaries, and referral payout review posture.
- **Authority level:** **Internal runtime contract / documentation-only / no implementation authority**
- **Customer-facing:** No.
- **Notes:** Required before leadflow/referral implementation, HubSpot referral mapping, named QR attribution, quote-visible referral work, or referral SOP work; does not create runtime behavior, HubSpot properties, payout automation, pricing, route changes, UI changes, Stripe changes, or Scheduling changes.

### `/docs/runtime/named_qr_source_attribution_schema_rev01.md`
- **File path:** `docs/runtime/named_qr_source_attribution_schema_rev01.md`
- **Purpose / likely role:** Internal runtime schema contract defining sourceId naming, source type taxonomy, registry fields, URL parameter rules, validation/fallback posture, QR asset registration rules, HubSpot mapping relationship, and reporting gates for named QR source attribution.
- **Authority level:** **Internal runtime schema contract**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Required before named QR source implementation, partner QR creation, and source-aware HubSpot mapping; does not create QR codes, print assets, URL parsing, HubSpot properties, or runtime behavior.

### `/docs/runtime/qrlanding_runtime.md`
- **File path:** `docs/runtime/qrlanding_runtime.md`
- **Purpose / likely role:** Canonical QRLanding runtime attribution contract defining placard-route assumptions, requestId lifecycle expectations, Cloudflare analytics interpretation rules, and campaign KPI ladder governance.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by RUNTIME008 REV01 as documentation-only attribution governance; does not implement runtime analytics SDK behavior.



### `/docs/runtime/qr_attribution_reporting.md`
- **File path:** `docs/runtime/qr_attribution_reporting.md`
- **Purpose / likely role:** Canonical weekly QR attribution reporting/review SOP for placard performance, KPI ladder interpretation, directional conversion calculations, decision logging, and evidence capture.
- **Authority level:** **Operational runtime SOP contract**
- **Notes:** Added by RUNTIME011 REV01 as docs-only governance; no runtime behavior or analytics implementation authority.

### `/docs/runtime/request_id_contract.md`
- **File path:** `docs/runtime/request_id_contract.md`
- **Purpose / likely role:** Canonical requestId lifecycle and correlation contract spanning API response, logs, email, and HubSpot propagation boundaries.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by RUNTIME005 REV01; documents confirmed requestId behavior and explicit referenceId relationship unknowns.


### `/docs/runtime/hubspot_properties.md`
- **File path:** `docs/runtime/hubspot_properties.md`
- **Purpose / likely role:** Canonical HubSpot runtime property/enum ownership contract and token naming boundary documentation.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by RUNTIME006 REV01 with confirmed evidence and explicit UNKNOWN / NEEDS VERIFICATION markers.

### `/docs/runtime/hubspot_sync_contract.md`
- **File path:** `docs/runtime/hubspot_sync_contract.md`
- **Purpose / likely role:** Canonical HubSpot sync runtime boundary contract for `/api/lead-signal` orchestration, partial sync behavior, and diagnostics.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by RUNTIME006 REV01 and aligned to HubSpot REV03 API-layer-only write path constraints.


### `/docs/runtime/google_calendar_runtime.md`
- **File path:** `docs/runtime/google_calendar_runtime.md`
- **Purpose / likely role:** Canonical Google Calendar read-only availability runtime contract for scheduling API behavior, env vars, and fallback posture.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by SCHED-IMPL002; advisory availability only (no booking authority, no writes).

### `/docs/runtime/deployment_validation.md`
- **File path:** `docs/runtime/deployment_validation.md`
- **Purpose / likely role:** Canonical deployment validation SOP defining pre-deployment, deployment, post-deployment, smoke-test, rollback/freeze, and release-readiness operational gates.
- **Authority level:** **Operational runtime SOP contract**
- **Notes:** Added by QA001 REV01 with explicit UNKNOWN / NEEDS VERIFICATION markers for unverified live automation/tooling assumptions.

## `docs/crm/hubspot/`

### `/docs/crm/hubspot/hubspot_kb_rev03.md`
- **File path:** `docs/crm/hubspot/hubspot_kb_rev03.md`
- **Purpose / likely role:** Active, locked HubSpot contract and architecture constraints.
- **Authority level:** **CRM contract**
- **Notes:** Authoritative and current; governs permitted CRM write path via API.

### `/docs/crm/hubspot/hubspot_kb_rev02.md`
- **File path:** `docs/crm/hubspot/hubspot_kb_rev02.md`
- **Purpose / likely role:** Prior HubSpot contract revision retained for historical context.
- **Authority level:** **Reference / historical**
- **Notes:** Superseded by `hubspot_kb_rev03.md` unless content explicitly reactivated.

### `/docs/crm/hubspot/hubspot_kb_rev01.md`
- **File path:** `docs/crm/hubspot/hubspot_kb_rev01.md`
- **Purpose / likely role:** Original HubSpot knowledge base revision for historical traceability.
- **Authority level:** **Reference / historical**
- **Notes:** Superseded by later revisions (`rev02`, `rev03`); use only for historical comparison.

## `public/images/home-security/`

### `/public/images/home-security/README.md`
- **File path:** `public/images/home-security/README.md`
- **Purpose / likely role:** Asset-folder usage notes for home-security image resources.
- **Authority level:** **Unknown / needs review**
- **Notes:** Likely local documentation for media management; not part of explicit governance chain.

---

## Summary Metrics

- **Total Markdown files cataloged:** **25**
- **Primary authoritative set recognized in this catalog:**
  - `AGENTS.md`
  - `docs/system/project.md`
  - `docs/system/agent.md`
  - `docs/system/plan.md`
  - `docs/system/guardrails.md`
  - `docs/system/step-current.md`
  - `docs/crm/hubspot/hubspot_kb_rev03.md`
- **Historical/reference HubSpot revisions:**
  - `docs/crm/hubspot/hubspot_kb_rev01.md`
  - `docs/crm/hubspot/hubspot_kb_rev02.md`

## `docs/steps/`

### `/docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- **File path:** `docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- **Purpose / likely role:** Original Step102 hardening context retained for historical traceability.
- **Authority level:** **ARCHIVED / SUPERSEDED**
- **Lineage status:** Superseded by QRLanding Step102 for historical Step102 naming.
- **Notes:** Must not be treated as controlling context.

### `/docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- **File path:** `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- **Purpose / likely role:** QR acquisition funnel implementation Step102 artifact retained for historical lineage and future reference.
- **Authority level:** **SUPPORTING REFERENCE**
- **Lineage status:** Historical Step102 QRLanding lineage reconciled by GOV006 as non-controlling reference material.
- **Notes:** Use only as supporting QRLanding reference when explicitly named by the current operational context or bounded work order; it does not authorize route, CRM, lead-signal, scheduling, attribution, runtime, HubSpot, Stripe, Cloudflare, deployment, or UI changes by itself.

### `/docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md`
- **File path:** `docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md`
- **Purpose / likely role:** Home Security funnel/page structure reference retained for funnel intent lineage.
- **Authority level:** **SUPPORTING REFERENCE**
- **Lineage status:** Historical Step101 funnel/page lineage reconciled by GOV005 as non-controlling reference material.
- **Notes:** Use only as supporting reference when explicitly named by the current operational context or bounded work order; it does not authorize UI, funnel, route, visual-standard, or copy-rule changes by itself.

### `/docs/steps/step_103_full_funnel_validation_rev_01.md`
- **File path:** `docs/steps/step_103_full_funnel_validation_rev_01.md`
- **Purpose / likely role:** Full-funnel validation baseline and findings snapshot.
- **Authority level:** **HISTORICAL BASELINE**
- **Lineage status:** Completed validation lineage; regression reference. Preserved prior-Step references are historical, not current execution authority.
- **Notes:** Non-controlling unless explicitly elevated by `step-current.md` or a bounded active task/work order.

### `/docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- **File path:** `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- **Purpose / likely role:** Email architecture Step retained for outbound Resend and audit-copy lineage.
- **Authority level:** **SUPPORTING REFERENCE**
- **Lineage status:** Historical Step201 email lineage reconciled by GOV007 as non-controlling reference material.
- **Notes:** Use only as supporting email reference when explicitly named by the current operational context or bounded work order; it does not authorize email runtime, Resend, endpoint, DNS, Cloudflare Email Routing, secret, audit-copy, HubSpot, Stripe, Cloudflare, deployment, or code changes by itself.

### `/docs/steps/placeholder.txt`
- **File path:** `docs/steps/placeholder.txt`
- **Purpose / likely role:** Directory retention placeholder.
- **Authority level:** **Reference / non-authoritative**
- **Lineage status:** N/A.
- **Notes:** No execution authority.

## `docs/specs/`

### `/docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- **File path:** `docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- **Purpose / likely role:** Canonical pre-implementation scheduling architecture and operational workflow target consolidating SCHED002–SCHED008.
- **Authority level:** **SUPPORTING SPECIFICATION (implementation target)**
- **Lineage status:** Derived from SCHED001 runtime docs/audit; does not override current production manual-confirmation posture.
- **Notes:** Documentation-only architecture/workflow authority for future bounded SCHED-IMPL tasks.

### `/docs/specs/quote_referral_awareness_spec_rev01.md`
- **File path:** `docs/specs/quote_referral_awareness_spec_rev01.md`
- **Purpose / likely role:** Internal quote/referral specification defining how referral and named-source attribution may be visible to operators during future quote preparation.
- **Authority level:** **Internal quote/referral specification**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Required before quote-visible referral awareness implementation; does not authorize quote UI changes, quote automation, pricing changes, discounts, payout automation, HubSpot schema/sync changes, Stripe changes, or customer-facing referral copy.

- `docs/audits/lead_fix001_implementation_rev01.md` — LEAD-FIX001 continuity hardening implementation record.


## `docs/crm/hubspot/`

### `/docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- **File path:** `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- **Purpose / likely role:** Canonical HubSpot deal pipeline architecture for WNYHS (stages, movement rules, operator workflow, dedupe boundaries, and protected runtime guardrails).
- **Authority level:** **CRM architecture contract**
- **Notes:** Added by CRM-PIPELINE001 as documentation-only governance prior to CRM-DEAL002B runtime hardening.

### `/docs/crm/hubspot/hubspot_referral_property_mapping_rev01.md`
- **File path:** `docs/crm/hubspot/hubspot_referral_property_mapping_rev01.md`
- **Purpose / likely role:** Internal CRM mapping contract defining proposed HubSpot contact/deal/note/task placement, internal property names, field types, enum values, sync rules, and approval gates for referral attribution, named QR source attribution, lead entry path, and referral payout review.
- **Authority level:** **Internal CRM mapping contract**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Required before LEADFLOW002, ATTRIBUTION001, QUOTE-REFERRAL001, and referral-aware HubSpot sync changes; does not create HubSpot properties, write to HubSpot, change API payloads, or authorize payout automation.

## `docs/ops/`

### `/docs/ops/referral_payout_review_sop_rev01.md`
- **File path:** `docs/ops/referral_payout_review_sop_rev01.md`
- **Purpose / likely role:** Internal operations SOP defining manual referral payout review, eligibility, approval, decline, dispute, and paid-status recording expectations.
- **Authority level:** **Internal operations SOP**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Required before referral payout handling implementation; does not authorize payout automation, Stripe changes, HubSpot schema changes, quote automation, API payload changes, or customer-facing referral copy.

### `/docs/ops/referral_compensation_policy_rev01.md`
- **File path:** `docs/ops/referral_compensation_policy_rev01.md`
- **Purpose / likely role:** Internal operations policy defining referral compensation models, default customer referral rate, partner/referrer override rules, payee documentation thresholds, documentation holds, hot-lead/vendor lead handling, cash payout acknowledgement, annual payment tracking, and installer/contractor separation.
- **Authority level:** **Internal operations policy**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Required before referral payout implementation, LEADFLOW002, and contractor/referrer payment tracking; does not authorize payout automation, HubSpot changes, Stripe changes, quote behavior changes, tax/legal filing implementation, API payload changes, or customer-facing referral copy.


- **CRM-CONTRACT001 Note:** `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`, `docs/runtime/hubspot_sync_contract.md`, and `docs/runtime/hubspot_properties.md` now lock the live WNYHS Sales Pipeline ID/stage IDs and production `HUBSPOT_ESTIMATE_INITIAL_STAGE_ID` runtime contract values.

### `/docs/runtime/protected_runtime_contract.md`
- **File path:** `docs/runtime/protected_runtime_contract.md`
- **Purpose / likely role:** Canonical protected production runtime lock contract for lead intake, HubSpot sync, requestId, Stripe verification boundaries, scheduling authority boundaries, and mandatory QA gates.
- **Authority level:** **Operational runtime governance contract**
- **Notes:** Added by GOV-HARDEN002 to prevent drift/regression of known-good production runtime behavior.

### `/docs/runtime/funnel_context_contract_rev01.md`
- **File path:** `docs/runtime/funnel_context_contract_rev01.md`
- **Purpose / likely role:** Canonical funnel context field contract locking approved keys, value domains, and discoveryContext shape.
- **Authority level:** **Runtime/funnel context specification contract**
- **Notes:** Added by GOV-HARDEN002 to prevent context alias drift.

### `/docs/specs/main_funnel_contract_rev01.md`
- **File path:** `docs/specs/main_funnel_contract_rev01.md`
- **Purpose / likely role:** Canonical main funnel route flow and CTA hierarchy lock.
- **Authority level:** **Funnel specification contract**
- **Notes:** Added by GOV-HARDEN002; preserves Request Estimate language until owner-confirmed scheduling.

### `/docs/system/chat_transfer_prompt_gov_harden002.md`
- **File path:** `docs/system/chat_transfer_prompt_gov_harden002.md`
- **Purpose / likely role:** Copy/paste transfer prompt for new chats with current protected runtime, funnel, context, task, and next-step governance.
- **Authority level:** **System operations handoff artifact**
- **Notes:** Added by GOV-HARDEN002 for continuity between sessions.


### `/docs/brand/brand_asset_standards_rev01.md`
- **File path:** `docs/brand/brand_asset_standards_rev01.md`
- **Purpose / likely role:** Locked WNYHS brand asset locations, usage, prohibited behavior, and tone requirements.
- **Authority level:** **Brand governance standard**
- **Notes:** Added by STD-LOCK001 to prevent brand asset drift.

### `/docs/brand/page_layout_standards_rev01.md`
- **File path:** `docs/brand/page_layout_standards_rev01.md`
- **Purpose / likely role:** Locked WNYHS page layout order, rhythm, typography, and site-consistency rules.
- **Authority level:** **Layout governance standard**
- **Notes:** Added by STD-LOCK001 for public page consistency.

### `/docs/brand/header_footer_standards_rev01.md`
- **File path:** `docs/brand/header_footer_standards_rev01.md`
- **Purpose / likely role:** Locked WNYHS header/nav order, QR nav exception, and footer composition rules.
- **Authority level:** **Navigation/footer governance standard**
- **Notes:** Added by STD-LOCK001 to enforce footer/header parity.

### `/docs/specs/qr_funnel_standards_rev01.md`
- **File path:** `docs/specs/qr_funnel_standards_rev01.md`
- **Purpose / likely role:** Locked QR funnel purpose, nav, copy cleanup, and payload-preservation boundaries.
- **Authority level:** **QR funnel governance standard**
- **Notes:** Added by STD-LOCK001; protects HubSpot/lead API/payload behavior.

### `/docs/specs/public_funnel_standards_rev01.md`
- **File path:** `docs/specs/public_funnel_standards_rev01.md`
- **Purpose / likely role:** Locked public-funnel route roles, CTA discipline, claims guardrails, and allowed language posture.
- **Authority level:** **Public funnel governance standard**
- **Notes:** Added by STD-LOCK001 for visual/funnel execution consistency.



### `/docs/brand/print_system_standards_rev01.md`
- **File path:** `docs/brand/print_system_standards_rev01.md`
- **Purpose / likely role:** Canonical vendor-safe print production standards for WNYHS physical brand materials.
- **Authority level:** **Brand / print production authority**
- **Status:** **Active / canonical**
- **Notes:** Controls physical print production rules for readability, QR reliability, margins, substrate guidance, and claims-safe execution.

### `/docs/brand/brand_asset_authority_rev01.md`
- **File path:** `docs/brand/brand_asset_authority_rev01.md`
- **Purpose / likely role:** Canonical visual asset authority controlling approved WNYHS logo, QR, campaign image, and physical-brand asset usage.
- **Authority level:** **Brand authority**
- **Status:** **Active / canonical**
- **Notes:** Freezes visual identity to prevent drift across digital and physical materials.

### `/docs/brand/print_assets/qr_placard_system_rev01.md`
- **File path:** `docs/brand/print_assets/qr_placard_system_rev01.md`
- **Purpose / likely role:** Canonical QR placard production system for WNYHS local physical scan marketing, including approved placard sizes, layout variants, QR usage rules, copy-safe constraints, placement guidance, and print export/testing requirements.
- **Authority level:** **Brand / print asset production system**
- **Status:** **Active / canonical**
- **Notes:** Controls WNYHS QR placard production rules and approved placard variants.

### `/docs/brand/print_assets/half_sheet_flyer_system_rev01.md`
- **File path:** `docs/brand/print_assets/half_sheet_flyer_system_rev01.md`
- **Purpose / likely role:** Canonical half-sheet flyer production system defining approved flyer sizes, variants, copy blocks, QR usage, and source-controlled print workflow boundaries.
- **Authority level:** **Brand / print asset production system**
- **Status:** **Active / canonical**
- **Notes:** Controls WNYHS half-sheet flyer production rules and approved flyer variants.


### `/docs/quotesystem/IMPLEMENTATION008_Hardware_Placement_Reconciliation_REV01.md`
- **File path:** `docs/quotesystem/IMPLEMENTATION008_Hardware_Placement_Reconciliation_REV01.md`
- **Purpose / likely role:** Records the QUOTESYSTEM-008 local Quote Workspace hardware placement reconciliation implementation.
- **Authority level:** **Implementation note / quote-system runtime documentation**
- **Status:** **Implemented / partial local-storage prototype**
- **Notes:** Confirms reconciliation is local only and does not change HubSpot, Stripe, pricing, inventory, ordering, scheduling, email, auth, or production storage.


### `/docs/quotesystem/IMPLEMENTATION009_Quote_Preview_Print_View_REV01.md`
- **File path:** `docs/quotesystem/IMPLEMENTATION009_Quote_Preview_Print_View_REV01.md`
- **Purpose / likely role:** Records the QUOTESYSTEM-009 local Property Model quote preview / browser-print implementation.
- **Authority level:** **Implementation note / quote-system runtime documentation**
- **Status:** **Implemented / partial local-storage prototype**
- **Notes:** Confirms the preview is local only and does not add PDF generation, quote sending, HubSpot writes, Stripe changes, inventory automation, ordering automation, scheduling automation, auth, production storage, dependencies, or package-lock changes.
### `/docs/quotesystem/IMPLEMENTATION010_Installer_Packet_View_REV01.md`
- **File path:** `docs/quotesystem/IMPLEMENTATION010_Installer_Packet_View_REV01.md`
- **Purpose / likely role:** Implementation note for the local-storage-only installer packet browser-print view.
- **Authority level:** **Quote-system implementation record**
- **Customer-facing:** No.
- **Implementation authority:** No, records QUOTESYSTEM-010 implementation only.
- **Notes:** Documents that PDF generation, sending, scheduling, inventory/ordering automation, HubSpot sync, payment logic, auth, and durable storage remain out of scope.
- `docs/quotesystem/IMPLEMENTATION012_Quote_Workspace_Usability_Pass_REV01.md` — QUOTESYSTEM-012 internal Quote Workspace usability implementation note.


### `/docs/quotesystem/IMPLEMENTATION013_Pricing_Totals_Placeholder_REV01.md`
- **File path:** `docs/quotesystem/IMPLEMENTATION013_Pricing_Totals_Placeholder_REV01.md`
- **Purpose / likely role:** Records the QUOTESYSTEM-013 local manual pricing and totals placeholder implementation.
- **Authority level:** **Implementation note / quote-system runtime documentation**
- **Status:** **Implemented / partial local-storage prototype**
- **Notes:** Confirms manual totals only; no pricing engine, catalog pricing, Stripe/payment implementation, HubSpot writes, inventory costing, scheduling automation, or durable storage.


### `/docs/quotesystem/IMPLEMENTATION014_Funeral_Home_Test_Case_REV01.md`
- **File path:** `docs/quotesystem/IMPLEMENTATION014_Funeral_Home_Test_Case_REV01.md`
- **Purpose / likely role:** Records the QUOTESYSTEM-014 local funeral home Property Model test-case implementation.
- **Authority level:** **Implementation note / quote-system runtime documentation**
- **Status:** **Implemented / partial local-storage prototype**
- **Notes:** Confirms sample data is localStorage-only and does not add HubSpot writes, Stripe/payment changes, uploads, inventory automation, ordering automation, scheduling automation, auth, PDF generation, durable storage, dependencies, or package-lock changes.

## QUOTESYSTEM-015 — Redraw + Photo Analysis Handoff

- **Document:** `docs/quotesystem/FLOORPLAN004_Redraw_Photo_Analysis_Handoff_REV01.md`
- **Status:** ACTIVE
- **Purpose / likely role:** Governance for manual professional redraw and property photo-analysis handoff inputs, hierarchy, limited-evidence fallback, and quote-risk outputs.
- **Protected boundaries:** Does not authorize image processing, AI redraw generation, uploads, LiDAR capture, durable backend persistence, HubSpot writes, Stripe/payment changes, inventory automation, ordering, scheduling, or public-site claims.

- **Document:** `docs/quotesystem/IMPLEMENTATION015_Redraw_Photo_Analysis_Handoff_REV01.md`
- **Status:** ACTIVE IMPLEMENTATION NOTE
- **Purpose / likely role:** Records the local Property Model redraw/photo handoff fields, workspace behavior, and quote preview/installer packet compatibility added for QUOTESYSTEM-015.
- **Protected boundaries:** Local browser workspace support only; HubSpot and Stripe/payment untouched.

### `/docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_MARKETING_VISUAL_PARITY_001_REV01.md`
- **File path:** `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_MARKETING_VISUAL_PARITY_001_REV01.md`
- **Document type:** Implementation record
- **Authority level:** Task completion record for WNYHS-PUBLIC-MARKETING-VISUAL-PARITY-001
- **Implementation authority:** No. Records the completed bounded public marketing visual parity pass.
- **Notes:** Documents migrated static public pages, WNYHS visual primitives used, claim-risk cleanup, protected-system confirmations, validation, and remaining visual-review gap for version `v1.0.143`.

### `/docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_MARKETING_VISUAL_PARITY_002_REV01.md`
- **File path:** `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_MARKETING_VISUAL_PARITY_002_REV01.md`
- **Document type:** Implementation record
- **Authority level:** Task completion record for WNYHS-PUBLIC-MARKETING-VISUAL-PARITY-002
- **Implementation authority:** No. Records the completed bounded package detail visual parity pass.
- **Notes:** Documents migrated package detail routes, WNYHS visual primitives used, preserved package data/flows, protected-system confirmations, validation, and remaining visual-review gap for version `v1.0.144`.

- `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_MARKETING_VISUAL_PARITY_003_REV01.md` — Contact + Support wrapper visual parity implementation record (v1.0.145).


### `/docs/governance/HOTFIX_WNYHS_APEX_HOSTNAME_001_REV01.md`
- **File path:** `docs/governance/HOTFIX_WNYHS_APEX_HOSTNAME_001_REV01.md`
- **Document type:** Hotfix investigation and implementation record
- **Authority level:** Task completion record for HOTFIX-WNYHS-APEX-HOSTNAME-001
- **Implementation authority:** No. Records the bounded apex hostname hotfix only.
- **Notes:** Documents hostname/domain logic found, root-cause assessment, Cloudflare Pages apex-to-www redirect fix, validation, and protected-system confirmations for version `v1.0.147`.

### `/docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_VISUAL_QA_001_REV01.md`
- **File path:** `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_VISUAL_QA_001_REV01.md`
- **Document type:** Implementation record
- **Authority level:** Task completion record for WNYHS-PUBLIC-VISUAL-QA-001
- **Implementation authority:** No. Records the completed bounded public visual QA correction pass.
- **Notes:** Documents public destination inspection, readability/token corrections, preserved nav/footer destinations, preserved form/API behavior, protected-system confirmations, and validation for version `v1.0.148`.


### `/docs/quotesystem/WNYHS_Create_Estimate_Instruction_Manual_REV02.md`
- **File path:** `docs/quotesystem/WNYHS_Create_Estimate_Instruction_Manual_REV02.md`
- **Purpose / likely role:** Internal Create Estimate instruction manual REV02 for customer discovery to deposit-ready quote preparation, embedding the controlled REV08 floorplan evidence gate, two-pass reconstruction, SVG/vector baseline workflow, lock statuses, quote output requirements, quality checklist, and GPT Proposed prompt controls.
- **Authority level:** **Quote-system internal operating procedure / docs-only manual**
- **Customer-facing:** No.
- **Implementation authority:** No runtime authority; governs internal estimate preparation only under current higher-authority context.
- **Notes:** REV01 is not overwritten. DOCX/PDF exports are generated artifacts, not repo-tracked source files. Does not authorize quote runtime code, HubSpot, Stripe/payment, scheduling, support/contact forms, catalog schema, package pricing/data, auth, durable storage, dependencies, package-lock, image processing, uploads, LiDAR capture, computer vision, or AI redraw generation.

### `/docs/quotesystem/FLOORPLAN_QUOTE_WORKFLOW_GOVERNANCE_REV01.md`
- **File path:** `docs/quotesystem/FLOORPLAN_QUOTE_WORKFLOW_GOVERNANCE_REV01.md`
- **Document type:** Quote-system governance standard
- **Authority level:** Floorplan quote workflow governance for future bounded quote-floorplan tasks.
- **Implementation authority:** No. Documents the controlled evidence, two-pass reconstruction, vector geometry, approval-gate, and locked-baseline workflow only.
- **Notes:** References `FLOORPLAN REV08 — Frozen First Floor Geometry Baseline` as the current generic funeral-home test-case working artifact and confirms no runtime quote-system, HubSpot, Stripe/payment, scheduling, support/contact form, catalog schema, package pricing/data, auth, durable storage, dependency, image-processing, upload, LiDAR capture, computer-vision, or AI redraw implementation authority.

### `/docs/quotesystem/IMPLEMENTATION017_Customer_Estimate_Preview_Alignment_REV01.md`
- **File path:** `docs/quotesystem/IMPLEMENTATION017_Customer_Estimate_Preview_Alignment_REV01.md`
- **Purpose / likely role:** Records the QUOTE-SYSTEM-STANDARD-002 runtime/UI alignment of the local Quote Preview route to the Customer Estimate Packet standard.
- **Authority level:** **Implementation note / quote-system runtime documentation**
- **Status:** **Implemented / partial local-storage prototype**
- **Notes:** Confirms customer estimate section order, proposal/acceptance fields, customer-facing deliverables, dashboard placeholder cards, assumptions/exclusions/warranty, and protected-system boundaries for version `v1.0.154`.

### `/docs/quotesystem/IMPLEMENTATION018_Internal_SOW_Installer_Packet_Alignment_REV01.md`
- **File path:** `docs/quotesystem/IMPLEMENTATION018_Internal_SOW_Installer_Packet_Alignment_REV01.md`
- **Purpose / likely role:** Records the QUOTE-SYSTEM-STANDARD-003 runtime/UI alignment of the local Installer Packet route to the Internal SOW Packet standard.
- **Authority level:** **Implementation note / quote-system runtime documentation**
- **Status:** **Implemented / partial local-storage prototype**
- **Notes:** Confirms internal SOW section order, evidence/redraw/photo-analysis field exposure, opening inventory gap handling, hardware/BOM reconciliation counts, installer task planning, display-only checklist behavior, payment/scheduling gate reminders, route/localStorage preservation, and protected-system boundaries for version `v1.0.155`.

- `docs/quotesystem/IMPLEMENTATION019_Structured_Opening_Inventory_REV01.md` — Records QUOTE-SYSTEM-STANDARD-004 structured opening inventory implementation for the local Property Model, customer estimate summary, installer packet detail, Funeral Home Test Case, and protected-system exclusions.

### `/docs/governance/GOVAUTH001_WNYHS_COMPLETE_GOVERNANCE_AUTHORITY_AUDIT_REV01.md`
- **File path:** `docs/governance/GOVAUTH001_WNYHS_COMPLETE_GOVERNANCE_AUTHORITY_AUDIT_REV01.md`
- **Document type:** Completed governance authority audit / reference evidence
- **Authority level:** Reference evidence only; does not replace primary authority or owner standards.
- **Implementation authority:** No.
- **Notes:** Created by T-GOVAUTH001 as the single bounded audit of repository authority, owner documents, prompt/work-order rules, skills, plugins, connectors, workflows, non-secret local Codex configuration, conflicts, missing owners, status drift, required load sets, and remediation candidates. Protected systems and runtime behavior were untouched; remediation tasks were recorded but not activated.

### `/docs/governance/WNYHS_GOVERNANCE_AUDIT_REFERENCE_MODEL_REV01.md`
- **File path:** `docs/governance/WNYHS_GOVERNANCE_AUDIT_REFERENCE_MODEL_REV01.md`
- **Document type:** Active non-authoritative governance narrative companion
- **Authority level:** Reference and routing only; does not replace repository governance, owner standards, runtime contracts, ACTIVE tasks, or work orders.
- **Implementation authority:** No.
- **Notes:** Created by T-GOVREF001 from GOVAUTH001 and the Project KB reconciliation findings bounded by the work order. Explains the WNYHS authority chain, execution lifecycle, capability-versus-authority boundary, domain routing, idea/product promotion, public-offerings-page routing, marketing-to-sales routing, protected systems, unresolved audit findings, and inactive remediation roadmap. No owner authority or remediation status changed.

### `/docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV02.md`
- **File path:** `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV02.md`
- **Document type:** Active category owner standard
- **Authority level:** Current category identity, naming, ordering, boundary, and relationship owner; supersedes CATEGORY001 REV01 for current decisions.
- **Implementation authority:** No.
- **Notes:** Records the exact six-category public model, Home Safety alias posture, Property Management boundaries, reusable Solution ownership, duplicate-prevention rules, marketing/SEO terminology, and future category-change governance under T-CATEGORYRECON001.

### `/docs/site-architecture/SITEARCH005_WNYHS_SIX_CATEGORY_RECONCILIATION_DECISION_REV01.md`
- **File path:** `docs/site-architecture/SITEARCH005_WNYHS_SIX_CATEGORY_RECONCILIATION_DECISION_REV01.md`
- **Document type:** Active site-architecture reconciliation decision
- **Authority level:** Current six-category route, alias, source-inventory, and implementation-deferral decision under SITEARCH owner governance.
- **Implementation authority:** No.
- **Notes:** Confirms `/categories/home-safety`, recommends deferred `/categories/property-management`, preserves existing routes/funnels, inventories exact source surfaces, defers coordinated source work, and records the T-NEWSOLUTIONS001 post-merge unblock condition.

### `/docs/catalogs/WNYHS_INTERNAL_SOLUTION_ARSENAL_REV01.md`
- **File path:** `docs/catalogs/WNYHS_INTERNAL_SOLUTION_ARSENAL_REV01.md`
- **Document type:** Governed internal solution and hardware/BOM reconciliation catalog
- **Authority level:** T-NEWSOLUTIONS001 commercial-planning index subordinate to current Category, Solution, Offering, Hardware, BOM, Claims, Home Assistant, Dashboard, and Notification owners.
- **Implementation authority:** No.
- **Notes:** Records 53 evidence/status-controlled solution records, 33 hardware evidence records, six-category classification, customer outcomes, Home Assistant behavior, dashboard/notification needs, limitations, public visibility, BOM posture, campaign suitability, evidence gaps, and protected-system boundaries. Does not authorize website/runtime work, pricing, purchasing, customer BOMs, external-platform activity, or protected-system changes.

### `/docs/catalogs/WNYHS_CUSTOMER_SOLUTION_CATALOG_REV01.md`
- **File path:** `docs/catalogs/WNYHS_CUSTOMER_SOLUTION_CATALOG_REV01.md`
- **Document type:** Customer-facing solution catalog specification and approved content source set
- **Authority level:** T-NEWSOLUTIONS001 public-content planning artifact subordinate to CATEGORY001 REV02, Solution/Offering/Claims owners, and public funnel authority.
- **Implementation authority:** No.
- **Notes:** Defines six exact category sections, 30 traceable customer possibilities, progressive disclosure, navigation/search recommendations, mobile/accessibility rules, URL recommendations, estimate CTA posture, and claims/protected-system boundaries. Property Management route implementation remains deferred.

### `/docs/marketing/WNYHS_NEW_SOLUTIONS_PUBLIC_CONTENT_SPEC_REV01.md`
- **File path:** `docs/marketing/WNYHS_NEW_SOLUTIONS_PUBLIC_CONTENT_SPEC_REV01.md`
- **Document type:** New Solutions public-content and future-page specification
- **Authority level:** T-NEWSOLUTIONS001 content planning artifact; route/source/SEO/funnel implementation requires a separate ACTIVE task.
- **Implementation authority:** No.
- **Notes:** Defines audience, customer problems, hero options, six-category copy, solution-family and representative-card copy, trust/privacy/local-first posture, CTA and FAQ recommendations, homepage/subpage support, SEO/schema intake, attribution recommendations, and protected lead/scheduling boundaries.

### `/docs/marketing/WNYHS_NEW_SOLUTIONS_HIGGSFIELD_SOCIAL_ASSET_PACK_REV01.md`
- **File path:** `docs/marketing/WNYHS_NEW_SOLUTIONS_HIGGSFIELD_SOCIAL_ASSET_PACK_REV01.md`
- **Document type:** Higgsfield-ready video and social campaign content pack
- **Authority level:** T-NEWSOLUTIONS001 draft campaign asset specification; generation/publication requires separate approval.
- **Implementation authority:** No.
- **Notes:** Defines Wave 1/2/Evergreen/Hold selection, six Wave 1 concepts, 18 duration scripts, 28 scene prompts, format adaptations, claims/visual limits, 84 social copy/tracking items, destination/UTM recommendations, sequence, follow-up, sales intent, and measurement recommendations. No assets were generated or published.

### `/docs/marketing/WNYHS_NEW_SOLUTIONS_COMMERCIAL_TRACEABILITY_MATRIX_REV01.md`
- **File path:** `docs/marketing/WNYHS_NEW_SOLUTIONS_COMMERCIAL_TRACEABILITY_MATRIX_REV01.md`
- **Document type:** Commercial traceability and protected-boundary matrix
- **Authority level:** T-NEWSOLUTIONS001 evidence map from internal status through customer catalog, destination, campaign, CTA, existing intake, and sales follow-up.
- **Implementation authority:** No.
- **Notes:** Traces all 30 customer catalog entries, records hardware/BOM and campaign posture, confirms no public entry relies on research status, defers the Property Management route, and preserves existing lead, CRM, scheduling, and external-platform boundaries.
