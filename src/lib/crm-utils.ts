import { LEAD_STATUSES, LEAD_PRIORITIES } from "@/constants/leads";

export const getStatusColor = (status: string) => {
  const statusConfig = LEAD_STATUSES.find((s) => s.value === status);
  return (
    statusConfig?.color ||
    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
  );
};

export const getPriorityColor = (priority: string) => {
  const priorityConfig = LEAD_PRIORITIES.find((p) => p.value === priority);
  return (
    priorityConfig?.color ||
    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
  );
};
