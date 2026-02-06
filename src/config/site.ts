export type DepositPolicy =
  | { type: 'percentage'; value: number; note: string }
  | { type: 'flat'; value: number; note: string };

type SiteConfig = {
  enableAiApiNarrative: boolean;
  enableMockPayments: boolean;
  depositPolicy: DepositPolicy;
  quoteDocVersion: string;
  quoteHashAlgorithm: string;
  agreementDocVersion: string;
};

export const siteConfig: SiteConfig = {
  enableAiApiNarrative: false,
  enableMockPayments: true,
  depositPolicy: {
    type: 'percentage',
    value: 0.5,
    note: 'Default deposit uses 50% of the system cost; swap to flat with type: "flat" and value in USD.',
  },
  quoteDocVersion: 'v1.0',
  quoteHashAlgorithm: 'SHA-256',
  agreementDocVersion: 'v1.0',
};
