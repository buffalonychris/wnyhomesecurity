import { stripeFetch, type StripeEnv } from "./_stripe";

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

    return new Response(
      JSON.stringify({
        ok: true,
        payment_status: session.payment_status,
        status: session.status,
        amount_total: session.amount_total,
        currency: session.currency,
        metadata: session.metadata,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Stripe error.";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
