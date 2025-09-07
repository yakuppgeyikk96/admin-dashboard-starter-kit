import TimeFilter from "@/shared/components/common/TimeFilter";
import { DASHBOARD_TIME_FILTERS } from "@/shared/constants/timeFilters";

interface TopSellingProductsTimeFilterProps {
  timeFilter: string;
  onTimeFilterChange: (filter: string) => void;
}

export default function TopSellingProductsTimeFilter({
  timeFilter,
  onTimeFilterChange,
}: TopSellingProductsTimeFilterProps) {
  return (
    <TimeFilter
      timeFilter={timeFilter}
      onTimeFilterChange={onTimeFilterChange}
      options={DASHBOARD_TIME_FILTERS}
    />
  );
}
