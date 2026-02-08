import { stripeFetch, type StripeEnv } from "./_stripe";
import {
  HOME_SECURITY_TOTAL_CENTS,
  getHomeSecurityTierLabel,
  isHomeSecurityTier,
} from "./homeSecurityPricing";

type CreateCheckoutBody = {
  amountCents: number;
  currency?: string;
  quoteRef: string;
  successUrl: string;
  cancelUrl: string;
  customerEmail?: string;
  description?: string;
};

type HomeSecurityDepositBody = {
  tier: string;
};

const buildDescription = (description?: string, quoteRef?: string) => {
  const parts = [description, quoteRef ? `Quote ${quoteRef}` : undefined].filter(
    Boolean
  ) as string[];
  return parts.join(" - ") || undefined;
};

export const onRequestPost: PagesFunction<StripeEnv> = async ({ request, env }) => {
  let payload: CreateCheckoutBody | HomeSecurityDepositBody;
  try {
    payload = (await request.json()) as CreateCheckoutBody | HomeSecurityDepositBody;
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid JSON payload." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const tier = (payload as HomeSecurityDepositBody).tier;
  if (tier !== undefined) {
    if (!isHomeSecurityTier(tier)) {
      return new Response(JSON.stringify({ error: "Invalid tier." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const totalCents = HOME_SECURITY_TOTAL_CENTS[tier];
    const depositCents = Math.round(totalCents * 0.5);
    const origin = new URL(request.url).origin;
    const successUrl = `${origin}/home-security/payment/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${origin}/home-security/payment/cancel`;
    const tierLabel = getHomeSecurityTierLabel(tier);

    const stripeBody: Record<string, string | number> = {
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      "line_items[0][price_data][currency]": "usd",
      "line_items[0][price_data][product_data][name]": `WNY Home Security — ${tierLabel} Deposit (50%)`,
      "line_items[0][price_data][product_data][description]": `50% deposit toward the ${tierLabel} tier.`,
      "line_items[0][price_data][unit_amount]": depositCents,
      "line_items[0][quantity]": 1,
      "metadata[vertical]": "home-security",
      "metadata[tier]": tier,
      "metadata[payment_type]": "deposit",
      "metadata[deposit_percent]": "50",
      "metadata[total_cents]": totalCents,
      "metadata[deposit_cents]": depositCents,
    };

    try {
      const session = (await stripeFetch(
        env,
        "/checkout/sessions",
        "POST",
        stripeBody
      )) as { id: string; url: string };

      return new Response(JSON.stringify({ id: session.id, url: session.url }), {
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
  }

  const {
    amountCents,
    currency = "usd",
    quoteRef,
    successUrl,
    cancelUrl,
    customerEmail,
    description,
  } = payload;

  if (!amountCents || !quoteRef || !successUrl || !cancelUrl) {
    return new Response(JSON.stringify({ error: "Missing required fields." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const stripeBody: Record<string, string | number> = {
    mode: "payment",
    success_url: successUrl,
    cancel_url: cancelUrl,
    "line_items[0][price_data][currency]": currency,
    "line_items[0][price_data][product_data][name]":
      "WNY Home Security — Installation Deposit",
    "line_items[0][price_data][unit_amount]": amountCents,
    "line_items[0][quantity]": 1,
    "metadata[quoteRef]": quoteRef,
  };

  const computedDescription = buildDescription(description, quoteRef);
  if (computedDescription) {
    stripeBody["line_items[0][price_data][product_data][description]"] =
      computedDescription;
  }

  if (customerEmail) {
    stripeBody.customer_email = customerEmail;
  }

  try {
    const session = (await stripeFetch(
      env,
      "/checkout/sessions",
      "POST",
      stripeBody
    )) as { id: string; url: string };

    return new Response(JSON.stringify({ id: session.id, url: session.url }), {
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
