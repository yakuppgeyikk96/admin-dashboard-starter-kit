"use client";

import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

interface TimeFilterProps {
  timeFilter: string;
  onTimeFilterChange: (filter: string) => void;
  options: string[];
  className?: string;
}

export default function TimeFilter({
  timeFilter,
  onTimeFilterChange,
  options,
  className,
}: TimeFilterProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`flex items-center gap-2 px-3 py-2 text-sm border rounded-md hover:bg-accent ${
          className || ""
        }`}
      >
        {timeFilter}
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.map((option) => (
          <DropdownMenuItem
            key={option}
            onClick={() => onTimeFilterChange(option)}
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
