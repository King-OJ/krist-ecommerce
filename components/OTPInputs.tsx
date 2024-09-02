"use client";

import { useContext, useRef, useState } from "react";
import ActionButton from "./ActionButton";
import { ModalContext, ModalContextType } from "./ClientLayout";

type OTPInputProps = {
  length?: number;
  onComplete?: () => void;
};

export default function OTPInputs({ length = 5, onComplete }: OTPInputProps) {
  const { openModal } = useContext(ModalContext) as ModalContextType;

  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));

  const [OTP, setOTP] = useState<string[]>(Array(length).fill(""));

  function handleChange(input: string, index: number) {
    let OTPvalues = [...OTP];
    OTPvalues[index] = input;
    setOTP(OTPvalues);

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }
  }

  return (
    <>
      <div className="flex justify-center w-full md:justify-start">
        <div className="flex items-center space-x-2">
          {Array.from({ length }, (_, index) => (
            <input
              key={index}
              type="string"
              maxLength={1}
              value={OTP[index]}
              onInput={() => {
                const value = OTP[index];
                setOTP([...OTP, value.replace(/[^0-9]/g, "")]);
              }}
              onChange={(ev) => handleChange(ev.target.value, index)}
              ref={(ref) => {
                if (inputRef.current) {
                  inputRef.current[index] = ref as HTMLInputElement;
                }
              }}
              className={`${
                OTP[index].length < 1
                  ? "border-opacity-40"
                  : "border-opacity-100"
              } h-8 w-8 p-2 border border-black grid place-content-center font-semibold rounded-lg outline-none`}
            />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <ActionButton
          title={"verify"}
          disabled={!OTP.every((input) => input !== "")}
          action={openModal}
        />
      </div>
    </>
  );
}
