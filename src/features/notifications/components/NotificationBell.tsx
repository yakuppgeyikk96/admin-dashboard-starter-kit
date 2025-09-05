"use client";

import { BellIcon } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Button } from "@/shared/components/ui/button";
import useNotifications from "@/features/notifications/hooks/use-notifications";
import NotificationHeader from "./NotificationHeader";
import NotificationList from "./NotificationList";
import NotificationEmpty from "./NotificationEmpty";
import NotificationFooter from "./NotificationFooter";

export default function NotificationBell() {
  const {
    isOpen,
    setIsOpen,
    unreadCount,
    recentNotifications,
    handleNotificationClick,
    handleShowMore,
    closeDropdown,
  } = useNotifications();

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="relative p-2 hover:bg-accent rounded-md transition-colors"
        >
          <BellIcon className="w-4 h-4" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs font-medium"
            >
              {unreadCount > 99 ? "99+" : unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-80 p-0" sideOffset={8}>
        <NotificationHeader onClose={closeDropdown} />

        {recentNotifications.length > 0 ? (
          <NotificationList
            notifications={recentNotifications}
            onNotificationClick={handleNotificationClick}
          />
        ) : (
          <NotificationEmpty />
        )}

        <NotificationFooter
          hasNotifications={recentNotifications.length > 0}
          onShowMore={handleShowMore}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
