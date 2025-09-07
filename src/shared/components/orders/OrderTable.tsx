import DataTable, {
  DataTableColumn,
} from "@/shared/components/common/Table/DataTable";
import TableCell from "@/shared/components/common/Table/TableCell";
import OrderStatusBadge from "./OrderStatusBadge";
import { Order } from "@/features/ecommerce/types";

interface OrderTableProps {
  orders: Order[];
  className?: string;
}

const columns: DataTableColumn[] = [
  { key: "order", header: "Order", width: "w-20" },
  { key: "customer", header: "Customer" },
  { key: "product", header: "Product" },
  { key: "date", header: "Date" },
  { key: "amount", header: "Amount", align: "right" as const },
  { key: "status", header: "Status" },
];

export default function OrderTable({ orders, className }: OrderTableProps) {
  const renderRow = (order: Order) => (
    <tr key={order.id} className="hover:bg-accent/50">
      <TableCell>
        <span className="font-medium text-foreground">{order.id}</span>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
          </div>
          <div>
            <div className="font-medium text-foreground">
              {order.customerName}
            </div>
            <div className="text-xs text-muted-foreground">
              {order.customerEmail}
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <span className="text-foreground">{order.productName}</span>
      </TableCell>
      <TableCell>
        <span className="text-muted-foreground">
          {new Date(order.orderDate).toLocaleDateString()}
        </span>
      </TableCell>
      <TableCell align="right">
        <span className="font-semibold text-foreground">
          ${order.amount.toFixed(2)}
        </span>
      </TableCell>
      <TableCell>
        <OrderStatusBadge status={order.status} />
      </TableCell>
    </tr>
  );

  return (
    <div className={className}>
      <DataTable columns={columns} data={orders} renderRow={renderRow} />
    </div>
  );
}
