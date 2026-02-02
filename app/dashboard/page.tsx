"use client";

import Link from "next/link";
import { usePropertyContext } from "./context/PropertyContext";
import DownloadReportButton from "./components/DownloadReportButton";

import MetricCard from "./components/MetricCard";
import PriceTrendChart from "./components/PriceTrendChart";
import YieldTrendChart from "./components/YieldTrendChart";
import MarketDataCard from "./components/MarketDataCard";
import ValuationInsights from "./components/ValuationInsights";

export default function DashboardPage() {
  const { income, sales, cost, residual } = usePropertyContext();

  /* ---------------- METRICS ---------------- */
  const metrics = [
    {
      title: "Income Approach",
      value: income ? `KES ${income.capitalValue.toLocaleString()}` : "—",
    },
    {
      title: "Sales Comparison",
      value: sales ? `KES ${sales.finalValue.toLocaleString()}` : "—",
    },
    {
      title: "Cost Approach",
      value: cost ? `KES ${cost.totalValue.toLocaleString()}` : "—",
    },
    {
      title: "Residual Value",
      value: residual ? `KES ${residual.residualValue.toLocaleString()}` : "—",
    },
  ];

  /* ---------------- MARKET DATA ---------------- */
  const marketData = [
    { label: "Prime Rent (KES / sqm)", value: "1,250", source: "Market Survey" },
    { label: "Vacancy Rate", value: "8.4%", source: "Industry Estimates" },
    { label: "Capitalization Rate", value: "7.0%", source: "Valora Models" },
    { label: "Inflation (YoY)", value: "6.8%", source: "KNBS" },
  ];

  /* ---------------- VALUATION METHODS ---------------- */
  const valuationMethods = [
    {
      title: "Income Approach",
      link: "/dashboard/income",
      description: "Capitalization and DCF using rental yields.",
      value: income ? `KES ${income.capitalValue.toLocaleString()}` : "—",
    },
    {
      title: "Sales Comparison",
      link: "/dashboard/sales",
      description: "Comparable market-based valuation.",
      value: sales ? `KES ${sales.finalValue.toLocaleString()}` : "—",
    },
    {
      title: "Cost Approach",
      link: "/dashboard/cost",
      description: "Replacement cost minus depreciation.",
      value: cost ? `KES ${cost.totalValue.toLocaleString()}` : "—",
    },
    {
      title: "Residual Valuation",
      link: "/dashboard/residual",
      description: "Development feasibility & land value.",
      value: residual ? `KES ${residual.residualValue.toLocaleString()}` : "—",
    },
  ];

  /* ====================== UI ====================== */
  return (
    <div className="space-y-10">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Property Valuation Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Consolidated valuation overview & market intelligence
          </p>
        </div>

        <DownloadReportButton
  property={{
    name: "Sample Nairobi Property",
    location: "Nairobi, Kenya",
    address: "123 Riverside Drive",
  }}
/>

      </div>

      {/* ================= METRICS ================= */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <MetricCard
              key={m.title}
              title={m.title}   
              value={m.value}
            />
          ))}
        </div>
      </section>

      {/* ================= CHARTS ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <h2 className="font-semibold mb-4">Price Trends</h2>
          <PriceTrendChart />
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <h2 className="font-semibold mb-4">Yield Trends</h2>
          <YieldTrendChart />
        </div>
      </section>

      {/* ================= MARKET DATA ================= */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Nairobi Market Indicators
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketData.map((m) => (
            <MarketDataCard
              key={m.label}
              label={m.label}
              value={m.value}
              source={m.source}   // optional
            />
          ))}
        </div>
      </section>

      {/* ================= VALUATION METHODS ================= */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Valuation Methodologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuationMethods.map((vm) => (
            <Link
              key={vm.title}
              href={vm.link}
              className="group bg-white rounded-2xl border p-6 transition hover:shadow-lg"
            >
              <h3 className="font-semibold mb-2 group-hover:text-blue-600">
                {vm.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {vm.description}
              </p>
              <p className="text-lg font-bold text-gray-900">
                {vm.value}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= INSIGHTS ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ValuationInsights />
        <ValuationInsights />
        <ValuationInsights />
      </section>
    </div>
  );
}
