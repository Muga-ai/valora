"use client";

import { useState } from "react";
import { calculateIncomeValuation } from "@/lib/valuation/income";
import type {
  IncomeValuationInput,
  IncomeValuationResult,
} from "@/types/valuation";
import { formatCurrency } from "@/utils/formatCurrency";

export default function IncomeValuationPage() {
  const [inputs, setInputs] = useState<IncomeValuationInput>({
    grossAnnualRent: 12000000,
    vacancyRate: 8,
    operatingExpensesRate: 25,
    capRate: 7,
  });

  const result: IncomeValuationResult =
    calculateIncomeValuation(inputs);

  function handleChange(
    field: keyof IncomeValuationInput,
    value: number
  ) {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-2xl font-semibold">
        Income Valuation (Capitalization Method)
      </h1>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl border">
        <InputField
          label="Gross Annual Rent (KES)"
          value={inputs.grossAnnualRent}
          onChange={(v) =>
            handleChange("grossAnnualRent", v)
          }
        />

        <InputField
          label="Vacancy Rate (%)"
          value={inputs.vacancyRate}
          onChange={(v) =>
            handleChange("vacancyRate", v)
          }
        />

        <InputField
          label="Operating Expenses (%)"
          value={inputs.operatingExpensesRate}
          onChange={(v) =>
            handleChange("operatingExpensesRate", v)
          }
        />

        <InputField
          label="Capitalization Rate (%)"
          value={inputs.capRate}
          onChange={(v) =>
            handleChange("capRate", v)
          }
        />
      </div>

      {/* Results */}
      <div className="bg-white p-6 rounded-xl border space-y-2">
        <p>
          <span className="text-gray-500">
            Net Operating Income:
          </span>{" "}
          <strong>
            {formatCurrency(result.netOperatingIncome)}
          </strong>
        </p>

        <p className="text-xl">
          <span className="text-gray-500">
            Capital Value:
          </span>{" "}
          <strong>
            {formatCurrency(result.capitalValue)}
          </strong>
        </p>
      </div>
    </div>
  );
}

/* ---------------- Reusable Input Field ---------------- */

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

function InputField({
  label,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        className="w-full border rounded px-3 py-2"
      />
    </div>
  );
}
