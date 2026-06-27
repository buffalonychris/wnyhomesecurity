# KAOS001 Knowledge Object Registry REV01

Status: Active KAOS foundation registry
Task ID: KAOS001-REGISTRY001
Customer-facing: No
Implementation authority: No

## 1. Registry Purpose

The KAOS001 Knowledge Object Registry records the categories and future record structure for durable Knowledge Objects.

REV01 creates the registry foundation only. It seeds namespaces and placeholder examples so later bounded tasks can add actual records without changing the object model.

## 2. How Records Should Be Added

Future records should be added only through a bounded task that:

- identifies the source reference
- assigns a stable `kaos_id`
- applies the schema in `/docs/kaos/KAOS001_KNOWLEDGE_OBJECT_SCHEMA_REV01.md`
- identifies owner document status
- records relationships conservatively
- marks operator decisions where required
- validates against the current repository authority chain

Records should be additive. Corrections should preserve history through supersession or explicit replacement notes unless a later task authorizes a different approach.

## 3. What Belongs In The Registry

The registry may contain:

- governance objects
- task objects
- runtime contract objects
- standard and specification objects
- business process objects
- decision objects
- catalog, solution, dashboard, and artifact objects
- validation artifact objects
- RSI opportunity objects
- candidate objects awaiting review

## 4. What Does Not Belong In The Registry

The registry should not contain:

- secrets, credentials, tokens, or environment variable values
- private customer data
- internal BOM or margin detail
- unreviewed runtime payload details that belong in runtime contracts
- full copies of owner documents
- broad historical imports without a bounded classification task
- source-code implementation details unless referenced as implementation evidence
- public-facing claims or marketing copy approvals

## 5. Candidate vs Promoted Distinction

Candidate objects are records that may be useful but are not active authority.

Promoted objects are represented in or owned by an approved repository document and trace back to source references, validation artifacts, and bounded task records.

The registry may point to promoted authority. It does not become that authority by listing an object.

## 6. Owner Document Rules

Every registry record must identify an owner document or mark the owner as `Needs Operator Decision`.

Owner document rules:

- System governance objects should point to `/docs/system/` or `/docs/codex/` owner docs.
- Runtime contract objects should point to `/docs/runtime/` or locked CRM/payment/scheduling owner docs.
- Domain governance objects should point to the relevant domain folder.
- Task objects should point to `/docs/system/master-task-register.md`.
- Candidate objects may point to source evidence until an owner document is created or selected.

If an owner document conflicts with a higher-authority document, the higher-authority document controls.

## 7. No Automatic Authority Rule

Adding an object to this registry does not:

- authorize implementation
- promote chat-derived knowledge
- change system governance
- change runtime contracts
- change protected systems
- change task status
- create business process, RSI, decision, dependency, intake, or hook authority

Authority requires a bounded task, an owner document, and alignment with the repository authority chain.

## 8. Initial Seed Namespaces

REV01 seeds namespaces only. Placeholder examples are intentionally generic and do not import all known objects.

| Namespace | Object Area | Placeholder Example |
| --- | --- | --- |
| KAOS-GOV | Governance | `KAOS-GOV-0001` future governance object |
| KAOS-DEC | Decision | `KAOS-DEC-0001` future decision object |
| KAOS-BPROC | Business Process | `KAOS-BPROC-0001` future business process object |
| KAOS-RC | Runtime Contract | `KAOS-RC-0001` future runtime contract object |
| KAOS-STD | Standard | `KAOS-STD-0001` future standard object |
| KAOS-SPEC | Specification | `KAOS-SPEC-0001` future specification object |
| KAOS-TASK | Task | `KAOS-TASK-0001` future task object |
| KAOS-AUTO | Automation | `KAOS-AUTO-0001` future automation object |
| KAOS-DASH | Dashboard | `KAOS-DASH-0001` future dashboard object |
| KAOS-CAT | Catalog Item | `KAOS-CAT-0001` future catalog item object |
| KAOS-SOL | Solution | `KAOS-SOL-0001` future solution object |
| KAOS-CA | Customer Artifact | `KAOS-CA-0001` future customer artifact object |
| KAOS-IA | Installer Artifact | `KAOS-IA-0001` future installer artifact object |
| KAOS-VAL | Validation Artifact | `KAOS-VAL-0001` future validation artifact object |
| KAOS-RSI | RSI Opportunity | `KAOS-RSI-0001` future RSI opportunity object |

## 9. REV01 Seed Record Template

Future registry rows should use this minimum structure:

| Field | Value |
| --- | --- |
| `kaos_id` |  |
| `object_type` |  |
| `name` |  |
| `summary` |  |
| `domain` |  |
| `status` |  |
| `authority_level` |  |
| `source_classification` |  |
| `source_reference` |  |
| `owner_document` |  |
| `owner_document_status` |  |
| `promotion_recommendation` |  |
| `relationships` |  |
| `operator_decision_required` |  |
| `confidence` |  |
| `last_reviewed_date` |  |

## 10. REV01 Scope Lock

REV01 does not import all known objects, classify all historical documents, create related registries, create intake workflows, create hooks, or implement automation.
