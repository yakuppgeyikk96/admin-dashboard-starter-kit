import {
  CustomerActivity,
  CustomerMetrics,
  GeographicData,
} from "@/features/analytics/types";

export const CUSTOMER_ACTIVITY_DATA: CustomerActivity[] = [
  {
    month: "Jan",
    newCustomers: 245,
    returningCustomers: 189,
    totalCustomers: 434,
  },
  {
    month: "Feb",
    newCustomers: 312,
    returningCustomers: 201,
    totalCustomers: 513,
  },
  {
    month: "Mar",
    newCustomers: 278,
    returningCustomers: 234,
    totalCustomers: 512,
  },
  {
    month: "Apr",
    newCustomers: 356,
    returningCustomers: 267,
    totalCustomers: 623,
  },
  {
    month: "May",
    newCustomers: 298,
    returningCustomers: 289,
    totalCustomers: 587,
  },
  {
    month: "Jun",
    newCustomers: 423,
    returningCustomers: 312,
    totalCustomers: 735,
  },
  {
    month: "Jul",
    newCustomers: 387,
    returningCustomers: 334,
    totalCustomers: 721,
  },
  {
    month: "Aug",
    newCustomers: 456,
    returningCustomers: 356,
    totalCustomers: 812,
  },
  {
    month: "Sep",
    newCustomers: 398,
    returningCustomers: 378,
    totalCustomers: 776,
  },
  {
    month: "Oct",
    newCustomers: 512,
    returningCustomers: 401,
    totalCustomers: 913,
  },
  {
    month: "Nov",
    newCustomers: 467,
    returningCustomers: 423,
    totalCustomers: 890,
  },
  {
    month: "Dec",
    newCustomers: 534,
    returningCustomers: 445,
    totalCustomers: 979,
  },
];

export const CUSTOMER_METRICS: CustomerMetrics = {
  totalCustomers: 979,
  newCustomersThisMonth: 534,
  retentionRate: 83.4,
  growthRate: 18.7,
};

export const GEOGRAPHIC_DATA: GeographicData[] = [
  { region: "North America", customers: 412, percentage: 42.1 },
  { region: "Europe", customers: 287, percentage: 29.3 },
  { region: "Asia Pacific", customers: 156, percentage: 15.9 },
  { region: "Latin America", customers: 89, percentage: 9.1 },
  { region: "Africa", customers: 35, percentage: 3.6 },
];

export const TIME_PERIODS = [
  "This Year",
  "Last Year",
  "Last 6 Months",
  "Last 3 Months",
];
