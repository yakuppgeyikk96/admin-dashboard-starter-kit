import { cn } from "@/shared/lib/utils";
import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";

interface TrendMetricsCardProps {
  value: string | number;
  label: string;
  trendValue: number;
  trendLabel?: string;
  icon?: LucideIcon;
  iconColor?: string;
  className?: string;
}

export default function TrendMetricsCard({
  value,
  label,
  trendValue,
  trendLabel = "Growth",
  icon: Icon,
  iconColor,
  className,
}: TrendMetricsCardProps) {
  const isPositive = trendValue >= 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;
  const trendColor = isPositive ? "text-green-600" : "text-red-600";

  return (
    <div className={cn("text-center", className)}>
      <div className="text-2xl font-bold text-foreground">
        {typeof value === "number" ? value.toLocaleString() : value}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>

      <div className="flex items-center justify-center gap-2 mt-2">
        {Icon && <Icon className={cn(`w-4 h-4 ${iconColor || ""}`)} />}
        <TrendIcon className={cn(`w-4 h-4 ${trendColor}`)} />
        <span className={`text-lg font-semibold ${trendColor}`}>
          {isPositive ? "+" : ""}
          {trendValue}%
        </span>
      </div>
      <div className="text-sm text-muted-foreground">{trendLabel}</div>
    </div>
  );
}
