"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import RevenueAnalyticsTimeFilter from "./RevenueAnalyticsTimeFilter";
import TrendMetricsCard from "@/shared/components/common/TrendMetricsCard";
import BarChartComponent from "@/shared/components/charts/BarChart";
import {
  REVENUE_METRICS,
  REVENUE_DATA,
  TIME_PERIODS,
} from "@/features/analytics/constants/revenueAnalytics";
import { REVENUE_CHART_CONFIG } from "@/shared/utils/charts/chartConfigs";
import { formatCurrencyM } from "@/shared/utils/charts/formatters";

export default function RevenueAnalytics() {
  const [timeFilter, setTimeFilter] = useState(TIME_PERIODS[0]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Revenue Analytics</CardTitle>
        <RevenueAnalyticsTimeFilter
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
        />
      </CardHeader>
      <CardContent>
        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <TrendMetricsCard
            value={formatCurrencyM(REVENUE_METRICS.totalRevenue)}
            label="Total Revenue"
            trendValue={REVENUE_METRICS.growthPercentage}
            trendLabel="Growth"
          />
        </div>

        {/* Chart */}
        <BarChartComponent
          data={REVENUE_DATA}
          bars={REVENUE_CHART_CONFIG.bars}
          yAxisFormatter={REVENUE_CHART_CONFIG.yAxisFormatter}
          tooltipFormatter={REVENUE_CHART_CONFIG.tooltipFormatter}
          height={REVENUE_CHART_CONFIG.height}
        />
      </CardContent>
    </Card>
  );
}
