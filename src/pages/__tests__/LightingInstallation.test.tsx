/* eslint-disable no-undef */
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

const renderPage = () =>
  render(
    <MemoryRouter initialEntries={['/lighting-installation']}>
      <App />
    </MemoryRouter>,
  );

describe('Lighting installation campaign page', () => {
  it('renders the direct route with approved campaign content and prominent disclosure', async () => {
    renderPage();

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /permanent outdoor lighting, designed around your property/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/see how your home may look with the lighting you choose/i)).toBeInTheDocument();
    expect(screen.getByRole('note', { name: /important concept-image disclosure/i })).toHaveTextContent(
      /not photometric, engineering, electrical, compatibility, or installation plans/i,
    );
    expect(screen.getByText(/no mounting vendor is required or exclusive/i)).toBeInTheDocument();
  });

  it('uses email contact without a campaign form, automated lead route, pricing, or proof imagery', async () => {
    const { container } = renderPage();
    await screen.findByRole('heading', { level: 1 });

    const page = container.querySelector('.wnyhs-lighting-shell');
    expect(page).not.toBeNull();
    const pageQueries = within(page as HTMLElement);
    const emailLink = pageQueries.getByRole('link', { name: /email hello@wnyhomesecurity\.com/i });

    expect(emailLink).toHaveAttribute('href', expect.stringMatching(/^mailto:hello@wnyhomesecurity\.com\?/));
    expect(pageQueries.queryByRole('form')).not.toBeInTheDocument();
    expect(pageQueries.queryByRole('img')).not.toBeInTheDocument();
    expect(page).not.toHaveTextContent(/\$|per[- ]foot|40%|margin|vendor cost|material cost/i);
    expect(pageQueries.queryByRole('link', { name: /quote|schedule|request estimate/i })).not.toBeInTheDocument();
  });

  it('keeps a single page heading and semantic section headings', async () => {
    const { container } = renderPage();
    await screen.findByRole('heading', { level: 1 });

    const page = container.querySelector('.wnyhs-lighting-shell');
    expect(within(page as HTMLElement).getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(within(page as HTMLElement).getAllByRole('heading', { level: 2 }).length).toBeGreaterThanOrEqual(5);
  });
});
