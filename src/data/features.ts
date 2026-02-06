import { PackageTierId } from './pricing';

export type FeatureCategory = {
  title: string;
  items: string[];
};

export type FeatureGroup = {
  heading: string;
  categories: FeatureCategory[];
};

const basicFeatures: FeatureCategory[] = [
  {
    title: 'Night Pathway Safety',
    items: ['Low-glare pathway lighting on motion', 'Bed-to-bath routing cues'],
  },
  {
    title: 'Hazard Awareness',
    items: ['Leak and temperature alerts for kitchens and baths', 'Smoke/CO listener alerts'],
  },
  {
    title: 'Gentle Check-ins',
    items: ['Missed-activity nudges', 'Local chime or voice prompt cues'],
  },
  {
    title: 'Offline Dignity Rule',
    items: ['Local lighting and sensor triggers run without internet', 'Home Assistant logs stay on-site'],
  },
  {
    title: 'Privacy & Ownership',
    items: ['Home Assistant as the single dashboard', 'Customer owns the system, automations, and data'],
  },
];

const plusAdds: FeatureCategory[] = [
  {
    title: 'Routine Awareness',
    items: ['Routine deviation detection', 'Daily caregiver summary views (privacy-first)'],
  },
  {
    title: 'Door Usage Awareness',
    items: ['Entry/exit alerts with quiet chimes', 'Optional caregiver notifications for unusual activity'],
  },
  {
    title: 'Role-Based Access',
    items: ['Shared caregiver dashboards', 'Resident-first permissions and visibility controls'],
  },
  {
    title: 'Offline Resilience',
    items: [
      'Routine alerts stay local without cloud dependence',
      'Caregiver summaries sync once connectivity returns',
    ],
  },
  {
    title: 'Cameras Optional',
    items: ['Cameras are optional and off by default', 'Sensor-first signals are the standard'],
  },
];

const proAdds: FeatureCategory[] = [
  {
    title: 'Multi-Signal Correlation',
    items: ['Combine motion, door, and hazard signals', 'Reduce false alarms with local rules'],
  },
  {
    title: 'Adaptive Escalation',
    items: ['Tiered caregiver escalation ladders', 'Time-based escalation logic'],
  },
  {
    title: 'Additional Guardrails',
    items: ['Overnight safety guardrails', 'Proactive system health checks'],
  },
  {
    title: 'Offline Dignity Rule',
    items: [
      'Escalation ladders run locally without cloud services',
      'Backup power keeps critical signals active',
    ],
  },
  {
    title: 'Cameras Optional',
    items: ['Camera check-ins require explicit consent', 'Cameras remain off by default'],
  },
  {
    title: 'Ownership & Privacy',
    items: ['Home Assistant stays the resident-controlled platform', 'No cloud dependency for local safety'],
  },
];

const addOnFeatures: Record<string, FeatureCategory[]> = {
  'night-pathway-lighting': [
    {
      title: 'Night Pathway Safety',
      items: ['Expanded low-glare lighting coverage'],
    },
  ],
  'hazard-sensors': [
    {
      title: 'Hazard Awareness',
      items: ['Leak and temperature alerts in more rooms'],
    },
  ],
  'gentle-checkin': [
    {
      title: 'Gentle Check-ins',
      items: ['One-touch check-in confirmations'],
    },
  ],
  'door-awareness': [
    {
      title: 'Door Usage Awareness',
      items: ['Expanded entry/exit awareness'],
    },
  ],
  'routine-summary': [
    {
      title: 'Caregiver Summaries',
      items: ['Expanded daily summary views'],
    },
  ],
  'air-quality': [
    {
      title: 'Health & Comfort',
      items: ['Air quality and CO alert coverage'],
    },
  ],
  'adaptive-escalation': [
    {
      title: 'Escalation Logic',
      items: ['Tiered escalation ladders'],
    },
  ],
  'multi-signal-correlation': [
    {
      title: 'Signal Confidence',
      items: ['Combined motion, door, and hazard cues'],
    },
  ],
  'backup-power': [
    {
      title: 'Resilience',
      items: ['Backup power for critical devices'],
    },
  ],
  'optional-video-checkin': [
    {
      title: 'Optional Video Check-ins',
      items: ['Off by default with consent-based enablement'],
    },
  ],
};

const mergeFeatures = (categories: FeatureCategory[]): FeatureCategory[] => {
  const map = new Map<string, Set<string>>();

  categories.forEach((category) => {
    const existing = map.get(category.title) ?? new Set<string>();
    category.items.forEach((item) => existing.add(item));
    map.set(category.title, existing);
  });

  return Array.from(map.entries()).map(([title, items]) => ({ title, items: Array.from(items) }));
};

const buildGroups = (packageId: PackageTierId): FeatureGroup[] => {
  if (packageId === 'A1') {
    return [{ heading: 'Included Features', categories: mergeFeatures(basicFeatures) }];
  }

  if (packageId === 'A2') {
    return [
      { heading: 'Included from Basic', categories: mergeFeatures(basicFeatures) },
      { heading: 'Additional in Plus', categories: mergeFeatures(plusAdds) },
    ];
  }

  return [
    {
      heading: 'Included from Basic + Plus',
      categories: mergeFeatures([...basicFeatures, ...plusAdds]),
    },
    { heading: 'Additional in Pro', categories: mergeFeatures(proAdds) },
  ];
};

export const getFeatureGroups = (
  packageId: PackageTierId,
  addOnIds: string[]
): FeatureGroup[] => {
  const groups = buildGroups(packageId);
  const extras = addOnIds.flatMap((id) => addOnFeatures[id] ?? []);

  if (extras.length) {
    groups.push({ heading: 'Selected add-ons', categories: mergeFeatures(extras) });
  }

  return groups;
};

export const getFeatureCategories = (
  packageId: PackageTierId,
  addOnIds: string[]
): FeatureCategory[] => {
  const groups = getFeatureGroups(packageId, addOnIds);
  const merged = groups.flatMap((group) => group.categories);
  return mergeFeatures(merged);
};
