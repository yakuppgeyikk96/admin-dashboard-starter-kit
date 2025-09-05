"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { LEAD_PIPELINES } from "@/features/dashboard/crm/constants/leadPipelines";
import LeadPipelineTooltip from "./LeadPipelineTooltip";

export default function LeadPipelineContent() {
  return (
    <div className="overflow-x-auto">
      <ResponsiveContainer width="100%" height={300} minWidth={300}>
        <BarChart data={LEAD_PIPELINES}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="oklch(0.92 0.004 286.32 / 0.3)"
          />
          <XAxis
            dataKey="stage"
            tick={{ fill: "oklch(0.55 0.008 285.823)" }}
            axisLine={{ stroke: "oklch(0.92 0.004 286.32 / 0.5)" }}
          />
          <YAxis
            tick={{ fill: "oklch(0.55 0.008 285.823)" }}
            axisLine={{ stroke: "oklch(0.92 0.004 286.32 / 0.5)" }}
          />
          <Tooltip content={<LeadPipelineTooltip />} />
          <Bar
            dataKey="count"
            fill="oklch(0.623 0.214 259.815)"
            radius={[4, 4, 0, 0]}
            style={{ cursor: "pointer" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
