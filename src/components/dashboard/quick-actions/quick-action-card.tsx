import { QuickAction } from "@/types/QuickAction";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import * as LucideIcons from "lucide-react";

interface QuickActionCardProps {
  action: QuickAction;
}

export default function QuickActionCard({ action }: QuickActionCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(action.actionUrl);
  };

  const renderIcon = () => {
    switch (action.icon) {
      case "Plus":
        return <LucideIcons.Plus className={`w-6 h-6 ${action.color}`} />;
      case "ShoppingCart":
        return (
          <LucideIcons.ShoppingCart className={`w-6 h-6 ${action.color}`} />
        );
      case "BarChart3":
        return <LucideIcons.BarChart3 className={`w-6 h-6 ${action.color}`} />;
      case "Users":
        return <LucideIcons.Users className={`w-6 h-6 ${action.color}`} />;
      case "Settings":
        return <LucideIcons.Settings className={`w-6 h-6 ${action.color}`} />;
      case "LifeBuoy":
        return <LucideIcons.LifeBuoy className={`w-6 h-6 ${action.color}`} />;
      default:
        return <LucideIcons.HelpCircle className={`w-6 h-6 ${action.color}`} />;
    }
  };

  return (
    <Button
      variant="ghost"
      onClick={handleClick}
      className={`
        group w-full h-auto p-6 rounded-lg border transition-all duration-200
        hover:shadow-md hover:border-primary/20 hover:bg-primary/5
        ${action.bgColor} hover:bg-white dark:hover:bg-gray-800
      `}
    >
      <div className="flex flex-col items-center space-y-3 text-center">
        <div
          className={`
          p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm
          group-hover:shadow-md transition-all duration-200
        `}
        >
          {renderIcon()}
        </div>
        <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
          {action.title}
        </span>
      </div>
    </Button>
  );
}
