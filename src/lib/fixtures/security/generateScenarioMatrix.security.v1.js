import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, 'scenarios.security.v1.json');

const tiers = ['bronze', 'silver', 'gold'];
const propertyTypes = ['house', 'apartment', 'condo', 'rental'];
const floors = [1, 2, 3];
const sizeBands = ['small', 'medium', 'large'];
const garages = ['none', 'attached', 'detached'];
const groundWindows = ['no', 'some', 'yes'];
const priorityOptions = [
  ['security'],
  ['packages'],
  ['water'],
  ['security', 'packages'],
  ['security', 'water'],
  ['packages', 'water'],
];

const doorCycle = [1, 2, 3, 4, 5, 6, 7, 8];

const doorCountForIndex = (index) => {
  if (index === 0) return 0;
  if (index === 1) return 9;
  return doorCycle[(index - 2) % doorCycle.length];
};

const scenarios = [];
let index = 0;
for (const tier of tiers) {
  for (const propertyType of propertyTypes) {
    for (const floor of floors) {
      for (const sizeBand of sizeBands) {
        const doors = doorCountForIndex(index);
        scenarios.push({
          id: '',
          tier,
          propertyType,
          floors: floor,
          sizeBand,
          garage: garages[index % garages.length],
          doors,
          slider: index % 3 === 0,
          garageEntry: index % 4 === 0,
          groundWindows: groundWindows[(index + 1) % groundWindows.length],
          pets: index % 5 < 2,
          elders: index % 7 === 0,
          priorities: priorityOptions[index % priorityOptions.length],
        });
        index += 1;
      }
    }
  }
}

const extras = [
  {
    tier: 'bronze',
    propertyType: 'apartment',
    floors: 2,
    sizeBand: 'small',
    garage: 'attached',
    doors: 2,
    slider: true,
    garageEntry: false,
    groundWindows: 'some',
    pets: true,
    elders: false,
    priorities: ['packages'],
  },
  {
    tier: 'silver',
    propertyType: 'house',
    floors: 3,
    sizeBand: 'large',
    garage: 'detached',
    doors: 8,
    slider: true,
    garageEntry: true,
    groundWindows: 'yes',
    pets: false,
    elders: true,
    priorities: ['security', 'water'],
  },
  {
    tier: 'gold',
    propertyType: 'condo',
    floors: 1,
    sizeBand: 'medium',
    garage: 'none',
    doors: 1,
    slider: false,
    garageEntry: false,
    groundWindows: 'no',
    pets: true,
    elders: true,
    priorities: ['security'],
  },
  {
    tier: 'bronze',
    propertyType: 'rental',
    floors: 1,
    sizeBand: 'medium',
    garage: 'attached',
    doors: 5,
    slider: false,
    garageEntry: true,
    groundWindows: 'some',
    pets: false,
    elders: false,
    priorities: ['water'],
  },
  {
    tier: 'silver',
    propertyType: 'apartment',
    floors: 1,
    sizeBand: 'small',
    garage: 'attached',
    doors: 0,
    slider: false,
    garageEntry: false,
    groundWindows: 'yes',
    pets: true,
    elders: false,
    priorities: ['security', 'packages'],
  },
  {
    tier: 'gold',
    propertyType: 'house',
    floors: 2,
    sizeBand: 'large',
    garage: 'detached',
    doors: 7,
    slider: true,
    garageEntry: true,
    groundWindows: 'some',
    pets: false,
    elders: true,
    priorities: ['packages'],
  },
  {
    tier: 'bronze',
    propertyType: 'condo',
    floors: 3,
    sizeBand: 'small',
    garage: 'none',
    doors: 3,
    slider: false,
    garageEntry: false,
    groundWindows: 'no',
    pets: true,
    elders: false,
    priorities: ['security', 'water'],
  },
  {
    tier: 'silver',
    propertyType: 'rental',
    floors: 2,
    sizeBand: 'medium',
    garage: 'none',
    doors: 6,
    slider: true,
    garageEntry: false,
    groundWindows: 'yes',
    pets: false,
    elders: false,
    priorities: ['security'],
  },
  {
    tier: 'gold',
    propertyType: 'apartment',
    floors: 3,
    sizeBand: 'large',
    garage: 'attached',
    doors: 4,
    slider: true,
    garageEntry: true,
    groundWindows: 'some',
    pets: true,
    elders: true,
    priorities: ['water'],
  },
  {
    tier: 'bronze',
    propertyType: 'house',
    floors: 2,
    sizeBand: 'medium',
    garage: 'detached',
    doors: 8,
    slider: false,
    garageEntry: true,
    groundWindows: 'yes',
    pets: false,
    elders: true,
    priorities: ['packages', 'water'],
  },
  {
    tier: 'silver',
    propertyType: 'condo',
    floors: 1,
    sizeBand: 'small',
    garage: 'attached',
    doors: 2,
    slider: true,
    garageEntry: false,
    groundWindows: 'no',
    pets: true,
    elders: false,
    priorities: ['security', 'packages'],
  },
  {
    tier: 'gold',
    propertyType: 'rental',
    floors: 1,
    sizeBand: 'medium',
    garage: 'none',
    doors: 5,
    slider: false,
    garageEntry: false,
    groundWindows: 'some',
    pets: false,
    elders: true,
    priorities: ['security', 'water'],
  },
];

const combined = scenarios.concat(extras).slice(0, 120).map((scenario, idx) => ({
  ...scenario,
  id: `HS_${String(idx + 1).padStart(4, '0')}`,
}));

await fs.writeFile(outputPath, `${JSON.stringify(combined, null, 2)}\n`, 'utf8');

console.log(`Wrote ${combined.length} scenarios to ${outputPath}`);
