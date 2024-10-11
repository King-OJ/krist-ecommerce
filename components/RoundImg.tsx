import Image from "next/image";

interface RoundImgProps {
  imgUrl: string;
}

export default function RoundImg({ imgUrl }: RoundImgProps) {
  return (
    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden">
      <Image
        src={imgUrl}
        alt="profile"
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto h-auto object-center object-cover"
      />
    </div>
  );
}
