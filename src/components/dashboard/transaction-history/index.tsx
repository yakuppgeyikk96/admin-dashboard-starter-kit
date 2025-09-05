"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import {
  TRANSACTIONS,
  TRANSACTION_STATUS_CONFIG,
} from "@/shared/constants/transaction-history";
import { Transaction } from "@/shared/types/Transaction";

export default function TransactionHistory() {
  const [timeFilter, setTimeFilter] = useState("All Time");

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const getStatusConfig = (status: Transaction["status"]) => {
    return TRANSACTION_STATUS_CONFIG[status];
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Transaction History</span>
          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className="text-sm border rounded-md px-2 py-1 bg-background"
          >
            <option value="All Time">All Time</option>
            <option value="This Month">This Month</option>
            <option value="Last 30 Days">Last 30 Days</option>
            <option value="This Year">This Year</option>
          </select>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {TRANSACTIONS.map((transaction) => {
            const statusConfig = getStatusConfig(transaction.status);
            const initials = transaction.customerName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase();

            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={transaction.customerAvatar} />
                    <AvatarFallback className="text-xs">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">
                      {transaction.customerName}
                    </p>
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
                    <p className="text-xs text-muted-foreground">
                      {transaction.orderId}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
