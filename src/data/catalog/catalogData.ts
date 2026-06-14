import { getHomeSecurityHardwareItems } from '../../content/homeSecurityPackageData';
import { homeSecurityPackages } from '../../content/packages';
import { offerCategories, packageStartingPoints, publicSolutions } from '../../content/wnyhsOfferCatalog';
import type { CatalogCategory, CatalogHardwareItem, CatalogPackage, CatalogSolution } from './catalogTypes';

const sourceHomeSecurityPackageData = 'src/content/homeSecurityPackageData.ts';
const sourcePackages = 'src/content/packages.ts';
const sourceOfferCatalog = 'src/content/wnyhsOfferCatalog.ts';

const hardwareIdByLabel: Record<string, string> = {
  'Control plane (Mini PC + Zigbee + Z-Wave)': 'control-plane-mini-pc-zigbee-zwave',
  'Video doorbell': 'video-doorbell',
  'Indoor cameras': 'indoor-camera',
  'Outdoor PoE cameras': 'outdoor-poe-camera',
  'Door/window sensors': 'door-window-sensor',
  'Motion sensors': 'motion-sensor',
  'Leak/Smoke sensors': 'leak-smoke-sensor',
  'Siren/chime': 'siren-chime',
  'Local recording host (package-sized)': 'local-recording-host',
  'NVR included (sized by tier)': 'nvr-local-recording',
};

const hardwareTypeByLabel: Record<string, string> = {
  'Control plane (Mini PC + Zigbee + Z-Wave)': 'Control plane kit',
  'Video doorbell': 'Video doorbell',
  'Indoor cameras': 'Indoor camera',
  'Outdoor PoE cameras': 'Outdoor PoE camera',
  'Door/window sensors': 'Door/window sensor',
  'Motion sensors': 'Motion sensor',
  'Leak/Smoke sensors': 'Leak/smoke sensor',
  'Siren/chime': 'Siren/chime',
  'Local recording host (package-sized)': 'Local recording host',
  'NVR included (sized by tier)': 'NVR / local recording',
};

const protocolByLabel: Record<string, string | null> = {
  'Control plane (Mini PC + Zigbee + Z-Wave)': 'Ethernet/Wi-Fi plus Zigbee and Z-Wave radios',
  'Video doorbell': null,
  'Indoor cameras': null,
  'Outdoor PoE cameras': 'PoE/Ethernet',
  'Door/window sensors': 'Zigbee or Z-Wave candidate',
  'Motion sensors': 'Zigbee or Z-Wave candidate',
  'Leak/Smoke sensors': 'Zigbee or Z-Wave candidate',
  'Siren/chime': 'Zigbee, Z-Wave, or local network candidate',
  'Local recording host (package-sized)': 'Local network storage',
  'NVR included (sized by tier)': 'Local network video recording',
};

const purposeByLabel: Record<string, string> = {
  'Control plane (Mini PC + Zigbee + Z-Wave)': 'Provides the local Home Assistant control-plane foundation for supported package devices.',
  'Video doorbell': 'Adds front-entry and package-area visibility where placement supports it.',
  'Indoor cameras': 'Adds selected indoor visibility in reviewed areas.',
  'Outdoor PoE cameras': 'Adds exterior property visibility with local-network camera placement.',
  'Door/window sensors': 'Adds selected open or closed awareness for scoped entry points.',
  'Motion sensors': 'Adds motion awareness for selected rooms, paths, or areas.',
  'Leak/Smoke sensors': 'Adds selected water or smoke-related awareness where compatible sensors are placed.',
  'Siren/chime': 'Adds local audible feedback for selected system events.',
  'Local recording host (package-sized)': 'Keeps package-sized event recording local to the property.',
  'NVR included (sized by tier)': 'Adds local video recording capacity sized by the selected tier.',
};

const packageSolutionIdsByTier: Record<string, string[]> = {
  a1: ['front-door-package-protection', 'water-leak-alerts', 'notification-routing'],
  a2: ['front-door-package-protection', 'driveway-watch', 'garage-door-awareness', 'family-awareness'],
  a3: ['entry-perimeter-awareness', 'local-camera-awareness', 'vacation-home-awareness', 'water-leak-alerts'],
};

export const catalogCategories: CatalogCategory[] = offerCategories.map((category) => ({
  id: category.id,
  name: category.name,
  description: category.outcome,
  status: category.id === 'vault' ? 'custom' : 'active',
}));

export const catalogHardwareItems: CatalogHardwareItem[] = Array.from(
  new Map(getHomeSecurityHardwareItems('a3').map((item) => [item.label, item])).values(),
).map((item) => ({
  id: hardwareIdByLabel[item.label] ?? item.label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  label: item.label,
  hardwareType: hardwareTypeByLabel[item.label] ?? item.label,
  quantityBasis: 'Package tier default; final quantity remains quote-specific.',
  defaultQty: item.qty,
  customerFacingPurpose: purposeByLabel[item.label] ?? 'Supports the selected package scope.',
  technicalPurpose: null,
  haCompatibilityStatus: 'site_review_required',
  protocol: protocolByLabel[item.label] ?? null,
  stockingStatus: 'standard_candidate',
  vaultExcluded: false,
  controlPlaneKitMember: item.label === 'Control plane (Mini PC + Zigbee + Z-Wave)',
  dashboardImplication: 'May require a Home Assistant entity, dashboard tile, alert, or status view after final device selection.',
  installerNote: 'Final model, mounting, power, wiring, and placement are confirmed during quote and install planning.',
  source: sourceHomeSecurityPackageData,
}));

export const catalogSolutions: CatalogSolution[] = publicSolutions.map((solution) => ({
  id: solution.id,
  name: solution.title,
  categoryId: solution.categoryId,
  packageIds: packageStartingPoints
    .filter((packageItem) => packageItem.includedTopics.some((topic) => solution.title.includes(topic) || topic.includes(solution.title.split('/')[0].trim())))
    .map((packageItem) => packageItem.id),
  customerConcernsAddressed: [solution.body],
  summary: solution.body,
  notes: `Promoted from public offer catalog status: ${solution.status}.`,
  source: sourceOfferCatalog,
}));

export const catalogPackages: CatalogPackage[] = [
  ...homeSecurityPackages.map((packageItem) => ({
    id: packageItem.id,
    name: packageItem.name,
    categoryId: 'home-security',
    summary: packageItem.oneLiner,
    priceLabel: packageItem.price || null,
    solutionIds: packageSolutionIdsByTier[packageItem.id] ?? [],
    hardwareItems: (packageItem.hardware ?? []).map((item) => ({
      hardwareItemId: hardwareIdByLabel[item.label] ?? item.label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      label: item.label,
      qty: item.qty,
      quantityBasis: 'Home Security tier default from promoted package data.',
    })),
    source: `${sourcePackages}; ${sourceHomeSecurityPackageData}`,
  })),
  ...packageStartingPoints.map((packageItem) => ({
    id: packageItem.id,
    name: packageItem.name,
    categoryId: 'home-security',
    summary: packageItem.customerProblem,
    priceLabel: null,
    solutionIds: catalogSolutions
      .filter((solution) => packageItem.includedTopics.some((topic) => solution.name.includes(topic) || topic.includes(solution.name.split('/')[0].trim())))
      .map((solution) => solution.id),
    hardwareItems: [],
    source: sourceOfferCatalog,
  })),
];

export const catalogHardwareTypeOptions = catalogHardwareItems.map((item) => item.hardwareType);
