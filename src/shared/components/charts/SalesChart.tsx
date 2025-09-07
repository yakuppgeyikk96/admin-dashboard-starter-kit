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
import { SaleChartItem } from "@/features/analytics/types";
import { SALES_CHART_CONFIG } from "@/shared/utils/charts/chartConfigs";

export interface SalesChartProps {
  data: SaleChartItem[];
  height?: number;
  className?: string;
}

export default function SalesChart({
  data,
  height = SALES_CHART_CONFIG.height,
  className,
}: SalesChartProps) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            className="stroke-gray-200 dark:stroke-gray-700"
          />
          <XAxis
            dataKey="name"
            className="text-xs text-gray-600 dark:text-gray-400"
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            className="text-xs text-gray-600 dark:text-gray-400"
            tickLine={false}
            axisLine={false}
            tickFormatter={SALES_CHART_CONFIG.yAxisFormatter}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
            labelStyle={{ color: "#374151" }}
            formatter={SALES_CHART_CONFIG.tooltipFormatter}
          />
          <Line
            type="monotone"
            dataKey={SALES_CHART_CONFIG.lines[0].dataKey}
            stroke={SALES_CHART_CONFIG.lines[0].stroke}
            strokeWidth={3}
            dot={{
              fill: SALES_CHART_CONFIG.lines[0].stroke,
              strokeWidth: 2,
              r: 4,
            }}
            activeDot={{
              r: 6,
              stroke: SALES_CHART_CONFIG.lines[0].stroke,
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
