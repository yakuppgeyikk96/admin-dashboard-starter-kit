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
import { REVENUE_DATA } from "@/constants/revenue-analytics";

export default function RevenueChart() {
  return (
    <div className="w-full overflow-x-auto">
      <ResponsiveContainer width="100%" height={300} minWidth={300}>
        <BarChart
          data={REVENUE_DATA}
          margin={{ top: 20, right: 20, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis
            dataKey="month"
            className="text-xs text-muted-foreground"
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            className="text-xs text-muted-foreground"
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--card)",
              border: "1px solid hsl(var(--border))",
              borderRadius: "12px",
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              padding: "12px 16px",
              fontSize: "14px",
              fontWeight: "500",
            }}
            labelStyle={{
              color: "hsl(var(--foreground))",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "8px",
              borderBottom: "1px solid hsl(var(--border))",
              paddingBottom: "8px",
            }}
            itemStyle={{
              color: "hsl(var(--foreground))",
              fontSize: "14px",
              fontWeight: "500",
              padding: "4px 0",
            }}
            formatter={(value: number, name: string) => [
              `$${value.toLocaleString()}`,
              name === "currentYear" ? "Current Year" : "Previous Year",
            ]}
            cursor={{
              fill: "hsl(var(--accent))",
              opacity: 0.1,
            }}
          />
          <Bar
            dataKey="previousYear"
            fill="url(#previousYearGradient)"
            opacity={0.8}
            radius={[4, 4, 0, 0]}
            name="Previous Year"
          />
          <Bar
            dataKey="currentYear"
            fill="url(#currentYearGradient)"
            radius={[4, 4, 0, 0]}
            name="Current Year"
          />

          <defs>
            <linearGradient
              id="previousYearGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient
              id="currentYearGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
