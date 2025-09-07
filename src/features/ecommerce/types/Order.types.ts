export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerAvatar?: string;
  productName: string;
  orderDate: string;
  amount: number;
  status: OrderStatus;
  paymentMethod: string;
}

export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface OrderStatusConfig {
  label: string;
  color: string;
  bgColor: string;
}
