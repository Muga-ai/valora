"use client";

import { useState } from "react";
import { calculateSalesValuation } from "@/lib/valuation/sales";
import type { SalesValuationInput, SalesValuationResult } from "@/types/valuation";
import { formatCurrency } from "@/utils/formatCurrency";
import DownloadReportButton from "../components/DownloadReportButton";
import { usePropertyContext } from "../context/PropertyContext";
import { useEffect } from "react";


export default function SalesValuationPage() {
  const [property, setProperty] = useState({
    name: "Sample Nairobi Property",
    location: "Nairobi, Kenya",
    address: "",
  });
  const { setSalesResult } = usePropertyContext();
  const [inputs, setInputs] = useState<SalesValuationInput>({
    comparableSales: 5,
    salePrices: [10000000, 12000000, 11500000, 12500000, 11000000],
    adjustments: [0, 0, 0, 0, 0],
  });

  const result: SalesValuationResult = calculateSalesValuation(inputs);

useEffect(() => {
  setSalesResult(result);
}, [result, setSalesResult]);


  function handleNumberArrayChange(index: number, field: "salePrices" | "adjustments", value: number) {
    setInputs((prev) => ({
      ...prev,
      [field]: prev[field].map((v, i) => (i === index ? value : v)),
    }));
  }

  function handlePropertyChange(field: keyof typeof property, value: string) {
    setProperty((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Sales Comparison Valuation</h1>
        <DownloadReportButton property={property} />
      </div>

      {/* Property Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl border">
        <TextInput label="Property Name" value={property.name} onChange={(v) => handlePropertyChange("name", v)} />
        <TextInput label="Location" value={property.location} onChange={(v) => handlePropertyChange("location", v)} />
        <TextInput label="Address" value={property.address} onChange={(v) => handlePropertyChange("address", v)} />
      </div>

      {/* Inputs */}
      <div className="bg-white p-6 rounded-xl border space-y-4">
        {inputs.salePrices.map((price, i) => (
          <div key={i} className="grid grid-cols-2 gap-4">
            <NumberInput label={`Sale Price #${i + 1} (KES)`} value={price} onChange={(v) => handleNumberArrayChange(i, "salePrices", v)} />
            <NumberInput label={`Adjustment #${i + 1} (KES)`} value={inputs.adjustments[i]} onChange={(v) => handleNumberArrayChange(i, "adjustments", v)} />
          </div>
        ))}
      </div>

      {/* Results */}
      <div className="bg-white p-6 rounded-xl border space-y-2">
        <p>
          <span className="text-gray-500">Adjusted Average Sale Price:</span> <strong>{formatCurrency(result.adjustedAverage)}</strong>
        </p>
        <p className="text-xl">
          <span className="text-gray-500">Final Value:</span> <strong>{formatCurrency(result.finalValue)}</strong>
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
