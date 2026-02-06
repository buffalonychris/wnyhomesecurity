import { QuoteContext } from './agreement';
import { buildAgreementAuthorityMeta, buildAgreementToken, buildQuoteAuthorityMeta, DOCUMENT_TYPES } from './docAuthority';
import { AcceptanceRecord } from './retailFlow';
import { createResumeToken } from './resumeToken';
import { shortenMiddle } from './displayUtils';

const getOrigin = () => (typeof window !== 'undefined' ? window.location.origin : 'https://kaec.local');

export const isValidEmail = (value?: string) => {
  if (!value) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};

const buildResumeUrl = (token: string, step?: string) => {
  const stepParam = step ? `&step=${encodeURIComponent(step)}` : '';
  return `${getOrigin()}/resume?t=${encodeURIComponent(token)}${stepParam}`;
};

const buildReviewUrl = (token: string, path: '/quoteReview' | '/agreementReview') =>
  `${getOrigin()}${path}?t=${encodeURIComponent(token)}`;

const buildPrintUrl = (token: string, path: string) =>
  `${getOrigin()}${path}?t=${encodeURIComponent(token)}`;

const buildVerifyUrl = (doc: 'QUOTE' | 'AGREEMENT', token: string) =>
  `${getOrigin()}/verify?doc=${doc}&t=${encodeURIComponent(token)}`;

export const buildQuoteEmailPayload = async (quote: QuoteContext, token?: string) => {
  const usedToken = token || createResumeToken(quote);
  const meta = await buildQuoteAuthorityMeta({ quote }, usedToken);
  if (!meta) return null;

  const resumeUrl = buildResumeUrl(usedToken, DOCUMENT_TYPES.QUOTE.defaultResumeStep);
  const payload = {
    to: quote.contact ?? '',
    meta: { ...meta, resumeUrl, verificationUrl: buildVerifyUrl('QUOTE', usedToken), resumeUrlDisplay: shortenMiddle(resumeUrl) },
    links: {
      reviewUrl: buildReviewUrl(usedToken, '/quoteReview'),
      printUrl: buildPrintUrl(usedToken, DOCUMENT_TYPES.QUOTE.printRoute),
      verifyUrl: buildVerifyUrl('QUOTE', usedToken),
      resumeUrl,
    },
    context: {
      name: quote.customerName,
      city: quote.city,
      tier: quote.packageId,
    },
  };

  return payload;
};

export const buildAgreementEmailPayload = async (
  quote: QuoteContext,
  acceptance: AcceptanceRecord,
  options?: { resumePath?: 'payment' | 'agreement' },
) => {
  const usedToken = buildAgreementToken(quote, acceptance, acceptance.agreementHash);
  const meta = await buildAgreementAuthorityMeta({ quote, agreementAcceptance: acceptance }, usedToken);
  if (!meta) return null;

  const resumeUrl = buildResumeUrl(usedToken, options?.resumePath ?? DOCUMENT_TYPES.AGREEMENT.defaultResumeStep);
  const payload = {
    to: acceptance.emailTo || quote.contact || '',
    meta: { ...meta, resumeUrl, verificationUrl: buildVerifyUrl('AGREEMENT', usedToken), resumeUrlDisplay: shortenMiddle(resumeUrl) },
    links: {
      reviewUrl: buildReviewUrl(usedToken, '/agreementReview'),
      printUrl: buildPrintUrl(usedToken, DOCUMENT_TYPES.AGREEMENT.printRoute),
      verifyUrl: buildVerifyUrl('AGREEMENT', usedToken),
      resumeUrl,
    },
    context: {
      name: quote.customerName,
      city: quote.city,
      tier: quote.packageId,
    },
  };

  return payload;
};
