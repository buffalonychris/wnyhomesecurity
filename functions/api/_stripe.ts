export type StripeEnv = {
  STRIPE_SECRET_KEY: string;
};

type StripeMethod = "GET" | "POST";

type StripeErrorPayload = {
  error?: {
    message?: string;
    type?: string;
  };
};

export const stripeFetch = async (
  env: StripeEnv,
  path: string,
  method: StripeMethod,
  body?: Record<string, string | number>
) => {
  if (!env.STRIPE_SECRET_KEY) {
    throw new Error("Missing STRIPE_SECRET_KEY environment variable.");
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const init: RequestInit = { method, headers };
  if (body && method !== "GET") {
    const params = new URLSearchParams();
    Object.entries(body).forEach(([key, value]) => {
      params.append(key, String(value));
    });
    init.body = params.toString();
  }

  const response = await fetch(`https://api.stripe.com/v1${path}`, init);
  const text = await response.text();
  if (!response.ok) {
    let message = text;
    try {
      const parsed = JSON.parse(text) as StripeErrorPayload;
      message = parsed?.error?.message || message;
    } catch (error) {
      // ignore JSON parse errors
    }
    throw new Error(`Stripe API error (${response.status}): ${message}`);
  }

  if (!text) {
    return {};
  }

  return JSON.parse(text) as unknown;
};
