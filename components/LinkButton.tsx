import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";
type LinkButtonProp = {
  title: string;
  href: string;
  icon?: boolean;
};

export default function LinkButton({ title, href, icon }: LinkButtonProp) {
  return (
    <Link
      href={href}
      className={`disabled:bg-opacity-80 transition-all flex items-center justify-center px-4 sm:px-[20px] md:px-6 duration-200 text-sm capitalize py-1 sm:py-[6px] md:py-[10px] rounded-lg font-normal bg-black text-white w-full`}
    >
      {title}
      {icon && <TbArrowRight className="ml-2" />}
    </Link>
  );
}
