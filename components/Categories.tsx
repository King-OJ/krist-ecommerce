import { TbArrowLeft, TbArrowRight } from "react-icons/tb";
import CategoryCard from "./CategoryCard";
import { categories } from "@/lib/mockdata";

export default function Categories() {
  return (
    <section>
      <div>
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-medium">Shop by Categories</h4>
          <div className="flex items-center space-x-4">
            <button className="px-3 rounded-lg text-xl py-[10px] bg-neutral-300 text-white">
              <TbArrowLeft />
            </button>
            <button className="px-3 rounded-lg text-xl py-[10px] bg-black text-white">
              <TbArrowRight />
            </button>
          </div>
        </div>
        <div className="my-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => {
              return <CategoryCard key={category.id} category={category} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
