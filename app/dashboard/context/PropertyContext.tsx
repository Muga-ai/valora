"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type {
  IncomeValuationResult,
  SalesValuationResult,
  CostValuationResult,
  ResidualValuationResult,
} from "@/types/valuation";

/* ---------------- TYPES ---------------- */

interface PropertyValuationState {
  income?: IncomeValuationResult;
  sales?: SalesValuationResult;
  cost?: CostValuationResult;
  residual?: ResidualValuationResult;
}

interface PropertyContextValue extends PropertyValuationState {
  setIncomeResult: (result: IncomeValuationResult) => void;
  setSalesResult: (result: SalesValuationResult) => void;
  setCostResult: (result: CostValuationResult) => void;
  setResidualResult: (result: ResidualValuationResult) => void;
  resetValuations: () => void;
}

/* ---------------- CONTEXT ---------------- */

const PropertyContext = createContext<PropertyContextValue | undefined>(
  undefined
);

/* ---------------- PROVIDER ---------------- */

export function PropertyProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PropertyValuationState>({});

  const setIncomeResult = (result: IncomeValuationResult) => {
    setState((prev) => ({ ...prev, income: result }));
  };

  const setSalesResult = (result: SalesValuationResult) => {
    setState((prev) => ({ ...prev, sales: result }));
  };

  const setCostResult = (result: CostValuationResult) => {
    setState((prev) => ({ ...prev, cost: result }));
  };

  const setResidualResult = (result: ResidualValuationResult) => {
    setState((prev) => ({ ...prev, residual: result }));
  };

  const resetValuations = () => {
    setState({});
  };

  return (
    <PropertyContext.Provider
      value={{
        ...state,
        setIncomeResult,
        setSalesResult,
        setCostResult,
        setResidualResult,
        resetValuations,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
}

/* ---------------- HOOK ---------------- */

export function usePropertyContext(): PropertyContextValue {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error(
      "usePropertyContext must be used within a PropertyProvider"
    );
  }
  return context;
}
