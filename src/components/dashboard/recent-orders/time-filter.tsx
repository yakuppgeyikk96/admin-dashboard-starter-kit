"use client";

import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { TIME_FILTERS } from "@/shared/constants/recent-orders";

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
        {TIME_FILTERS.map((filter) => (
          <DropdownMenuItem
            key={filter}
            onClick={() => onTimeFilterChange(filter)}
          >
            {filter}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
