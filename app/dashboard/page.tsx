import MetricCard from "./components/MetricCard";
import PriceTrendChart from "./components/PriceTrendChart";
import YieldTrendChart from "./components/YieldTrendChart";
import MarketDataCard from "./components/MarketDataCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Valuation Overview</h1>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <MetricCard
          title="Estimated Market Value"
          value="KES 45,000,000"
          subtitle="Indicative – Nairobi"
        />
        <MetricCard
          title="Price per Sqm"
          value="KES 145,000"
        />
        <MetricCard
          title="Gross Yield"
          value="7.2%"
        />
        <MetricCard
          title="Net Yield"
          value="5.6%"
        />
        <MetricCard
          title="Comparable Sales"
          value="18"
          subtitle="Last 12 months"
        />
      </div>
      {/* Charts */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <PriceTrendChart />
  <YieldTrendChart />
</div>

{/* Market Data Vault Preview */}
<div className="mt-8">
  <h2 className="text-xl font-semibold mb-4">Market Data (Nairobi)</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <MarketDataCard
      label="Prime Rent (KES / sqm)"
      value="1,250"
      source="Market Survey"
    />
    <MarketDataCard
      label="Vacancy Rate"
      value="8.4%"
      source="Industry Estimates"
    />
    <MarketDataCard
      label="Capitalization Rate"
      value="7.0%"
      source="Valora Models"
    />
    <MarketDataCard
      label="Inflation (YoY)"
      value="6.8%"
      source="KNBS"
    />
  </div>
</div>


      {/* Placeholder Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border p-6 h-64">
          Market Trends (Coming Soon)
        </div>
        <div className="bg-white rounded-xl border p-6 h-64">
          Location Insights (Coming Soon)
        </div>
        <div className="bg-white rounded-xl border p-6 h-64">
          Risk Indicators (Coming Soon)
        </div>
      </div>
    </div>
  );
}
