export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
}

export type NotificationType = "info" | "success" | "warning" | "error";

export interface NotificationTypeConfig {
  icon: string;
  color: string;
  bgColor: string;
}
