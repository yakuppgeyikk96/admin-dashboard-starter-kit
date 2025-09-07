import { QuickAction } from "@/shared/types";
import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";
import { getDarkModeColorsForQuickActions } from "@/shared/utils/color-utils";
import { renderLucideIcon } from "@/shared/utils/icon-utils";

interface QuickActionCardProps {
  action: QuickAction;
  className?: string;
}

export default function QuickActionCard({
  action,
  className,
}: QuickActionCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(action.actionUrl);
  };

  const darkColors = getDarkModeColorsForQuickActions(action.color);

  return (
    <Button
      variant="ghost"
      onClick={handleClick}
      className={`
        group w-full h-auto p-6 rounded-lg border transition-all duration-200
        hover:shadow-md hover:border-primary/20 hover:bg-primary/5
        bg-white ${darkColors.bg} dark:border-none
        hover:bg-gray-50 ${darkColors.hover}
        ${className || ""}
      `}
    >
      <div className="flex flex-col items-center space-y-3 text-center">
        <div
          className={`
          p-3 rounded-full bg-gray-50 ${darkColors.iconBg} shadow-sm
          group-hover:bg-gray-100 ${darkColors.iconHover}
          group-hover:shadow-md transition-all duration-200
        `}
        >
          {renderLucideIcon(action.icon, `w-6 h-6 ${action.color}`)}
        </div>
        <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
          {action.title}
        </span>
      </div>
    </Button>
  );
}
