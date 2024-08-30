"use client";

type ActionButtonProp = {
  title: String;
  action?: () => void;
  disabled?: boolean;
};

export default function ActionButton({
  title,
  action,
  disabled,
}: ActionButtonProp) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={action}
      className="disabled:bg-opacity-80 transition-all duration-200 mt-8 capitalize py-[10px] rounded-lg font-thin text-sm bg-black text-white w-full"
    >
      {title}
    </button>
  );
}
