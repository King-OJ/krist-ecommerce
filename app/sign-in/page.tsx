"use client";
import ActionButton from "@/components/ActionButton";
import FormLabelAndInput from "@/components/FormLabelAndInput";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { AuthFormInput } from "../sign-up/page";

function SignIn() {
  const inputs: AuthFormInput = {
    email: "",
    password: "",
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
            src="/krist_signIn_img.png"
            alt="login guy"
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-full aspect-auto"
          />
        </div>
        <div className="h-full flex items-center md:max-w-none md:mx-0 w-full md:w-[50%] px-4 md:px-8">
          <form action="#" className="flex-1">
            <h3 className="text-2xl font-bold mb-[1px] capitalize">
              welcome &#x1F44B;
            </h3>
            <h6 className="text-neutral-400 text-xs lg:text-[14px] font-light mb-6">
              Please login here
            </h6>
            <FormLabelAndInput
              name={"email"}
              type={"email"}
              placeholder={"Enter your email"}
              label="email address"
              value={inputsState.email}
              onChange={onInputsChange}
            />
            <FormLabelAndInput
              name={"password"}
              type={"password"}
              placeholder={"Enter your password"}
              label="password"
              value={inputsState.password}
              onChange={onInputsChange}
            />
            <div className="flex w-full justify-between text-xs">
              <div className="flex items-center space-x-2 font-light">
                <input
                  id="rememberMe"
                  type="checkbox"
                  className="h-4 w-4 inline-block checked:accent-black"
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>

              <Link href={"/forgot-password"} className="font-thin">
                Forgot password?
              </Link>
            </div>

            <ActionButton
              title={"login"}
              action={() => console.log(inputsState)}
              disabled={
                !Object.values(inputsState).every((field, index) => {
                  if (index == 1) {
                    if (field.length < 6) {
                      return false;
                    } else {
                      return true;
                    }
                  }
                  return field !== "";
                })
              }
            />
          </form>
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

export default SignIn;
