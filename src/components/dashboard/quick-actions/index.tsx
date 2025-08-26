"use client";

import { useState } from "react";
import QuickActionsGrid from "./quick-actions-grid";
import QuickActionsCategorized from "./quick-actions-categorized";
import QuickActionsHeader from "./quick-actions-header";
import ViewModeToggle from "./view-mode-toggle";

type ViewMode = "grid" | "categorized";

export default function QuickActions() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  return (
    <div className="bg-card rounded-lg border p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <QuickActionsHeader />
        <ViewModeToggle viewMode={viewMode} onViewModeChange={setViewMode} />
      </div>

      {viewMode === "grid" ? <QuickActionsGrid /> : <QuickActionsCategorized />}
    </div>
  );
}
