"use client";

import { useState } from "react";
import { usePropertyContext } from "../context/PropertyContext";

import { calculateIncomeValuation } from "@/lib/valuation/income";
import type {
  IncomeValuationInput,
  IncomeValuationResult,
} from "@/types/valuation";

import { formatCurrency } from "@/utils/formatCurrency";
import { getCapRate } from "@/lib/market-data/cap-rate";
import { getRentalYield } from "@/lib/market-data/rental-yield";
import { getNairobiZones } from "@/lib/market-data/nairobi-zones";
import DownloadReportButton from "../components/DownloadReportButton";

export default function IncomeValuationPage() {
  const zones = getNairobiZones();
  const { setIncomeResult } = usePropertyContext();

  // ---------------- PROPERTY DETAILS ----------------
  const [property, setProperty] = useState({
    name: "Sample Nairobi Property",
    location: "Nairobi, Kenya",
    address: "",
  });

  const [zone, setZone] = useState("Kilimani");

  const [inputs, setInputs] = useState<
    Omit<IncomeValuationInput, "capRate">
  >({
    grossAnnualRent: 12_000_000,
    vacancyRate: 8,
    operatingExpensesRate: 25,
  });

  const capRate = getCapRate(zone);
  const rentalYield = getRentalYield(zone);

  // Single source of truth
  const result: IncomeValuationResult = calculateIncomeValuation({
    ...inputs,
    capRate,
  });

  // ---------------- HANDLERS ----------------
  function updateAndSync(
    next: Omit<IncomeValuationInput, "capRate">
  ) {
    setInputs(next);

    const valuation = calculateIncomeValuation({
      ...next,
      capRate,
    });

    setIncomeResult(valuation);
  }

  function handleChange(
    field: keyof Omit<IncomeValuationInput, "capRate">,
    value: number
  ) {
    updateAndSync({
      ...inputs,
      [field]: value,
    });
  }

  function handleZoneChange(nextZone: string) {
    setZone(nextZone);

    const nextCapRate = getCapRate(nextZone);

    const valuation = calculateIncomeValuation({
      ...inputs,
      capRate: nextCapRate,
    });

    setIncomeResult(valuation);
  }

  function handlePropertyChange(field: keyof typeof property, value: string) {
    setProperty((prev) => ({ ...prev, [field]: value }));
  }

  // ---------------- RENDER ----------------
  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          Income Valuation (Capitalization)
        </h1>
      <DownloadReportButton property={property} />

      </div>

      {/* Property Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl border">
        <TextInput label="Property Name" value={property.name} onChange={(v) => handlePropertyChange("name", v)} />
        <TextInput label="Location" value={property.location} onChange={(v) => handlePropertyChange("location", v)} />
        <TextInput label="Address" value={property.address} onChange={(v) => handlePropertyChange("address", v)} />
      </div>

      {/* Zone */}
      <div className="bg-white p-6 rounded-xl border">
        <label className="block text-sm text-gray-600 mb-2">
          Nairobi Zone
        </label>
        <select
          value={zone}
          onChange={(e) => handleZoneChange(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          {zones.map((z) => (
            <option key={z.name} value={z.name}>
              {z.name}
            </option>
          ))}
        </select>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl border">
        <NumberInput
          label="Gross Annual Rent (KES)"
          value={inputs.grossAnnualRent}
          onChange={(v) => handleChange("grossAnnualRent", v)}
        />
        <NumberInput
          label="Vacancy Rate (%)"
          value={inputs.vacancyRate}
          onChange={(v) => handleChange("vacancyRate", v)}
        />
        <NumberInput
          label="Operating Expenses (%)"
          value={inputs.operatingExpensesRate}
          onChange={(v) => handleChange("operatingExpensesRate", v)}
        />
        <NumberInput
          label="Capitalization Rate (%)"
          value={capRate}
          readOnly
        />
      </div>

      {/* Metrics */}
      <div className="bg-white p-6 rounded-xl border grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard label="Cap Rate (%)" value={capRate} />
        <MetricCard label="Rental Yield (%)" value={rentalYield} />
        <MetricCard label="NOI" value={result.netOperatingIncome} currency />
        <MetricCard label="Capital Value" value={result.capitalValue} currency />
      </div>

      {/* Result */}
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

/* ---------------- Components ---------------- */

function NumberInput({
  label,
  value,
  onChange,
  readOnly,
}: {
  label: string;
  value: number;
  onChange?: (v: number) => void;
  readOnly?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <input
        type="number"
        value={value}
        readOnly={readOnly}
        onChange={
          onChange ? (e) => onChange(Number(e.target.value)) : undefined
        }
        className="w-full border rounded px-3 py-2 bg-white"
      />
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
    </div>
  );
}

function MetricCard({
  label,
  value,
  currency,
}: {
  label: string;
  value: number;
  currency?: boolean;
}) {
  return (
    <div className="bg-gray-100 p-4 rounded text-center">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-xl font-bold">
        {currency ? formatCurrency(value) : value}
      </p>
    </div>
  );
}
