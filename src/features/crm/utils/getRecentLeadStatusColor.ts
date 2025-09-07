import { LEAD_STATUSES } from "@/features/crm/constants/leadStatuses";
import { LeadStatus } from "@/features/crm/types/Lead";

export const getRecentLeadStatusColor = (status: LeadStatus) => {
  const statusConfig = LEAD_STATUSES.find((s) => s.value === status);
  return (
    statusConfig?.color ||
    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
  );
};
