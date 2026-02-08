import { stripeFetch, type StripeEnv } from "./_stripe";

type VerificationPayload = {
  session_id?: string;
};

const fetchSession = async (env: StripeEnv, sessionId: string) => {
  const session = (await stripeFetch(
    env,
    `/checkout/sessions/${sessionId}`,
    "GET"
  )) as {
    payment_status?: string;
    status?: string;
    amount_total?: number;
    currency?: string;
    metadata?: Record<string, string>;
  };

  return session;
};

const buildResponse = (session: Awaited<ReturnType<typeof fetchSession>>) => {
  const paid = session.payment_status === "paid";
  return {
    ok: true,
    paid,
    payment_status: session.payment_status,
    status: session.status,
    amount_total: session.amount_total,
    currency: session.currency,
    metadata: session.metadata,
  };
};

export const onRequestGet: PagesFunction<StripeEnv> = async ({ request, env }) => {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("session_id");

  if (!sessionId) {
    return new Response(JSON.stringify({ error: "Missing session_id." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const session = await fetchSession(env, sessionId);
    return new Response(JSON.stringify(buildResponse(session)), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Stripe error.";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const onRequestPost: PagesFunction<StripeEnv> = async ({ request, env }) => {
  let payload: VerificationPayload;
  try {
    payload = (await request.json()) as VerificationPayload;
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid JSON payload." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!payload.session_id) {
    return new Response(JSON.stringify({ error: "Missing session_id." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const session = await fetchSession(env, payload.session_id);
    return new Response(JSON.stringify(buildResponse(session)), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Stripe error.";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
