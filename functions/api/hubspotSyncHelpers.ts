export type ContactFilter = { propertyName: 'email' | 'phone'; operator: 'EQ'; value: string };

const CLOSED_DEAL_STAGES = new Set(['closedwon', 'closedlost']);

export const normalizeEmailForHubSpotSearch = (value: unknown): string | undefined => {
  if (typeof value !== 'string') return undefined;
  const normalized = value.trim().toLowerCase();
  return normalized.length > 0 ? normalized : undefined;
};

export const normalizePhoneForHubSpotSearch = (value: unknown): string | undefined => {
  if (typeof value !== 'string') return undefined;
  const normalized = value.replace(/\D+/g, '');
  return normalized.length > 0 ? normalized : undefined;
};

export const chooseHubSpotContactSearchFilters = (email: unknown, phone: unknown): ContactFilter[] => {
  const normalizedEmail = normalizeEmailForHubSpotSearch(email);
  if (normalizedEmail) return [{ propertyName: 'email', operator: 'EQ', value: normalizedEmail }];
  const normalizedPhone = normalizePhoneForHubSpotSearch(phone);
  if (normalizedPhone) return [{ propertyName: 'phone', operator: 'EQ', value: normalizedPhone }];
  return [];
};

export const isActiveEstimateDeal = (deal: any) => {
  const stage = String(deal?.properties?.dealstage || '').toLowerCase();
  const path = String(deal?.properties?.wny_deal_path || '');
  if (!path.includes('onsite_confirmation_first')) return false;
  return !CLOSED_DEAL_STAGES.has(stage);
};

export const buildEstimateDealName = ({ isQr, customerName, requestId }: { isQr: boolean; customerName: string; requestId: string }) =>
  `${isQr ? 'WNYHS QR Estimate Request' : 'WNYHS Estimate Request'} - ${customerName || 'Lead'} - ${requestId}`;

export const getDealStageForCreate = (stageId: string | undefined) => {
  const clean = stageId?.trim();
  return clean ? clean : undefined;
};
