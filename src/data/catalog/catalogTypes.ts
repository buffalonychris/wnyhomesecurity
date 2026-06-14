export type CatalogStatus = 'active' | 'draft' | 'planning' | 'quote_reviewed' | 'custom' | 'temporary';

export type CatalogCategory = {
  id: string;
  name: string;
  description: string;
  status: CatalogStatus;
};

export type CatalogHardwareItem = {
  id: string;
  label: string;
  hardwareType: string;
  quantityBasis?: string | null;
  defaultQty?: number | null;
  customerFacingPurpose: string;
  technicalPurpose?: string | null;
  haCompatibilityStatus: 'supported' | 'candidate' | 'site_review_required' | 'unknown';
  protocol?: string | null;
  stockingStatus?: 'standard_candidate' | 'site_review_required' | 'future_work' | 'unknown' | null;
  vaultExcluded?: boolean;
  controlPlaneKitMember?: boolean;
  dashboardImplication?: string | null;
  installerNote?: string | null;
  source: string;
};

export type CatalogPackageHardwareItem = {
  hardwareItemId: string;
  label: string;
  qty: number | null;
  quantityBasis?: string | null;
};

export type CatalogPackage = {
  id: string;
  name: string;
  categoryId: string;
  summary: string;
  priceLabel: string | null;
  solutionIds: string[];
  hardwareItems: CatalogPackageHardwareItem[];
  source: string;
};

export type CatalogSolution = {
  id: string;
  name: string;
  categoryId: string;
  packageIds: string[];
  customerConcernsAddressed: string[];
  summary: string;
  notes?: string | null;
  source: string;
};
