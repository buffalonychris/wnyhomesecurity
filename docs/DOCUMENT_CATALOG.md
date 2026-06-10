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


## `docs/design-system/`

### `/docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- **File path:** `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- **Purpose / likely role:** Homepage-derived WNYHS visual design system standard extracted from the active `/home-security` implementation, active semantic tokens, and current homepage CSS.
- **Authority level:** **Design-system governance standard / docs-only extraction artifact**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Added by DESIGN001-A for operator review. It defines a future reuse target but does not authorize implementation, page changes, CSS changes, semantic token changes, global navigation changes, protected-system changes, or a visible site version bump.


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

### `/docs/system/project.md`
- **File path:** `docs/system/project.md`
- **Purpose / likely role:** Top-level repository authority and practical precedence hierarchy for Codex execution.
- **Authority level:** **System governance**
- **Notes:** Defines Project KB as ChatGPT control layer only, repository docs as durable truth, current operational context, Master Task Register dispatch, bounded work-order authority, locked standards/specs, runtime contracts, implementation code, and historical Step lineage.

### `/docs/system/agent.md`
- **File path:** `docs/system/agent.md`
- **Purpose / likely role:** Codex agent operating standards and execution expectations.
- **Authority level:** **System governance**
- **Notes:** Explicitly authoritative per root instructions.

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

### `/docs/codex/CODEX_RUN_CONTRACT.md`
- **File path:** `docs/codex/CODEX_RUN_CONTRACT.md`
- **Purpose / likely role:** Reusable standard Codex run contract defining always-on governance, protected-system, validation, branch/PR, and output rules for future Codex tasks.
- **Authority level:** **Active Codex governance contract**
- **Customer-facing:** No.
- **Implementation authority:** No.
- **Notes:** Required review/load document for future Codex tasks; does not authorize runtime, UI, route, form, HubSpot, Stripe, scheduling, lead-signal, QRLanding, or other implementation changes by itself.

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
