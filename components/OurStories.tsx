import { stories } from "@/lib/mockdata";
import Image from "next/image";
import {
  TbCreditCard,
  TbHeadphones,
  TbMoneybag,
  TbMotorbike,
  TbPlaneInflight,
  TbShip,
} from "react-icons/tb";

export default function OurStories() {
  return (
    <section>
      <div>
        <h4 className="text-2xl font-medium text-center">
          Our Instagram Stories
        </h4>
        <ul className="my-6 sm:my-8 md:my-10 grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-8">
          {stories.map((story, index) => {
            return (
              <li
                key={index}
                className="h-auto max-h-64 sm:max-h-72 md:max-h-80"
              >
                <Image
                  src={story.imgUrl}
                  width={0}
                  height={0}
                  alt="guy"
                  sizes="100vw"
                  className="object-cover h-full w-full"
                />
              </li>
            );
          })}
        </ul>

        <ul className="my-4 md:my-10 grid md:grid-cols-4 grid-cols-2 gap-4">
          <li className="md:space-y-1">
            <TbPlaneInflight className="text-2xl" />
            <h6 className="font-semibold text-lg lg:text-xl">free shipping</h6>
            <p className="text-sm">Free shipping for order above $150</p>
          </li>
          <li className="md:space-y-1">
            <TbMoneybag className="text-2xl" />
            <h6 className="font-semibold text-lg lg:text-xl">
              money guarantee
            </h6>
            <p className="text-sm">Free shipping for order above $150</p>
          </li>
          <li className="md:space-y-1">
            <TbHeadphones className="text-2xl" />
            <h6 className="font-semibold text-lg lg:text-xl">online support</h6>
            <p className="text-sm">Free shipping for order above $150</p>
          </li>
          <li className="md:space-y-1">
            <TbCreditCard className="text-2xl" />
            <h6 className="font-semibold text-lg lg:text-xl">
              flexible payment
            </h6>
            <p className="text-sm">Free shipping for order above $150</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
