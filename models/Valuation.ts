// models/Valuation.ts

import type {
  IncomeValuationResult,
  SalesValuationResult,
  CostValuationResult,
  ResidualValuationResult,
} from "@/types/valuation";

export type ValuationType =
  | "income"
  | "sales"
  | "cost"
  | "residual";

export interface Valuation {
  id?: string;

  propertyId: string;
  type: ValuationType;

  income?: IncomeValuationResult;
  sales?: SalesValuationResult;
  cost?: CostValuationResult;
  residual?: ResidualValuationResult;

  createdAt?: string;
}

export {};
