import { NavigationItem } from "@/shared/types";
import { BellIcon, SettingsIcon, UserIcon } from "lucide-react";

export const profileMenuItems: NavigationItem[] = [
  {
    name: "Profile",
    href: "/profile",
    icon: UserIcon,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: BellIcon,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: SettingsIcon,
  },
];
