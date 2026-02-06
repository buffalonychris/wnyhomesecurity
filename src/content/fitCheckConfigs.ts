export type FitCheckTier = 'Bronze' | 'Silver' | 'Gold';

export type FitCheckCta = {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'ghost';
};

export type FitCheckTierConfig = {
  included: string[];
  ctas: FitCheckCta[];
};

export type FitCheckConfig = {
  heroTitle: string;
  heroSubtitle: string;
  tiers: Record<FitCheckTier, FitCheckTierConfig>;
};

export const fitCheckConfigs: Record<string, FitCheckConfig> = {
  'home-security': {
    heroTitle: 'Check fit for Home Security',
    heroSubtitle:
      'Answer a few quick questions to see the best-fit tier and what coverage looks like for your home.',
    tiers: {
      Bronze: {
        included: [
          'Local-first security hub with a single dashboard',
          'Entry coverage for 1–2 doors or windows',
          'One motion sensor for core indoor awareness',
          'Indoor siren with on-device automation support',
          'Optional mobile alerts when remote access is enabled',
          'Install walkthrough and homeowner handoff',
        ],
        ctas: [
          { label: 'Continue to Your Quote', href: '/quote?vertical=home-security', variant: 'primary' },
        ],
      },
      Silver: {
        included: [
          'Everything in Bronze, tuned for mid-size coverage',
          'Sensors for 3–4 entry points',
          '1–2 indoor motion zones for shared living areas',
          'Smart lighting triggers for deterrence routines',
          'Expanded automation scenes and alert routing',
          'System walkthrough and homeowner training',
        ],
        ctas: [
          { label: 'Continue to Your Quote', href: '/quote?vertical=home-security', variant: 'primary' },
        ],
      },
      Gold: {
        included: [
          'Expanded coverage for 5+ entry points',
          'Multiple indoor motion zones for full-floor coverage',
          'Perimeter-aware camera readiness for critical exteriors',
          'Dedicated recording storage with local-first access',
          'Enhanced automation scenes and rapid deterrence routines',
          'Priority install planning and calibration walkthrough',
        ],
        ctas: [
          { label: 'Continue to Your Quote', href: '/quote?vertical=home-security', variant: 'primary' },
        ],
      },
    },
  },
};
