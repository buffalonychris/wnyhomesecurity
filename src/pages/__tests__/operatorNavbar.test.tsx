/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

const renderRoute = (initialEntry: string) =>
  render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <App />
    </MemoryRouter>,
  );

describe('Operator navbar routing', () => {
  it('renders the operator navbar on /operator', async () => {
    renderRoute('/operator');

    const operatorNavigation = await screen.findByRole(
      'navigation',
      { name: 'Operator workspace navigation' },
      { timeout: 5_000 },
    );

    expect(operatorNavigation).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Operator overview' })).toHaveAttribute('href', '/operator');
    expect(screen.getByRole('link', { name: 'Governance' })).toHaveAttribute('href', '/operator/governance');
  });

  it('does not render the operator navbar on /home-security', async () => {
    renderRoute('/home-security');

    expect(await screen.findByRole('navigation', { name: 'WNY Home Security' })).toBeInTheDocument();

    expect(screen.queryByRole('navigation', { name: 'Operator workspace navigation' })).not.toBeInTheDocument();
  });

  it('does not render the operator navbar on /halo', async () => {
    renderRoute('/halo');

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /halo pers delivers a resilient personal safety layer/i,
      }),
    ).toBeInTheDocument();

    expect(screen.queryByRole('navigation', { name: 'Operator workspace navigation' })).not.toBeInTheDocument();
  });
});
