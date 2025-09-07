import EcommStatisticsGrid from "@/features/ecommerce/components/EcommerceStatisticsGrid";
import EcommerceSalesChart from "@/features/ecommerce/components/EcommerceSalesChart";
import TopSellingProducts from "@/features/ecommerce/components/TopSellingProducts";
import RecentOrders from "@/features/ecommerce/components/RecentOrders";
import RevenueAnalytics from "@/features/analytics/components/RevenueAnalytics";
import CustomerActivity from "@/features/analytics/components/CustomerActivity";
import QuickActions from "@/features/common/components/QuickActions";
import TransactionHistory from "@/features/ecommerce/components/TransactionHistory";

export default function EcommercePage() {
  return (
    <div className="space-y-6 py-6">
      <EcommStatisticsGrid />

      <QuickActions />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EcommerceSalesChart />
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
