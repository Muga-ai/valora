export interface ConstructionCostDataPoint {
  propertyType: string;
  costPerSqM: number; // in KES
}

// Placeholder construction costs
export const constructionCostData: ConstructionCostDataPoint[] = [
  { propertyType: "Residential", costPerSqM: 40000 },
  { propertyType: "Commercial", costPerSqM: 50000 },
  { propertyType: "Industrial", costPerSqM: 45000 },
  { propertyType: "Hospitality", costPerSqM: 55000 },
];

export function getConstructionCostData(): ConstructionCostDataPoint[] {
  return constructionCostData;
}
