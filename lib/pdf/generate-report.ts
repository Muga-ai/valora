"use client";

import { jsPDF } from "jspdf";
import type {
  IncomeValuationResult,
  SalesValuationResult,
  CostValuationResult,
  ResidualValuationResult,
} from "@/types/valuation";

export interface Property {
  name: string;
  location: string;
  address?: string;
}

export interface ValuationReportData {
  property: Property;
  income?: IncomeValuationResult;
  sales?: SalesValuationResult;
  cost?: CostValuationResult;
  residual?: ResidualValuationResult;
}

export function generatePdfReport(data: ValuationReportData) {
  const doc = new jsPDF();

  // Header
  doc.setFontSize(18);
  doc.text(`Valuation Report: ${data.property.name}`, 20, 20);
  doc.setFontSize(12);
  doc.text(`Location: ${data.property.location}`, 20, 28);
  if (data.property.address) {
    doc.text(`Address: ${data.property.address}`, 20, 36);
  }
  doc.text(`Generated: ${new Date().toLocaleString()}`, 20, 44);

  let y = 54;

  // Income
  if (data.income) {
    doc.setFontSize(14);
    doc.text("Income Approach", 20, y);
    y += 6;
    doc.setFontSize(12);
    doc.text(
      `Net Operating Income: KES ${data.income.netOperatingIncome.toLocaleString()}`,
      20,
      y
    );
    y += 6;
    doc.text(
      `Capital Value: KES ${data.income.capitalValue.toLocaleString()}`,
      20,
      y
    );
    y += 10;
  }

  // Sales
  if (data.sales) {
    doc.setFontSize(14);
    doc.text("Sales Comparison", 20, y);
    y += 6;
    doc.setFontSize(12);
    doc.text(
      `Adjusted Average: KES ${data.sales.adjustedAverage.toLocaleString()}`,
      20,
      y
    );
    y += 6;
    doc.text(`Final Value: KES ${data.sales.finalValue.toLocaleString()}`, 20, y);
    y += 10;
  }

  // Cost
  if (data.cost) {
    doc.setFontSize(14);
    doc.text("Cost Approach", 20, y);
    y += 6;
    doc.setFontSize(12);
    doc.text(
      `Depreciated Cost: KES ${data.cost.depreciatedCost.toLocaleString()}`,
      20,
      y
    );
    y += 6;
    doc.text(`Total Value: KES ${data.cost.totalValue.toLocaleString()}`, 20, y);
    y += 10;
  }

  // Residual
  if (data.residual) {
    doc.setFontSize(14);
    doc.text("Residual Valuation", 20, y);
    y += 6;
    doc.setFontSize(12);
    doc.text(
      `Residual Value: KES ${data.residual.residualValue.toLocaleString()}`,
      20,
      y
    );
    y += 10;
  }

  return doc;
}
