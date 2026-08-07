/* eslint-disable no-undef */
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import App from '../../App';
import {
  GOVERNANCE_SCHEMA_VERSION,
  VIEWER_READINESS_VALUES,
  governanceRecords,
} from '../../data/governanceViewerData';

const renderViewer = () => render(<MemoryRouter initialEntries={['/operator/governance']}><App /></MemoryRouter>);

describe('Governance Viewer data adapter', () => {
  it('preserves all 11 unique REV02 records and required fields', () => {
    expect(GOVERNANCE_SCHEMA_VERSION).toBe('REV02');
    expect(governanceRecords).toHaveLength(11);
    expect(new Set(governanceRecords.map((record) => record.document_id))).toHaveLength(11);

    governanceRecords.forEach((record) => {
      expect(record.title).toBeTruthy();
      expect(record.path).toBeTruthy();
      expect(record.governance_domain).toBeTruthy();
      expect(record.authority_level).toBeTruthy();
      expect(record.authority_owner).toBeTruthy();
      expect(record.authority_source_path).toBeTruthy();
      expect(record.controls).toBeDefined();
      expect(record.does_not_control).toBeDefined();
      expect(record.upstream_authority).toBeDefined();
      expect(record.downstream_dependencies).toBeDefined();
      expect(record.provenance_task_reference).toBeTruthy();
      expect(record.provenance_work_order_reference).toBeTruthy();
      expect(record.provenance_pr_reference).toBeTruthy();
      expect(record.last_reviewed).toBeTruthy();
      expect(record.effective_revision).toBeTruthy();
      expect(VIEWER_READINESS_VALUES).toContain(record.viewer_readiness);
    });
  });
});

describe('Governance Viewer route and read-only interactions', () => {
  it('renders under the operator layout with the read-only boundary and record detail', async () => {
    renderViewer();

    expect(await screen.findByRole('heading', { level: 1, name: 'Governance Viewer' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Operator workspace navigation' })).toBeInTheDocument();
    expect(screen.getByRole('note')).toHaveTextContent(/read-only projection/i);
    expect(screen.getByText(/why does this exist/i)).toBeInTheDocument();
    expect(screen.getByText('Project Governance / Operator')).toBeInTheDocument();
    expect(screen.getByText('Primary repository authority')).toBeInTheDocument();
    expect(screen.getAllByText('docs/system/project.md').length).toBeGreaterThan(0);
    expect(screen.queryByRole('button', { name: /edit|save|approve|create task|archive/i })).not.toBeInTheDocument();
  });

  it('searches title, path, and domain and provides a no-results state', async () => {
    const user = userEvent.setup();
    renderViewer();
    await user.click(await screen.findByRole('tab', { name: 'Registry' }));
    const search = screen.getByRole('searchbox', { name: 'Search records' });

    await user.type(search, 'Runtime Contracts');
    expect(screen.getByText('1 results')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /runtime contracts/i })).toBeInTheDocument();

    await user.clear(search);
    await user.type(search, 'docs/system/step-current.md');
    expect(screen.getByRole('button', { name: /current operational context/i })).toBeInTheDocument();

    await user.clear(search);
    await user.type(search, 'RSI / Execution Evidence');
    expect(screen.getByRole('button', { name: /recursive self improvement/i })).toBeInTheDocument();

    await user.clear(search);
    await user.type(search, 'no such governance record');
    expect(screen.getByRole('status')).toHaveTextContent('No governance records match');
  });

  it('filters by domain, status, readiness, owner posture, and conflicts', async () => {
    const user = userEvent.setup();
    renderViewer();
    await user.click(await screen.findByRole('tab', { name: 'Registry' }));

    await user.selectOptions(screen.getByLabelText('Filter by domain'), 'Runtime Contracts');
    expect(screen.getByText('1 results')).toBeInTheDocument();
    await user.selectOptions(screen.getByLabelText('Filter by domain'), 'ALL');

    await user.selectOptions(screen.getByLabelText('Filter by status'), 'ACTIVE');
    expect(screen.getByRole('button', { name: /current operational context/i })).toBeInTheDocument();
    await user.selectOptions(screen.getByLabelText('Filter by status'), 'ALL');

    await user.selectOptions(screen.getByLabelText('Filter by readiness'), 'HISTORICAL_ONLY');
    expect(screen.getByRole('button', { name: /governance reconciliation task plan/i })).toBeInTheDocument();
    await user.selectOptions(screen.getByLabelText('Filter by readiness'), 'ALL');

    await user.selectOptions(screen.getByLabelText('Filter by canonical owner'), 'CANONICAL');
    expect(screen.getByText('6 results')).toBeInTheDocument();
    await user.selectOptions(screen.getByLabelText('Filter by canonical owner'), 'ALL');

    await user.selectOptions(screen.getByLabelText('Filter by conflicts'), 'WITH');
    expect(screen.getByRole('status')).toHaveTextContent('No governance records match');
  });

  it('selects a record, exposes authority and provenance, and traverses graph relationships', async () => {
    const user = userEvent.setup();
    renderViewer();
    await user.click(await screen.findByRole('tab', { name: 'Registry' }));
    await user.click(screen.getByRole('button', { name: /codex execution standard rev01/i }));

    const detail = screen.getByLabelText('Governance record detail: Codex Execution Standard REV01');
    expect(within(detail).getByText('Project Governance / Codex')).toBeInTheDocument();
    expect(within(detail).getAllByText(/Codex execution, repository-owned work orders/i)).toHaveLength(2);
    expect(within(detail).getAllByText(/task priority, merge, deployment/i)).toHaveLength(2);
    expect(within(detail).getAllByText(/T-GOVEXEC001/)).toHaveLength(2);
    expect(within(detail).getByText(/2026-08-06 · T-GOVFLOW001/)).toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: 'Authority' }));
    expect(screen.getByLabelText('Selected node: Codex Execution Standard REV01')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /WNY Home Security Project Governance/i }));
    expect(screen.getByLabelText('Selected node: WNY Home Security Project Governance')).toBeInTheDocument();
    expect(screen.getByLabelText('Text relationship equivalent')).toBeInTheDocument();
  });
});
