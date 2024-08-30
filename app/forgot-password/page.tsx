"use client";
import ActionButton from "@/components/ActionButton";
import FormLabelAndInput from "@/components/FormLabelAndInput";
import Image from "next/image";
import Link from "next/link";
import { AuthFormInput } from "../sign-up/page";
import { ChangeEvent, useState } from "react";

export default function page() {
  const inputs: AuthFormInput = {
    email: "",
  };

  const [inputsState, setInputsStates] = useState<AuthFormInput>(inputs);

  function onInputsChange(e: ChangeEvent) {
    if (!e.target) return;
    const target = e.target as HTMLInputElement;
    const newValue = target.value;
    const inputName = target.name;
    setInputsStates({ ...inputsState, [inputName]: newValue });
  }

  return (
    <main>
      <div className="flex relative h-screen lg:mr-12">
        <div className="hidden md:block md:flex-1 h-full">
          <Image
            src="/krist_forgotpassword_img.png"
            alt="girl"
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-full aspect-auto"
          />
        </div>
        <div className="h-full flex items-center md:max-w-none md:mx-0 w-full md:w-[50%] px-4 md:px-8">
          <div className="flex-1">
            <div className="text-right md:text-left">
              <Link href={"/sign-in"} className="block text-sm font-light mb-6">
                Back
              </Link>
            </div>
            <form action="#" className="w-full">
              <h3 className="text-2xl font-bold mb-[1px] capitalize">
                forgot password
              </h3>
              <h6 className="text-neutral-400 text-xs lg:text-[14px] font-light mb-6">
                Enter your registered email address. We will send you a code to
                reset your password.
              </h6>
              <FormLabelAndInput
                name={"email"}
                type={"email"}
                placeholder={"Enter your email"}
                label="email address"
                value={inputsState.email}
                onChange={onInputsChange}
              />

              <ActionButton
                title={"send OTP"}
                action={() => console.log(inputsState)}
                disabled={
                  !Object.values(inputsState).every((field) => field !== "")
                }
              />
            </form>
          </div>
        </div>
        <div className="absolute left-6 top-6 md:left-10 md:top-10 flex items-center space-x-[2px]">
          <Image
            src="/krist_logo.png"
            alt="kriss logo"
            width={100}
            height={100}
            className="w-auto h-auto"
          />
          <h3 className="text-2xl">Krist</h3>
        </div>
      </div>
    </main>
  );
}
