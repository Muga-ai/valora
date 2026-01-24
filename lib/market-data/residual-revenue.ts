export interface ResidualRevenueDataPoint {
  month: string;
  projectedRevenue: number; // KES
}

// Placeholder projected revenue
export const residualRevenueData: ResidualRevenueDataPoint[] = [
  { month: "Jan", projectedRevenue: 10000000 },
  { month: "Feb", projectedRevenue: 10200000 },
  { month: "Mar", projectedRevenue: 10400000 },
  { month: "Apr", projectedRevenue: 10600000 },
  { month: "May", projectedRevenue: 10800000 },
  { month: "Jun", projectedRevenue: 11000000 },
];

export function getResidualRevenueData(): ResidualRevenueDataPoint[] {
  return residualRevenueData;
}
