import { LEAD_PRIORITIES } from "@/features/crm/constants/leadPriorities";
import { LeadPriority } from "@/features/crm/types/Lead";

export const getRecentLeadPriorityColor = (priority: LeadPriority) => {
  const priorityConfig = LEAD_PRIORITIES.find((p) => p.value === priority);
  return (
    priorityConfig?.color ||
    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
  );
};
