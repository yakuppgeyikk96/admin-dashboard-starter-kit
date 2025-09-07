import { ReactNode } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";

export interface DataTableColumn {
  key: string;
  header: string;
  width?: string;
  align?: "left" | "center" | "right";
}

interface DataTableProps<T> {
  columns: DataTableColumn[];
  data: T[];
  renderRow: (item: T, index: number) => ReactNode;
  className?: string;
}

export default function DataTable<T>({
  columns,
  data,
  renderRow,
  className,
}: DataTableProps<T>) {
  return (
    <Table className={className}>
      <TableHeader>
        <TableRow>
          {columns.map((column: DataTableColumn) => (
            <TableHead
              key={column.key}
              className={column.width}
              style={{ textAlign: column.align || "left" }}
            >
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>{data.map((item, index) => renderRow(item, index))}</TableBody>
    </Table>
  );
}
