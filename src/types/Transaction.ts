export interface Transaction {
  id: string;
  customerName: string;
  customerEmail: string;
  customerAvatar?: string;
  productName: string;
  transactionDate: string;
  amount: number;
  status: TransactionStatus;
  paymentMethod: string;
  orderId: string;
}

export type TransactionStatus = "completed" | "pending" | "failed" | "refunded";

export interface TransactionStatusConfig {
  label: string;
  color: string;
  bgColor: string;
}
