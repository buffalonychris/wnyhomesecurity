/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';

const renderRoute = (initialEntry: string) =>
  render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <App />
    </MemoryRouter>,
  );

describe('Landing pages', () => {
  it('renders senior landing page and CTA', async () => {
    renderRoute('/lp/senior');

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /live independently with reliable, local-first coverage/i,
      }),
    ).toBeInTheDocument();

    const cta = await screen.findByRole('link', { name: /check my fit/i });
    expect(cta).toHaveAttribute('href', '/qualify?audience=senior');
    await userEvent.click(cta);
  });

  it('renders family landing page and CTA', async () => {
    renderRoute('/lp/family');

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /stay ahead of emergencies without hovering/i,
      }),
    ).toBeInTheDocument();

    const cta = await screen.findByRole('link', { name: /start fit check/i });
    expect(cta).toHaveAttribute('href', '/qualify?audience=family');
    await userEvent.click(cta);
  });

  it('renders agency landing page and CTA', async () => {
    renderRoute('/lp/agency');

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /deterministic safety coverage your teams can rely on/i,
      }),
    ).toBeInTheDocument();

    const cta = await screen.findByRole('link', { name: /check agency fit/i });
    expect(cta).toHaveAttribute('href', '/qualify?audience=agency');
    await userEvent.click(cta);
  });
});
