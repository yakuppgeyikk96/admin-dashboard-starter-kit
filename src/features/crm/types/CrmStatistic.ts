import { LucideIcon } from "lucide-react";

export interface CrmStatistic {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
}
