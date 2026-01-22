"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2020", yield: 6.8 },
  { year: "2021", yield: 7.1 },
  { year: "2022", yield: 7.5 },
  { year: "2023", yield: 7.3 },
  { year: "2024", yield: 7.2 },
];

export default function YieldTrendChart() {
  return (
    <div className="bg-white border rounded-xl p-6">
      <h3 className="font-semibold mb-4">Gross Yield Trend (%)</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="yield"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
