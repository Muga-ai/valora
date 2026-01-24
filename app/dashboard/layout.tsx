"use client";

import Link from "next/link";
import { PropertyProvider } from "./context/PropertyContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PropertyProvider>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200">
          <div className="p-6 font-bold text-xl">Valora KE</div>

          <nav className="px-4 space-y-2">
            <Link
              href="/dashboard"
              className="block px-4 py-2 rounded hover:bg-gray-100"
            >
              Overview
            </Link>

            <h2 className="px-4 py-2 mt-4 text-gray-500 uppercase text-xs font-semibold">
              Valuation Methods
            </h2>

            <Link
              href="/dashboard/income"
              className="block px-4 py-2 rounded hover:bg-gray-100"
            >
              Income Valuation
            </Link>

            <Link
              href="/dashboard/sales"
              className="block px-4 py-2 rounded hover:bg-gray-100"
            >
              Sales Comparison
            </Link>

            <Link
              href="/dashboard/cost"
              className="block px-4 py-2 rounded hover:bg-gray-100"
            >
              Cost Approach
            </Link>

            <Link
              href="/dashboard/residual"
              className="block px-4 py-2 rounded hover:bg-gray-100"
            >
              Residual Valuation
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex gap-4">
              {["Residential", "Commercial", "Industrial", "Land", "Hospitality"].map(
                (type) => (
                  <div
                    key={type}
                    className="px-4 py-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 text-sm"
                  >
                    {type}
                  </div>
                )
              )}
            </div>
          </header>

          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </PropertyProvider>
  );
}
