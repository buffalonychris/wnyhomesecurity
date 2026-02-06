import { getAddOns, getPackagePricing, PackageTierId } from '../data/pricing';
import {
  RecommendationInput,
  RecommendationResult,
} from './recommendationRules';
import { siteConfig } from '../config/site';
import { VerticalKey } from './verticals';

type QuoteContext = {
  packageId: PackageTierId;
  selectedAddOnIds: string[];
  propertyDetails?: {
    homeType?: string;
    homeSize?: string;
    internetReliability?: string;
    city?: string;
  };
  pricing?: {
    packagePrice: number;
    addOnTotal: number;
    total: number;
  };
};

export type NarrativeInput = {
  source: 'recommendation' | 'quote';
  recommendation?: RecommendationResult;
  responses?: RecommendationInput;
  quoteContext?: QuoteContext;
  vertical?: VerticalKey;
};

export type NarrativeSection = {
  title: string;
  body: string;
};

export type NarrativeResponse = {
  sections: NarrativeSection[];
  disclaimer: string[];
};

const buildAddOnNotes = (selectedAddOnIds: string[], vertical: VerticalKey) => {
  const addOns = getAddOns(vertical);
  if (selectedAddOnIds.length === 0) {
    return 'No add-ons selected; the base package covers the essentials and can be expanded later without penalties.';
  }

  const notes = selectedAddOnIds.map((id) => {
    const match = addOns.find((item) => item.id === id);
    if (match) {
      return `${match.label} focuses on ${match.description.toLowerCase()}.`;
    }
    return `${id} strengthens the plan.`;
  });

  return notes.join(' ');
};

const buildWhyFitsSection = (input: NarrativeInput): NarrativeSection => {
  const vertical = input.vertical ?? 'elder-tech';
  if (input.source === 'recommendation' && input.recommendation) {
    const addOnNotes = buildAddOnNotes(input.recommendation.suggestedAddOns, vertical);
    return {
      title: 'Why this fits',
      body: `${input.recommendation.rationale} ${addOnNotes}`.trim(),
    };
  }

  const pkg = getPackagePricing(vertical).find((item) => item.id === input.quoteContext?.packageId);
  const packageLine = pkg
    ? `${pkg.name} was selected for its ${pkg.summary.toLowerCase()}.`
    : 'Package selection centers on reliable coverage without extra apps.';
  const addOnLine = buildAddOnNotes(input.quoteContext?.selectedAddOnIds ?? [], vertical);
  return {
    title: 'Why this fits',
    body: `${packageLine} ${addOnLine}`.trim(),
  };
};

const buildOfflineSection = (input: NarrativeInput): NarrativeSection => {
  const reliability = input.responses?.internetReliability ?? input.quoteContext?.propertyDetails?.internetReliability;
  const offlineRating = input.recommendation?.offlineReadiness ?? 4;
  const reliabilityLine = reliability
    ? `Internet reliability noted as ${reliability}.` : 'Internet reliability not provided; defaulting to resilient settings.';
  return {
    title: 'Offline readiness summary',
    body: `Rated ${offlineRating}/5 for local-first behavior. Core automations keep running on-site during outages when power is available. ${reliabilityLine}`,
  };
};

const buildInstallSection = (input: NarrativeInput): NarrativeSection => {
  const complexity = input.recommendation?.installComplexity ?? 3;
  const homeSize = input.responses?.homeSize ?? input.quoteContext?.propertyDetails?.homeSize;
  const techComfort = input.responses?.techComfort;
  const sizeLine = homeSize ? `Home size: ${homeSize}.` : '';
  const comfortLine = techComfort ? `Tech comfort: ${techComfort}, so training is tuned accordingly.` : '';
  return {
    title: 'Install complexity summary',
    body: `Estimated install complexity is ${complexity}/5 with pre-flight checks for wiring and Wi-Fi. ${sizeLine} ${comfortLine}`.trim(),
  };
};

const buildAssumptionsSection = (input: NarrativeInput): NarrativeSection => {
  const cityLine = input.quoteContext?.propertyDetails?.city ? `Location noted: ${input.quoteContext.propertyDetails.city}. ` : '';
  const scopeLines = [
    'Pricing is one-time for listed equipment, configuration, and training.',
    'Existing Wi-Fi and power are available at device locations; structural changes are excluded.',
    'Local-first design keeps automations running during internet outages when power is available.',
  ];
  const vertical = input.vertical ?? 'elder-tech';
  const addOnLine = buildAddOnNotes(input.quoteContext?.selectedAddOnIds ?? [], vertical);
  return {
    title: 'Assumptions & exclusions',
    body: `${cityLine}${scopeLines.join(' ')} ${addOnLine}`.trim(),
  };
};

const buildNextStepSection = (input: NarrativeInput): NarrativeSection => {
  const total = input.quoteContext?.pricing?.total;
  const totalLine = typeof total === 'number' ? `One-time estimate: $${total.toLocaleString()}. ` : '';
  return {
    title: 'Next best step',
    body: `${totalLine}Schedule a walkthrough to confirm wiring paths and finalize device placement. Share any accessibility needs and preferred alert channels.`.trim(),
  };
};

const buildDeterministicNarrative = (input: NarrativeInput): NarrativeResponse => {
  return {
    sections: [
      buildWhyFitsSection(input),
      buildOfflineSection(input),
      buildInstallSection(input),
      buildAssumptionsSection(input),
      buildNextStepSection(input),
    ],
    disclaimer: [
      'Informational only. Not medical advice or a diagnosis.',
      'If you have an urgent safety concern, call 911.',
      'Final configuration depends on on-site conditions and local code.',
    ],
  };
};

const fetchNarrativeFromApi = async (input: NarrativeInput) => {
  if (!siteConfig.enableAiApiNarrative) return null;
  try {
    const response = await fetch('/api/ai/narrative', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    if (!response.ok) return null;
    const data = (await response.json()) as NarrativeResponse;
    if (data?.sections) return data;
    return null;
  } catch (error) {
    console.error('Narrative API unavailable, using templates.', error);
    return null;
  }
};

export const generateNarrative = async (input: NarrativeInput): Promise<NarrativeResponse> => {
  const apiNarrative = await fetchNarrativeFromApi(input);
  if (apiNarrative) return apiNarrative;
  return buildDeterministicNarrative(input);
};
