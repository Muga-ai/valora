// models/MarketData.ts

export interface MarketData {
  id?: string;

  location: string;

  averageRent?: number;
  averageSalePrice?: number;
  capRate?: number;

  source?: string;

  lastUpdated: string;
}
