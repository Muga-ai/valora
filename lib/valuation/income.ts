import { IncomeValuationInput, IncomeValuationResult } from "@/types/valuation";

export function calculateIncomeValuation(
  input: IncomeValuationInput
): IncomeValuationResult {
  const vacancyLoss =
    input.grossAnnualRent * (input.vacancyRate / 100);

  const effectiveGrossIncome =
    input.grossAnnualRent - vacancyLoss;

  const operatingExpenses =
    effectiveGrossIncome *
    (input.operatingExpensesRate / 100);

  const netOperatingIncome =
    effectiveGrossIncome - operatingExpenses;

  const capitalValue =
    netOperatingIncome / (input.capRate / 100);

  return {
    netOperatingIncome,
    capitalValue,
  };
}
