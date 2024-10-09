"use client";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ActionButton, FormLabelAndInput } from "@/components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebase";
import { toast } from "react-toastify";

type AuthFormInput = {
  email: string;
  password: string;
};

function Login() {
  const initialInputsState: AuthFormInput = {
    email: "",
    password: "",
  };

  const [formInputs, setInputsStates] =
    useState<AuthFormInput>(initialInputsState);

  function onInputsChange(e: ChangeEvent) {
    if (!e.target) return;
    const target = e.target as HTMLInputElement;
    const newValue = target.value;
    const inputName = target.name;
    setInputsStates({ ...formInputs, [inputName]: newValue });
  }

  const router = useRouter();

  async function handleSignIn(e: FormEvent) {
    e.preventDefault();

    try {
      const credential = await signInWithEmailAndPassword(
        getAuth(app),
        formInputs.email,
        formInputs.password
      );

      const idToken = await credential.user.getIdToken();

      await fetch("/api/login", {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      toast("Login Successful! Redirecting");
      setTimeout(() => {
        router.push("/");
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
            src="/krist_signIn_img.png"
            alt="login guy"
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-full aspect-auto"
          />
        </div>
        <div className="h-full flex items-center md:max-w-none md:mx-0 w-full md:w-[50%] px-4 md:px-8">
          <form onSubmit={handleSignIn} className="flex-1">
            <h3 className="text-2xl font-bold mb-1 capitalize">
              welcome &#x1F44B;
            </h3>
            <h6 className="text-grey text-xs lg:text-[14px] font-light mb-6">
              Please login here
            </h6>
            <FormLabelAndInput
              name={"email"}
              type={"email"}
              placeholder={"Enter your email"}
              label="email address"
              value={formInputs.email}
              onChange={onInputsChange}
            />
            <FormLabelAndInput
              name={"password"}
              type={"password"}
              placeholder={"Enter your password"}
              label="password"
              value={formInputs.password}
              onChange={onInputsChange}
            />
            <div className="flex w-full justify-between text-xs mt-4">
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
            <div className="mt-8">
              <ActionButton
                title={"login"}
                disabled={
                  !Object.values(formInputs).every((field, index) => {
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
