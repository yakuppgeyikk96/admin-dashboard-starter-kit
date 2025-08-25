export interface RevenueData {
  month: string;
  currentYear: number;
  previousYear: number;
  growth: number;
}

export interface RevenueMetrics {
  totalRevenue: number;
  growthPercentage: number;
  averageOrderValue: number;
  totalOrders: number;
}
