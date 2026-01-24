export interface SalesComparisonDataPoint {
  month: string;
  pricePerSqM: number;
}

// Placeholder data for Nairobi sales
export const salesComparisonData: SalesComparisonDataPoint[] = [
  { month: "Jan", pricePerSqM: 150000 },
  { month: "Feb", pricePerSqM: 152000 },
  { month: "Mar", pricePerSqM: 151500 },
  { month: "Apr", pricePerSqM: 153000 },
  { month: "May", pricePerSqM: 154000 },
  { month: "Jun", pricePerSqM: 155000 },
];

export function getSalesComparisonData(): SalesComparisonDataPoint[] {
  return salesComparisonData;
}
