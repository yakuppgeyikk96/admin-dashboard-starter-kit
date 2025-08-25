import { TrendingUp, TrendingDown } from "lucide-react";
import { REVENUE_METRICS } from "@/constants/revenue-analytics";

export default function RevenueMetrics() {
  const isPositiveGrowth = REVENUE_METRICS.growthPercentage >= 0;

  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="text-center">
        <div className="text-2xl font-bold text-foreground">
          ${(REVENUE_METRICS.totalRevenue / 1000000).toFixed(1)}M
        </div>
        <div className="text-sm text-muted-foreground">Total Revenue</div>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          {isPositiveGrowth ? (
            <TrendingUp className="w-4 h-4 text-green-600" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-600" />
          )}
          <span
            className={`text-lg font-semibold ${
              isPositiveGrowth ? "text-green-600" : "text-red-600"
            }`}
          >
            {isPositiveGrowth ? "+" : ""}
            {REVENUE_METRICS.growthPercentage}%
          </span>
        </div>
        <div className="text-sm text-muted-foreground">Growth</div>
      </div>
    </div>
  );
}
