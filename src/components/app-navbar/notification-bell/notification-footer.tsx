import { Button } from "@/components/ui/button";

interface NotificationFooterProps {
  hasNotifications: boolean;
  onShowMore: () => void;
}

export default function NotificationFooter({
  hasNotifications,
  onShowMore,
}: NotificationFooterProps) {
  if (!hasNotifications) {
    return null;
  }

  return (
    <div className="p-3 border-t">
      <Button size="sm" className="w-full" onClick={onShowMore}>
        Show More
      </Button>
    </div>
  );
}
