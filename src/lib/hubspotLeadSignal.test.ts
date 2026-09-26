import { afterEach, describe, expect, it, vi } from 'vitest';
import { sendLeadSignal } from './hubspotLeadSignal';

describe('sendLeadSignal failure handling', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('rejects required persistence failure so callers cannot show normal success', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify({
      ok: false,
      requestId: 'lead_test_failure',
      errorCode: 'LEAD_PERSISTENCE_FAILED',
      userMessage: 'We couldn’t safely save your request. Please call or text us at 716-201-0364.',
    }), { status: 503, headers: { 'Content-Type': 'application/json' } })));

    await expect(sendLeadSignal({ event: 'qr_estimate_requested' })).rejects.toMatchObject({
      cause: expect.objectContaining({ requestId: 'lead_test_failure', errorCode: 'LEAD_PERSISTENCE_FAILED' }),
    });
  });
});
