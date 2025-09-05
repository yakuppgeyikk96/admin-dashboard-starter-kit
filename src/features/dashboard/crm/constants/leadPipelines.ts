import { LeadPipeline } from "@/features/dashboard/crm/types/LeadPipeline";

export const LEAD_PIPELINES: LeadPipeline[] = [
  { stage: "New", count: 45, value: "$125K" },
  { stage: "Qualified", count: 32, value: "$89K" },
  { stage: "Proposal", count: 28, value: "$156K" },
  { stage: "Negotiation", count: 18, value: "$234K" },
  { stage: "Closed Won", count: 12, value: "$89K" },
];
