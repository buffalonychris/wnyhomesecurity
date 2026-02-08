import type { StripeEnv } from "./_stripe";

type StripeWebhookEnv = StripeEnv & {
  STRIPE_WEBHOOK_SECRET: string;
};

const textEncoder = new TextEncoder();

const toHex = (buffer: ArrayBuffer) =>
  Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

const hmacSha256Hex = async (secret: string, payload: string) => {
  const key = await crypto.subtle.importKey(
    "raw",
    textEncoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    textEncoder.encode(payload)
  );
  return toHex(signature);
};

const constantTimeEqual = (a: string, b: string) => {
  if (a.length !== b.length) {
    return false;
  }
  const aBytes = textEncoder.encode(a);
  const bBytes = textEncoder.encode(b);
  let diff = 0;
  for (let i = 0; i < aBytes.length; i += 1) {
    diff |= aBytes[i] ^ bBytes[i];
  }
  return diff === 0;
};

const parseStripeSignature = (header: string | null) => {
  if (!header) {
    return null;
  }
  const parts = header.split(",");
  let timestamp: string | undefined;
  const signatures: string[] = [];
  parts.forEach((part) => {
    const [key, value] = part.split("=");
    if (key === "t") {
      timestamp = value;
    }
    if (key === "v1" && value) {
      signatures.push(value);
    }
  });
  if (!timestamp || signatures.length === 0) {
    return null;
  }
  return { timestamp, signatures };
};

export const onRequestPost: PagesFunction<StripeWebhookEnv> = async ({
  request,
  env,
}) => {
  if (!env.STRIPE_WEBHOOK_SECRET) {
    return new Response(JSON.stringify({ error: "Missing webhook secret." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const rawBody = await request.text();
  const signatureHeader = request.headers.get("Stripe-Signature");
  const parsed = parseStripeSignature(signatureHeader);
  if (!parsed) {
    return new Response(JSON.stringify({ error: "Invalid signature header." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const signedPayload = `${parsed.timestamp}.${rawBody}`;
  const expectedSignature = await hmacSha256Hex(
    env.STRIPE_WEBHOOK_SECRET,
    signedPayload
  );
  const isValid = parsed.signatures.some((signature) =>
    constantTimeEqual(signature, expectedSignature)
  );

  if (!isValid) {
    return new Response(JSON.stringify({ error: "Signature mismatch." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  let event: any;
  try {
    event = JSON.parse(rawBody);
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid JSON." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (event?.type === "checkout.session.completed") {
    const session = event.data?.object;
    console.log({
      quoteRef: session?.metadata?.quoteRef,
      sessionId: session?.id,
    });
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
