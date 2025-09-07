import { Users, TrendingUp, Target, DollarSign } from "lucide-react";
import { CrmStatistic } from "@/features/crm/types/CrmStatistic";

export const CRM_STATISTICS: CrmStatistic[] = [
  {
    title: "Total Leads",
    value: "2,847",
    change: "+12.5%",
    changeType: "positive",
    icon: Users,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    title: "Conversion Rate",
    value: "23.4%",
    change: "+2.1%",
    changeType: "positive",
    icon: TrendingUp,
    iconColor: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/30",
  },
  {
    title: "Active Deals",
    value: "156",
    change: "+8.2%",
    changeType: "positive",
    icon: Target,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
  },
  {
    title: "Revenue Pipeline",
    value: "$892K",
    change: "+15.3%",
    changeType: "positive",
    icon: DollarSign,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
  },
];
