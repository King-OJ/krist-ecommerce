"use client";

import { validateEmail } from "@/lib/utils";
import { ChangeEvent, useState } from "react";

function FormLabelAndInput({
  name,
  type,
  placeholder,
  label,
  value,
  onChange,
  password,
}: {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  password?: string;
  onChange: (e: ChangeEvent) => void;
}) {
  const [error, setError] = useState("");

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
            if (name == "email") {
              if (value.length > 5 && !validateEmail(value)) {
                setError("Please provide a valid email");
              }
            } else if (name == "confirmationPassword") {
              if (value !== password) {
                setError("Passwords do not match");
              }
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
