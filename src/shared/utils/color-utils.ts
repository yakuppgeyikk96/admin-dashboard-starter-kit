export const getDarkModeColorsForQuickActions = (color: string) => {
  switch (color) {
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
