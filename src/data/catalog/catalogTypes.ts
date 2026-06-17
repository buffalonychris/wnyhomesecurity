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

export type CatalogYesNoUnknown = 'yes' | 'no' | 'unknown';
export type CatalogEvidenceConfidence = 'high' | 'medium' | 'low' | 'unknown';
export type CatalogRecordStatus = 'active' | 'planning' | 'needs_review' | 'deprecated' | 'do_not_use';

export type CatalogQualificationStatus =
  | 'approved_standard'
  | 'conditional'
  | 'field_test'
  | 'research_pending'
  | 'premium_custom'
  | 'custom_pass_through_only'
  | 'do_not_use'
  | 'unknown';

export type CatalogHardwareListAction =
  | 'add_to_standard_catalog'
  | 'conditional_catalog_candidate'
  | 'field_test_before_standard_use'
  | 'research_only'
  | 'custom_quote_only'
  | 'exclude_from_standard_use'
  | 'needs_operator_review';

export type CatalogInventoryClassification =
  | 'standard_stock_candidate'
  | 'conditional_stock_candidate'
  | 'special_order'
  | 'custom_pass_through'
  | 'do_not_stock'
  | 'unknown';

export type CatalogValidationStatus = 'validated' | 'partially_validated' | 'needs_validation' | 'not_validated' | 'not_applicable';

export type CatalogHomeAssistantCompatibilityLevel =
  | 'native_or_official'
  | 'community_integration'
  | 'bridge_or_gateway_required'
  | 'cloud_dependent'
  | 'not_supported'
  | 'unknown';

export type CatalogPartCategoryApplicability = {
  home_security: boolean | CatalogYesNoUnknown;
  aging_in_place: boolean | CatalogYesNoUnknown;
  home_automation: boolean | CatalogYesNoUnknown;
  home_safety_environmental: boolean | CatalogYesNoUnknown;
  home_lighting: boolean | CatalogYesNoUnknown;
};

export type CatalogMasterPart = CatalogPartCategoryApplicability & {
  part_id: string;
  brand: string;
  manufacturer: string;
  product_line: string | null;
  product_name: string;
  exact_model: string;
  sku: string | null;
  device_class: string;
  hard_gate_result: string;
  qualification_status: CatalogQualificationStatus;
  master_hardware_list_action: CatalogHardwareListAction;
  inventory_classification: CatalogInventoryClassification;
  approved_for_standard_use: boolean | CatalogYesNoUnknown;
  approved_for_conditional_use: boolean | CatalogYesNoUnknown;
  field_test_required: boolean | CatalogYesNoUnknown;
  research_pending: boolean | CatalogYesNoUnknown;
  custom_pass_through_only: boolean | CatalogYesNoUnknown;
  do_not_use: boolean | CatalogYesNoUnknown;
  customer_facing_outcome: string | null;
  internal_wnyhs_purpose: string | null;
  required_integration_path: string | null;
  home_assistant_compatibility_level: CatalogHomeAssistantCompatibilityLevel;
  ha_green_suitability: string | null;
  vendor_app_role: string | null;
  cloud_role: string | null;
  subscription_role: string | null;
  power_type: string | null;
  network_type: string | null;
  battery_dependency: string | null;
  hub_bridge_dependency: string | null;
  retrofit_suitability: string | null;
  commercial_suitability: string | null;
  dashboard_implications: string | null;
  automation_implications: string | null;
  quote_line_item_role: string | null;
  required_bundled_accessories: string[];
  optional_accessories: string[];
  customer_disclosure_notes: string[];
  installer_notes: string[];
  support_notes: string[];
  warranty_notes: string[];
  stocking_recommendation: string | null;
  validation_status: CatalogValidationStatus;
  required_wnyhs_validation_tests: string[];
  evidence_confidence: CatalogEvidenceConfidence;
  primary_evidence_sources: string[];
  missing_evidence: string[];
  source: string;
  record_status: CatalogRecordStatus;
  last_evaluated_date: string | null;
  next_review_date: string | null;
};

export type CatalogSolutionPartMapping = {
  solutionId: string;
  recommendedPartIds: string[];
  allowedPartIds: string[];
  notes?: string | null;
};

export type CatalogPackagePartMapping = {
  packageId: string;
  partIds: string[];
  quantityBasis: string;
  notes?: string | null;
};

export type CatalogHardwareLabelPartMapping = {
  hardwareLabelOrType: string;
  candidatePartIds: string[];
  notes?: string | null;
};
