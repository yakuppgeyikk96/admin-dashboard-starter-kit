"use client";

import { usePathname } from "next/navigation";
import { SidebarMenuButton as SidebarMenuButtonComponent } from "@/shared/components/ui/sidebar";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

export default function SidebarMenuButton({
  item,
}: {
  item: { url: string; title: string; icon: LucideIcon };
}) {
  const pathname = usePathname();

  const isActive = (url: string) => {
    return pathname === url;
  };

  return (
    <SidebarMenuButtonComponent asChild isActive={isActive(item.url)}>
      <Link href={item.url}>
        <item.icon
          className={isActive(item.url) ? "text-primary" : "text-foreground"}
        />
        <span
          className={isActive(item.url) ? "text-primary" : "text-foreground"}
        >
          {item.title}
        </span>
      </Link>
    </SidebarMenuButtonComponent>
  );
}
