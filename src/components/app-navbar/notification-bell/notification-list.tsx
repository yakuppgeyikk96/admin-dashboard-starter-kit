import NotificationItem from "./notification-item";
import { Notification } from "@/types/Notification";

interface NotificationListProps {
  notifications: Notification[];
  onNotificationClick: (notification: Notification) => void;
}

export default function NotificationList({
  notifications,
  onNotificationClick,
}: NotificationListProps) {
  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className="max-h-96 overflow-y-auto">
      <div className="p-2">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onClick={() => onNotificationClick(notification)}
          />
        ))}
      </div>
    </div>
  );
}
