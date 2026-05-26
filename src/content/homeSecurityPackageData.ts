export type HomeSecurityTierId = 'a1' | 'a2' | 'a3';

export type HomeSecurityHardwareSpec = {
  videoDoorbell: number;
  indoorCameras: number;
  outdoorPoECameras: number;
  doorWindowSensors: number;
  motionSensors: number;
  leakSmokeSensors: number;
  sirenChime: number;
  recordingLabel: string;
  nvrIncluded: boolean;
};

export type HomeSecurityHardwareItem = {
  label: string;
  qty: number;
};

export type HomeSecurityPackageSpec = {
  id: HomeSecurityTierId;
  name: 'Bronze' | 'Silver' | 'Gold';
  coverage: string;
  entrances: string;
  cameras: string;
  hardware: HomeSecurityHardwareSpec;
  capabilities: string[];
};

export type HomeSecurityTierMedia = {
  caption: string;
  image: {
    alt: string;
    src: string;
    srcSet?: string;
    sizes?: string;
    sources?: Array<{
      type: string;
      srcSet: string;
    }>;
  };
};

export const HOME_SECURITY_CLARITY_FOOTER =
  'Equipment is owned by the customer. No monitoring subscription is sold by us. Optional third-party services connect directly to the customer. Optional remote viewing requires an active internet connection. Installation scope is finalized after site assessment.';

export const HOME_SECURITY_PACKAGE_SPECS: Record<HomeSecurityTierId, HomeSecurityPackageSpec> = {
  a1: {
    id: 'a1',
    name: 'Bronze',
    coverage: '~800–1,200 sq ft',
    entrances: '1 main entry + a couple of doors/windows',
    cameras: 'Video doorbell + 1 indoor camera',
    hardware: {
      videoDoorbell: 1,
      indoorCameras: 1,
      outdoorPoECameras: 0,
      doorWindowSensors: 2,
      motionSensors: 1,
      leakSmokeSensors: 1,
      sirenChime: 1,
      recordingLabel: 'Local recording host (package-sized)',
      nvrIncluded: false,
    },
    capabilities: [
      'Local-first systems designed around your home network.',
      'Remote viewing options can be discussed during planning.',
      'Local recording host sized to the package (no NVR in Bronze).',
      'No required monthly monitoring contracts; equipment stays owned by you.',
    ],
  },
  a2: {
    id: 'a2',
    name: 'Silver',
    coverage: '~1,200–2,000 sq ft',
    entrances: 'Main + secondary entry points',
    cameras: 'Video doorbell + 2 indoor + 2 outdoor PoE',
    hardware: {
      videoDoorbell: 1,
      indoorCameras: 2,
      outdoorPoECameras: 2,
      doorWindowSensors: 4,
      motionSensors: 2,
      leakSmokeSensors: 2,
      sirenChime: 1,
      recordingLabel: 'NVR included (sized by tier)',
      nvrIncluded: true,
    },
    capabilities: [
      'Local-first control with expanded indoor + outdoor coverage.',
      'Remote viewing options can be discussed during planning.',
      'Expanded local recording options for longer footage retention.',
      'No required monthly monitoring contracts; equipment stays owned by you.',
    ],
  },
  a3: {
    id: 'a3',
    name: 'Gold',
    coverage: '~2,000–3,500+ sq ft',
    entrances: 'Multiple exterior entries and interior zones',
    cameras: 'Video doorbell + 3 indoor + 3 outdoor PoE',
    hardware: {
      videoDoorbell: 1,
      indoorCameras: 3,
      outdoorPoECameras: 3,
      doorWindowSensors: 6,
      motionSensors: 3,
      leakSmokeSensors: 3,
      sirenChime: 1,
      recordingLabel: 'NVR included (sized by tier)',
      nvrIncluded: true,
    },
    capabilities: [
      'Local-first control with the highest camera and sensor coverage.',
      'Remote viewing options can be discussed during planning.',
      'Expanded local recording options for longer footage retention.',
      'No required monthly monitoring contracts; equipment stays owned by you.',
    ],
  },
};

export const HOME_SECURITY_TIER_MEDIA: Record<HomeSecurityTierId, HomeSecurityTierMedia> = {
  a1: {
    caption: '',
    image: {
      alt: 'Essential Awareness package coverage image',
      src: '/images/home-security/essential-awareness-card.png',
    },
  },
  a2: {
    caption: '',
    image: {
      alt: 'Balanced Home Coverage package coverage image',
      src: '/images/home-security/balanced_home_coverage_card_v01.png',
    },
  },
  a3: {
    caption: '',
    image: {
      alt: 'Expanded Property Coverage package coverage image',
      src: '/images/home-security/expanded_property_coverage_card_v1.png',
    },
  },
};

export const getHomeSecurityPackageSpec = (id: HomeSecurityTierId) => HOME_SECURITY_PACKAGE_SPECS[id];

export const getHomeSecurityHardwareItems = (id: HomeSecurityTierId): HomeSecurityHardwareItem[] => {
  const spec = HOME_SECURITY_PACKAGE_SPECS[id];

  return [
    {
      label: 'Control plane (Mini PC + Zigbee + Z-Wave)',
      qty: 1,
    },
    {
      label: 'Video doorbell',
      qty: spec.hardware.videoDoorbell,
    },
    {
      label: 'Indoor cameras',
      qty: spec.hardware.indoorCameras,
    },
    {
      label: 'Outdoor PoE cameras',
      qty: spec.hardware.outdoorPoECameras,
    },
    {
      label: 'Door/window sensors',
      qty: spec.hardware.doorWindowSensors,
    },
    {
      label: 'Motion sensors',
      qty: spec.hardware.motionSensors,
    },
    {
      label: 'Leak/Smoke sensors',
      qty: spec.hardware.leakSmokeSensors,
    },
    {
      label: 'Siren/chime',
      qty: spec.hardware.sirenChime,
    },
    {
      label: spec.hardware.recordingLabel,
      qty: 1,
    },
  ];
};

export const getHomeSecurityHardwareList = (id: HomeSecurityTierId) => {
  return getHomeSecurityHardwareItems(id).map((item) => `${item.label} (${item.qty})`);
};
