import EcommStatisticsGrid from "@/components/dashboard/statistics/ecomm-statistics-grid";
import SalesChartSection from "@/components/dashboard/sales-chart-section";
import TopSellingProducts from "@/components/dashboard/top-selling-products";
import RecentOrders from "@/components/dashboard/recent-orders";
import RevenueAnalytics from "@/components/dashboard/revenue-analytics";
import CustomerActivity from "@/components/dashboard/customer-activity";
import QuickActions from "@/components/dashboard/quick-actions";

export default function EcommercePage() {
  return (
    <div className="space-y-6 w-full">
      <EcommStatisticsGrid />

      <QuickActions />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <SalesChartSection />
        <RevenueAnalytics />
        <CustomerActivity />
        <TopSellingProducts />
      </div>

      <RecentOrders />
    </div>
  );
}
