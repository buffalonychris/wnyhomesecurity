# KAOS001 Relationship & Dependency Model REV01

Status: Active KAOS relationship model
Task ID: KAOS001-DEPMAP001
Customer-facing: No
Implementation authority: No

## 1. Purpose

This model defines how KAOS Knowledge Objects relate to each other.

Dependencies are only one relationship type. The graph is a view of the operating system, not the objective. Relationships exist to make authority, ownership, references, implementation links, validation evidence, artifacts, data movement, supersession, workflow events, and system impact easier to inspect.

Relationships enable:

- impact analysis before promotion or implementation
- task routing through the Master Task Register
- validation planning
- future automation only after separate bounded authorization

This document does not create runtime behavior, hooks, automation, business process registry records, RSI records, decision records, graph visualizations, or implementation tasks.

## 2. Relationship Categories

| Category | Meaning |
| --- | --- |
| Authority relationships | Connect an object to governing, parent, child, or superseding authority. |
| Dependency relationships | Identify operational or logical reliance between objects. |
| Ownership relationships | Identify the document, system, role, or workstream responsible for an object. |
| Reference relationships | Record citation, evidence, or cross-reference without automatic reliance. |
| Implementation relationships | Connect standards, tasks, source surfaces, or artifacts that implement an object. |
| Validation relationships | Connect objects to checks, tests, evidence, review records, or acceptance criteria. |
| Artifact relationships | Connect objects to produced or consumed documents, customer artifacts, installer artifacts, packets, or outputs. |
| Data relationships | Identify records, fields, payloads, state, or source inputs that are consumed or updated. |
| System-impact relationships | Identify affected workstreams, protected systems, or downstream review surfaces. |
| Supersession relationships | Identify replacement, historical lineage, or successor relationships without automatic deletion. |
| Workflow/event relationships | Identify event-style cause and effect relationships such as triggers, blockers, and follow-on review points. |

## 3. Canonical Relationship Types

| Type | Definition | Direction | Expected source object types | Expected target object types | Example | Impact analysis |
| --- | --- | --- | --- | --- | --- | --- |
| `parent_authority` | Source is governed by a higher authority. | source -> parent | Any object | Governance, Standard, Specification, Runtime Contract, Task | `KAOS001-DEPMAP001` -> `/docs/system/master-task-register.md` | Yes |
| `child_authority` | Source governs or contains a lower authority object. | source -> child | Governance, Standard, Specification, Runtime Contract | Any object | `/docs/kaos/README.md` -> KAOS model docs | Yes |
| `depends_on` | Source relies on target for correctness, execution, or operation. | source -> dependency | Any object | Any object | Install-day checklist -> quote/SOW | Yes |
| `required_by` | Source is required by target. | source -> consumer | Any object | Any object | BOM -> installer pick list | Yes |
| `owns` | Source owns responsibility for target. | source -> owned object | Governance, Standard, Workstream, Task | Any object | Quote System -> installer packet standard | Yes |
| `owned_by` | Source is owned by target. | source -> owner | Any object | Governance, Standard, Workstream, Task | Public route policy -> SEO workstream | Yes |
| `references` | Source cites target as evidence or context. | source -> reference | Any object | Any object | Intake workflow -> Knowledge Object Schema | Sometimes |
| `referenced_by` | Source is cited by target. | source -> citing object | Any object | Any object | REV03 -> relationship model task | Sometimes |
| `implements` | Source implements, applies, or realizes target. | source -> implemented authority | Task, Implementation Evidence, Source Surface, Artifact | Standard, Specification, Runtime Contract, Decision | SEO task -> SEO standard | Yes |
| `implemented_by` | Source is implemented by target. | source -> implementer | Standard, Specification, Runtime Contract, Decision | Task, Implementation Evidence, Source Surface, Artifact | Metadata policy -> SEO implementation task | Yes |
| `validated_by` | Source is validated by target. | source -> validation artifact | Any object | Validation Artifact, Task, Test, Review Evidence | Relationship model -> `git diff --check` | Yes |
| `validates` | Source validates target. | source -> validated object | Validation Artifact, Task, Test, Review Evidence | Any object | Build output -> changed source task | Yes |
| `produces` | Source creates target as an output. | source -> produced artifact | Task, Business Process, Runtime Contract, Workflow Event | Customer Artifact, Installer Artifact, Validation Artifact, Document, Data Record | Quote workflow -> agreement | Yes |
| `produced_by` | Source is produced by target. | source -> producer | Customer Artifact, Installer Artifact, Validation Artifact, Document, Data Record | Task, Business Process, Runtime Contract, Workflow Event | Installer packet -> quote workspace | Yes |
| `consumes` | Source uses target as an input. | source -> consumed input | Task, Business Process, Runtime Contract, Workflow Event, Artifact | Data Record, Document, Artifact, Standard | Install-day process -> staged inventory | Yes |
| `consumed_by` | Source is consumed by target. | source -> consumer | Data Record, Document, Artifact, Standard | Task, Business Process, Runtime Contract, Workflow Event, Artifact | Property model -> quote/SOW | Yes |
| `updates` | Source changes or maintains target. | source -> updated object | Task, Business Process, Runtime Contract, Workflow Event | Document, Data Record, Runtime State, Artifact | Catalog import -> catalog record | Yes |
| `updated_by` | Source is changed or maintained by target. | source -> updater | Document, Data Record, Runtime State, Artifact | Task, Business Process, Runtime Contract, Workflow Event | Installed asset record -> lead-signal API layer | Yes |
| `affects` | Source may affect target and requires impact review. | source -> affected object | Any object | Any object | Route change -> sitemap | Yes |
| `affected_by` | Source may be affected by target and requires impact review. | source -> affecting object | Any object | Any object | Internal links -> public route decision | Yes |
| `supersedes` | Source replaces target as current or preferred authority. | source -> superseded object | Governance, Standard, Specification, Runtime Contract, Decision, Document | Governance, Standard, Specification, Runtime Contract, Decision, Document | REV03 -> REV02 planning reference | Yes |
| `superseded_by` | Source is replaced by target. | source -> successor | Governance, Standard, Specification, Runtime Contract, Decision, Document | Governance, Standard, Specification, Runtime Contract, Decision, Document | Historical standard -> current standard | Yes |
| `blocks` | Source prevents target from proceeding until resolved. | source -> blocked object | Any object | Task, Workflow Event, Business Process, Decision | Missing owner decision -> task activation | Yes |
| `blocked_by` | Source cannot proceed because target is unresolved. | source -> blocker | Task, Workflow Event, Business Process, Decision | Any object | Future hook task -> workflow event standard | Yes |
| `triggers` | Source initiates target review, workflow, or task candidate. | source -> triggered object | Workflow Event, Task, Business Process, Runtime Evidence, Validation Artifact | Task, Review, Intake Record, Validation Artifact | Failed validation -> reconsideration check | Yes |
| `triggered_by` | Source was initiated by target. | source -> trigger | Task, Review, Intake Record, Validation Artifact | Workflow Event, Task, Business Process, Runtime Evidence, Validation Artifact | Impact review -> catalog item change | Yes |

## 4. Dependency vs Relationship Clarification

Every dependency is a relationship. Not every relationship is a dependency.

Dependency relationships imply operational or logical reliance. If one side changes, the other may become invalid, incomplete, or unsafe to execute.

Reference relationships do not automatically imply dependency. A document can cite another document as context without relying on it for execution.

Supersession relationships do not automatically imply deletion. Historical documents remain preserved unless a separate bounded task explicitly authorizes deletion, movement, or archival treatment.

`affected_by` and `affects` relationships support impact review. They do not automatically create implementation tasks, blockers, owner decisions, or Master Task Register entries.

## 5. Impact Analysis Mapping

Relationship types support four practical impact questions:

| Impact question | Relevant relationship types | What to inspect |
| --- | --- | --- |
| Upstream inputs: what feeds this? | `parent_authority`, `depends_on`, `owned_by`, `references`, `implemented_by`, `validated_by`, `produced_by`, `consumes`, `updated_by`, `affected_by`, `superseded_by`, `blocked_by`, `triggered_by` | Governing docs, source evidence, input records, validation artifacts, owner documents, blockers, and event sources. |
| Downstream outputs: what depends on this? | `child_authority`, `required_by`, `owns`, `referenced_by`, `implements`, `validates`, `produces`, `consumed_by`, `updates`, `affects`, `supersedes`, `blocks`, `triggers` | Documents, artifacts, tasks, records, workstreams, implementation surfaces, and future review candidates that may need action. |
| Shared data: what records, fields, artifacts, or runtime states are touched? | `produces`, `produced_by`, `consumes`, `consumed_by`, `updates`, `updated_by`, `implements`, `implemented_by`, `affects`, `affected_by` | Data records, catalog inputs, CRM/API payload boundaries, quote artifacts, customer artifacts, installer artifacts, validation artifacts, and runtime state. |
| Ripple risks: what hidden consequences should be checked? | `depends_on`, `required_by`, `references`, `referenced_by`, `affects`, `affected_by`, `supersedes`, `superseded_by`, `blocks`, `blocked_by`, `triggers`, `triggered_by` | Protected systems, owner ambiguity, stale references, historical lineage, validation gaps, deferred operator decisions, and downstream workstream assumptions. |

Impact mapping is evidence for review. It is not automatic authorization to modify any related object.

## 6. Relationship Record Template

```yaml
relationship_id:
relationship_type:
source_object_id:
source_object_name:
target_object_id:
target_object_name:
relationship_summary:
direction:
impact_analysis_relevance:
validation_required:
source_reference:
owner_document:
status:
operator_decision_required:
```

## 7. Object-Level Relationship Template

```yaml
relationships:
  parent_authority:
  depends_on:
  required_by:
  owns:
  owned_by:
  references:
  referenced_by:
  implements:
  implemented_by:
  validated_by:
  produces:
  consumes:
  updates:
  affects:
  affected_by:
  supersedes:
  superseded_by:
  blocks:
  blocked_by:
  triggers:
  triggered_by:
```

Unknown values must be marked `Unknown`. Do not invent relationships to make a graph look complete.

## 8. Example Relationship Maps

### Example A - Catalog Item Change

Scenario: a catalog item record changes after validated source evidence changes.

| Source | Relationship | Target | Impact note |
| --- | --- | --- | --- |
| Catalog item | `affects` | Solution package | Confirm package/customer-facing inclusion still matches approved capability. |
| Catalog item | `affects` | Quote BOM | Confirm quote line items and quantities still resolve. |
| Quote BOM | `produces` | Agreement | Confirm customer agreement scope remains consistent with quote output. |
| Catalog item | `affects` | Procurement | Confirm ordering, availability, and substitution review. |
| Quote BOM | `produces` | Installer pick list | Confirm install-day materials remain complete. |
| Catalog item | `affects` | Dashboard template | Confirm device/entity assumptions remain valid. |
| Lead Signal API layer | `updates` | HubSpot installed asset | Confirm CRM writes remain API-layer only and within REV03 boundaries. |
| Installed asset | `affects` | Warranty/support/RMA | Confirm post-install support records and replacement handling remain traceable. |

### Example B - Route / SEO Change

Scenario: a public route changes ownership, canonical treatment, or visibility.

| Source | Relationship | Target | Impact note |
| --- | --- | --- | --- |
| Public route | `affects` | Metadata | Confirm title, description, Open Graph, and route policy are still correct. |
| Public route | `affects` | Canonical URL | Confirm canonical target is current and non-conflicting. |
| Public route | `affects` | Sitemap | Confirm only approved indexable canonical URLs are listed. |
| Public route | `affects` | Robots/noindex policy | Confirm crawl and index policy match route classification. |
| Public route | `affects` | Site search index | Confirm inclusion, title, and route target remain valid. |
| Public route | `affected_by` | Internal links | Confirm in-page links do not point to stale destinations. |
| Public route | `affected_by` | Navigation/footer links | Confirm global link surfaces follow the approved architecture. |

### Example C - Install-Day Process

Scenario: install-day execution is reviewed for readiness.

| Source | Relationship | Target | Impact note |
| --- | --- | --- | --- |
| Install-day execution | `depends_on` | Schedule | Confirm operator-owned appointment and readiness timing. |
| Install-day execution | `depends_on` | Quote/SOW | Confirm approved scope and customer expectations. |
| Install-day execution | `depends_on` | Property model | Confirm property areas, concerns, and evidence are current. |
| Install-day execution | `depends_on` | BOM | Confirm hardware quantities and placement assumptions. |
| Install-day execution | `depends_on` | Staged inventory | Confirm materials are available before arrival. |
| Install-day execution | `depends_on` | Installer packet | Confirm internal instructions are complete. |
| Install-day execution | `depends_on` | Dashboard prep | Confirm expected control surfaces are ready to configure. |
| Install-day execution | `validated_by` | Validation checklist | Confirm closeout checks are documented. |
| Install-day execution | `produces` | Customer signoff | Confirm final customer-facing acceptance artifact is captured. |

## 9. Relationship Quality Levels

| Level | Name | Meaning |
| --- | --- | --- |
| R0 | Unknown | Relationship may exist, but no reliable record exists yet. |
| R1 | Listed | Relationship is named, but direction and impact are incomplete. |
| R2 | Directional | Source, target, and direction are documented. |
| R3 | Impact-aware | Relationship includes impact relevance and affected surfaces. |
| R4 | Validated | Relationship is supported by source references, owner documents, or validation evidence. |
| R5 | Automation-ready | Relationship is structured enough for future governed automation after separate authorization. |

These levels are diagnostic. They are not hard-stop gates unless a protected system, source authority, customer-facing claim, or active task scope requires a stop under higher-authority governance.

## 10. Prohibited Behavior

This model must not:

- automatically promote candidate knowledge to authority
- create implementation tasks without Master Task Register approval
- treat every relationship as a dependency
- treat every impact as a blocker
- delete superseded docs automatically
- implement hooks or automation
- create business process registry records
- create RSI records
- create decision records
- authorize runtime, source, route, CSS, catalog, quote, planner, scheduling, HubSpot, Stripe/payment, Resend/email, Cloudflare, environment, secret, dependency, or package-lock changes

## 11. Future Use

This model prepares later bounded work by defining relationship language that can be reused by:

- Business Process Registry
- Decision Register
- RSI Register
- KAOS Hook
- Codex Work Order Specification
- Knowledge Graph Visualization
- Operating System Health Score

Those future systems still require their own bounded tasks, owner documents, validation, and protected-system review before they can become authoritative or executable.
