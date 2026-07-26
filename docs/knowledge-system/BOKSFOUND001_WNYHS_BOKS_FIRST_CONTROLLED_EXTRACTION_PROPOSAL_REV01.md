# WNYHS BOKS First Controlled Extraction Proposal REV01

## 1. Document control

- **Status:** PROPOSED — OPERATOR REVIEW REQUIRED
- **Task ID:** BOKSFOUND001
- **Owner:** Project Governance / Business Operating Knowledge System
- **Document type:** Controlled extraction proposal
- **Implementation authority:** None
- **Object-creation authority:** None
- **Source authority:** Operator-approved BOKSFOUND001 context dated 2026-07-26, constrained by current repository authority
- **Revision:** REV01

## 2. Purpose

This proposal tests the BOKS object model against the operator-approved BOKSFOUND001 planning context.

It does not:

- create final object IDs;
- create Google Docs or manifest rows;
- approve candidate doctrine;
- change repository owners;
- activate future tasks;
- implement a module;
- mine historical conversations; or
- delay the beta website program.

Every ID is provisional.

## 3. Disposition vocabulary

- `CREATE` — proposed distinct object.
- `UPDATE` — proposed update to an existing object after one exists.
- `MERGE` — combine overlapping candidates after operator review.
- `RELATE` — relationship only; no standalone object.
- `DEFER` — retain for later evidence or timing.
- `REJECT` — do not create.

## 4. Proposed objects

| Provisional ID | Proposed title | Type | Why it qualifies | Lifecycle / authority | Source basis | Key relationships | Disposition | Drive destination | Before website resumes? | Repo promotion / future task |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P-BOKS-ARCH-0001 | BOKS Institutional Memory Architecture | ARCH | Defines a durable company-wide knowledge boundary. | REVIEWED / REPOSITORY_REFERENCE | BOKSFOUND001 approved direction A–D | Governed by BOKS charter and ASOR | CREATE | Architecture References | No; repository foundation is sufficient | Already promoted by BOKSFOUND001 |
| P-BOKS-DEC-0001 | Repository Remains Executable Authority | DEC | Prevents BOKS from becoming a second repository. | REVIEWED / OPERATOR_APPROVED_DIRECTION | Direction A | Governs ARCH-0001 and all BOKS objects | CREATE | Decisions | No | Repository owner exists |
| P-BOKS-DEC-0002 | One Durable Item per Object | DEC | Establishes the default capture unit. | REVIEWED / OPERATOR_APPROVED_DIRECTION | Direction C | Governs extraction and templates | CREATE | Decisions | No | Repository owner exists |
| P-BOKS-DEC-0003 | Chat Is Source Not Container | DEC | Prevents whole-chat folder organization. | REVIEWED / OPERATOR_APPROVED_DIRECTION | Direction C/F | Governs extraction | CREATE | Decisions | No | Repository owner exists |
| P-BOKS-ARCH-0002 | BOKS Object and Relationship Model | ARCH | Defines object-oriented and future graph-compatible behavior. | REVIEWED / REPOSITORY_REFERENCE | Direction B/D | Governed by object-model standard | CREATE | Architecture References | No | Already promoted by BOKSFOUND001 |
| P-BOKS-CAP-0001 | BOKS Master Manifest | CAP | Required inventory, control, and retrieval surface. | REVIEWED / OPERATOR_APPROVED_DIRECTION | Direction F and required architecture I | Depends on object model | CREATE | Capabilities | No | Candidate `BOKSMANIFEST001` |
| P-BOKS-PROC-0001 | Historical Chat Extraction | PROC | Reusable process for recovering durable knowledge. | REVIEWED / REPOSITORY_REFERENCE | Direction F | Governed by extraction standard | CREATE | Processes | No; execute after beta build starts | Candidate `BOKSEXTRACT001` |
| P-BOKS-PROC-0002 | Work Artifact Synchronization | PROC | Reusable repository-to-Drive mirror process. | REVIEWED / REPOSITORY_REFERENCE | Direction G | Depends on manifest and Drive structure | CREATE | Processes | No | Candidate `BOKSSYNC001` |
| P-BOKS-DEC-0004 | Repeated Work Requires Process Evaluation | DEC | Establishes an enduring operating discipline. | REVIEWED / OPERATOR_APPROVED_DIRECTION | Direction E | Relates to all PROC objects | CREATE | Decisions | No | No implementation task implied |
| P-BOKS-CAP-0002 | KAOS Knowledge Operations | CAP | Durable future operator attention and knowledge-health capability. | DEFERRED / OPERATOR_APPROVED_DIRECTION | Required architecture Q | Depends on BOKS manifest and approved object operations | CREATE | Capabilities | No | Candidate `BOKSKAOS001`; defer |
| P-BOKS-DEC-0005 | Beta Website Returns to Immediate Priority | DEC | Prevents BOKS platform expansion from displacing revenue work. | REVIEWED / OPERATOR_APPROVED_DIRECTION | Direction H | Relates to WEBBETADISC001 | CREATE | Decisions | Yes as a priority reminder, not a Drive dependency | No new task; return to website program |
| P-BOKS-ART-0001 | WEBBETADISC001 Beta Website Program Charter | ART | The merged charter has durable independent program-governance value. | REVIEWED / REPOSITORY_MIRROR | Merged PR #539 | Governs ART-0002 through ART-0005 | CREATE | Work Artifact Mirrors/Website Program/WEBBETADISC001 | No | Candidate `BOKSSYNC001` |
| P-BOKS-ART-0002 | WEBBETADISC001 Beta Website Requirements Register | ART | The merged requirements register is independently useful for traceability and acceptance. | REVIEWED / REPOSITORY_MIRROR | Merged PR #539 | Governed by ART-0001; informs ART-0003/0005 | CREATE | Work Artifact Mirrors/Website Program/WEBBETADISC001 | No | Candidate `BOKSSYNC001` |
| P-BOKS-ART-0003 | WEBBETADISC001 Beta Discovery Interview Framework | ART | The merged 28-stage interview framework is a reusable decision-capture artifact. | REVIEWED / REPOSITORY_MIRROR | Merged PR #539 | Uses ART-0002; produces decisions recorded by ART-0005 | CREATE | Work Artifact Mirrors/Website Program/WEBBETADISC001 | No | Candidate `BOKSSYNC001` |
| P-BOKS-ART-0004 | WEBBETADISC001 Beta Build Location Decision | ART | The merged ADR independently governs the recommended beta location boundary. | REVIEWED / REPOSITORY_MIRROR | Merged PR #539 | Relates to DEC-0006 through DEC-0008 | CREATE | Work Artifact Mirrors/Website Program/WEBBETADISC001 | No | Candidate `BOKSSYNC001` |
| P-BOKS-ART-0005 | WEBBETADISC001 Beta Website Program Decision Log | ART | The merged decision log independently preserves approved, open, deferred, and prohibited conclusions. | REVIEWED / REPOSITORY_MIRROR | Merged PR #539 | Records decisions across ART-0001 through ART-0004 | CREATE | Work Artifact Mirrors/Website Program/WEBBETADISC001 | No | Candidate `BOKSSYNC001` |
| P-BOKS-DEC-0006 | Beta Application Location | DEC | Durable architecture recommendation selects `apps/wnyhs-beta/`. | REVIEWED / REPOSITORY_REFERENCE | WEBBETADISC001 build-location ADR | Governed by Site Architecture | CREATE | Decisions | No | Later website foundation task only |
| P-BOKS-DEC-0007 | Separate Protected Beta Environment | DEC | Durable environment isolation and non-indexing recommendation. | REVIEWED / REPOSITORY_REFERENCE | WEBBETADISC001 build-location ADR | Depends on DEC-0006; governed by Site Architecture/Infrastructure | CREATE | Decisions | No | Later infrastructure task only |
| P-BOKS-DEC-0008 | Live Website Unchanged During Beta | DEC | Critical production-protection boundary. | REVIEWED / REPOSITORY_REFERENCE | BOKSFOUND001 topic 15; WEBBETADISC001 | Governs beta work | CREATE | Decisions | No | Existing repository protection |
| P-BOKS-DEC-0009 | Sites Is Prototype Not Canonical Authority | DEC | Durable boundary for rapid prototypes. | REVIEWED / REPOSITORY_REFERENCE | BOKSFOUND001 topic 16; Sites governance | Governed by Codex/Sites standards | CREATE | Decisions | No | No task activation |
| P-BOKS-CAP-0003 | Statement of Work Generation | CAP | Distinct future operational module with reusable business value. | CAPTURED / OPERATOR_APPROVED_DIRECTION | BOKSFOUND001 topic 17 | Relates to quote, agreements, deployment | CREATE | Capabilities | No | Future bounded discovery task |
| P-BOKS-CAP-0004 | Quote Generation | CAP | Distinct sales capability and current/future system boundary. | CAPTURED / OPERATOR_APPROVED_DIRECTION | Topic 17 | Depends on pricing/catalog/CRM owners | CREATE | Capabilities | No | Future task; do not alter Quote System |
| P-BOKS-CAP-0005 | Procurement Operations | CAP | Distinct post-sale operational module. | CAPTURED / OPERATOR_APPROVED_DIRECTION | Topic 17 | Depends on vendors, products, approved sale | CREATE | Capabilities | No | Future bounded discovery task |
| P-BOKS-CAP-0006 | Inventory Operations | CAP | Distinct stock and allocation capability. | CAPTURED / OPERATOR_APPROVED_DIRECTION | Topic 17 | Relates to procurement, deployment, catalog | CREATE | Capabilities | No | Future bounded discovery task |
| P-BOKS-CAP-0007 | Bench Preparation | CAP | Distinct pre-install delivery capability. | CAPTURED / OPERATOR_APPROVED_DIRECTION | Topic 17 | Depends on sold scope and deployment standards | CREATE | Capabilities | No | Future bounded discovery task |
| P-BOKS-CAP-0008 | Installer Packet Production | CAP | Distinct deployment handoff capability. | CAPTURED / OPERATOR_APPROVED_DIRECTION | Topic 17 | Relates to SOW, quote, bench prep | CREATE | Capabilities | No | Future bounded discovery task |
| P-BOKS-CAP-0009 | Dashboard Creation | CAP | Distinct customer-system design capability. | CAPTURED / OPERATOR_APPROVED_DIRECTION | Topic 17 | Depends on deployment engineering | CREATE | Capabilities | No | Future task in correct repository/owner |
| P-BOKS-CAP-0010 | Dashboard Lifecycle Management | CAP | Ongoing management differs from initial creation. | CAPTURED / OPERATOR_APPROVED_DIRECTION | Topic 17 | Depends on dashboard creation/support | CREATE | Capabilities | No | Future task in correct repository/owner |
| P-BOKS-CAP-0011 | Installed-System Records | CAP | Durable customer deployment record capability. | CAPTURED / OPERATOR_APPROVED_DIRECTION | Topic 17 | Owned by future declared system of record | CREATE | Capabilities | No | Owner decision required |
| P-BOKS-CAP-0012 | Customer Support Operations | CAP | Distinct lifecycle service capability. | CAPTURED / OPERATOR_APPROVED_DIRECTION | Topic 17 | Depends on installed-system records | CREATE | Capabilities | No | Future bounded discovery task |
| P-BOKS-CAP-0013 | Warranty Tracking | CAP | Distinct asset/service tracking capability. | CAPTURED / OPERATOR_APPROVED_DIRECTION | Topic 17 | Relates to products, installation, support | CREATE | Capabilities | No | Future owner decision |
| P-BOKS-CAP-0014 | Replacement Cost Tracking | CAP | Distinct lifecycle/economic record capability. | CAPTURED / OPERATOR_APPROVED_DIRECTION | Topic 17 | Relates to installed assets and support | CREATE | Capabilities | No | Future owner/privacy decision |
| P-BOKS-CAP-0015 | Customer Expansion Management | CAP | Distinct post-install revenue and service capability. | CAPTURED / OPERATOR_APPROVED_DIRECTION | Topic 17 | Supports customer expansion stage | CREATE | Capabilities | No | Future bounded discovery task |
| P-BOKS-CAP-0016 | KAOS Owner and Employee Operations | CAP | Durable future internal operating surface. | DEFERRED / OPERATOR_APPROVED_DIRECTION | Topic 17 | Depends on many governed modules | CREATE | Capabilities | No | Future KAOS program only |

## 5. Proposal totals

- **Total proposed objects:** 34
- **Decision:** 9
- **Capability:** 16
- **Process:** 2
- **Architecture Reference:** 2
- **Artifact:** 5
- **Immediate Drive object required before website resumes:** 0
- **Implementation task activated:** 0

## 6. Operator review decisions

The operator must later decide:

- which provisional objects should receive final IDs;
- whether any capability candidates should merge;
- which planned capabilities remain worth retaining;
- owner/system-of-record assignments for installed-system, warranty, replacement-cost, and support records;
- whether the five WEBBETADISC001 artifacts become five objects or one set plus five child relationships; and
- timing of Drive object creation after website implementation begins.

## 7. Repository promotion assessment

The BOKS architecture, object model, manifest/template model, extraction standard, and sync/Drive rules are promoted through BOKSFOUND001.

The operational-module candidates are not repository implementation authority. They must not be added to the MTR or treated as committed roadmap items without separate operator decisions and bounded tasks.

## 8. Completion statement

This test demonstrates that the retained taxonomy can represent governance decisions, architecture references, reusable processes, Work artifacts, and future capabilities without using chats as folders or turning BOKS into a second repository.
