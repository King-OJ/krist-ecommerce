"use client";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ActionButton, FormLabelAndInput } from "@/components";
import { app } from "@/firebase";
import { toast } from "react-toastify";

type AuthFormInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmationPassword: string;
};

function Register() {
  const initialInputsState: AuthFormInput = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmationPassword: "",
  };

  const [formInputs, setFormInputs] =
    useState<AuthFormInput>(initialInputsState);

  function onInputsChange(e: ChangeEvent) {
    if (!e.target) return;
    const target = e.target as HTMLInputElement;
    const newValue = target.value;
    const inputName = target.name;
    setFormInputs({ ...formInputs, [inputName]: newValue });
  }

  const router = useRouter();

  async function handleSignUp(e: FormEvent) {
    e.preventDefault();

    if (formInputs.password !== formInputs.confirmationPassword) {
      toast("Passwords don't match");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(
        getAuth(app),
        formInputs.email,
        formInputs.password
      );
      console.log(res);
      setFormInputs(initialInputsState);
      toast("You're signed up! Redirecting to login.");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error) {
      toast((error as Error).message);
      console.log(error);
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
            <h6 className="text-grey text-xs lg:text-[14px] font-light mb-2">
              Please enter details
            </h6>
            <div className="flex w-full space-x-4">
              <FormLabelAndInput
                name={"firstName"}
                type={"text"}
                placeholder={"Your first name "}
                label="first name"
                value={formInputs.firstName}
                onChange={onInputsChange}
              />
              <FormLabelAndInput
                name={"lastName"}
                type={"text"}
                placeholder={"Your last name"}
                label="last name"
                value={formInputs.lastName}
                onChange={onInputsChange}
              />
            </div>
            <FormLabelAndInput
              name={"email"}
              type={"email"}
              placeholder={"Your email"}
              label="email address"
              value={formInputs.email}
              onChange={onInputsChange}
            />
            <div>
              <FormLabelAndInput
                name={"password"}
                type={"password"}
                placeholder={"Enter your password"}
                label="password"
                value={formInputs.password}
                onChange={onInputsChange}
              />
              <p className="text-xs mt-1">
                Password length must be atleast 6 characters
              </p>
            </div>

            <FormLabelAndInput
              name={"confirmationPassword"}
              type={"password"}
              placeholder={"Re-enter your password"}
              label="confirm password"
              value={formInputs.confirmationPassword}
              onChange={onInputsChange}
            />

            <div className="flex w-full justify-between text-xs mt-4">
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
                  !Object.values(formInputs).every((field, index) => {
                    if (index == 2) {
                      if (field.length < 6) {
                        return false;
                      } else {
                        return true;
                      }
                    }
                    if (index == 3) {
                      if (field !== formInputs.password) {
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

export default Register;
