# WNYHS BOKS Object Model Standard REV01

## 1. Document control

- **Status:** ACTIVE ON MERGE
- **Task ID:** BOKSFOUND001
- **Owner:** Project Governance / Business Operating Knowledge System
- **Primary authority:** BOKS object taxonomy, identifiers, metadata, lifecycle, authority states, relationships, merge, and supersession behavior
- **Implementation authority:** None
- **External-system authority:** None
- **Operator authorization date:** 2026-07-26
- **Revision:** REV01
- **Predecessor:** None
- **Successor:** None

## 2. Design rules

1. A chat is a source, not an organizational unit.
2. One distinct durable item becomes one object by default.
3. One chat may create several objects, update existing objects, create relationships only, or create no objects.
4. Keep the taxonomy as small as practical.
5. Use subtype and metadata rather than a new object type when ownership, template, and lifecycle needs are substantially the same.
6. Do not create parallel authority. A BOKS object referencing an active repository owner must point to that owner.
7. Object identity remains stable when a title changes.
8. Supersession is a lifecycle and relationship action, not a separate object type.

## 3. Retained taxonomy

| Type | Prefix | Purpose | Common subtypes |
| --- | --- | --- | --- |
| Decision | `DEC` | Records a durable operator decision, governing direction, waiver, prioritization, or disposition. | Direction, priority, waiver, disposition |
| Capability | `CAP` | Represents a business module, website feature, customer experience, service capability, or future operational capability. | Module, website feature, customer experience, internal capability |
| Process | `PROC` | Represents repeatable work, a workflow, playbook, or SOP. | Process, SOP, checklist, review loop |
| Architecture Reference | `ARCH` | Describes or points to an architecture, standard, schema, doctrine owner, or system boundary. | Architecture, standard, schema, owner reference |
| Idea | `IDEA` | Preserves a durable business or product concept that is not approved direction. | Business idea, experiment, opportunity |
| Resource | `RES` | Represents a product, vendor, platform, tool, or reusable commercial/technical resource. | Product, vendor, platform, tool |
| Field Knowledge | `FIELD` | Preserves reusable installation, troubleshooting, commissioning, or support knowledge. | Installation lesson, support lesson, field pattern |
| Artifact | `ART` | Represents a durable Work artifact, implementation record, research package, or approved output worth finding independently. | Work artifact, implementation record, research package |
| Requirement | `REQ` | Represents a requirement, risk, dependency, blocker, or open question that must remain visible. | Requirement, risk, blocker, open question |

Nine types are retained. Suggested `MOD`, `SOP`, `STD`, `WEB`, `CUST`, `PROD`, `VEND`, `WK`, `IMPL`, `RISK`, and `OPEN` are consolidated as subtypes because separate top-level types would duplicate templates, lifecycle rules, or ownership.

## 4. Inclusion thresholds and exclusions

### Decision (`DEC`)

- **Include:** explicit durable operator direction or a repository-backed decision with lasting business effect.
- **Exclude:** temporary preferences, unanswered options, casual agreement, or inferred intent.
- **Required sections:** Decision; reason; scope; consequences; authority; relationships.
- **Common relationships:** governs, affects, supersedes, derived from.

### Capability (`CAP`)

- **Include:** a coherent sellable, operational, website, customer, or internal capability with identifiable value and boundary.
- **Exclude:** isolated UI details, passing feature wishes, or implementation steps.
- **Required sections:** Purpose; users; value; current state; boundary; dependencies; owner; next decision.
- **Common relationships:** depends on, represented on website, candidate for task, supports customer stage.

### Process (`PROC`)

- **Include:** repeated activity that should be performed consistently or evaluated for formalization.
- **Exclude:** one-time work with no reusable lesson.
- **Required sections:** Trigger; outcome; roles; inputs; steps or current candidate flow; exceptions; evidence; review.
- **Common relationships:** uses, governed by, supports, produces.

### Architecture Reference (`ARCH`)

- **Include:** a durable system boundary, owner map, schema reference, architecture decision, or standard worth retrieving separately.
- **Exclude:** a copied repository standard or unsupported proposed architecture.
- **Required sections:** Subject; boundary; canonical owner; summary; consumers; conflicts; change gate.
- **Common relationships:** governed by, owns system, implements, depends on.
- **Authority rule:** when a repository owner exists, that owner controls and the BOKS object is a reference or mirror.

### Idea (`IDEA`)

- **Include:** a distinct concept with plausible future business value and enough detail to evaluate later.
- **Exclude:** jokes, passing remarks, unsupported speculation, duplicates, or abandoned ideas with no lineage value.
- **Required sections:** Idea; problem/opportunity; possible value; assumptions; constraints; evidence needed; disposition.
- **Common relationships:** relates to, affects, candidate for task.

### Resource (`RES`)

- **Include:** a product, vendor, tool, platform, or reusable resource with durable selection, capability, risk, or relationship value.
- **Exclude:** a casual product mention, unverified shopping result, or credentials/account details.
- **Required sections:** Resource identity; subtype; use; status; evidence; constraints; owner; related capabilities.
- **Common relationships:** uses product, uses vendor, supports, governed by.

### Field Knowledge (`FIELD`)

- **Include:** a reusable lesson from installation, configuration, commissioning, support, or troubleshooting.
- **Exclude:** customer-specific raw data, secrets, temporary troubleshooting without a durable lesson, or unsupported memory.
- **Required sections:** Situation; durable lesson; applicability; limits; evidence; safety/privacy; related process or standard.
- **Common relationships:** derived from, updates, supports, uses resource.

### Artifact (`ART`)

- **Include:** a completed deliverable or implementation record that has independent retrieval value.
- **Exclude:** routine indexes, manifest edits, source code, generated builds, or low-value administrative changes.
- **Required sections:** Purpose; source task; canonical path; commit/PR; authority; status; related objects; sync status.
- **Common relationships:** mirrored from repository, derived from, implements, affects.

### Requirement (`REQ`)

- **Include:** a durable requirement, risk, blocker, dependency, or unanswered question whose loss would create decision or delivery risk.
- **Exclude:** trivial to-dos already controlled by an active task or unsupported assumptions.
- **Required sections:** Statement; subtype; impact; evidence; owner; resolution gate; status.
- **Common relationships:** depends on, blocks, affects, candidate for task.

## 5. Identifier format

Canonical format:

```text
BOKS-{TYPE}-{NNNN}
```

Examples:

- `BOKS-DEC-0001`
- `BOKS-CAP-0012`
- `BOKS-PROC-0004`

Rules:

- numbering is sequential within each retained type;
- numbers are four digits initially and may expand without renumbering;
- IDs are allocated only through the governed Master Manifest;
- IDs are never reused, including after rejection, merge, supersession, or archive;
- the title is not part of the ID;
- title changes do not change the ID;
- after final allocation, a later type correction does not change the ID; metadata records the corrected type and reason;
- merged objects retain their IDs as `SUPERSEDED` and point to the surviving object;
- the surviving object records `merges` or `supersedes` relationships;
- reserved IDs must identify the reserving task and expire or be reconciled before further allocation.

## 6. Provisional IDs

Before the Master Manifest is active, proposals use:

```text
P-BOKS-{TYPE}-{NNNN}
```

A provisional ID:

- is not a final object identity;
- does not create an object;
- does not reserve a permanent number unless a bounded task says so;
- may be changed during review;
- must be replaced by a final manifest-issued ID when the object is approved.

The first extraction and mirroring plans in BOKSFOUND001 therefore use provisional IDs.

## 7. Title and filename rules

Human-readable titles should reveal the subject within the first five words when practical.

Preferred object document title:

```text
{BOKS ID} — {Specific subject}
```

Preferred repository filename when an object is promoted:

```text
{BOKS_ID}_{SPECIFIC_SUBJECT}_REV{NN}.md
```

Drive titles should retain spaces and the stable ID. Repository filenames use uppercase stable IDs and descriptive underscore-separated subject text.

Avoid:

- Notes
- Ideas
- Business Plan
- Website Stuff
- Miscellaneous
- New Document
- Chat Summary

Mirrored artifacts keep their canonical source task/document identity rather than pretending to be newly authored authority.

## 8. Mandatory metadata

Every approved object requires:

| Field | Rule |
| --- | --- |
| BOKS ID | Final manifest-issued stable ID |
| Title | Specific human-readable title |
| Object type | One retained type |
| Subtype | Controlled subtype or `NONE` |
| Knowledge lifecycle | One value from Section 10 |
| Implementation status | One value from Section 11 |
| Authority status | One value from Section 12 |
| Owner | Person, role, or canonical owner document |
| Created date | ISO `YYYY-MM-DD` |
| Last reviewed date | ISO date |
| Source type | Chat, repository, Work task, operator decision, external record, field evidence, or other controlled value |
| Source reference | Stable path, task, conversation reference, record reference, or evidence locator |
| Privacy classification | `PUBLIC`, `INTERNAL`, `CONFIDENTIAL`, or `RESTRICTED` |
| Summary | Plain-language durable statement |
| Related BOKS IDs | At least one when a meaningful relationship exists; `NONE` requires explanation |
| Next review | Date or governed trigger |

## 9. Optional metadata

Use only when relevant:

- category/topic;
- source chat;
- source document;
- source task;
- repository path;
- commit;
- pull request;
- dependencies;
- affected systems;
- customer lifecycle stages;
- website applicability;
- customer, owner, or employee access applicability;
- KAOS applicability;
- HubSpot applicability;
- Google Workspace applicability;
- claims sensitivity;
- next action;
- review cadence;
- supersedes;
- superseded by;
- mirror destination;
- mirror sync date;
- unresolved decision owner.

Optional fields must not be added to every document merely because they exist.

## 10. Knowledge lifecycle

Knowledge lifecycle is separate from implementation status.

Allowed values:

- `CAPTURED` — extracted but not substantively reviewed;
- `REVIEWED` — classified and reconciled, awaiting approval or disposition;
- `APPROVED` — accepted as current business knowledge within its authority boundary;
- `DEFERRED` — intentionally retained for later reconsideration;
- `REJECTED` — reviewed and not accepted, retained only when lineage has value;
- `SUPERSEDED` — replaced or merged, with a required successor link;
- `ARCHIVED` — inactive historical material retained outside normal active views.

Typical transitions:

```text
CAPTURED → REVIEWED
REVIEWED → APPROVED | DEFERRED | REJECTED
APPROVED → SUPERSEDED | ARCHIVED
DEFERRED → REVIEWED
REJECTED → REVIEWED only by explicit operator reconsideration
SUPERSEDED → ARCHIVED
```

Operator approval is required for `APPROVED`, reopening `REJECTED`, and any supersession that changes current business direction.

## 11. Implementation status

Allowed values:

- `NOT_APPLICABLE`
- `UNKNOWN`
- `NOT_PLANNED`
- `PLANNED`
- `IN_PROGRESS`
- `PARTIAL`
- `IMPLEMENTED`
- `RETIRED`

Implementation status reports state; it does not authorize work. `PLANNED` is not an active task. `IMPLEMENTED` requires evidence and does not automatically make the implementation approved or authoritative.

## 12. Authority status

Allowed values:

- `EVIDENCE_ONLY`
- `EXTRACTED_UNREVIEWED`
- `OPERATOR_APPROVED_DIRECTION`
- `REPOSITORY_REFERENCE`
- `REPOSITORY_MIRROR`
- `REPOSITORY_AUTHORITY`
- `HISTORICAL_REFERENCE`

Rules:

- ordinary extraction begins as `EXTRACTED_UNREVIEWED`;
- source evidence alone is `EVIDENCE_ONLY`;
- explicit operator approval may create `OPERATOR_APPROVED_DIRECTION`;
- only the applicable merged owner document may be labeled `REPOSITORY_AUTHORITY`;
- a BOKS document describing that owner is normally `REPOSITORY_REFERENCE`;
- a byte/content mirror of a repository artifact is `REPOSITORY_MIRROR`;
- none of these values creates executable implementation authority.

## 13. Relationship model

Relationships use:

```text
source ID → relationship type → target ID or authoritative external reference
```

Retained relationship types:

| Relationship | Direction | Reciprocal handling |
| --- | --- | --- |
| `relates to` | Symmetric | Record on both objects when useful |
| `depends on` | Directed | Target may record `required by` |
| `implements` | Directed | Target may record `implemented by` |
| `supersedes` | Directed | Target must record `superseded by` |
| `derived from` | Directed | Source reference need not be a BOKS object |
| `governed by` | Directed | Target is normally a repository owner |
| `affects` | Directed | Target may be a system, website area, or customer stage |
| `uses resource` | Directed | Target is a `RES` object |
| `supports customer stage` | Directed | Controlled customer-stage value |
| `represented on website` | Directed | Target is a canonical website area or route owner |
| `owned by system` | Directed | Target is a declared system of record |
| `mirrored from repository` | Directed | Target is repository path plus commit |
| `candidate for future task` | Directed | Target is a provisional task ID, never active authority |
| `merges` | Directed | Source objects become superseded after approval |

Minimum relationship requirements:

- `ARCH` repository references require `governed by`;
- `ART` mirrors require `mirrored from repository`;
- superseded objects require `superseded by`;
- implementation-bearing objects require evidence through `implements` or an implementation reference;
- objects with no meaningful relationship must explain `Related BOKS IDs: NONE`.

## 14. Duplicate, merge, and supersession behavior

Title matching alone is insufficient.

Compare:

- semantic subject;
- business purpose;
- scope and boundary;
- owner;
- lifecycle and implementation status;
- source basis; and
- relationships.

Disposition:

- same subject and boundary: update existing object;
- overlapping but independently useful boundary: retain both and relate;
- duplicate split records: merge into one surviving object;
- minor supporting detail: add evidence or relationship only;
- obsolete object: supersede;
- low-value or unsupported candidate: reject or preserve only as source evidence;
- ambiguous overlap: stop for operator review.

Never delete an allocated ID to make the manifest look cleaner.

## 15. One-owner-per-fact rule

A fact or detailed rule should have one controlling owner.

BOKS objects may:

- summarize a principle;
- point to the owner;
- record status and relationships; and
- capture gaps or conflicts.

They may not:

- restate detailed runtime, pricing, claims, legal, CRM, payment, scheduling, or technical rules as competing authority;
- silently choose between same-level owners; or
- convert observed implementation into policy.

## 16. Change control

This standard becomes active only after merge under BOKSFOUND001.

Changes to retained object types, prefixes, mandatory metadata, lifecycle values, authority states, or relationship vocabulary require a separately authorized governance task, manifest migration analysis, and manual PR review.
