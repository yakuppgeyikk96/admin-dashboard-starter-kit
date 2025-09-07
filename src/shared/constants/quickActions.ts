import { QuickAction, QuickActionCategory } from "@/shared/types";

export const QUICK_ACTIONS: QuickAction[] = [
  {
    id: "add-product",
    title: "Add Product",
    description: "Create a new product listing",
    icon: "Plus",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    actionUrl: "/dashboard/products/new",
  },
  {
    id: "create-order",
    title: "Create Order",
    description: "Create a new customer order",
    icon: "ShoppingCart",
    color: "text-green-600",
    bgColor: "bg-green-50",
    actionUrl: "/dashboard/orders/new",
  },
  {
    id: "view-reports",
    title: "View Reports",
    description: "Access detailed analytics",
    icon: "BarChart3",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    actionUrl: "/dashboard/reports",
  },
  {
    id: "manage-users",
    title: "Manage Users",
    description: "User management and permissions",
    icon: "Users",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    actionUrl: "/dashboard/users",
  },
  {
    id: "settings",
    title: "Settings",
    description: "Configure your store",
    icon: "Settings",
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    actionUrl: "/dashboard/settings",
  },
  {
    id: "help-support",
    title: "Help & Support",
    description: "Get help and contact support",
    icon: "LifeBuoy",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    actionUrl: "/dashboard/support",
  },
];

export const QUICK_ACTION_CATEGORIES: QuickActionCategory[] = [
  {
    id: "management",
    title: "Management",
    actions: QUICK_ACTIONS.slice(0, 2),
  },
  {
    id: "analytics",
    title: "Analytics & Reports",
    actions: QUICK_ACTIONS.slice(2, 3),
  },
  {
    id: "administration",
    title: "Administration",
    actions: QUICK_ACTIONS.slice(3, 6),
  },
];
