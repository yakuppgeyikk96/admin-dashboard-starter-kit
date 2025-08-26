import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NotificationHeaderProps {
  onClose: () => void;
}

export default function NotificationHeader({
  onClose,
}: NotificationHeaderProps) {
  return (
    <div className="p-4 border-b">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground">Notifications</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="h-6 w-6 p-0"
        >
          <X className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
}
