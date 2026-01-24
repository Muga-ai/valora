export interface ResidualYieldDataPoint {
  month: string;
  yield: number; // %
}

// Placeholder yield assumptions
export const residualYieldData: ResidualYieldDataPoint[] = [
  { month: "Jan", yield: 7 },
  { month: "Feb", yield: 7.1 },
  { month: "Mar", yield: 7.2 },
  { month: "Apr", yield: 7.1 },
  { month: "May", yield: 7 },
  { month: "Jun", yield: 7.3 },
];

export function getResidualYieldData(): ResidualYieldDataPoint[] {
  return residualYieldData;
}
