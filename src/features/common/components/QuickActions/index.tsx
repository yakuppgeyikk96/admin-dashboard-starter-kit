"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import QuickActionsGrid from "@/features/common/components/QuickActions/QuickActionsGrid";
import QuickActionsCategorized from "@/features/common/components/QuickActions/QuickActionsCategorized";
import SectionHeader from "@/shared/components/common/SectionHeader";
import ViewModeToggle from "@/shared/components/common/ViewModeToggle";

type ViewMode = "grid" | "categorized";

export default function QuickActions() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <SectionHeader
            title="Quick Actions"
            description="Access frequently used features and tools"
          />
          <ViewModeToggle viewMode={viewMode} onViewModeChange={setViewMode} />
        </div>
      </CardHeader>
      <CardContent>
        {viewMode === "grid" ? (
          <QuickActionsGrid />
        ) : (
          <QuickActionsCategorized />
        )}
      </CardContent>
    </Card>
  );
}
