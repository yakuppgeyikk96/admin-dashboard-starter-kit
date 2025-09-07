import { LucideIcon } from "lucide-react";

interface StatisticCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
}

export default function StatisticCard({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  iconColor,
  bgColor,
}: StatisticCardProps) {
  return (
    <div className="bg-card rounded-lg border p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-lg ${bgColor}`}>
              <Icon className={`w-5 h-5 ${iconColor}`} />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">
              {title}
            </h3>
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
          <p
            className={`text-xs ${
              changeType === "positive"
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {change} from last month
          </p>
        </div>
      </div>
    </div>
  );
}
