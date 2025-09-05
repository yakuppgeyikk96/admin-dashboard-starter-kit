"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { CUSTOMER_ACTIVITY_DATA } from "@/shared/constants/customer-activity";

export default function CustomerChart() {
  return (
    <div className="w-full overflow-x-auto">
      <ResponsiveContainer width="100%" height={250} minWidth={300}>
        <LineChart
          data={CUSTOMER_ACTIVITY_DATA}
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
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="newCustomers"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: "#3b82f6", strokeWidth: 2 }}
            name="New Customers"
          />
          <Line
            type="monotone"
            dataKey="returningCustomers"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: "#10b981", strokeWidth: 2 }}
            name="Returning Customers"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
