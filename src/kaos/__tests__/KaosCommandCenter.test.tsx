import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import KaosCommandCenter from '../KaosCommandCenter';

const renderKaos = (path = '/kaos') => render(<MemoryRouter initialEntries={[path]}><KaosCommandCenter /></MemoryRouter>);

describe('KAOSWEB001 command center', () => {
  it('preserves the Sites entry experience and command-center navigation', async () => {
    const user = userEvent.setup();
    renderKaos();
    expect(screen.getByText('Control the chaos.')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Enter Command Center/i }));
    expect(screen.getByRole('navigation', { name: 'Command center sections' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Approved Offerings/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Procurement/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Governance/i })).toBeInTheDocument();
  });

  it('keeps Approved Offerings in snapshot/reference mode with both governed Sheets links', async () => {
    const user = userEvent.setup();
    renderKaos();
    await user.click(screen.getByRole('button', { name: /Enter Command Center/i }));
    await user.click(screen.getByRole('button', { name: /Approved Offerings/i }));
    expect(screen.getByText('Secure snapshot mode')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Open master sheet/i })).toHaveAttribute('href', expect.stringContaining('gid=1467195691'));
    expect(screen.getByRole('link', { name: /Add approved part/i })).toHaveAttribute('href', expect.stringContaining('gid=1970164918'));
    expect(screen.getByText(/Catalog, not physical inventory/i)).toBeInTheDocument();
  });

  it('labels Procurement controls as simulated and performs no external mutation', async () => {
    const user = userEvent.setup();
    renderKaos();
    await user.click(screen.getByRole('button', { name: /Enter Command Center/i }));
    await user.click(screen.getByRole('button', { name: /Procurement/i }));
    expect(screen.getByText(/No order, vendor message, or external write occurs here/i)).toBeInTheDocument();
    const control = screen.getByRole('button', { name: /Approve line in demo/i });
    await user.click(control);
    expect(screen.getByRole('button', { name: /Approved in demo/i })).toBeInTheDocument();
  });

  it('renders the existing read-only Governance Viewer at the KAOS governance route', () => {
    renderKaos('/kaos/governance');
    expect(screen.getByText('Governance Viewer')).toBeInTheDocument();
    expect(screen.getByText(/Read-only projection/i)).toBeInTheDocument();
    expect(screen.queryByText(/WNY Home Security Operator/i)).not.toBeInTheDocument();
  });
});
