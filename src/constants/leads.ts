import { Lead, LeadStatus, LeadPriority, LeadSource } from "@/types/Lead";

export const LEAD_STATUSES: {
  value: LeadStatus;
  label: string;
  color: string;
}[] = [
  {
    value: "New",
    label: "New",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-950/50 dark:text-blue-300",
  },
  {
    value: "Qualified",
    label: "Qualified",
    color:
      "bg-green-100 text-green-800 dark:bg-green-950/50 dark:text-green-300",
  },
  {
    value: "Proposal",
    label: "Proposal",
    color:
      "bg-purple-100 text-purple-800 dark:bg-purple-950/50 dark:text-purple-300",
  },
  {
    value: "Negotiation",
    label: "Negotiation",
    color:
      "bg-orange-100 text-orange-800 dark:bg-orange-950/50 dark:text-orange-300",
  },
  {
    value: "Closed Won",
    label: "Closed Won",
    color:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300",
  },
  {
    value: "Closed Lost",
    label: "Closed Lost",
    color: "bg-red-100 text-red-800 dark:bg-red-950/50 dark:text-red-300",
  },
];

export const LEAD_PRIORITIES: {
  value: LeadPriority;
  label: string;
  color: string;
}[] = [
  {
    value: "Low",
    label: "Low",
    color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
  },
  {
    value: "Medium",
    label: "Medium",
    color:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-950/50 dark:text-yellow-300",
  },
  {
    value: "High",
    label: "High",
    color:
      "bg-orange-100 text-orange-800 dark:bg-orange-950/50 dark:text-orange-300",
  },
  {
    value: "Urgent",
    label: "Urgent",
    color: "bg-red-100 text-red-800 dark:bg-red-950/50 dark:text-red-300",
  },
];

export const LEAD_SOURCES: { value: LeadSource; label: string }[] = [
  { value: "Website", label: "Website" },
  { value: "Referral", label: "Referral" },
  { value: "Cold Call", label: "Cold Call" },
  { value: "Social Media", label: "Social Media" },
  { value: "Trade Show", label: "Trade Show" },
  { value: "Other", label: "Other" },
];

export const SAMPLE_LEADS: Lead[] = [
  {
    id: "1",
    name: "John Smith",
    company: "Tech Corp",
    email: "john@techcorp.com",
    phone: "+1-555-0123",
    status: "Qualified",
    priority: "High",
    value: 25000,
    source: "Website",
    assignedTo: "Sarah Johnson",
    score: 85,
    lastContact: "2 hours ago",
    nextFollowUp: "Tomorrow 10:00 AM",
    notes: "Interested in enterprise solution. Budget confirmed.",
    tags: ["enterprise", "tech", "high-value"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-20",
  },
  // ... daha fazla sample data
];
