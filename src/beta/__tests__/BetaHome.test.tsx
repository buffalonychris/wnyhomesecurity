import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import BetaHome from '../BetaHome';

const renderPage = () => render(<MemoryRouter><BetaHome /></MemoryRouter>);

describe('BetaHome', () => {
  beforeEach(() => window.localStorage.clear());
  it('renders HOME-001 through HOME-010 in the approved order', () => {
    const { container } = renderPage();
    expect(Array.from(container.querySelectorAll('[id^="home-"]')).map((node) => node.id)).toEqual(['home-001','home-002','home-003','home-004','home-005','home-006','home-007','home-008','home-009','home-010']);
  });
  it('uses the approved hero message and assessment destination', () => {
    renderPage();
    expect(screen.getByRole('heading', { level: 1, name: 'Your Property. One Designed System.' })).toBeInTheDocument();
    screen.getAllByRole('link', { name: /Request (a Property|an) Assessment/i }).forEach((link) => expect(link).toHaveAttribute('href', '/discovery?vertical=home-security'));
  });
  it('renders the six pillars in order without package-first terminology', () => {
    const { container } = renderPage();
    const section = container.querySelector('#home-003') as HTMLElement;
    expect(within(section).getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)).toEqual(['Home Security','Aging in Place','Home Safety','Home Automation','Home Lighting','Property Management']);
    expect(container.textContent).not.toMatch(/\b(Bronze|Silver|Gold)\b/);
  });
  it('provides an accessible light and dark theme control', () => {
    const { container } = renderPage();
    const page = container.querySelector('.beta-home');
    const toggle = screen.getByRole('button', { name: 'Switch to dark theme' });
    expect(page).toHaveAttribute('data-theme', 'light');
    fireEvent.click(toggle);
    expect(page).toHaveAttribute('data-theme', 'dark');
    expect(screen.getByRole('button', { name: 'Switch to light theme' })).toBeInTheDocument();
  });
});
