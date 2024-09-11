import { TbArrowLeft, TbArrowRight } from "react-icons/tb";

export default function Categories() {
  return (
    <section className="md:pt-4 px-4">
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
        </div>
      </div>
    </section>
  );
}
