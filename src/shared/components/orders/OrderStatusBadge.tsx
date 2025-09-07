import { ORDER_STATUS_CONFIG } from "@/features/ecommerce/constants/recentOrders";

interface OrderStatusBadgeProps {
  status: string;
}

export default function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  const config = ORDER_STATUS_CONFIG[status];

  if (!config) return null;

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${config.bgColor} ${config.color}`}
    >
      {config.label}
    </span>
  );
}
