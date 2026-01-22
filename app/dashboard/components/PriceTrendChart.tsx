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
  { year: "2020", price: 95000 },
  { year: "2021", price: 105000 },
  { year: "2022", price: 120000 },
  { year: "2023", price: 135000 },
  { year: "2024", price: 145000 },
];

export default function PriceTrendChart() {
  return (
    <div className="bg-white border rounded-xl p-6">
      <h3 className="font-semibold mb-4">Price Trend (KES / Sqm)</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
