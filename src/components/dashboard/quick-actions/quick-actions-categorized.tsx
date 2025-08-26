import QuickActionCard from "./quick-action-card";
import { QUICK_ACTION_CATEGORIES } from "@/constants/quick-actions";

export default function QuickActionsCategorized() {
  return (
    <div className="space-y-6">
      {QUICK_ACTION_CATEGORIES.map((category) => (
        <div key={category.id}>
          <h3 className="text-lg font-semibold text-foreground mb-3">
            {category.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.actions.map((action) => (
              <QuickActionCard key={action.id} action={action} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
