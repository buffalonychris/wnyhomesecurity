import { siteConfig } from '../config/site';
import { buildAgreementReference, computeAgreementHash } from './agreementHash';
import { QuoteContext } from './agreement';
import { shortenMiddle } from './displayUtils';
import { computeQuoteHash } from './quoteHash';
import { buildQuoteReference } from './quoteUtils';
import { buildResumeUrl, buildQuoteFromResumePayload, createResumeToken, parseResumeToken } from './resumeToken';
import { AcceptanceRecord, RetailFlowState } from './retailFlow';
import { CertificateRecord, LIFECYCLE_STAGES } from './sicar';

export type CanonicalDocumentType = 'QUOTE' | 'AGREEMENT' | 'SICAR';

export type DocAuthorityMeta = {
  docType: CanonicalDocumentType;
  version: string;
  reference: string;
  issuedAtISO: string;
  hashFull: string;
  hashShort: string;
  supersedesHashFull?: string;
  supersedesHashShort?: string;
  quoteBinding?: { ref: string; hashFull: string; hashShort: string };
  resumeUrl: string;
  resumeUrlDisplay: string;
  verificationUrl: string;
};

export type DocumentTypeConfig = {
  docType: CanonicalDocumentType;
  docVersion: string;
  hashAlgorithm: 'SHA-256';
  supersedesFieldKey?: 'priorQuoteHash' | 'supersedesAgreementHash';
  defaultResumeStep: 'agreement' | 'payment' | 'schedule' | 'view-only';
  printRoute: '/quotePrint' | '/agreementPrint' | '/certificate' | '/certificatePrint';
};

export const DOCUMENT_TYPES: Record<CanonicalDocumentType, DocumentTypeConfig> = {
  QUOTE: {
    docType: 'QUOTE',
    docVersion: siteConfig.quoteDocVersion,
    hashAlgorithm: 'SHA-256',
    supersedesFieldKey: 'priorQuoteHash',
    defaultResumeStep: 'agreement',
    printRoute: '/quotePrint',
  },
  AGREEMENT: {
    docType: 'AGREEMENT',
    docVersion: siteConfig.agreementDocVersion,
    hashAlgorithm: 'SHA-256',
    supersedesFieldKey: 'supersedesAgreementHash',
    defaultResumeStep: 'payment',
    printRoute: '/agreementPrint',
  },
  SICAR: {
    docType: 'SICAR',
    docVersion: 'v1.0',
    hashAlgorithm: 'SHA-256',
    defaultResumeStep: 'view-only',
    printRoute: '/certificate',
  },
};

const base64UrlEncode = (input: string) =>
  btoa(input)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

const base64UrlDecode = (input: string) => {
  const normalized = input.replace(/-/g, '+').replace(/_/g, '/');
  const padding = normalized.length % 4 === 0 ? '' : '='.repeat(4 - (normalized.length % 4));
  return atob(normalized + padding);
};

export type AgreementTokenPayload = {
  quote: QuoteContext;
  acceptance?: AcceptanceRecord | null;
  hash?: string;
};

export type SicarTokenPayload = {
  certificate: CertificateRecord;
  hash?: string;
};

const normalizeValue = (value: unknown): unknown => {
  if (Array.isArray(value)) {
    const normalized = value.map((item) => normalizeValue(item));
    const allStrings = normalized.every((item) => typeof item === 'string');
    if (allStrings) {
      return (normalized as string[]).slice().sort();
    }
    return normalized;
  }

  if (value && typeof value === 'object' && value.constructor === Object) {
    const entries = Object.entries(value as Record<string, unknown>)
      .map(([key, val]) => [key, normalizeValue(val)] as const)
      .sort(([a], [b]) => a.localeCompare(b));

    return entries.reduce<Record<string, unknown>>((acc, [key, val]) => {
      acc[key] = val;
      return acc;
    }, {});
  }

  return value;
};

const toHex = (buffer: ArrayBuffer) => {
  const bytes = new Uint8Array(buffer);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

export const buildAgreementToken = (quote: QuoteContext, acceptance?: AcceptanceRecord | null, hash?: string) => {
  const payload: AgreementTokenPayload = {
    quote,
    acceptance: acceptance ?? undefined,
    hash,
  };
  return base64UrlEncode(JSON.stringify(payload));
};

export const parseAgreementToken = (token?: string | null): AgreementTokenPayload | null => {
  if (!token) return null;
  try {
    return JSON.parse(base64UrlDecode(token)) as AgreementTokenPayload;
  } catch (error) {
    console.error('Failed to parse agreement token', error);
    return null;
  }
};

export const buildSicarToken = (certificate: CertificateRecord, hash?: string) => {
  const payload: SicarTokenPayload = { certificate, hash };
  return base64UrlEncode(JSON.stringify(payload));
};

export const parseSicarToken = (token?: string | null): SicarTokenPayload | null => {
  if (!token) return null;
  try {
    return JSON.parse(base64UrlDecode(token)) as SicarTokenPayload;
  } catch (error) {
    console.error('Failed to parse sicar token', error);
    return null;
  }
};

export const computeSicarHash = async (sicarState: CertificateRecord): Promise<string> => {
  const devices = sicarState.devices
    .map((device) => ({
      systemName: device.systemName,
      manufacturer: device.manufacturer,
      make: device.make,
      model: device.model,
      partNumber: device.partNumber,
      serialNumber: device.serialNumber || '',
      plannedLocation: device.plannedLocation,
      installedLocation: device.installedLocation,
      purpose: device.purpose,
      photos: device.photos.length,
      health: {
        power: device.health.power,
        connectivity: device.health.connectivity,
        battery: device.health.battery,
        functional: device.health.functional,
        lastCheckedAt: device.health.lastCheckedAt || '',
        manualOverride: Boolean(device.health.manualOverride),
        overrideJustification: device.health.overrideJustification || '',
      },
      installerAttestation: device.installerAttestation || '',
    }))
    .sort((a, b) => a.systemName.localeCompare(b.systemName) || a.model.localeCompare(b.model));

  const stageHistory = sicarState.auditLog
    .filter((entry) => entry.action.toLowerCase().includes('lifecycle'))
    .map((entry) => ({ actor: entry.actor, action: entry.action, at: entry.timestamp }));

  const payload = {
    docType: DOCUMENT_TYPES.SICAR.docType,
    version: DOCUMENT_TYPES.SICAR.docVersion,
    lifecycleStage: sicarState.lifecycleStage,
    immutable: sicarState.immutable,
    stages: stageHistory,
    bindings: {
      quoteId: sicarState.quoteId || '',
      agreementId: sicarState.agreementId || '',
      installationJobId: sicarState.installationJobId || '',
    },
    installers: sicarState.installers.slice().sort(),
    devices,
    acceptance: sicarState.acceptance
      ? {
          customerName: sicarState.acceptance.customerName,
          signature: sicarState.acceptance.signature,
          signedAt: sicarState.acceptance.signedAt,
          representativeTitle: sicarState.acceptance.representativeTitle || '',
        }
      : null,
    lockedAt: sicarState.acceptance?.signedAt || '',
    lifecycleOrder: LIFECYCLE_STAGES,
  };

  const normalized = normalizeValue(payload);
  const encoder = new TextEncoder();
  const data = encoder.encode(JSON.stringify(normalized));
  const digest = await crypto.subtle.digest(DOCUMENT_TYPES.SICAR.hashAlgorithm, data);
  return toHex(digest);
};

export const buildQuoteAuthorityMeta = async (flow: RetailFlowState, token?: string): Promise<DocAuthorityMeta | null> => {
  const quote = flow.quote;
  if (!quote) return null;
  const usedToken = token || createResumeToken(quote);
  const reference = buildQuoteReference(quote);
  const hashFull = quote.quoteHash || (await computeQuoteHash(quote));
  const hashShort = shortenMiddle(hashFull);
  const supersedesHashFull = quote.priorQuoteHash;
  const resumeUrl = buildResumeUrl(quote, DOCUMENT_TYPES.QUOTE.defaultResumeStep as 'agreement' | 'payment' | 'schedule');
  const verificationUrl = `${window.location.origin}/verify?doc=QUOTE&t=${encodeURIComponent(usedToken)}`;
  return {
    docType: 'QUOTE',
    version: DOCUMENT_TYPES.QUOTE.docVersion,
    reference,
    issuedAtISO: quote.issuedAtISO || quote.issuedAt || quote.generatedAt || new Date().toISOString(),
    hashFull,
    hashShort,
    supersedesHashFull,
    supersedesHashShort: supersedesHashFull ? shortenMiddle(supersedesHashFull) : undefined,
    resumeUrl,
    resumeUrlDisplay: shortenMiddle(resumeUrl),
    verificationUrl,
  };
};

export const buildAgreementAuthorityMeta = async (
  flow: RetailFlowState,
  token?: string,
): Promise<DocAuthorityMeta | null> => {
  const quote = flow.quote;
  const acceptance = flow.agreementAcceptance;
  if (!quote) return null;
  const agreementHash = acceptance?.agreementHash || (await computeAgreementHash(quote, acceptance ?? undefined));
  const usedToken = token || buildAgreementToken(quote, acceptance, agreementHash);
  const reference = buildAgreementReference(quote);
  const hashShort = shortenMiddle(agreementHash);
  const resumeUrl = buildResumeUrl(
    quote,
    DOCUMENT_TYPES.AGREEMENT.defaultResumeStep as 'agreement' | 'payment' | 'schedule',
  );
  const verificationUrl = `${window.location.origin}/verify?doc=AGREEMENT&t=${encodeURIComponent(usedToken)}`;
  return {
    docType: 'AGREEMENT',
    version: DOCUMENT_TYPES.AGREEMENT.docVersion,
    reference,
    issuedAtISO:
      acceptance?.acceptedAt ||
      acceptance?.acceptanceDate ||
      quote.issuedAtISO ||
      quote.issuedAt ||
      quote.generatedAt ||
      new Date().toISOString(),
    hashFull: agreementHash,
    hashShort,
    supersedesHashFull: acceptance?.supersedesAgreementHash,
    supersedesHashShort: acceptance?.supersedesAgreementHash
      ? shortenMiddle(acceptance.supersedesAgreementHash)
      : undefined,
    quoteBinding: {
      ref: buildQuoteReference(quote),
      hashFull: quote.quoteHash || '',
      hashShort: shortenMiddle(quote.quoteHash),
    },
    resumeUrl,
    resumeUrlDisplay: shortenMiddle(resumeUrl),
    verificationUrl,
  };
};

export const buildSicarAuthorityMeta = async (
  sicarState: CertificateRecord,
  token?: string,
  hashOverride?: string,
): Promise<DocAuthorityMeta> => {
  const reference = sicarState.quoteId || sicarState.agreementId || 'SICAR';
  const hashFull = hashOverride || (await computeSicarHash(sicarState));
  const hashShort = hashFull ? shortenMiddle(hashFull) : 'pending';
  const usedToken = token || buildSicarToken(sicarState, hashFull);
  const verificationUrl = `${window.location.origin}/verify?doc=SICAR&t=${encodeURIComponent(usedToken)}`;
  return {
    docType: 'SICAR',
    version: DOCUMENT_TYPES.SICAR.docVersion,
    reference,
    issuedAtISO: (sicarState.acceptance?.signedAt as string) || sicarState.auditLog[0]?.timestamp || new Date().toISOString(),
    hashFull,
    hashShort,
    quoteBinding: sicarState.quoteId
      ? { ref: sicarState.quoteId, hashFull: '', hashShort: shortenMiddle(sicarState.quoteId) }
      : undefined,
    resumeUrl: `${window.location.origin}${DOCUMENT_TYPES.SICAR.printRoute}?t=${encodeURIComponent(usedToken)}`,
    resumeUrlDisplay: shortenMiddle(`${window.location.origin}${DOCUMENT_TYPES.SICAR.printRoute}?t=${encodeURIComponent(usedToken)}`),
    verificationUrl,
  };
};

export const parseDocumentToken = (docType: CanonicalDocumentType, token?: string | null) => {
  if (docType === 'QUOTE') return parseResumeToken(token ?? undefined);
  if (docType === 'AGREEMENT') return parseAgreementToken(token ?? undefined);
  return parseSicarToken(token ?? undefined);
};

export const restoreQuoteFromToken = (token?: string | null): QuoteContext | null => {
  const payload = parseResumeToken(token ?? undefined);
  return payload ? buildQuoteFromResumePayload(payload) : null;
};
