import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useEffect, useState } from "react";
import { roomService } from "@/services";
import { Button } from "./ui/button";
import { formatNumber } from "@/utils";

interface RoomItemProps {
  data: IRoom;
}

const RoomItem = ({ data }: RoomItemProps) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [productPrices, setProductPrices] = useState<{
    [key: string]: IProductPrice | null;
  }>({});

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  const handleGetAllProducts = async () => {
    try {
      if (data?.products && data?.products?.length > 0) {
        const prices: { [key: string]: IProductPrice | null } = {};

        await Promise.all(
          data.products.map(async (product) => {
            try {
              const price = await roomService.getProductPrice(product.id);
              prices[product.id] = price.data;
            } catch (error) {
              console.error(
                `Failed to fetch price for product ${product.id}`,
                error
              );
              prices[product.id] = null;
            }
          })
        );

        setProductPrices(prices);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TooltipProvider>
      <div
        className="Grid-module_gridItem group relative"
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
      >
        <div
          className={`${
            data?.index !== 1 ? "aspect-3/4" : "aspect-square"
          } relative`}
        >
          <div className="w-full relative cursor-pointer">
            <Link href={`/room/${data.id}`} className="block relative">
              <span
                className={`box-border block relative w-full h-auto ${
                  data?.index !== 1 ? "pb-[133.3333333333%]" : "pb-[100%]"
                }`}
              >
                <Image
                  alt={data?.altText}
                  src={data?.url || ""}
                  fill
                  sizes="(min-width: 1200px) 550px, (min-width: 900px) 375px, (min-width: 600px) 300px, 65vw"
                  priority={false}
                  className="w-full h-full object-cover absolute top-0 left-0 rounded-lg"
                />
              </span>
            </Link>

            <div
              className={`${
                data?.index !== 1 ? "pb-[133.3333333333%]" : "pb-[100%]"
              } bg-none absolute top-0 box-border block w-full h-auto transition-opacity ${
                isTooltipOpen
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            >
              {data?.products && data?.products.length > 0 &&
                data?.products.map((product, index) => (
                  <Tooltip
                    key={index}
                    defaultOpen={false}
                    delayDuration={0}
                    onOpenChange={(open) => setIsTooltipOpen(open)}
                  >
                    <TooltipTrigger asChild>
                      <div
                        className="absolute cursor-pointer"
                        style={{
                          top: `${product?.dotCoordinates.y}%`,
                          left: `${product?.dotCoordinates.x}%`,
                        }}
                      >
                        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center"></div>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      align="center"
                      className="bg-white shadow-md rounded-md p-2 w-[200px] pointer-events-auto"
                    >
                      {productPrices[product.id] ? (
                        <>
                          <p className="mt-1 text-gray-800 truncate font-bold text-base">
                            Product: {productPrices[product.id]?.productName || "-"}
                          </p>
                          <p className="mt-1 text-gray-600 text-xs truncate">
                            Description {productPrices[product.id]?.description || "-"}
                          </p>
                          <p className="mt-1 text-gray-900 font-bold">
                            Price: {productPrices[product.id]?.price ? formatNumber(productPrices[product.id]?.price) : "-"}$
                          </p>
                          <div className="flex justify-center mt-2 w-full">
                            <Button size="sm">
                              View Product
                            </Button>
                          </div>
                        </>
                      ) : (
                        <p>No Data</p>
                      )}
                    </TooltipContent>
                  </Tooltip>
                ))}
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default RoomItem;
