export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  status: LeadStatus;
  priority: LeadPriority;
  value: number;
  source: LeadSource;
  assignedTo?: string;
  score: number;
  lastContact: string;
  nextFollowUp?: string;
  notes?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export type LeadStatus =
  | "New"
  | "Qualified"
  | "Proposal"
  | "Negotiation"
  | "Closed Won"
  | "Closed Lost";

export type LeadPriority = "Low" | "Medium" | "High" | "Urgent";

export type LeadSource =
  | "Website"
  | "Referral"
  | "Cold Call"
  | "Social Media"
  | "Trade Show"
  | "Other";

export type LeadStatusConfig = {
  value: LeadStatus;
  label: LeadStatus;
  color: string;
};

export type LeadPriorityConfig = {
  value: LeadPriority;
  label: LeadPriority;
  color: string;
};

export type LeadSourceConfig = {
  value: LeadSource;
  label: LeadSource;
  color: string;
};
