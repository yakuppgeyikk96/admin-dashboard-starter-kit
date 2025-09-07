import StatisticCard from "@/features/common/components/StatisticCard";
import { ECOMMERCE_STATISTICS } from "../constants/ecommerceStatistics";

export default function EcommStatisticsGrid() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {ECOMMERCE_STATISTICS.map((stat) => (
        <StatisticCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
