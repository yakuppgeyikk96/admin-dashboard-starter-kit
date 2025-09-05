import StatisticCard from "@/components/dashboard/statistics/statistic-card";
import { CRM_STATISTICS } from "@/features/dashboard/crm/constants/crmStatistics";

export default function CrmStatisticsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {CRM_STATISTICS.map((stat) => (
        <StatisticCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          changeType={stat.changeType}
          icon={stat.icon}
          iconColor={stat.iconColor}
          bgColor={stat.bgColor}
        />
      ))}
    </div>
  );
}
