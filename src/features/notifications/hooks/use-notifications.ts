import { useState } from "react";
import { useRouter } from "next/navigation";
import { MOCK_NOTIFICATIONS } from "@/features/notifications/constants";
import { Notification } from "@/features/notifications/types";

export default function useNotifications() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => !n.isRead).length;
  const recentNotifications = MOCK_NOTIFICATIONS.slice(0, 5);

  const handleNotificationClick = (notification: Notification) => {
    if (notification.actionUrl) {
      router.push(notification.actionUrl);
    }
    setIsOpen(false);
  };

  const handleShowMore = () => {
    router.push("/dashboard/notifications");
    setIsOpen(false);
  };

  const closeDropdown = () => setIsOpen(false);

  return {
    isOpen,
    setIsOpen,
    unreadCount,
    recentNotifications,
    handleNotificationClick,
    handleShowMore,
    closeDropdown,
  };
}
