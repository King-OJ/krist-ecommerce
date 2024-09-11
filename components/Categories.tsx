import { TbArrowLeft, TbArrowRight } from "react-icons/tb";
import ProductCategoryCard from "./ProductCategoryCard";

export default function Categories() {
  return (
    <section>
      <div className="px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <h4 className="text-2xl">Shop by Categories</h4>
            <div className="flex items-center space-x-4">
              <button className="px-3 rounded-lg text-xl py-[10px] bg-neutral-300 text-white">
                <TbArrowLeft />
              </button>
              <button className="px-3 rounded-lg text-xl py-[10px] bg-black text-white">
                <TbArrowRight />
              </button>
            </div>
          </div>
          <div className="my-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              <ProductCategoryCard
                title="casual wear"
                imgUrl="/fashion_img.png"
                productLink="/"
              />
              <ProductCategoryCard
                title="western wear"
                imgUrl="/fashion_img1.png"
                productLink="/"
              />
              <ProductCategoryCard
                title="ethnic wear"
                imgUrl="/fashion_img2.png"
                productLink="/"
              />
              <ProductCategoryCard
                title="kids wear"
                imgUrl="/fashion_img3.png"
                productLink="/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
