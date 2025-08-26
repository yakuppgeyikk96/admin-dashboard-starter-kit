import EcommStatisticsGrid from "@/components/dashboard/statistics/ecomm-statistics-grid";
import SalesChartSection from "@/components/dashboard/sales-chart-section";
import TopSellingProducts from "@/components/dashboard/top-selling-products";
import RecentOrders from "@/components/dashboard/recent-orders";
import RevenueAnalytics from "@/components/dashboard/revenue-analytics";
import CustomerActivity from "@/components/dashboard/customer-activity";
import QuickActions from "@/components/dashboard/quick-actions";
import TransactionHistory from "@/components/dashboard/transaction-history";

export default function EcommercePage() {
  return (
    <div className="space-y-6 py-6">
      <EcommStatisticsGrid />

      <QuickActions />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChartSection />
        <RevenueAnalytics />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomerActivity />
        <TopSellingProducts />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentOrders />
        <TransactionHistory />
      </div>
    </div>
  );
}
