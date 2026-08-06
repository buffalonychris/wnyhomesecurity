import { useMemo, useState } from 'react';
import type { ReactElement } from 'react';

import KpiTile from '../components/operator/KpiTile';
import Pill from '../components/operator/Pill';
import SectionHeader from '../components/operator/SectionHeader';
import SpaceFrame from '../components/operator/SpaceFrame';
import {
  GOVERNANCE_SCHEMA_VERSION,
  GOVERNANCE_SNAPSHOT_DATE,
  GOVERNANCE_SNAPSHOT_SOURCE,
  OPENAI_ALIGNMENT_REFERENCE,
  VIEWER_READINESS_VALUES,
  governanceRecords,
  govuiOwnerRouting,
  type GovernanceRecord,
} from '../data/governanceViewerData';

type ViewId = 'overview' | 'authority' | 'registry' | 'owners' | 'execution' | 'routing' | 'rsi' | 'openai' | 'health';
type SortKey = 'title' | 'governance_domain' | 'status' | 'viewer_readiness' | 'last_governance_update_date';
// eslint-disable-next-line no-unused-vars
type RecordSelectHandler = (record: GovernanceRecord) => void;

const views: readonly { id: ViewId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'authority', label: 'Authority' },
  { id: 'registry', label: 'Registry' },
  { id: 'owners', label: 'Owners' },
  { id: 'execution', label: 'Execution chain' },
  { id: 'routing', label: 'Owner routing' },
  { id: 'rsi', label: 'RSI' },
  { id: 'openai', label: 'OpenAI alignment' },
  { id: 'health', label: 'Health' },
];

const normalize = (value: string | null) => (value ?? '').toLocaleLowerCase();

const formatLabel = (value: string) =>
  value
    .toLocaleLowerCase()
    .split('_')
    .map((part) => `${part.charAt(0).toLocaleUpperCase()}${part.slice(1)}`)
    .join(' ');

const listText = (items: readonly string[]) => (items.length ? items.join(', ') : 'None recorded');

const whyThisExists = (record: GovernanceRecord) =>
  `${record.title} exists to govern ${listText(record.controls)}. Its recorded boundary excludes ${listText(record.does_not_control)}.`;

const findRelatedRecord = (reference: string) =>
  governanceRecords.find((record) => record.path === reference || record.document_id === reference);

const DetailList = ({ label, items }: { label: string; items: readonly string[] }) => (
  <div className="governance-detail-row">
    <dt>{label}</dt>
    <dd>{listText(items)}</dd>
  </div>
);

const RecordDetail = ({ record }: { record: GovernanceRecord }) => (
  <SpaceFrame as="aside" className="governance-detail" aria-label={`Governance record detail: ${record.title}`}>
    <div className="governance-detail-titlebar">
      <div>
        <Pill>{record.governance_domain}</Pill>
        <h2>{record.title}</h2>
      </div>
      <span className={`governance-badge governance-badge--${record.viewer_readiness.toLocaleLowerCase()}`}>
        {formatLabel(record.viewer_readiness)}
      </span>
    </div>
    <p className="governance-why"><strong>Why does this exist?</strong> {whyThisExists(record)}</p>
    <dl className="governance-detail-list">
      <div className="governance-detail-row"><dt>Document ID</dt><dd>{record.document_id}</dd></div>
      <div className="governance-detail-row"><dt>Owner</dt><dd>{record.authority_owner}</dd></div>
      <div className="governance-detail-row"><dt>Authority level</dt><dd>{record.authority_level}</dd></div>
      <div className="governance-detail-row"><dt>Source path</dt><dd><code>{record.authority_source_path}</code></dd></div>
      <div className="governance-detail-row"><dt>Canonical owner</dt><dd>{record.is_canonical_owner ? 'Yes' : 'No'}</dd></div>
      <div className="governance-detail-row"><dt>Status</dt><dd>{record.status}</dd></div>
      <DetailList label="Controls" items={record.controls} />
      <DetailList label="Does not control" items={record.does_not_control} />
      <DetailList label="Upstream authority" items={record.upstream_authority} />
      <DetailList label="Downstream dependencies" items={record.downstream_dependencies} />
      <DetailList label="Supporting documents" items={record.supporting_documents} />
      <DetailList label="Conflicts" items={record.conflicting_documents} />
      <div className="governance-detail-row"><dt>Provenance</dt><dd>{record.provenance_task_reference} · <code>{record.provenance_work_order_reference}</code> · {record.provenance_pr_reference}</dd></div>
      <div className="governance-detail-row"><dt>Last governance update</dt><dd>{record.last_governance_update_date ? `${record.last_governance_update_date} · ${record.last_governance_update_task} · ${record.effective_revision}` : `Not established · last reviewed ${record.last_reviewed}`}</dd></div>
    </dl>
  </SpaceFrame>
);

const RelationshipItems = ({
  label,
  items,
  onSelect,
}: {
  label: string;
  items: readonly string[];
  onSelect: RecordSelectHandler;
}) => (
  <div className="governance-relationship-column">
    <h3>{label}</h3>
    {items.length ? items.map((item) => {
      const related = findRelatedRecord(item);
      return related ? (
        <button key={item} className="governance-node governance-node--related" type="button" onClick={() => onSelect(related)}>
          <span>{related.title}</span><small>{related.path}</small>
        </button>
      ) : (
        <div key={item} className="governance-node governance-node--external">
          <span>{item}</span><small>Referenced relationship</small>
        </div>
      );
    }) : <p className="governance-empty-inline">None recorded</p>}
  </div>
);

const AuthorityGraph = ({ record, onSelect }: { record: GovernanceRecord; onSelect: RecordSelectHandler }) => (
  <SpaceFrame className="governance-graph" aria-labelledby="authority-graph-title">
    <div className="governance-view-titlebar">
      <div><Pill>Directed relationships</Pill><h2 id="authority-graph-title">Authority Explorer</h2></div>
      <span className="governance-legend">Upstream → selected → downstream</span>
    </div>
    <p>Choose any linked record to move through the repository relationship graph. Referenced paths without a viewer record remain visible but are not inferred as new nodes.</p>
    <div className="governance-relationship-graph">
      <RelationshipItems label="Upstream authority" items={record.upstream_authority} onSelect={onSelect} />
      <div className="governance-selected-node" aria-label={`Selected node: ${record.title}`}>
        <span>Selected record</span><strong>{record.title}</strong><small>{record.path}</small>
      </div>
      <RelationshipItems label="Downstream dependencies" items={record.downstream_dependencies} onSelect={onSelect} />
    </div>
    <div className="governance-accessible-relationships" aria-label="Text relationship equivalent">
      <strong>Relationship list:</strong> {listText(record.upstream_authority)} → {record.title} → {listText(record.downstream_dependencies)}
    </div>
  </SpaceFrame>
);

const GovernanceViewer = () => {
  const [activeView, setActiveView] = useState<ViewId>('overview');
  const [selectedId, setSelectedId] = useState(governanceRecords[0].document_id);
  const [query, setQuery] = useState('');
  const [domain, setDomain] = useState('ALL');
  const [status, setStatus] = useState('ALL');
  const [readiness, setReadiness] = useState('ALL');
  const [canonical, setCanonical] = useState('ALL');
  const [conflicts, setConflicts] = useState('ALL');
  const [sortKey, setSortKey] = useState<SortKey>('title');

  const selectedRecord = governanceRecords.find((record) => record.document_id === selectedId) ?? governanceRecords[0];
  const domains = useMemo(() => [...new Set(governanceRecords.map((record) => record.governance_domain))].sort(), []);
  const statuses = useMemo(() => [...new Set(governanceRecords.map((record) => record.status))].sort(), []);
  const ownerGroups = useMemo(() => {
    const groups = new Map<string, GovernanceRecord[]>();
    governanceRecords.forEach((record) => groups.set(record.authority_owner, [...(groups.get(record.authority_owner) ?? []), record]));
    return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, []);

  const filteredRecords = useMemo(() => governanceRecords
    .filter((record) => {
      const haystack = [record.title, record.path, record.governance_domain, record.authority_owner, record.document_id].join(' ').toLocaleLowerCase();
      return !query.trim() || haystack.includes(query.trim().toLocaleLowerCase());
    })
    .filter((record) => domain === 'ALL' || record.governance_domain === domain)
    .filter((record) => status === 'ALL' || record.status === status)
    .filter((record) => readiness === 'ALL' || record.viewer_readiness === readiness)
    .filter((record) => canonical === 'ALL' || (canonical === 'CANONICAL') === record.is_canonical_owner)
    .filter((record) => conflicts === 'ALL' || (conflicts === 'WITH') === Boolean(record.conflicting_documents.length))
    .sort((a, b) => normalize(a[sortKey]).localeCompare(normalize(b[sortKey]))), [canonical, conflicts, domain, query, readiness, sortKey, status]);

  const selectRecord = (record: GovernanceRecord) => setSelectedId(record.document_id);
  const canonicalCount = governanceRecords.filter((record) => record.is_canonical_owner).length;
  const conflictCount = governanceRecords.filter((record) => record.conflicting_documents.length).length;
  const readyCount = governanceRecords.filter((record) => record.viewer_readiness === 'READY').length;

  const renderOverview = () => (
    <div className="governance-stack">
      <div className="space-grid three-column governance-kpis">
        <KpiTile label="Governance records" value={governanceRecords.length} trend={`Schema ${GOVERNANCE_SCHEMA_VERSION}`} />
        <KpiTile label="Canonical owners" value={canonicalCount} trend="Explicit owner posture" />
        <KpiTile label="Ready for viewer" value={readyCount} trend={`${governanceRecords.length - readyCount} require attention`} />
        <KpiTile label="Recorded conflicts" value={conflictCount} trend="No automatic resolution" />
        <KpiTile label="Governance domains" value={domains.length} trend="Repository snapshot" />
      </div>
      <SpaceFrame className="governance-callout">
        <Pill>Read-only boundary</Pill>
        <h2>Repository documents remain authoritative</h2>
        <p>This viewer is a deterministic local snapshot. It can search, filter, sort, select, group, and display relationships. It cannot edit governance, create tasks, approve routing, resolve conflicts, write to GitHub, or report live deployment state.</p>
        <code>{GOVERNANCE_SNAPSHOT_SOURCE}</code>
      </SpaceFrame>
      <AuthorityGraph record={selectedRecord} onSelect={selectRecord} />
    </div>
  );

  const renderRegistry = () => (
    <SpaceFrame className="governance-registry" aria-labelledby="registry-title">
      <div className="governance-view-titlebar"><div><Pill>11 source-backed records</Pill><h2 id="registry-title">Governance Registry</h2></div><span>{filteredRecords.length} results</span></div>
      <div className="governance-filters">
        <label className="governance-search"><span>Search records</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Title, path, domain, owner, or ID" /></label>
        <label><span>Domain</span><select aria-label="Filter by domain" value={domain} onChange={(event) => setDomain(event.target.value)}><option value="ALL">All domains</option>{domains.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label><span>Status</span><select aria-label="Filter by status" value={status} onChange={(event) => setStatus(event.target.value)}><option value="ALL">All statuses</option>{statuses.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label><span>Readiness</span><select aria-label="Filter by readiness" value={readiness} onChange={(event) => setReadiness(event.target.value)}><option value="ALL">All readiness states</option>{VIEWER_READINESS_VALUES.map((item) => <option key={item} value={item}>{formatLabel(item)}</option>)}</select></label>
        <label><span>Owner posture</span><select aria-label="Filter by canonical owner" value={canonical} onChange={(event) => setCanonical(event.target.value)}><option value="ALL">All records</option><option value="CANONICAL">Canonical owners</option><option value="SUPPORTING">Supporting records</option></select></label>
        <label><span>Conflicts</span><select aria-label="Filter by conflicts" value={conflicts} onChange={(event) => setConflicts(event.target.value)}><option value="ALL">All records</option><option value="WITH">With conflicts</option><option value="WITHOUT">Without conflicts</option></select></label>
        <label><span>Sort by</span><select aria-label="Sort records" value={sortKey} onChange={(event) => setSortKey(event.target.value as SortKey)}><option value="title">Title</option><option value="governance_domain">Domain</option><option value="status">Status</option><option value="viewer_readiness">Readiness</option><option value="last_governance_update_date">Last governance update</option></select></label>
      </div>
      {filteredRecords.length ? (
        <div className="governance-table-wrap"><table className="governance-table"><thead><tr><th>Record</th><th>Domain</th><th>Status</th><th>Readiness</th><th>Owner posture</th></tr></thead><tbody>{filteredRecords.map((record) => <tr key={record.document_id} className={selectedId === record.document_id ? 'is-selected' : undefined}><td><button type="button" onClick={() => selectRecord(record)}><strong>{record.title}</strong><code>{record.path}</code></button></td><td>{record.governance_domain}</td><td>{record.status}</td><td><span className="governance-badge">{formatLabel(record.viewer_readiness)}</span></td><td>{record.is_canonical_owner ? 'Canonical' : 'Supporting'}</td></tr>)}</tbody></table></div>
      ) : <div className="governance-empty" role="status"><h3>No governance records match</h3><p>Adjust the search or filters. No source data was changed.</p></div>}
    </SpaceFrame>
  );

  const renderOwners = () => (
    <div className="governance-owner-grid">{ownerGroups.map(([owner, records]) => <SpaceFrame key={owner} className="governance-owner-group"><Pill>{records.length} {records.length === 1 ? 'record' : 'records'}</Pill><h2>{owner}</h2>{records.map((record) => <button type="button" key={record.document_id} onClick={() => selectRecord(record)} className="governance-owner-record"><strong>{record.title}</strong><span>Controls: {listText(record.controls)}</span><span>Excludes: {listText(record.does_not_control)}</span><span>Upstream: {listText(record.upstream_authority)}</span><span>Downstream: {listText(record.downstream_dependencies)}</span><span>Supports: {listText(record.supporting_documents)}</span><span>Conflicts: {listText(record.conflicting_documents)}</span></button>)}</SpaceFrame>)}</div>
  );

  const renderExecution = () => {
    const chainIds = ['WNYHS-PROJECT-GOVERNANCE', 'WNYHS-CURRENT-CONTEXT', 'WNYHS-MASTER-TASK-REGISTER', 'WNYHS-WORK-ORDER-T-GOVEXEC001', 'WNYHS-CODEX-EXECUTION-REV01', 'WNYHS-RSI-EXECUTION-EVIDENCE'];
    const chain = chainIds.map((id) => governanceRecords.find((record) => record.document_id === id)).filter((record): record is GovernanceRecord => Boolean(record));
    return <SpaceFrame><Pill>Repository-derived</Pill><h2>Current Execution Authority Chain</h2><p>This chain reflects only records present in the REV02 snapshot. It does not infer current GitHub, deployment, or external-system state.</p><ol className="governance-chain">{chain.map((record) => <li key={record.document_id}><button type="button" onClick={() => selectRecord(record)}><strong>{record.title}</strong><span>{record.authority_level}</span><code>{record.path}</code></button></li>)}</ol><p className="governance-accessible-relationships"><strong>Evidence and completed history:</strong> the execution and RSI record lists Codex closeouts and the Completed Task Register as downstream evidence relationships.</p></SpaceFrame>;
  };

  const renderRouting = () => (
    <SpaceFrame><Pill>Approved local design data</Pill><h2>Owner Routing Viewer</h2><p>Read-only GOVUI001 routing decisions. This view cannot approve, change, or dispatch them.</p><div className="governance-table-wrap"><table className="governance-table governance-routing-table"><thead><tr><th>Concept</th><th>Owner</th><th>Target / section</th><th>Action</th><th>Reason / exclusion</th><th>Conflict / confidence</th></tr></thead><tbody>{govuiOwnerRouting.map((row) => <tr key={row.concept}><td><strong>{row.concept}</strong></td><td>{row.owner}</td><td><code>{row.target}</code><span>{row.section}</span></td><td>{row.action}</td><td><span>{row.reason}</span><small>{row.why_not_elsewhere}</small></td><td>{row.conflict} / {row.confidence}</td></tr>)}</tbody></table></div></SpaceFrame>
  );

  const renderRsi = () => {
    const rsi = governanceRecords.find((record) => record.document_id === 'WNYHS-RSI-EXECUTION-EVIDENCE') ?? selectedRecord;
    return <SpaceFrame><Pill>Existing governance owner</Pill><h2>RSI / Improvement View</h2><p>No improvement queue is created or inferred. This view displays the canonical RSI owner and its recorded relationships only.</p><button type="button" className="governance-feature-record" onClick={() => selectRecord(rsi)}><strong>{rsi.title}</strong><span>{rsi.authority_owner}</span><span>Controls: {listText(rsi.controls)}</span><span>Does not control: {listText(rsi.does_not_control)}</span><span>Downstream: {listText(rsi.downstream_dependencies)}</span></button></SpaceFrame>;
  };

  const renderOpenAi = () => (
    <SpaceFrame><Pill>Authoritative reference</Pill><h2>OpenAI Current-Use Alignment</h2><p>Structured ingestion is deferred. The current-use alignment artifact remains the authority; this viewer provides its repository reference without inferring tool availability, configuration, or live usage.</p><div className="governance-reference-block"><strong>OpenAI Current-Use Governance Alignment REV01</strong><code>{OPENAI_ALIGNMENT_REFERENCE}</code><span>Classification and remaining-boundary details must be read from the source document.</span></div></SpaceFrame>
  );

  const renderHealth = () => (
    <div className="governance-stack"><SpaceFrame><Pill>Facts, not a score</Pill><h2>Governance Health</h2><p>This distribution is derived only from REV02 readiness and conflict fields. It is not a certification and does not trigger remediation.</p><div className="governance-health-list">{VIEWER_READINESS_VALUES.map((item) => { const count = governanceRecords.filter((record) => record.viewer_readiness === item).length; return <div key={item}><span>{formatLabel(item)}</span><strong>{count}</strong><div className="governance-meter" aria-label={`${formatLabel(item)}: ${count} records`}><span style={{ width: `${(count / governanceRecords.length) * 100}%` }} /></div></div>; })}</div></SpaceFrame><SpaceFrame><h2>Recorded boundary facts</h2><ul className="operator-list"><li>{conflictCount} records contain conflicting documents.</li><li>{governanceRecords.filter((record) => record.last_governance_update_date === null).length} records have no established last governance update date.</li><li>{governanceRecords.filter((record) => record.viewer_readiness === 'HISTORICAL_ONLY').length} records are historical-only.</li><li>{governanceRecords.filter((record) => record.viewer_readiness === 'NEEDS_OWNER_CLARIFICATION').length} records require owner clarification.</li></ul></SpaceFrame></div>
  );

  const viewContent: Record<ViewId, () => ReactElement> = {
    overview: renderOverview,
    authority: () => <AuthorityGraph record={selectedRecord} onSelect={selectRecord} />,
    registry: renderRegistry,
    owners: renderOwners,
    execution: renderExecution,
    routing: renderRouting,
    rsi: renderRsi,
    openai: renderOpenAi,
    health: renderHealth,
  };

  return (
    <div className="space-shell governance-viewer-shell">
      <div className="container section governance-viewer">
        <SectionHeader kicker="KAOS / Internal" title="Governance Viewer" subtitle="Search repository-owned governance, trace authority relationships, and answer why each rule exists—without changing its source." actions={<div className="governance-snapshot-label"><strong>Read-only snapshot</strong><span>REV02 · {GOVERNANCE_SNAPSHOT_DATE}</span></div>} />
        <div className="governance-boundary" role="note"><strong>Read-only projection.</strong> Source documents remain authoritative. No editing, approvals, task actions, GitHub writes, or live external state.</div>
        <div className="governance-tabs" role="tablist" aria-label="Governance Viewer screens">{views.map((view) => <button key={view.id} type="button" role="tab" aria-selected={activeView === view.id} onClick={() => setActiveView(view.id)}>{view.label}</button>)}</div>
        <div className="governance-content" id={`governance-panel-${activeView}`} role="region" aria-label={views.find((view) => view.id === activeView)?.label}>{viewContent[activeView]()}</div>
        <RecordDetail record={selectedRecord} />
      </div>
    </div>
  );
};

export default GovernanceViewer;
