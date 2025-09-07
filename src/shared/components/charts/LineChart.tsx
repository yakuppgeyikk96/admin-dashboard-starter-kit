import { cn } from "@/shared/lib/utils";
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

interface LineChartProps {
  data: unknown[];
  lines: Array<{
    dataKey: string;
    stroke: string;
    name: string;
    strokeWidth?: number;
  }>;
  height?: number;
  className?: string;
}

export default function LineChartComponent({
  data,
  lines,
  height = 250,
  className,
}: LineChartProps) {
  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      <ResponsiveContainer width="100%" height={height} minWidth={300}>
        <LineChart
          data={data}
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
          {lines.map((line) => (
            <Line
              key={line.dataKey}
              type="monotone"
              dataKey={line.dataKey}
              stroke={line.stroke}
              strokeWidth={line.strokeWidth || 3}
              dot={{ fill: line.stroke, strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: line.stroke, strokeWidth: 2 }}
              name={line.name}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
