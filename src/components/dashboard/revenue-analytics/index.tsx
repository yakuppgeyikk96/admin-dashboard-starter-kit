"use client";

import { useState } from "react";
import TimeFilter from "./time-filter";
import RevenueMetrics from "./revenue-metrics";
import RevenueChart from "./revenue-chart";

export default function RevenueAnalytics() {
  const [timeFilter, setTimeFilter] = useState("This Year");

  return (
    <div className="bg-card rounded-lg border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Revenue Analytics
        </h2>
        <TimeFilter
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
        />
      </div>

      <RevenueMetrics />
      <RevenueChart />
    </div>
  );
}
