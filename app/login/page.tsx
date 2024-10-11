"use client";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ActionButton, FormLabelAndInput } from "@/components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebase";
import { toast } from "react-toastify";
import db from "@/lib/firestore";
import { doc, getDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { fetchUserInfo } from "@/lib/utils";

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
  const [isLoading, setIsLoading] = useState(false);

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
    if (formInputs.email == "" || formInputs.password == "") {
      toast.error("Please fill out all fields!");
      return;
    }
    setIsLoading(false);
    try {
      setIsLoading(true);
      const credential = await signInWithEmailAndPassword(
        getAuth(app),
        formInputs.email,
        formInputs.password
      );

      const docSnap = await fetchUserInfo(credential.user.uid);

      const idToken = await credential.user.getIdToken();

      await fetch("/api/login", {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      toast.success(
        `Login Successful! Welcome ${
          docSnap.data()?.firstName.charAt(0).toUpperCase() +
          docSnap.data()?.firstName.slice(1)
        }`
      );

      router.push("/");
      router.refresh();
    } catch (error: any) {
      if (error as FirebaseError) {
        toast.error(
          (error.code as string).substring(5).charAt(0).toLocaleUpperCase() +
            (error.code as string).substring(5).slice(1)
        );
      } else {
        toast.error((error as Error).message);
      }
    } finally {
      setIsLoading(false);
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
                title={isLoading ? "logging in" : "login"}
                disabled={isLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
