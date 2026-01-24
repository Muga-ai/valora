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

export interface SalesValuationInput {
  comparableSales: number;
  salePrices: number[];
  adjustments: number[];
}

export interface SalesValuationResult {
  adjustedAverage: number;
  finalValue: number;
}

export interface CostValuationInput {
  replacementCost: number;
  depreciationRate: number;
  landValue: number;
}

export interface CostValuationResult {
  depreciatedCost: number;
  totalValue: number;
}

export interface ResidualValuationInput {
  grossDevelopmentValue: number;
  developmentCosts: number;
  interestRate: number;
}

export interface ResidualValuationResult {
  residualValue: number;
}
