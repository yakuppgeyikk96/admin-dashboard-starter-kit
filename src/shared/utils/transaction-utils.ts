import { Transaction } from "@/features/ecommerce/types";
import { TRANSACTION_STATUS_CONFIG } from "@/features/ecommerce/constants/transactionHistory";

export const getTransactionStatusConfig = (status: Transaction["status"]) => {
  return TRANSACTION_STATUS_CONFIG[status];
};

export const getTransactionStatusColor = (status: Transaction["status"]) => {
  const config = getTransactionStatusConfig(status);
  return `${config.color} ${config.bgColor}`;
};

export const filterTransactionsByTime = (
  transactions: Transaction[],
  timeFilter: string
): Transaction[] => {
  const now = new Date();
  const filterDate = new Date();

  switch (timeFilter) {
    case "This Month":
      filterDate.setMonth(now.getMonth());
      filterDate.setDate(1);
      break;
    case "Last 30 Days":
      filterDate.setDate(now.getDate() - 30);
      break;
    case "This Year":
      filterDate.setFullYear(now.getFullYear(), 0, 1);
      break;
    default:
      return transactions;
  }

  return transactions.filter(
    (transaction) => new Date(transaction.transactionDate) >= filterDate
  );
};
