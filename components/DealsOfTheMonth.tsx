import Image from "next/image";
import LinkButton from "./LinkButton";

export default function DealsOfTheMonth() {
  return (
    <section>
      <div>
        <div className="flex gap-4 py-8">
          <div className="basis-2/3 sm:basis-1/2 flex flex-col justify-center">
            <h4 className="text-2xl font-medium">Deals of the Month</h4>
            <p className="my-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, accusantium itaque. Quasi voluptatibus debitis nobis ad
              aspernatur minima a assumenda.
            </p>
            <div className="space-x-3 flex items-center">
              <div className="border rounded-lg h-16 w-16 grid place-content-center text-center">
                <p className="font-extrabold text-xl">120</p>
                <p className="text-sm">Days</p>
              </div>
              <div className="border rounded-lg h-16 w-16 grid place-content-center text-center">
                <p className="font-extrabold text-xl">18</p>
                <p className="text-sm">Hours</p>
              </div>
              <div className="border rounded-lg h-16 w-16 grid place-content-center text-center">
                <p className="font-extrabold text-xl">15</p>
                <p className="text-sm">Mins</p>
              </div>
              <div className="border rounded-lg h-16 w-16 grid place-content-center text-center">
                <p className="font-extrabold text-xl">10</p>
                <p className="text-sm">Secs</p>
              </div>
            </div>
            <div className="max-w-[260px] mt-6 md:mt-8">
              <LinkButton title="view all products" href="/" icon />
            </div>
          </div>
          <div className="basis-1/3 sm:basis-1/2 overflow-hidden">
            <div className="relative xl:h-[420px] h-96 w-full bg-gray-100">
              <Image
                alt="product"
                src="/fashion_img_dealOfTheMonth.png"
                sizes="(min-width: 808px) 50vw, 100vw"
                width={0}
                height={0}
                className="object-cover h-full w-full z-30 relative"
              />
              <div className="absolute z-10 h-full -skew-x-[20deg] top-0 right-0 w-32 md:w-40 bg-red-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
