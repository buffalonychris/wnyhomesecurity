/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import { brandSite } from '../../lib/brand';

const renderRoute = (initialEntry: string) =>
  render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <App />
    </MemoryRouter>,
  );

describe('Operator navbar routing', () => {
  it('renders the operator navbar on /operator', async () => {
    renderRoute('/operator');

    expect(await screen.findByLabelText(`${brandSite} home`)).toBeInTheDocument();
  });

  it('does not render the operator navbar on /home-security', async () => {
    renderRoute('/home-security');

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /home security that works even when the internet doesn’t/i,
      }),
    ).toBeInTheDocument();

    expect(screen.queryByText(/business portals for connected care/i)).not.toBeInTheDocument();
  });

  it('does not render the operator navbar on /halo', async () => {
    renderRoute('/halo');

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /halo pers delivers a resilient personal safety layer/i,
      }),
    ).toBeInTheDocument();

    expect(screen.queryByText(/business portals for connected care/i)).not.toBeInTheDocument();
  });
});
