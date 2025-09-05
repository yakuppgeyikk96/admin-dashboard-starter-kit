import {
  Notification,
  NotificationTypeConfig,
} from "@/features/notifications/types";

export const NOTIFICATION_TYPE_CONFIG: Record<string, NotificationTypeConfig> =
  {
    info: {
      icon: "ℹ️",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    success: {
      icon: "✅",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    warning: {
      icon: "⚠️",
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    error: {
      icon: "❌",
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
  };

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    title: "New Order Received",
    message: "Order #12345 has been placed by John Doe",
    type: "success",
    timestamp: "2 minutes ago",
    isRead: false,
    actionUrl: "/dashboard/orders/12345",
  },
  {
    id: "2",
    title: "Low Stock Alert",
    message: "Smart Watch inventory is running low (5 items left)",
    type: "warning",
    timestamp: "15 minutes ago",
    isRead: false,
    actionUrl: "/dashboard/inventory",
  },
  {
    id: "3",
    title: "Payment Failed",
    message: "Payment for order #12340 has failed",
    type: "error",
    timestamp: "1 hour ago",
    isRead: true,
    actionUrl: "/dashboard/orders/12340",
  },
  {
    id: "4",
    title: "New Customer",
    message: "Sarah Wilson has registered a new account",
    type: "info",
    timestamp: "2 hours ago",
    isRead: true,
  },
  {
    id: "5",
    title: "System Update",
    message: "Dashboard will be updated tonight at 2 AM",
    type: "info",
    timestamp: "3 hours ago",
    isRead: true,
  },
];
