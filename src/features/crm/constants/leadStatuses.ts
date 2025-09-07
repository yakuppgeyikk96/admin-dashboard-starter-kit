import { LeadStatusConfig } from "@/features/crm/types/Lead";

export const LEAD_STATUSES: LeadStatusConfig[] = [
  {
    value: "New",
    label: "New",
    color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
  },
  {
    value: "Qualified",
    label: "Qualified",
    color: "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-300",
  },
  {
    value: "Proposal",
    label: "Proposal",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-300",
  },
  {
    value: "Negotiation",
    label: "Negotiation",
    color:
      "bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-purple-300",
  },
  {
    value: "Closed Won",
    label: "Closed Won",
    color: "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-300",
  },
  {
    value: "Closed Lost",
    label: "Closed Lost",
    color: "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-300",
  },
];
