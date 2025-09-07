interface LeadPipelineTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: {
      stage: string;
      count: number;
      value: string;
    };
  }>;
  label?: string;
}

export default function LeadPipelineTooltip({
  active,
  payload,
  label,
}: LeadPipelineTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
        <p className="font-medium text-gray-900 dark:text-gray-100">{label}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Count: <span className="font-semibold">{payload[0].value}</span>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Value:{" "}
          <span className="font-semibold">{payload[0].payload.value}</span>
        </p>
      </div>
    );
  }
  return null;
}
