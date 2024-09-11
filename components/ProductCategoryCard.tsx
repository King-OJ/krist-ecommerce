import Image from "next/image";
import Link from "next/link";

export default function ProductCategoryCard({
  title,
  imgUrl,
  productLink,
}: {
  title: string;
  imgUrl: string;
  productLink: string;
}) {
  return (
    <div className="w-full h-72 lg:h-80 bg-neutral-200 flex justify-end rounded-md overflow-hidden relative">
      <div className="relative basis-4/5 z-20">
        <Image
          alt="product"
          src={imgUrl}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover", // cover, contain, none
          }}
        />
      </div>

      <div className="px-2 h-8 absolute bottom-2 right-0 left-0 z-30">
        <Link
          href={productLink}
          className="h-full font-normal capitalize rounded-md grid place-content-center w-full bg-gray-50"
        >
          {title}
        </Link>
      </div>
      <p className="z-10 text-nowrap absolute top-2 capitalize left-[15%] text-5xl font-extrabold text-neutral-50 text-opacity-70">
        {title}
      </p>
    </div>
  );
}
