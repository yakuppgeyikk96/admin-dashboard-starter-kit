import { Notification } from "@/types/Notification";
import { NOTIFICATION_TYPE_CONFIG } from "@/constants/notification";
import { cn } from "@/lib/utils";

interface NotificationItemProps {
  notification: Notification;
  onClick?: () => void;
}

export default function NotificationItem({
  notification,
  onClick,
}: NotificationItemProps) {
  const config = NOTIFICATION_TYPE_CONFIG[notification.type];

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-3 hover:bg-accent/50 rounded-lg cursor-pointer transition-colors",
        !notification.isRead && "bg-accent/30"
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center text-sm",
          config.bgColor
        )}
      >
        <span className="text-sm">{config.icon}</span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h4
            className={cn(
              "text-sm font-medium text-foreground truncate",
              !notification.isRead && "font-semibold"
            )}
          >
            {notification.title}
          </h4>
          {!notification.isRead && (
            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 ml-2" />
          )}
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-1">
          {notification.message}
        </p>
        <span className="text-xs text-muted-foreground">
          {notification.timestamp}
        </span>
      </div>
    </div>
  );
}
