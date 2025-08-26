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

  const getDarkModeColors = () => {
    switch (action.color) {
      case "text-blue-600":
        return {
          bg: "dark:bg-blue-950/30",
          hover: "dark:hover:bg-blue-950/50",
          iconBg: "dark:bg-blue-950/50",
          iconHover: "dark:group-hover:bg-blue-950/70",
        };
      case "text-green-600":
        return {
          bg: "dark:bg-green-950/30",
          hover: "dark:hover:bg-green-950/50",
          iconBg: "dark:bg-green-950/50",
          iconHover: "dark:group-hover:bg-green-950/70",
        };
      case "text-purple-600":
        return {
          bg: "dark:bg-purple-950/30",
          hover: "dark:hover:bg-purple-950/50",
          iconBg: "dark:bg-purple-950/50",
          iconHover: "dark:group-hover:bg-purple-950/70",
        };
      case "text-orange-600":
        return {
          bg: "dark:bg-orange-950/30",
          hover: "dark:hover:bg-orange-950/50",
          iconBg: "dark:bg-orange-950/50",
          iconHover: "dark:group-hover:bg-orange-950/70",
        };
      case "text-gray-600":
        return {
          bg: "dark:bg-gray-800",
          hover: "dark:hover:bg-gray-700",
          iconBg: "dark:bg-gray-700",
          iconHover: "dark:group-hover:bg-gray-600",
        };
      case "text-indigo-600":
        return {
          bg: "dark:bg-indigo-950/30",
          hover: "dark:hover:bg-indigo-950/50",
          iconBg: "dark:bg-indigo-950/50",
          iconHover: "dark:group-hover:bg-indigo-950/70",
        };
      default:
        return {
          bg: "dark:bg-gray-800",
          hover: "dark:hover:bg-gray-700",
          iconBg: "dark:bg-gray-700",
          iconHover: "dark:group-hover:bg-gray-600",
        };
    }
  };

  const darkColors = getDarkModeColors();

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
        bg-white ${darkColors.bg} dark:border-none
        hover:bg-gray-50 ${darkColors.hover}
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
          {renderIcon()}
        </div>
        <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
          {action.title}
        </span>
      </div>
    </Button>
  );
}
