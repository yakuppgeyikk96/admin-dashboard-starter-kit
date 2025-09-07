"use client";

import { Button } from "@/shared/components/ui/button";
import { Grid3X3, List } from "lucide-react";

interface ViewModeToggleProps {
  viewMode: "grid" | "categorized";
  onViewModeChange: (mode: "grid" | "categorized") => void;
  className?: string;
}

export default function ViewModeToggle({
  viewMode,
  onViewModeChange,
  className,
}: ViewModeToggleProps) {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <Button
        variant={viewMode === "grid" ? "default" : "outline"}
        size="sm"
        onClick={() => onViewModeChange("grid")}
        className="h-8 px-3"
      >
        <Grid3X3 className="w-4 h-4 mr-2" />
        Grid
      </Button>
      <Button
        variant={viewMode === "categorized" ? "default" : "outline"}
        size="sm"
        onClick={() => onViewModeChange("categorized")}
        className="h-8 px-3"
      >
        <List className="w-4 h-4 mr-2" />
        Categorized
      </Button>
    </div>
  );
}
