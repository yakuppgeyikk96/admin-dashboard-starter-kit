"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Grid3X3, List } from "lucide-react";
import QuickActionsGrid from "./quick-actions-grid";
import QuickActionsCategorized from "./quick-actions-categorized";

type ViewMode = "grid" | "categorized";

export default function QuickActions() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  return (
    <div className="bg-card rounded-lg border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Quick Actions
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Access frequently used features and tools
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
            className="h-8 px-3"
          >
            <Grid3X3 className="w-4 h-4 mr-2" />
            Grid
          </Button>
          <Button
            variant={viewMode === "categorized" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("categorized")}
            className="h-8 px-3"
          >
            <List className="w-4 h-4 mr-2" />
            Categorized
          </Button>
        </div>
      </div>

      {viewMode === "grid" ? <QuickActionsGrid /> : <QuickActionsCategorized />}
    </div>
  );
}
