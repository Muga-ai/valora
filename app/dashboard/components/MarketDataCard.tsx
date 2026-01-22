interface MarketDataCardProps {
  label: string;
  value: string;
  source?: string;
}

export default function MarketDataCard({
  label,
  value,
  source,
}: MarketDataCardProps) {
  return (
    <div className="bg-white border rounded-lg p-4">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
      {source && (
        <p className="text-xs text-gray-400 mt-1">
          Source: {source}
        </p>
      )}
    </div>
  );
}
