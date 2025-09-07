import TimeFilter from "@/shared/components/common/TimeFilter";
import { TRANSACTION_TIME_FILTERS } from "@/shared/constants/timeFilters";

interface TransactionHistoryTimeFilterProps {
  timeFilter: string;
  onTimeFilterChange: (filter: string) => void;
}

export default function TransactionHistoryTimeFilter({
  timeFilter,
  onTimeFilterChange,
}: TransactionHistoryTimeFilterProps) {
  return (
    <TimeFilter
      timeFilter={timeFilter}
      onTimeFilterChange={onTimeFilterChange}
      options={TRANSACTION_TIME_FILTERS}
    />
  );
}
