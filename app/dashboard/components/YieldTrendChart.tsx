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
  { year: "2019", yield: 9.2, label: "9.2%" },
  { year: "2020", yield: 9.0, label: "9.0%" },
  { year: "2021", yield: 8.6, label: "8.6%" },
  { year: "2022", yield: 8.1, label: "8.1%" },
  { year: "2023", yield: 7.6, label: "7.6%" },
  { year: "2024", yield: 7.0, label: "7.0%" },
];

export default function YieldTrend() {
  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="font-semibold mb-4">Yield Trend (%)</h3>

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
          <Line type="monotone" dataKey="yield" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
