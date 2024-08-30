"use client";

import { AuthFormInput } from "@/app/sign-up/page";
import { ChangeEvent, useState } from "react";

function FormLabelAndInput({
  name,
  type,
  placeholder,
  label,
  value,
  onChange,
}: {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  value?: string;
  onChange: (e: ChangeEvent) => void;
}) {
  return (
    <div className="mb-4 w-full block">
      <label
        htmlFor={name}
        className="capitalize block text-xs font-extralight mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        onChange={(e) => {
          onChange(e);
        }}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        className="block py-[6px] text-[12px] font-thin outline-none border border-black rounded-lg px-2 w-full"
      />
    </div>
  );
}
export default FormLabelAndInput;
