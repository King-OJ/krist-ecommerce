import ActionButton from "@/components/ActionButton";
import Image from "next/image";
import landingImg from "../public/krist_landing_img.png";

export default function Hero() {
  return (
    <section className="md:pt-4 px-4">
      <div className="w-full bg-neutral-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 gap-2 md:gap-6 flex flex-col-reverse md:flex-row items-center min-h-[calc(100vh-64px)]">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="capitalize text-base md:text-lg font-semibold">
              classic exclusive
            </h3>
            <h1 className="text-2xl lg:text-5xl md:text-3xl my-1 md:my-2 font-extrabold capitalize">
              womens collection
            </h1>
            <p className="uppercase text-base md:text-lg">upto 40% off</p>
            <div className="max-w-[200px] mt-4 md:mt-8">
              <ActionButton title={"shop now"} icon={"arrow"} />
            </div>
          </div>

          <div className="md:flex-1 w-full">
            <div
              className="border-[16px] after:content-[''] 
              before:content-[''] 
              before:absolute 
              before:-top-4 
              before:-bottom-4 
              before:-right-4 
              before:w-[16px] 
              before:bg-white
              before:z-40
              relative 
              after:absolute 
              after:-bottom-4 
              after:-right-4 
              after:-left-4 
              after:h-[16px] 
              after:bg-white 
              my-4 flex justify-center border-white w-full max-w-[350px] mx-auto"
            >
              <Image
                src={landingImg}
                alt="fashion girl"
                width={200}
                height={300}
                className="aspect-auto scale-110 md:scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
