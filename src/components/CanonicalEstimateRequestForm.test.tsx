import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { sendLeadSignal } from '../lib/hubspotLeadSignal';
import CanonicalEstimateRequestForm from './CanonicalEstimateRequestForm';

vi.mock('../lib/hubspotLeadSignal', () => ({
  sendLeadSignal: vi.fn(),
}));

const mockedSendLeadSignal = vi.mocked(sendLeadSignal);

const requiredFields = [
  { label: 'Name', value: 'Ada Lovelace', message: 'Please enter your name.' },
  { label: 'Phone', value: '716-555-0100', message: 'Please enter your phone number.' },
  { label: 'Email address', value: 'ada@example.com', message: 'Please enter your email address.' },
  { label: 'Street address', value: '123 Main Street', message: 'Please enter your service address.' },
] as const;

const renderCompactEstimate = () => render(
  <CanonicalEstimateRequestForm
    sourceFamily="test"
    source="test_estimate"
    landingRoute="/test-estimate"
    compactEstimate
  />,
);

const fillRequiredFields = async (user: ReturnType<typeof userEvent.setup>, omittedLabels: string[] = []) => {
  for (const field of requiredFields) {
    if (!omittedLabels.includes(field.label)) {
      await user.type(screen.getByLabelText(field.label), field.value);
    }
  }
};

const submit = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole('button', { name: 'Request My On-Site Estimate' }));
};

describe('CanonicalEstimateRequestForm compact estimate validation', () => {
  beforeEach(() => {
    mockedSendLeadSignal.mockReset();
    mockedSendLeadSignal.mockResolvedValue({ requestId: 'test-request-id' });
  });

  it.each(requiredFields)('reports only a missing $label, marks it invalid, focuses it, and blocks submission', async ({ label, message }) => {
    const user = userEvent.setup();
    renderCompactEstimate();
    await fillRequiredFields(user, [label]);
    const field = screen.getByLabelText(label);

    await submit(user);

    expect(screen.getAllByText(message)).toHaveLength(2);
    expect(field).toBeRequired();
    expect(field).toHaveAttribute('aria-invalid', 'true');
    expect(field).toHaveAttribute('aria-describedby');
    expect(document.activeElement).toBe(field);
    expect(mockedSendLeadSignal).not.toHaveBeenCalled();
  });

  it('reports only the actual missing fields in form order and focuses the first one', async () => {
    const user = userEvent.setup();
    renderCompactEstimate();
    await fillRequiredFields(user, ['Phone', 'Street address']);
    const phone = screen.getByLabelText('Phone');
    const streetAddress = screen.getByLabelText('Street address');

    await submit(user);

    expect(screen.getByText('Please enter your phone number and service address.')).toBeInTheDocument();
    expect(screen.queryByText(/name.*email address/i)).not.toBeInTheDocument();
    expect(phone).toHaveAttribute('aria-invalid', 'true');
    expect(streetAddress).toHaveAttribute('aria-invalid', 'true');
    expect(document.activeElement).toBe(phone);
    expect(mockedSendLeadSignal).not.toHaveBeenCalled();
  });

  it('clears a field-level invalid state when that field is corrected', async () => {
    const user = userEvent.setup();
    renderCompactEstimate();
    await fillRequiredFields(user, ['Email address']);
    const email = screen.getByLabelText('Email address');
    await submit(user);

    expect(email).toHaveAttribute('aria-invalid', 'true');
    await user.type(email, 'ada@example.com');

    expect(email).not.toHaveAttribute('aria-invalid');
    expect(email).not.toHaveAttribute('aria-describedby');
    expect(within(email.closest('label') as HTMLLabelElement).queryByText('Please enter your email address.')).not.toBeInTheDocument();
  });

  it('preserves communication-permission validation after required fields are valid', async () => {
    const user = userEvent.setup();
    renderCompactEstimate();
    await fillRequiredFields(user);

    await submit(user);
    expect(screen.getByText('Please choose at least one contact method we can use for this request.')).toBeInTheDocument();
    expect(mockedSendLeadSignal).not.toHaveBeenCalled();

    await user.click(screen.getByLabelText('Text message'));
    await submit(user);
    expect(screen.getByText('Please authorize us to contact you about this request.')).toBeInTheDocument();
    expect(mockedSendLeadSignal).not.toHaveBeenCalled();
  });

  it('reaches the existing submit path when required fields and communication permission are valid', async () => {
    const user = userEvent.setup();
    renderCompactEstimate();
    await fillRequiredFields(user);
    await user.click(screen.getByLabelText('Text message'));
    await user.click(screen.getByLabelText(/authorize WNY Home Security/i));

    await submit(user);

    expect(mockedSendLeadSignal).toHaveBeenCalledTimes(1);
    expect(mockedSendLeadSignal).toHaveBeenCalledWith(expect.objectContaining({
      event: 'qr_estimate_requested',
      contact: expect.objectContaining({
        fullName: 'Ada Lovelace',
        phone: '716-555-0100',
        email: 'ada@example.com',
        address: expect.objectContaining({ street: '123 Main Street' }),
      }),
    }));
  });
});
