"use client";

import { useState } from "react";
import TimeFilter from "./time-filter";
import CustomerMetrics from "./customer-metrics";
import CustomerChart from "./customer-chart";
import GeographicDistribution from "./geographic-distribution";

export default function CustomerActivity() {
  const [timeFilter, setTimeFilter] = useState("This Year");

  return (
    <div className="bg-card rounded-lg border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Customer Activity
        </h2>
        <TimeFilter
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
        />
      </div>

      <CustomerMetrics />
      <CustomerChart />
      <GeographicDistribution />
    </div>
  );
}
