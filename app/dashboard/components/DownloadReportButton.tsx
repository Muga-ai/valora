"use client";

import { generatePdfReport } from "@/lib/pdf/generate-report";
import { usePropertyContext } from "@/app/dashboard/context/PropertyContext";

interface Property {
  name: string;
  location: string;
  address?: string;
}

interface Props {
  property: Property;
}

export default function DownloadReportButton({ property }: Props) {
  const { income, sales, cost, residual } = usePropertyContext();

  const handleDownload = () => {
    const doc = generatePdfReport({
      property,
      income,
      sales,
      cost,
      residual,
    });

    doc.save("valuation-report.pdf");
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
    >
      Download PDF Report
    </button>
  );
}
