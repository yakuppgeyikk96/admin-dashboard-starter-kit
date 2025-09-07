import { cn } from "@/shared/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricsCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  iconColor?: string;
  className?: string;
}

export default function MetricsCard({
  icon: Icon,
  value,
  label,
  iconColor = "text-primary",
  className,
}: MetricsCardProps) {
  return (
    <div className={cn("text-center p-3 bg-muted/50 rounded-lg", className)}>
      <div className="flex items-center justify-center mb-2">
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <div className="text-lg font-bold text-foreground">
        {typeof value === "number" ? value.toLocaleString() : value}
      </div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
