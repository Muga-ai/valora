export interface ResidualCostsDataPoint {
  month: string;
  developmentCost: number; // KES
}

// Placeholder development costs
export const residualCostsData: ResidualCostsDataPoint[] = [
  { month: "Jan", developmentCost: 5000000 },
  { month: "Feb", developmentCost: 5100000 },
  { month: "Mar", developmentCost: 5200000 },
  { month: "Apr", developmentCost: 5300000 },
  { month: "May", developmentCost: 5400000 },
  { month: "Jun", developmentCost: 5500000 },
];

export function getResidualCostsData(): ResidualCostsDataPoint[] {
  return residualCostsData;
}
