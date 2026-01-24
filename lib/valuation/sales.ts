import type { SalesValuationInput, SalesValuationResult } from "@/types/valuation";

export function calculateSalesValuation(
  input: SalesValuationInput
): SalesValuationResult {
  const adjustedPrices = input.salePrices.map(
    (price, i) => price + input.adjustments[i]
  );

  const adjustedAverage =
    adjustedPrices.reduce((sum, val) => sum + val, 0) /
    adjustedPrices.length;

  return {
    adjustedAverage,
    finalValue: adjustedAverage,
  };
}
