const HUBSPOT_BASE = 'https://api.hubapi.com';

type Method = 'GET' | 'POST' | 'PATCH' | 'PUT';

const getToken = () => process.env.HUBSPOT_PRIVATE_APP_TOKEN;

export const safeHubSpotRequest = async (method: Method, url: string, body?: unknown) => {
  const token = getToken();
  if (!token) {
    return { ok: false, skipped: true, error: 'HUBSPOT_PRIVATE_APP_TOKEN missing' };
  }
  try {
    const response = await fetch(`${HUBSPOT_BASE}${url}`, {
      method,
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      console.error('HubSpot request failed', method, url, data);
      return { ok: false, error: data?.message || 'hubspot_error', data };
    }
    return { ok: true, data };
  } catch (error) {
    console.error('HubSpot request exception', method, url, error);
    return { ok: false, error: 'hubspot_exception' };
  }
};

export const searchContactByEmail = async (email?: string) => {
  if (!email) return { ok: false, skipped: true };
  return safeHubSpotRequest('POST', '/crm/v3/objects/contacts/search', {
    filterGroups: [{ filters: [{ propertyName: 'email', operator: 'EQ', value: email }] }],
    properties: ['email', 'firstname', 'lastname'],
    limit: 1,
  });
};

export const findOrCreateContact = async (payload: { email?: string; firstName?: string; lastName?: string; phone?: string; address?: string; wny_walkthrough_interest?: boolean; wny_last_walkthrough_request_at?: string; wny_preferred_walkthrough_window?: string; }) => {
  const existing = await searchContactByEmail(payload.email);
  const existingId = (existing as any)?.data?.results?.[0]?.id;
  const properties: Record<string, unknown> = {
    email: payload.email,
    firstname: payload.firstName,
    lastname: payload.lastName,
    phone: payload.phone,
    address: payload.address,
    wny_walkthrough_interest: payload.wny_walkthrough_interest,
    wny_last_walkthrough_request_at: payload.wny_last_walkthrough_request_at,
    wny_preferred_walkthrough_window: payload.wny_preferred_walkthrough_window,
  };
  Object.keys(properties).forEach((k) => properties[k] == null && delete properties[k]);
  if (existingId) return safeHubSpotRequest('PATCH', `/crm/v3/objects/contacts/${existingId}`, { properties });
  return safeHubSpotRequest('POST', '/crm/v3/objects/contacts', { properties });
};

export const searchDealByQuoteRef = async (quoteRef?: string) => {
  if (!quoteRef) return { ok: false, skipped: true };
  return safeHubSpotRequest('POST', '/crm/v3/objects/deals/search', {
    filterGroups: [{ filters: [{ propertyName: 'wny_quote_ref', operator: 'EQ', value: quoteRef }] }],
    limit: 1,
  });
};

export const createOrUpdateDeal = async (payload: { dealId?: string; quoteRef?: string; dealname?: string; properties: Record<string, unknown>; contactId?: string; }) => {
  let dealId = payload.dealId;
  if (!dealId && payload.quoteRef) {
    const found = await searchDealByQuoteRef(payload.quoteRef);
    dealId = (found as any)?.data?.results?.[0]?.id;
  }
  const properties = { ...payload.properties };
  if (payload.quoteRef) properties.wny_quote_ref = payload.quoteRef;
  if (dealId) {
    const updated = await safeHubSpotRequest('PATCH', `/crm/v3/objects/deals/${dealId}`, { properties });
    return { ...updated, dealId };
  }
  if (!properties.dealname) properties.dealname = payload.dealname || `WNYHS Lead ${new Date().toISOString()}`;
  const created = await safeHubSpotRequest('POST', '/crm/v3/objects/deals', { properties });
  const createdId = (created as any)?.data?.id;
  if (payload.contactId && createdId) {
    await safeHubSpotRequest('PUT' as Method, `/crm/v3/objects/deals/${createdId}/associations/contacts/${payload.contactId}/deal_to_contact` as string);
  }
  return { ...created, dealId: createdId };
};

export const updateDealByQuoteRefOrDealId = async (payload: { dealId?: string; quoteRef?: string; properties: Record<string, unknown> }) =>
  createOrUpdateDeal({ ...payload, properties: payload.properties });
