import { ProductCategory, productCategories } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({
  category,
}: {
  category: ProductCategory;
}) {
  return (
    <div className="w-full h-72 lg:h-80 bg-neutral-200 flex justify-end rounded-md overflow-hidden relative">
      <div className="relative basis-4/5 z-20">
        <Image
          alt="product"
          src={category.imgUrl}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-contain"
        />
      </div>

      <div className="px-2 h-8 absolute bottom-4 right-0 left-0 z-30">
        <Link
          href={category.id}
          className="h-full font-normal capitalize rounded-md grid place-content-center w-full bg-gray-50"
        >
          {`${productCategories[category.category]} wears`}
        </Link>
      </div>
      <p className="z-10 text-nowrap absolute top-2 capitalize left-[15%] text-5xl font-extrabold text-neutral-50 text-opacity-70">
        {productCategories[category.category]}
      </p>
    </div>
  );
}
