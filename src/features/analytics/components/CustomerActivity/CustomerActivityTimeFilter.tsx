import TimeFilter from "@/shared/components/common/TimeFilter";
import { ANALYTICS_TIME_FILTERS } from "@/shared/constants/timeFilters";

interface CustomerTimeFilterProps {
  timeFilter: string;
  onTimeFilterChange: (filter: string) => void;
}

export default function CustomerTimeFilter({
  timeFilter,
  onTimeFilterChange,
}: CustomerTimeFilterProps) {
  return (
    <TimeFilter
      timeFilter={timeFilter}
      onTimeFilterChange={onTimeFilterChange}
      options={ANALYTICS_TIME_FILTERS}
    />
  );
}
