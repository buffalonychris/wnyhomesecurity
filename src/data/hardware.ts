import { PackageTierId } from './pricing';

type HardwareItem = {
  name: string;
  quantity: number;
  note?: string;
};

export type HardwareCategory = {
  title: string;
  items: HardwareItem[];
};

export type HardwareGroup = {
  heading: string;
  categories: HardwareCategory[];
};

const baseHardware: Record<PackageTierId, HardwareCategory[]> = {
  A1: [
    {
      title: 'Core controllers',
      items: [
        { name: 'Home Assistant hub with local storage', quantity: 1 },
        { name: 'Network switch / PoE injector', quantity: 1 },
      ],
    },
    {
      title: 'Night pathway safety',
      items: [
        { name: 'Low-glare pathway lights', quantity: 3 },
        { name: 'Wireless motion sensors', quantity: 3 },
      ],
    },
    {
      title: 'Safety sensors',
      items: [
        { name: 'Door contact sensor', quantity: 1 },
        { name: 'Leak sensors', quantity: 2 },
        { name: 'Temperature sensor', quantity: 1 },
        { name: 'Smoke/CO listener', quantity: 1 },
      ],
    },
    {
      title: 'Gentle check-ins',
      items: [{ name: 'Local check-in prompt device', quantity: 1 }],
    },
  ],
  A2: [
    {
      title: 'Core controllers',
      items: [
        { name: 'Home Assistant hub with local storage', quantity: 1 },
        { name: 'Network switch / PoE injector', quantity: 1 },
        { name: 'Battery backup for hub', quantity: 1 },
      ],
    },
    {
      title: 'Night pathway safety',
      items: [
        { name: 'Low-glare pathway lights', quantity: 5 },
        { name: 'Wireless motion sensors', quantity: 5 },
      ],
    },
    {
      title: 'Safety sensors',
      items: [
        { name: 'Door contact sensors', quantity: 3 },
        { name: 'Leak sensors', quantity: 3 },
        { name: 'Temperature sensors', quantity: 2 },
        { name: 'Smoke/CO listeners', quantity: 2 },
      ],
    },
    {
      title: 'Routine awareness',
      items: [
        { name: 'Presence sensors', quantity: 2 },
        { name: 'Caregiver summary dashboard setup', quantity: 1 },
      ],
    },
  ],
  A3: [
    {
      title: 'Core controllers',
      items: [
        { name: 'Home Assistant hub with redundant storage', quantity: 1 },
        { name: 'Managed PoE switch', quantity: 1 },
        { name: 'Battery backup for automation controllers', quantity: 2 },
      ],
    },
    {
      title: 'Night pathway safety',
      items: [
        { name: 'Low-glare pathway lights', quantity: 7 },
        { name: 'Wireless motion sensors', quantity: 7 },
      ],
    },
    {
      title: 'Safety sensors',
      items: [
        { name: 'Door contact sensors', quantity: 4 },
        { name: 'Leak sensors', quantity: 4 },
        { name: 'Temperature sensors', quantity: 3 },
        { name: 'Smoke/CO listeners', quantity: 3 },
      ],
    },
    {
      title: 'Advanced guardrails',
      items: [
        { name: 'Presence sensors', quantity: 3 },
        { name: 'Escalation ladder configuration', quantity: 1 },
        { name: 'System health monitoring setup', quantity: 1 },
      ],
    },
  ],
};

const addOnHardware: Record<string, HardwareCategory[]> = {
  'night-pathway-lighting': [
    {
      title: 'Night pathway safety',
      items: [
        { name: 'Low-glare pathway lights', quantity: 2 },
        { name: 'Wireless motion sensors', quantity: 1 },
      ],
    },
  ],
  'hazard-sensors': [
    {
      title: 'Safety sensors',
      items: [
        { name: 'Leak sensors', quantity: 2 },
        { name: 'Temperature sensor', quantity: 1 },
      ],
    },
  ],
  'gentle-checkin': [
    {
      title: 'Gentle check-ins',
      items: [{ name: 'Check-in buttons', quantity: 2 }],
    },
  ],
  'door-awareness': [
    {
      title: 'Safety sensors',
      items: [{ name: 'Door contact sensors', quantity: 2 }],
    },
  ],
  'routine-summary': [
    {
      title: 'Routine awareness',
      items: [{ name: 'Caregiver summary dashboard setup', quantity: 1 }],
    },
  ],
  'air-quality': [
    {
      title: 'Safety sensors',
      items: [
        { name: 'Air quality sensor', quantity: 1 },
        { name: 'CO listener', quantity: 1 },
      ],
    },
  ],
  'adaptive-escalation': [
    {
      title: 'Advanced guardrails',
      items: [{ name: 'Escalation ladder configuration', quantity: 1 }],
    },
  ],
  'multi-signal-correlation': [
    {
      title: 'Advanced guardrails',
      items: [
        { name: 'Multi-signal correlation tuning session', quantity: 1 },
        { name: 'Wireless motion sensors', quantity: 2 },
      ],
    },
  ],
  'backup-power': [
    {
      title: 'Core controllers',
      items: [{ name: 'UPS battery backup', quantity: 1 }],
    },
  ],
  'optional-video-checkin': [
    {
      title: 'Optional video check-ins',
      items: [{ name: 'Privacy-shutter indoor camera (off by default)', quantity: 1 }],
    },
  ],
};

const mergeHardware = (categories: HardwareCategory[]): HardwareCategory[] => {
  const map = new Map<string, HardwareItem[]>();

  categories.forEach((category) => {
    const existing = map.get(category.title) ?? [];
    const mergedItems = [...existing];

    category.items.forEach((item) => {
      const found = mergedItems.find((existingItem) => existingItem.name === item.name);
      if (found) {
        found.quantity += item.quantity;
      } else {
        mergedItems.push({ ...item });
      }
    });

    map.set(category.title, mergedItems);
  });

  return Array.from(map.entries()).map(([title, items]) => ({ title, items }));
};

const toHardwareMap = (categories: HardwareCategory[]) => {
  const byTitle = new Map<string, Map<string, number>>();

  categories.forEach((category) => {
    const existing = byTitle.get(category.title) ?? new Map<string, number>();
    category.items.forEach((item) => {
      existing.set(item.name, (existing.get(item.name) ?? 0) + item.quantity);
    });
    byTitle.set(category.title, existing);
  });

  return byTitle;
};

const diffHardware = (base: HardwareCategory[], target: HardwareCategory[]): HardwareCategory[] => {
  const baseMap = toHardwareMap(base);
  const result: HardwareCategory[] = [];

  target.forEach((category) => {
    const baseItems = baseMap.get(category.title) ?? new Map<string, number>();
    const additions: HardwareItem[] = [];

    category.items.forEach((item) => {
      const delta = item.quantity - (baseItems.get(item.name) ?? 0);
      if (delta > 0) additions.push({ ...item, quantity: delta });
    });

    if (additions.length) {
      result.push({ title: category.title, items: additions });
    }
  });

  return result;
};

const bronzeHardware = mergeHardware(baseHardware.A1);
const silverTotal = mergeHardware(baseHardware.A2);
const goldTotal = mergeHardware(baseHardware.A3);

const silverAdds = diffHardware(bronzeHardware, silverTotal);
const silverRollup = mergeHardware([...bronzeHardware, ...silverAdds]);
const goldAdds = diffHardware(silverRollup, goldTotal);
const goldRollup = mergeHardware([...silverRollup, ...goldAdds]);

const buildHardwareGroups = (packageId: PackageTierId): HardwareGroup[] => {
  if (packageId === 'A1') {
    return [{ heading: 'Included Hardware', categories: bronzeHardware }];
  }

  if (packageId === 'A2') {
    return [
      { heading: 'Included from Basic', categories: bronzeHardware },
      { heading: 'Additional in Plus', categories: silverAdds },
    ];
  }

  return [
    { heading: 'Included from Basic + Plus', categories: silverRollup },
    { heading: 'Additional in Pro', categories: goldAdds },
  ];
};

export const getHardwareGroups = (
  packageId: PackageTierId,
  addOnIds: string[]
): HardwareGroup[] => {
  const groups = buildHardwareGroups(packageId);
  const extras = addOnIds.flatMap((id) => addOnHardware[id] ?? []);

  if (extras.length) {
    groups.push({ heading: 'Selected add-ons', categories: mergeHardware(extras) });
  }

  return groups;
};

export const getHardwareList = (
  packageId: PackageTierId,
  addOnIds: string[]
): HardwareCategory[] => {
  const base =
    packageId === 'A1' ? bronzeHardware : packageId === 'A2' ? silverRollup : goldRollup;
  const extras = addOnIds.flatMap((id) => addOnHardware[id] ?? []);
  return mergeHardware([...base, ...extras]);
};
