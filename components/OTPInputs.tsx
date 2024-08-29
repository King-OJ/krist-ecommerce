"use client";

import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";

type OTPInputProps = {
  length?: number;
  onComplete?: (pin: string) => void;
};

export default function OTPInputs({ length = 5, onComplete }: OTPInputProps) {
  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));

  const [OTP, setOTP] = useState<string[]>(Array(length).fill(""));

  function handleChange(input: string, index: number) {
    let OTPvalues = [...OTP];
    OTPvalues[index] = input;
    setOTP(OTPvalues);

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  }

  return (
    <div className="flex items-center space-x-2">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          type="number"
          maxLength={1}
          value={OTP[index]}
          onChange={(ev) => handleChange(ev.target.value, index)}
          ref={(ref) => {
            if (inputRef.current) {
              inputRef.current[index] = ref as HTMLInputElement;
            }
          }}
          className="h-8 w-8 p-2 border border-black grid place-content-center font-semibold rounded-lg outline-none"
        />
      ))}
    </div>
  );
}
