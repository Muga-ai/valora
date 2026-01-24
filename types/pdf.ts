import type {
  IncomeValuationResult,
  SalesValuationResult,
  CostValuationResult,
  ResidualValuationResult,
} from "./valuation";

export interface ValuationReport {
  propertyName: string;
  generatedAt: Date;

  income?: IncomeValuationResult;
  sales?: SalesValuationResult;
  cost?: CostValuationResult;
  residual?: ResidualValuationResult;
}
