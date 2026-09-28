import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { sendLeadSignal } from '../lib/hubspotLeadSignal';
import CanonicalEstimateRequestForm from './CanonicalEstimateRequestForm';

vi.mock('../lib/hubspotLeadSignal', () => ({
  sendLeadSignal: vi.fn(),
}));

const mockedSendLeadSignal = vi.mocked(sendLeadSignal);

const onsiteRequiredFields = [
  { label: 'First Name', value: 'Ada', message: 'Please enter your first name.' },
  { label: 'Last Name', value: 'Lovelace', message: 'Please enter your last name.' },
  { label: 'Phone', value: '716-555-0100', message: 'Please enter your phone number.' },
  { label: 'Email address', value: 'ada@example.com', message: 'Please enter your email address.' },
  { label: 'Street address', value: '123 Main Street', message: 'Please enter your service address.' },
] as const;

const renderContactIntake = () => render(
  <CanonicalEstimateRequestForm
    sourceFamily="test"
    source="test_estimate"
    landingRoute="/contact"
    enableIntakeSplit
    requirePathSelection
    compactEstimate
  />,
);

const selectPath = async (user: ReturnType<typeof userEvent.setup>, name: 'Request a Call' | 'Request On-Site Estimate') => {
  await user.click(screen.getByRole('button', { name: new RegExp(`^${name}`) }));
};

const fillOnsiteRequiredFields = async (user: ReturnType<typeof userEvent.setup>, omittedLabels: string[] = []) => {
  void user;
  for (const field of onsiteRequiredFields) {
    if (!omittedLabels.includes(field.label)) {
      fireEvent.change(screen.getByLabelText(field.label), { target: { value: field.value } });
    }
  }
};

const allowContact = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByLabelText('Text message'));
  await user.click(screen.getByLabelText(/^Yes — WNY Home Security may contact me/));
};

describe('CanonicalEstimateRequestForm contact intake', () => {
  beforeEach(() => {
    mockedSendLeadSignal.mockReset();
    mockedSendLeadSignal.mockResolvedValue({ requestId: 'test-request-id' });
  });

  it('renders the approved intake-choice and callback copy exactly', async () => {
    const user = userEvent.setup();
    renderContactIntake();

    expect(screen.getByText('Choose what works best for you. We’ll take it from there — nothing gets scheduled until we confirm it with you.')).toBeInTheDocument();
    expect(screen.getByText('Just give us your name and number. We’ll call you back and take it from there.')).toBeInTheDocument();
    expect(screen.getByText('Tell us where the property is and anything you’d like us to know. We’ll review everything with you before anything is scheduled.')).toBeInTheDocument();

    await selectPath(user, 'Request a Call');

    expect(screen.getByText('Your number is not for sale. Ever. No spam, no robocall campaigns, no marketing. If you ask us to contact you about your request, that’s exactly what we use it for.')).toBeInTheDocument();
    expect(screen.getByLabelText('Referred by (optional — good people deserve credit for good referrals.)')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Call Me Back' })).toBeInTheDocument();
    expect(screen.getByRole('group', { name: 'How should we reach you?' })).toBeInTheDocument();
    expect(screen.getByText('Choose any that work for you. We’ll only use them for your request, scheduling, reminders, arrival updates, and service follow-up.')).toBeInTheDocument();
    expect(screen.getByRole('group', { name: 'Okay for us to contact you?' })).toBeInTheDocument();
    expect(screen.getByLabelText('Yes — WNY Home Security may contact me using the methods I selected about this request, scheduling, reminders, arrival updates, and service follow-up.')).toBeInTheDocument();
    expect(screen.queryByText('We do not sell your information or use this permission for unrelated marketing.')).not.toBeInTheDocument();
    expect(screen.getByText('You may revoke permission at any time by contacting us and telling us which method you want removed.')).toBeInTheDocument();
  });

  it('requires callback Name and blocks submission when it is blank', async () => {
    const user = userEvent.setup();
    renderContactIntake();
    await selectPath(user, 'Request a Call');
    fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '716-555-0100' } });

    await user.click(screen.getByRole('button', { name: 'Call Me Back' }));

    expect(screen.getByLabelText('Name')).toBeRequired();
    expect(screen.getByText('Please enter your name and phone number so we can call you back.')).toBeInTheDocument();
    expect(mockedSendLeadSignal).not.toHaveBeenCalled();
  });

  it('requires callback Phone and blocks submission when it is blank', async () => {
    const user = userEvent.setup();
    renderContactIntake();
    await selectPath(user, 'Request a Call');
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Ada' } });

    await user.click(screen.getByRole('button', { name: 'Call Me Back' }));

    expect(screen.getByLabelText('Phone')).toBeRequired();
    expect(screen.getByText('Please enter your name and phone number so we can call you back.')).toBeInTheDocument();
    expect(mockedSendLeadSignal).not.toHaveBeenCalled();
  });

  it('accepts a first-name-only callback with optional Email and reaches the callback event path', async () => {
    const user = userEvent.setup();
    renderContactIntake();
    await selectPath(user, 'Request a Call');
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Ada' } });
    fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '716-555-0100' } });
    await allowContact(user);

    expect(screen.getByLabelText('Email (optional)')).not.toBeRequired();
    await user.click(screen.getByRole('button', { name: 'Call Me Back' }));

    expect(mockedSendLeadSignal).toHaveBeenCalledTimes(1);
    expect(mockedSendLeadSignal).toHaveBeenCalledWith(expect.objectContaining({
      event: 'callback_requested',
      contact: expect.objectContaining({
        fullName: 'Ada',
        firstName: 'Ada',
        lastName: '',
        phone: '716-555-0100',
        email: '',
      }),
    }));
  });

  it('renders the approved onsite section headings', async () => {
    const user = userEvent.setup();
    renderContactIntake();
    await selectPath(user, 'Request On-Site Estimate');

    expect(screen.getByRole('group', { name: 'First, tell us about you' })).toBeInTheDocument();
    expect(screen.getByRole('group', { name: 'About the property' })).toBeInTheDocument();
    expect(screen.getByRole('group', { name: 'When works best?' })).toBeInTheDocument();
  });

  it.each(onsiteRequiredFields)('reports only a missing $label, marks it invalid, focuses it, and blocks submission', async ({ label, message }) => {
    const user = userEvent.setup();
    renderContactIntake();
    await selectPath(user, 'Request On-Site Estimate');
    await fillOnsiteRequiredFields(user, [label]);
    const field = screen.getByLabelText(label);

    await user.click(screen.getByRole('button', { name: 'Request My On-Site Estimate' }));

    expect(screen.getAllByText(message)).toHaveLength(2);
    expect(field).toBeRequired();
    expect(field).toHaveAttribute('aria-invalid', 'true');
    expect(field).toHaveAttribute('aria-describedby');
    expect(document.activeElement).toBe(field);
    expect(mockedSendLeadSignal).not.toHaveBeenCalled();
  });

  it('reports only actual missing onsite fields in form order and focuses the first one', async () => {
    const user = userEvent.setup();
    renderContactIntake();
    await selectPath(user, 'Request On-Site Estimate');
    await fillOnsiteRequiredFields(user, ['Last Name', 'Phone', 'Street address']);
    const lastName = screen.getByLabelText('Last Name');
    const phone = screen.getByLabelText('Phone');
    const streetAddress = screen.getByLabelText('Street address');

    await user.click(screen.getByRole('button', { name: 'Request My On-Site Estimate' }));

    expect(screen.getByText('Please enter your last name, phone number, and service address.')).toBeInTheDocument();
    expect(screen.queryByText(/first name.*email address/i)).not.toBeInTheDocument();
    expect(lastName).toHaveAttribute('aria-invalid', 'true');
    expect(phone).toHaveAttribute('aria-invalid', 'true');
    expect(streetAddress).toHaveAttribute('aria-invalid', 'true');
    expect(document.activeElement).toBe(lastName);
    expect(mockedSendLeadSignal).not.toHaveBeenCalled();
  });

  it('clears a corrected onsite field invalid state', async () => {
    const user = userEvent.setup();
    renderContactIntake();
    await selectPath(user, 'Request On-Site Estimate');
    await fillOnsiteRequiredFields(user, ['Last Name']);
    const lastName = screen.getByLabelText('Last Name');
    await user.click(screen.getByRole('button', { name: 'Request My On-Site Estimate' }));

    expect(lastName).toHaveAttribute('aria-invalid', 'true');
    fireEvent.change(lastName, { target: { value: 'Lovelace' } });

    expect(lastName).not.toHaveAttribute('aria-invalid');
    expect(lastName).not.toHaveAttribute('aria-describedby');
    expect(within(lastName.closest('label') as HTMLLabelElement).queryByText('Please enter your last name.')).not.toBeInTheDocument();
  });

  it('preserves communication authorization validation after onsite required fields are valid', async () => {
    const user = userEvent.setup();
    renderContactIntake();
    await selectPath(user, 'Request On-Site Estimate');
    await fillOnsiteRequiredFields(user);

    await user.click(screen.getByRole('button', { name: 'Request My On-Site Estimate' }));
    expect(screen.getByText('Please choose at least one contact method we can use for this request.')).toBeInTheDocument();
    expect(mockedSendLeadSignal).not.toHaveBeenCalled();

    await user.click(screen.getByLabelText('Text message'));
    await user.click(screen.getByRole('button', { name: 'Request My On-Site Estimate' }));
    expect(screen.getByText('Please authorize us to contact you about this request.')).toBeInTheDocument();
    expect(mockedSendLeadSignal).not.toHaveBeenCalled();
  });

  it('sends explicit onsite first and last names through the existing estimate event path', async () => {
    const user = userEvent.setup();
    renderContactIntake();
    await selectPath(user, 'Request On-Site Estimate');
    await fillOnsiteRequiredFields(user);
    await allowContact(user);

    await user.click(screen.getByRole('button', { name: 'Request My On-Site Estimate' }));

    expect(mockedSendLeadSignal).toHaveBeenCalledTimes(1);
    expect(mockedSendLeadSignal).toHaveBeenCalledWith(expect.objectContaining({
      event: 'qr_estimate_requested',
      contact: expect.objectContaining({
        firstName: 'Ada',
        lastName: 'Lovelace',
        phone: '716-555-0100',
        email: 'ada@example.com',
        address: expect.objectContaining({ street: '123 Main Street' }),
      }),
    }));
    expect(mockedSendLeadSignal.mock.calls[0][0].contact).not.toHaveProperty('fullName');
  });
});
