import { Badge } from "@/shared/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import { Transaction } from "@/features/ecommerce/types";
import {
  formatDate,
  formatAmount,
  getInitials,
} from "@/shared/utils/formatters";
import { getTransactionStatusConfig } from "@/shared/utils/transaction-utils";

interface TransactionItemProps {
  transaction: Transaction;
  className?: string;
}

export default function TransactionItem({
  transaction,
  className,
}: TransactionItemProps) {
  const statusConfig = getTransactionStatusConfig(transaction.status);
  const initials = getInitials(transaction.customerName);

  return (
    <div
      className={`flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors ${
        className || ""
      }`}
    >
      <div className="flex items-center space-x-3">
        <Avatar className="w-8 h-8">
          <AvatarImage src={transaction.customerAvatar} />
          <AvatarFallback className="text-xs">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-sm">{transaction.customerName}</p>
          <p className="text-xs text-muted-foreground">
            {transaction.productName}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="text-right">
          <p className="font-medium text-sm">
            {formatAmount(transaction.amount)}
          </p>
          <p className="text-xs text-muted-foreground">
            {transaction.paymentMethod}
          </p>
        </div>

        <Badge
          variant="secondary"
          className={`${statusConfig.color} ${statusConfig.bgColor} border-0`}
        >
          {statusConfig.label}
        </Badge>

        <div className="text-right">
          <p className="text-xs text-muted-foreground">
            {formatDate(transaction.transactionDate)}
          </p>
          <p className="text-xs text-muted-foreground">{transaction.orderId}</p>
        </div>
      </div>
    </div>
  );
}
