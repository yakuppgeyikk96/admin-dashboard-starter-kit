import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import DataTable from "@/shared/components/common/Table/DataTable";
import { type DataTableColumn } from "@/shared/components/common/Table/DataTable";
import { type Product } from "@/features/ecommerce/types/Product.types";
import { formatAmount } from "@/shared/utils/formatters";
import { Star, MoreHorizontal, Edit, Trash2, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import Image from "next/image";

interface ProductsTableProps {
  products: Product[];
  className?: string;
}

const columns: DataTableColumn[] = [
  { key: "id", header: "ID", width: "w-16", align: "center" },
  { key: "product", header: "Product", width: "w-80" },
  { key: "category", header: "Category", width: "w-32" },
  { key: "brand", header: "Brand", width: "w-24" },
  { key: "price", header: "Price", width: "w-24", align: "right" },
  { key: "stock", header: "Stock", width: "w-20", align: "center" },
  { key: "rating", header: "Rating", width: "w-24", align: "center" },
  { key: "status", header: "Status", width: "w-24", align: "center" },
  { key: "actions", header: "Actions", width: "w-20", align: "center" },
];

export default function ProductsTable({
  products,
  className,
}: ProductsTableProps) {
  const getStatusBadge = (status: Product["status"]) => {
    const variants = {
      "in-stock": "default",
      "low-stock": "secondary",
      "out-of-stock": "destructive",
    } as const;

    const labels = {
      "in-stock": "In Stock",
      "low-stock": "Low Stock",
      "out-of-stock": "Out of Stock",
    };

    return <Badge variant={variants[status]}>{labels[status]}</Badge>;
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        <div className="flex">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-muted-foreground ml-1">
          {rating.toFixed(1)}
        </span>
      </div>
    );
  };

  const renderRow = (product: Product) => {
    return (
      <tr key={product.id} className="border-b hover:bg-muted/50">
        <td className="p-4 text-center">
          <span className="text-sm font-mono text-muted-foreground">
            #{product.id}
          </span>
        </td>
        <td className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-muted flex-shrink-0">
              <Image
                width={48}
                height={48}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-medium text-sm truncate">{product.name}</h3>
              <p className="text-xs text-muted-foreground truncate">
                {product.description}
              </p>
            </div>
          </div>
        </td>
        <td className="p-4">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
        </td>
        <td className="p-4">
          <span className="text-sm font-medium">{product.brand}</span>
        </td>
        <td className="p-4 text-right">
          <div className="text-sm font-medium">
            {formatAmount(product.price)}
          </div>
          {product.originalPrice && product.originalPrice > product.price && (
            <div className="text-xs text-muted-foreground line-through">
              {formatAmount(product.originalPrice)}
            </div>
          )}
        </td>
        <td className="p-4 text-center">
          <span className="text-sm font-medium">{product.stock}</span>
        </td>
        <td className="p-4 text-center">{renderStars(product.rating)}</td>
        <td className="p-4 text-center">{getStatusBadge(product.status)}</td>
        <td className="p-4 text-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Eye className="w-4 h-4 mr-2" />
                View
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </td>
      </tr>
    );
  };

  return (
    <div className="rounded-lg border bg-card p-4">
      <DataTable
        columns={columns}
        data={products}
        renderRow={renderRow}
        className={className}
      />
    </div>
  );
}
