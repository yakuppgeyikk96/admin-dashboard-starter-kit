import QuickActionCard from "@/shared/components/common/QuickActionCard";
import { QUICK_ACTIONS } from "@/shared/constants/quickActions";

export default function QuickActionsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {QUICK_ACTIONS.map((action) => (
        <QuickActionCard key={action.id} action={action} />
      ))}
    </div>
  );
}
