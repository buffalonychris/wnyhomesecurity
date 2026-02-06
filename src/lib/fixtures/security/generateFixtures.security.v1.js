import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const scenarioPath = path.join(__dirname, 'scenarios.security.v1.json');
const outputDir = path.join(__dirname, 'generated', 'security.v1');

const TIER_BOM = {
  bronze: {
    doorbell_wifi: 1,
    cam_indoor_wifi: 1,
    cam_outdoor_poe: 0,
    contact_sensor: 4,
    motion_sensor: 1,
    leak_sensor: 1,
    siren_chime: 1,
    smart_plug: 2,
    protect_brains_ck: 1,
    protect_brains_unvr: 0,
    nvr_drive_4tb: 0,
    poe_injector: 0,
  },
  silver: {
    doorbell_wifi: 1,
    cam_indoor_wifi: 2,
    cam_outdoor_poe: 1,
    contact_sensor: 6,
    motion_sensor: 2,
    leak_sensor: 2,
    siren_chime: 1,
    smart_plug: 4,
    protect_brains_ck: 1,
    protect_brains_unvr: 0,
    nvr_drive_4tb: 0,
    poe_injector: 1,
  },
  gold: {
    doorbell_wifi: 1,
    cam_indoor_wifi: 2,
    cam_outdoor_poe: 2,
    contact_sensor: 10,
    motion_sensor: 3,
    leak_sensor: 3,
    siren_chime: 1,
    smart_plug: 6,
    protect_brains_ck: 0,
    protect_brains_unvr: 1,
    nvr_drive_4tb: 2,
    poe_injector: 2,
  },
};

const sizeBandDefaults = {
  motion: { small: 1, medium: 2, large: 3 },
  leak: { small: 1, medium: 2, large: 3 },
};

const buildExteriorDoors = ({ doors, slider, garageEntry }) => {
  if (doors <= 0) return [];
  const labels = ['Back door', 'Side door'];
  if (slider) labels.push('Patio slider');
  if (garageEntry) labels.push('Garage entry');

  const exteriorDoors = ['Front door'];
  let index = 0;
  while (exteriorDoors.length < doors) {
    if (index < labels.length) {
      exteriorDoors.push(labels[index]);
      index += 1;
    } else {
      exteriorDoors.push(`Exterior door #${exteriorDoors.length + 1}`);
    }
  }
  return exteriorDoors;
};

const buildMotionRecommendation = (sizeBand, floors) => {
  const base = sizeBandDefaults.motion[sizeBand];
  return Math.min(6, Math.max(1, base + Math.max(0, floors - 1)));
};

const buildLeakRecommendation = (sizeBand) => sizeBandDefaults.leak[sizeBand];

const computeExpectationsForTier = (draft, tier) => {
  const tierBom = TIER_BOM[tier];
  const doorCount = draft.exteriorDoors.length;
  const requiredDoorContacts = Math.max(1, doorCount);

  const gaps = [];
  if (requiredDoorContacts > tierBom.contact_sensor) {
    gaps.push({ key: 'contact_sensor', missing: requiredDoorContacts - tierBom.contact_sensor });
  }

  const priorities = draft.priorities.map((priority) => priority.toLowerCase());
  const wantsOutdoor = priorities.includes('security') || draft.propertyType !== 'apartment';

  const recommendedMotion = buildMotionRecommendation(draft.sizeBand, draft.floors);
  const recommendedLeak = buildLeakRecommendation(draft.sizeBand);

  const hasMotionAddon = tierBom.motion_sensor < recommendedMotion;
  const hasLeakAddon = tierBom.leak_sensor < recommendedLeak;
  const hasWindowAddon = draft.groundWindows !== 'no';
  const hasOutdoorAddon = wantsOutdoor && tierBom.cam_outdoor_poe === 0;
  const hasPoeAddon = tierBom.poe_injector > 0 && (tierBom.cam_outdoor_poe > 0 || wantsOutdoor);

  const hasOptionalAddons = hasMotionAddon || hasLeakAddon || hasWindowAddon || hasOutdoorAddon || hasPoeAddon;

  const status = gaps.length > 0 ? 'gap' : hasOptionalAddons ? 'complete_with_addons' : 'complete';

  return { status, gaps };
};

const scenarios = JSON.parse(await fs.readFile(scenarioPath, 'utf8'));
await fs.rm(outputDir, { recursive: true, force: true });
await fs.mkdir(outputDir, { recursive: true });

for (const scenario of scenarios) {
  const exteriorDoors = buildExteriorDoors({
    doors: scenario.doors,
    slider: scenario.slider,
    garageEntry: scenario.garageEntry,
  });

  const draft = {
    propertyType: scenario.propertyType,
    floors: scenario.floors,
    sizeBand: scenario.sizeBand,
    garage: scenario.garage,
    exteriorDoors,
    groundWindows: scenario.groundWindows,
    pets: scenario.pets,
    elders: scenario.elders,
    priorities: scenario.priorities,
  };

  const { status, gaps } = computeExpectationsForTier(draft, scenario.tier);

  const bundleStatus = Object.fromEntries(
    Object.keys(TIER_BOM).map((tier) => {
      const { status: tierStatus } = computeExpectationsForTier(draft, tier);
      return [tier, tierStatus];
    }),
  );

  const mustHaveKeys = ['contact_sensor', 'doorbell_wifi'];
  const mustNotHaveKeys = [];

  if (scenario.tier === 'gold') {
    mustHaveKeys.push('protect_brains_unvr', 'nvr_drive_4tb');
    mustNotHaveKeys.push('protect_brains_ck');
  } else {
    mustHaveKeys.push('protect_brains_ck');
    mustNotHaveKeys.push('protect_brains_unvr');
  }

  const notesMustContain = scenario.pets ? ['Pet-safe placement'] : [];

  const fixture = {
    id: scenario.id,
    selectedTier: scenario.tier,
    draft,
    expect: {
      status,
      mustHaveKeys,
      mustNotHaveKeys,
      gaps,
      notesMustContain,
      forbiddenPhrases: ['pet-immune'],
      bundleStatus,
    },
  };

  const filePath = path.join(outputDir, `${scenario.id}.json`);
  await fs.writeFile(filePath, `${JSON.stringify(fixture, null, 2)}\n`, 'utf8');
}

console.log(`Wrote ${scenarios.length} fixtures to ${outputDir}`);
