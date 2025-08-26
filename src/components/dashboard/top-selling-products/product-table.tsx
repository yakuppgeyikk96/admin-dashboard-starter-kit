import DataTable from "@/components/common/table/data-table";
import TableCell from "@/components/common/table/table-cell";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  name: string;
  itemsSold: number;
  itemId: string;
  sales: number;
}

interface ProductTableProps {
  products: Product[];
  startIndex: number;
}

const columns = [
  { key: "rank", header: "Rank", width: "w-12 sm:w-16" },
  { key: "product", header: "Product" },
  { key: "itemsSold", header: "Sold", width: "hidden sm:table-cell" },
  { key: "itemId", header: "ID", width: "hidden lg:table-cell" },
  { key: "sales", header: "Sales", align: "right" as const },
];

export default function ProductTable({
  products,
  startIndex,
}: ProductTableProps) {
  const renderRow = (product: Product, index: number) => (
    <tr key={product.id} className="hover:bg-accent/50">
      <TableCell>
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs sm:text-sm font-semibold text-primary">
          {String(startIndex + index + 1).padStart(2, "0")}.
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center">
            <div className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
          </div>
          <span className="font-medium text-sm sm:text-base">
            {product.name}
          </span>
        </div>
      </TableCell>
      <TableCell className="hidden sm:table-cell">
        {product.itemsSold}
      </TableCell>
      <TableCell className="hidden lg:table-cell">
        <Badge variant="secondary" className="text-xs">
          {product.itemId}
        </Badge>
      </TableCell>
      <TableCell align="right" className="font-semibold text-sm sm:text-base">
        ${product.sales.toLocaleString()}
      </TableCell>
    </tr>
  );

  return (
    <div className="overflow-x-auto">
      <DataTable columns={columns} data={products} renderRow={renderRow} />
    </div>
  );
}
