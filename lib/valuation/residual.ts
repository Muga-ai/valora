import type { ResidualValuationInput, ResidualValuationResult } from "@/types/valuation";

export function calculateResidualValuation(
  input: ResidualValuationInput
): ResidualValuationResult {
  const residualValue =
    input.grossDevelopmentValue - input.developmentCosts;
  // optionally adjust for interest
  const interestAdjustment = residualValue * (input.interestRate / 100);

  return {
    residualValue: residualValue - interestAdjustment,
  };
}
