import { LeadPriorityConfig } from "@/features/crm/types/Lead";

export const LEAD_PRIORITIES: LeadPriorityConfig[] = [
  {
    value: "Low",
    label: "Low",
    color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
  },
  {
    value: "Medium",
    label: "Medium",
    color:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-300",
  },
  {
    value: "High",
    label: "High",
    color: "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-300",
  },
  {
    value: "Urgent",
    label: "Urgent",
    color: "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-300",
  },
];
