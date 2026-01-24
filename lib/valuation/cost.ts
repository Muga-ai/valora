import type { CostValuationInput, CostValuationResult } from "@/types/valuation";

export function calculateCostValuation(
  input: CostValuationInput
): CostValuationResult {
  const depreciatedCost =
    input.replacementCost * (1 - input.depreciationRate / 100);

  const totalValue = depreciatedCost + input.landValue;

  return {
    depreciatedCost,
    totalValue,
  };
}
