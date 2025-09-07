"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import CustomerActivityTimeFilter from "./CustomerActivityTimeFilter";
import MetricsCard from "@/shared/components/common/MetricsCard";
import LineChartComponent from "@/shared/components/charts/LineChart";
import ProgressBar from "@/shared/components/common/ProgressBar";
import { Users, UserPlus, TrendingUp, Globe } from "lucide-react";
import {
  CUSTOMER_METRICS,
  CUSTOMER_ACTIVITY_DATA,
  GEOGRAPHIC_DATA,
} from "@/features/analytics/constants/customerActivity";
import {
  CUSTOMER_CHART_CONFIG,
  GEOGRAPHIC_CONFIG,
} from "@/shared/utils/charts/chartConfigs";
import { formatPercentageWithSign } from "@/shared/utils/charts/formatters";

export default function CustomerActivity() {
  const [timeFilter, setTimeFilter] = useState("This Year");

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Customer Activity</CardTitle>
        <CustomerActivityTimeFilter
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
        />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <MetricsCard
            icon={Users}
            value={CUSTOMER_METRICS.totalCustomers}
            label="Total Customers"
          />
          <MetricsCard
            icon={UserPlus}
            value={`+${CUSTOMER_METRICS.newCustomersThisMonth}`}
            label="This Month"
            iconColor="text-green-600"
          />
          <MetricsCard
            icon={TrendingUp}
            value={formatPercentageWithSign(CUSTOMER_METRICS.retentionRate)}
            label="Retention Rate"
            iconColor="text-blue-600"
          />
          <MetricsCard
            icon={Globe}
            value={formatPercentageWithSign(CUSTOMER_METRICS.growthRate)}
            label="Growth Rate"
            iconColor="text-purple-600"
          />
        </div>

        <LineChartComponent
          data={CUSTOMER_ACTIVITY_DATA}
          lines={CUSTOMER_CHART_CONFIG.lines}
          height={CUSTOMER_CHART_CONFIG.height}
          className="mb-6"
        />

        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">
            {GEOGRAPHIC_CONFIG.title}
          </h4>
          <div className={GEOGRAPHIC_CONFIG.className}>
            {GEOGRAPHIC_DATA.map((region) => (
              <ProgressBar
                key={region.region}
                label={region.region}
                percentage={region.percentage}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
