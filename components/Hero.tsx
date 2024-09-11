import LinkButton from "@/components/LinkButton";
import Image from "next/image";
import landingImg from "../public/krist_landing_img2.png";

export default function Hero() {
  return (
    <section>
      <div className="px-4 sm:px-8">
        <div className="w-full bg-neutral-200 overflow-hidden relative">
          <div className="max-w-6xl mx-auto z-20 px-4 sm:px-8 md:px-12 gap-2 md:gap-6 flex flex-col-reverse md:flex-row items-center min-h-[calc(100vh-64px)]">
            <div className="flex-1 md:flex-none z-20 text-center md:text-left mb-4 md:mb-0">
              <h3 className="capitalize text-base md:text-lg font-semibold">
                classic exclusive
              </h3>
              <h1 className="text-2xl lg:text-5xl md:text-3xl my-1 md:my-2 font-extrabold capitalize">
                womens collection
              </h1>
              <p className="uppercase text-base md:text-lg">upto 40% off</p>
              <div className="max-w-[300px] mt-2 md:mt-8">
                <LinkButton title={"shop now"} icon={"arrow"} href={"/shop"} />
              </div>
            </div>

            <div className="md:flex-1 w-full z-20">
              <div
                className="border-[12px] md:border-[16px] after:content-[''] 
              before:content-[''] 
              before:absolute 
              before:md:-top-4 
              before:md:-bottom-4 
              before:md:-right-4 
              before:md:w-[16px]
              before:w-[12px] 
              before:bg-white
              before:z-40
              relative 
              after:absolute 
              after:md:-bottom-4 
              after:md:-right-4 
              after:md:-left-4 
              after:md:h-[16px]
              after:h-[12px] 
              after:bg-white 
              my-6 sm:my-12 flex justify-center border-white md:w-full md:h-full min-w-[200px] min-h-[200px] max-w-[400px] mx-auto"
              >
                <Image
                  src={landingImg}
                  alt="fashion girl"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="block aspect-auto w-full h-full min-w-full min-h-full"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-0 md:top-auto z-10 right-0 left-0 bottom-0 md:bottom-6 px-4 md:px-12">
            <h2 className="hidden md:block text-4xl sm:text-6xl lg:text-[90px] uppercase font-extrabold text-neutral-50 text-opacity-50">
              best collection
            </h2>
            <h2 className="md:hidden flex sm:-tracking-[0.2em] justify-between sm:items-center text-[40px] sm:text-6xl lg:text-[90px] uppercase font-extrabold text-neutral-50 text-opacity-50">
              <span className="block verticalText">best</span>
              <span className="block verticalText">collection</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
