import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  FileText,
  MapPinned,
  TrendingUp,
  Users,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <span className="inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-600">
              Valora KE — Professional Property Valuation
            </span>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
              Confident Property Valuation,
              <span className="block text-slate-600">
                Powered by Nairobi Market Intelligence
              </span>
            </h1>

            <p className="max-w-xl text-lg text-slate-600">
              Perform Income, Sales Comparison, Cost, and Residual valuations
              using localized market data, valuation-grade assumptions, and
              professional reporting — all in one dashboard.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-white font-medium hover:bg-slate-800 transition"
              >
                Launch Valuation Dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>

              <span className="text-sm text-slate-500">
                Built for valuers, investors & developers
              </span>
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-200 to-slate-50 shadow-inner" />
            <div className="relative rounded-3xl border bg-white p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <StatCard title="Avg Rental Yield" value="8.2%" />
                <StatCard title="Cap Rate (Nairobi)" value="9.5%" />
                <StatCard title="Active Zones" value="45+" />
                <StatCard title="Valuation Models" value="4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUATION METHODS ================= */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Comprehensive Valuation Approaches
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Apply industry-standard valuation methodologies using structured
            inputs and market-aligned assumptions.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <MethodCard
              icon={<TrendingUp />}
              title="Income Approach"
              desc="Capitalization and DCF-based valuation using rental income and yields."
            />
            <MethodCard
              icon={<BarChart3 />}
              title="Sales Comparison"
              desc="Comparable-based valuation aligned to location, use, and market trends."
            />
            <MethodCard
              icon={<Building2 />}
              title="Cost Approach"
              desc="Replacement cost analysis adjusted for depreciation and site value."
            />
            <MethodCard
              icon={<FileText />}
              title="Residual Valuation"
              desc="Development feasibility and land value assessment."
            />
          </div>
        </div>
      </section>

      {/* ================= MARKET INTELLIGENCE ================= */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Nairobi Market Intelligence, Built In
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl">
              Valora KE integrates Nairobi-specific zoning patterns, rental
              benchmarks, capitalization rates, and locality trends — designed
              to reflect real valuation practice on the ground.
            </p>

            <ul className="mt-8 space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <MapPinned className="h-5 w-5 text-slate-900" />
                Zone-based rental and yield benchmarks
              </li>
              <li className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-slate-900" />
                Market-aligned capitalization assumptions
              </li>
              <li className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-slate-900" />
                Property-type specific analytics
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-8 shadow-inner">
            <p className="text-sm font-medium text-slate-500 mb-4">
              Example Market Snapshot
            </p>
            <div className="space-y-3">
              <Snapshot label="Westlands – Office Yield" value="8.5%" />
              <Snapshot label="Kilimani – Residential Rent" value="KES 120k" />
              <Snapshot label="Upper Hill – Cap Rate" value="9.2%" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO IT’S FOR ================= */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Designed for Serious Property Professionals
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <AudienceCard title="Valuers & Surveyors" />
            <AudienceCard title="Developers" />
            <AudienceCard title="Banks & Lenders" />
            <AudienceCard title="Investors & Asset Managers" />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Start Valuing Property with Confidence
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300">
            One dashboard. Multiple valuation models. Nairobi market intelligence.
          </p>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-slate-900 font-medium hover:bg-slate-100 transition"
          >
            Open Valora Dashboard
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ================= SMALL UI COMPONENTS ================= */

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  );
}

function MethodCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function Snapshot({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between rounded-lg bg-white px-4 py-3 text-sm shadow-sm">
      <span className="text-slate-600">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function AudienceCard({ title }: { title: string }) {
  return (
    <div className="rounded-xl border bg-white p-6 text-center shadow-sm">
      <Users className="mx-auto mb-3 h-6 w-6 text-slate-900" />
      <p className="font-medium">{title}</p>
    </div>
  );
}
