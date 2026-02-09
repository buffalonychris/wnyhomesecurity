import { getHomeSecurityPackage, type HomeSecurityTier } from '../data/homeSecurity.packages';

export type NewSiteQuoteDraft = {
  selectedTier: HomeSecurityTier;
  quoteId: string;
  createdAt: string;
};

export type NewSiteAgreementDraft = {
  selectedTier: HomeSecurityTier;
  agreementId: string;
  createdAt: string;
  acceptedName: string;
  acceptedDate: string;
  accepted: boolean;
};

const quoteStorageKey = 'newsite_quote_v1';
const agreementStorageKey = 'newsite_agreement_v1';

const formatDateStamp = (value = new Date()) => {
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, '0');
  const day = String(value.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
};

const createHumanId = (prefix: string, date = new Date()) => {
  const sequence = Math.floor(Math.random() * 900) + 100;
  return `${prefix}-${formatDateStamp(date)}-${String(sequence).padStart(3, '0')}`;
};

const readFromStorage = <T,>(key: string): T | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const raw = window.localStorage.getItem(key);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
};

const writeToStorage = <T,>(key: string, value: T) => {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getQuoteDraft = () => {
  const stored = readFromStorage<NewSiteQuoteDraft>(quoteStorageKey);
  if (stored && getHomeSecurityPackage(stored.selectedTier)) {
    return stored;
  }
  return null;
};

export const saveQuoteDraft = (draft: NewSiteQuoteDraft) => {
  writeToStorage(quoteStorageKey, draft);
};

export const ensureQuoteDraft = (selectedTier: HomeSecurityTier) => {
  const existing = getQuoteDraft();
  if (existing && existing.selectedTier === selectedTier) {
    return existing;
  }
  const createdAt = new Date().toISOString();
  const next = {
    selectedTier,
    quoteId: createHumanId('WNYHS-Q'),
    createdAt,
  } satisfies NewSiteQuoteDraft;
  saveQuoteDraft(next);
  return next;
};

export const getAgreementDraft = () => {
  const stored = readFromStorage<NewSiteAgreementDraft>(agreementStorageKey);
  if (stored && getHomeSecurityPackage(stored.selectedTier)) {
    return stored;
  }
  return null;
};

export const saveAgreementDraft = (draft: NewSiteAgreementDraft) => {
  writeToStorage(agreementStorageKey, draft);
};

export const ensureAgreementDraft = (selectedTier: HomeSecurityTier) => {
  const existing = getAgreementDraft();
  if (existing && existing.selectedTier === selectedTier) {
    return existing;
  }
  const createdAt = new Date().toISOString();
  const next = {
    selectedTier,
    agreementId: createHumanId('WNYHS-A'),
    createdAt,
    acceptedName: '',
    acceptedDate: '',
    accepted: false,
  } satisfies NewSiteAgreementDraft;
  saveAgreementDraft(next);
  return next;
};

export const formatCurrency = (amountCents: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amountCents / 100);
