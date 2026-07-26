# WNYHS Business Bible Ownership Structure REV01

- **Status:** ACTIVE ON MERGE
- **Task ID:** GOVFOUNDBIBLESTRUCT001
- **Owner:** Project Governance
- **Primary authority:** `docs/system/WNYHS_AUTHORITY_AND_SYSTEMS_OF_RECORD_STANDARD_REV01.md`
- **Implementation authority:** None
- **Customer-facing authority:** None
- **Effective date:** On merge
- **Revision:** REV01
- **Predecessor:** None
- **Successor:** None

## 1. Purpose

This standard establishes the governance role, ownership boundary, source requirements, and promotion gate for a future WNYHS Business Bible. It records the operator-approved Option B structure: a narrow doctrine-only Business Bible with existing and future dedicated owner documents preserved.

This standard does not create the Business Bible, promote doctrine, resolve open business decisions, change an existing owner, activate GOVFOUND002, or authorize implementation.

## 2. Authority position

The future Business Bible will be a cross-domain statement of durable business doctrine subordinate to:

1. `docs/system/project.md`;
2. `docs/system/guardrails.md`;
3. `docs/system/agent.md`;
4. `docs/system/plan.md`;
5. the active current-context document;
6. `docs/system/WNYHS_AUTHORITY_AND_SYSTEMS_OF_RECORD_STANDARD_REV01.md`;
7. active bounded tasks and work orders for authorized execution; and
8. dedicated current owner documents for detailed domain rules.

It will not replace repository governance, operational context, bounded task authority, locked standards, runtime contracts, or dedicated domain ownership.

## 3. Definition of the Business Bible

The WNYHS Business Bible is a future doctrine-only repository document that may state enduring principles defining who WNY Home Security is, how it intends to treat customers, and the broad principles guiding product and service design.

It is not an implementation manual, operating procedure, runtime specification, commercial catalog, legal instrument, customer record, or substitute for dedicated owner documents.

## 4. Approved doctrine scope

The future Business Bible may own durable doctrine concerning:

- business identity;
- ethical sales posture;
- customer ownership;
- privacy;
- local-first operation;
- anti-lock-in principles;
- solution-first positioning;
- expandability;
- plain-language communication;
- local accountability;
- customer trust; and
- durable business philosophy.

These subjects may be promoted only through a separately authorized drafting task using reviewed sources, explicit provenance, and operator approval.

## 5. Strict ownership exclusions

The future Business Bible must not become the detailed owner for:

- runtime architecture, source code, implementation instructions, infrastructure configuration, or security implementation;
- technical hardware standards, approved BOMs, device qualification, Home Assistant implementation details, dashboard implementation contracts, or remote-access implementation;
- CRM schemas, field permissions, HubSpot runtime behavior, Stripe verification, payment logic, or scheduling runtime behavior;
- pricing values, package contents, warranty terms, refund policy, legal language, public claims wording, or customer-facing copy locks;
- funnels, planner behavior, quote workflows, agreement workflows, deployment procedures, QA procedures, SOPs, or business-process manuals; or
- customer-specific deployment facts.

These subjects remain controlled by their current or future dedicated repository owner documents.

## 6. Existing-owner preservation rule

Every existing current owner document retains its established authority. Creating or amending the Business Bible may not transfer, weaken, duplicate, supersede, or silently reinterpret that ownership.

Where a dedicated owner exists, that owner controls the detailed rule. The Business Bible may summarize the governing principle only when the summary:

- does not change meaning;
- introduces no implementation detail;
- establishes no competing rule; and
- clearly identifies the controlling owner document.

## 7. One-owner-per-fact rule

Each durable business fact or rule must have one controlling owner. References and summaries may exist, but they must point to the controlling owner and remain subordinate to it.

If a proposed Business Bible statement would become a second owner for the same detailed fact, it must be rejected, narrowed to doctrine, or routed to the current owner for amendment through a separate authorized task.

## 8. No-parallel-authority rule

The Business Bible may not create parallel authority through duplication, paraphrase, implied precedence, or omission of the controlling owner. A statement that cannot be expressed without competing with an existing owner is prohibited from the Business Bible.

## 9. Relationship to other authority classes

| Authority class | Relationship to the future Business Bible |
| --- | --- |
| System governance | System governance controls repository authority, execution, tasking, amendment, and conflict resolution. |
| Guardrails | Guardrails remain mandatory and cannot be weakened or summarized into a competing rule. |
| Runtime contracts | Runtime contracts control executable behavior and implementation constraints. |
| Technical standards | Dedicated technical owners control hardware, Home Assistant, dashboards, remote access, infrastructure, and security implementation. |
| Claims standards | Claims owners control approved, forbidden, and customer-facing wording. |
| Pricing and packages | Dedicated commercial owners control values, contents, terms, and offer details. |
| Business processes | Dedicated process owners control workflows, roles, records, permissions, and handoffs. |
| SOPs | SOP owners control procedural steps and operational execution. |
| QA | QA and validation owners control tests, acceptance, evidence, and release gates. |
| Customer-specific records | Authorized customer and runtime systems of record control customer facts and deployment state. |
| Historical evidence | Historical material provides lineage only and cannot override current authority. |

The Business Bible may reference these classes to express compatible doctrine but may not absorb their detailed rules.

## 10. Conflict-resolution rule

Potential conflict must be resolved under `docs/system/WNYHS_AUTHORITY_AND_SYSTEMS_OF_RECORD_STANDARD_REV01.md`.

When proposed Business Bible content conflicts with higher authority or a dedicated owner:

1. preserve the higher-authority or dedicated-owner rule;
2. classify the proposed statement as conflicting evidence;
3. do not promote or silently rewrite it;
4. identify the controlling owner and exact conflict; and
5. route any requested policy change to an operator decision and a separate bounded governance task.

Unresolved conflicts remain unresolved. This task does not decide the 13 conflicts recorded in the reconciliation evidence.

## 11. Source-classification rules

The following remain evidence only unless separately promoted:

- `WNY Home Security - WNYHS Business Bible Extraction.mhtml`;
- `WNYHS_Business_Bible_Consolidated_Candidate_Source_Register_REV01.md`;
- `WNYHS_OpenAI_and_Business_Management_Consolidated_Decision_Register_REV01.md`;
- `WNYHS_Business_Operating_System_Source_Inventory_and_Authority_Map_Draft_v1.md`;
- `.local-review/GOVFOUNDBIBLE001-business-bible-evidence-review-rev01.md`; and
- `.local-review/GOVFOUNDBIBLERECON001-business-bible-reconciliation-rev01.md`.

Chat-derived, local-intake, and local-review material is evidence or staging only. A classification such as confirmed operator direction does not independently promote that content into repository authority.

Current repository-authoritative rules must be mapped to their controlling owners. Candidate doctrine, unresolved decisions, historical or superseded material, duplicates, conflicts, unverifiable statements, and out-of-scope material must retain those classifications until separately resolved.

## 12. Promotion requirements

Future Business Bible content may be promoted only when a separately authorized bounded task:

1. identifies the exact source evidence and provenance;
2. classifies each proposed doctrine statement;
3. maps every referenced detailed rule to its controlling owner;
4. demonstrates compliance with this standard and the Authority and Systems of Record Standard;
5. preserves unresolved decisions and conflicts;
6. uses an exact tracked-file allowlist;
7. obtains operator approval for the doctrine being promoted;
8. validates that no parallel authority was created; and
9. delivers a reviewable draft pull request without automatic merge or deployment.

## 13. Operator approval gate

No Business Bible drafting or doctrine promotion is authorized by this standard.

Before drafting begins, the operator must separately authorize the future task, its source set, decision set, exact doctrine boundary, tracked-file allowlist, branch and commit permissions, and draft-PR delivery. Unresolved decisions requiring business judgment must be presented to the operator and may not be decided by ChatGPT, Work, or Codex.

## 14. Provenance requirements

Every promoted doctrine statement must be traceable to:

- an authoritative repository source; or
- specifically reviewed evidence plus an explicit operator approval.

The future Business Bible and its promotion record must identify the task, approval date, source paths or stable source identities, classification and reconciliation basis, controlling owner references, revision, and Git/PR lineage. Source identity and repository promotion are distinct controls.

## 15. Supersession rules

The Business Bible may be superseded only by an explicitly approved successor under a bounded governance task. A successor must identify the prior revision, effective transition, retained doctrine, changed doctrine, controlling-owner impact, and provenance.

No Business Bible revision may silently supersede core governance, current operational context, active bounded tasks, dedicated owner documents, locked standards, runtime contracts, or customer systems of record.

## 16. Amendment process

Amendments require:

1. a controlling MTR task;
2. a bounded work order;
3. identified source evidence and operator decisions;
4. an exact tracked-file allowlist;
5. conflict and owner-impact review;
6. provenance and revision updates;
7. validation under this standard; and
8. a dedicated branch, bounded commit, draft PR, manual merge decision, and no deployment unless separately authorized.

## 17. Prohibited content

The future Business Bible must not contain:

- any detailed subject listed in Section 5;
- invented or inferred strategy, policy, pricing, packages, claims, commitments, processes, architecture, or implementation behavior;
- unresolved decisions presented as settled;
- conflicting evidence presented as current authority;
- customer data, secrets, credentials, tokens, private URLs, or customer-specific deployment facts;
- historical material presented as current without explicit promotion; or
- duplicated detailed rules that create parallel authority.

## 18. Future Business Bible path

The operator-approved future canonical path is:

`docs/business/WNYHS_BUSINESS_BIBLE_REV01.md`

That path is reserved by decision only. This task does not create the file or confer authority on an absent file.

## 19. Requirements for the future drafting task

A future drafting task must:

- be separately authorized and recorded in the MTR;
- use a canonical bounded work order;
- create only a doctrine-only Business Bible at the approved path and any explicitly authorized provenance/index/task files;
- identify the exact approved doctrine and unresolved decisions in scope;
- preserve every strict exclusion and existing owner;
- include source-to-doctrine and doctrine-to-owner traceability;
- prohibit runtime, customer-facing, commercial-value, process, and implementation changes;
- validate that no unresolved decision or conflict was silently resolved;
- keep GOVFOUND002 separate and unauthorized unless the operator later grants distinct authority; and
- use manual PR review with no automatic merge or deployment.

`GOVFOUNDBIBLE002` is a proposed future identifier only. This standard does not create or authorize it.

## 20. GOVFOUND002 status

GOVFOUND002 remains:

**PROPOSED — NOT AUTHORIZED — DO NOT EXECUTE**

This ownership structure satisfies only the structural prerequisite for defining a narrow Business Bible. It does not create the Business Bible, resolve its evidence and decision gates, authorize the GOVFOUND002 MTR record or work order, approve a promotion scope, or permit repository promotion.
