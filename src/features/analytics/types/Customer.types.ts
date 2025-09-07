export interface CustomerActivity {
  month: string;
  newCustomers: number;
  returningCustomers: number;
  totalCustomers: number;
}

export interface CustomerMetrics {
  totalCustomers: number;
  newCustomersThisMonth: number;
  retentionRate: number;
  growthRate: number;
}

export interface GeographicData {
  region: string;
  customers: number;
  percentage: number;
}
