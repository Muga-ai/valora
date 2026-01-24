"use client";

import { usePropertyContext } from "../context/PropertyContext";
import { formatCurrency } from "@/utils/formatCurrency";

export default function ValuationInsights() {
  const { income, sales, cost, residual } = usePropertyContext();

  const insights: string[] = [];

  if (income && sales) {
    const diff =
      income.capitalValue - sales.finalValue;

    insights.push(
      diff > 0
        ? "Income approach suggests a premium over market comparables, indicating strong rental fundamentals."
        : "Sales comparables exceed income value, suggesting possible yield compression."
    );
  }

  if (cost && sales && cost.totalValue > sales.finalValue) {
    insights.push(
      "Replacement cost exceeds market value — new development may be economically unviable."
    );
  }

  if (residual && residual.residualValue > 0) {
    insights.push(
      "Positive residual value indicates feasible development opportunity."
    );
  }

  if (!insights.length) {
    insights.push(
      "Complete at least two valuation methods to unlock analytical insights."
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl border">
      <h3 className="font-semibold mb-4">Valuation Insights</h3>

      <ul className="space-y-3 text-sm text-gray-700">
        {insights.map((text, i) => (
          <li
            key={i}
            className="flex items-start gap-2"
          >
            <span className="text-blue-600 mt-1">●</span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
