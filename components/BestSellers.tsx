import { bestSellers } from "@/lib/mockdata";
import ProductCard from "./ProductCard";

export default function BestSellers() {
  return (
    <section>
      <div className="px-4 sm:px-8">
        <h4 className="text-2xl text-center">Our Bestseller</h4>
        <div className="my-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {bestSellers.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
