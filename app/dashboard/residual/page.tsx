"use client";

import { useState } from "react";
import { calculateResidualValuation } from "@/lib/valuation/residual";
import type { ResidualValuationInput, ResidualValuationResult } from "@/types/valuation";
import { formatCurrency } from "@/utils/formatCurrency";
import DownloadReportButton from "../components/DownloadReportButton";

export default function ResidualValuationPage() {
  const [property, setProperty] = useState({
    name: "Sample Nairobi Property",
    location: "Nairobi, Kenya",
    address: "",
  });

  const [inputs, setInputs] = useState<ResidualValuationInput>({
    grossDevelopmentValue: 30000000,
    developmentCosts: 20000000,
    interestRate: 5,
  });

  const result: ResidualValuationResult = calculateResidualValuation(inputs);

  function handleChange(field: keyof ResidualValuationInput, value: number) {
    setInputs((prev) => ({ ...prev, [field]: value }));
  }

  function handlePropertyChange(field: keyof typeof property, value: string) {
    setProperty((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Residual Valuation</h1>
        <DownloadReportButton property={property} />
      </div>

      {/* Property Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl border">
        <TextInput label="Property Name" value={property.name} onChange={(v) => handlePropertyChange("name", v)} />
        <TextInput label="Location" value={property.location} onChange={(v) => handlePropertyChange("location", v)} />
        <TextInput label="Address" value={property.address} onChange={(v) => handlePropertyChange("address", v)} />
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl border">
        <NumberInput label="Gross Development Value (KES)" value={inputs.grossDevelopmentValue} onChange={(v) => handleChange("grossDevelopmentValue", v)} />
        <NumberInput label="Development Costs (KES)" value={inputs.developmentCosts} onChange={(v) => handleChange("developmentCosts", v)} />
        <NumberInput label="Interest Rate (%)" value={inputs.interestRate} onChange={(v) => handleChange("interestRate", v)} />
      </div>

      {/* Results */}
      <div className="bg-white p-6 rounded-xl border space-y-2">
        <p>
          <span className="text-gray-500">Residual Value:</span> <strong>{formatCurrency(result.residualValue)}</strong>
        </p>
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */
function NumberInput({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <input type="number" value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full border rounded px-3 py-2" />
    </div>
  );
}

function TextInput({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="w-full border rounded px-3 py-2" />
    </div>
  );
}
