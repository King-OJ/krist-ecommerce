"use client";

import { validateEmail } from "@/lib/utils";
import { ChangeEvent, useEffect, useState } from "react";

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
  value: string;
  onChange: (e: ChangeEvent) => void;
}) {
  const [error, setError] = useState("");

  // useEffect(() => {
  // if (type == "email") {
  //   if (value.length > 6 && !validateEmail(value)) {
  //     setError("Please provide a valid email");
  //   }
  // } else if (type == "password") {
  //   if (value.length > 2 && value.length < 6) {
  //     setError("Password length must be atleast 6 characters");
  //   }
  // } else {
  //   if (value && value.length < 3) {
  //     setError("Please provide full information");
  //   }
  // }

  //   return () => {
  //     setError("");
  //   };
  // }, [value]);

  let timer: number | undefined,
    timeoutVal = 1000;

  return (
    <div className="mt-4 w-full block">
      <label
        htmlFor={name}
        className="capitalize block text-sm font-normal mb-1"
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
        required
        type={type}
        placeholder={placeholder}
        className={`block py-2 text-sm placeholder:text-[12px]
        ${name == "lastName" && "capitalize"}
        ${
          name == "firstName" && "capitalize"
        } font-normal text-black outline-none border ${
          error ? "border-red-500" : "border-black"
        } rounded-lg px-2 w-full`}
        onKeyUp={() => {
          window.clearTimeout(timer);
          timer = window.setTimeout(() => {
            if (type == "email") {
              if (value.length > 5 && !validateEmail(value)) {
                setError("Please provide a valid email");
              }
            } else if (type == "password") {
              // if (value.length > 2 && value.length < 6) {
              //   setError("Password length must be atleast 6 characters");
              // }
              return;
            } else {
              if (value && value.length < 3) {
                setError("Please provide full name");
              }
            }
          }, timeoutVal);
        }}
        onKeyDown={() => {
          window.clearTimeout(timer);
          setError("");
        }}
      />
      {error && <p className="text-xs mt-1 text-red-500">{error}</p>}
    </div>
  );
}
export default FormLabelAndInput;
