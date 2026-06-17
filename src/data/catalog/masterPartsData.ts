import type { CatalogHardwareLabelPartMapping, CatalogMasterPart, CatalogPackagePartMapping, CatalogSolutionPartMapping } from './catalogTypes';

// CATALOG002 establishes the exact part-number layer without backfilling the
// hardware registry. Keep this file-backed source empty until a bounded import
// or validation task promotes supported records from governance/source evidence.
export const catalogMasterParts: CatalogMasterPart[] = [];
export const masterParts = catalogMasterParts;

export const catalogSolutionPartMappings: CatalogSolutionPartMapping[] = [];
export const catalogPackagePartMappings: CatalogPackagePartMapping[] = [];
export const catalogHardwareLabelPartMappings: CatalogHardwareLabelPartMapping[] = [];

export const masterPartsByPartId: ReadonlyMap<string, CatalogMasterPart> = new Map(
  catalogMasterParts.map((part) => [part.part_id, part]),
);

export const getCatalogMasterPartById = (partId: string): CatalogMasterPart | undefined => masterPartsByPartId.get(partId);

export const getCatalogSolutionPartMapping = (solutionId: string): CatalogSolutionPartMapping | undefined =>
  catalogSolutionPartMappings.find((mapping) => mapping.solutionId === solutionId);

export const getCatalogPackagePartMapping = (packageId: string): CatalogPackagePartMapping | undefined =>
  catalogPackagePartMappings.find((mapping) => mapping.packageId === packageId);

export const getCatalogHardwareLabelPartMapping = (hardwareLabelOrType: string): CatalogHardwareLabelPartMapping | undefined =>
  catalogHardwareLabelPartMappings.find((mapping) => mapping.hardwareLabelOrType === hardwareLabelOrType);
