// models/Report.ts

import type { ValuationType } from "./Valuation";

export interface Report {
  id?: string;

  propertyId: string;
  valuationId: string;

  method: ValuationType;

  fileUrl?: string;

  generatedAt: string;
}
