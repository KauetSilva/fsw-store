import { ProductWithTotalPrice } from "@/helpers/products";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDown01Icon, ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[170px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-[90px] max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
          alt={product.name}
        />

        {product.discountPercentage > 0 && (
        <Badge className="absolute left-3 top-3">
           <ArrowDownIcon size={12}/> {product.discountPercentage}%
        </Badge>
      )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>
        <div className="flex items-center justify-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          {product.discountPercentage > 0 ? (
            <>
              <p className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                R$ {product.totalPrice.toFixed(2)}
              </p>
              <p className="text-xs line-through opacity-75 overflow-hidden text-ellipsis whitespace-nowrap">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
              R$ {Number(product.basePrice).toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
