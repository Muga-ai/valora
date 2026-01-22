export interface IncomeValuationInput {
  grossAnnualRent: number;
  vacancyRate: number;
  operatingExpensesRate: number;
  capRate: number;
}

export interface IncomeValuationResult {
  netOperatingIncome: number;
  capitalValue: number;
}
