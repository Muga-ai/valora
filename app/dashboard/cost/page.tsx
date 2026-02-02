"use client";

import { useState } from "react";
import { calculateCostValuation } from "@/lib/valuation/cost";
import type { CostValuationInput, CostValuationResult } from "@/types/valuation";
import { formatCurrency } from "@/utils/formatCurrency";
import DownloadReportButton from "../components/DownloadReportButton";
import { usePropertyContext } from "../context/PropertyContext";
import { useEffect } from "react";

export default function CostValuationPage() {
  const [property, setProperty] = useState({
    name: "Sample Nairobi Property",
    location: "Nairobi, Kenya",
    address: "",
  });

  const [inputs, setInputs] = useState<CostValuationInput>({
    replacementCost: 15000000,
    depreciationRate: 10,
    landValue: 5000000,
  });
  const { setCostResult } = usePropertyContext();

 const result: CostValuationResult = calculateCostValuation(inputs);

useEffect(() => {
  setCostResult(result);
}, [result, setCostResult]);


  function handleChange(field: keyof CostValuationInput, value: number) {
    setInputs((prev) => ({ ...prev, [field]: value }));
  }

  function handlePropertyChange(field: keyof typeof property, value: string) {
    setProperty((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Cost Approach Valuation</h1>
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
        <NumberInput label="Replacement Cost (KES)" value={inputs.replacementCost} onChange={(v) => handleChange("replacementCost", v)} />
        <NumberInput label="Depreciation Rate (%)" value={inputs.depreciationRate} onChange={(v) => handleChange("depreciationRate", v)} />
        <NumberInput label="Land Value (KES)" value={inputs.landValue} onChange={(v) => handleChange("landValue", v)} />
      </div>

      {/* Results */}
      <div className="bg-white p-6 rounded-xl border space-y-2">
        <p>
          <span className="text-gray-500">Depreciated Cost:</span> <strong>{formatCurrency(result.depreciatedCost)}</strong>
        </p>
        <p className="text-xl">
          <span className="text-gray-500">Total Value:</span> <strong>{formatCurrency(result.totalValue)}</strong>
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
