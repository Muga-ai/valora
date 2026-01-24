export interface Property {
  id: string;
  name: string;
  location: string;
  landSizeSqm?: number;
  propertyType?: "Residential" | "Commercial" | "MixedUse";

  createdAt: Date;
  updatedAt: Date;
}
