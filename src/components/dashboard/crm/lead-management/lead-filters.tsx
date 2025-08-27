"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X, Filter, Search } from "lucide-react";
import {
  LEAD_STATUSES,
  LEAD_PRIORITIES,
  LEAD_SOURCES,
} from "@/constants/leads";

export default function LeadFilters() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);

  const toggleFilter = (
    value: string,
    currentFilters: string[],
    setFilters: (filters: string[]) => void
  ) => {
    if (currentFilters.includes(value)) {
      setFilters(currentFilters.filter((f) => f !== value));
    } else {
      setFilters([...currentFilters, value]);
    }
  };

  const clearAllFilters = () => {
    setSelectedStatuses([]);
    setSelectedPriorities([]);
    setSelectedSources([]);
    setSearchTerm("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Status Filters */}
        <div>
          <h4 className="text-sm font-medium mb-2">Status</h4>
          <div className="flex flex-wrap gap-2">
            {LEAD_STATUSES.map((status) => (
              <Badge
                key={status.value}
                variant={
                  selectedStatuses.includes(status.value)
                    ? "default"
                    : "outline"
                }
                className="cursor-pointer"
                onClick={() =>
                  toggleFilter(
                    status.value,
                    selectedStatuses,
                    setSelectedStatuses
                  )
                }
              >
                {status.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Priority Filters */}
        <div>
          <h4 className="text-sm font-medium mb-2">Priority</h4>
          <div className="flex flex-wrap gap-2">
            {LEAD_PRIORITIES.map((priority) => (
              <Badge
                key={priority.value}
                variant={
                  selectedPriorities.includes(priority.value)
                    ? "default"
                    : "outline"
                }
                className="cursor-pointer"
                onClick={() =>
                  toggleFilter(
                    priority.value,
                    selectedPriorities,
                    setSelectedPriorities
                  )
                }
              >
                {priority.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Source Filters */}
        <div>
          <h4 className="text-sm font-medium mb-2">Source</h4>
          <div className="flex flex-wrap gap-2">
            {LEAD_SOURCES.map((source) => (
              <Badge
                key={source.value}
                variant={
                  selectedSources.includes(source.value) ? "default" : "outline"
                }
                className="cursor-pointer"
                onClick={() =>
                  toggleFilter(
                    source.value,
                    selectedSources,
                    setSelectedSources
                  )
                }
              >
                {source.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        {(selectedStatuses.length > 0 ||
          selectedPriorities.length > 0 ||
          selectedSources.length > 0 ||
          searchTerm) && (
          <Button
            variant="outline"
            onClick={clearAllFilters}
            className="w-full"
          >
            <X className="w-4 h-4 mr-2" />
            Clear All Filters
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
