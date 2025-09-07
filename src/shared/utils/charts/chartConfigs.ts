import {
  createRevenueTooltipFormatter,
  createRevenueYAxisFormatter,
} from "./formatters";

export const REVENUE_CHART_CONFIG = {
  bars: [
    {
      dataKey: "previousYear",
      fill: "url(#previousYearGradient)",
      name: "Previous Year",
      opacity: 0.8,
    },
    {
      dataKey: "currentYear",
      fill: "url(#currentYearGradient)",
      name: "Current Year",
    },
  ],
  yAxisFormatter: createRevenueYAxisFormatter(),
  tooltipFormatter: createRevenueTooltipFormatter(),
  height: 300,
};

export const CUSTOMER_CHART_CONFIG = {
  lines: [
    {
      dataKey: "newCustomers",
      stroke: "#3b82f6",
      name: "New Customers",
    },
    {
      dataKey: "returningCustomers",
      stroke: "#10b981",
      name: "Returning Customers",
    },
  ],
  height: 250,
};

export const SALES_CHART_CONFIG = {
  lines: [
    {
      dataKey: "sales",
      stroke: "#3b82f6",
      name: "Sales",
    },
  ],
  height: 400,
  yAxisFormatter: (value: number) => `$${value}`,
  tooltipFormatter: (value: number, name: string): [string, string] => [
    `$${value.toLocaleString()}`,
    "Sales",
  ],
};

export const GEOGRAPHIC_CONFIG = {
  title: "Geographic Distribution",
  className: "space-y-2",
};
