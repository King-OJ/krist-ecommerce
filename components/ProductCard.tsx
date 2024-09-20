import { productDetail } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { TbArrowsSort, TbEye, TbStar } from "react-icons/tb";

export default function ProductCard({ product }: { product: productDetail }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Link href={product.id} className="block space-y-2 group">
      <div className="relative h-64 w-full group-hover:bg-slate-200 transition duration-150 bg-slate-100">
        <Image
          src={product.productImgUrl[0] || "/fashion_img.png"}
          alt="product"
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-contain aspect-auto"
        />

        <div className="hidden group-hover:block transition duration-150 px-4 h-8 absolute bottom-4 right-0 left-0 z-30">
          <button className="h-full capitalize text-sm font-semibold rounded-md grid place-content-center w-full bg-gray-50">
            Add to cart
          </button>
        </div>
        <div className="hidden group-hover:block transition duration-150 absolute right-0 space-y-2 top-0 px-4 py-6">
          <button className="bg-gray-50 h-7 w-7 grid place-content-center rounded-full">
            <TbStar />
          </button>
          <button className="bg-gray-50 h-7 w-7 grid place-content-center rounded-full">
            <TbArrowsSort className="rotate-90" />
          </button>
          <button className="bg-gray-50 h-7 w-7 grid place-content-center rounded-full">
            <TbEye />
          </button>
        </div>
      </div>
      <div className="space-y-[3px]">
        <h6 className="font-semibold capitalize">{product.title}</h6>
        <p className="capitalize text-sm font-normal">{product.subtitle}</p>
        <div className="flex space-x-[6px] text-sm">
          <p className="font-medium">{formatter.format(product.price)}</p>
          {product.oldPrice && (
            <p className="text-gray-400 line-through">
              {formatter.format(product.oldPrice)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
