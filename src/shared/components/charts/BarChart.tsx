import { cn } from "@/shared/lib/utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface BarChartProps {
  data: unknown[];
  bars: Array<{
    dataKey: string;
    fill: string;
    name: string;
    opacity?: number;
    radius?: number | [number, number, number, number];
  }>;
  height?: number;
  className?: string;
  yAxisFormatter?: (value: number) => string;
  tooltipFormatter?: (value: number, name: string) => [string, string];
}

export default function BarChartComponent({
  data,
  bars,
  height = 300,
  className,
  yAxisFormatter = (value) => value.toString(),
  tooltipFormatter,
}: BarChartProps) {
  const defaultRadius: number | [number, number, number, number] = [4, 4, 0, 0];

  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      <ResponsiveContainer width="100%" height={height} minWidth={300}>
        <BarChart
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
            tickFormatter={yAxisFormatter}
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
            formatter={tooltipFormatter}
            cursor={{
              fill: "hsl(var(--accent))",
              opacity: 0.1,
            }}
          />
          {bars.map((bar) => (
            <Bar
              key={bar.dataKey}
              dataKey={bar.dataKey}
              fill={bar.fill}
              opacity={bar.opacity || 1}
              radius={bar.radius || defaultRadius}
              name={bar.name}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
