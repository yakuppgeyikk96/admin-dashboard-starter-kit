import { Order, OrderStatusConfig } from "@/shared/types/Order";

export const ITEMS_PER_PAGE = 5;

export const TIME_FILTERS = ["Today", "This Week", "This Month", "This Year"];

export const ORDER_STATUS_CONFIG: Record<string, OrderStatusConfig> = {
  pending: {
    label: "Pending",
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
  },
  processing: {
    label: "Processing",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  shipped: {
    label: "Shipped",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  delivered: {
    label: "Delivered",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
  cancelled: {
    label: "Cancelled",
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-50 dark:bg-red-900/20",
  },
};

export const RECENT_ORDERS: Order[] = [
  {
    id: "ORD-001",
    customerName: "John Doe",
    customerEmail: "john@example.com",
    customerAvatar: "/api/placeholder/32/32",
    productName: "Smart Watch",
    orderDate: "2024-01-15",
    amount: 299.99,
    status: "pending",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-002",
    customerName: "Jane Smith",
    customerEmail: "jane@example.com",
    customerAvatar: "/api/placeholder/32/32",
    productName: "Mobile Phone",
    orderDate: "2024-01-14",
    amount: 899.99,
    status: "processing",
    paymentMethod: "PayPal",
  },
  {
    id: "ORD-003",
    customerName: "Mike Johnson",
    customerEmail: "mike@example.com",
    customerAvatar: "/api/placeholder/32/32",
    productName: "Laptop Device",
    orderDate: "2024-01-13",
    amount: 1299.99,
    status: "shipped",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-004",
    customerName: "Sarah Wilson",
    customerEmail: "sarah@example.com",
    customerAvatar: "/api/placeholder/32/32",
    productName: "Headphones",
    orderDate: "2024-01-12",
    amount: 199.99,
    status: "delivered",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-005",
    customerName: "David Brown",
    customerEmail: "david@example.com",
    customerAvatar: "/api/placeholder/32/32",
    productName: "Gaming Mouse",
    orderDate: "2024-01-11",
    amount: 79.99,
    status: "cancelled",
    paymentMethod: "PayPal",
  },
  {
    id: "ORD-006",
    customerName: "Lisa Davis",
    customerEmail: "lisa@example.com",
    customerAvatar: "/api/placeholder/32/32",
    productName: "Wireless Keyboard",
    orderDate: "2024-01-10",
    amount: 149.99,
    status: "delivered",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-007",
    customerName: "Tom Miller",
    customerEmail: "tom@example.com",
    customerAvatar: "/api/placeholder/32/32",
    productName: "Bluetooth Speaker",
    orderDate: "2024-01-09",
    amount: 89.99,
    status: "shipped",
    paymentMethod: "PayPal",
  },
  {
    id: "ORD-008",
    customerName: "Emma Taylor",
    customerEmail: "emma@example.com",
    customerAvatar: "/api/placeholder/32/32",
    productName: "Power Bank",
    orderDate: "2024-01-08",
    amount: 59.99,
    status: "processing",
    paymentMethod: "Credit Card",
  },
];
