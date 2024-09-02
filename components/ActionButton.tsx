"use client";

import { TbArrowRight } from "react-icons/tb";
type ActionButtonProp = {
  title: String;
  action?: () => void;
  disabled?: boolean;
  icon?: string;
};

export default function ActionButton({
  title,
  action,
  disabled,
  icon,
}: ActionButtonProp) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={action}
      className={`disabled:bg-opacity-80 transition-all flex items-center justify-center px-6 duration-200 capitalize py-[8px] rounded-lg font-normal text-sm bg-black text-white w-full`}
    >
      {title}
      {icon && icon == "arrow" && <TbArrowRight className="ml-2" />}
    </button>
  );
}
