"use client";

import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { TIME_PERIODS } from "@/shared/constants/revenue-analytics";

interface TimeFilterProps {
  timeFilter: string;
  onTimeFilterChange: (filter: string) => void;
}

export default function TimeFilter({
  timeFilter,
  onTimeFilterChange,
}: TimeFilterProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 text-sm border rounded-md hover:bg-accent">
        {timeFilter}
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {TIME_PERIODS.map((period) => (
          <DropdownMenuItem
            key={period}
            onClick={() => onTimeFilterChange(period)}
          >
            {period}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
