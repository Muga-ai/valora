"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2019", price: 180000, label: "KES 180,000" },
  { year: "2020", price: 195000, label: "KES 195,000" },
  { year: "2021", price: 215000, label: "KES 215,000" },
  { year: "2022", price: 245000, label: "KES 245,000" },
  { year: "2023", price: 280000, label: "KES 280,000" },
  { year: "2024", price: 315000, label: "KES 315,000" },
];

export default function PriceTrend() {
  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="font-semibold mb-4">Price Trend (KES / sqm)</h3>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null;
              return (
                <div className="bg-white border rounded px-3 py-2 text-sm">
                  <p>{payload[0].payload.year}</p>
                  <p className="font-semibold">
                    {payload[0].payload.label}
                  </p>
                </div>
              );
            }}
          />
          <Line type="monotone" dataKey="price" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
