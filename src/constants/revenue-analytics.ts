import { RevenueData, RevenueMetrics } from "@/types/Revenue";

export const REVENUE_DATA: RevenueData[] = [
  { month: "Jan", currentYear: 45000, previousYear: 38000, growth: 18.4 },
  { month: "Feb", currentYear: 52000, previousYear: 42000, growth: 23.8 },
  { month: "Mar", currentYear: 48000, previousYear: 45000, growth: 6.7 },
  { month: "Apr", currentYear: 61000, previousYear: 52000, growth: 17.3 },
  { month: "May", currentYear: 55000, previousYear: 48000, growth: 14.6 },
  { month: "Jun", currentYear: 67000, previousYear: 55000, growth: 21.8 },
  { month: "Jul", currentYear: 72000, previousYear: 60000, growth: 20.0 },
  { month: "Aug", currentYear: 68000, previousYear: 58000, growth: 17.2 },
  { month: "Sep", currentYear: 75000, previousYear: 62000, growth: 21.0 },
  { month: "Oct", currentYear: 82000, previousYear: 68000, growth: 20.6 },
  { month: "Nov", currentYear: 78000, previousYear: 65000, growth: 20.0 },
  { month: "Dec", currentYear: 95000, previousYear: 78000, growth: 21.8 },
];

export const REVENUE_METRICS: RevenueMetrics = {
  totalRevenue: 750000,
  growthPercentage: 19.2,
  averageOrderValue: 125.5,
  totalOrders: 5976,
};

export const TIME_PERIODS = [
  "This Year",
  "Last Year",
  "Last 6 Months",
  "Last 3 Months",
];
