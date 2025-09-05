import { BellIcon } from "lucide-react";

export default function NotificationEmpty() {
  return (
    <div className="max-h-96 overflow-y-auto">
      <div className="p-8 text-center text-muted-foreground">
        <BellIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
        <p>No notifications yet</p>
      </div>
    </div>
  );
}
