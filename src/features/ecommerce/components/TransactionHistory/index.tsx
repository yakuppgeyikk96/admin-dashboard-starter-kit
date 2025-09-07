"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import TransactionHistoryTimeFilter from "./TransactionHistoryTimeFilter";
import TransactionItem from "@/shared/components/transactions/TransactionItem";
import { TRANSACTIONS } from "@/features/ecommerce/constants/transactionHistory";
import { filterTransactionsByTime } from "@/shared/utils/transaction-utils";
import { TRANSACTION_TIME_FILTERS } from "@/shared/constants/timeFilters";

export default function TransactionHistory() {
  const [timeFilter, setTimeFilter] = useState(TRANSACTION_TIME_FILTERS[0]);

  const filteredTransactions = filterTransactionsByTime(
    TRANSACTIONS,
    timeFilter
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Transaction History</span>
          <TransactionHistoryTimeFilter
            timeFilter={timeFilter}
            onTimeFilterChange={setTimeFilter}
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredTransactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
