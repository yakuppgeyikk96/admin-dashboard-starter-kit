import StatisticCard from "./statistic-card";
import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    title: "Total Sales",
    value: "$45,231",
    change: "+20.1%",
    changeType: "positive" as const,
    icon: DollarSign,
    iconColor: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
  {
    title: "Total Orders",
    value: "2,350",
    change: "+180.1%",
    changeType: "positive" as const,
    icon: ShoppingCart,
    iconColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    title: "Total Revenue",
    value: "$12,234",
    change: "+19%",
    changeType: "positive" as const,
    icon: TrendingUp,
    iconColor: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    title: "Total Customers",
    value: "573",
    change: "+201",
    changeType: "positive" as const,
    icon: Users,
    iconColor: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
  },
];

export default function EcommStatisticsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatisticCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
