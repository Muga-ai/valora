export interface DepreciationDataPoint {
  propertyAge: number; // in years
  depreciationPercent: number; // %
}

// Placeholder depreciation percentages
export const depreciationData: DepreciationDataPoint[] = [
  { propertyAge: 0, depreciationPercent: 0 },
  { propertyAge: 5, depreciationPercent: 5 },
  { propertyAge: 10, depreciationPercent: 10 },
  { propertyAge: 15, depreciationPercent: 15 },
  { propertyAge: 20, depreciationPercent: 20 },
];

export function getDepreciationData(): DepreciationDataPoint[] {
  return depreciationData;
}
