import { DealStage } from "@/types/DealStage";

export const DEAL_STAGES: DealStage[] = [
  {
    stage: "New",
    count: 45,
    color: "bg-blue-100 text-blue-800 dark:bg-blue-950/50 dark:text-blue-300",
  },
  {
    stage: "Qualified",
    count: 32,
    color:
      "bg-green-100 text-green-800 dark:bg-green-950/50 dark:text-green-300",
  },
  {
    stage: "Proposal",
    count: 28,
    color:
      "bg-purple-100 text-purple-800 dark:bg-purple-950/50 dark:text-purple-300",
  },
  {
    stage: "Negotiation",
    count: 18,
    color:
      "bg-orange-100 text-orange-800 dark:bg-orange-950/50 dark:text-orange-300",
  },
  {
    stage: "Closed Won",
    count: 12,
    color:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300",
  },
];
