import { cn } from "@/shared/lib/utils";

interface ProgressBarProps {
  label: string;
  percentage: number;
  className?: string;
  barColor?: string;
}

export default function ProgressBar({
  label,
  percentage,
  className,
  barColor = "bg-primary",
}: ProgressBarProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <span className="text-sm text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <div className="w-16 bg-muted rounded-full h-2">
          <div
            className={cn(`${barColor} h-2 rounded-full`)}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-sm font-medium text-foreground w-12 text-right">
          {percentage}%
        </span>
      </div>
    </div>
  );
}
