export type FitCheckConfig = {
  heroTitle: string;
  heroSubtitle: string;
};

export const fitCheckConfigs: Record<string, FitCheckConfig> = {
  'home-security': {
    heroTitle: 'Fit Check',
    heroSubtitle:
      'Answer a few quick questions about real-life situations around your property. We will suggest possible solution categories to discuss next.',
  },
  'newsite-home-security': {
    heroTitle: 'Fit Check',
    heroSubtitle:
      'Answer a few quick questions about your property, family, deliveries, and daily routines. We will suggest possible solution categories to discuss next.',
  },
};
