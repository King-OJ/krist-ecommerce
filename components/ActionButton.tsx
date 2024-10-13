"use client";

import { ReactNode } from "react";
type ActionButtonProp = {
  title: String;
  action?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
};

export default function ActionButton({
  title,
  action,
  disabled,
  icon,
}: ActionButtonProp) {
  return (
    <button
      onClick={action}
      type="submit"
      disabled={disabled}
      className={`disabled:bg-opacity-80 transition-all flex items-center justify-center px-4 sm:px-5 md:px-6 duration-200 capitalize py-1 sm:py-[6px] md:py-[10px] rounded-lg font-light text-sm md:text-base bg-black text-white w-full`}
    >
      {title}
      {disabled && (
        <span className="animate-spin rounded-full border-2 border-white border-t-black h-4 w-4 md:h-5 md:w-5 ml-2 block"></span>
      )}
      {icon && <div className="ml-2">{icon}</div>}
    </button>
  );
}
