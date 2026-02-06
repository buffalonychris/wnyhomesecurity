export type EmailLinks = {
  reviewUrl?: string;
  printUrl: string;
  verifyUrl: string;
  resumeUrl: string;
};

export type EmailRequestPayload = {
  to: string;
  meta: Record<string, unknown>;
  links: EmailLinks;
  context?: {
    name?: string;
    city?: string;
    tier?: string;
  };
};

export type EmailSendResponse = {
  ok: boolean;
  provider: string;
  id?: string;
  error?: string;
};

const postJson = async (path: string, payload: EmailRequestPayload): Promise<EmailSendResponse> => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const data = (await response.json().catch(() => null)) as EmailSendResponse | null;
    if (!response.ok) {
      return {
        ok: false,
        provider: data?.provider || 'unknown',
        error: data?.error || response.statusText,
      };
    }
    return data ?? { ok: false, provider: 'unknown', error: 'Unknown response' };
  } catch (error) {
    return { ok: false, provider: 'unknown', error: error instanceof Error ? error.message : 'Request failed' };
  } finally {
    clearTimeout(timer);
  }
};

export const sendQuoteEmail = (payload: EmailRequestPayload) => postJson('/api/send-quote', payload);

export const sendAgreementEmail = (payload: EmailRequestPayload) => postJson('/api/send-agreement', payload);
