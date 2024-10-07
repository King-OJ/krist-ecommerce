"use client";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ActionButton, FormLabelAndInput } from "@/components";
import { app } from "@/firebase";
import { validateEmail } from "@/lib/utils";

type AuthFormInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmationPassword: string;
};

function SignUp() {
  const initialInputsState: AuthFormInput = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmationPassword: "",
  };

  const [inputsState, setInputsStates] =
    useState<AuthFormInput>(initialInputsState);

  const [confirmation, setConfirmation] = useState("");

  function onInputsChange(e: ChangeEvent) {
    if (!e.target) return;
    const target = e.target as HTMLInputElement;
    const newValue = target.value;
    const inputName = target.name;
    setInputsStates({ ...inputsState, [inputName]: newValue });
  }

  const router = useRouter();

  async function handleSignUp(e: FormEvent) {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(
        getAuth(app),
        inputsState.email,
        inputsState.password
      );
      console.log(res);
      setInputsStates(initialInputsState);
      router.push("/sign-in");
    } catch (error) {
      // setError((error as Error).message);
    }
  }

  return (
    <div>
      <div className="flex relative h-screen lg:mr-20">
        <div className="hidden md:block md:flex-1 h-full">
          <Image
            src="/krist_signUp_img.png"
            alt="login guy"
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-full aspect-auto"
          />
        </div>
        <div className="h-full flex items-center w-full md:w-[50%] px-4 md:px-8">
          <form onSubmit={handleSignUp} className="flex-1">
            <h3 className="text-2xl font-bold mb-1 capitalize">
              create new account
            </h3>
            <h6 className="text-grey text-xs lg:text-[14px] font-light mb-6">
              Please enter details
            </h6>
            <div className="flex w-full space-x-4">
              <FormLabelAndInput
                name={"firstName"}
                type={"text"}
                placeholder={"Your first name "}
                label="first name"
                value={inputsState.firstName}
                onChange={onInputsChange}
              />
              <FormLabelAndInput
                name={"lastName"}
                type={"text"}
                placeholder={"Your last name"}
                label="last name"
                value={inputsState.lastName}
                onChange={onInputsChange}
              />
            </div>
            <FormLabelAndInput
              name={"email"}
              type={"email"}
              placeholder={"Your email"}
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
            <FormLabelAndInput
              name={"confirmationPassword"}
              type={"password"}
              placeholder={"Re-enter your password"}
              label="confirm password"
              value={inputsState.confirmationPassword}
              onChange={onInputsChange}
            />

            <div className="flex w-full justify-between text-xs">
              <div className="flex items-center space-x-2 font-light">
                <input
                  id="rememberMe"
                  type="checkbox"
                  className="h-4 w-4 inline-block checked:accent-black"
                />
                <label htmlFor="rememberMe">
                  I agree to{" "}
                  <span className="font-semibold">Terms and Condition</span>
                </label>
              </div>
            </div>

            <div className="mt-8">
              <ActionButton
                title={"Sign Up"}
                disabled={
                  !Object.values(inputsState).every((field, index) => {
                    if (index == 2) {
                      if (field.length < 6) {
                        return false;
                      } else {
                        return true;
                      }
                    }
                    if (index == 3) {
                      if (field !== inputsState.password) {
                        return false;
                      } else {
                        return true;
                      }
                    }
                    return field !== "";
                  })
                }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
