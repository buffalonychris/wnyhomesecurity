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
    const token = env.HUBSPOT_PRIVATE_APP_TOKEN;
    if (token && session?.metadata?.quoteRef) {
      await fetch('https://api.hubapi.com/crm/v3/objects/deals/search', { method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ filterGroups: [{ filters: [{ propertyName: 'wny_quote_ref', operator: 'EQ', value: session.metadata.quoteRef }] }], limit: 1 }) })
        .then((r) => r.json())
        .then(async (d) => { const id = d?.results?.[0]?.id; if (id) { await fetch(`https://api.hubapi.com/crm/v3/objects/deals/${id}`, { method: 'PATCH', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ properties: { dealstage: 'Deposit Paid', wny_deposit_status: 'paid', wny_payment_verified_server_side: true } }) }); } })
        .catch(() => {});
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
