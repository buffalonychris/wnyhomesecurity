# HA-NOTIFY003 BKLF Implementation Readiness Matrix REV01

Task ID: HA-NOTIFY003-BKLF-LIVE-NOTIFICATION-VALIDATION-001

Status: In progress; not implementation-ready.

Readiness rule: no event may be classified READY from backup extraction, repository YAML, guessed entity names, or Codex inference. READY requires operator-provided live evidence.

## Classification Key

| Classification | Meaning |
| --- | --- |
| READY | Live evidence confirms required entities/services, trigger, routing, timing, suppression, destination/media where applicable, and recovery where required. |
| READY WITH IMPLEMENTATION CONDITION | Live evidence confirms core function, but implementation must include a documented condition or limitation. |
| BLOCKED | Mandatory live evidence or prerequisite is missing. |
| NOT SUPPORTED | Live evidence proves the capability is unavailable or unreliable for this event. |
| FUTURE / DEFERRED | BKLF REV06 places the event outside the initial implementation or makes it conditional on a future reliable signal. |

## Global Readiness Gates

| Gate | Status | Evidence | Impact |
| --- | --- | --- | --- |
| Companion services live-tested | BLOCKED | Repository lists `notify.chris_cell`, `notify.luis_cell`, `notify.me_lewis_cell`, and `notify.sm_s931u1_helen_cell`; live push tests pending. | No production route can be approved. |
| Production recipient mapping confirmed | BLOCKED | BKLF REV06 policy and backup mappings exist; live People/User review pending. | Routing not implementation-ready. |
| Building Mode source and values confirmed | BLOCKED | `input_select.bklf_building_mode` source YAML values differ from BKLF REV06; live values pending. | Mode-gated events blocked. |
| Quiet Hours technical input confirmed | BLOCKED | Policy is 9:00 PM to 8:00 AM; helper/timezone live review pending. | Normal/Low delivery rules blocked. |
| Door/contact mapping confirmed | BLOCKED | South likely mapped; Bailey ambiguous. | Secure workflow, door-left-open, and no-lock-while-open blocked. |
| Recovery observability confirmed | BLOCKED | No recovery test evidence. | Restored events blocked. |
| Destination/media behavior confirmed | BLOCKED | Routes and cameras exist in repo evidence; live Companion/media tests pending. | Notification actions/media blocked. |

## Event Readiness Matrix

| BKLF REV06 event | Classification | Current evidence | Missing live evidence | Implementation impact |
| --- | --- | --- | --- | --- |
| Doorbell press | BLOCKED | South visitor entity and Bailey doorbell entities are repository/backup-confirmed. | Controlled press, event duration, duplicate behavior, recipient push, image, route open. | Do not implement until both doorbells are live-confirmed or explicitly scoped separately. |
| Camera offline/restored | BLOCKED | Camera entities and Reolink integration are backup-confirmed. | Reliable unavailable/restored source, 180-second feasibility, restart/update false-positive behavior. | Offline/recovery logic not ready. |
| Doorbell offline/restored | BLOCKED | Doorbell camera entities are backup-confirmed. | Reliable availability/restored source and routing evidence. | High-priority doorbell health not ready. |
| Lock jam | BLOCKED | Jam entities are backup-confirmed for both locks. | Live jam/problem state source, recovery state, recipient routing. | Do not implement Critical customer route yet. |
| Lock battery low | BLOCKED | Battery/replace-battery entities are backup-confirmed. | Live entity names/states, threshold behavior, recovery behavior. | Low-battery reminders not ready. |
| Failure to secure | BLOCKED | Lock entities and 15-second/five-attempt policy exist. | Door/contact mapping, command response timing, no-lock-while-open guard, safe retry confirmation. | Secure-building workflow blocked. |
| Door left open | BLOCKED | Door contacts exist; 90-second/five-notification policy exists. | Physical contact mapping, stability, reset behavior, route evidence. | Door-left-open sequence blocked. |
| Exterior opening while Closed | BLOCKED | Contact entities exist; mode policy exists. | Live Closed mode source, contact mapping, bounce/cooldown behavior. | Closed-mode opening alerts blocked. |
| Interior motion while Closed | BLOCKED | M01/M02 and template entity exist. | Live motion/reset/noise behavior and Closed-mode suppression test. | Motion alert blocked. |
| Parking-lot person/loitering | BLOCKED | Parking Lot camera, person, and linger-area person entities are repository/backup-confirmed. | Five-minute continuous-presence feasibility, reset behavior, image, route. | Do not claim loitering support yet. |
| Zigbee controller outage/restored | BLOCKED | ZHA controller is backup-confirmed. | Exact reliable status source, sustained outage/recovery behavior, restart false-positive risk. | Service-only controller event blocked. |
| Z-Wave controller outage/restored | BLOCKED | Z-Wave JS controller is backup-confirmed. | Exact reliable status source, sustained outage/recovery behavior, restart false-positive risk. | Service-only controller event blocked. |
| Critical integration failure/restored | BLOCKED | Reolink, mobile_app, backup, Supervisor, ZHA, and Z-Wave JS integrations are backup-confirmed. | Reliable live status sources and recovery signals. | Service/system events blocked. |
| Automation failure | FUTURE / DEFERRED | REV06 says future/conditional; no reliable live signal proven. | Reliable automation failure signal, if any. | Do not implement in HA-NOTIFY004 unless separately proven. |
| Backup failure | FUTURE / DEFERRED | Backup integration present; REV06 says future/conditional. | Reliable failure/staleness signal, if any. | Do not implement in HA-NOTIFY004 unless separately proven. |
| Maintenance/test events | BLOCKED | Maintenance/Installer helpers exist in repository evidence. | Live service routes, suppression behavior, and implementation-test recipient confirmation. | Test route not ready. |

## Profile Correction Candidates

No BKLF REV06 correction is made by this matrix because live evidence is not yet available. These candidates require operator live confirmation before any REV06 update:

| Candidate | Evidence type | Needed live proof |
| --- | --- | --- |
| Building Mode values may differ from REV06. | repository-configured | Live helper options/current state and operator decision on intended values. |
| Installer Mode may be a boolean rather than an input_select value. | repository-configured / backup-confirmed | Live helper behavior and dashboard access path. |
| Quiet Hours may require direct calculation because no helper is repository-confirmed. | backup-confirmed absence from reviewed docs | Live helper search and timezone confirmation. |
| Bailey Double Doors contact mapping is ambiguous. | backup-confirmed / repository-configured | Physical open/close confirmation. |
| Backup and automation failure may be unsupported for initial implementation. | REV06 future/conditional | Live reliable signal search. |

## Implementation-Ready Inputs Still Required

| Input | Status | Required evidence |
| --- | --- | --- |
| Confirmed Companion production services | BLOCKED | Successful push to Chris, Luis, Mr. Lewis; Helen excluded; Anthony excluded. |
| Confirmed production recipients | BLOCKED | Live role/person review. |
| Confirmed Building Mode helper and values | BLOCKED | Live helper options/current state/history. |
| Confirmed Quiet Hours source | BLOCKED | Timezone, helper absence/presence, DST-safe approach. |
| Confirmed doorbell entities | BLOCKED | Controlled press state changes for South and Bailey. |
| Confirmed camera/media behavior | BLOCKED | Snapshot/media and route-open evidence. |
| Confirmed lock entities and behavior | BLOCKED | State accuracy, diagnostics, timing, optional command test. |
| Confirmed door/contact mappings | BLOCKED | Physical door/contact matching. |
| Confirmed motion/person behavior | BLOCKED | Controlled interior motion and parking-lot person/linger behavior. |
| Confirmed controller/integration observability | BLOCKED | Reliable live status source for ZHA, Z-Wave JS, Reolink, and other critical integrations. |
| Confirmed recovery behavior | BLOCKED | Fault/restored state evidence and suppression feasibility. |

## Next Task Recommendation

Do not start `HA-NOTIFY004-BKLF-NOTIFICATION-IMPLEMENTATION-001` yet.

Continue HA-NOTIFY003 operator validation. If live Building Mode values do not match BKLF REV06, create a bounded prerequisite profile/configuration-decision task before implementation.
