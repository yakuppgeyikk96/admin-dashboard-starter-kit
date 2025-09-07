import TimeFilter from "@/shared/components/common/TimeFilter";
import { DASHBOARD_TIME_FILTERS } from "@/shared/constants/timeFilters";

interface OrderTimeFilterProps {
  timeFilter: string;
  onTimeFilterChange: (filter: string) => void;
}

export default function OrderTimeFilter({
  timeFilter,
  onTimeFilterChange,
}: OrderTimeFilterProps) {
  return (
    <TimeFilter
      timeFilter={timeFilter}
      onTimeFilterChange={onTimeFilterChange}
      options={DASHBOARD_TIME_FILTERS}
    />
  );
}
