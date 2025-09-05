import { Product } from "@/shared/types/Product";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";
import {
  getProductStatusColor,
  getProductStatusText,
} from "@/shared/utils/product-utils";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow p-0">
      <CardHeader className="p-0">
        <div className="aspect-square bg-gray-100 rounded-t-lg mb-3 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <div className="space-y-1 px-4">
          <h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.brand}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between mb-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-gray-600">{product.rating}</span>
              <span className="text-xs text-gray-400">({product.reviews})</span>
            </div>
          </div>
          <Badge className={getProductStatusColor(product.status)}>
            {getProductStatusText(product.status)}
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button size="lg" className="flex-1 cursor-pointer">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
