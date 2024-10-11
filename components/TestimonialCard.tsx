import Image from "next/image";
import { TbStar } from "react-icons/tb";
import RoundImgAndTitle from "./RoundImg";
import RoundImg from "./RoundImg";

export default function TestimonialCard({
  author,
  text,
  imgUrl,
  occupation,
  rating,
}: {
  author: string;
  text: string;
  imgUrl: string;
  occupation: string;
  rating: number;
}) {
  return (
    <div className="bg-white w-full md:h-72 p-6 md:p-4 flex flex-col">
      <div className="flex items-center space-x-1 sm:justify-center md:justify-start">
        {Array.from({ length: rating }, (_, index) => {
          return (
            <TbStar
              key={index}
              fill="#FFD700"
              className="stroke-none text-xl"
            />
          );
        })}
      </div>
      <p className="my-3 flex-1 sm:text-center md:text-left">{text}</p>
      <div className="flex sm:flex-col md:flex-row items-center space-x-4">
        <RoundImg imgUrl={imgUrl} />
        <div className="capitalize sm:text-center md:text-left">
          <h6 className="font-semibold whitespace-nowrap">{author}</h6>
          <p className="text-sm text-gray-400">{occupation}</p>
        </div>
      </div>
    </div>
  );
}
