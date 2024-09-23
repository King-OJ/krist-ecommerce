import { testimonials } from "@/lib/mockdata";
import { TbArrowLeft, TbArrowRight } from "react-icons/tb";
import TestimonialCard from "./TestimonialCard";

export default function WhatCustomersSay() {
  return (
    <section className="bg-gray-50">
      <div>
        <div className="flex justify-between items-center py-10">
          <h4 className="text-2xl font-medium">What our Customers say</h4>
          <div className="flex items-center space-x-4">
            <button className="px-3 rounded-lg text-xl py-[10px] bg-neutral-300 text-white">
              <TbArrowLeft />
            </button>
            <button className="px-3 rounded-lg text-xl py-[10px] bg-black text-white">
              <TbArrowRight />
            </button>
          </div>
        </div>

        <div className="overflow-x-hidden pb-16">
          <ul className="grid sm:grid-flow-col md:grid-cols-3 gap-4">
            {testimonials.map((testimony, index) => {
              return (
                <TestimonialCard
                  rating={testimony.rating}
                  text={testimony.text}
                  author={testimony.author}
                  imgUrl={testimony.imgUrl}
                  occupation={testimony.occupation}
                  key={index}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
