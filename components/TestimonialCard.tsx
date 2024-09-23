import Image from "next/image";
import { TbStar } from "react-icons/tb";

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
        <div className="h-10 w-10 md:h-14 md:w-14 rounded-full overflow-hidden">
          <Image
            src={imgUrl}
            alt="profile"
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-auto object-center object-cover"
          />
        </div>
        <div className="capitalize sm:text-center md:text-left">
          <h6 className="font-semibold whitespace-nowrap">{author}</h6>
          <p className="text-sm text-gray-400">{occupation}</p>
        </div>
      </div>
    </div>
  );
}
